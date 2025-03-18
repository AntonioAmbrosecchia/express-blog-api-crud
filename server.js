const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const postsRoutes = require('./routes/postsRoutes');

app.use(bodyParser.json());
app.use('/api', postsRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint non trovato" })
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});