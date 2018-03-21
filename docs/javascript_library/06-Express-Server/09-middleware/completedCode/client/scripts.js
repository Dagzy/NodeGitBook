function fetchHelloDataFromAPI() {
	var helloWorld = document.getElementById('para');

	fetch('http://localhost:3000/test/helloclient')
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


//An example of a POST w/ fetch() and the Test Data
function postData() {
	let content = { testdata: { item: 'stuff' } };
	let fetchData = document.getElementById('paraTwo');

	// The actual fetch request
	fetch('http://localhost:3000/test/seven', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(content)
	})
	.then(response => response.json())
	.then(function (text) {
		console.log(text);
		fetchData.innerHTML = text.testdata.createdAt;
	});
}


function getUserDataFromAPI() {
	var userData = document.getElementById('paraTwo');

	fetch('http://localhost:3000/api/user')
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
			userData.innerHTML = "";
			for (r of residents) {
				console.log(r);
				userData.innerHTML = r; //broken code
				//userData.insertAdjacentHTML('beforeend', "  " + r); //working code
			}
		});
}