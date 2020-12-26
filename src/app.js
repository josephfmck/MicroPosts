import { http } from "./http";


//  Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);


function getPosts() {
    //get returns promise, so need .then
    http.get('http://localhost:3000/posts')
        .then(data => console.log(data))
        .catch(err => console.log(err));
};
