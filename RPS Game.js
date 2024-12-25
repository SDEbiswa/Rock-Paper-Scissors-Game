 let userScore = 0;                                                       // 1st step.
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");                    // 2nd step.
 const resultMsg = document.querySelector("#msg");

 const userScorecount = document.querySelector("#user-score");
 const compScorecount = document.querySelector("#bot-score");

 const playComp = () => {
    const compPlayer = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);               //math.random is generate random number 0 to 1, like 0.9146, 0.74829.
    return compPlayer[randomidx];
 };

 const drawGame = () => {
    console.log("game was draw.");
    resultMsg.innerText = "Game was Draw";
    resultMsg.style.backgroundColor = "#081b31";
 };

 const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorecount.innerText = userScore;
        resultMsg.innerText = `You win ${userChoice} beat ${compChoice}`;
        resultMsg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorecount.innerText = compScore;
        resultMsg.innerText = `You lost ${compChoice} beats your ${userChoice}`; 
        resultMsg.style.backgroundColor = "red";
    }
 }
 const playGame = (userChoice) => {
    console.log("userchoice =", userChoice);
    const compChoice = playComp();
    console.log("compchoice =", compChoice);

    if(userChoice === compChoice) {
       drawGame();
    } else {
       let userWin = true;
       if(userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;      
     } else if(userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
     } else {
        userWin = compChoice === "rock" ? false : true;
     }
     showWinner(userWin, userChoice, compChoice);
    }
 };

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {                                 // 3rd step.
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
 });