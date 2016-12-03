'use strict'

//SYNC Version

const fs = require("fs");
const jsonfile = require("jsonfile");

var content;

function readJ(filePath) {

    if (fs.existsSync(filePath)) {
        console.log("File loaded fine.");

        try {
            var data = jsonfile.readFileSync(filePath);
            console.log(data);
            return data;
        }
        catch (err) {
            console.log("There has been an error parsing your JSON. - err="+err);
            process.exit(1);
        };
    };
};



function writeJ(filePath, data) {

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

