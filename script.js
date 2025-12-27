<script>
  const video = document.getElementById("video");

  if (!localStorage.getItem("videoPlayed")) {
    video.autoplay = true;
    video.muted = true;
    video.play();

    video.addEventListener("ended", () => {
      localStorage.setItem("videoPlayed", "true");
    });
  }
</script>