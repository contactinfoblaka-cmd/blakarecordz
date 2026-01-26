// On attend que le formulaire soit soumis
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la page de se recharger
    
    // On simule un envoi réussi
    alert("Merci Bigi Blaka a bien reçu ton message ! Il te répondra bientôt.");
    
    // On vide les champs du formulaire
    this.reset();
});