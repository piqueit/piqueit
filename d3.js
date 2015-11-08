var wdth = $( window ).width();
var hght = $( window ).height();
var user;
var city

var projection = d3.geo.mercator()
    .center([0,70])
    .rotate([-10,0])
    .translate([wdth/2,hght/3.0])
    .scale(220);

var svg = d3.select("body").selectAll("div").append("svg")

var path = d3.geo.path()
    .projection(projection);

var g = svg.append("g");

var myMouseoverFunction = function() {
  var circle = d3.select(this);
  circle.transition().duration(500)
    .attr("r", circle.attr("r") * 1 + 5 );
}

// load and display the World
d3.json("world.json", function(error, topology) {
    g.selectAll("path")
      .data(topojson.object(topology, topology.objects.countries)
          .geometries)
    .enter()
      .append("path")
      .attr("d", path)

    d3.csv("airports.csv", function(error, data) {
      var index = 0;
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
        // .attr("class", "airport")
        .attr("id", function(d){
          return d.city
        })
        .attr("r", function(d){
          return Math.sqrt(d.traffic)/700
        })
        .attr("class", function(d){
          index ++
          return "airport " + index
        })
        .on("mouseover", function(d) {
          city = d.city
          var circle_animate = d3.select(this);
          circle_animate.transition().duration(500)
          .attr("r", circle_animate.attr("r") * 1 + 3 )
          $('#img_circle img').remove()
          $('#img_circle').append("<img src='/assets/images/" + cityImgs[city][0] +"'>" )
          $('#navigation').html(city)
          $('#navigation').append(" " + d.price)
          stubThatHub(city)
          hitFlickr(city)
          $('#city-title').html(city)
         })
    })

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
