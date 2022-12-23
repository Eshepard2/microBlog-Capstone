/* Posts Page JavaScript */

"use strict";

let allPostsEndpoint = "https://microbloglite.herokuapp.com/api/posts";
let pElement = document.getElementById("postText");

fetch(allPostsEndpoint)
  .then((response) => response.json())
  .then((data) => {
    let message = `<li> User: ${data.username} </li> <li> Post: ${data.text} </li>`;
    pElement.innerHTML = message;
  });
