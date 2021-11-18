'use strict'

let mylat = 0;
let mylng = 0;

function getposition() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);	            
	}
}

function geolocationSuccess(position) {

	mylat = position.coords.latitude;
	mylng = position.coords.longitude;			 
}

function geolocationFailure(positionError) {
	if(positionError == 1) {
		alert("Вы решили не предоставлять данные о своем местоположении");
	}
	else if(positionError == 2) {
		alert("Проблемы с сетью или нельзя связаться со службой определения местоположения по каким-либо другим причинам"
		    );
	}
	else if(positionError == 3) {
		alert("He удалось определить местоположение в течение установленного времени."); 
	}	
};

getposition();

const url = 'http://198.199.125.240:8888/';

const {form} = document.forms;

form.addEventListener('submit', function(e){
	e.preventDefault();

	const path = form.querySelector('[name="type"]').value;
	const {places, radius} = form;
	const formData = {
		query: new String(places.value),
		radius: Number.parseInt(radius.value),
		lat: mylat,
        lng: mylng     	
	}   

	const sendData = async () => {
		
	const obj = await fetch(url+`${path}`, {
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},
		body:JSON.stringify(formData)
		});

	const array = await obj.json();

	function initMap() {
		const myLatLng = {
		  lat: mylat,
		  lng: mylng  
		 };
		const map = new google.maps.Map(document.getElementById("maparea"), {
		  zoom: 10,
		  center: myLatLng,
		});

		new google.maps.Marker({
			position: myLatLng,
			map,
			title: "This is me",
		  });

	    for (let key in array){
		
		   new google.maps.Marker({
				position: {
				lat: array[key].lat, 
				lng: array[key].lng
				},
				map,
				title: array[key].name,
		}); 
	}
	  };
	
	initMap();
  };

  	sendData();
 
})




