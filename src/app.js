import { http } from "./http";
import { ui } from "./ui";

//  Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

//  Listen for submitting post 
document.querySelector('.post-submit').addEventListener('click', submitPost);

//  Listen for delete post
    //event delegation so grab parent #posts
document.querySelector('#postsList').addEventListener('click', deletePost);

//  Listen for Edit State
    //event delegation
document.querySelector('#postsList').addEventListener('click', enableEditState);

//  Listen for Cancel edit btn
    //event delegation
document.querySelector('.card-form').addEventListener('click', cancelEditState);

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
    //  Hidden ID form input
    const id = document.querySelector('#id').value;

    // create data obj with props = to values grabbed
    const data = {
        title: title,
        body: body
    }

    //  Validate Inputs
    if(title === '' || body === '') {
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } else {
        
        //If no ID val in hidden input: add state
        //If ID val in hidden input: edit state
        //  Check for ID 
        if(id === '') {
            //*ADD STATE
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
        } else {
            //*EDIT STATE
            //  Update Post
                //put request gives us a promise so .then
                http.put(`http://localhost:3000/posts/${id}`, data)
                .then(data => {
                    //  Alert post update
                        //msg, classes
                    ui.showAlert('Post updated', 'alert alert-success');

                    //  Change formState back to Add
                    ui.changeFormState('add');

                    //  Call to display with updated post
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }
}

//  Delete Post
function deletePost(e) {
    //  event delegation, check target's parent <a> has class delete
    if(e.target.parentElement.classList.contains('delete')) {
        //  Grab post's id from data-attr
        const id = e.target.parentElement.dataset.id;

        //  Prompt user
        if(confirm('Are you sure?')) {
            //  Returns promise so .then
            //  Url with id attached
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post Deleted', 'alert alert-success');
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }

    e.preventDefault();
}

//  Enable Edit State
function enableEditState(e) {
    if(e.target.parentElement.classList.contains('edit')) {
        //  Grab id from dataset
        const id = e.target.parentElement.dataset.id;
        //  Grab body text
        const body = e.target.parentElement.previousElementSibling.textContent;
        //  Grab title text
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

        //  Set data obj with post data grabbed
        const data = {
            id: id,
            title: title,
            body: body
        }

        //  Fill form values with current post
        ui.fillForm(data);
    }


    e.preventDefault();
}

//  Cancel Edit State
function cancelEditState(e) {
    //  Check target has '.post-cancel'
    if(e.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }

    e.preventDefault();
}