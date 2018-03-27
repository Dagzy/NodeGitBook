# SESSION TOKEN
---

TODO: Explain storing a token in localStorage.

### Code

```js
/****************************
 * HELPER FUNCTION FOR TOKEN
*****************************/
function getSessionToken(){
	var data = localStorage.getItem('SessionToken');
	console.log(data);
}
```

