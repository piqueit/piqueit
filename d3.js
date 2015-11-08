var wdth = $( window ).width();
var hght = $( window ).height();
var user;

var projection = d3.geo.mercator()
    .center([0,70])
    .rotate([-10,0])
    .translate([wdth/2,hght/3.5])
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
      // var csv = data;
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
          return Math.sqrt(d.traffic)/700
        })
        .attr("id", function(d){
          return index
        })
        .on("mouseover", function(d) {
          debugger
          d3.select(this).text(d.city)
         })
        .on("mouseout", function(d) {
         })
    })

    // var node = svg.selectAll(".node")
    //   .data(graph.nodes)
    //   .enter().append("g").call(force.drag);

    //   node.append("circle")
    //   .attr("class", "node")
    //   .attr("r", 5)
    //   .style("fill", function (d) { return color(d.group); });

    //   node.append("text")
    //   .text(function (d) { return d.city; });

    $.ajax({
      url: "http://ip-api.com/json",
      dataType: "json"
    }).done(function(data){
      // skyscanner(data);
      g.append("svg:image")
        .attr("xlink:href", "assets/images/pin_drop.png")
        .attr("x", function(){return projection([data.lon, data.lat])[0] -15})
        .attr("y", function(){return projection([data.lon, data.lat])[1] -40})
        .attr("width", 30)
        .attr("height", 50)
        .attr("id", "pin")
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
