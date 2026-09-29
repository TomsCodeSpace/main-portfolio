
//This is the snippet to snatch data from database
//to display to the main page



let displayData = {
    "--Post Title1--": {
        number: "1",
        Date: "20250708",
        decription: "Installing Python library1",
        videoLink: "https://www.youtube.com/watch?v=_Qw4gnzdRt4",
        videoEmbed: "https://www.youtube.com/embed/_Qw4gnzdRt4?si=-meCfh9p5U-91C21",
        github: "youtube.com",
        notes: ["apple", "banana", "cherry"]
    },
    "Post Title2": {
        number: "2",
        Date: "20250709",
        description: "Installing Python library2",
        videoLink: "https://www.youtube.com/watch?v=_Qw4gnzdRt4",
        videoEmbed: "https://www.youtube.com/embed/_Qw4gnzdRt4?si=-meCfh9p5U-91C21",
        github: "youtube.com",
        notes: ["grape", "orange", "pear"]
    }
};

// Get the container where posts will go
const postsContainer = document.getElementById("blog-posts");

// Loop through all posts in displayData
for (const [title, details] of Object.entries(displayData)) {
    const postHTML = `
   


    <div class="post post${details.number}">
      <h1>${title}</h1>
      <p><strong>Date:</strong> ${details.Date}</p>
      <p><strong>Description:</strong> <br>${details.description}</p>
      <iframe width="415" height="245" src="${details.videoEmbed}" frameborder="0" allowfullscreen></iframe>
      <p><strong>GitHub/Paper Guide:</strong> <a href="https://${details.github}" target="_blank">${details.github}</a></p>
      <p><strong>Notes:</strong><br>${details.notes.join("<br>")}</p>
      <br>
      <br>
    </div>
    <hr>
  `;

    postsContainer.innerHTML += postHTML;
}
