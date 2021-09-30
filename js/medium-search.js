const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("classification");

const url = `https://keadata-ece4.restdb.io/rest/golden-ratio-database?sort=classification&q={"$distinct": "classification"}`;

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
  data.forEach(showMediums);
}

function showMediums(mdm) {
  console.log(mdm);
  const artistCard = document.querySelector("#medium-template").content;
  const clone = artistCard.cloneNode(true);
  clone.querySelector(".medium-type").textContent = mdm;
  clone
    .querySelector(".medium-link")
    .setAttribute("href", "medium.html?classification=" + mdm);
  //   clone.querySelector(".").textContent = cat.category;
  const parent = document.querySelector("#medium-results");
  parent.appendChild(clone);
}

{
  /* <section id="medium-results">
<template id="medium-template">
  <a href="" class="medium-link">
    <p class="medium-type"></p>
    <img class="arrow-right" src="assets/arrow-black.png" alt="arrow-black" width="40" height="40">
  </a>
</template> */
}
