const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("artist");

const url = `https://keadata-ece4.restdb.io/rest/golden-ratio-database?q={"artist": "${artist}"}`;

document.querySelector("#black-title").textContent = artist;
document.querySelector("#white-title").textContent = artist;

// API key
const key = { headers: { "x-apikey": "6151ddb6dfa7346e2f9690b9" } };

fetch(url, key)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    console.log(data);
    // handleData(data);
  });

function handleData(data) {
  data.forEach(showArtists);
}
