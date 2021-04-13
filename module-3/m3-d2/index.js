// fetch api
function listAlbums() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "e231654c7bmshc8457f88c6def78p1ccaa2jsnf9f1cf1ca0b5",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
    })
        .then((response) => {
            console.log(response.json());
        })
        .then(books => {
            const row = document.querySelector(".row")
            row.innerText = ""

            for (let i = 0; i < listAlbums.length; i++) {
                const album = album[i]
                const albumDiv = document.createElement("div")
                albumDiv.classList.add("col-12")
                albumDiv.classList.add("col-md-3")
                const img = document.createElement("img")
                img.src = book.img
                img.classList.add("img-fluid")
                albumDiv.appendChild(img)
                row.appendChild(albumDiv)
            }
      
            // .catch((err) => {
            //   console.error(err);
            // });
        }