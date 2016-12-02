'use strict'

//SYNC Version

const fs = require("fs");
const jsonfile = require("jsonfile");


function readJ(filePath) {
    jsonfile.readFile(filePath, function (err, data) {
        if (err) {
            console.log("Error reading File");
            return callback(err);
        }
        console.log("Read JSON file OK");
        return callback(null, JSON.parse(data));
    });
};


function writeJ(filePath, callback) {
    jsonfile.readFile(filePath, data, function (err) {
        if (err) {
            return callback(err);
        }
        return callback(null);
    });
};

function readC(filePath, callback) {
    return callback;
};

function writeC(filePath, callback) {
    return callback;
};


// Export the modules
module.exports = {
    readJ,
    writeJ,
    readC,
    writeC
};

