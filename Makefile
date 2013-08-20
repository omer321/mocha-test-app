REPORTER = spec

test:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \

test-pi:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--growl \
		--watch

.PHONY: test test-pi