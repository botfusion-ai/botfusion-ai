const menu = document.getElementById("menu");
const openMenu = document.getElementById("openMenu");
const profileBtn = document.getElementById("profileBtn");

openMenu.onclick = () => {
  menu.classList.toggle("show");
};

profileBtn.onclick = () => {
  alert("Profile coming soon — Google login will be added here 🙂");
};

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    alert("Feature coming soon: " + chip.textContent);
  });
});
