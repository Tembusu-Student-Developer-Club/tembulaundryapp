import firebase from 'firebase'

var config = {
  databaseURL: "https://tlaundry2.firebaseio.com"
};

var fire = firebase.initializeApp(config);
export default fire;