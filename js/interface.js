$(document).ready(function() {
  var thermostat = new Thermostat();


                $.ajax({
                  type: 'get',
                  url: 'http://localhost:3111/temperature',
                  // dataType: 'html',
                  success: function(result) {
                    console.log(result)
                    $('#temperature').text(result);
                  }
                });

  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
    updateTempOnServer();
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
    updateTempOnServer();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
    updateTempOnServer();
  });

  $('#powersavingmode-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $('#powersavingmode-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  function updateTempOnServer() {
    $.ajax({
      url: 'http://localhost:3111/temp-set',
      type: 'post',
      data: {temp: thermostat.temperature},
      success: function( data, textStatus, jQxhr ){
                   $('#response pre').html( data );
               },
               error: function( jqXhr, textStatus, errorThrown ){
                   console.log( errorThrown );
               }
           });
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());

  };
});
