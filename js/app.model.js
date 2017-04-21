;(function(){
	"use strict";
	App.Model = function Model(){
		
	};
	
	App.Model.prototype = {
		logtag: "App.Model",
		/*
		 * @param {function} onSearchTracks(tracks)
		 * 
		 */
		searchTracks: function (onSuccessSearchTracks, onErrorSearchTracks){
	    	tizen.content.getDirectories(function (folders){
	        	var filter = new tizen.AttributeFilter ("type", "EXACTLY", "AUDIO");
	        	var sortMode = new tizen.SortMode('title', 'ASC');
	        	for (var i = 0; i < folders.length; i++) {
	        		try{
	    	    		tizen.content.find(onSuccessSearchTracks, onErrorSearchTracks, folders[i].id, filter, sortMode);
	        		} catch (exc) {
	        			console.error(this.logtag + ": searchTracks: tizen.content.find exception: " + exc.message);
	        		}
	        	}
	        }, function (){
	        	console.error(this.logtag + ": searchTracks: error");
	        	});
	    }
	};
	
	
}());