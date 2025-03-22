function openModal(modalId) {
    let modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}
function reserveTable() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value.trim();
    let time = document.getElementById("time").value.trim();
    let guests = document.getElementById("guests").value.trim();

    if (!name || !email || !phone || !date || !time || !guests) {
        alert("Please fill out all fields.");
        return false;
    }

    // Get stored emails from localStorage
  const registeredEmails = JSON.parse(localStorage.getItem("registeredEmails")) || [];

    // Check if email is already registered
    if (registeredEmails.includes(email)) {
        alert("This email is already registered for a reservation.");
        return false;
    }

    // Save email to localStorage
    registeredEmails.push(email);
    localStorage.setItem("registeredEmails", JSON.stringify(registeredEmails));

    alert("Reservation Successful!");
    return true;
}

// Theme Toggle Button
const toggleSwitch = document.getElementById("themeToggle");
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});
