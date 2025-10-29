const checkboxes = document.querySelectorAll('input[name="type"]');
const genreCheckboxes = document.querySelectorAll('input[name="genre"]');
const directorInput = document.getElementById('directorInput');
const castInput = document.getElementById('castInput');
const searchInput = document.getElementById('searchInput');
const posters = document.querySelectorAll('.poster');

// Tek filtreleme fonksiyonu
function applyFilters() {
  const typeFilters = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value.toLowerCase());
  const genreFilters = Array.from(genreCheckboxes).filter(cb => cb.checked).map(cb => cb.value.toLowerCase());
  const searchTerm = searchInput.value.toLowerCase();
  const directorSearch = directorInput.value.toLowerCase();
  const castSearch = castInput.value.toLowerCase();

  posters.forEach(poster => {
    const type = poster.dataset.type?.toLowerCase();
    const title = poster.dataset.title?.toLowerCase() || "";
    const genres = poster.dataset.genre?.toLowerCase().split(',') || [];
    const director = poster.dataset.director?.toLowerCase() || "";
    const cast = poster.dataset.cast?.toLowerCase() || "";

    const typeMatch = !typeFilters.length || typeFilters.includes(type);
    const genreMatch = !genreFilters.length || genreFilters.some(g => genres.includes(g.trim()));
    const titleMatch = title.includes(searchTerm);
    const directorMatch = !directorSearch || director.includes(directorSearch);
    const castMatch = !castSearch || cast.includes(castSearch);

    if (typeMatch && genreMatch && titleMatch && directorMatch && castMatch) {
      poster.style.display = 'block';
    } else {
      poster.style.display = 'none';
    }
  });
}

// Dinleyiciler
checkboxes.forEach(cb => cb.addEventListener('change', applyFilters));
genreCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
searchInput.addEventListener('input', applyFilters);
directorInput.addEventListener('input', applyFilters);
castInput.addEventListener('input', applyFilters);

// Detay sayfasına geçiş
function viewDetails(title, image, director, cast, genre, plot) {
  const movie = { title, image, director, cast, genre, plot };
  localStorage.setItem("selectedMovie", JSON.stringify(movie));
  sessionStorage.setItem("fromBackButton", "false");
  window.location.href = "index.html";
}

// Posterleri tıklanabilir hale getir
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.poster').forEach(poster => {
    const title = poster.dataset.title || "";
    const image = poster.querySelector("img")?.getAttribute("src") || "";
    const director = poster.dataset.director || "";
    const cast = poster.dataset.cast || "";
    const genre = poster.dataset.genre || "";
    const plot = poster.dataset.plot || "Details not available.";

    poster.style.cursor = "pointer";
    poster.onclick = () => viewDetails(title, image, director, cast, genre, plot);
  });

  // Sayfa yüklenince mevcut filtrelerle başlasın
  applyFilters();
});
