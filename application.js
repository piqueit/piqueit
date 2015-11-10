$(document).ready(function(){

  console.log("Ready!")
  // var interval = window.setInterval(switchUpView, 12000);
  // $('a').click(updatePage)
  $('div[id="opener_wrap"]').click(function(e){
    e.preventDefault()
    $(this).slideUp('slow')
  })
  $('body').on('click', '#img_circle', goToDynamicPage)
  // $('body').on('click', '.rectangle', skyScannerPopUp)
  $('#goToEmirates').click(goToEmirates)
})
var dubaiImgs = ['http://i.telegraph.co.uk/multimedia/archive/02196/Dubai_Culture_2196508b.jpg',
'http://mediastream.jumeirah.com/webimage/heroactual//globalassets/global/destinations/dubai/destinations-dubai-culture-hero.jpg',
'http://www.2daydubai.com/culture/culture-village_clip_image001.jpg',
'http://i.telegraph.co.uk/multimedia/archive/03051/Dubai-Male-tradito_3051509k.jpg',
'http://www.dubaiexpatblog.com/wp-content/uploads/2014/05/Dubai-Culture-and-Museum-at-Metro.jpg',
'http://www.mydubaiexpo2020.net/wp-content/gallery/news/culture.jpg',
'http://i.bnet.com/blogs/rollsroycedubaicropped.jpg',
'http://p4.img.cctvpic.com/program/asiatoday/20120228/images/1330394106630_1330394106630_r.jpg',
'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLQ_4D0H4PLo1jm78EtCd_xWqPmgf5FY31kr-RibFETK70ntV7',
'http://i.huffpost.com/gen/1145846/thumbs/o-DUBAI-TIME-LAPSE-VIDEO-facebook.jpg',
'http://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3062/SITours/dubai-hot-air-balloon-flight-in-dubai-143592.jpg',
'http://static.rappler.com/images/Emirates%20aircraft.jpg',
'https://xydubai.files.wordpress.com/2014/03/dubai-fountain-51.jpg?w=682',
'http://dubaishortstay.net/blog/wp-content/uploads/2010/12/religioncon.jpg',
'http://www.goldensandsdubai.com/blog/wp-content/uploads/2015/02/Dubai-Culture.jpg',
'http://artinthecity.s3.amazonaws.com/images%2Farticles%2Fdisplay%2Foutdoorart_1.png',
'http://dubaimetro.eu/wp-content/uploads/2011/01/319.jpg',
'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhY0dB61CCIUPO8g0SXfhtujOy4_tjfYSmt-aotqNdaGKAElbv',
'https://upload.wikimedia.org/wikipedia/commons/5/5c/Dubai_Flusstaxi.jpg',
'http://www.theage.com.au/ffximage/2008/04/09/wbWORLDcamel_wideweb__470x347,0.jpg']

var londonImgs = ['http://www.gregorynewcomb.com/london_2006/Lille/Lille33.jpg',
'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9Jk849skH7gmmndVHA2mwM4MHfErmuY_Vywx7ia-4iNAje4PgCQ',
'http://now-here-this.timeout.com/wp-content/uploads/2014/02/kiss.jpg',
'http://i.dailymail.co.uk/i/pix/2014/10/11/1413030164142_wps_27_E4P8AD_The_Tate_Britain_N.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6NNrdFQ96EEXDgTWL4dr-tvf5MAn50XAVoRU6c0O-_3E6I_S',
"http://www.theculturemom.com/wp-content/uploads/2012/07/MP900401874.jpg",
"http://i.telegraph.co.uk/multimedia/archive/02446/tube2_2446896b.jpg",
'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQhE6ww4YEUw68ghZN8KykkDsQLJ_vmPARld5Px-w-rKlu53U_',
'http://urbanitewebzine.files.wordpress.com/2014/05/akakorleone-village-underground-lisboa-0.jpg',
'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMla-Llp8K4DJdpHWw9uOzk_9h0sPb95bUD4YbvZ0hmTxLZuLefg',
'http://www.telegraph.co.uk/travel/destination/uk/england/london/article42360.ece/ALTERNATES/w460/Trooping.jpg',
'http://www.meininger-hotels.com/blog/wp-content/uploads/2015/01/see-culture-london.jpg',
'http://www.travelagentcentral.com/files/travelagent/nodes/2015/52724/Thames.jpg',
'http://clubclass.com/blog/wp-content/uploads/2013/06/banksy1-741367.jpg',
'http://cdn.hiconsumption.com/wp-content/uploads/2013/01/Disneys-Wreck-It-Ralph-8-Bit-Lane-Pixel-Street-Art-in-London-3.jpg',
'http://generatorhostels.com/en/files/2013/12/london-snow.jpg',
'http://i.dailymail.co.uk/i/pix/2014/05/23/article-2637596-0BD392FA000005DC-766_634x408.jpg',
'https://www.mazily.co.uk/images/content/single_london_top.jpg',
'http://regentlondon.files.wordpress.com/2012/10/london1.png?w=873&h=394',
'http://i.telegraph.co.uk/multimedia/archive/01545/london-underground_1545207i.jpg']

