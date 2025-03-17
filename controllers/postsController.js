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
    res.status(204).send();
};

const create = (req, res) => {

    console.log('Dati in arrivo:', req.body);

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Title e content sono richiesti" });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content
    };

    posts.push(newPost);
    console.log("Nuovo post creato:", newPost);
    res.status(201).json(newPost);
};

const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;


    const post = posts.find(p => p.id === postId);
    if (!post) return res.status(404).json({ message: "Post non trovato" });

    if (!title || !content) {
        return res.status(400).json({ message: "Title e content sono richiesti per aggiornare il post" });
    }


    post.title = title;
    post.content = content;

    console.log("Post aggiornato:", post);

    res.status(200).json(post);
};


module.exports = { create, index, update, show, destroy };
