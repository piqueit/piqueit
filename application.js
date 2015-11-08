$(document).ready(function(){
  console.log("Ready!")
  $('a').click(updatePage)
})

var updatePage = function(e){
  e.preventDefault()
  url = $(this).attr('href')

  $.get(url, function(data){
    $('body').html(data)
  })
}


// var getIP = $.getJSON("http://ip-api.com/json", function(data){
//     data = jsonp(data)
//     return {userLat: data.lat, userLong: data.long}
//   })

