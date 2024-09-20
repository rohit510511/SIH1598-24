document.addEventListener('DOMContentLoaded', () => {
  const attireImages = [
    'saree.jpeg',
    'sherwani.jpg',
    'lehanga.jpeg'
  ];

  let currentImageIndex = 0;

  // Cache DOM elements
  const attireImageElement = document.getElementById('attire-image');
  const dressingRoomImageElement = document.getElementById('dressing-room-image');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const attireSelect = document.getElementById('attire-select');
  const submitQuizBtn = document.getElementById('submit-quiz');
  const quizResultElement = document.getElementById('quiz-result');
  const uploadImageInput = document.getElementById('upload-image');

  // Function to update attire image
  const updateAttireImage = (index) => {
    if (attireImages[index]) {
      attireImageElement.src = attireImages[index];
    } else {
      console.error('Invalid image index');
    }
  };

  // Event listener for next button
  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % attireImages.length;
    updateAttireImage(currentImageIndex);
  });

  // Event listener for previous button
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + attireImages.length) % attireImages.length;
    updateAttireImage(currentImageIndex);
  });

  // Event listener for attire select dropdown
  attireSelect.addEventListener('change', function() {
    const selectedAttire = this.value;
    if (selectedAttire) {
      dressingRoomImageElement.src = selectedAttire;
    } else {
      console.error('Invalid attire selected');
    }
  });

  // Event listener for quiz submit button
  submitQuizBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="attire-quiz"]:checked');
    let resultText = 'Please select an option.';

    if (selectedOption) {
      resultText = selectedOption.value === 'Saree' 
        ? 'Correct! The Saree is traditionally worn during weddings in Uttar Pradesh.' 
        : 'Incorrect. The Saree is traditionally worn during weddings in Uttar Pradesh.';
    }

    quizResultElement.innerText = resultText;
  });

  // Event listener for image upload
  uploadImageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      fetch('http://localhost:5000/process-image', {
        method: 'POST',
        body: formData
      })
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        dressingRoomImageElement.src = url;
      })
      .catch(error => console.error('Error:', error));
    }
  });
});