// const urlParams = new URLSearchParams(window.location.search);
// const artist = urlParams.get("artist");
// const url ="https://keadata-ece4.restdb.io/rest/golden-ratio-database" + artist;
// // API key
// const key = { headers: { "x-apikey": "6151ddb6dfa7346e2f9690b9" } };

// fetch(url)
//     .then((res) => res.json())
//     .then((data) => loop(data));


// function loop(data) {
//     data.forEach(showart)
// }

// function showart(art) {
//     console.log(art);
//     //grab the template
//     const template = document.querySelector("template").content;
//     //clone it
//     const copy = template.cloneNode(true);
//     //change content
//     copy.querySelector(".aside").textContent = `${art.bio}`;
//     clone.querySelector("#imgforgrid").src = art.img;
//      //grab parent
//      const parent = document.querySelector("main");
//      //adapt
//     parent.appendChild(copy);
// }