'use strict'

//  Just generate some dummy data for testing. JB

module.exports = function (low, high) {
    return Math.random() * (high - low) + low;
};

