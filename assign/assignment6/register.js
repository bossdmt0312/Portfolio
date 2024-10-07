window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    var lastname = document.forms["myRegister"]["lastname"].value;
    var gender = document.forms["myRegister"]["gender"].value;
    var bday = document.forms["myRegister"]["bday"].value;
    var email = document.forms["myRegister"]["email"].value;
    var username = document.forms["myRegister"]["username"].value;
    var password = document.forms["myRegister"]["password"][0].value;
    var retypepassword = document.forms["myRegister"]["password"][1].value;
    if (lastname == "" || gender == "" || bday == "" || email == "" || username == "") {
        document.getElementById("errormsg").innerHTML = "กรอกข้อมูลยังไม่ครบ";
        return false;
    }
    if (password != retypepassword) {
        document.getElementById("errormsg").innerHTML = "รหัสไม่ถูกต้อง";
        return false
    }
    // alert (password+retypepassword)
}