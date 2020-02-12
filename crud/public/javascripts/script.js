function updateMovies() {
  axios.get("/movies").then(allMovies => {
    let moviesPayload = allMovies.data;

    document.querySelector("#total").innerHTML = `(${moviesPayload.length})`;

    let moviesContainerDOMEl = document.querySelector("#movies");
    moviesContainerDOMEl.innerHTML = "";

    moviesPayload.forEach(movie => {
      let movieDOMEl = document.createElement("li");
      movieDOMEl.innerHTML = `${movie.title} <button onclick="deleteMovie('${movie._id}')">Delete</button>`;
      moviesContainerDOMEl.appendChild(movieDOMEl);
    });
  });
}

function deleteMovie(movieID) {
  let URL = `/movie/${movieID}`;
  axios.delete(URL).then(() => updateMovies());
}

document.querySelector("button").onclick = function() {
  updateMovies();
};
document.querySelector("#create-movie").onclick = function(e) {
  e.preventDefault();

  axios
    .post("/movie", {
      title: document.querySelector("input[name=title]").value,
      genre: ["Drama", "War"],
      year: Math.random() * 2020,
      director: "Quique",
      duration: "2h 10min",
      rate: 8.1
    })
    .then(() => updateMovies());
};
