// Execute when the DOM is fully loaded to ensure all elements are accessible
document.addEventListener('DOMContentLoaded', () => {
  // Select all favorite buttons using their class name
  const favoriteBtns = document.querySelectorAll('.favorite-btn');
  
  // Retrieve saved favorite product IDs from localStorage
  // - Use JSON.parse to convert the stored string back to an array
  // - Default to an empty array if no data exists
  let favoriteIds = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');

  // Initialize button states on page load based on saved favorites
  const initializeFavoriteButtons = () => {
    favoriteBtns.forEach(btn => {
      const productId = btn.getAttribute('data-product-id');
      
      // Update button text if the product is already favorited
      if (favoriteIds.includes(productId)) {
        btn.classList.add('active');
        btn.textContent = '已收藏';
      } else {
        // Ensure unfavorited state is correctly set
        btn.classList.remove('active');
        btn.textContent = '收藏';
      }
    });
  };

  // Toggle favorite status when a button is clicked
  const handleFavoriteToggle = (btn) => {
    const productId = btn.getAttribute('data-product-id');
    const isCurrentlyFavorited = favoriteIds.includes(productId);

    if (isCurrentlyFavorited) {
      // Remove from favorites: create a new array excluding the product ID
      favoriteIds = favoriteIds.filter(id => id !== productId);
    } else {
      // Add to favorites: create a new array with the product ID
      favoriteIds = [...favoriteIds, productId];
    }

    // Save updated favorites to localStorage
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteIds));
    
    // Refresh button UI to reflect new state
    initializeFavoriteButtons();
  };

  // Attach event listeners to all favorite buttons
  favoriteBtns.forEach(btn => {
    btn.addEventListener('click', () => handleFavoriteToggle(btn));
  });

  // Initialize buttons on page load
  initializeFavoriteButtons();
});