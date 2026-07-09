// KaziPro Jobs System

import { supabase } from "./supabase.js";



export async function loadJobs(){


    const container =
    document.getElementById("jobs-container");


    if(!container) return;



    const { data, error } = await supabase

        .from("jobs")

        .select(`
            *,
            companies(
                name,
                logo_url,
                verified
            )
        `)

        .order(
            "created_at",
            {
                ascending:false
            }
        );




    if(error){

        console.error(
            "Jobs loading error:",
            error.message
        );

        container.innerHTML = `

        <p>
        Imeshindikana kupakia kazi.
        </p>

        `;

        return;

    }




    if(data.length === 0){

        container.innerHTML = `

        <p>
        Hakuna kazi mpya kwa sasa.
        </p>

        `;

        return;

    }





    container.innerHTML = "";



    data.forEach(job=>{


        const card = document.createElement("div");


        card.className="job-card";



        card.innerHTML = `

        <h3>
        ${job.title}
        </h3>


        <p>
        ${job.companies?.name || "Company"}
        ${job.companies?.verified ? " ✅" : ""}
        </p>


        <p class="location">
        📍 ${job.location}
        </p>


        <p>
        💼 ${job.sector}
        </p>


        <p>
        ${job.salary_range || ""}
        </p>



        <button 
        class="btn"
        onclick="applyJob(${job.id})">

        Apply Now

        </button>


        `;



        container.appendChild(card);


    });


}






// Apply Job

window.applyJob = async function(jobId){


    alert(
        "Apply system itaunganishwa na profile hivi karibuni. Job ID: "
        + jobId
    );


};
