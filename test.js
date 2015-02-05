var test = require('tape');
var center = require('./');
var fs = require('fs');

var boxFC = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/box.geojson'));
var blockFC = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/block.geojson'));

test('center', function(t){
  var boxFcCenter = center(boxFC);
  t.ok(boxFcCenter, 'should return the proper center for a FeatureCollection');
  t.deepEqual(boxFcCenter.geometry.coordinates, [65.56640625, 43.59448261855401]);

  var blockFcCenter = center(blockFC.features[0]);
  t.ok(blockFcCenter, 'should return the proper center for a FeatureCollection');
  t.deepEqual(blockFcCenter.geometry.coordinates, [-114.02900261988646,51.05007001220118]);

  boxFC.features.push(boxFcCenter);
  blockFC.features.push(blockFcCenter);
  fs.writeFileSync(__dirname+'/fixtures/out/box_out.geojson', JSON.stringify(boxFC,null,2));
  fs.writeFileSync(__dirname+'/fixtures/out/block_out.geojson', JSON.stringify(blockFC,null,2));

  t.end();
});
