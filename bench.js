var centroid = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var fc = require('./geojson/fc');

var suite = new Benchmark.Suite('turf-centroid');
suite
  .add('turf-centroid',function () {
    centroid(fc);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();