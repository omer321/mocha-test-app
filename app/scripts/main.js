require.config({
    paths: {
        jquery          : '../bower_components/jquery/jquery',
        'backbone'      : '../bower_components/backbone/backbone',
        'backbone-gcl'  : '../bower_components/backbone-gcl/backbone-gcl',
        'chai'          : '../bower_components/chai/chai',
        'mocha'         : '../bower_components/mocha/mocha',
//      'mocha-tests'   : '../../test/spec/pi_test',
        'mocha-tests'   : 'pi_test_extra',
        bootstrap       : 'vendor/bootstrap'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        mocha: {
            init: function () {
                this.mocha.setup('bdd');
                return this.mocha;
            }
        }
    }
});

require(['require', 'chai', 'mocha', 'jquery', 'mocha-tests'],
    function(require, chai, mocha, $, app, mochaTests) {

        'use strict';

        // Chai
        var assert = chai.assert;
        var should = chai.should();
        var expect = chai.expect;

        // Globals Mocha
        mocha.setup('bdd');

        require([
            mocha,
            assert,
            should,
            expect,
            mochaTests
        ], function(require) {
            // Start Runner
            if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
            else { mocha.run(); }
        });

        // use app here
        console.log(app);
        console.log('Running jQuery %s', $().jquery);
    });
