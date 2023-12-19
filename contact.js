/*=============== MOSTRAR MENÚ ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Agrega la clase show-menu al menú de navegación
        nav.classList.toggle('show-menu')
        // Agrega show-icon para mostrar u ocultar el ícono del menú
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /*=============== MOSTRAR MENÚ DESPLEGABLE ===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item');

// Función para mostrar/ocultar el menú desplegable
const toggleDropdown = (item) => {
  const dropdownContainer = item.querySelector('.dropdown__container');
  const isOpen = item.classList.contains('show-dropdown');

  if (isOpen) {
    dropdownContainer.removeAttribute('style');
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
  }

  item.classList.toggle('show-dropdown');
};

// Agregar evento de clic a cada botón de menú desplegable
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('.dropdown__button');
  dropdownButton.addEventListener('click', () => {
    // Ocultar otros menús desplegables abiertos
    dropdownItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains('show-dropdown')) {
        toggleDropdown(otherItem);
      }
    });

    // Mostrar/ocultar el menú desplegable actual
    toggleDropdown(item);
  });
});

// Función para eliminar estilos de menú desplegable en dispositivos de pantalla grande
const removeDropdownStyles = () => {
  const mediaQuery = window.matchMedia('(min-width: 1118px)');

  if (mediaQuery.matches) {
    dropdownItems.forEach((item) => {
      const dropdownContainer = item.querySelector('.dropdown__container');
      dropdownContainer.removeAttribute('style');
      item.classList.remove('show-dropdown');
    });
  }
};

// Eliminar estilos al cargar la página y al cambiar el tamaño de la ventana


document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const messageContainer = document.querySelector('.message-container');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Display a confirmation message with styling
    showMessage('Gracias. Pronto contactaremos contigo');

    // Reset the form after submission if needed
    form.reset();
  });

  function showMessage(message) {
    // Create a message element with a specific class
    const messageElement = document.createElement('div');
    messageElement.className = 'message confirmation-message show'; // Add 'show' class

    // Set the message content
    messageElement.textContent = message;

    // Append the message to the container
    messageContainer.innerHTML = '';
    messageContainer.appendChild(messageElement);

    // Optionally, you can hide the message after a few seconds
    setTimeout(function () {
      messageContainer.innerHTML = '';
    }, 5000); // Adjust the time (in milliseconds) as needed
  }
});
