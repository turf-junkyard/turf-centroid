# turf-centroid

[![build status](https://secure.travis-ci.org/Turfjs/turf-centroid.png)](http://travis-ci.org/Turfjs/turf-centroid)

turf centroid module


### `turf.centroid(fc)`

Takes a Feature or FeatureCollection of any type and calculates the centroid using the geometric mean of all vertices.
This lessens the effect of small islands and artifacts when calculating
the centroid of a set of polygons.


### Parameters

| parameter | type              | description                                |
| --------- | ----------------- | ------------------------------------------ |
| `fc`      | FeatureCollection | a Feature or FeatureCollection of any type |


### Example

```js
var poly = turf.polygon([[
	[105.818939,21.004714],
	[105.818939,21.061754],
	[105.890007,21.061754],
	[105.890007,21.004714],
	[105.818939,21.004714]
]]);

var centroidPt = turf.centroid(poly);

var result = turf.featurecollection([poly, centroidPt]);

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-centroid
```

## Tests

```sh
$ npm test
```

