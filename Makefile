BOWER 		    ?= node_modules/.bin/bower
BUNDLE          ?= $(BUNDLER_BIN_DIR)/bundle
BUNDLEPLONEID	= casc
BUNDLER         ?= $(BUNDLER_BIN_DIR)/bundler
BUNDLER_BIN_DIR ?= $(BUNDLER_DIR)/bin
BUNDLER_DIR     ?= .bundle


all:: jekyll
default: all

########################################################################
## Install dependencies

stamp-bundler:
	mkdir -p $(BUNDLER_BIN_DIR) && gem install --user-install bundler -v 2.1.4 --bindir=$(BUNDLER_BIN_DIR) --no-wrappers 2>&1 | grep -Ev 'PATH|not run'
	$(BUNDLER) install --path $(BUNDLER_DIR)
	touch stamp-bundler

stamp-npm: package.json
	npm install
	touch stamp-npm

stamp-bower: stamp-npm
	$(BOWER) install
	touch stamp-bower

clean::
	rm -rf stamp-npm stamp-bower stamp-bundler .bundler/ node_modules src/bower_components bundles/*

extra-clean:: clean
	rm -rf ~/.cache/bower


########################################################################
## Bundle generation

build: jekyll
jekyll: stamp-bundler
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

node_modules/.bin/grunt:
	npm install

bundle: node_modules/.bin/grunt
	node_modules/.bin/grunt

.PHONY: all bundle extra-clean clean serve
