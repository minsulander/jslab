var page = require('webpage').create();

page.onConsoleMessage = function (message) {
	console.log(message);
  	if (message == "ConsoleReporter finished") {
  		var status = page.evaluate(function() { return consoleReporter.status; });
  		switch (status) {
  			case 'success': 
  				console.log('SUCCESS');
  				phantom.exit(0);
  				break;
  			case 'fail': 
  				console.log('FAIL');
  				phantom.exit(1);
  				break;
  			default:
  				console.log('UNKNOWN: ' + status);
		  		phantom.exit(2);
  		}
  	}
};

page.open('specrunner.html', function (status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
        phantom.exit(3);
    } else {
	    // page.render('page.png');
	    // wait for the magic console message
    }
});
