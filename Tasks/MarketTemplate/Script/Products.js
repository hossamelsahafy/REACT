document.addEventListener('DOMContentLoaded', function () {
    const cardOne = document.getElementById('CardOne');
    const lastCard = document.getElementById('LastCard');
    
    let currentCard = cardOne;

    function showCurrentCard() {
        cardOne.style.display = 'none';
        lastCard.style.display = 'none';
        
        currentCard.style.display = 'block';
    }
    showCurrentCard();

    document.getElementById('next').addEventListener('click', function () {
        if (currentCard === cardOne) {
            currentCard = lastCard;
        } else {
            currentCard = cardOne;
        }
        showCurrentCard();
    });

    document.getElementById('prev').addEventListener('click', function () {
        if (currentCard === lastCard) {
            currentCard = cardOne;
        } else {
            currentCard = lastCard;
        }
        showCurrentCard();
    });
});
