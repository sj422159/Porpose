// Existing functions
function showQuestion() {
    document.querySelector('.landing').classList.add('hidden');
    document.querySelector('.question').classList.remove('hidden');
  }
  
  function showFinal() {
    document.querySelector('.question').classList.add('hidden');
    document.querySelector('.final').classList.remove('hidden');
  }
  
  function celebrate() {
    alert("Yay! 🎉 You've made my day!");
  }
  
  function playfulNo() {
    const noButton = document.querySelector('.no-button');
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * (window.innerWidth - noButton.offsetWidth)}px`;
    noButton.style.top = `${Math.random() * (window.innerHeight - noButton.offsetHeight)}px`;
  }
  
  // Hover effect for the "No" button
  document.querySelector('.no-button').addEventListener('mouseover', playfulNo);
  
  // Function to create floating hearts
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => heart.remove(), 5000);
  }
  
  // Generate hearts at intervals
  setInterval(createHeart, 600);
  