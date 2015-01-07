var explode = require('turf-explode');
var point = require('turf-point');

/**
 * Calculates the centroid of a polygon Feature or
 * FeatureCollection using the geometric mean of all vertices.
 * This lessens the effect of small islands and artifacts when calculating
 * the centroid of a set of polygons.
 *
 * @module turf/centroid
 * @param {GeoJSON} input
 * @return {Point} output
 * @example
 * var poly = turf.polygon([[[0,0], [0,10], [10,10] , [10,0]]])
 * var centroidPt = turf.centroid(poly)
 */
module.exports = function(features){
  var vertices = explode(features).features,
    xSum = 0,
    ySum = 0,
    len = vertices.length;

  for (var i = 0; i < len; i++) {
    xSum += vertices[i].geometry.coordinates[0];
    ySum += vertices[i].geometry.coordinates[1];
  }

  return point(xSum / len, ySum / len);
};
