'use strict'

const random = require("./local_modules/read_sensors");
const rw_file = require("./local_modules/rw_file");
const log = require("./local_modules/epiclog");

//const writeJSON = require("./local_modules/write_json.js");

const delaySeconds = 1;
const low = 10;
const high = 90;
const configFile = "./sensor_config.json";

log.banner("or 8");
log.log("Asking to read JSON file");

// RWI: you can read JSON files synchronously by using require
var sensorConfigData = require(configFile);
//var sensorConfigData = rw_file.readJ(configFile);

log.info("Returned from reading file: sensorConfigData=",sensorConfigData);

var giPass=0;
function loop() {

    // Display some dummy sensor reading for testing.
    log.debug("Ramdom Data : " + random(low, high).toFixed(3));

    //Display some JSON Data for testing.
    log.log("JSON Data = " + sensorConfigData.Sensors.Temp[1].Name);
    setTimeout(loop, delaySeconds * 1000);

    if (5 === ++giPass) {
    	log.fatal("STOPPING COZ I FEEL LIKE IT");
    }
}

loop();