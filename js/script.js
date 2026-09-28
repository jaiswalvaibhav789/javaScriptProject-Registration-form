function check(){
    let name = document.getElementById('name').value.trim();
    //alert(name)
    let email = document.getElementById('email').value.trim();
    // alert(email)
    let mobile = document.getElementById('mobile').value.trim();
    // alert(mobile)

    let pname = /^[a-zA-Z ]{3,60}$/;
    let pemail = /^[0-9a-zA-Z._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    let pmobile = /^[0-9+]{10,13}$/;

    if(pname.test(name)){
        // alert("Valid Name")
    }else{
        // alert("Inavlid Name")
        document.getElementById('name').style.border ='1px solid red';
        document.getElementById('name-er').innerHTML='Invalid Name'
        document.getElementById('name-er').style.color='red'
    }

    if(pemail.test(email)){
        // alert("valid email")
    }else{
        // alert("Inavlid email")
        document.getElementById('email').style.border="1px solid red"
        document.getElementById('email-er').innerHTML="Invalid email"
        document.getElementById('email-er').style.color="red"
    }

    if(pmobile.test(mobile)){
        // alert("Valid Mobile")
    }else{
        // alert("Invalid mobile")
        document.getElementById('mobile').style.border='1px solid red'
        document.getElementById('mobile-er').innerHTML='Inavlid Mobile Number'
        document.getElementById('mobile-er').style.color='red'
    }


}