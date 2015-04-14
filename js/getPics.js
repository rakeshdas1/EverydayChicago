var URLToParse = 'https://graph.facebook.com/1415413038764305?access_token=CAACEdEose0cBAMGIjgS6Ns0akBYD0Vfs6bHSuVPXXXJuyZBUbRj2wa4L50atbWAMuL6vm0xsQha1tW5dnz8VHmGtcQpfA4imOxuZBDoyr8rkQHmTUsUNKQHciugq94cFRFENrvQCcuwTIp8yNu46KoZAy6DpyiO3Ch7ZCMX0LNL2v85fGwaTkpufwy3EBOh24LL8aZANdgfb5WopvwSaf&amp;fields=feed{full_picture,created_time,from}';
var json = '../json/1.json';
var json2 = '../json/2.json';
var json3 = '../json/3.json';
$(document).ready(function(){
    /*$.ajax({
        type: 'GET',
        url:'https://graph.facebook.com/1415413038764305?access_token=CAACEdEose0cBAIml6kVibY83tUZBYkqvgcpx6FkOvf7S4lpt0o5DPgKGcnHZAceYaLtaAgZAGloyLX5diQKwC7ExoE5ZA5oYO0TSJLmbUARxYQMUIXg6z30kvTzU8a0V0p0AhM3842c5qxpccM6WlcSM7KeZCidfpjuRUv0PUe5ezElXMrXfG1JjnEcfKpRzNLZCYlLKr3vfmZC3ZAZCGoOTz&amp;fields=feed{full_picture,created_time,from}',
        data: {get_param: 'value'},
        dataType: 'json',
        success: function (data) {
            console.log("Got the RSS feed!");
            console.log(data);
           $.each(data, function(idx, obj) {
//               console.log(obj);
               $("#pics").append("<p>" + obj + "</p>");
        });
        }
    });*/
    $.getJSON("     1.json", function(data){
        console.log(data);
    });/*
    console.log(json);
    $.each(json, function(idx, obj) {
        console.log(obj);
    });*/
});
// 'https://graph.facebook.com/1415413038764305/?access_token=CAACEdEose0cBAMGIjgS6Ns0akBYD0Vfs6bHSuVPXXXJuyZBUbRj2wa4L50atbWAMuL6vm0xsQha1tW5dnz8VHmGtcQpfA4imOxuZBDoyr8rkQHmTUsUNKQHciugq94cFRFENrvQCcuwTIp8yNu46KoZAy6DpyiO3Ch7ZCMX0LNL2v85fGwaTkpufwy3EBOh24LL8aZANdgfb5WopvwSaf'



