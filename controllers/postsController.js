const index = (req, res) => {
    res.send("Lista di tutti i post");
};

const show = (req, res) => {
    res.send(`Mostra il post con ID ${req.params.id}`);
};

const create = (req, res) => {
    res.send("Crea un nuovo post");
};

const update = (req, res) => {
    res.send(`Aggiorna il post con ID ${req.params.id}`);
};

const destroy = (req, res) => {
    res.send(`Elimina il post con ID ${req.params.id}`);
};

module.exports = { index, show, create, update, destroy };