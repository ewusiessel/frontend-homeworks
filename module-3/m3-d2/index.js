const btn = document.getElementById("btn");
btn.addEventListener("click", getAlbums);
const div = document.getElementById("cardDiv");

// fetch apis
function getAlbums() {

  let metallicaApi = fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica ",

    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e231654c7bmshc8457f88c6def78p1ccaa2jsnf9f1cf1ca0b5",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );

  let eminemApi = fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem ",

    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e231654c7bmshc8457f88c6def78p1ccaa2jsnf9f1cf1ca0b5",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );

  let behemothApi = fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth ",

    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e231654c7bmshc8457f88c6def78p1ccaa2jsnf9f1cf1ca0b5",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  );

  Promise.all([eminemApi, behemothApi, metallicaApi])
    .then((albums) => Promise.all(albums))
    .then((albumData) => {
      let eminem = albumData[0];
      console.log(eminem);
      let metallica = albumData[1];
      console.log(metallica);
      let behemoth = albumData[2];
      console.log(behemoth);
    })
  
    

  // .then((response) => response.json())
  // .then((results) => {
  //   console.log(results);
  //   for (let i = 0; i < results.data.length; i++) {
  //     const result = results.data[i];
  //     div.innerHTML += `
  //         <div class="card col-3 m-1 mx-auto">
  //             <img class="card-img-top" src="${result.album.cover}">
  //             <div class="card-body">
  //             <h5 class="card-title">${result.album.title}</h5>
  //             <p class="card-text"></p>
  //             </div>
  //         </div>
  //       `;
  //   }
  // })
  // .catch((err) => {
  //   console.error(err);
  // });
}
