document.addEventListener('deviceready', setupGeolocation, false);
 
function setupGeolocation () {
  /**
   * This function will be executed every time a geolocation was got on the background.
   */
  var callbackFn = function(location) {
        // Console.log only is here. You need to setup your own data interaction here
    console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);

    $.post( "http://localhost/test", { latitude: location.latitude, longitude: location.longitude });
    /*
    IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
    and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
    IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
    */
    backgroundGeoLocation.finish();
  };

    /**
    * Error handler
    */
  var failureFn = function(error) {
    console.log('BackgroundGeoLocation error');
  };

  // A lot of options is available here, you can see them all on plugin repo (see link below)
  backgroundGeoLocation.configure(callbackFn, failureFn, {
    notificationTitle: "Tiago la Pizza Sl",
    notificationText: "Repartiendo :)",
    interval: 1000,
    desiredAccuracy: 10,
    stationaryRadius: 1,
    distanceFilter: 1,
    debug: true, // <-- Play sounds for background-geolocation life-cycle. Also will cause local notifications under iOS.
    stopOnTerminate: true // <-- Clear background location settings when the app terminates
  });

  var parentElement = document.getElementById("ok");
  var listeningElement = parentElement.querySelector('.listening');
  var receivedElement = parentElement.querySelector('.received');

  listeningElement.setAttribute('style', 'display:none;');
  receivedElement.setAttribute('style', 'display:block;');

  // Start tracking of user coords
  backgroundGeoLocation.start();

  // Stop tracking of user coords
  // backgroundGeoLocation.stop();
}

/*function onDeviceReady() {
  backgroundGeolocation.configure({
    locationProvider: backgroundGeolocation.ACTIVITY_PROVIDER,
    desiredAccuracy: backgroundGeolocation.HIGH_ACCURACY,
    stationaryRadius: 50,
    distanceFilter: 50,
    notificationTitle: 'Background tracking',
    notificationText: 'enabled',
    debug: true,
    interval: 10000,
    fastestInterval: 5000,
    activitiesInterval: 10000,
    url: 'http://192.168.81.15:3000/location',
    httpHeaders: {
      'X-FOO': 'bar'
    },
    // customize post properties
    postTemplate: {
      lat: '@latitude',
      lon: '@longitude',
      foo: 'bar' // you can also add your own properties
    }
  });
 
  backgroundGeolocation.on('location', function(location) {
    // handle your locations here
    // to perform long running operation on iOS
    // you need to create background task
    backgroundGeolocation.startTask(function(taskKey) {
      // execute long running task
      // eg. ajax post location
      // IMPORTANT: task has to be ended by endTask
      backgroundGeolocation.endTask(taskKey);
    });
  });
 
  backgroundGeolocation.on('stationary', function(stationaryLocation) {
    // handle stationary locations here
  });
 
  backgroundGeolocation.on('error', function(error) {
    console.log('[ERROR] backgroundGeolocation error:', error.code, error.message);
  });
 
  backgroundGeolocation.on('start', function() {
    console.log('[INFO] backgroundGeolocation service has been started');
  });
 
  backgroundGeolocation.on('stop', function() {
    console.log('[INFO] backgroundGeolocation service has been stopped');
  });
 
  backgroundGeolocation.on('authorization', function(status) {
    console.log('[INFO] backgroundGeolocation authorization status: ' + status);
    if (status !== backgroundGeolocation.AUTHORIZED) {
      // we need to set delay or otherwise alert may not be shown
      setTimeout(function() {
        var showSettings = confirm('App requires location tracking permission. Would you like to open app settings?');
        if (showSetting) {
          return backgroundGeolocation.showAppSettings();
        }
      }, 1000);
    }
  });
 
  backgroundGeolocation.on('background', function() {
    console.log('[INFO] App is in background');
    // you can also reconfigure service (changes will be applied immediately)
    backgroundGeolocation.configure({ debug: true });
  });
 
  backgroundGeolocation.on('foreground', function() {
    console.log('[INFO] App is in foreground');
    backgroundGeolocation.configure({ debug: false });
  });
 
  backgroundGeolocation.checkStatus(function(status) {
    console.log('[INFO] backgroundGeolocation service is running', status.isRunning);
    console.log('[INFO] backgroundGeolocation services enabled', status.locationServicesEnabled);
    console.log('[INFO] backgroundGeolocation auth status: ' + status.authorization);
 
    // you don't need to check status before start (this is just the example)
    if (!status.isRunning) {
      backgroundGeolocation.start(); //triggers start on start event
    }
  });
 
  // you can also just start without checking for status
  // backgroundGeolocation.start();
 
  // Don't forget to remove listeners at some point!
  // backgroundGeolocation.events.forEach(function(event) {
  //   return backgroundGeolocation.removeAllListeners(event);
  // });
  var parentElement = document.getElementById("ok");
  var listeningElement = parentElement.querySelector('.listening');
  var receivedElement = parentElement.querySelector('.received');

  listeningElement.setAttribute('style', 'display:none;');
  receivedElement.setAttribute('style', 'display:block;');
}

document.addEventListener('deviceready', onDeviceReady, false);*/