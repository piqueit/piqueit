$(document).ready(function(){
  console.log("Ready!")
  $('a').click(updatePage)
  $("body").click(".airport", grow)
})

var updatePage = function(e){
  e.preventDefault()
  console.log("hit")
  url = $(this).attr('href')

  $.get(url, function(data){
    $('body').html(data)
  })
}

var grow = function(){
  console.log("HIT!")
}
