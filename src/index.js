const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/character/:id", async (req, res) => {
    const { id } = req.params;
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    res.send(data);
  } catch (error) {
    res.send({error : error.message})
  }
});

app.listen(3000);

/**
 * id
 * name
 * status
 * species
 * origin (nao tem que ser o objkecto e sim diretamente a propriedade name)
 * image
 * episode (quantidade de que tem nesse array e retornar a quantidade ao invés de o array de string)
 * created
 */

/**
 * fazer rota de filtro por personagem baseado no id
 */