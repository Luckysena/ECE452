/*(function(){
	var config = {
		apiKey: "AIzaSyBxtVxpK5rctDzAHWrB1Ve7oaHPq6wdF6A",
		authDomain: "restaurant-automation-79d80.firebaseapp.com",
		databaseURL: "https://restaurant-automation-79d80.firebaseio.com",
		projectId: "restaurant-automation-79d80",
		storageBucket: "restaurant-automation-79d80.appspot.com",
		messagingSenderId: "750610087414"
	};
	firebase.initializeApp(config);
	
	const list = document.getElementById('demo').innerHTML;
	const dbRef = firebase.database().ref().child('Orders');
	const dbList = dbRef.child('Entrees');
	document.getElementById("demo").innerHTML = "Hello";
	
	angular
		.module('app',[firebase])
		.controller('MyCtrl',function($firebaseObject){
			const rootRef = firebase.database().ref().child('Orders').child('Order1');
			const ref = rootRef.child('Entrees');
			list.innerText = $firebaseObject(ref).val();
		});
	
	dbList.on('value', snap=> {
		list.innertext = JSON.stringify(snap.val(), null, 3);
	});
}());*/