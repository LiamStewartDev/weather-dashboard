var apiKey = 'fb04d22f01f25fc4a4dafd4ff19d1acd'
var searchBtn = $('#search-btn');


searchBtn.on('click', function () {

    var city = $('#searchInput').val();
    var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=imperial';
    // var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=imperial';


    $.ajax({
        url: currentUrl,
        method: 'GET',
    }).then(function (response) {
    
})