var goToEmirates = function(){

  window.open('http://www.emirates.com/english/plan_book/dubai_international_airport/dubai_international_airport.aspx')
}

var $grid = function(){$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  })
};

var cityImgs = {
  Bangalore: ['bangalore2.png', "$804"],
  Beijing: ['beijing.png', "$551"],
  Cairo: ['cairo.png', "$678"],
  Dallas: ['dallas.png', "$209"],
  Dammam: ['dammam.png', "$1148"],
  Delhi: ['delhi.png', "$595"],
  Dubai: ['dubai.png', "$941"],
  Dubai2: ['dubai2.png', "$941"],
  Harere: ['harere.png', "$1268"],
  Johanesburg: ['johanesburg.png', "$901"],
  London: ['london.png', "$766"],
  Manila: ['manila.png', "$538"],
  Mauritius: ['mauritius.png', "$1288"],
  Paris: ['paris.png', "$923"],
  Toronto: ['toronto.png', "$398"]
}

var updatePage = function(e){
  e.preventDefault()
  url = $(this).attr('href')

  $.get(url, function(data){
    $('body').html(data)
  })
}

var goToDynamicPage = function(e){
  e.preventDefault()
  $("#montage").show()
  hitFlickr(city);
  $("#landing-page").hide('fast')
  $("svg").fadeOut(600)
  // $.get('/dynamic_montage', function(response){
  //   $('body').html(response)
  // console.log(city)
  // hitFlickr(city)
  // })
}

var hitFlickr = function(city){
  $.ajax({
    url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9717c8e30be75046ec7318c3a65c17b4&format=json&orientation=landscape&tags=' + city + '&sort=interestingness-desc',
    dataType: 'jsonp',
    jsonpCallback: 'jsonFlickrApi'
  }).done(function(data) {
    $grid();
    $('#montage').hide().show(0);
    console.log(data.photos.photo.length)
    var photos = data.photos.photo;
    // debugger
    var pickedPhotos = [];
    if (photos.length > 0){
      for(var i=0; i < 21; i++) {
        if (i != 11 && i != 4){
        var num = Math.floor(Math.random() * 100) + 1;
        pickedPhotos.push(num);
        var html = "";
        var listing = photos[num];
        var resultsEl = $('.g' + i);
          html += "<div data-id=" + listing.id + " class='listing'>";
          html += "<img src='https://farm" + listing.farm + ".staticflickr.com/" + listing.server + "/" + listing.id + "_" + listing.secret + ".jpg' />";
          html += "</a>";
          html += "</div>";
          stubThatHub(city)
          resultsEl.html(html)
        }


        }} else {
          for (var i=0; i<= 20; i++){
            if (city == "London") {
              console.log(i)
              var resultsLon = $('.g' + i);
              html += "<div data-id=" + i + " class='listing'>";
              html += "<img src='" + londonImgs[i] + "' alt='' >";
              html += "</div>";
              stubThatHub(city)
              resultsLon.html(html)
            }else {
              var resultsEl = $('.g' + i);
              html += "<div data-id=" + i + " class='listing'>";
              html += "<img src='" + dubaiImgs[i]+"' />";
              html += "</a>";
              html += "</div>";
              stubThatHub(city)
              resultsEl.html(html)
            }

          }
        }
    }).fail(function(xhr, textStatus, errorThrown) {
      console.log(xhr);
      console.log(textStatus);
      console.log(errorThrown);
      // alert("FAIL!!");
    }).always(function(){
      $grid();
      $('#flickr-results').hide().show(0);
      $('#city-title').hide().show(0);
    })

};

var stubThatHub = function(city){
 $.ajax({
   type: "GET",
   beforeSend: function (request) {
     request.setRequestHeader("Authorization", "Bearer " + "2xMlMJxbOYHJG65FWNs5QYhNLYQa");
     request.setRequestHeader("Content-Type", "application / json");
     request.setRequestHeader("Accept", "application / json");
   },
   url: "https://api.stubhub.com/search/catalog/events/v3?city=" + city,
   success: function (msg) {
    var event = msg.events[Math.floor(Math.random()*msg.events.length)]
     if(msg.numFound != 0){
       $("#stubhub").html("<div class='hovereffect'><h2>C u l t u r e </h2><p class='stubhub'><a class='info' href='http://stubhub.co.uk/"+event.eventUrl+"'>" + event.name + "</a></p></div></div>")
     }
     else {
        $("#stubhub").html("<div class='hovereffect'><h2>No Concerts in the Area</h2></div></div>")
     }
   }
 });
}


// var skyScannerPopUp = function(){
//   $("#skyscanner").show
// }
