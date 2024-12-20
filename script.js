// Funkcija za preklop teme
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Preveri, če je shranjena izbira teme v localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

// Funkcija za preklop teme
function toggleTheme() {
    body.classList.toggle('dark-theme');
    
    // Shranimo izbrano temo v localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Ob pritisku na gumb se preklopi tema
themeToggleButton.addEventListener('click', toggleTheme);

// Gumb za premik na vrh
const scrollTopButton = document.getElementById('scroll-top-btn');

// Funkcija za prikazovanje ali skrivanje gumba
function toggleScrollButton() {
    if (window.scrollY > 300) { // Ko uporabnik zavije 300px navzdol
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}

// Funkcija za premik na vrh
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Gladek premik
    });
}

// Ob klikcu na gumb, premik na vrh
scrollTopButton.addEventListener('click', scrollToTop);

// Spremljanje pomika strani
window.addEventListener('scroll', toggleScrollButton);

// Ob začetku skrij gumb
toggleScrollButton();

// Funkcija za preverjanje obrazca
const contactForm = document.getElementById('contact-form');

function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Prosimo, izpolnite vsa polja!');
        event.preventDefault(); // Prepreči pošiljanje obrazca
    }
}

// Get the footer element
const footer = document.querySelector('footer');

// Function to check if footer is in view
function checkFooterInView() {
    const rect = footer.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        footer.classList.add('visible'); // Show the footer
    } else {
        footer.classList.remove('visible'); // Hide the footer
    }
}

// Listen for the scroll event
window.addEventListener('scroll', checkFooterInView);

// Call the function initially in case the footer is already in view
checkFooterInView();

// Dodaj event listener na obrazec
contactForm.addEventListener('submit', validateForm);

// Funkcija za premik na vrh
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Preklop teme (temni način)
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// Funkcija za premik na vrh
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Preklop teme (temni način)
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

