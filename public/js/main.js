import cookies from './cookies.js';

document.addEventListener('DOMContentLoaded', function() {
    const cookieList = document.getElementById('cookie-list');

    cookies.forEach((cookie) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${cookie.name}</h3>
            <p>Ingredients: ${cookie.ingredients}</p>
            <p>Instructions: ${cookie.instructions}</p>
            <p>Difficulty: ${cookie.difficulty}</p>
        `;
        cookieList.appendChild(li);
    }
    );
});
