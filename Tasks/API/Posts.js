const req = new XMLHttpRequest()
req.open("GET", "https://jsonplaceholder.org/posts")
req.send();
req.addEventListener("load", function () {
    const posts = JSON.parse(this.responseText)
    const target = posts.slice(0, 30)
    
    const body = document.querySelector('body')
    
    target.forEach(post => {
        const card = document.createElement('div')
        card.className= "Card"

        const content = document.createElement('p');
        content.className = "content";
        content.textContent = post.content;

        const title = document.createElement('h3');
        title.textContent = post.title;

        const image = document.createElement('img');
        image.src = post.image;

        const readMoreBtn = document.createElement('button');
        readMoreBtn.textContent = "Read More";
        readMoreBtn.className = "readMoreBtn";

        card.appendChild(title);
        card.appendChild(content);
        card.appendChild(readMoreBtn);
        card.appendChild(image);
        body.appendChild(card);

        readMoreBtn.addEventListener('click', function () {
            content.classList.toggle('expanded');
            if (content.classList.contains('expanded')) {
                readMoreBtn.textContent = "Read Less";
            } else {
                readMoreBtn.textContent = "Read More";
            }
        });
    })
});
