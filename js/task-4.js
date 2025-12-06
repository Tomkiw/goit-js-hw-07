const form = document.querySelector(".login-form");
// console.log("🚀 ~ form:", form);

form.addEventListener("submit", handleFormsSubmit);

function handleFormsSubmit(event) {
  event.preventDefault(); // сторінка не перезавантажується
  const form = event.target; //  submit дає доступ до всієї форми через event.target
  const formData = {}; // об'єкт куди записується інформація
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  console.log("🚀 ~ handleFormsSubmit ~ formData:", formData);

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    formData.email = email;
    formData.password = password;
  }

  form.reset();
}
