const form = document.querySelector(".login-form");

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

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const email = form.elements.email.value;
//   const password = form.elements.password.value;
//   const cleanEmail = email.trim();
//   const cleanPassword = password.trim();
//   if (cleanEmail === "" || cleanPassword === "") {
//     alert("All form fields must be filled in");
//     return;
//   }
//   const data = {
//     email: cleanEmail,
//     password: cleanPassword,
//   };
//   console.log(data);
//   form.reset();
// }
