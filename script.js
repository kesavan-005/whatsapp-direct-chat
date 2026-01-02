const input = document.getElementById("number");
const statusMsg = document.getElementById("statusMsg");
const btn = document.getElementById("chatBtn");
const box = document.getElementById("phoneBox");

/* -------- SAFE LOADER (Works 100%) -------- */
function showApp(){
  const loader = document.getElementById("pageLoader");
  const app = document.getElementById("appBody");

  if(loader) loader.classList.add("hidden");
  if(app) app.classList.remove("hidden");
}

/* Trigger when DOM is ready */
document.addEventListener("DOMContentLoaded", showApp);

/* Extra failsafe in case of cache / SW delay */
setTimeout(showApp, 2500);

/* -------- ENTER KEY -------- */
input.addEventListener("keydown", e => {
  if(e.key === "Enter") openChat();
});

/* -------- BUTTON -------- */
btn.addEventListener("click", openChat);

/* -------- AUTO CLEAN INPUT -------- */
input.addEventListener("input", () => {
  let v = input.value;
  v = v.replace(/\s+/g,"");     // remove spaces
  v = v.replace(/[^0-9+]/g,""); // allow digits + plus
  input.value = v;
});

/* -------- VIBRATION -------- */
function vibrate(ms){
  if(navigator.vibrate){
    navigator.vibrate(ms);
  }
}

/* -------- ERROR -------- */
function showError(msg){
  statusMsg.style.color = "#ff8b8b";
  statusMsg.textContent = msg;

  box.classList.remove("success-glow");
  box.classList.add("error-glow","shake");

  vibrate(150);

  setTimeout(()=> box.classList.remove("shake"),300);
}

/* -------- SUCCESS -------- */
function showSuccess(){
  statusMsg.style.color = "#9ef7c9";
  statusMsg.textContent = "Opening WhatsApp…";

  box.classList.remove("error-glow");
  box.classList.add("success-glow");

  vibrate(70);
}

/* -------- MAIN FUNCTION -------- */
function openChat(){

  let num = input.value.trim();
  statusMsg.textContent = "";

  if(num === ""){
    showError("Please enter a number");
    return;
  }

  // Remove all non-numeric
  num = num.replace(/\D+/g,"");

  // If 10 digits → Indian number
  if(num.length === 10){
    num = "91" + num;
  }

  // Must be 12 digits (91 + number)
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
