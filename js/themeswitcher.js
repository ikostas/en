const html = document.documentElement;
const switchTheme = document.getElementById('theme_switcher');
const sun = '<i class="fa-regular fa-sun"></i>';
const moon = '<i class="fa-solid fa-moon"></i>';

// Load the theme from localStorage or set to light by default
let isLight = localStorage.getItem('theme') === 'light';

document.addEventListener('DOMContentLoaded', () => {
		// Set initial theme
		html.setAttribute('data-theme', isLight ? 'light' : 'dark');
		switchTheme.innerHTML = isLight ? sun : moon;
		removeTooltip(3000);
});

switchTheme.addEventListener('click', (e) => {
		e.preventDefault();
		isLight = !isLight;
		html.setAttribute('data-theme', isLight ? 'light' : 'dark');
		switchTheme.innerHTML = isLight ? sun : moon;

		// Save the current theme to localStorage
		localStorage.setItem('theme', isLight ? 'light' : 'dark');

		removeTooltip();
});

const removeTooltip = (timeInt = 1750) => {
		setTimeout(() => {
		switchTheme.blur();
		}, timeInt);
}
