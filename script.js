function validateForm(event) {
  event.preventDefault(); // stop default form submit

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value.trim();
  const reason = document.getElementById("reason").value.trim();

  if (!name || !email || !phone || !course || !reason) {
    alert("Please fill out all fields!");
    return false;
  }

  // Success: Redirect to success.html
  window.location.href = "success.html";
}