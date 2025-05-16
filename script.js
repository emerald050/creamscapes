
  // Run when the toppings page loads
  document.addEventListener('DOMContentLoaded', () => {
    // Clear any previously selected bow
    localStorage.removeItem('bow');

    // Clear the visual placement of bow (if any)
    const bowContainer = document.getElementById('bow-placement');
    bowContainer.innerHTML = '';

    // Retrieve and place previously selected flowers (if any)
    const flowers = JSON.parse(localStorage.getItem('flowers')) || [];
    const flowerContainer = document.getElementById('flower-placement');
    flowerContainer.innerHTML = ''; // Clear old render, just in case

    flowers.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      flowerContainer.appendChild(img);
    });
  });

  // Store selected bow and show it on the basket
  function selectBow(src) {
    localStorage.setItem('bow', src); // Save selection
    const bowContainer = document.getElementById('bow-placement');
    bowContainer.innerHTML = ''; // Only one bow allowed

    const img = document.createElement('img');
    img.src = src;
    img.style.position = 'absolute';
    img.style.top = '60%';      // Position for basket handle
    img.style.left = '50%';     // Center horizontally
    img.style.transform = 'translateX(-50%)';

    bowContainer.appendChild(img);
  }

  // Move to the final page, warn if no bow selected
  function goToFinal() {
    if (!localStorage.getItem('bow')) {
      const proceed = confirm("You haven't selected a topping. Proceed anyway?");
      if (!proceed) return;
    }
    window.location.href = 'final.html';
  }

  // Reset basket: remove bow from view and storage
  function resetBasket() {
    localStorage.removeItem('bow'); // Clear stored bow
    document.getElementById('bow-placement').innerHTML = ''; // Clear from view
  }

  // Go back to previous page
  function goBack() {
    window.location.href = 'cream.html';
  }
