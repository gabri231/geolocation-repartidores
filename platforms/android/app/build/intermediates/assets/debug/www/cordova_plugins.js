cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "org.apache.cordova.geolocation.Coordinates",
    "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
    "pluginId": "org.apache.cordova.geolocation",
    "clobbers": [
      "Coordinates"
    ]
  },
  {
    "id": "org.apache.cordova.geolocation.PositionError",
    "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
    "pluginId": "org.apache.cordova.geolocation",
    "clobbers": [
      "PositionError"
    ]
  },
  {
    "id": "org.apache.cordova.geolocation.Position",
    "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
    "pluginId": "org.apache.cordova.geolocation",
    "clobbers": [
      "Position"
    ]
  },
  {
    "id": "org.apache.cordova.geolocation.geolocation",
    "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
    "pluginId": "org.apache.cordova.geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Location",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.location"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.bluetooth.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.bluetooth"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.wifi"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.camera"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.notifications"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.microphone"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.contacts"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.calendar"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.nfc"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
    "pluginId": "cordova.plugins.diagnostic",
    "merges": [
      "cordova.plugins.diagnostic.external_storage"
    ]
  },
  {
    "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
    "file": "plugins/cordova-plugin-request-location-accuracy/www/android/RequestLocationAccuracy.js",
    "pluginId": "cordova-plugin-request-location-accuracy",
    "clobbers": [
      "cordova.plugins.locationAccuracy"
    ]
  },
  {
    "id": "cordova-plugin-mauron85-background-geolocation.backgroundGeolocation",
    "file": "plugins/cordova-plugin-mauron85-background-geolocation/www/backgroundGeolocation.js",
    "pluginId": "cordova-plugin-mauron85-background-geolocation",
    "clobbers": [
      "backgroundGeolocation"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "org.apache.cordova.geolocation": "0.3.6",
  "cordova.plugins.diagnostic": "4.0.7",
  "cordova-plugin-request-location-accuracy": "2.2.3",
  "cordova-plugin-mauron85-background-geolocation": "2.3.5"
};
// BOTTOM OF METADATA
});