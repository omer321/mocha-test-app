REPORTER = spec

test:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \

test-pi:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		test/spec/pi_test

test-not-used:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		test/spec/pi_test.js
		--watch

.PHONY: test test-pi