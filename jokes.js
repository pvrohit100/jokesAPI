

$.getJSON("https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single",function(data){


//console.log(data);

$(aa).append(data.joke);

});










$.getJSON("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single",function(data){


//console.log(data);

$(bb).append(data.joke);

});