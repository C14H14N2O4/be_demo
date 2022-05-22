const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

connectDB()

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/', require('./routes/inventoryRoutes'))