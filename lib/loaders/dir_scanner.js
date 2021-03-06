'use strict';

var loader = require('hive-loader');
var Loader = loader.loader;

var dir_handler = require('./../handlers/dir');
var file_handler = require('./../handlers/file');

function Dir_Scanner(config, cb) {

	var fh = file_handler({name_filter: config.name_filter});
	var dh = dir_handler({});

	return new Loader(
		[
			{ files:  [],
				dirs: [],
				name: 'dir_scanner'}
		],
		[
			{
				core: {},
				handlers: [fh, dh]
			},
			config
		],
		function (err, loader) {
			fh.config().set('target', loader);
			dh.config().set('target', loader);
			if (cb) cb(err, loader);
		});
}

module.exports = Dir_Scanner;