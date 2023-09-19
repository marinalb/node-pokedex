const express = require('express');

const { Pokemon } = require('../../models');
const router = express.Router();

// Create - CRUD
router.post('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.create(req.body);
        res.status(201).json({
            sucesso: true,
            pokemon: pokemon,
        });
    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e,
        });
    }
});

//Read - CRUD
router.get('/', async (req, res) => {
    try {
        const filtros = req.query;
        const options = {};

        if (filtros.nomeComecaCom) {
            options.nome = {
                $regex: filtros.nomeComecaCom + '.*',
            };
        }

        const pokemons = await Pokemon.find(options);
        res.status(200).json({
            sucesso: true,
            pokemons: pokemons,
        })
    } catch (e) {
        res.status(500).json({
            sucesso: false,
            erro: e,
        })
    }
});

//Read ID - CRUD
router.get('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ _id: req.params.id });
        res.json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch {
        res.status(404).json({
            sucesso: false,
            erro: 'Pokemon NOT found!',
        })
    }
});

//Update - CRUD
router.patch('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({_id: req.params.id});

        Object.keys(req.body).forEach((atributo) => {
            pokemon[atributo] = req.body[atributo];
        });
            await pokemon.save();
            res.json({
                sucesso: true,
                pokemon: pokemon,
            });
    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e,
        })
    }
});

module.exports = router;