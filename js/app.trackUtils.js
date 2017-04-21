;(function(){
	"use strict";
	App.TrackUtils = function TrackUtils(){
		
	};
	
	App.TrackUtils.prototype = {
		sortByTitle: function sortByTitle(trackArray) {
			trackArray.sort(this.compareTrackByTitle);
			return trackArray;
		},
		sortByArtist: function compareTrackByArtist(trackArray) {
			trackArray.sort(this.compareTrackByArtist);
			return trackArray;
		},
		sortByAlbum: function compareTrackByAlbum(trackArray) {
			trackArray.sort(this.compareTrackByAlbum);
			return trackArray;
		},
		compareTrackByTitle: function (a, b) {
    		if (a.title > b.title) {
    			return 1;
    		} else {
    			if (a.title < b.title) {
    				return -1;
    			} else {
    				return 0;
    			}
    		}
    	},

    	compareTrackByAlbum: function (a, b) {
    		if (a.album > b.album) {
    			return 1;
    		} else {
    			if (a.album < b.album) {
    				return -1;
    			} else {
    				return 0;
    			}
    		}
    	},
    	compareTrackByArtist: function (a, b) {
    		if (a.artists[0] > b.artists[0]) {
    			return 1;
    		} else {
    			if (a.artists[0] < b.artists[0]) {
    				return -1;
    			} else {
    				return 0;
    			}
    		}
    	}	
	};
}());