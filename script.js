function openChat() {
  let number = document.getElementById("number").value.trim();

  if (number === "") {
    alert("Please enter a WhatsApp number");
    return;
  }

  if (number.length < 10) {
    alert("Enter valid mobile number with country code");
    return;
  }

  window.location.href = "https://wa.me/" + number;
}

