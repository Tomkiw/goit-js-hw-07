const form = document.querySelector(".login-form");
// console.log("🚀 ~ form:", form);

form.addEventListener("submit", handleFormsSubmit);

function handleFormsSubmit(event) {
  event.preventDefault(); // сторінка не перезавантажується
  const form = event.target;
  const formData = {};
  console.log("🚀 ~ handleFormsSubmit ~ formData:", formData);
  //  submit дає доступ до всієї форми через event.target

  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    (formData.email = form.elements.email.value.trim()),
      (formData.password = form.elements.password.value.trim());
  }

  form.reset();
}
