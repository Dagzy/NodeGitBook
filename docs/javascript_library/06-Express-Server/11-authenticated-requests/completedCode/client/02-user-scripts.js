
/**********************************************
 * POST w/ create a user in Postgres
***********************************************/
function userSignUp(){
	let userName = document.getElementById('user').value;
	let userPass = document.getElementById('pass').value;
	console.log(userName, userPass);

	let newUserData = {user : { username: userName, password: userPass}};
	fetch('http://localhost:3000/api/user/createuser', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUserData)
	})
	.then(response => response.json())
	.then(function (response) {
		console.log(response.sessionToken);
		let token = response.sessionToken;
		localStorage.setItem('SessionToken', token);
	});
}


/****************************
 * HELPER FUNCTION FOR TOKEN
*****************************/
function getSessionToken(){
	var data = localStorage.getItem('SessionToken');
	console.log(data);
}