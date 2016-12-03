'use strict'

const gpio = require("rpi-gpio");

var pin;

function dummyReading(low, high) {
    return Math.random() * (high - low) + low;
};


function readSensor(GPIO_Pin) {
    pin = GPIO_Pin;
    gpio.setup(pin, gpio.DIR_IN, readInput); 
}

function readInput() {
    gpio.read(pin, function (err, value) {
        console.log("The Value read from Pin " + pin + " is : " + value);
    });
};

