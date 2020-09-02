import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyAdHsN9z9QwY4yb442nJZinCstoc_D6zLg',
	authDomain: 'login-page-temp.firebaseapp.com',
	databaseURL: 'https://login-page-temp.firebaseio.com',
	projectId: 'login-page-temp',
	storageBucket: 'login-page-temp.appspot.com',
	messagingSenderId: '383799206347',
	appId: '1:383799206347:web:212830d0ef1b6de973564e',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
