document.addEventListener('DOMContentLoaded', function () {
    const cardOne = document.getElementById('WatchOne');
    const lastCard = document.getElementById('LastWatch');
    
    let currentCard = cardOne;

    // Function to hide all cards and show the current one
    function showCurrentCard() {
        cardOne.style.display = 'none';
        lastCard.style.display = 'none';
        
        // Show only the currently selected card
        currentCard.style.display = 'block';
    }
    showCurrentCard();

    // Event listener for 'next' button
    document.getElementById('nextWatch').addEventListener('click', function () {
        if (currentCard === cardOne) {
            currentCard = lastCard;
        } else {
            currentCard = cardOne;
        }
        showCurrentCard();
    });

    // Event listener for 'previous' button
    document.getElementById('prevWatch').addEventListener('click', function () {
        if (currentCard === lastCard) {
            currentCard = cardOne;
        } else {
            currentCard = lastCard;
        }
        showCurrentCard();
    });
});
