const liSearch = document.querySelectorAll(".item");
// console.log("🚀 ~ liSearch:", liSearch);

console.log("Number of categories:", liSearch.length);

liSearch.forEach((li) => {
  const h2 = li.querySelector("h2");
  console.log("Category:", h2.textContent);

  const ul = li.querySelectorAll("li");
  console.log("Elenets:", ul.length);
});
