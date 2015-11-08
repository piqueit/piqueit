$(document).ready(function(){
  console.log("Ready!")
  $('a').click(updatePage)
  $('div[id="opener_wrap"]').click(function(e){
    e.preventDefault()
    $(this).slideUp('slow')
  })

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

