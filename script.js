function openChat() {
  let cc = document.getElementById("countryCode").value.trim();
  let mobile = document.getElementById("mobile").value.trim();

  if (mobile === "") {
    alert("Please enter a mobile number");
    return;
  }

  // Auto detect | If user enters only 10 digits assume India
  if (mobile.length === 10 && cc === "") {
    cc = "91";
  }

  // Remove + if user accidentally types
  mobile = mobile.replace("+", "");

  const finalNumber = cc + mobile;

  window.location.href = `https://wa.me/${finalNumber}`;
}