function getLoginInformation() {
	// check local storage for the userId
	var userId = null;
	try {
		userId =  localStorage.getItem("userId");
	}
	catch (err) {
		// don't have access to the current facebook ID
		// relog into facebook
		userId = 551733910;
	}
	return userId;
}
