//(function () {
if (typeof define == 'undefined') {
    module.exports = 'app/bower_components/requirejs'
}
//    define(['mocha'], function (mocha) {
        'use strict';
//
//        var chai   = require('chai');
//        var assert = chai.assert;
//
        describe('pi_digits()', function(){
            it('should return PI with length equal to argument', function(){
                chai.assert.equal(pi_digits(5).replace('.','').length, 5);
            });
        });
//    });
//});