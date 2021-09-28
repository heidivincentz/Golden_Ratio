const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("artist");

const url = "https://keadata-ece4.restdb.io/rest/golden-ratio-database";

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
  data.forEach(showData);
}

function showData(obj) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = obj.artist;
  clone.querySelector(".country span").textContent = obj.country;
  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
