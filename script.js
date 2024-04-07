// Get relevant elements
const avatarPlaceholder = document.querySelector('.avatar-placeholder');
const avatarIcon = document.querySelector('.avatar-icon');
const chooseImageText = document.querySelector('.avatar-container p:first-of-type');
const defaultsText = document.querySelector('.avatar-container p:last-of-type');
const nextButton = document.querySelector('.next-button');

// Add event listener for avatar placeholder click
avatarPlaceholder.addEventListener('click', openFileInput);

// Add event listener for Next button click
nextButton.addEventListener('click', validateAndSubmit);

// Function to open file input dialog
function openFileInput() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.addEventListener('change', handleFileSelect);
  fileInput.click();
}

// Function to handle file selection
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();
      img.src = reader.result;
      img.onload = function () {
        avatarPlaceholder.innerHTML = '';
        avatarPlaceholder.appendChild(img);
        chooseImageText.style.display = 'none';
        defaultsText.style.display = 'none';
      };
    };
    reader.readAsDataURL(file);
  }
}

// Function to validate and submit form
function validateAndSubmit() {
  // Add validation logic here
  const location = document.querySelector('input[type="text"]').value;
  const avatarImage = avatarPlaceholder.querySelector('img');

  if (location && avatarImage) {
    // Submit form data
    console.log('Location:', location);
    console.log('Avatar Image:', avatarImage.src);
    // Add code to submit form data to server
  } else {
    alert('Please add your location and choose an avatar image.');
  }
}