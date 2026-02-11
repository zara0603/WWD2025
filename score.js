let playerScore=500;
let level =5;
let bonusPoints=true;
if (bonusPoints && level >= 5) {
    playerScore += 100; 
    console.log(`Congratulations! You've earned bonus points. Your new score is ${playerScore}.`);
}