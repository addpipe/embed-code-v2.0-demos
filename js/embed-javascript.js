//================================= Inserting the first recorder =====================================

//initializing the Pipe options
var pipeParams = {
	size: {width:640,height:360},
	qualityurl: "avq/720p.xml", 
	accountHash:"2044b9efed932689c4081a749a877413", 
	payload:'{"userId":"55a95eeb936dd30100e0aff6","jobId":"55a7e6555f1bdc010014d6a1"}', 
	eid:1, 
	showMenu:0, 
	mrt:120,
	sis:0,
	asv:0, 
	mv:1, 
	st:1, 
	ssb:1,
	dup:1,
	srec:"cbmhjlfmbhihimmlofbgkplnhgbgiipn"
};

PipeSDK.insert('first-recorder', pipeParams, function(recorderInserted){
	
	//getting the reference to the custom buttons
	recbtn = document.getElementById("recordbtn");
	stopbtn = document.getElementById("stopbtn");
	playbtn = document.getElementById("playbtn");
	pausebtn = document.getElementById("pausebtn");
	savebtn = document.getElementById("savebtn");
	removebtn = document.getElementById("removebtn");
	
	//Calling Control API methods when the desktop event function onReadyToRecord() is triggered
	recorderInserted.onReadyToRecord = function(id, type){
		var args = Array.prototype.slice.call(arguments);
		__log("onReadyToRecord("+args.join(', ')+")");
		
		//enabling the record button
		recbtn.disabled = false;		
		
		//adding onclick events to the buttons
		recbtn.onclick = function (){
			//calling the control API method
			recorderInserted.record();
			
			//enabling the stop button, disabling the record button
			recbtn.disabled = true;
			stopbtn.disabled = false;
		}
		
		stopbtn.onclick = function (){
			//calling the control API method
			recorderInserted.stopVideo();
			
			//enabling the stop button, disabling the record button
			stopbtn.disabled = true;
		}
		
		playbtn.onclick = function (){
			//calling the control API method
			recorderInserted.playVideo();
			
			//enabling pause, disabling play, stop, record and save buttons
			playbtn.disabled = true;
			stopbtn.disabled = true;
			recbtn.disabled = true;
			savebtn.disabled = true;
			pausebtn.disabled = false;
			
		}
		
		pausebtn.onclick = function (){
			//calling the control API method
			recorderInserted.pause();
			
			//enabling record, play and save buttons, disabling pause and stop buttons
			pausebtn.disabled = true;
			stopbtn.disabled = true;
			recbtn.disabled = false;
			playbtn.disabled = false;
			savebtn.disabled = false;
		}
		
		savebtn.onclick = function (){
			//calling the control API method
			recorderInserted.save();
			
			//disabling the save button
			savebtn.disabled = true;
		}
		
	}
	
	removebtn.onclick = function (){
		//calling the control API method
		recorderInserted.remove();
		
		//disabling all the buttons
		removebtn.disabled = true;
		pausebtn.disabled = true;
		stopbtn.disabled = true;
		recbtn.disabled = true;
		playbtn.disabled = true;
		savebtn.disabled = true;
	}
	
	
	//DESKTOP EVENTS API
	recorderInserted.userHasCamMic = function(id,camNr, micNr){
		var args = Array.prototype.slice.call(arguments);
		__log("userHasCamMic("+args.join(', ')+")");
	}
	
	recorderInserted.btRecordPressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btRecordPressed("+args.join(', ')+")");
	}
	
	recorderInserted.btStopRecordingPressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btStopRecordingPressed("+args.join(', ')+")");
	}
	
	recorderInserted.btPlayPressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btPlayPressed("+args.join(', ')+")");
	}
	
	recorderInserted.btPausePressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btPausePressed("+args.join(', ')+")");
	}
	
	recorderInserted.onUploadDone = function(recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onUploadDone("+args.join(', ')+")");
		
		//enabling record, play and save buttons
		recbtn.disabled = false;
		playbtn.disabled = false;
		savebtn.disabled = false;
		
	}
	
	recorderInserted.onCamAccess = function(id, allowed){
		var args = Array.prototype.slice.call(arguments);
		__log("onCamAccess("+args.join(', ')+")");
	}
	
	recorderInserted.onPlaybackComplete = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onPlaybackComplete("+args.join(', ')+")");
		
		//enabling play button, disabling pause button
		playbtn.disabled = false;
		pausebtn.disabled = true;
		
	}
	
	recorderInserted.onRecordingStarted = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onRecordingStarted("+args.join(', ')+")");
	}
	
	recorderInserted.onConnectionClosed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onConnectionClosed("+args.join(', ')+")");
	}
	
	recorderInserted.onConnectionStatus = function(id, status){
		var args = Array.prototype.slice.call(arguments);
		__log("onConnectionStatus("+args.join(', ')+")");
	}
	
	recorderInserted.onMicActivityLevel = function(id, level){
		var args = Array.prototype.slice.call(arguments);
		//__log("onMicActivityLevel("+args.join(', ')+")");
	}
	
	recorderInserted.onFPSChange = function(id, fps){
		var args = Array.prototype.slice.call(arguments);
		//__log("onFPSChange("+args.join(', ')+")");
	}
	
	recorderInserted.onSaveOk = function(recorderId, streamName, streamDuration, cameraName, micName, audioCodec, videoCodec, filetype, videoId, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onSaveOk("+args.join(', ')+")");
	}
	
	//DESKTOP UPLOAD EVENTS API
	recorderInserted.onFlashReady = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onFlashReady("+args.join(', ')+")");
	}
	
	recorderInserted.onDesktopVideoUploadStarted = function(recorderId, filename, filetype, audioOnly){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadStarted("+args.join(', ')+")");
	}
	
	recorderInserted.onDesktopVideoUploadSuccess = function(recorderId, filename, filetype, videoId, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadSuccess("+args.join(', ')+")");
	}
	
	recorderInserted.onDesktopVideoUploadFailed = function(id, error){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadFailed("+args.join(', ')+")");
	}
	
	//MOBILE EVENTS API
	recorderInserted.onVideoUploadStarted = function(recorderId, filename, filetype, audioOnly){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadStarted("+args.join(', ')+")");
	}

	recorderInserted.onVideoUploadSuccess = function(recorderId, filename, filetype, videoId, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadSuccess("+args.join(', ')+")");
	}
	
	recorderInserted.onVideoUploadProgress = function(recorderId, percent){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadProgress("+args.join(', ')+")");
	}
	
	recorderInserted.onVideoUploadFailed = function(id, error){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadFailed("+args.join(', ')+")");
	}
	
});

