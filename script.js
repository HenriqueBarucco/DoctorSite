const nounou=['location','href','querySelector','https://discord.com/oauth2/authorize?client_id=783456301803765771&scope=bot&permissions=8','©\x20Made\x20by\x20HenriqueBarucco\x20with\x20❤️','createTextNode','button.s-m-btn','createElement','footer','onclick','button.hero-btn','appendChild'];(function(Nounou,nOunou){const NOunou=function(nOUnou){while(--nOUnou){Nounou['push'](Nounou['shift']());}};NOunou(++nOunou);}(nounou,0xfd));const Nounou=function(nOunou,NOunou){nOunou=nOunou-0x0;let noUnou=nounou[nOunou];return noUnou;};document[Nounou('0x1')](Nounou('0x9'))[Nounou('0x8')]=nOunou=>window[Nounou('0xb')][Nounou('0x0')]=Nounou('0x2');document[Nounou('0x1')](Nounou('0x5'))[Nounou('0x8')]=NOunou=>window[Nounou('0xb')][Nounou('0x0')]='https://discord.com/oauth2/authorize?client_id=783456301803765771&scope=bot&permissions=8';let footer=document[Nounou('0x6')](Nounou('0x7'));let text=document[Nounou('0x4')](Nounou('0x3'));footer[Nounou('0xa')](text);document['body'][Nounou('0xa')](footer);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);