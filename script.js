// JavaScript loaded
console.log("JavaScriptが読み込まれました");


// profile message button
const profileButton = document.getElementById("profile-button");
const profileMessage = document.getElementById("profile-message");

if (profileButton && profileMessage) {
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
}


// back to top button
const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
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
}


// fade in animation
const fadeItems = document.querySelectorAll(".card, .about-section");

function showFadeItems() {
  fadeItems.forEach(function (item) {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showFadeItems);
showFadeItems();


// image zoom modal
const zoomImages = document.querySelectorAll(".zoom-image");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");

if (imageModal && modalImage) {
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
}


// copy email button
const copyEmailButton = document.getElementById("copy-email-button");
const copyEmailMessage = document.getElementById("copy-email-message");

if (copyEmailButton && copyEmailMessage) {
  copyEmailButton.addEventListener("click", function () {
    navigator.clipboard.writeText("k.changes.m@gmail.com")
      .then(function () {
        copyEmailMessage.textContent = "メールアドレスをコピーしました！";

        setTimeout(function () {
          copyEmailMessage.textContent = "";
        }, 2000);
      })
      .catch(function () {
        copyEmailMessage.textContent = "コピーに失敗しました。";
      });
  });
}