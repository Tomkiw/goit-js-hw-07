const textInput = document.getElementById("name-input");
// console.log("🚀 ~ textInput:", textInput);
const spanSearch = document.getElementById("name-output");
// console.log("🚀 ~ spanтSearch:", spanSearch);

// textInput.addEventListener("input", (event) => {
//   const name = event.target.value.trim();
//   if (name === "") {
//     spanSearch.textContent = "Anonymous";
//   } else {
//     spanSearch.textContent = name;
//   }
// });

textInput.addEventListener("input", handLeInput);

function handLeInput(event) {
  const name = event.target.value.trim();

  if (name === "") {
    spanSearch.textContent = "Anonymous";
  } else {
    spanSearch.textContent = name;
  }
}
