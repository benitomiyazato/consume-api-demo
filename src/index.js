const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/character/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    res.send({
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      origin: data.origin.name,
      image: data.image,
      episodes: data.episode.length,
      created: data.created,
    });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get("/api/character/page/:pageNumber", async (req, res) => {
  const { pageNumber } = req.params;
  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    );
    const results = data.results.map(mapResults);

    res.send({
      info: data.info,
      results: results,
    });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(3000);

function mapResults(character) {
  return {
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    origin: character.origin.name,
    image: character.image,
    episodes: character.episode.length,
    created: character.created,
  };
}
