BUNDLER_DIR     ?= .bundle
BUNDLER_BIN_DIR ?= $(BUNDLER_DIR)/bin
BUNDLER         ?= $(BUNDLER_BIN_DIR)/bundler
BUNDLE          ?= $(BUNDLER_BIN_DIR)/bundle
BUNDLEPLONEID	= casc
GRUNT           ?= npx grunt

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

.PHONY: clean
clean::
	rm -rf stamp-npm stamp-bundler node_modules bundles/*


########################################################################
## Bundle generation


.PHONY: build
build: jekyll
jekyll: stamp-bundler
	$(BUNDLE) exec jekyll build

.PHONY: dev
dev: jekyll
	# Set up development environment
	rm -rf _site/bundles
	ln -s ../src _site/bundles
	rm -f _site/bundles/$(BUNDLEPLONEID).js
	rm -f _site/main.js
	cp main.js src/main.js
	sed -i -e "s|baseUrl: 'src',|baseUrl: '/bundles/',|" src/main.js

########################################################################
# For development (i.e. serving files)
.PHONY: serve
serve: demo-run
demo-run: stamp-bundler
	$(BUNDLE) exec jekyll serve --no-watch --skip-initial-build --host 0.0.0.0

# for http://casc.syslab.com deployment
demo-build: jekyll

.PHONY: bundle
bundle: stamp-npm
	$(GRUNT)

#
