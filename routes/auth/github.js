const passport = require('passport');
const crypto = require('crypto');
const GitHubStrategy = require('passport-github2').Strategy;

const { Usuario } = require('../../models');

passport.use(new GitHubStrategy ({
    clientID: process.env.GITHUB_OAUTH_CLIENT_ID,
    clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_OAUTH_REDIRECT_URI,
    state: true,
}, async (_accessToken, _refreshToken, profile, done) => {
    let usuario;

    const usuarioEmail = profile.userEmailURL;
    try {
        usuario = await Usuario.findOneAndUpdate({ email: usuarioEmail }, {
            gitUsuarioId: profile.id
        });
        if (!usuario) {
            usuario = await Usuario.create({
                email: usuarioEmail,
                gitUsuarioId: profile.id,
                nome: profile.displayName,
                senha: (await crypto.randomBytes(48)).toString('hex'),
            });
        }
        done(null, usuario);
    } catch (err) {
        done(err, null);
    }
}));