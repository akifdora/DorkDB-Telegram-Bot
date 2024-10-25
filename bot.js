const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
const token = 'BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });
const handleCommands = require('./commands');
const handleMessages = require('./messages');
const handleCallbacks = require('./callbacks');

mongoose.connect('mongodb://localhost:27017/DorkDB')
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error('MongoDB bağlantı hatası:', err));

handleCommands(bot);
handleMessages(bot);
handleCallbacks(bot);