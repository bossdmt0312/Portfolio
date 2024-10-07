window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	console.log(username);

	const password = urlParams.get('password')
	console.log(password);

	var user = document.forms["myLogin"]["username"].value;
	var pass = document.forms["myLogin"]["password"].value;
	console.log(user)
	console.log(pass)
	console.log(username != user && password != pass)
	if (username != user || password != pass) {
		alert ("กรอกข้อมูลไม่ถูกต้อง")
		return false 
	}else{
		alert ("Login สำเร็จ")
		return false
	}
	// alert ("ถูก!!")
	// return false
}