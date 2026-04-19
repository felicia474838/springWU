document.addEventListener('DOMContentLoaded', function() {
    var burgerBtn = document.getElementById('burgerBtn');
    var mainNav = document.getElementById('mainNav');

    if (burgerBtn && mainNav) {
        burgerBtn.addEventListener('click', function() {
            this.classList.toggle('open');
            mainNav.classList.toggle('showNav');
        });

        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !burgerBtn.contains(event.target) && mainNav.classList.contains('showNav')) {
                burgerBtn.classList.remove('open');
                mainNav.classList.remove('showNav');
            }
        });
    }

    var themeToggle = document.getElementById('themeToggle');
    var themeToggleDesktop = document.getElementById('themeToggleDesktop');
    var currentTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateToggleButtons(currentTheme);

    function handleToggle() {
        var theme = document.documentElement.getAttribute('data-theme');
        var newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleButtons(newTheme);
    }

    function updateToggleButtons(theme) {
        var label = theme === 'dark' ? 'Light' : 'Dark';
        if (themeToggle) themeToggle.textContent = label;
        if (themeToggleDesktop) themeToggleDesktop.textContent = label;
    }

    if (themeToggle) themeToggle.addEventListener('click', handleToggle);
    if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', handleToggle);

    var genreButtons = document.querySelectorAll('.genre-btn');
    genreButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
        });
    });

    var generateBtn = document.getElementById('generateBtn');
    var results = document.getElementById('results');
    if (generateBtn && results) {
        generateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            results.style.display = 'flex';
            generateBtn.style.display = 'none';
        });
    }
});