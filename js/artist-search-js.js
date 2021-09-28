const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("artist");

const url =
  "https://keadata-ece4.restdb.io/rest/golden-ratio-database?sort=artist";

// API key
const key = { headers: { "x-apikey": "6151ddb6dfa7346e2f9690b9" } };

fetch(url, key)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleData(data);
  });

function handleData(data) {
  data.forEach(showArtists);
}

function showArtists(art) {
  console.log(art);
  const artistCard = document.querySelector("#name-results").content;
  const clone = artistCard.cloneNode(true);
  clone.querySelector(".artist-name").textContent = art.artist;
  //   clone.querySelector(".").textContent = cat.category;
  const parent = document.querySelector("#artist-results");
  parent.appendChild(clone);
}

//   <template id="name-results">
//   <a href="artist.html" class="artist-link">
//       <p class="artist-name"></p>
//       <img class="arrow-right" src="assets/arrow-black.png" alt="arrow-black" width="20" height="20">
//   </a>
// </template>
