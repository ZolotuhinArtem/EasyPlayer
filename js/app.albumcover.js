;(function() {
    "use strict";
    App.AlbumCover = function AlbumCover() {

    };
    App.AlbumCover.prototype = {
        getCover: function getCover(artistName, trackName, onSuccess, onError) {
        	var logtag = "App.AlbumCover: getCover: ";
        	console.log(logtag + "getted " + artistName + " - " + trackName);
        	if (artistName && trackName) {				
				artistName = artistName.toLowerCase();
				trackName = trackName.toLowerCase();
        		$.ajax({
                    url: "https://api.spotify.com/v1/search?q=" + artistName + ":" + trackName + "&type=track",

                    type: "GET",
                    dataType: "json",
                    success: function(data) {
                        console.log(logtag + "success");
                        var isFinded = false;
                        for (var i = 0; i < data.tracks.items.length; i++) {
                            var temp = data.tracks.items[i];
                            if (temp.album.album_type == "album") {
                            	console.log(logtag + "temp.album.images[0].url=" +temp.album.images[0].url);
                            	if (temp.album.images[0].url){
                            		onSuccess(temp.album.images[0].url);
                            		isFinded = true;
                            		break;
                            	}
                                //getAlbumImage(temp.album.href, onSuccess, onError);
                            }
                        }
                        if (!isFinded) {
                        	console.log(logtag + " not found!");
                        	onError("Not found!");
                        }
                    },
                    error: function(data) {
                        console.log(logtag + "error");
                        onError("Not found!");
                    }
                });
        	} else {
        		console.log(logtag + "missing arguments");
        		onError("missing aruments!");
        	}   
        }
    };

}());