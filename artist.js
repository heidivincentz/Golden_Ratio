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

function showData(obj) {console.log("data");
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".headline").textContent = obj.artist;
  clone.querySelector(".aside").textContent = obj.bio;
  clone.querySelector(".imgforgrid").src = obj.img;

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
