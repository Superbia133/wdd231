const courses = [
    { code: "CSE110", name: "Intro to Programming", credits: 3, category: "CSE" },
    { code: "WDD130", name: "Web Fundamentals", credits: 3, category: "WDD" },
    { code: "CSE111", name: "Data Structures", credits: 3, category: "CSE" },
    { code: "CSE210", name: "Software Engineering", credits: 3, category: "CSE" },
    { code: "WDD131", name: "Advanced Web Development", credits: 3, category: "WDD" },
    { code: "WDD231", name: "Frontend Frameworks", credits: 3, category: "WDD" }
];

function displayCourses(filter) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    let filteredCourses = courses.filter(course =>
        filter === 'all' ? true : course.category === filter
    );

    filteredCourses.forEach(course => {
        let div = document.createElement('div');
        div.className = "course-card";
        div.innerHTML = `<button>${course.code}</button>`;
        container.appendChild(div);
    });
}

window.onload = () => displayCourses('all');
