// Countdown Script
const eventDate = new Date("April 16, 2025 14:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

  const eventStatus = document.getElementById("event-status");
  if (distance < 0) {
    eventStatus.innerText = "📅 The event has started! 🚀";
    clearInterval(timer);

    // Make sure upload button is still visible
    const uploadCard = document.getElementById("upload-card");
    if (uploadCard) {
      uploadCard.style.display = "block";
      uploadCard.style.visibility = "visible";
    }
  }

};

const timer = setInterval(updateCountdown, 1000);

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollTopBtn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
};
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
