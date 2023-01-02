/* Posts Page JavaScript */

"use strict";
// all variablies
const allPostsEndpoint = "https://microbloglite.herokuapp.com/api/posts";
const pElement = document.getElementById("postText");
const viewAllBtn = document.getElementById("viewAll");
let logoutBtn = document.getElementById("logout");

//logut function
logoutBtn.addEventListener("click", logout)

//View All Button, to see all posts
viewAllBtn.addEventListener("click", getAllUsersPosts)

//calling function before the rest of the JavaScript is executed
getUsersPosts();


function getAllUsersPosts() {
  const loginData = getLoginData();
  console.log(loginData.token);
  let options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  };
  fetch(allPostsEndpoint, options)
    .then((response) => response.json())
    .then((data) => toHTML(data));
}


function toHTML(data) {
    data.forEach((e) => {
      pElement.innerHTML += `<article>
   <b>${e.username}</b>
   <p>${e.text}</p>
   </article>
  `;
    });
  }




function getUsersPosts() {
    const loginData = getLoginData();
    let options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${loginData.token}`,
        },
    };
    fetch(allPostsEndpoint + `/?limit=10&offset=1`, options)
    .then((response) => response.json())
    .then((data) => toHTML(data));
}









// function getUsersPosts() {
//   const loginData = getLoginData();
//   let options = {
//       method: "GET",
//       headers: {
//           Authorization: `Bearer ${loginData.token}`,
//       },
//   };
//   fetch(allPostsEndpoint + `/?limit=20&offset=3&username=${userName}`, options)
//       .then(response => response.json())
//       .then(posts => { console.log(posts) })
// }

// pElement.innerHTML = data

// function toHTML(data) {
//   data.forEach((e) => {
//     pElement.innerHTML += `<article>
//  <p>${e.username}</p>
//  <p>${e.text}</p>
//  </article>
// `;
//   });
// }

// for loop

//   fetch(allPostsEndpoint + `/api/posts/?limit=20&offset=0&username=${userName}`, options)
//         .then(response => response.json())
//         .then(data => { let message = `<li> User: ${data.username} </li> <li> Post: ${data.text} </li>`;
//             pElement.innerHTML = message; })