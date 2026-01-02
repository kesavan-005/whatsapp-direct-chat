const input = document.getElementById("number");
const errorMsg = document.getElementById("errorMsg");
const btn = document.getElementById("chatBtn");

// ENTER key support
input.addEventListener("keydown", e => {
  if(e.key === "Enter") openChat();
});

btn.addEventListener("click", openChat);

function openChat(){

  let num = input.value.trim();
  errorMsg.textContent = "";

  if(num === ""){
    errorMsg.textContent = "Please enter a number";
    return;
  }

  num = num.replace(/\D+/g, ""); // remove non-digits

  // If user enters 10 digits → auto add Indian code
  if(num.length === 10){
    num = "91" + num;
  }

  // If user enters +91 or 91 it stays correct above

  if(num.length !== 12){
    errorMsg.textContent = "Invalid number. Enter valid 10-digit Indian number.";
    return;
  }

  const url = `https://wa.me/${num}`;
  window.open(url, "_blank");
}
