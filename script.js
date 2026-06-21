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