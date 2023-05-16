/*---------------------------------------------------------------
------------------------fonction mcdo----------------------------
----------------------------------------------------------------*/

function showPopup1() {
    // Create the popup element
    var popup = document.createElement("div");
    popup.className = "popup";

    // Add the title to the popup
    var title = document.createElement("h2");
    title.innerHTML = "Choose a menu <span>(only one for the moment)</span>";
    popup.appendChild(title);

    // Create the container for the images and text
    var content = document.createElement("div");
    content.className = "content";
    popup.appendChild(content);

    // Create a container for the first menu
    var firstMenuContainer = document.createElement("div");
    firstMenuContainer.className = "menu-container";
    content.appendChild(firstMenuContainer);

    // Add the description for the first menu
    var desc1 = document.createElement("div");
    desc1.innerHTML = "<h3>Menu 1 : Big Mac</h3><p>Description : Our Big Mac with fries and coke</p><p>Price : rm 14</p>";
    desc1.className = "desc";
    content.appendChild(desc1);

    // Add the first image to the first menu container
    var image1 = document.createElement("img");
    image1.src = "../img/big-mac.jpg";
    image1.className = "image-popup";
    firstMenuContainer.appendChild(image1);

    // Add a button to order the menu
    var orderButton = document.createElement("button");
    orderButton.innerHTML = "Order";
    orderButton.className = "order-button";
    orderButton.addEventListener("click", function() {
      // Add the menu to the Your order section
      var orderTable = document.querySelector(".Yorder table");
      var newRow = orderTable.insertRow(orderTable.rows.length - 1);
      var nameCell = newRow.insertCell(0);
      nameCell.innerHTML = "Big Mac";
      var priceCell = newRow.insertCell(1);
      priceCell.innerHTML = "rm 14";

      // Display an alert to confirm the menu has been added to the order
      alert("Menu added to your order!");
    });

    popup.appendChild(orderButton);


    // Add close button to the popup
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "x";
    closeButton.className = "close-button";
    closeButton.addEventListener("click", function() {
      document.body.removeChild(popup);
    });
    popup.appendChild(closeButton);

    // Add the popup to the page
    document.body.appendChild(popup);
    }

    // Dans la fonction qui initialise la page
    var deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var row = this.parentNode.parentNode;
      row.parentNode.removeChild(row);
    });
    });

/*--------------------------------------------------------------------------
---------------------------------fonction KFC--------------------------------------
-----------------------------------------------------------------------*/


    function showPopup2() {
      // Create the popup element
      var popup = document.createElement("div");
      popup.className = "popup";

      // Add the title to the popup
      var title = document.createElement("h2");
      title.innerHTML = "Choose a menu <span>(only one for the moment)</span>";
      popup.appendChild(title);

      // Create the container for the images and text
      var content = document.createElement("div");
      content.className = "content";
      popup.appendChild(content);

      // Create a container for the first menu
      var firstMenuContainer = document.createElement("div");
      firstMenuContainer.className = "menu-container";
      content.appendChild(firstMenuContainer);

      // Add the description for the first menu
      var desc1 = document.createElement("div");
      desc1.innerHTML = "<h3>Menu 1 : Bucket 12 tenders</h3><p>Description : 12 delicious tenders in our ancestral recipes</p><p>Price : rm 30</p>";
      desc1.className = "desc";
      content.appendChild(desc1);

      // Add the first image to the first menu container
      var image1 = document.createElement("img");
      image1.src = "../img/tenders-KFC.jpg";
      image1.className = "image-popup";
      firstMenuContainer.appendChild(image1);

      // Add a button to order the menu
      var orderButton = document.createElement("button");
      orderButton.innerHTML = "Order";
      orderButton.className = "order-button";
      orderButton.addEventListener("click", function() {
      // Add the menu to the Your order section
      var orderTable = document.querySelector(".Yorder table");
      var newRow = orderTable.insertRow(orderTable.rows.length - 1);
      var nameCell = newRow.insertCell(0);
      nameCell.innerHTML = "Bucket 12 tender";
      var priceCell = newRow.insertCell(1);
      priceCell.innerHTML = "rm 32";

      // Display an alert to confirm the menu has been added to the order
      alert("Menu added to your order!");
      });
      popup.appendChild(orderButton);

      

      // Add close button to the popup
      var closeButton = document.createElement("button");
      closeButton.innerHTML = "x";
      closeButton.className = "close-button";
      closeButton.addEventListener("click", function() {
      document.body.removeChild(popup);
      });
      popup.appendChild(closeButton);

      // Add the popup to the page
      document.body.appendChild(popup);
      }  
      
      // Après avoir créé l'élément "menu" dans la fonction showPopup2()
      var orderButton = document.createElement("button");
      orderButton.innerHTML = "Commander";
      orderButton.className = "order-button";
      orderButton.addEventListener("click", function() {
       // Ajouter le menu à la commande
      var commandTable = document.querySelector(".commande-table");
      var newRow = commandTable.insertRow(-1);
      var nameCell = newRow.insertCell(0);
      var priceCell = newRow.insertCell(1);
      var deleteCell = newRow.insertCell(2);
      nameCell.innerHTML = "Bucket 12 tenders";
      priceCell.innerHTML = "32.00";
      deleteCell.innerHTML = '<button class="delete-button">Supprimer</button>';
      });
      popup.appendChild(orderButton);

      // Dans la fonction qui initialise la page
      var deleteButtons = document.querySelectorAll(".delete-button");
      deleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
          var row = this.parentNode.parentNode;
          row.parentNode.removeChild(row);
        });
      });