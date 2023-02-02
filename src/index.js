const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/character/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return res.send({
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      origin: data.origin.name,
      image: data.image,
      episodes: data.episode.length,
      created: data.created
    });

  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(3000);
