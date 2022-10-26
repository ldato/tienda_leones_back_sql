const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: false}));

app.use('/api',indexRouter);

const db = require('./models');
db.sequelize.sync();

app.listen(3000, () => {
    console.log("Server running on port 3000");
})