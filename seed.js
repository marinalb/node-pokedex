require('dotenv').config();
const mongoose = require('mongoose');

const { connect, Pokemon } = require('./models');

const populaBancoDeDados = async () => {
    connect();
    await Pokemon.create({
        id: 7,
        nome: 'Squirtle',
        altura: 5,
        peso: 90,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
        ataques: 'torrent, rain-dish',
        estatisticas: {
            hp: 44,
            attack: 48,
            defense: 65,
            'special-attack': 50,
            'special-defense': 64,
            speed: 43
        }
    });
    await Pokemon.create({
        id: 143,
        nome: 'Snorlax',
        altura: 21,
        peso: 4600,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
        ataques: 'torrent, rain-dish',
        estatisticas: {
            hp: 160,
            attack: 48,
            defense: 65,
            'special-attack': 65,
            'special-defense': 110,
            speed: 30
        }
    });
    await Pokemon.create({
        id: 175,
        nome: 'Togepi',
        altura: 3,
        peso: 15,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png',
        ataques: 'torrent, rain-dish',
        estatisticas: {
            hp: 35,
            attack: 20,
            defense: 65,
            'special-attack': 40,
            'special-defense': 65,
            speed: 20
        }
    });
    await Pokemon.create({
        id: 152,
        nome: 'Chikorita',
        altura: 9,
        peso: 64,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png',
        ataques: 'torrent, rain-dish',
        estatisticas: {
            hp: 45,
            attack: 49,
            defense: 65,
            'special-attack': 49,
            'special-defense': 65,
            speed: 45
        }
    });
    await Pokemon.create({
        id: 81,
        nome: 'Magnemite',
        altura: 3,
        peso: 60,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png',
        ataques: 'torrent, rain-dish',
        estatisticas: {
            hp: 25,
            attack: 35,
            defense: 70,
            'special-attack': 95,
            'special-defense': 55,
            speed: 45
        }
    });
    await Pokemon.create({
        id: 54,
        nome: 'Psyduck',
        altura: 8,
        peso: 196,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png',
        ataques: 'torrent, rain-dish',
        estatisticas: {
            hp: 50,
            attack: 52,
            defense: 48,
            'special-attack': 65,
            'special-defense': 50,
            speed: 55
        }
    });
    await Pokemon.create({
        id: 150,
        nome: 'Mewtwo',
        altura: 20,
        peso: 1220,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
        ataques: 'scarlet-violet, rain-dish',
        estatisticas: {
            hp: 106,
            attack: 110,
            defense: 90,
            'special-attack': 155,
            'special-defense': 90,
            speed: 130
        }
    });
    await Pokemon.create({
        id: 155,
        nome: 'Cyndaquil',
        altura: 5,
        peso: 79,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png',
        ataques: 'scarlet-violet, rain-dish',
        estatisticas: {
            hp: 39,
            attack: 52,
            defense: 43,
            'special-attack': 60,
            'special-defense': 50,
            speed: 65
        }
    });
    await Pokemon.create({
        id: 39,
        nome: 'Jigglypuff',
        altura: 5,
        peso: 55,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
        ataques: 'scarlet-violet, rain-dish',
        estatisticas: {
            hp: 2,
            attack: 45,
            defense: 20,
            'special-attack': 45,
            'special-defense': 25,
            speed: 20
        }
    });
    await Pokemon.create({
        id: 42,
        nome: 'Golbat',
        altura: 16,
        peso: 550,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png',
        ataques: 'scarlet-violet, rain-dish',
        estatisticas: {
            hp: 75,
            attack: 80,
            defense: 70,
            'special-attack': 65,
            'special-defense': 75,
            speed: 90
        }
    });
    await mongoose.disconnect();
};

populaBancoDeDados();