function card(posts) {
    const body = document.querySelector('body');
    posts.slice(0, 30).forEach(post => {
        const card = document.createElement('div');
        card.className = 'Card';
        card.innerHTML = `
        <h3>${post.title}</h3>
        <p class="content">${post.content}</p>
        <button class="readMoreBtn">Read More</button>
            <img src="${post.image}" alt="${post.title}">
        `;
        const content = card.querySelector('.content');
        const readMoreBtn = card.querySelector('.readMoreBtn');
        readMoreBtn.addEventListener('click', function () {
            content.classList.toggle('expanded');
            if (content.classList.contains('expanded')) {
                readMoreBtn.textContent = "Read Less";
            } else {
                readMoreBtn.textContent = "Read More";
            }
        });
        body.appendChild(card);
    });
}

fetch("https://jsonplaceholder.org/posts")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        card(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
