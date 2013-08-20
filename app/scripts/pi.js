'use strict';

var pi_digits = function(num){
    var pi = String(Math.PI).substring(0, num + 1);
    return pi;
}