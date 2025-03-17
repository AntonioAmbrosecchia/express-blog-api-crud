const express = require('express');
const app = express();
const postsRoutes = require('./routes/postsRoutes');

app.use(express.json()); // Middleware per il parsing del JSON
app.use('/api', postsRoutes); // Montiamo le rotte sotto /api

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});