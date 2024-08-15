#!/usr/bin/node

// The First Team Array 
const teamOne = ["Player1", "Player2", "Player3", "Player4", "Player5", 
    "Player6", "Player7", "Player8", "Player9", "Player10", "Player11"];

// The Second  Team Array
const teamTwo = ["Player12", "Player13", "Player14", "Player15", "Player16", 
    "Player17", "Player18", "Player19", "Player20", "Player21", "Player22"];
        
// Array That Contain All Players From  TeamOne And Team2
const allPlayers = teamOne.concat(teamTwo);

// Loop through each player in the allPlayers array Using For Of
for (const player of allPlayers) {
    console.log(player);
}

// Define Goal Keeper As The First Player In TeamOne Array
const gkOne = teamOne[0];
console.log("TeamOne Goalkeeper:", gkOne);

// Define Other Players Without Goal  Keeper
const fieldPlayersOne = teamOne.slice(1);
console.log("Field Players:", fieldPlayersOne);

// Define Goal Keeper As The First Player In TeamTwo Array
const gkTwo = teamTwo[0];
console.log("TeamTwo Goalkeeper:", gkTwo);

// Define Other Players Without Goal  Keeper
const fieldPlayersTwo = teamTwo.slice(1);
console.log("Field Players:", fieldPlayersTwo);

// Define Three substitute players of  teamOne
const substitutesTeamOne = ["Player100", "Player101", "Player102"];

// Define the original teamOne players with the substitutes to create the final team
const playersFinalTeamOne = teamOne.concat(substitutesTeamOne);
console.log("Substitute Players Of The First Team:", substitutesTeamOne);
console.log("Full Players Of First Team:", playersFinalTeamOne);

// Define Three substitute players of teamTwo
const substitutesTeamTwo = ["Player103", "Player104", "Player105"];

// Define the original teamTwo players with the substitutes to create the final team
const playersFinalTeamTwo = teamTwo.concat(substitutesTeamTwo);
console.log("Substitute Players Of The Second Team:", substitutesTeamTwo);
console.log("Full Players Of Second Team:", playersFinalTeamTwo);

// Define Game Odd Object
const gameOdds = {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5
};

// Assign the odds to separate variables
const team1 = gameOdds.team1;
const draw = gameOdds.draw;
const team2 = gameOdds.team2;

//  If Team1 Have Odds More Than draw and Team2 It will Be The Winner 
if (team1 > team2 && team1 > draw) {
    console.log("Team 1 is likely to win based on the odds.");
//  If Team2 Have Odds More Than draw and Team1 It will Be The Winner
} else if (team2 > team1 && team2 > draw) {
    console.log("Team 2 is likely to win based on the odds.");
//  If Draw Have Odds More Than team1 and Team2 It will Be The Winner
} else if (draw > team1 && draw > team2) {
    console.log("The game is likely to end in a draw based on the odds.");
// Just Amessage To Make That Odds More clear
} else {
    console.log("The odds do not clearly favor one outcome.");
}

// Print Goals Function
function printGoals(...players) {
    // Initialize scores
    let scoreTeamOne = 0;
    let scoreTeamTwo = 0;

    // Count goals based on team
    for (const player of players) {
        if (teamOne.includes(player)) {
            scoreTeamOne++;
        } else if (teamTwo.includes(player)) {
            scoreTeamTwo++;
        }
    }
    console.log(`TeamOne: ${scoreTeamOne} : TeamTwo: ${scoreTeamTwo}`);
}

printGoals("Player12", "Player15", "Player3", "Player16");
