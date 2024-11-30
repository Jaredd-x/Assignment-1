// Get elements
const downloadButton = document.getElementById('download-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// Show popup on download button click
downloadButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

// Close popup on close button click
closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Close popup if user clicks outside the popup content
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.classList.add('hidden');
  }
});