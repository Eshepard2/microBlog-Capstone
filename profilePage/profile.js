
// get all DOM Nodes 
let createPostEndpoint = "https://microbloglite.herokuapp.com/api/posts";
const logOutBtn = document.getElementById("logOutBtn");
const newPostTextArea = document.querySelector("textarea").value;
const newPostBtn = document.getElementById("newPostBtn");


// add event listener
newPostBtn.addEventListener("click",postSomething);
logOutBtn.addEventListener("click", logout);


function postSomething() {
let text = newPostForm.newPostTextArea.value
const loginData = getLoginData();
  console.log(loginData.token);
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${loginData.token}`
    },
    body: JSON.stringify({
        "text": text,
    })
  };

fetch(createPostEndpoint, options)
    .then((response) => response.json())
    .then((post) => console.log(post))
    .catch((error) => console.error(error));
    window.location.assign("/posts")

}

    // .catch(error => console.error(error))



