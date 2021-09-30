const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("country");

const url = `https://keadata-ece4.restdb.io/rest/golden-ratio-database?sort=country&q={"$distinct": "country"}`;

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
  data.forEach(showCountry);
}

function showCountry(country) {
  console.log(country);
  const artistCard = document.querySelector("#country-template").content;
  const clone = artistCard.cloneNode(true);
  clone.querySelector(".country-link").textContent = country;
  clone
    .querySelector(".country-link")
    .setAttribute("href", "country.html?country=" + country);
  const parent = document.querySelector("#country-list");
  parent.appendChild(clone);
}
