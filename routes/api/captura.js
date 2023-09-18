const express = require('express');

const buscaInfoPokemon = require('../../services/busca-pokemon');
const { Pokemon } = require('../../models');

const router = express.Router();

router.post('captura/:id', (req, res) => {
        buscaInfoPokemon(req.params.id).then((pokemon) => {
            const pokemonFoiCapturado = true;

            if (pokemonFoiCapturado){
                Pokemon.create(pokemon).then((pokemonCapturado) => {
                    res.json({
                        capturado: true,
                        id: pokemonCapturado._id
                    }); 
                }).catch(e => res.status(500).json({ erro: e}));
            }
        }).catch(_ => res.status(404).json({ erro: 'Pokemon NOT found'}));
});

module.exports = router;