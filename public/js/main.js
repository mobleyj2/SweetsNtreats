import cookies from './cookies.js';

document.addEventListener('DOMContentLoaded', function() {
    const cookieList = document.getElementById('cookie-list');

    cookies.forEach((cookie) => {
        const li = document.createElement('li');
        li.textContent = cookie.name;
        cookieList.appendChild(li);
    }
    );
});
import candies from './candies.js';

document.addEventListener('DOMContentLoaded', function() {
  const candyList = document.getElementById('candy-list');

  candies.forEach((candy) => {
    const li = document.createElement('li');
    li.textContent = candy.name;
    candyList.appendChild(li);
  });
});