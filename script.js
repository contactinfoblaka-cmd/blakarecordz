// 1. MESSAGE DE BIGI BLAKA (Formulaire de contact)
document.querySelector('.contact-form').addEventListener('submit', function(event) {
event.preventDefault();
alert("Merci ! Bigi Blaka a bien reçu ton message. Il te répondra bientôt.");
this.reset();
});

// 2. RECHERCHE (Loupe)
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');

searchBtn.addEventListener('click', function() {
if (searchBar.style.display === "none" || searchBar.style.display === "") {
searchBar.style.display = "inline-block";
searchBar.focus();
} else {
if (searchBar.value !== "") {
window.find(searchBar.value);
} else {
searchBar.style.display = "none";
}
}
});

searchBar.addEventListener('keypress', function(e) {
if (e.key === 'Enter') {
window.find(searchBar.value);
}
});
