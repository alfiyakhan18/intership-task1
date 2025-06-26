// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
});

// To-Do List functionality
function addTask() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const list = document.getElementById("todoList");

  const li = document.createElement("li");
  li.textContent = task;

  // Remove task on click
  li.addEventListener("click", function () {
    list.removeChild(li);
  });

  list.appendChild(li);
  input.value = "";
}