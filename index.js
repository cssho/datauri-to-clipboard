#!/usr/bin/env node
var data_uri = require('data-uri');
var program = require('commander');
var fs = require('fs');
var cp = require('copy-paste');

program
    .version('1.0.0')
    .usage('<filepath>')
    .parse(process.argv);

if (!program.args.length) {
    program.help();
} else {
    var filePath = program.args[0];
    if (fs.existsSync(filePath)) {
        data_uri.encode(filePath, function(results) {
            cp.copy(results[filePath].dataUri);
        });
    } else {
        console.log('filepath : <' + filePath + '>');
        console.log('is not found.');
    }
}