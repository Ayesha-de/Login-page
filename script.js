const alien = document.getElementById("alien");
const alienText = document.getElementById("alien-text");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-button");
const form = document.getElementById("login-form");

alien.addEventListener("mouseover", () => {
  if (!username.value && !password.value) {
    alienText.textContent = "👽 Fill the boxes!";
  } else if (!username.value || !password.value) {
    alienText.textContent = "😡 Fill BOTH!";
  }
});

form.addEventListener("mousemove", (e) => {
  if ((username.value && !password.value) || (!username.value && password.value)) {
    const x = Math.random() * (form.clientWidth - loginBtn.offsetWidth);
    const y = Math.random() * (form.clientHeight - loginBtn.offsetHeight);
    loginBtn.style.position = "absolute";
    loginBtn.style.left = `${x}px`;
    loginBtn.style.top = `${y + 150}px`;
  } else {
    loginBtn.style.position = "static";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!username.value || !password.value) {
    alienText.textContent = "🤖 Fill everything first!";
    return;
  }
  alienText.textContent = "🚀 Taking off...";
  alert("Welcome to Space!");
});