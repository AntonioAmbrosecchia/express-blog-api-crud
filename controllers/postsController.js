const posts = require('../data/posts');

const index = (req, res) => {
    res.json(posts);
};


const show = (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post non trovato" });
    res.json(post);
};

const destroy = (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).json({ message: "Post non trovato" });

    posts.splice(postIndex, 1);
    console.log("Lista aggiornata:", posts);
    res.status(204).send(); // Nessun contenuto
};

module.exports = { index, show, destroy };