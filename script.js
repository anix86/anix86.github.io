document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('checkbox');
    const body = document.body;

    // Function to apply theme and update the checkbox
    const applyTheme = (theme) => {
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(theme);
        themeSwitch.checked = theme === 'dark-theme';
    };

    // Function to save theme to localStorage
    const saveTheme = (theme) => {
        localStorage.setItem('theme', theme);
    };

    // Event listener for the toggle switch
    themeSwitch.addEventListener('change', () => {
        const newTheme = themeSwitch.checked ? 'dark-theme' : 'light-theme';
        applyTheme(newTheme);
        saveTheme(newTheme);
    });

    // On page load, check for a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    // Also, check user's OS preference as a fallback
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        // If a theme is saved in localStorage, use it
        applyTheme(savedTheme);
    } else if (prefersDark) {
        // Otherwise, if the OS preference is dark, use dark theme
        applyTheme('dark-theme');
    } else {
        // Otherwise, default to light theme
        applyTheme('light-theme');
    }
});
