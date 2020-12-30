class UI {
    constructor() {
        //props of this class
        this.postsList = document.querySelector('#postsList');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.postsContainer = document.querySelector('.postsContainer');
        this.formState = 'add';
    }

    //  Display all posts
    showPosts(posts) {
        let output = '';

        posts.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>

                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        });

        //append to ui 
        this.postsList.innerHTML = output;
    }

    //  Show alert div
    showAlert(msg, classNames) {
        this.clearAlert();

        //  Create div
        const div = document.createElement('div');
        //  Add classes
        div.className = classNames;
        //  Add text
        div.appendChild(document.createTextNode(msg));

        //  Add to DOM
        //  Get parent
        const container = this.postsContainer;
        //  Get posts
        const posts = this.postsList;
        //  Insert alert div
            //within container 
            //insert div before the posts
        container.insertBefore(div, posts);

        //  Timeout clear alert after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //  Clear alert div
    clearAlert() {
        //  Grab alert
        const currentAlert = document.querySelector('.alert');
        //  If exists remove it
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    //  Clear all form fields
    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    //  Fill form to edit
    fillForm(data) {
        //  Set form fields to data props
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        //idInput is hidden 
        this.idInput.value = data.id;


        //  Change form state to edit
        this.changeFormState('edit');
    }

    //  Change the form state
    changeFormState(stateType) {
        //  If edit state
        if(stateType === 'edit') {
            //  Change btn text 
            this.postSubmit.textContent = 'Update Post';
            //  Change color with class, needs default classes since reassigning all classes
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            //  Create cancel button
            const button = document.createElement('button');
            //  Add classes
            button.className = 'post-cancel btn btn-block';
            //  Add text
            button.appendChild(document.createTextNode('Cancel Edit'));

            //  Insert button
            //  Get Parent
            const cardForm = document.querySelector('.card-form');
            //  Get element to insert before
            const formEnd = document.querySelector('.form-end');
            //  Insert cancel btn before formEnd
            cardForm.insertBefore(button, formEnd);

        } else {

        }
    }
}

export const ui = new UI();