const config = {
  prizeMultiplier: 2,
  prizeDivider: 2,
  rangemult: 4,
  maxatempt: 3
};
const gameSettings = {
  prize: 100,
  range: 8,
  totalPrize: 0
};
let playgameagain = false;


if (confirm('Do you want to play a game?')) {

  do{ 
  let randnumbr = Math.floor(Math.random() * ++ gameSettings.range);
  console.log(randnumbr);
  let userwin = gameSettings.prize;
  let range = gameSettings.range;
  for (let atempt = 1; atempt <= config.maxatempt; ++atempt){
    const userGuess = parseInt(prompt(`
    Enter a number from 0 to ${range-1}
    Attempts left: ${config.maxatempt - atempt + 1}
    Total prize: ${gameSettings.totalPrize}$
    Possible prize on current attempt: ${userwin} $`))
    
    if ( userGuess === randnumbr) {
       gameSettings.totalPrize = userwin + gameSettings.totalPrize;
      if (confirm(`Congratulation, you won! Your prize is: 
        ${gameSettings.totalPrize}$ Do you want to continue?`)) {
        range += config.rangemult;
        userwin = gameSettings.prize * config.prizeMultiplier;
        playgameagain = true;
        ++config.prizeMultiplier;
        atempt = 0;
        } else {
        alert(`Thank you for your participation. Your prize is: ${gameSettings.totalPrize} $`);
        if (confirm('Do you want to play again?')) {
          playgameagain = true;
          userwin = gameSettings.prize;
          atempt = 0;
        } else {
        break;
        }
      }
    } else if (atempt === config.maxatempt && randnumbr !== userGuess){
      alert(`Thank you for your participation. Your prize is: ${gameSettings.totalPrize} $`);
      if (confirm('Do you want to play again?')){
        userwin = gameSettings.prize;
        atempt = 0;
        playgameagain = true;

      } else { 
        break;
      }
    } else {
        userwin = userwin / config.prizeDivider;
      }
  }  
} while (playgameagain);

} else {
  alert('You did not become a billionaire, but can');
}