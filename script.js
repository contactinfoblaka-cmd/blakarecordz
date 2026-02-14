document.querySelector('.contact-form').addEventListener('submit', function(event) {
event.preventDefault();
alert("Merci ! Bigi Blaka a bien reçu ton message.");
this.reset();
});

document.getElementById('searchBtn').addEventListener('click', function() {
const searchBar = document.getElementById('searchBar');
if (searchBar.style.display === "none" || searchBar.style.display === "") {
searchBar.style.display = "inline-block";
searchBar.focus();
} else {
searchBar.style.display = "none";
}
});
