$(document).ready(() => {
  // When the hamburger menu is clicked, toggle its active state
  $("#hamburger-menu").click(() => {
    $("#hamburger-menu").toggleClass("active"); // Show or hide the menu icon
    $("#nav-menu").toggleClass("active"); // Show or hide the navigation menu
  });

  // Setting up the owl carousel for the hero section
  let navText = [
    "<i class='bx bx-chevron-left'></i>", // Left arrow icon for navigation
    "<i class='bx bx-chevron-right'></i>", // Right arrow icon for navigation
  ];

  // Initialize the hero carousel with options
  $("#hero-carousel").owlCarousel({
    items: 1, // Display one item at a time
    dots: false, // Hide the dot indicators
    loop: true, // Enable looping of items
    nav: true, // Show navigation arrows
    navText: navText, // Use custom navigation icons
    autoplay: true, // Enable automatic cycling of items
    autoplayHoverPause: true, // Pause autoplay on hover
  });

  // Set up the top movies carousel
  $("#top-movies-slide").owlCarousel({
    items: 2, // Show two items initially
    dots: false, // Disable dot indicators
    loop: true, // Enable looping
    autoplay: true, // Start autoplaying
    autoplayHoverPause: true, // Pause when hovering
    responsive: {
      500: {
        items: 3, // Show three items on screens wider than 500px
      },
      1280: {
        items: 4, // Show four items on screens wider than 1280px
      },
      1600: {
        items: 6, // Show six items on screens wider than 1600px
      },
    },
  });

  // Initialize the carousel for movie slides
  $(".movies-slide").owlCarousel({
    items: 2, // Start with two items displayed
    dots: false, // No dots for navigation
    nav: true, // Show navigation arrows
    navText: navText, // Use custom icons for arrows
    margin: 15, // Space between items
    responsive: {
      500: {
        items: 2, // Show two items on smaller screens
      },
      1280: {
        items: 4, // Show four items on larger screens
      },
      1600: {
        items: 6, // Max of six items on extra-large screens
      },
    },
  });

  // Add a click event to all navigation links
  $(".nav-link").click(function () {
    // Check if both the nav menu and hamburger menu are active
    if (
      $("#nav-menu").hasClass("active") && // Is the nav menu currently active?
      $("#hamburger-menu").hasClass("active") // Is the hamburger menu also active?
    ) {
      // If both are active, remove the active class from them
      $("#nav-menu").removeClass("active"); // Hide the nav menu
      $("#hamburger-menu").removeClass("active"); // Hide the hamburger icon
    }
  });
});
