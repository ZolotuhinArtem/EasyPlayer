;(function(){
	App.Ui = function Ui(){
		var self = this;
		this.trackList = $("#track_list");
		this.mainPageId = "all";
		this.trackPageId = "track_detail";
		this.lyricsPageId = "lyric";
		
		this.imgCoverTemplate = "res/img/track_template.png";
		//var sectionChangerElem = document.getElementById("section-changer");
		//this.sectionChanger = tau.widget.SectionChanger(sectionChangerElem);
		this.btnSortByTitle = document.getElementById("btn_sort_by_title");
		this.btnSortByArtist = document.getElementById("btn_sort_by_artist");
		this.btnSortByAlbum = document.getElementById("btn_sort_by_album");
		this.btnPrevTrack = document.getElementById("btn-prev-track");
		this.btnNextTrack = document.getElementById("btn-next-track");
		this.btnLyricSearch = document.getElementById("lyrics-search-btn");
		this.lyricsTextArea = document.getElementById("lyrics-text");
		
		this.lyricsArtist = document.getElementById("lyrics-artist");
		this.lyricsTrack = document.getElementById("lyrics-track");
		
		this.lyricsFill = document.getElementById("lyrics-fill");
		this.imgCover = document.getElementById("img-cover");
		this.trackTitle = document.getElementById("track_title");
		this.trackAlbum = document.getElementById("track_album");
		this.trackArtist = document.getElementById("track_artist");
		this.audioElement = document.getElementById("audio");
		
		this.buttonsPage = document.getElementsByTagName("btn-page");
	};
	
	App.Ui.prototype = {
		logtag: "App.Ui",
		
		onClickTrack: function onClickTrack(index){},
		
		setButtonsPageClisk: function(onClick){
			for (var i = 0; i < this.buttonsPage.length; i++){
				this.buttonsPage.item(i).addEventListener("click", onClick, false);
			}
		},
		
		getAudioElement: function(){
			return this.audioElement;
		},
		setOnBtnSortByTitleClick: function(onClick){
			this.btnSortByTitle.addEventListener("click", onClick, false);
		},
		setOnBtnSortByArtistClick: function(onClick){
			this.btnSortByArtist.addEventListener("click", onClick, false);
		},
		
		setOnBtnSortByAlbumClick: function(onClick){
			this.btnSortByAlbum.addEventListener("click", onClick, false);
		},
		setOnBtnAudioPrevClick: function(onClick){
			this.btnPrevTrack.addEventListener("click", onClick, false);
		},
		setOnBtnAudioNextClick: function(onClick){
			this.btnNextTrack.addEventListener("click", onClick, false);
		},
		setOnBtnLyricsSearchClick: function(onClick) {
			this.btnLyricSearch.addEventListener("click", onClick, false);
		},
		setOnBtnLyricsFillClick: function(onClick) {
			this.lyricsFill.addEventListener("click", onClick, false);
		},
		setTextLyrics: function(text) {
			this.lyricsTextArea.innerHTML = text;
		},
		setArtistLyrics: function(artistName) {
			this.lyricsArtist.value =  artistName;
		},
		setTrackLyrics: function(trackName) {
			this.lyricsTrack.value = trackName;
		},
		getArtistLyrics: function() {
			return this.lyricsArtist.value;
		},
		getTrackLyrics: function() {
			return this.lyricsTrack.value;
		},
		setCover: function(url) {
			this.imgCover.setAttribute("src", url);
		},
		
		showTracks: function (trackArray){
	    	if (trackArray.length > 0) {
	    		console.log(this.logtag + ": showTracks: Cleaning list...");
	    		this.trackList.empty();
	    		console.log(this.logtag + ": showTracks: Ok!");
	    		console.log(this.logtag + ": showTracks: adding tracks");
	    		var li;
	    		for(var i = 0; i < trackArray.length; i++) {
	    			li = document.createElement('li');
	    			li.innerText = this.getFormatedTrackName(trackArray[i]);
	    			li.setAttribute('class', 'ui-li-static');
	    			li.addEventListener('click', this.onClickTrack.bind(null, i), false);
	    			this.trackList.append(li);
	    			console.log(this.logtag + ": showTracks: appended in listview " + this.getFormatedTrackName(trackArray[i]));
	    			this.trackList.listview('refresh');
	    		}
	    		console.log(this.trackList.attr("id"));
	    		
	    	} else {
	    		alert("Tracks not found on your device");
	    	}
	    	
	    },
	    updateTrack: function (track) {
	    	console.log("update track called");
	    	this.imgCover.setAttribute("src", this.imgCoverTemplate);
	    	this.trackTitle.innerHTML = track.title;
	    	this.trackAlbum.innerHTML = track.album;
	    	this.trackArtist.innerHTML = track.artists[0];
	    },
	    deleteChilds : function (elem) {
	    	while (elem.firstChild) {
	    		elem.removeChild(elem.firstChild);
	    	}
	    	return elem;
	    }, 
	    getFormatedTrackName: function (track){
	    	return track.artists[0] + " - " + track.title + " - " + track.album;
	    },
		
	    /*
	     * @params {string} page: main, track, lyric
	     */
		changePage: function changePage(page) {
			tau.changePage(page);
	    	
	    }
	    
    };
}());