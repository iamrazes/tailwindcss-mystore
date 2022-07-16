const searchSection = document.getElementById("searchSection");
const searchToggle = document.querySelectorAll("#searchToggle");

searchToggle.forEach((search) => {
  search.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    searchSection.classList.toggle("hidden");
  });
});
