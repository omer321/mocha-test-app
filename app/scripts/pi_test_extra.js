define(['mocha'], function (mocha) {
    'use strict';

    var chai   = require('chai');
    var assert = chai.assert;

    describe('pi_digits()', function(){
        it('should return PI with length of 5 digits', function(){
            chai.assert.equal(pi_digits(5).replace('.','').length, 5);
        });
        it('should return PI with length of 10 digits', function(){
            chai.assert.equal(pi_digits(10).replace('.','').length, 10);
        });
    });

    describe('foo()', function(){
        it('foo test 1', function(){
            chai.assert.equal(pi_digits(5).replace('.','').length, 5);
        });
        it('foo test 2', function(){
            chai.assert.equal(pi_digits(10).replace('.','').length, 10);
        });
    });
});