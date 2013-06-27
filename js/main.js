function getFeedObjects (userId) {
	// hit the endpoint to download the current feed objects
	// getlistquestionsnew
	// get the new url
	var url = "ec2-54-245-213-191.us-west-2.compute.amazonaws.com/getlistquestionsnew/" + String(userId);
	$.get(url, function (data) {
		// update UI
		alert("This worked");
	});
}	

function pollForNotification() {
	// poll webserver for notification
	alert("Polling incomplete");
}