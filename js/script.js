const url = "https://keadata-ece4.restdb.io/rest/golden-ratio-database";

// API key
const options = { headers: { "x-apikey": "6151ddb6dfa7346e2f9690b9" } };

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    // console.log(data);
  })

  .catch((e) => {
    console.error("An error occured", e.message);
  });

function handleData(artpiece) {
  superheroes.forEach((piece) => {
    // console.log(piece);
    // Create template

    // Grab
    const template = document.querySelector("template").content;
    // Clone
    const clone = template.cloneNode(true);
    // Populate

    clone.querySelector(".artimg").src = artpiece.img_url;

    // Append

    const parent = document.querySelector("main");
    parent.appendChild(clone);
  });
}
