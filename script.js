document.addEventListener('DOMContentLoaded', () => {
  // Initialize Animate On Scroll (AOS)
  AOS.init({
    once: true, // Whether animation should happen only once - while scrolling down
    offset: 50, // Offset (in px) from the original trigger point
    duration: 1000,
    easing: 'ease-out-cubic',
  });

  const video = document.getElementById("video");

  // Handle video autoplay behavior
  if (!localStorage.getItem("videoPlayed")) {
    // Attempt to play automatically
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Autoplay started!
        video.muted = false; // Unmute if policy allows or after user interaction
      })
        .catch(error => {
          // Autoplay was prevented.
          video.muted = true;
          video.play();
        });
    }

    video.addEventListener("ended", () => {
      localStorage.setItem("videoPlayed", "true");
    });
  }
});
