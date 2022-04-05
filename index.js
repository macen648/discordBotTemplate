const { Client, Intents } = require('discord.js')
const Handler = require('dchandler')

const client = new Client({
    intents: [], // Your bots required Intents.
    disableMentions: 'everyone', 
})

client.config = require('./config') // Load config into client to be accesed anywhere.

const handler = new Handler.HandlerClient(client, { // Pass in discord.js client and options.
    commandPath: "commands", // commands folder.
    mongoPath: client.config.app.mongoPath, // MongoDBPath.
    //useNoDB: true, // Specify 'useNoDB: true,' If you wish not to use DB and use only default prefix.
    PREFIX: client.config.app.DEFAULT_PREFIX // Default bot prefix.
})

client.login(client.config.app.TOKEN) // Your bots token.