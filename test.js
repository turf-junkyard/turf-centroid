var test = require('tape');
var center = require('./');

var fc = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              60.46875,
              39.90973623453719
            ],
            [
              60.46875,
              47.27922900257082
            ],
            [
              70.6640625,
              47.27922900257082
            ],
            [
              70.6640625,
              39.90973623453719
            ],
            [
              60.46875,
              39.90973623453719
            ]
          ]
        ]
      }
    }
  ]
};

test('center', function(t){
  var centered = center(fc);

  t.ok(centered, 'should return the proper center for a FeatureCollection');
  t.deepEqual(centered.geometry.coordinates, [65.56640625, 43.59448261855401]);

  var polyCenter = center(fc.features[0])
  t.ok(polyCenter, 'should return the proper center for a Polygon');
  t.deepEqual(centered, polyCenter);

  t.end();
});
