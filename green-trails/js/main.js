// main.js

const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

const trails = [
  {
    name: "Emerald Ridge Trail",
    location: "Oregon",
    difficulty: "Moderate",
    length: "6.2 miles",
    description: "Lush forest trail with riverside views and native flora.",
    image: "images/emerald.jpg"
  },
  {
    name: "Sunset Overlook Loop",
    location: "California",
    difficulty: "Easy",
    length: "2.8 miles",
    description: "Ideal for beginners. Features panoramic valley views.",
    image: "images/sunset.jpg"
  },
  {
    name: "Crystal Lake Path",
    location: "Colorado",
    difficulty: "Hard",
    length: "10.4 miles",
    description: "Challenging alpine hike with beautiful lake and wildlife.",
    image: "images/crystal.jpg"
  },
  {
    name: "Hawk's Hollow",
    location: "Utah",
    difficulty: "Moderate",
    length: "4.5 miles",
    description: "Scenic canyon walk with shaded paths and rocky outcrops.",
    image: "images/hawk.jpg"
  },
  {
    name: "Whispering Pines Trail",
    location: "Montana",
    difficulty: "Easy",
    length: "3.0 miles",
    description: "Relaxing trail through pine forests and flower meadows.",
    image: "images/whisper.jpg"
  }
];

function renderTrails(containerId, max = trails.length) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  trails.slice(0, max).forEach(trail => {
    console.log(`Rendering trail: ${trail.name}`);
    console.log(`Image URL: ${trail.image}`);

    const img = document.createElement('img');
    img.src = trail.image;
    img.alt = trail.name;
    img.loading = 'lazy';
    img.onerror = () => console.error(`Failed to load image for ${trail.name}`);

    const card = document.createElement('div');
    card.classList.add('trail-card');
    card.appendChild(img);
    card.innerHTML += `
      <h3>${trail.name}</h3>
      <p><strong>Location:</strong> ${trail.location}</p>
      <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
      <p><strong>Length:</strong> ${trail.length}</p>
      <p>${trail.description}</p>
    `;

    container.appendChild(card);
  });
}

if (window.location.pathname.includes('index.html')) {
  renderTrails('featured-trail-cards', 3);
}

if (window.location.pathname.includes('trails.html')) {
  renderTrails('trail-cards');
}

if (window.location.pathname.includes('form.html')) {
  const params = new URLSearchParams(window.location.search);
  const formDataDiv = document.getElementById('form-data');

  if (formDataDiv && params.has('name')) {
    formDataDiv.innerHTML = `
      <h3>Submission Received:</h3>
      <p><strong>Name:</strong> ${params.get('name')}</p>
      <p><strong>Email:</strong> ${params.get('email')}</p>
      <p><strong>Trail Location:</strong> ${params.get('location')}</p>
      <p><strong>Message:</strong> ${params.get('message')}</p>
    `;
  }
}
