const input = document.getElementById("number");
const statusMsg = document.getElementById("statusMsg");
const btn = document.getElementById("chatBtn");
const box = document.getElementById("phoneBox");

/* -------- WEBSITE LOADING -------- */
document.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("pageLoader");
  const app = document.getElementById("appBody");

  // Small delay for smooth animation
  setTimeout(() => {
    loader.classList.add("hidden");
    app.classList.remove("hidden");
  }, 700);
});

/* -------- SAFETY FAILSAFE (if anything breaks) -------- */
setTimeout(() => {
  const loader = document.getElementById("pageLoader");
  const app = document.getElementById("appBody");
  if (loader) loader.classList.add("hidden");
  if (app) app.classList.remove("hidden");
}, 3000);


/* -------- ENTER KEY -------- */
input.addEventListener("keydown", e => {
  if(e.key === "Enter") openChat();
});

btn.addEventListener("click", openChat);

/* -------- AUTO CLEAN ON INPUT -------- */
input.addEventListener("input", () => {
  let v = input.value;
  v = v.replace(/\s+/g,"");
  v = v.replace(/[^0-9+]/g,"");
  input.value = v;
});

function vibrate(ms){
  if(navigator.vibrate){
    navigator.vibrate(ms);
  }
}

function showError(msg){
  statusMsg.style.color = "#ff8b8b";
  statusMsg.textContent = msg;

  box.classList.remove("success-glow");
  box.classList.add("error-glow","shake");

  vibrate(150);

  setTimeout(()=> box.classList.remove("shake"),300);
}

function showSuccess(){
  statusMsg.style.color = "#9ef7c9";
  statusMsg.textContent = "Opening WhatsApp…";

  box.classList.remove("error-glow");
  box.classList.add("success-glow");

  vibrate(70);
}

function openChat(){
  let num = input.value.trim();
  statusMsg.textContent = "";

  if(num === ""){
    showError("Please enter a number");
    return;
  }

  num = num.replace(/\D+/g,"");

  if(num.length === 10){
    num = "91" + num;
  }

  if(num.length !== 12){
    showError("Invalid number. Enter valid 10-digit Indian number.");
    return;
  }

  showSuccess();

  setTimeout(()=>{
    const url = `https://wa.me/${num}`;
    window.open(url,"_blank");
  },300);
}
