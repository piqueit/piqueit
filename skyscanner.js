var skyscanner = function(user){
  var data = {
    apiKey: "ah328032345045357940601162731181",
    country: user.country,

  }
  console.log(data);
  $.ajax({
    url: "http://partners.api.skyscanner.net/apiservices/pricing/v1.0"
  })
}


