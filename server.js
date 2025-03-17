const express = require('express');
const app = express();
const postsRoutes = require('./routes/postsRoutes');

app.use(express.json());
app.use('/api', postsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});