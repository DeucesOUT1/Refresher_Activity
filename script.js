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
            document.body.classList.add('dark-mode');
            backButton.classList.add('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.remove('dark-mode');
            backButton.classList.remove('dark');
        }
    });

    function revealTarotCards() {
        tarotDeck.innerHTML = `
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex items-center justify-center" onclick="this.classList.toggle('flipped')">
            <div class="tarot-card-inner">
                <div class="tarot-card-front">
                    <h2 class="text-2xl font-semibold">About Me</h2>
                </div>
                <div class="tarot-card-back overflow-auto">
                <p class="text-center mt-2">Hello! My name is Andre Joss. I'm a student who loves to explore the mystical arts like tarot, astrology, and magic. When I'm not studying,
                 you can find me baking delicious treats or diving into a good book.</p>
                </div>
            </div>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex items-center justify-center" onclick="this.classList.toggle('flipped')">
            <div class="tarot-card-inner">
                <div class="tarot-card-front">
                    <h2 class="text-2xl font-semibold">Education</h2>
                </div>
                <div class="tarot-card-back overflow-auto">
                <div class="education-item mb-4">
                    <h3 class="text-xl font-semibold">Vocational</h3>
                    <p>Bartending NCII</p>
                    <p>Baguio City School of Arts and Trades</p>
                    <p>80 Military Cutoff Rd, Baguio, Benguet</p>
                    <p>2019 - 2020</p>
                </div>
                <div class="education-item mb-4">
                    <h3 class="text-xl font-semibold">Tertiary</h3>
                    <p>Bachelor of Science in Information Technology</p>
                    <p>Web Technology Track</p>
                    <p>University of the Cordilleras</p>
                    <p>Gov. Pack Rd., Baguio City</p>
                    <p>Expected Date of Graduation: September 2024</p>
                </div>
                <div class="education-item mb-4">
                    <h3 class="text-xl font-semibold">Secondary</h3>
                    <p>Saint Louis School of Pacdal, Inc.</p>
                    <p>Siapno Road Pacdal Circle, Baguio City</p>
                    <p>March 2015</p>
                </div>
                <div class="education-item">
                    <h3 class="text-xl font-semibold">Primary</h3>
                    <p>Pines Montessori School</p>
                    <p>32 Gibraltar Road, Baguio City</p>
                    <p>March 2010</p>
                </div>
                    </div>
                </div>
            </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex items-center justify-center" onclick="this.classList.toggle('flipped')">
            <div class="tarot-card-inner">
                <div class="tarot-card-front">
                    <h2 class="text-2xl font-semibold">Experience</h2>
                </div>
                <div class="tarot-card-back overflow-auto">
                        <div class="education-item mb-4">
                        <h3 class="text-xl font-semibold">Bartending</h3>
                        <p>Bartended for a couple of months at various events and venues.</p>
                    </div>
                    <div class="education-item mb-4">
                        <h3 class="text-xl font-semibold">Transient House Management</h3>
                        <p>Manages a transient house, handling guest accommodations and inquiries.</p>
                    </div>
                    <div class="education-item">
                        <h3 class="text-xl font-semibold">Freelance Work</h3>
                        <p>Occasionally takes on freelance projects on platforms like Upwork.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex items-center justify-center" onclick="this.classList.toggle('flipped')">
            <div class="tarot-card-inner">
                <div class="tarot-card-front">
                    <h2 class="text-2xl font-semibold">Skills</h2>
                </div>
                <div class="tarot-card-back overflow-auto">
                        <div class="skills-item mb-4">
                        <p>Knowledgeable in HTML, CSS, JavaScript, and frameworks like React.</p>
                    </div>
                    <div class="skills-item mb-4">
                        <p>Comfortable using Git and Visual Studio Code.</p>
                    </div>
                    <div class="skills-item mb-4">
                        <p>Strong verbal and personal communication skills.</p>
                    </div>
                    <div class="skills-item">
                        <p>Adaptability to learn new technologies and flexibility in handling various tasks.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex items-center justify-center" onclick="this.classList.toggle('flipped')">
            <div class="tarot-card-inner">
                <div class="tarot-card-front">
                    <h2 class="text-2xl font-semibold">Projects</h2>
                </div>
                <div class="tarot-card-back overflow-auto">
                        <div class="project-item mb-4">
                        <h3 class="text-xl font-semibold">Mountain Top Specialty Clinic Website</h3>
                        <p>Created a website for Mountain Top Specialty Clinic, providing information about services, staff, and booking appointments.</p>
                    </div>
                    <div class="project-item">
                        <h3 class="text-xl font-semibold">Transient House Organizer</h3>
                        <p>Developed an organizing tool for managing the transient house, including guest check-ins, bookings, and housekeeping schedules.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tarot-card bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex items-center justify-center" onclick="this.classList.toggle('flipped')">
            <div class="tarot-card-inner">
                <div class="tarot-card-front">
                    <h2 class="text-2xl font-semibold">Contact Information</h2>
                </div>
                <div class="tarot-card-back overflow-auto">
                        <div class="contact-item mb-4">
                        <h3 class="text-xl font-semibold">Address</h3>
                        <p>#304 Purok 4 Youngland Rd., Camp 7, Baguio City</p>
                    </div>
                    <div class="contact-item mb-4">
                        <h3 class="text-xl font-semibold">Contact Number</h3>
                        <p>+63.906.408.5090</p>
                    </div>
                    <div class="contact-item">
                        <h3 class="text-xl font-semibold">Email</h3>
                        <p>timmangoandre@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        const aboutCard = document.getElementById('about-card');
        aboutCard.addEventListener('click', () => {
            aboutCard.classList.toggle('flip');
        });
        backButton.classList.remove('hidden');
    }

    function showMainCard() {
        tarotDeck.innerHTML = `
            <div class="tarot-card-main bg-base-100 border-2 border-base-300 rounded-lg shadow-lg w-80 h-96 m-4 flex items-center justify-center cursor-pointer" id="main-card">
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
