const jwt = require('jsonwebtoken');

const { Usuario } = require('../../../models');

const checaAutenticacao = async (req, res, next) => {
    try {
        const jwtUsuario = req.headers.authorization.replace('Bearer', '');
        const email = (await jwt.verify(jwtUsuario, process.env.SECRET_JWT)).email;

        const usuario = await Usuario.findOne({ email: email });

        if (!usuario) {
            throw 'User NOT FOUND!';
        }
        req.usuario = usuario;

        next();
    } catch (e) {
        res.status(401).json({
            sucesso: false,
            erro: 'DO LOGIN AGAIN',
        })
    }
};

module.exports = { 
    checaAutenticacao, 
}