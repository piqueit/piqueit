$(document).ready(function() {

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  $('form#flickr-search button').click(function(e) {
    e.preventDefault();
    console.log("hit")
    // get the input from the text field
    terms = $('form#flickr-search input').val();
    // using jsonp in order to do a cross-domain POST
    // http://bob.ippoli.to/archives/2005/12/05/remote-json-jsonp/
    $.ajax({
      url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9717c8e30be75046ec7318c3a65c17b4&format=json&orientation=landscape&tags=' + terms + '&sort=interestingness-desc',
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrApi'
    }).done(function(data) {
      console.log(data.photos.photo.length)
      var photos = data.photos.photo;
      // concatenating a string and appending at the end for performance
      // http://www.learningjquery.com/2009/03/43439-reasons-to-use-append-correctly/
      var pickedPhotos = [];

      for(i=0; i < 22; i++) {
        var num = Math.floor(Math.random() * 100) + 1;
        pickedPhotos.push(num);
        // for (var index in pickedPhoto) {
        //   if (pickedPhoto[index] !== num) {
        var html = "";
        var listing = photos[num];
        var resultsEl = $('.g' + i);
        //     console.log(num + 'as')
          // }

          html += "<div data-id=" + listing.id + " class='listing'>";
          // // html += "<a href='" + listing.url + "' target=_blank>";
          // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
          // jsonFlickrApi
          html += "<img src='https://farm" + listing.farm + ".staticflickr.com/" + listing.server + "/" + listing.id + "_" + listing.secret + ".jpg' />";
          // html += "<p>" + listing.title + "</p>";
          html += "</a>";
          html += "</div>";
        // }
          // image = $('.g' + i + 'div img')
          resultsEl.html(html)
      }

    }).fail(function(xhr, textStatus, errorThrown) {
      console.log(xhr);
      console.log(textStatus);
      console.log(errorThrown);
      alert("FAIL!!");
    });
  });
});
