$(function () {
    $('#search-form').submit(function (e) {
        e.preventDefault();
        var searchItem = $('#search-input').val();
        getRequest(searchItem);
    });

    // for (let i = 0; i < 15; i++) {
    //     $('#cities').append('<option value="">'+ i+'</option>')

    // }

    function getRequest(input) {
        var cities = $('#cityInput').val();
        // var c = $( "form input:radio" ).prop( "checked");
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cities + '&units=metric';
        var rules = {
            apiKey: '74b0d3380a8ae5e52234b1fffc5bbf72',
            s: input,
            r: 'json'
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: rules,
            dataType: 'json'
        })
            .done(function (done) {
                // console.log(done);
                showResults(done);
            })
            .fail(function (fail) {
                // console.log(fail);

            });
    }
    function showResults(info) {
         console.log(info);

        $('.temp').text(info.main.temp);
        //$('.rain').text(info.rain["3h"]);
        $('.humidity').text(info.main.humidity);
        $('.cloud').text(info.clouds.all)
        $('.pressure').text(info.main.pressure)
        $('.wind').text(info.wind.speed);
        $('.city').text(info.name);

    }

    $(function () {
        $('#btn').unbind('click').click(function() {
            // inserted .unbid('click').click(function() { afterwards

            $('.temp').slideToggle(50);
        });

        /*$('#btn').unbind('click').click(function() {
            $('.rain').slideToggle(50);
        });*/

        $('#btn').unbind('click').click(function() {
            $('.humidity').slideToggle(50);
        });

        $('#btn').unbind('click').click(function() {
            $('.cloud').slideToggle(50);
        });

        $('#btn').unbind('click').click(function() {
            $('.pressure').slideToggle(50);
        });

        $('#btn').unbind('click').click(function() {
            $('.wind').slideToggle(50);
        });

        $('#btn').unbind('click').click(function() {
            $('.city', ).slideToggle(50);
        });
    });
});
// Väder slutar här, samtidigt som valutakursen börjar

