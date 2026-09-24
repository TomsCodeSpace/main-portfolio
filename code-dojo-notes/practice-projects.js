let displayData = {
    "--Title1--": {
        description: "Made a new GUI for a website",
        number: "1",
        embedVideo: "https://www.youtube.com/embed/IAYXwo_uGcQ?si=d6a3Twq5R_oSKzS0",
        date: "11/08/1984",
        postLink: "https://www.google.com"

    },
    "Title2": {
        description: "Made a brand new sign in system",
        number: "2",
        embedVideo: "https://www.youtube.com/embed/IAYXwo_uGcQ?si=d6a3Twq5R_oSKzS0",
        date: "11/08/1984",
        postLink: "https://www.youtube.com"
    }
  
};

// Get the container where posts will go
const postsContainer = document.getElementById("highlights");

// Loop through all posts in displayData
for (const [description, details] of Object.entries(displayData)) {

    const cardId = `card-${description}`;

    const postHTML = `
       <div class="post">

            <iframe
                width="400"
                height="200"
                src="${details.embedVideo}" 
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>  
            
            
        
            <p class="xp"> <strong>Completed:</strong> ${details.date} </p>


            <!-- TOGGLE BUTTON -->
            <button onclick="toggleCard('${cardId}')" style="background-color: transparent; height: 5rem; width: 5rem; font-size: 4rem;">
            
            <p class="info">
                    <p class="info-link">
                        <i class="fa-solid fa-circle-info"></i>
                    </p
                </p>
            </button>

            <!-- UNIQUE CARD -->
            <div class="card" id="${cardId}" style="position: absolute; z-index: 20; padding: 20px; border-radius: 10%;">
            <p>${description}</p>
 
            <p class="title">"${details.description}"</p>


            <br>
            <a href="${details.postLink}">--View Post Here--</a>
            </div>

    </div>


 

    <hr>
  `;

    postsContainer.innerHTML += postHTML;
}
function toggleCard(cardId) {


    const card = document.getElementById(cardId);

    if (!card) return;

    card.classList.toggle("show");
}