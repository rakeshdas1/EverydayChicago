var uri = "https://graph.facebook.com/1415413038764305?access_token=CAACEdEose0cBAHMLfXS0fC04TSliRezWLZBjCs4R22ZBEBZCZAOEheGJusZAVXhhp6tHhf3wUrXTCFZCQLnQsTrio467uiZBtEtmBgul3cBlJE5zJuUJGgYCEqhDLgmnXwgSjLKjTYzAC6v66FEs9nBxgrANwozedoZCCpGG2TP6wNaJZAAliSpNPesMNoTnqFLZBW2S4FdbJi8YpJYAO9fI03&fields=feed{full_picture,created_time,from}"
var json = '../json/1.json';
var json2 = '../json/2.json';
var json3 = '../json/3.json';
$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url:encodeURI(uri),
        data: {get_param: 'value'},
        dataType: 'json',
        success: function (data) {
            console.log("Got the RSS feed!");
           $.each(data, function(idx, obj) {
               console.log(obj.data);
               $("#pics").append("<p>" + obj.data + "</p>");
               $("#pics").append("<img src=" + obj.data.full_picture + ">");
        });
        }
    });

});



