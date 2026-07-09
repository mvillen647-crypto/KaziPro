import { supabase } from "./supabase.js";



// REGISTER

window.register = async function(){


const name =
document.getElementById("name").value;


const phone =
document.getElementById("phone").value;


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;


const role =
document.getElementById("role").value;



const {data,error} =

await supabase.auth.signUp({

email,
password


});



if(error){

alert(error.message);
return;

}




const user = data.user;



const {error:profileError}=

await supabase

.from("profiles")

.insert({

id:user.id,

name,

phone,

role

});





if(profileError){

alert(profileError.message);

return;

}



alert("Account created!");

window.location.href="index.html";


};







// LOGIN

window.login = async function(){


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;



const {error}=

await supabase.auth.signInWithPassword({

email,
password

});



if(error){

alert(error.message);
return;

}



window.location.href="index.html";


};
