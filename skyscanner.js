var skyscanner = function(user){
  var today = new Date();
  var data = {
    apiKey: "ah328032345045357940601162731181",
    country: user.country,
    currency: "USD",
    locale:"en-US",
    originplace: user.city,
    destinationplace: "DBX",
    outbounddate: "2015-11-" + (today.getDate() + 7),
    inbounddate: "2015-11-" + (today.getDate() + 14)
  }
  $.ajax({
    url: "http://partners.api.skyscanner.net/apiservices/pricing/v1.0",
    method: "post",
    data: data,
    dataType: "json"
  })
  .done( function(){
    console.log("we made it")
  })

}


