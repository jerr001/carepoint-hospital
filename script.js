const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

if (navLinks) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("#navLinks a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    const targetPage = href.split("?")[0].split("#")[0].split("/").pop() || "index.html";
    if (targetPage === currentPage) {
      link.classList.add("active");
    }
  });
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

if (appointmentForm && formMessage) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const department = document.getElementById("department")?.value;

    if (name && department) {
      formMessage.textContent =
        `Thank you, ${name}. Your ${department} appointment request has been received.`;
      formMessage.style.color = "#103b5f";
      appointmentForm.reset();
    }
  });
}

const dateInput = document.getElementById("date");
if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
}
