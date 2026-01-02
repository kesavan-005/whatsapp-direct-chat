const input = document.getElementById("number");
const errorMsg = document.getElementById("errorMsg");

// ENTER key support
input.addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    openChat();
  }
});

function openChat(){
  let num = input.value.trim();
  errorMsg.textContent = "";

  if(num === ""){
    errorMsg.textContent = "Please enter a number";
    return;
  }

  num = num.replace(/\s+/g, "");   // remove spaces
  num = num.replace(/\D+/g, "");   // remove non digits

  // If 10 digits → assume India
  if(num.length === 10){
    num = "91" + num;
  }

  // If user entered 91XXXXXXXXXX keep it
  // If user entered +91 it becomes 91 anyway above

  if(num.length < 12){
    errorMsg.textContent = "Invalid number. Indian numbers must be 10 digits.";
    return;
  }

  const finalURL = "https://wa.me/" + num;

  window.open(finalURL, "_blank");
}
