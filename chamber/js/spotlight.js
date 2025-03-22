fetch('data/members.json')
  .then(res => res.json())
  .then(data => {
    const goldSilver = data.filter(m => m.level === 1 || m.level === 2);
    const spotlights = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById('spotlight-container');
    spotlights.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>📍 ${member.address}</p>
        <p>📞 ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Level: ${member.level === 1 ? 'Gold' : 'Silver'}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Spotlight fetch error:", err));
