/***************************************
 * FETCH/GET from Auth Route
*************************************/
function fetchFromAuthRouteOne() {
	const fetch_url = `http://localhost:3000/authtest/getall`
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
	})
		.then(response => {
			return response.json();
		})
		.then(data => {

			console.log(data)
		})
}


/***************************************
 * FETCH/POST to Auth/Create
*************************************/
function postToAuthRouteCreate() {
	const fetch_url = `http://localhost:3000/authtest/create`
	const accessToken = localStorage.getItem('SessionToken')

	let authTestDataInput = document.getElementById('authTestData').value;

	let authInputData = { authtestdata: { item: authTestDataInput } };
	const response = fetch(fetch_url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		},
		body: JSON.stringify(authInputData)
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data)
		})
}


/***************************************
 * FETCH/GET ITEM BY USER
*************************************/

function getOneByUser() {
	const fetch_url = `http://localhost:3000/authtest/15`
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
	})
		.then(response => {
			return response.json();

		})
		.then(function (response) {
			console.log(response);
			var myItem = document.querySelector('section.auth-test-put');
			var inputItem = document.createElement('input');
			inputItem.setAttribute("id", "auth-put");
			inputItem.value = response.authtestdata;
			myItem.appendChild(inputItem);
		})
}

/***************************************
 * PUT to authtest/update/:id
*************************************/
function updateItem() {
	const fetch_url = `http://localhost:3000/authtest/update/15`
	const accessToken = localStorage.getItem('SessionToken')
	let authTestDataInput = document.getElementById('auth-put').value;

	let authInputData = { authtestdata: { item: authTestDataInput } };
	const response = fetch(fetch_url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		},
		body: JSON.stringify(authInputData)
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data)
		})
}



function deleteItem() {
	const fetch_url = `http://localhost:3000/authtest/delete/16`
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
	})
		.then(response => {
			console.log(response);
		})
}


function deleteItemById(paramNum) {
	const fetch_url = `http://localhost:3000/authtest/delete/${paramNum}`
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
	})
		.then(response => {
			console.log(response);
		})
}



/********
 * 13
******* */
/***************************************
 * STEP ONE: FETCH/GET FROM /ONE - Display Data
*************************************/
function fetchFromOneDisplayData() {
	let url = 'http://localhost:3000/test/one';
	let dataView = document.getElementById('display-thirteen');
	fetch(url, {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then(
		function (response) {
			return response.json()
		})
		.catch(
			function (error) {
				console.error('Error:', error)
			})
		.then(
			function (response) {
				let text = '';
				var myList = document.querySelector('ul#thirteen');
				console.log(response);
				for (r of response) {
					var listItem = document.createElement('li');
					var textData = + r.id + ' ' + r.testdata;
					listItem.innerHTML = textData;
			
					myList.appendChild(listItem);
					myList.addEventListener('click', removeItem);
				}
			})
}


function removeItem(e) {
	console.log(e);
	var target = e.target;
	console.log(target);
	if(target.tagName !== 'LI') return;
	target.parentNode.removeChild(target);

}

