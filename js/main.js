var app = null;
$(document).ready(start);
function start() {
	"use strict";
	var selfName = "main.js";
	({
		init: function init(){
			console.log(selfName + " init()");
			var self = this;
			var mainAppURL = 'js/app.js';
			function onLoad(){
				app = new App();
				console.log(selfName + " " + mainAppURL + " loaded");
				self.loadLibs(app);
			}
			function onError(){
				console.error(selfName + " " + "Error load: " + mainAppURL);
			}
			
			this.getScript(mainAppURL, onLoad, onError);
		},
		getScript: function getScript(url, onLoad, onError) {
		    var req = new window.XMLHttpRequest(),
		        async = false,
		        script = null;
	
		    if (url === null) {
		        console.error(selfName + ' getScript: URL is empty!');
		        return;
		    }
	
		    req.addEventListener('load', function load() {
		        script = document.createElement('script');
	
		        script.text = req.responseText;
		        document.head.appendChild(script)
		            .parentNode.removeChild(script);
		        if (typeof onLoad === 'function') {
		            onLoad();
		        }
		    }, false);
	
		    req.addEventListener('error', function error() {
		        if (typeof onError === 'function') {
		            onError(url);
		        }
		    }, false);
	
		    req.open('GET', url, async);
		    req.send();
		    return this;
		},
		/*
		 * load all libs from obj.libs
		 */
		loadLibs: function loadLibs(obj) {
			var libsLoadedCount = 0;
			var libs = obj.libs;
			var onLoad = function onLoad(){
				libsLoadedCount++;
				if (libsLoadedCount >= libs.length) {
					app.init();
					console.log(selfName + " app created!");
				}
			};
			var onError = function onError(url) {
				console.error(selfName + " error load lib: " + url);
			};
			for (var i = 0; i < libs.length; i++) {
				this.getScript(libs[i], onLoad, onError);
			}
		}
	}).init();
}
