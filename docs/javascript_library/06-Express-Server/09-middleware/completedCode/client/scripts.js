function fetchHelloDataFromAPI() {
	var helloWorld = document.getElementById('para');
	
	fetch('http://localhost:3000/api/test')
		.then(function (response) {
			console.log("Fetch response:", response)
			return response.text() 
		})
		.then(function (text) {
			console.log("Put this in the html");
			console.log(text);
			helloWorld.innerHTML = text;
		});
  }


  function getUserDataFromAPI() {
	var userData = document.getElementById('paraTwo');
	
	fetch('http://localhost:3000/api/userdata')
		.then(function (response) {
			console.log("Fetch response:", response)
			return response.json() 
		})
		.then(function (json) {
			console.log("Put this in the html");
			console.log(json);
			userData.innerHTML = json.user;
		});
  }

  function getPlanetDataFromAPI() {
	var userData = document.getElementById('paraThree');
	
	fetch('http://localhost:3000/moredata.json')
		.then(function (response) {
			console.log("Fetch response:", response)
			return response.json() 
		})
		.then(function (json) {
			var residents = json.residents;
			console.log("Put this in the html");
			console.log(json);
			for(r of residents){
				console.log(r);
				userData.innerHTML = r;
			}
		});
  }