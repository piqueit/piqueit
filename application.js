$(document).ready(){
  $('a').click(updatePage)
}

var updatePage = function(e){
  e.preventDefault()
  conosle.log("hit")
  url = $(this).attr('href')

  $.get(url, function(data){
    $('body').html(data)
  })
}
