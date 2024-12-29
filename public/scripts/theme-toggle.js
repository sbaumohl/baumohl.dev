// On page load or when changing themes, best to add inline in `head` to avoid FOUC
function themeToggle() {
	document.documentElement.classList.toggle(
	  'dark',
	  localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	)
}

// ensure that toggle runs on script load
themeToggle();
const toggleInput = document.getElementById('theme-toggle');
toggleInput.value = localStorage.theme === 'dark';

toggleInput.addEventListener('change', function() {
	localStorage.theme = this.checked ? 'dark' : 'light';
	themeToggle();
});
