const liSearch = document.querySelectorAll(".item");
console.log("Number of categories:", `${liSearch.length}`);

liSearch.forEach((li) => {
  const h2 = li.querySelector("h2").textContent;
  const ul = li.querySelectorAll("li").length;

  console.log("Category:", ` ${h2}`);
  console.log("Elenets:", ` ${ul}`);
});
