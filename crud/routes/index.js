const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

router.get("/movies", (req, res, next) => {
  Movies.find().then(allMovies => res.json(allMovies));
});

router.get("/movie/:id", (req, res, next) => {
  Movies.findById(req.params.id).then(allMovies => res.json(allMovies));
});

router.post("/movie", (req, res, next) => {
  Movies.create(req.body).then(() => res.redirect("/movies"));
});

router.put("/movie/:id", (req, res, next) => {
  Movies.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.json({ updated: true });
  });
});

router.delete("/movie/:id", (req, res, next) => {
  Movies.findByIdAndDelete(req.params.id).then(() => res.redirect("/movies"));
});

module.exports = router;
