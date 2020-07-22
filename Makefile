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

clean::
	rm -rf stamp-npm stamp-bower stamp-bundler node_modules src/bower_components bundles/*

extra-clean:: clean
	rm -rf ~/.cache/bower


########################################################################
## Bundle generation

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

node_modules/.bin/grunt:
	npm install

bundle: node_modules/.bin/grunt
	node_modules/.bin/grunt

.PHONY: all bundle extra-clean clean jshint check-clean release serve
