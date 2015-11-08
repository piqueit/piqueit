$(document).ready(function(){
  console.log("Ready!")
  $('a').click(updatePage)
  $('div[id="opener_wrap"]').click(function(e){
    e.preventDefault()
    $(this).slideUp('slow')
  })
  // stubThatHub()

})

var updatePage = function(e){
  e.preventDefault()
  url = $(this).attr('href')

  $.get(url, function(data){
    $('body').html(data)
  })
}

// var stubThatHub = function(){
//   $.ajax({
//     type: "GET",
//     beforeSend: function (request) {
//       request.setRequestHeader("Authorization", "Bearer " + "2xMlMJxbOYHJG65FWNs5QYhNLYQa");
//       request.setRequestHeader("Content-Type", "application / json");
//       request.setRequestHeader("Accept", "application / json");
//     },
//     url: "https://api.stubhub.com/search/catalog/events/v3? city='" + city + "'",
//     success: function (msg) {
//       $("body").append(msg.stringify);
//           console.log(msg);
//         }
//       });
// }

// var getIP = $.getJSON("http://ip-api.com/json", function(data){
//     data = jsonp(data)
//     return {userLat: data.lat, userLong: data.long}
//   })

