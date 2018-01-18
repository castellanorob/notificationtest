// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmxIsxvZnN6jPLMI6vnF8Q12A_CadQso4",
    authDomain: "notification-test-9e547.firebaseapp.com",
    databaseURL: "https://notification-test-9e547.firebaseio.com",
    projectId: "notification-test-9e547",
    storageBucket: "notification-test-9e547.appspot.com",
    messagingSenderId: "1020123228239"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  messaging.requestPermission()
  .then(function() {
      console.log('Have Permission');
      return messaging.getToken();
  })
  .then(function(token) {
      console.log(token);
  })

  .catch(function(err) {
      console.log('Error Occurred.');
  })