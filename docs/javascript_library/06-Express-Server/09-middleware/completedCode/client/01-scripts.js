
/********************
 * 
 * HTTP REQUESTS
 * 
 ********************/


/*******************************
 *  1 - GET /helloclient
********************************/
function fetchHelloDataFromAPI() {
	fetch('http://localhost:3000/test/helloclient', {
		method: 'GET', 
		headers: new Headers({
		  'Content-Type': 'application/json'
		})
	})
		.then(function (response) {
			console.log("Fetch response:", response)
			return response.text();
		})
		.then(function (text) {
			console.log(text);
		});
}


/******************************
 * 2 POST long hand: /one 
 *****************************/
function postToOne(){
	var url = 'http://localhost:3000/test/one';
	
	fetch(url, {
	  method: 'POST', 			//1
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(
		function(response){   //2
			return response.text()
		})
	.catch(
		function(error){   //3
			console.error('Error:', error)
		})
	.then(
		function(response){   //4
			console.log('Success:', response);
		})
}


  /***************************************
 * 3 POST /one : Arrow Function
*************************************/
function postToOneArrow(){
	var url = 'http://localhost:3000/test/one';
	
	fetch(url, {
	  method: 'POST', 
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(res => res.text())
	.catch(error => console.error('Error:', error))
	.then(response => console.log('Success:', response));
}
 

/***************************************
 * 4 GET FROM /ONE - Display Data
*************************************/
function fetchFromOneDisplayData() {
	let url = 'http://localhost:3000/test/one';
	let dataView = document.getElementById('display-one');
	fetch(url, {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then(function(response) {
		return response.text()
	})
	.catch(
		function(error) {
			console.error('Error:', error)
		})
		.then(
			function(response) {
				let text = '';
				let myList = document.querySelector('ul');
				
				for (r of response) {
					let listItem = document.createElement('li');
					listItem.innerHTML = r.testdata;
					console.log(r)
					// Console logs for lessons
					// console.log('T:', r.testdata);
					break;
					// console.log("TEXT:", text);
					//myList.appendChild(listItem);
				}
		})
}



/*************************************
 * 5 POST /test/seven Test Data
**************************************/
function postData() {
	let content = { testdata: { item: 'This was saved!' } };
	let testDataAfterFetch = document.getElementById('test-data');
	let createdAtAfterFetch = document.getElementById('created-at');

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
		testDataAfterFetch.innerHTML = text.testdata.testdata;
		createdAtAfterFetch.innerHTML = text.testdata.createdAt;
	});
}
