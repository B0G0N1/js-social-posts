const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Recupera l'elemento del DOM con l'ID 'container', dove verranno inseriti i post.
const container = document.getElementById('container');

// Cicla su ogni oggetto nel array 'posts'
posts.forEach(post => {
    const postElement = createPost(post);
    // Aggiungi il nuovo elemento post al contenitore
    container.appendChild(postElement);
});


// Funzione che crea e restituisce un elemento 'post' HTML basato sui dati di un post
// presi dall'Array
function createPost(post) {
    // Crea un div per il post e assegna la classe 'post'
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    // Imposta l'HTML interno del div usando i dati del post
    postDiv.innerHTML = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${post.author.image ? `<img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">` : `<div class="profile-pic-default"><span>${post.author.name.charAt(0)}</span></div>`}                  
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${post.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="${post.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" href="#" data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div> 
        </div>`;

    // Restituisce il div del post creato
    return postDiv;
}





// Crea una variabile con tutti gli elementi 'Mi piace' del DOM
const likeButtons = document.querySelectorAll('.js-like-button');

// Aggiunge un listener click a ogni bottone con 'Mi Piace'
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const postId = this.getAttribute('data-postid');
        // Seleziona il contatore corrispondente all'ID del post
        const likeCounter = document.getElementById(`like-counter-${postId}`);
        let likeCount = parseInt(likeCounter.innerText);

        // Controlla se il bottone ha già la classe 'like-button--liked'
        if (this.classList.contains('like-button--liked')) {
            this.classList.remove('like-button--liked');
            likeCount--;
        }
        else {
            this.classList.add('like-button--liked');
            likeCount++;
        }

        // Aggiorna il testo del contatore dei 'Mi Piace'
        likeCounter.innerText = likeCount;
    });
});