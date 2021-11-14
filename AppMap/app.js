'use strict'

let result;

function getposition() {
    result = document.getElementById('result');
	
	// Если функциональность геолокации доступна, 
	// пытаемся определить координаты посетителя
	if (navigator.geolocation) {
		// Передаем две функции
		navigator.geolocation.getCurrentPosition(
		            geolocationSuccess, geolocationFailure);
		
		// Выводим результат
		result.innerHTML = "Поиск начался";
	}
	else {
		// Выводим результат
		result.innerHTML = "Ваш браузер не поддерживает геолокацию";
	}
	
}

function geolocationSuccess(position) {
	result.innerHTML = "Последний раз вас засекали здесь: " +
	         position.coords.latitude + ", " + position.coords.longitude;
			 console.log(result)
			 console.log(position.coords.latitude)
			 
}

function geolocationFailure(positionError) {
	if(positionError == 1) {
		result.innerHTML = "Вы решили не предоставлять данные о своем местоположении, " + 
		        "но это не проблема. Мы больше не будем запрашивать их у вас.";
	}
	else if(positionError == 2) {
		result.innerHTML = "Проблемы с сетью или нельзя связаться со службой определения " + 
		        "местоположения по каким-либо другим причинам.";
	}
	else if(positionError == 3) {
		result.innerHTML = "He удалось определить местоположение " 
		        + "в течение установленного времени. ";

	}
	else {
		result.innerHTML = "Загадочная ошибка.";
	}
} 
const url = 'http://198.199.125.240:8888/';


const {form} = document.forms;


let res = form.addEventListener('submit', function(e){
	e.preventDefault();


    getposition();


	const path = form.querySelector('[name="type"]').value;
	
	const {places, radius} = form;
	const formData = {
		query: new String(places.value),
		radius: Number.parseInt(radius.value),
		lat: 46.635417,
  		lng: 32.616867, 
      	
	}   

	console.log(formData);
	

const app = async () => {
	
	const obj = await fetch(url+`${path}`, {
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},
		body:JSON.stringify(formData)
		});
	const array = await obj.json();
   
    console.log(array)
	let arr= array.forEach(element => {
		console.log(element)
		return element
		  
	});
    console.log(arr)
	
  };
 
  app();

  function initMap() {
	const element = document.getElementById('maparea');
	const options = {
		zoom: 12,
		center: {lat: 46.635417, lng: 32.616867},
	};

	let myMap = new google.maps.Map(element, options);

	let markers = [
		{
			coordinates: {lat: 46.636028934331996,
				lng: 32.60813826869111},
			info: '<h3>Москва</h3><br><p>Описание</p>'
		},
		{
			coordinates: {lat: 46.635768,
				lng: 32.608194},
			info: '<h3>Санкт-Петербург</h3><br><p>Описание</p>'
		},
		{
			coordinates: {lat: 46.640245,
				lng: 32.611581},
			info: '<h3>Киев</h3><br><p>Описание</p>'
		}
	];

	for(let i = 0; i < markers.length; i++) {
		addMarker(markers[i]);
	}

	function addMarker(properties) {
		let marker = new google.maps.Marker({
			position: properties.coordinates,
			map: myMap
		});

		if(properties.image) {
			marker.setIcon(properties.image);
		}

		if(properties.info) {
			let InfoWindow = new google.maps.InfoWindow({
				content: properties.info
			});

			marker.addListener('click', function(){
				InfoWindow.open(myMap, marker);
			});
		}
	}
};

initMap();


})




