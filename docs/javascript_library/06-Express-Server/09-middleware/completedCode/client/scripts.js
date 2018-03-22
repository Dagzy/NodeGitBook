
/********************
 * 
 * HTTP REQUESTS
 * 
 ********************/


/*******************************
 * GET REQUEST: /helloclient
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
 * FETCH/GET long hand: /one - GET
 *****************************/
function fetchFromOne(){
	var url = 'http://localhost:3000/test/one';
	
	fetch(url, {
	  method: 'GET', 
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(
		function(response){
			return response.json()
		})
	.catch(
		function(error){
			console.error('Error:', error)
		})
	.then(
		function(response){
			console.log('Success:', response);
		})
}

/***************************************
 * FETCH/GET from /one : Arrow Function
*************************************/
function fetchFromOneCondensed(){
	var url = 'http://localhost:3000/test/one';
	
	fetch(url, {
	  method: 'GET', 
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(res => res.json())
	.catch(error => console.error('Error:', error))
	.then(response => console.log('Success:', response));
}

/***************************************
 * FETCH/GET FROM /ONE - Display Data
*************************************/
function fetchFromOneDisplayData(){
	let url = 'http://localhost:3000/test/one';
	let dataView = document.getElementById('display-one');
	fetch(url, {
	  method: 'GET', 
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(
		function(response){
			return response.json()
		})
	.catch(
		function(error){
			console.error('Error:', error)
		})
	.then(
		function(response){
			let text = '';
			var myList = document.querySelector('ul');

			for (r of response){
				var listItem = document.createElement('li');
				listItem.innerHTML = r.testdata;
				//Console logs for lessons
				// console.log('T:', r.testdata);
				// console.log("TEXT:", text);
				myList.appendChild(listItem);
			}
		})
}


/**********************************************
 * POST w/ fetch() and the Test Data
******************************************* */
function postData() {
	let content = { testdata: { item: 'This was saved to the DB' } };
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


