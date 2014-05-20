var ss = require('simple-statistics')
var explode = require('turf-explode')
var point = require('turf-point')

module.exports = function(features){
  var vertices = explode(features)
  var averageX, 
      averageY, 
      xs = [], 
      ys = []
    
  vertices.features.forEach(function(v){
    xs.push(v.geometry.coordinates[0])
    ys.push(v.geometry.coordinates[1])
  })

  averageX = ss.mean(xs)
  averageY = ss.mean(ys)

  return point(averageX, averageY)
}