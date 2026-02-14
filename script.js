// 1. FORMULAIRE DE CONTACT
document.querySelector('.contact-form').addEventListener('submit', function(event) {
event.preventDefault();
alert("Merci ! Bigi Blaka a bien reçu ton message. Il te répondra bientôt.");
this.reset();
});

// 2. FONCTION DE RECHERCHE AMÉLIORÉE
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');

function performSearch() {
const query = searchBar.value.trim();
if (query !== "") {
if (!window.find(query)) {
alert("Aucun résultat trouvé pour : " + query);
}
}
}

// Ouvrir/Fermer la barre
searchBtn.addEventListener('click', function() {
if (searchBar.style.display === "none" || searchBar.style.display === "") {
searchBar.style.display = "inline-block";
searchBar.focus();
} else {
performSearch();
}
});

// Rechercher avec la touche Entrée
searchBar.addEventListener('keypress', function(e) {
if (e.key === 'Enter') {
performSearch();
}
});
