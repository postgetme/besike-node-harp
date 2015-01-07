#!/usr/bin/env node
var parseArgs = require("minimist");
var createMiniHarp = require("mini-harp")
  , app = createMiniHarp();

var argv = parseArgs(process.argv.slice(2));
var port = argv.port || 4000;

console.log("Starting mini-harp on http://localhost:" + port);
app.listen(port);

