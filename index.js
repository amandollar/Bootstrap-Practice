// Add this script at the end of your HTML body or in a separate JS file
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check the user's preference from local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set the initial mode based on the user's preference
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');

        // Save user's preference to local storage
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });
});
