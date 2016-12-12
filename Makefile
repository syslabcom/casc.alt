BOWER 		?= node_modules/.bin/bower
JSHINT 		?= node_modules/.bin/jshint
PEGJS		?= node_modules/.bin/pegjs
PHANTOMJS	?= node_modules/.bin/phantomjs
BINDIR      ?= .bundle/bin
# XXX: See stamp-bundler below.
# BUNDLE      ?= $(BINDIR)/bundle
BUNDLE      ?= bundle

PATTERNS	= src/bower_components/patternslib
SOURCES		= $(wildcard $(PATTERNS)/src/*.js) $(wildcard $(PATTERNS)/src/pat/*.js) $(wildcard $(PATTERNS)/src/lib/*.js)
BUNDLES		= bundles/patterns.js bundles/patterns.min.js

GENERATED	= $(PATTERNS)/src/lib/depends_parse.js

JSHINTEXCEPTIONS = $(GENERATED) \
		   $(PATTERNS)/src/lib/dependshandler.js \
		   $(PATTERNS)/src/lib/htmlparser.js \
		   $(PATTERNS)/src/pat/skeleton.js
CHECKSOURCES	= $(filter-out $(JSHINTEXCEPTIONS),$(SOURCES))

RELEASE         = $(shell git describe --tags)
RELEASE_DIR		= release/prototype
RELEASE_TARBALL = release/prototype-$(RELEASE).tar.gz

# This directory is relative to ./prototype dir.
DIAZO_DIR   = ../src/unibw/theme/static

LATEST          = $(shell cat LATEST)
BUNDLEPLONEID	= casc
BUNDLEDISTNAME  = casc-bundle
BUNDLEDISTURL	= https://products.syslab.com/packages/$(BUNDLEDISTNAME)/$(LATEST)/$(BUNDLEDISTNAME)-$(LATEST).tar.gz

all:: jekyll
default: all

########################################################################
## Install dependencies

stamp-npm: package.json
	npm install
	touch stamp-npm

stamp-bower: stamp-npm
	$(BOWER) install
	touch stamp-bower

stamp-bundler:
# ignore WARNING:  You don't have /app/prototype/.bundle/bin in your PATH, gem executables will not run.
	mkdir -p $(BINDIR) && gem install --user-install bundler --bindir=$(BINDIR) --no-wrappers 2>&1 | grep -Ev 'PATH|not run'

	# XXX This can be used to install bundler but doesn't work on Jenkins :(
	# $(BUNDLE) install --path .bundle --binstubs $(BINDIR)
	# Instead we now rely on Bundler being installed globally.
	$(BUNDLE) install --path .bundle --binstubs
	touch stamp-bundler

clean::
	rm -rf stamp-npm stamp-bower stamp-bundler node_modules src/bower_components bundles/*

extra-clean:: clean
	rm -rf ~/.cache/bower

check-clean:
	test -z "$(shell git status --porcelain)" || (git status && echo && echo "Workdir not clean." && false) && echo "Workdir clean."

########################################################################
## Tests

jshint: stamp-npm
	$(JSHINT) --config jshintrc $(CHECKSOURCES) build.js


########################################################################
## Bundle generation

bundle: stamp-bower $(SOURCES) build.js
	node_modules/.bin/r.js -o build.js optimize=none
	node_modules/.bin/grunt uglify
	mkdir -p bundles
	mv bundle.js bundles/$(BUNDLEDISTNAME)-$(RELEASE).js
	ln -sf $(BUNDLEDISTNAME)-$(RELEASE).js bundles/$(BUNDLEPLONEID).js
	mkdir -p _site/bundles
	cp bundles/$(BUNDLEDISTNAME)-$(RELEASE).js _site/bundles/$(BUNDLEPLONEID).js
	mv bundle.min.js bundles/$(BUNDLEDISTNAME)-$(RELEASE).min.js
	ln -sf $(BUNDLEDISTNAME)-$(RELEASE).min.js bundles/$(BUNDLEPLONEID).min.js
	cp bundles/$(BUNDLEDISTNAME)-$(RELEASE).min.js _site/bundles/$(BUNDLEPLONEID).min.js

dev-bundle bundle.js: stamp-bower $(SOURCES) build.js
	@node_modules/.bin/r.js -o build.js optimize=none
	@mkdir -p bundles
	@cp bundle.js bundles/$(BUNDLEPLONEID)-dev.js
	@mv bundle.js bundles/$(BUNDLEPLONEID).js
	@echo "Done. See bundles/$(BUNDLEPLONEID)-dev.js and bundles/$(BUNDLEPLONEID).js"

jsrelease: bundle
	# This one is used by developers only and can be used separately to do a
	# version for Designers only
	mkdir -p release
	cp bundles/$(BUNDLEDISTNAME)-$(RELEASE).js release
	cp bundles/$(BUNDLEDISTNAME)-$(RELEASE).min.js release
	tar cfz release/$(BUNDLEDISTNAME)-$(RELEASE).js.tar.gz -C release $(BUNDLEDISTNAME)-$(RELEASE).js $(BUNDLEDISTNAME)-$(RELEASE).min.js
	curl -X POST -F 'content=@release/$(BUNDLEDISTNAME)-$(RELEASE).js.tar.gz' 'https://products.syslab.com/?name=$(BUNDLEDISTNAME)&version=$(RELEASE)&:action=file_upload'
	rm release/$(BUNDLEDISTNAME)-$(RELEASE).js.tar.gz
	echo "Upload done."
	echo "$(RELEASE)" > LATEST
	git add LATEST
	git commit -m "distupload: updated latest file to recent js bundle"
	git push

fetchrelease:
	@mkdir -p bundles
	@curl $(BUNDLEDISTURL) -o bundles/$(BUNDLEDISTNAME)-$(LATEST).tar.gz
	@cd bundles && tar xfz $(BUNDLEDISTNAME)-$(LATEST).tar.gz && rm $(BUNDLEDISTNAME)-$(LATEST).tar.gz
	@cd bundles && if test -e $(BUNDLEPLONEID).js; then rm $(BUNDLEPLONEID).js; fi
	@cd bundles && if test -e $(BUNDLEPLONEID).min.js; then rm $(BUNDLEPLONEID).min.js; fi
	@cd bundles && ln -sf $(BUNDLEDISTNAME)-$(LATEST).js $(BUNDLEPLONEID).js
	@cd bundles && ln -sf $(BUNDLEDISTNAME)-$(LATEST).min.js $(BUNDLEPLONEID).min.js
	@echo Done. See the new Javascript bundles in prototype/bundles

designerhappy: fetchrelease
	@echo "The latest js bundle has been downloaded to ./bundles. You might want to run jekyll. Designer, you can be happy now."

build: jekyll
jekyll: #fetchrelease stamp-bundler
	$(BUNDLE) exec jekyll build

dev: stamp-bower jekyll
	# Set up development environment
	rm -rf _site/bundles
	ln -s ../src _site/bundles
	rm -f _site/bundles/$(BUNDLEPLONEID).js
	ln -s bower_components/requirejs/require.js _site/bundles/$(BUNDLEPLONEID).js
	rm -f _site/main.js
	cp main.js src/main.js
	sed -i -e "s|baseUrl: 'src',|baseUrl: '/bundles/',|" src/main.js

########################################################################
# For development (i.e. serving files)
serve: demo-run
demo-run: stamp-bundler
	$(BUNDLE) exec jekyll serve --no-watch --skip-initial-build --host 0.0.0.0

# for http://casc.syslab.com deployment
demo-build: jekyll

.PHONY: all bundle extra-clean clean jshint check-clean release serve
