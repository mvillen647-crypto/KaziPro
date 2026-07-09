import { supabase } from "./supabase.js";


window.register = async function(){

const name =
document.getElementById("name").value;


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;


const role =
document.getElementById("role").value;



const {data,error} =
await supabase.auth.signUp({

email,
password,

options:{
data:{
name,
role
}
}

});


if(error){

alert(error.message);

}else{

alert("Account created!");

window.location.href="login.html";

}


}
