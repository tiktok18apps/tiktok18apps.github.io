// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Handle helpful button clicks
    const helpfulButtons = document.querySelectorAll('.btn-helpful');
    helpfulButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentCount = parseInt(this.textContent.match(/\d+/)[0], 10);
            this.textContent = `Helpful (${currentCount + 1})`;
        });
    });
// Handle "View all reviews" button click
    const viewAllReviewsBtn = document.querySelector('.btn-full');
    viewAllReviewsBtn.addEventListener('click', function () {
    });

    // Handle install button click (redirect to new user page)
    const installBtn = document.querySelector('.btn-primary');
    installBtn.addEventListener('click', function () {
        // Redirect to the new user registration page
        window.location.href = 'https://daman-game.in.net/Daman-game.apk'; // Replace with your actual registration link
    });

    // Handle share button click
    const shareBtn = document.querySelector('.btn-secondary');
    shareBtn.addEventListener('click', function () {
        if (navigator.share) {
            navigator.share({
                title: 'topfollow apk',
                text: 'Check out to increase your followers',
                url: window.location.href,
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(console.error);
        } else {
            alert('Web Share API not supported in your browser');
        }
    });
});