const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function filterByName(results, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return results.filter(element => element.name.toLowerCase().includes(searchTerm));
}

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists`)
    .then((response) => response.json())
    .then((results) => {
      const filteredResults = filterByName(results, searchTerm);
      displayResults(filteredResults);
    })
    .catch((error) => {
      console.error("Ocorreu um erro na requisição à API:", error);
      // Exiba uma mensagem de erro para o usuário
    });
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value;
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});
