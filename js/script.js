const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("artist");

const url = "https://keadata-ece4.restdb.io/rest/golden-ratio-database";

// API key
const key = { headers: { "x-apikey": "6151ddb6dfa7346e2f9690b9" } };

//Heidi's changes
/* fetch(url, key)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then(function (data) {
    // console.log(data);
    handleData(data);

  })


  .catch((e) => {
    console.error("An error occured", e.message);
  });
 */

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
  clone.querySelector("h1.listh1").textContent = obj.title;
  clone.querySelector("h2").textContent = obj.artist;
  clone.querySelector(".country span").textContent = obj.country;

  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
