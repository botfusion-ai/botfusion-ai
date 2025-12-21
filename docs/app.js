/* =========================
   BotFusion AI – App Logic
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const menuBtn = document.querySelector(".menu-btn");
  const newChatBtn = document.querySelector(".new-chat-btn");
  const input = document.querySelector("#userInput");
  const sendBtn = document.querySelector(".send-btn");
  const messages = document.querySelector(".messages");
  const suggestions = document.querySelectorAll(".suggestion");

  const settingsBtn = document.querySelector("#settingsBtn");
  const accountBtn = document.querySelector("#accountBtn");

  /* =========================
     Sidebar Toggle (Mobile)
     ========================= */
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  /* =========================
     New Chat
     ========================= */
  if (newChatBtn) {
    newChatBtn.addEventListener("click", () => {
      messages.innerHTML = "";
      input.value = "";
      input.focus();
    });
  }

  /* =========================
     Suggestions Click
     ========================= */
  suggestions.forEach(card => {
    card.addEventListener("click", () => {
      input.value = card.innerText;
      input.focus();
    });
  });

  /* =========================
     Send Message
     ========================= */
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    // Fake bot reply (UI demo)
    setTimeout(() => {
      addMessage("🤖 BotFusion AI is thinking...", "bot");
    }, 600);
  }

  function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = `message ${type}`;
    msg.innerText = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  /* =========================
     Settings
     ========================= */
  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      alert("⚙️ Settings panel coming soon");
    });
  }

  /* =========================
     Account
     ========================= */
  if (accountBtn) {
    accountBtn.addEventListener("click", () => {
      alert("👤 Account profile coming soon");
    });
  }
});
