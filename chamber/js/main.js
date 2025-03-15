async function loadMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const container = document.querySelector('.member-container');
    container.innerHTML = '';
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
        container.appendChild(memberCard);
    });
}

document.querySelector('#toggle-view').addEventListener('click', function () {
    document.querySelector('.member-container').classList.toggle('list-view');
});

document.querySelector('#last-modified').textContent = "Last modified: " + document.lastModified;

loadMembers();
