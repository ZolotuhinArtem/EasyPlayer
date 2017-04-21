;(function(){
	"use strict";
	App.Lyrics = function Lyrics(){};
	App.Lyrics.prototype = {
		getLyrics : function getLyrics(artistName, trackName, onSuccess, onError) {
			var logtag = "App.Lyrics";
			console.log(logtag + ": getLyrics: getted " + artistName + " - " + trackName);
			if (artistName && trackName) {
				var url = "http://lyrics.wikia.com/wiki/" + artistName + ":" + trackName;
				$.get(url, function(data) {
			          var $obj = $(data).find(".lyricbox");
			          var text = $obj.html();
			          if (text) {
			        	  console.log(logtag + ": getLyrics: responce: success");
			        	  console.log(text);
			        	  onSuccess(text);
			          } else {
			        	  console.log(logtag + ": getLyrics: responce: error");
			        	  onError("Not found");
			          }
			     	}
				).fail(onError.bind(null, "Not Found!"));
			} else {
				onError("Missing arguments");
			}
		}
	};
}());