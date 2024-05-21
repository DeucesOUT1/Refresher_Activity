document.addEventListener('DOMContentLoaded', () => {
    const mainCard = document.getElementById('main-card');
    const tarotDeck = document.querySelector('.tarot-deck');
    const backButton = document.getElementById('back-button');
    const themeController = document.querySelector('.theme-controller');

    mainCard.addEventListener('click', () => {
        revealTarotCards();
    });

    backButton.addEventListener('click', () => {
        showMainCard();
    });

    themeController.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            backButton.classList.add('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            backButton.classList.remove('light');
        }
    });

    function revealTarotCards() {
        tarotDeck.innerHTML = `
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex flex-col items-center justify-center">
            <h2 class="text-2xl font-semibold text-center">About Me</h2>
            <p class="text-center mt-2">Placeholder for about me content.</p>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex flex-col items-center justify-center">
            <h2 class="text-2xl font-semibold text-center">Education</h2>
            <p class="text-center mt-2">Placeholder for education content.</p>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex flex-col items-center justify-center">
            <h2 class="text-2xl font-semibold text-center">Experience</h2>
            <p class="text-center mt-2">Placeholder for experience content.</p>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex flex-col items-center justify-center">
            <h2 class="text-2xl font-semibold text-center">Skills</h2>
            <p class="text-center mt-2">Placeholder for skills content.</p>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex flex-col items-center justify-center">
            <h2 class="text-2xl font-semibold text-center">Projects</h2>
            <p class="text-center mt-2">Placeholder for projects content.</p>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex flex-col items-center justify-center">
            <h2 class="text-2xl font-semibold text-center">Contact Information</h2>
            <p class="text-center mt-2">Placeholder for contact information.</p>
        </div>
        `;
        backButton.classList.remove('hidden');
    }

    function showMainCard() {
        tarotDeck.innerHTML = `
            <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex items-center justify-center cursor-pointer" id="main-card">
                <h2 class="text-2xl font-semibold text-center">Click to Reveal</h2>
            </div>
        `;
        const mainCard = document.getElementById('main-card');
        mainCard.addEventListener('click', () => {
            revealTarotCards();
        });
        backButton.classList.add('hidden');
    }
});
