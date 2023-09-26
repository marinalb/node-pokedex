const express = require('express');

const { Pokemon } = require('../../models');
const router = express.Router();

// Create - CRUD
router.post('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.create({
            ...req.body,
            ...{
                capturadoPor: req.usuario._id
            }
        });
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
        options.capturadoPor = req.usuario._id;

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

//Read Height MIN - CRUD - ALTURA MINUMA
router.get('/alt/:altura', async (req, res) => {
   
    try {  
       const pokemon = await Pokemon.find({ 
           altura: {
            $gte:req.params.altura
        }});
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

//Read WEIGHT MIN - CRUD - PESO MINUMO
router.get('/peso/:peso', async (req, res) => {
   
    try {  
       const pokemon = await Pokemon.find({ 
        peso: {
            $gte:req.params.peso
        }});
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
        const pokemon = await Pokemon.findOne({ 
            _id: req.params.id,
            capturadoPor: req.usuario._id, 
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

//Update - CRUD
router.patch('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({
            _id: req.params.id,
            //capturadoPor: req.usuario._id, 
        });

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