const btn = document.getElementById("btn")
btn.addEventListener("click", getAlbums)
const div = document.getElementById("cardDiv")


// fetch api
function getAlbums() {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e231654c7bmshc8457f88c6def78p1ccaa2jsnf9f1cf1ca0b5",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json()) 
      .then((data) => {
         
        for (let i = 0; i < data.data.length; i++){
            div.innerHTML += `
            <div class="card col-3 m-1 mx-auto">
                <img class="card-img-top" src="${data.album}">
                <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.id}</p>
                </div>
            </div>
          `
      }
    })

    .catch((err) => {
      console.error(err);
    });
};