document.addEventListener('DOMContentLoaded', function () {
  const userName = prompt("Please enter your valentine's name:") || "Friend"; // Default to "Friend" if no name is provided
  const noButton = document.getElementById('noButton');
  const yesButton = document.getElementById('yesButton');
  const shareButton = document.getElementById('shareButton'); // New share button
  const valentineImage = document.getElementById('valentineImage');
  const yesImage = document.getElementById('yesImage');
  const yesText = document.getElementById('yesText');
  const valentineText = document.getElementById('valentineText');
  const buttonsContainer = document.getElementById('buttonsContainer'); // Define buttonsContainer
  let noCount = 0;
  let yesPressed = false;
  let yesButtonSize = 20; // Initial size

  // Update the text content dynamically with the user's name
  valentineText.textContent = `${userName}, will you be my Valentine?`;

  const handleNoClick = () => {
    noCount++;
    updateNoButtonText();
    // Increase the size of the "Yes" button
    yesButtonSize = noCount * 20 + 16;
    yesButton.style.fontSize = yesButtonSize + 'px';
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const updateNoButtonText = () => {
    noButton.textContent = (noCount === 0) ? "No" : getNoButtonText();
  };

  const showYesContent = () => {
    valentineImage.style.display = 'none';
    valentineText.style.display = 'none';
    buttonsContainer.style.display = 'none';
    yesImage.style.display = 'block';
    yesText.style.display = 'block';
    shareButton.style.display = 'block'; // Display share button on "Yes" page
  };

  noButton.addEventListener('click', handleNoClick);
  yesButton.addEventListener('click', () => {
    yesPressed = true;
    showYesContent();
  });

  // Add functionality for the share button (e.g., open share options)
  shareButton.addEventListener('click', () => {
    alert("Share the love! 💖"); // Replace with actual share functionality
  });
});
