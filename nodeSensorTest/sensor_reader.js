'use strict'

const random = require("./local_modules/read_sensors.js");
const rw_file = require("./local_modules/rw_file.js");

//const writeJSON = require("./local_modules/write_json.js");

const delaySeconds = 1;
const low = 10;
const high = 90;
const configFile = "./sensor_config.json";

console.log("Asking to read JSON file");
var sensorConfigData = rw_file.readJ(configFile);
console.log("Returned from reading file");


function loop() {

    // Display some dummy sensor reading for testing.
    console.log("Ramdom Data : " + random(low, high));

    //Display some JSON Data for testing.
    console.log("JSON Data = " + sensorConfigData.Sensors.Temp[1].Name);
    setTimeout(loop, delaySeconds * 1000);
}

loop();