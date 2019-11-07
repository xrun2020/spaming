const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();


client.on('ready', () => {

console.log(`Access`);




});




client.on('message', message => {


if(message.content == '!spam'){

let count = 0;
let ecount = 0;
for (let x =0; x < 90000; x++){
message.channel.send(`credit babay`)
.then(n => {
count++;
})

}
});




client2.on('message', message => {

if(message.content === '!spam'){

let count = 0;
let ecount = 0;

for(let x = 0; x < 90000; x++){


message.channel.send(`credit babay`)
.then(n => {
count++;
}

}


}


})




client.login(process.env.TOKEN);
client.login(process.env.TOKEN2);
