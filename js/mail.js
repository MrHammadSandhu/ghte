// Select form and button
const form = document.getElementById("inquiry-form");
const submitButton = document.getElementById("submit-button");

// Toast function
function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");

  // Create toast element
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  // Append the toast to the container
  toastContainer.appendChild(toast);

  // Show toast with animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 500);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500); // Wait for the transition to end
  }, 3000);
}

// Form submit handler
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Disable the button and show "Sending..." message
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Gather form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("msg").value;

  try {
    // Send data to backend
    const response = await fetch("https://ghte-backend.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });
    // const response = await fetch("http://localhost:5000/api/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name, email, phone, subject, message }),
    // });

    const data = await response.json();

    if (response.ok) {
      showToast("Email sent successfully!", "success");
      form.reset();
    } else {
      showToast(data.message || "Failed to send inquiry.", "error");
    }
  } catch (error) {
    console.error("Error:", error);
    showToast("An error occurred while sending the inquiry.", "error");
  } finally {
    // Re-enable the button and reset text
    submitButton.disabled = false;
    submitButton.textContent = "Send Email";
  }
});
