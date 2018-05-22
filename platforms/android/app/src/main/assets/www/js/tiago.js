var tiago = {
    // Constructor de la aplicacion
    initialize: function() {
        // Lo primero que debemos hacer es iniciar el device ready, cuando todo este cargado.
        document.addEventListener("deviceready", this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        // Plugin de cordova. Pidiendo activar el GPS
        cordova.plugins.locationAccuracy.canRequest(function(canRequest){
            if(canRequest){
                cordova.plugins.locationAccuracy.request(function (success){
                    // Si se ha hecho la solicitud de activar GPS con éxito
                    console.log("GPS solicitado con éxito: "+success.message);
                    // Llamada a la función isLocationAvailable para conocer si está activado el GPS o no.
                    tiago.isLocationAvailable();

                    // Utilizando el plugin cordova geolocation.
                    // obteniendo la posición actual.
                    navigator.geolocation.getCurrentPosition(tiago.onSuccessGetPosition, tiago.onErrorGetPosition);

                }, function (error){
                    // Si no se ha hecho la solicitud de activar GPS con éxito

                    // Comprobamos si la localizacion está activada.
                    tiago.isLocationAvailable();

                    console.error("No se ha podido activar el GPS automaticamente con éxito.");
                    console.error("Accuracy request failed: error code="+error.code+"; error message="+error.message);

                    if(error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED){
                        if(window.confirm("No se ha podido iniciar el GPS automaticamente, quieres ir al panel de control?")){
                            cordova.plugins.diagnostic.switchToLocationSettings();
                        }
                    }
                }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
            }else{
                // request location permission and try again
            }

            

        });
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        var parentElement = document.getElementById("ok");
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    },
    

    isLocationAvailable: function(){
        // Localización
        cordova.plugins.diagnostic.isLocationAvailable(onSuccessLocationAvailable, onErrorLocationAvailable);
        function onSuccessLocationAvailable(available){
            alert("Localización " + (available ? "está disponible" : "indisponible"));
        }
        function onErrorLocationAvailable(error){
            alert("Ha ocurrido el siguiente error: "+error);
        }
    },

    onSuccessGetPosition: function(position) {
        console.log("direccion del repartidor: "+ position.coords.latitude+" "+position.coords.longitude);
        alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
    },

    onErrorGetPosition: function(error) {
        console.error("No se ha podido obtener la localización");
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
};








/*
var tiago = {
    // Constructor de la aplicacion
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // Controlador de eventos "deviceready"
    onDeviceReady: function() {
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        cordova.plugins.locationAccuracy.canRequest(function(canRequest){
        if(canRequest){
            cordova.plugins.locationAccuracy.request(function (success){
                console.log("Successfully requested accuracy: "+success.message);

                // Localización
                cordova.plugins.diagnostic.isLocationAvailable(ok, error);
                    function ok(available){
                        alert("Location is " + (available ? "available" : "not available"));
                    }
                    function error(error){
                        alert("The following error occurred: "+error);
                    }

                    alert("Tiago la Pizza sl");
                    var onSuccess = function(position) {
                        console.log("direccion del repartidor: "+ position.coords.latitude+" "+position.coords.longitude);
                        var elemento = document.getElementById("geolocation");
                        elemento.innerHTML=position.coords.latitude+" "+position.coords.longitude;
                        alert('Latitude: '          + position.coords.latitude          + '\n' +
                            'Longitude: '         + position.coords.longitude         + '\n' +
                            'Altitude: '          + position.coords.altitude          + '\n' +
                            'Accuracy: '          + position.coords.accuracy          + '\n' +
                            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                            'Heading: '           + position.coords.heading           + '\n' +
                            'Speed: '             + position.coords.speed             + '\n' +
                            'Timestamp: '         + position.timestamp                + '\n');
                    };

                    // onError Callback receives a PositionError object
                    //
                    function onError(error) {
                        alert('code: '    + error.code    + '\n' +
                            'message: ' + error.message + '\n');
                        alert("No se ha podido encontrar");
                    }

                    navigator.geolocation.getCurrentPosition(onSuccess, onError);

                    var parentElement = document.getElementById("ok");
                    var listeningElement = parentElement.querySelector('.listening');
                    var receivedElement = parentElement.querySelector('.received');

                    listeningElement.setAttribute('style', 'display:none;');
                    receivedElement.setAttribute('style', 'display:block;');
                    



            }, function (error){

                cordova.plugins.diagnostic.isLocationAvailable(ok, error);
                function ok(available){
                    alert("Location is " + (available ? "available" : "not available"));
                }
                function error(error){
                    alert("The following error occurred: "+error);
                }

                var elemento = document.getElementById("geolocation");
                elemento.innerHTML="No esta activado el GPS";
                        

                console.error("Accuracy request failed: error code="+error.code+"; error message="+error.message);
                if(error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED){
                    if(window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")){
                        cordova.plugins.diagnostic.switchToLocationSettings();
                    }
                }
            }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
        }else{
            // request location permission and try again
        }
        });
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    }
}; */