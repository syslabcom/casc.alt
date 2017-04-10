.PHONY: all

all: bundle

node_modules/.bin/grunt:
	npm install

bundle: node_modules/.bin/grunt
	node_modules/.bin/grunt
