// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON file and store it in localStorage if not already stored
    if (!localStorage.getItem('carlibrary')) {
        fetch('carlibrary.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('carlibrary', JSON.stringify(data));
                console.log('Car library data saved to localStorage');
                displayCarLibrary(data);
            })
            .catch(error => console.error('Error fetching carlibrary.json:', error));
    } else {
        // Retrieve the car library data from localStorage
        const carLibrary = JSON.parse(localStorage.getItem('carlibrary'));
        displayCarLibrary(carLibrary);
    }
});

// Function to display the car library data
function displayCarLibrary(data) {
    const cardContainer = document.getElementById('card-container');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = `${item.car}`;

        const cardSubtitle = document.createElement('h3');
        cardSubtitle.classList.add('card-subtitle');
        cardSubtitle.textContent = `${item.model} | ${item.year}`;

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.src = item.img1; // Displaying img1

        const learnMoreLink = document.createElement('a');
        learnMoreLink.classList.add('learn-more-link');
        learnMoreLink.textContent = 'Learn More';
        learnMoreLink.href = 'index.html'; // Link to index.html

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardSubtitle);
        cardContent.appendChild(cardImage);
        cardContent.appendChild(learnMoreLink); // Append the link after the card content
        card.appendChild(cardContent);
        cardContainer.appendChild(card);
    });
}
