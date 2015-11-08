var width = 1200,
    height = 800;

var projection = d3.geo.mercator()
    .center([0 ,30])
    .scale(150)

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var path = d3.geo.path()
    .projection(projection);

var g = svg.append("g");

// load and display the World
d3.json("world.json", function(error, topology) {
    g.selectAll("path")
      .data(topojson.object(topology, topology.objects.countries)
          .geometries)
    .enter()
      .append("path")
      .attr("d", path)

      d3.csv("airports.csv", function(error, data) {
        g.selectAll("circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", function(d){
            return projection([d.longitude, d.latitude])[0];
          })
          .attr("cy", function(d){
            return projection([d.longitude, d.latitude])[1];
          })
          .attr("class", "airport")
          .attr("r", function(d){
            console.log(d.traffic)
            return Math.sqrt(d.traffic)/700
          })
          .attr("id", function(d){
            return d.airport
          })
      })
});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("path")
            .attr("d", path.projection(projection));
});

svg.call(zoom)
