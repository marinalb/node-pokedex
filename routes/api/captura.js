const express = require('express');

const buscaInfoPokemon = require('../../services/busca-pokemon');
const { Pokemon } = require('../../models');

const router = express.Router();

router.post('captura/:id', async (req, res) => {
    const pokemons = await buscaInfoPokemon(req.params.id);

    const pokemonFoiCapturado = true;

    if (pokemonFoiCapturado) {
        await Pokemon.create(pokemon);
        res.json({
            capturado: true,
            id: pokemonCapturado._id
        });
    }else (_ => res.status(404).json({ erro: 'Pokemon NOT found' }));
});

module.exports = router;