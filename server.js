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

client.login("NzY2MjE4NTk4OTEzMTQ2OTAx.X4gKrQ.Uj3NFWhHgu_7qJQk_quin1C0gIc")