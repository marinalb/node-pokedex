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
router.get('/:altura', async (req, res) => {
    try {
        const filtros = req.params;
        const options = {};

        if (filtros > Pokemon.altura) {
            options = options.altura;
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

//Read Height MIN - CRUD - ALTURA
router.get('/:altura', async (req, res) => {
   
    try {  
       const pokemon = await Pokemon.find({ 
            altura: req.params.altura, 
        
        });
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

//Read WEIGHT MIN - CRUD - PESO
router.get('/:peso', async (req, res) => {
   
    try {  
       const pokemon = await Pokemon.find({ 
            peso: req.params.peso, 
        
        });
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

//Delete - CRUD
router.delete('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOneAndDelete({ _id: req.params.id });
        res.json({
            sucesso: true
        })
    } catch {
        res.status(404).json({
            sucesso: false,
            erro: 'Pokemon NOT found!',
        })
    }
});

module.exports = router;