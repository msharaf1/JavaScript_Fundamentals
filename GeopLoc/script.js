
// var x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }

// function showError(error) {
//   switch(error.code) {
//     case error.PERMISSION_DENIED:
//       x.innerHTML = "User denied the request for Geolocation."
//       break;
//     case error.POSITION_UNAVAILABLE:
//       x.innerHTML = "Location information is unavailable."
//       break;
//     case error.TIMEOUT:
//       x.innerHTML = "The request to get user location timed out."
//       break;
//     case error.UNKNOWN_ERROR:
//       x.innerHTML = "An unknown error occurred."
//       break;
//   }
// }


function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);



//   function prompt(window, pref, message, callback) {
//     let branch = Components.classes["@mozilla.org/preferences-service;1"]
//                            .getService(Components.interfaces.nsIPrefBranch);

//     if (branch.getPrefType(pref) === branch.PREF_STRING) {
//         switch (branch.getCharPref(pref)) {
//         case "always":
//             return callback(true);
//         case "never":
//             return callback(false);
//         }
//     }

//     let done = false;

//     function remember(value, result) {
//         return function() {
//             done = true;
//             branch.setCharPref(pref, value);
//             callback(result);
//         }
//     }

//     let self = window.PopupNotifications.show(
//         window.gBrowser.selectedBrowser,
//         "geolocation",
//         message,
//         "geo-notification-icon",
//         {
//             label: "Share Location",
//             accessKey: "S",
//             callback: function(notification) {
//                 done = true;
//                 callback(true);
//             }
//         }, [
//             {
//                 label: "Always Share",
//                 accessKey: "A",
//                 callback: remember("always", true)
//             },
//             {
//                 label: "Never Share",
//                 accessKey: "N",
//                 callback: remember("never", false)
//             }
//         ], {
//             eventCallback: function(event) {
//                 if (event === "dismissed") {
//                     if (!done) callback(false);
//                     done = true;
//                     window.PopupNotifications.remove(self);
//                 }
//             },
//             persistWhileVisible: true
//         });
// }

// prompt(window,
//        "extensions.foo-addon.allowGeolocation",
//        "Foo Add-on wants to know your location.",
//        function callback(allowed) { alert(allowed); });