//================================= Inserting the second recorder =====================================

//initializing the Pipe options
var pipeParams2 = {
	size: {width:320,height:270},
	qualityurl: "avq/240p.xml", 
	accountHash:"2044b9efed932689c4081a749a877413", 
	payload:'{"userId":"55a95eeb936dd30100e0aff6","jobId":"55a7e6555f1bdc010014d6a1"}', 
	eid:1, 
	showMenu:1, 
	mrt:120,
	sis:0,
	asv:0, 
	mv:1, 
	st:1, 
	ssb:1,
	dup:1,
	srec:"cbmhjlfmbhihimmlofbgkplnhgbgiipn"
};

document.getElementById("addbtn").onclick = function (){
	PipeSDK.insert('second-recorder', pipeParams2, function(recorderInserted){
	
		//DESKTOP EVENTS API
		recorderInserted.userHasCamMic = function(id,camNr, micNr){
			var args = Array.prototype.slice.call(arguments);
			__log("userHasCamMic("+args.join(', ')+")");
		}
		
		recorderInserted.btRecordPressed = function(id){
			var args = Array.prototype.slice.call(arguments);
			__log("btRecordPressed("+args.join(', ')+")");
		}
		
		recorderInserted.onUploadDone = function(recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, location){
			var args = Array.prototype.slice.call(arguments);
			__log("onUploadDone("+args.join(', ')+")");
		}
		
		recorderInserted.onRecordingStarted = function(id){
			var args = Array.prototype.slice.call(arguments);
			__log("onRecordingStarted("+args.join(', ')+")");
		}
		
		recorderInserted.onConnectionClosed = function(id){
			var args = Array.prototype.slice.call(arguments);
			__log("onConnectionClosed("+args.join(', ')+")");
		}
		
		recorderInserted.onConnectionStatus = function(id, status){
			var args = Array.prototype.slice.call(arguments);
			__log("onConnectionStatus("+args.join(', ')+")");
		}
		
		recorderInserted.onSaveOk = function(recorderId, streamName, streamDuration, cameraName, micName, audioCodec, videoCodec, filetype, videoId, audioOnly, location){
			var args = Array.prototype.slice.call(arguments);
			__log("onSaveOk("+args.join(', ')+")");
		}
		
		//DESKTOP UPLOAD EVENTS API
		recorderInserted.onFlashReady = function(id){
			var args = Array.prototype.slice.call(arguments);
			__log("onFlashReady("+args.join(', ')+")");
		}
		
		recorderInserted.onDesktopVideoUploadStarted = function(recorderId, filename, filetype, audioOnly){
			var args = Array.prototype.slice.call(arguments);
			__log("onDesktopVideoUploadStarted("+args.join(', ')+")");
		}
		
		recorderInserted.onDesktopVideoUploadSuccess = function(recorderId, filename, filetype, videoId, audioOnly, location){
			var args = Array.prototype.slice.call(arguments);
			__log("onDesktopVideoUploadSuccess("+args.join(', ')+")");
		}
		
		recorderInserted.onDesktopVideoUploadFailed = function(id, error){
			var args = Array.prototype.slice.call(arguments);
			__log("onDesktopVideoUploadFailed("+args.join(', ')+")");
		}
		
		//MOBILE EVENTS API
		recorderInserted.onVideoUploadStarted = function(recorderId, filename, filetype, audioOnly){
			var args = Array.prototype.slice.call(arguments);
			__log("onVideoUploadStarted("+args.join(', ')+")");
		}

		recorderInserted.onVideoUploadSuccess = function(recorderId, filename, filetype, videoId, audioOnly, location){
			var args = Array.prototype.slice.call(arguments);
			__log("onVideoUploadSuccess("+args.join(', ')+")");
		}
		
		recorderInserted.onVideoUploadProgress = function(recorderId, percent){
			var args = Array.prototype.slice.call(arguments);
			__log("onVideoUploadProgress("+args.join(', ')+")");
		}
		
		recorderInserted.onVideoUploadFailed = function(id, error){
			var args = Array.prototype.slice.call(arguments);
			__log("onVideoUploadFailed("+args.join(', ')+")");
		}
		
		//remove control API call
		document.getElementById("removebtn2").onclick = function (){
			recorderInserted.remove();
			
			//toggling buttons	
			document.getElementById("removebtn2").disabled = true;
			document.getElementById("addbtn").disabled = false;
		}
		
	});
	
	//toggling buttons
	document.getElementById("addbtn").disabled = true;
	document.getElementById("removebtn2").disabled = false;
	
}

//Logger
function __log(e, data) {
	log.innerHTML += "\n" + e + " " + (data || '');
}