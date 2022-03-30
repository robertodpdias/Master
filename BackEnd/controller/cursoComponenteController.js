const cursoComponente = require ('../model/cursoComponente');

const create = async (req, resp) => {
    const data = req.body;
    let ret = [];
    try {
       ret = await cursoComponente.create(data);
    }catch(err) {
        console.log(err);
        resp.status(400);
    }
    resp.json(ret);
}

const read = async (req, resp) => {
    // FILTRO POR ID
    let filtro = {};
    let id = req.params.id;
    if(id != undefined) filtro = { where : {id:id}};

    filtro.attributes = {
        exclude: []
    }

    // FILTRO SEM ID, BUSCA TUDO NO BD
    const ret = await cursoComponente.findAll(filtro);
    resp.json(ret);
}

const update = async (req, resp) => {
    const id = req.params.id;
    const data = req.body;
    let ret = await cursoComponente.update(data, {
        where : {id: id},
    });
    ret = await cursoComponente.findAll({
        where : { id : id}
    })
    resp.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;
    const ret = await cursoComponente.destroy ({
        where : { id : id}
    })
    if(ret == 1){
        res.json({id : id, mesage : 'Excluido com sucesso!!'});
        console.log({id : id}, "Excluido com sucesso!!")
    } else {
        res.status(400).send();
    }
}

module.exports = {
    create,
    read,
    update,
    remove,    
}