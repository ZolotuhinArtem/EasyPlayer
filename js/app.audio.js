;(function(){
	"use strict";
	App.Audio = function Audio(audioElement){
		this.audioElement = audioElement;
		this.currentTrack = null;
	};
	
	App.Audio.prototype = {
		logtag: "App.Audio",
		
		setAudioElement: function(audioElement) {
			this.audioElement = audioElement;
		},
		setOnPlay: function setOnPlay(onPlay){
			this.audioElement.addEventListener("playing", onPlay, false);
		},
		setOnPause: function setOnPause(onPause){
			this.audioElement.addEventListener("pause", onPause, false);
		},
		setOnTimeUpdate: function setOnTimeUpdate(onTimeupdate){
			this.audioElement.addEventListener("timeupdate", onTimeupdate, false);
		},
		setOnEnded: function setOnTimeUpdate(onEnded){
			this.audioElement.addEventListener("ended", onEnded, false);
		},
		setAndPlay: function play(trackURI) {
			if (trackURI) {
				this.audioElement.setAttribute('src', trackURI);
				this.audioElement.play();
			} else {
				console.error(this.logtag + ": setAndPlay: error: invalid trackURI");
			}
		},
		stop: function stop(){
			this.audioElement.stop();
		},
		tooglePause: function pause() {
			 if (this.audioElement.paused) {
				 this.audioElement.play();
             }
             else {
            	 this.audioElement.pause();
             }
		},
		getCurrentPlayingDuration: function getCurrentPlayingDuration(){
			return this.audioElement.duration;
		},
		getCurrentPlayingTime: function getCurrentPlayingTime(){
			return this.audioElement.currentTime;
		}
	};
}());