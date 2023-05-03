// Récupérer les éléments HTML
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const background = document.getElementById('background');
const overlay = document.getElementById('overlay');
const paramButton = document.getElementById('paramButton');

// Ajouter un événement "click" au bouton "Paramètre"
paramButton.addEventListener('click', function() {
  // Afficher ou masquer le menu latéral
  sidebar.style.display = (sidebar.style.display === 'none') ? 'block' : 'none';
  
  // Ajouter ou retirer la classe "active" à l'overlay, au contenu principal de la page et au fond d'écran
  overlay.classList.toggle('active');
  content.classList.toggle('active');
  background.classList.toggle('active');
});

// Sélectionnez le bouton de date de livraison
const dateBtn = document.querySelector('.date-btn');

// Sélectionnez la div qui contient les options de livraison
const deliveryOptionsDiv = document.querySelector('.delivery-options');

// Ajoutez un écouteur d'événements de clic sur le bouton de date de livraison
dateBtn.addEventListener('click', function() {
  // Si la div des options de livraison est cachée, affichez-la et affichez les boutons
  if (deliveryOptionsDiv.style.display === 'none') {
    deliveryOptionsDiv.style.display = 'block';
  }
  // Sinon, cachez la div et cachez les boutons
  else {
    deliveryOptionsDiv.style.display = 'none';
  }
});

// Cachez les boutons de livraison lorsque la page est chargée
const deliveryButtonsDiv = deliveryOptionsDiv.querySelector('.delivery-buttons');
deliveryButtonsDiv.style.display = 'none';

// Ajoutez un écouteur d'événements de clic au document pour fermer les boutons de livraison lorsqu'on clique à l'extérieur
document.addEventListener('click', function(event) {
  if (!deliveryOptionsDiv.contains(event.target)) {
    deliveryButtonsDiv.style.display = 'none';
  }
});

const menuBtn = document.querySelector('.menu-btn2');
menuBtn.addEventListener('click', () => {
  sidebar.style.display = 'none';
});

var boutonFermer = document.getElementById("fermer-menu");
var menuLateral = document.getElementById("sidebar");

boutonFermer.addEventListener("click", function() {
  menuLateral.classList.remove("visible");
});

//------------------------------------schedule-----------------------
function confirmDelivery() {
  // Récupérer la date et l'heure choisies
  const deliveryTime = document.getElementById("delivery-time").value;
  const deliveryDate = document.getElementById("delivery-date").value;

  // Mettre à jour le texte du bouton "date-btn"
  const dateBtn = document.querySelector(".date-btn");
  dateBtn.textContent = `${deliveryTime} on ${deliveryDate}`;

  // Enregistrer les informations de livraison dans le stockage local
  localStorage.setItem("deliveryTime", deliveryTime);
  localStorage.setItem("deliveryDate", deliveryDate);

  // Rediriger vers la page principale
  window.location.href = "../index.htm";
}

// Si des informations de livraison ont été enregistrées précédemment, mettre à jour le texte du bouton "date-btn"
const deliveryTime = localStorage.getItem("deliveryTime");
const deliveryDate = localStorage.getItem("deliveryDate");
if (deliveryTime && deliveryDate) {
  const dateBtn = document.querySelector(".date-btn");
  dateBtn.textContent = `${deliveryTime} on ${deliveryDate}`;
}
