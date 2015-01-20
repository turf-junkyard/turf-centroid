var test = require('tape');
var center = require('./');
var fc = require('./geojson/fc');

test('center', function(t){
  var centered = center(fc);

  t.ok(centered, 'should return the proper center for a FeatureCollection');
  t.deepEqual(centered.geometry.coordinates, [96.3, -0.25]);

  t.end();
});
