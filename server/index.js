require('dotenv').config();
const express = require('express');
const sequelize = require('./db'); //инструмент для организации взоимодействия Node.js и БД
const PORT = process.env.PORT || 5000;
const models = require('./models/models');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
    try {
        await sequelize.authenticate(); //подключение к БД
        await sequelize.sync(); //сверяет состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();