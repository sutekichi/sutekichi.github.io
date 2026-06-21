//box
console.log("JavaScriptが読み込まれました");
const profileButton = document.getElementById("profile-button");
const profileMessage = document.getElementById("profile-message");

profileButton.addEventListener("click", function () {
  profileMessage.classList.toggle("active");

  if (profileMessage.classList.contains("active")) {
    profileMessage.textContent = "弥栄 / Cheers";
    profileButton.textContent = "c ya";
  } else {
    profileMessage.textContent = "";
    profileButton.textContent = "click";
  }
});


//scroll
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


//query Selectroll// 
const fadeItems = document.querySelectorAll(".card, .about-section");

window.addEventListener("scroll", function () {
  fadeItems.forEach(function (item) {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
});


// image zoom//
const zoomImages = document.querySelectorAll(".zoom-image");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");

zoomImages.forEach(function (image) {
  image.addEventListener("click", function () {
    modalImage.src = image.src;
    imageModal.classList.add("show");
  });
});

imageModal.addEventListener("click", function () {
  imageModal.classList.remove("show");
  modalImage.src = "";
});

