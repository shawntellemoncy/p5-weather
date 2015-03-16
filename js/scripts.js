var cheney = '99004';
var spokane = '99220';
var temp = weather.temp;
var city = weather.city;
var state = weather.region;
var thumb = weather.thumbnail;

$(document).ready(function() {
  $.simpleWeather({
    location: 'Cheney, WA',
    woeid: '',
    unit: 'f',
    
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);


      // IF, ELSE STATEMENTS
      // if (weather.currently = 'CLOUDY'){
      //   $('body').addClass('cloudy'); } else {
      //     $('body').removeClass('partlycloudy', 'sunshine');
      //   }
      // }

      // if (weather.currently = 'SUNNY') {
      //   $('body').addClass('sunshine'); } else {
      //     $('body').removeClass('cloudy', 'partlycloudy');
      //   }
      // }

      // if (weather.currently = 'PARTLY CLOUDY') {
      //   $('body').addClass('partlycloudy'); } else {
      //   $('body').removeClass('cloudy', 'sunshine');
      //   }
      // }

      // if (weather.currently = 'SNOW') {
      //   $('body').addClass('snowstorm'); } else {
      //     $('body').removeClass('snowstorm');
      //   }
      // }
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});










