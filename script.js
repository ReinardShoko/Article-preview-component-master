const shareBtn = document.querySelector(".share-btn");
const sharePopup = document.querySelector(".share-popup");

shareBtn.addEventListener("click", () => {
  sharePopup.classList.toggle("hidden");
});
