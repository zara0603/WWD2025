let age = 19;
let isCitizen = true;
let hasVoterID = false;
if (age >= 18) {
    if (isCitizen) {
        if (hasVoterID) {
            console.log("You are eligible to vote.");
        } else {
            console.log("You must have a valid Voter ID to vote.");
        }
        
    } else {
        console.log("You must be a citizen to vote.");
    }
} else {
    console.log("You must be at least 18 years old to vote.");
}