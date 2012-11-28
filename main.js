//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	var comingSoon = function (){
		alert("Coming soon:\n-iOS and Android Native Features Information\n-JSON-P APIs\n-Research Week 2 and Week 3");
	}

	comingSoon();
	
	
var twitterSearch = function () {
$.ajax({
		type: "GET",
		url: "http://search.twitter.com/search.json?q=vh1",
		dataType: "json",
		success: function (twi) {

                for ( var i = 0, len = twi.results.length; i < len; i++ ) {
                    var item = twi.results[i];

                    $( ' ' + 
					'<div class="tweetsIn">' +
					'<ul>' +
					'<li> Tweet Created: ' + item.created_at + '</li>' +
					'<li> User ID: ' + item.from_user_id + '</li>' +
					'<li> Screen Name: ' + item.from_user_name + '</li>' +
					'<li> Full Name: ' + item.from_user + '</li>' +
					'<li> Profile Image: <img src="'+ item.profile_image_url + '"/></li>' +
					'<li> Tweet: ' + item.text + '</li>' +
					'</ul>' +
					'<br>' +
					'</div>'
					).appendTo("#thisTwitter");
                }
            }
})
		};
	$("#twitterBtn").on("click", twitterSearch);
	


var tvSearch = function () {
$.ajax({
		type: "GET",
		url: "http://api.trakt.tv/calendar/shows.json/e72b9f73212db9cf43ea905bbcbc3054",
		dataType: "json",
		success: function (tv) {

					for ( var i = 0, len = tv[i].episodes.length; i < len; i++ ) {
                    var item = tv[0].episodes[i]
            $(' ' +
            	'<div class="tvIn">' +
            	'<ul>' +
            	'<li>' + item.show.title +'</li>'+
            	'<li>' + item.show.year +'</li>'+
            	'<li>' + item.show.url +'</li>'+
            	'<li>' + item.show.overview +'</li>'+
            	'<li><img src="' + item.show.images.poster +'"/></li>'+
            	'</ul>' +
            	'<br>' +
            	'</div>'
            	).appendTo("#thisTV");
            }
        }       
})
		};
	$("#tvBtn").on("click", tvSearch);
	
});