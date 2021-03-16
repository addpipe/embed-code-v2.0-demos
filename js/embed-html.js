PipeSDK.onRecordersInserted = function(){
	
	//getting the reference to our recorder objects	
	tagRecorder =  PipeSDK.getRecorderById('first-recorder');
	tagRecorder2 = PipeSDK.getRecorderById('second-recorder');
	
	//getting the reference to the custom buttons
	recbtn = document.getElementById("recordbtn");
	stopbtn = document.getElementById("stopbtn");
	playbtn = document.getElementById("playbtn");
	pausebtn = document.getElementById("pausebtn");
	savebtn = document.getElementById("savebtn");
	removebtn = document.getElementById("removebtn");

	//disable the record button untill we get the OK from onReadyToRecord
	recbtn.disabled = true;

	//disable the play and save buttons untill we have something to play or save
	playbtn.disabled = true;
	savebtn.disabled = true;
	
	//Calling control API methods when the desktop event function onReadyToRecord() is triggered
	tagRecorder.onReadyToRecord = function(id, type){
		var args = Array.prototype.slice.call(arguments);
		__log("onReadyToRecord("+args.join(', ')+")");
		
		//enabling the record button
		recbtn.disabled = false;
		
		//adding onclick events to the buttons
		recbtn.onclick = function (){
			//calling the control API method
			tagRecorder.record();
			
			//enabling the stop button, disabling the record button
			recbtn.disabled = true;
			stopbtn.disabled = false;

			//subsequent recordings should disable the newly enabled ability to play or save until we have a new recording
			playbtn.disabled = true;
			savebtn.disabled = true;
		}
		
		stopbtn.onclick = function (){
			//calling the control API method
			tagRecorder.stopVideo();
			
			//enabling the stop button, disabling the record button
			stopbtn.disabled = true;
		}
		
		playbtn.onclick = function (){
			//calling the control API method
			tagRecorder.playVideo();
			
			//enabling pause, disabling play, stop, record and save buttons
			playbtn.disabled = true;
			stopbtn.disabled = true;
			recbtn.disabled = true;
			savebtn.disabled = true;
			pausebtn.disabled = false;
			
		}
		
		pausebtn.onclick = function (){
			//calling the control API method
			tagRecorder.pause();
			
			//enabling record, play and save buttons, disabling pause and stop buttons
			pausebtn.disabled = true;
			stopbtn.disabled = true;
			recbtn.disabled = false;
			playbtn.disabled = false;
			savebtn.disabled = false;
		}
		
		savebtn.onclick = function (){
			//calling the control API method
			tagRecorder.save();
			
			//disabling the save button
			savebtn.disabled = true;
		}
		
	}
	
	removebtn.onclick = function (){
		//calling the control API method
		tagRecorder.remove();
		
		//disabling the remove button
		removebtn.disabled = true;
	}
	
	
	//========================== Events API for first Recorder ===============================
	
	//DESKTOP EVENTS API
	tagRecorder.userHasCamMic = function(id,camNr, micNr){
		var args = Array.prototype.slice.call(arguments);
		__log("userHasCamMic("+args.join(', ')+")");
	}
	
	tagRecorder.btRecordPressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btRecordPressed("+args.join(', ')+")");
	}
	
	tagRecorder.btStopRecordingPressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btStopRecordingPressed("+args.join(', ')+")");
	}
	
	tagRecorder.btPlayPressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btPlayPressed("+args.join(', ')+")");
	}
	
	tagRecorder.btPausePressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btPausePressed("+args.join(', ')+")");
	}
	
	tagRecorder.onUploadDone = function(recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onUploadDone("+args.join(', ')+")");
		
		//enabling record, play and save buttons
		recbtn.disabled = false;
		playbtn.disabled = false;
		savebtn.disabled = false;
	}
	
	tagRecorder.onCamAccess = function(id, allowed){
		var args = Array.prototype.slice.call(arguments);
		__log("onCamAccess("+args.join(', ')+")");
	}
	
	tagRecorder.onPlaybackComplete = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onPlaybackComplete("+args.join(', ')+")");
		
		//enabling play button, disabling pause button
		playbtn.disabled = false;
		pausebtn.disabled = true;
	}
	
	tagRecorder.onRecordingStarted = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onRecordingStarted("+args.join(', ')+")");
	}
	
	tagRecorder.onConnectionClosed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onConnectionClosed("+args.join(', ')+")");
	}
	
	tagRecorder.onConnectionStatus = function(id, status){
		var args = Array.prototype.slice.call(arguments);
		__log("onConnectionStatus("+args.join(', ')+")");
	}
	
	tagRecorder.onMicActivityLevel = function(id, level){
		var args = Array.prototype.slice.call(arguments);
		//__log("onMicActivityLevel("+args.join(', ')+")");
	}
	
	tagRecorder.onFPSChange = function(id, fps){
		var args = Array.prototype.slice.call(arguments);
		//__log("onFPSChange("+args.join(', ')+")");
	}
	
	tagRecorder.onSaveOk = function(recorderId, streamName, streamDuration, cameraName, micName, audioCodec, videoCodec, filetype, videoId, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onSaveOk("+args.join(', ')+")");
	}
	
	tagRecorder.onFlashReady = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onFlashReady("+args.join(', ')+")");
	}
	
	//DESKTOP UPLOAD EVENTS API
	tagRecorder.onDesktopVideoUploadStarted = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadStarted("+args.join(', ')+")");
	}
	
	tagRecorder.onDesktopVideoUploadSuccess = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadSuccess("+args.join(', ')+")");
	}
	
	tagRecorder.onDesktopVideoUploadFailed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadFailed("+args.join(', ')+")");
	}
			
		
	//MOBILE EVENTS API
	tagRecorder.onVideoUploadStarted = function(recorderId, filename, filetype, audioOnly){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadStarted("+args.join(', ')+")");
	}
	
	tagRecorder.onVideoUploadSuccess = function(recorderId, filename, filetype, videoId, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadSuccess("+args.join(', ')+")");
	}
	
	tagRecorder.onVideoUploadProgress = function(recorderId, percent){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadProgress("+args.join(', ')+")");
	}
	
	tagRecorder.onVideoUploadFailed = function(id, error){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadFailed("+args.join(', ')+")");
	}
	
	//========================== Events API for second Recorder (not all events are implemented for the second recorder) ===============================
	
	//DESKTOP EVENTS API
	tagRecorder2.userHasCamMic = function(id,camNr, micNr){
		var args = Array.prototype.slice.call(arguments);
		__log("userHasCamMic("+args.join(', ')+")");
	}
	
	tagRecorder2.btRecordPressed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("btRecordPressed("+args.join(', ')+")");
	}
	
	tagRecorder2.onUploadDone = function(recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onUploadDone("+args.join(', ')+")");
		
	}
	
	tagRecorder2.onRecordingStarted = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onRecordingStarted("+args.join(', ')+")");
	}
	
	tagRecorder2.onConnectionClosed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onConnectionClosed("+args.join(', ')+")");
	}
	
	tagRecorder2.onConnectionStatus = function(id, status){
		var args = Array.prototype.slice.call(arguments);
		__log("onConnectionStatus("+args.join(', ')+")");
	}
	
	tagRecorder2.onSaveOk = function(recorderId, streamName, streamDuration, cameraName, micName, audioCodec, videoCodec, filetype, videoId, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onSaveOk("+args.join(', ')+")");
	}
	
	//DESKTOP UPLOAD EVENTS API for first recorder
	tagRecorder2.onDesktopVideoUploadStarted = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadStarted("+args.join(', ')+")");
	}
	
	tagRecorder2.onDesktopVideoUploadSuccess = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadSuccess("+args.join(', ')+")");
	}
	
	tagRecorder2.onDesktopVideoUploadFailed = function(id){
		var args = Array.prototype.slice.call(arguments);
		__log("onDesktopVideoUploadFailed("+args.join(', ')+")");
	}
			
		
	//MOBILE EVENTS API for first recorder
	tagRecorder2.onVideoUploadStarted = function(recorderId, filename, filetype, audioOnly){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadStarted("+args.join(', ')+")");
	}
	
	tagRecorder2.onVideoUploadSuccess = function(recorderId, filename, filetype, videoId, audioOnly, location){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadSuccess("+args.join(', ')+")");
	}
	
	tagRecorder2.onVideoUploadProgress = function(recorderId, percent){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadProgress("+args.join(', ')+")");
	}
	
	tagRecorder2.onVideoUploadFailed = function(id, error){
		var args = Array.prototype.slice.call(arguments);
		__log("onVideoUploadFailed("+args.join(', ')+")");
	}
			
}


	
//Logger
function __log(e, data) {
	log.innerHTML += "\n" + e + " " + (data || '');
}