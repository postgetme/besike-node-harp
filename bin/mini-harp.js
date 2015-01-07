#!/usr/bin/env node

var createMiniHarp = require('..');
var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));
var port = argv.port || 4000;
var dir = argv._[0] || process.cwd();

var app = createMiniHarp(dir);

console.log('Starting mini-harp on http://localhost:' + port);
app.listen(port);
