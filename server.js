const discord = require("discord.js")
const client = new discord.Client()

client.on("ready",() =>{
	console.log(" I am ready, my master")
});

client.on("message",message => {
	if(message.content === "!ping"){
		return message.channel.send("Pong " + client.ws.ping)}
}
})

client.login("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
