require.config({
    paths: {
        jquery          : '../bower_components/jquery/jquery',
        'backbone'      : '../bower_components/backbone/backbone',
        'backbone-gcl'  : '../bower_components/backbone-gcl/backbone-gcl',
        'chai'          : '../bower_components/chai/chai',
        'mocha'         : '../bower_components/mocha/mocha'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
                exports: 'Backbone'
        }
    }
});

require([
    // FILE(S) BEING TESTED
    'require',
    'chai',
    'mocha',
    'pi_test_extra'
], function(mocha) {
    // INITIALIZE THE RUN
    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    }
//    else {
//        mocha.run();
//    }
});