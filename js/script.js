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

const scheduleLaterBtn = document.querySelector(".schedule-later-btn");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup-close-btn");
const popupTitle = document.querySelector(".popup-title");
const dayBtn = document.querySelector(".day-btn");
const timeBtn = document.querySelector(".time-btn");
const todayBtn = document.querySelector(".today-btn");
const tomorrowBtn = document.querySelector(".tomorrow-btn");
const scheduleBtn = document.querySelector(".schedule-btn");
const deliverNowBtn = document.querySelector(".deliver-now-btn");
const timeSlots = [
  "6am - 7am",
  "7am - 8am",
  "8am - 9am",
  "9am - 10am",
  "10am - 11am",
  "11am - 12pm",
  "12pm - 1pm",
  "1pm - 2pm",
  "2pm - 3pm",
  "3pm - 4pm",
  "4pm - 5pm",
  "5pm - 6pm",
  "6pm - 7pm",
  "7pm - 8pm",
  "8pm - 9pm",
  "9pm - 10pm",
  "10pm - 11pm",
];

function showPopup() {
  popup.classList.add("show");
}

function hidePopup() {
  popup.classList.remove("show");
}

function showDayChoices() {
  const dayChoices = document.createElement("div");
  dayChoices.classList.add("choices");
  dayChoices.innerHTML = `
    <button class="today-btn choice">Today</button>
    <button class="tomorrow-btn choice">Tomorrow</button>
  `;
  dayBtn.parentNode.insertBefore(dayChoices, dayBtn.nextSibling);
  dayBtn.remove();
}

function showTimeChoices() {
  const timeChoices = document.createElement("div");
  timeChoices.classList.add("choices");
  for (const slot of timeSlots) {
    const timeSlotBtn = document.createElement("button");
    timeSlotBtn.classList.add("choice");
    timeSlotBtn.textContent = slot;
    timeChoices.appendChild(timeSlotBtn);
  }
  timeBtn.parentNode.insertBefore(timeChoices, timeBtn.nextSibling);
  timeBtn.remove();
}

function handleDayChoice(event) {
  popupTitle.textContent = event.target.textContent;
  showTimeChoices();
}

function handleTimeChoice(event) {
  popupTitle.textContent = `${popupTitle.textContent} at ${event.target.textContent}`;
}

function handleScheduleBtnClick() {
  hidePopup();
}

scheduleLaterBtn.addEventListener("click", showPopup);
popupCloseBtn.addEventListener("click", hidePopup);
dayBtn.addEventListener("click", showDayChoices);
document.addEventListener("click", function (event) {
  if (!event.target.classList.contains("choice")) return;
  if (event.target.classList.contains("today-btn")) {
    handleDayChoice(event);
  } else if (event.target.classList.contains("tomorrow-btn")) {
    handleDayChoice(event);
  } else {
    handleTimeChoice(event);
  }
});
scheduleBtn.addEventListener("click", handleScheduleBtnClick);