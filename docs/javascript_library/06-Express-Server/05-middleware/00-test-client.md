# TEST CLIENT
In this module we'll set up a test client for testing 


TODO: Write a test client with the following items 
```
    test-client
        index.html
        test.js
```

index.html needs to have
    jquery
    

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Workout Log</title>

</head>

<body>
  <ul class="nav nav-tabs">
    <li><a href="#" id="testAPI">Test API</a></li>
  </ul>

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins)-->
  <script src="./bower_components/jquery/dist/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="./bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

  <script src="app.js"></script>
</body>
</html>

```



```js
$(document).ready(function(){
	$('#testAPI').on('click', function(){
		console.log("It is working.");
	});

	var test = $.ajax({
			type: "GET",
			url: "http://localhost:3000/api/test"
		});
		test.done(function(data){
			console.log(data);
		});
		test.fail(function(){
			console.log("Oh no!");
    	});
});

```

