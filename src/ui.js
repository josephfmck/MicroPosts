class UI {
    constructor() {
        //props of this class
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postsSubmit = document.querySelector('.post-submit');
        this.formState = 'add';
    }

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
        this.post.innerHTML = output;
    }

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
        const container = document.querySelector('.postsContainer');
        //  Get posts
        const posts = document.querySelector('#posts');
        //  Insert alert div
            //within container 
            //insert div before the posts
        container.insertBefore(div, posts);

        //  Timeout clear alert after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        //  Grab alert
        const currentAlert = document.querySelector('.alert');
        //  If exists remove it
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();