const util = require('util');
const chalk = require('chalk');

const MAX_JSON_DEPTH=6;
const MAX_ARRAY_LENGTH=200;

Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

module.exports = {

	_objectPrettyPrint: function(o) {
		return util.inspect(o, {
      showHidden: false,
      maxArrayLength: MAX_ARRAY_LENGTH,
      depth: MAX_JSON_DEPTH,
      colors: true,
    });
	},

	_genericLog: function (prefix,colour="black",args=[],addLineInfo=true) {
		var txt = null !== prefix ? prefix : '';
		if (true === addLineInfo) {
			txt += ": " + __stack[2].getFileName() + ":" + __stack[2].getLineNumber() + ": ";
		}

		for (var i=0; i<args.length; i++) {
			txt += 'object' === typeof args[i] ? this._objectPrettyPrint(args[i]) : args[i];
		}
		console.log( chalk[colour](txt) );
	},

	debug: function() {
		this._genericLog('debug','grey',arguments)
	},

	info: function() {
		this._genericLog('info','yellow',arguments)
	},

	log: function() {
		this._genericLog('log','green',arguments)
	},

	warn: function() {
		this._genericLog('warn','blue',arguments)
	},

	error: function() {
		this._genericLog('error','red',arguments)
	},

	fatal: function() {
		this._genericLog('fatal','red',arguments);
		this._genericLog('fatal','red',new Error().stack);
  	process.exit();
	},

	banner: function() {
		this._genericLog(null,'magenta',["*****************************"],false);
		this._genericLog('banner','magenta',arguments)
		this._genericLog(null,'magenta',["*****************************"],false);
	},


}




