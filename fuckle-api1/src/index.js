const express = require('express')
var cors = require('cors');
var cron = require('node-cron');

const CUSS_WORDS = [
  "FUCK",
  "SHIT",
  "PISS",
  "CUNT",
  "DICK",
  "JIZZ",
  "TITS",
  "COCK",
  "DONG",
  "TWAT",
  "FART",
  "POOP",
  "NIPS",
  "CRAP",
  "HELL",
  "THOT",
  "DAMN",
  "SIMP",
  "ARSE",
  "WANK",
  "CUCK",
  "SLUT",
  "WANK",
  "NUTS",
  "BUTT",
  "SHAG",
  "GASH",
  "JUGS",
  "MUFF",
  "BANG",
  "DIKE",
  "SLIT",
  "DUMP",
  "CLIT",
  "HUMP",
  "TURD",
  "ANAL",
  "FROT",
  "GIMP",
  "PIMP",
];

const app = express()
app.use(cors({
  origin: '*'
}));
 

let index = 0
cron.schedule('* * * * *', () => {
  console.log('running a task every day');
  index += 1
  if (index === CUSS_WORDS.length) index = 0
  console.log(CUSS_WORDS[index])
});

var port = process.env.PORT || 3000;

app.get('/', (_, res) => {
  const word = CUSS_WORDS[index]
  res.status(200).send(JSON.stringify(word))
})

app.listen(port, () => console.log(`Running on port ${port}`))

module.exports = app;