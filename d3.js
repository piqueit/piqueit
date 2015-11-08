


var projection = d3.geo.mercator()
    .center([0,70])
    .rotate([-10,0])
    .translate([600,110])
    .scale(165);

var svg = d3.select("body").selectAll("div").append("svg")

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
    $.ajax({
      url: "http://ip-api.com/json",
      dataType: "json"
    }).done(function(data){
      var data = data
      g.append("circle")
        .attr({cx: projection([data.lon, data.lat])[0],
          cy: projection([data.lon, data.lat])[1],
          r: 10,
          fill: "blue"
        })
    })
    // console.log(userLong)

});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("path")
            .attr("d", path.projection(projection));
});

svg.call(zoom)
