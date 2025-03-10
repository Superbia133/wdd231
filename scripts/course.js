const courses = [
    { code: "CSE110", name: "Intro to Programming", credits: 3, category: "CSE", completed: true },
    { code: "WDD130", name: "Web Fundamentals", credits: 3, category: "WDD", completed: true },
    { code: "CSE111", name: "Data Structures", credits: 3, category: "CSE", completed: true },
    { code: "CSE210", name: "Software Engineering", credits: 3, category: "CSE", completed: false },
    { code: "WDD131", name: "Advanced Web Development", credits: 3, category: "WDD", completed: true },
    { code: "WDD231", name: "Frontend Frameworks", credits: 3, category: "WDD", completed: false }
];

function displayCourses(filter) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    let filteredCourses = courses.filter(course =>
        filter === 'all' ? true : course.category === filter
    );

    let totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    filteredCourses.forEach(course => {
        let div = document.createElement('div');
        div.className = `course-card ${course.completed ? 'completed' : 'not-completed'}`;
        div.innerHTML = `
            <button>
                ${course.code} 
                ${course.completed ? '✅' : ''}
            </button>
        `;
        container.appendChild(div);
    });

    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

window.onload = () => displayCourses('all');
