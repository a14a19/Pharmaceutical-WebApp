$(document).ready(function(){
    const btnLogin = document.getElementById("btn-login");
    const userName = document.getElementById("username");
    const pwd = document.getElementById("pwd")
    const form = document.getElementById("form-login")

    btnLogin.addEventListener('click', (e)=>{
        e.preventDefault();
        if(userName != '' && pwd.value != '' && userName.value == pwd.value){
            console.log(userName.value);
            console.log(pwd.value);  
            alert('Login successful')
            localStorage.setItem('a', true)
            location.pathname = "/orders/orders.html"
        }
        if(userName.value == '' || pwd.value == '' || userName.value !== pwd.value){
            alert("Please enter valid credentials!.")
        }
        userName.value = '';
        pwd.value = ''; 
    })
})

