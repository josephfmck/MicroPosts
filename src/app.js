import { http } from "./http";
import { ui } from "./ui";

//  Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

//  Listen for submitting post 
document.querySelector('.post-submit').addEventListener('click', submitPost);

//  Get Posts and display
function getPosts() {
    //get returns promise, so need .then
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

//  Submit post to posts
function submitPost() {
    //  get form data
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    // create data obj with props = to values grabbed
    const data = {
        title: title,
        body: body
    }

    //  Create Post
        //  Gets added to db.json
        //post request gives us a promise so .then
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            //  Alert post created  
                //msg, classes
            ui.showAlert('Post added', 'alert alert-success');

            //  Clear form fields
            ui.clearFields();

            //  Call to display with new post
            getPosts();
        })
        .catch(err => console.log(err));
}
