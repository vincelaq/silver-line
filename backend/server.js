/* Dotenv Require */
require("dotenv").config();

/* External Module */
const express = require("express");
const { chats } = require("./data/data");



/* Internal Modules */

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = process.env.PORT || 4000;

/* Middleware */


/* Routes and Controllers */
app.get('/', (req, res) => {
    res.send("API is Running")
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id)
    res.send(singleChat)
})

/* Server Listener */
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}! Dope!`);
});