const searchInput = document.querySelector(".search-container input");
const searchContainer = document.querySelector(".search-container");
const searchCloseBtn = document.querySelector(".search-close-btn");

searchInput.addEventListener("click", () => {
  searchContainer.classList.add("active");
  searchCloseBtn.style.display = "block";
});

searchCloseBtn.addEventListener("click", () => {
  searchContainer.classList.remove("active");
  searchCloseBtn.style.display = "none";
  searchInput.value = "";
});
