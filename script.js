function notifyMe() {
	// request permission on page load
	document.addEventListener('DOMContentLoaded', function () {
		if (Notification.permission !== "granted")
		    Notification.requestPermission();
		});

		// check for notification support in your browser
		if (!Notification) {
		  	document.getElementById("status").innerHTML = '<div class="alert alert-danger"><strong>Failed!</strong> Desktop notifications not available in your browser. Try Chromium..</div>';
		    return;
		}

		if (Notification.permission !== "granted")
		    Notification.requestPermission();
		else {
		  	document.getElementById("status").innerHTML = '<div class="alert alert-success" style="margin-top:50px;"><strong>Success!</strong> Desktop notifications has sent to your device..</div>';

		    var notification = new Notification('Hey you got a new notification', {
		      icon: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
		      body: "Hey there! You've been notified!",
		    });

		    notification.onclick = function () {
		      window.open("https://github.com/venkata-ramana");      
		};
	}
}	