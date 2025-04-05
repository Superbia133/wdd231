console.log("Discover page JS loaded.");

const grid = document.getElementById('card-grid');
const visitorMessage = document.getElementById('visitor-message');

// Load the data from JSON and create cards
fetch('data/items.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.gridArea = `card${index + 1}`;

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="images/${item.image}" alt="${item.name}" loading="lazy">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading JSON data:", error);
    grid.innerHTML = "<p>Error loading cards.</p>";
  });

// localStorage last visit message
const msPerDay = 1000 * 60 * 60 * 24;
const lastVisit = Number(localStorage.getItem('lastVisit')) || 0;
const now = Date.now();
const daysBetween = Math.floor((now - lastVisit) / msPerDay);

let message = "Welcome! Let us know if you have any questions.";
if (lastVisit !== 0) {
  if (daysBetween < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysBetween} days ago.`;
  }
}
visitorMessage.textContent = message;
localStorage.setItem('lastVisit', now);
