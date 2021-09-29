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
    // console.log(data);
    handleData(data);
  });

function handleData(data) {
  data.forEach(showArt);
}

function showArt(pic) {
  document.querySelector(".aside").innerHTML = pic.bio;
  document.querySelector(
    ".backgroundimg"
  ).style.backgroundImage = `url("https://neurotive.com/KEA/Golden_Ratio/louisiana_archivephotos_golden-ratio/${pic.TMSid}.jpg")`;
  //   console.log(pic);
  const shCard = document.querySelector("#pic-template").content;
  const clone = shCard.cloneNode(true);

  clone
    .querySelector(".art-img")
    .setAttribute(
      "src",
      `https://neurotive.com/KEA/Golden_Ratio/louisiana_archivephotos_golden-ratio/${pic.TMSid}.jpg`
    );

  const parent = document.querySelector(".imggrid");
  parent.appendChild(clone);
}
