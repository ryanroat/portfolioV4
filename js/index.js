// import { GitHubCalendar } from './github-calendar.js';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
// const GitHubCalendar = github-calendar()

// GitHubCalendar('.calendar', 'ryanroat', { responsive: true });

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
