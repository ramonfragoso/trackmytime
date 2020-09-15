var User = require('../models/user.model');


exports.read = (req, res) => {
    res.send('Olá! Teste ao Controller');
};

exports.create = (req, res) => {

    let {name, email} = req.body;

    let user = new User({
        name: name,
        email: email
    })
    user.save((err) => {
        console.log(err)
        if(err) {
            console.log('Erro: ' + err)
        } else {
            res.send("Usuário salvo com sucesso: \n\n" + user)
        }
    })
}