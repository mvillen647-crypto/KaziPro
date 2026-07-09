// KaziPro App Controller

import { loadJobs } from "./jobs.js";


// Run app

document.addEventListener("DOMContentLoaded", async () => {

    console.log("KaziPro App Started 🚀");


    // Load jobs from Supabase

    if(document.getElementById("jobs-container")){

        await loadJobs();

    }


    setupSearch();

});





// Search Jobs

function setupSearch(){

    const searchInput =
    document.getElementById("search-job");


    if(!searchInput) return;


    searchInput.addEventListener(
        "input",
        function(){

            const value =
            this.value.toLowerCase();


            const cards =
            document.querySelectorAll(".job-card");


            cards.forEach(card=>{


                const text =
                card.innerText.toLowerCase();


                if(text.includes(value)){

                    card.style.display="block";

                }else{

                    card.style.display="none";

                }


            });


        }
    );


}






// Bottom navigation active state

const navItems =
document.querySelectorAll(".nav-item");


navItems.forEach(item=>{


    item.addEventListener("click",()=>{


        navItems.forEach(nav=>
            nav.classList.remove("active")
        );


        item.classList.add("active");


    });


});
