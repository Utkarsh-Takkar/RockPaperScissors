let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const user_choice = document.querySelector("#user-score");
const comp_choice = document.querySelector("#comp-score");
const displayMsg = document.querySelector("#msg");

const genCompChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let ind = Math.floor(Math.random()*3);
    console.log("computer's choice is",options[ind]);
    return options[ind];
}

const playGame = (userChoice)=> {
    console.log("user's choice is:",userChoice);
    const storeCompChoice = genCompChoice();

    if(storeCompChoice==="rock" && userChoice==="paper"){
        console.log("user wins");
        userScore++;
        user_choice.innerText = userScore;
        displayMsg.innerText = "You Win !";

    }else if (storeCompChoice==="rock" && userChoice==="scissors"){
        console.log("comp wins");
        compScore++;
        comp_choice.innerText=compScore;
        displayMsg.innerText= "You Lose!"

    }else if(storeCompChoice==="paper" && userChoice==="rock"){
        console.log("comp win");
        compScore++;
        comp_choice.innerText=compScore;
        displayMsg.innerText= "You Lose!"

    }else if(storeCompChoice==="paper" && userChoice==="scissors"){
        console.log("user wins");
        userScore++;
        user_choice.innerText = userScore;
        displayMsg.innerText = "You Win !";

    }else if (storeCompChoice==="scissors" && userChoice==="rock"){
        console.log("user wins");
        userScore++;
        user_choice.innerText = userScore;
        displayMsg.innerText = "You Win !";

    }else if(storeCompChoice==="scissors" && userChoice==="paper"){
        console.log("comp wins")
        compScore++;
        comp_choice.innerText=compScore;
        displayMsg.innerText= "You Lose!"

    }else{
        console.log("its a draw");
        displayMsg.innerText = "It's a Draw!";
    }
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        console.log("choice was clicked!", userChoice);
        playGame(userChoice);
    })
})