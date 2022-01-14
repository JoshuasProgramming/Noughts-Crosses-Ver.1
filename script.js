/**
 * Noughts & Crosses JavaScript File 
 * author(Joshua Thomas)
 * Date(10.01.2022)
 * version:1.0
 */

//Grabbing the elements

const box1 = document.getElementById('1');
const box2 = document.getElementById('2');
const box3 = document.getElementById('3');
const box4 = document.getElementById('4');
const box5 = document.getElementById('5');
const box6 = document.getElementById('6');
const box7 = document.getElementById('7');
const box8 = document.getElementById('8');
const box9 = document.getElementById('9');

const result = document.getElementById('result');

const box = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

let user_won = false;
let comp_won = false;

//Create events for every box in the grid. (E.G: if box1 is cicked => an X will appear on the top left corner of the grid).

box1.addEventListener("click", (e)=>{
    if((box1.innerHTML == "X") || (box1.innerHTML == "O")){
        alert("already picked");
    }
    if((box1.innerHTML != "X") || (box1.innerHTML != "O")){
        box1.style.backgroundColor = "red";
        box1.style.transition = "1.5s";
        box1.innerHTML = "X";
        check()
    }
})

box2.addEventListener("click", (e)=>{
    if((box2.innerHTML == "X") || (box2.innerHTML == "O")){
        alert("already picked");
    }
    if((box2.innerHTML != "X") || (box2.innerHTML != "O")){
        box2.style.backgroundColor = "red";
        box2.style.transition = "1.5s";
        box2.innerHTML = "X";
        check()
    }
})

box3.addEventListener("click", (e)=>{
    if((box3.innerHTML == "X") || (box3.innerHTML == "O")){
        alert("already picked");
    }
    if((box3.innerHTML != "X") || (box3.innerHTML != "O")){
        box3.style.backgroundColor = "red";
        box3.style.transition = "1.5s";
        box3.innerHTML = "X";
        check()
    }
})

box4.addEventListener("click", (e)=>{
    if((box4.innerHTML == "X") || (box4.innerHTML == "O")){
        alert("already picked");
    }
    if((box4.innerHTML != "X") || (box4.innerHTML != "O")){
        box4.style.backgroundColor = "red";
        box4.style.transition = "1.5s";
        box4.innerHTML = "X";
        check()
    }
})

box5.addEventListener("click", (e)=>{
    if((box5.innerHTML == "X") || (box5.innerHTML == "O")){
        alert("already picked");
    }
    if((box5.innerHTML != "X") || (box5.innerHTML != "O")){
        box5.style.backgroundColor = "red";
        box5.style.transition = "1.5s";
        box5.innerHTML = "X";
        check()
    }
})

box6.addEventListener("click", (e)=>{
    if((box6.innerHTML == "X") || (box6.innerHTML == "O")){
        alert("already picked");
    }
    if((box6.innerHTML != "X") || (box6.innerHTML != "O")){
        box6.style.backgroundColor = "red";
        box6.style.transition = "1.5s";
        box6.innerHTML = "X";
        check()
    }
})

box7.addEventListener("click", (e)=>{
    if((box7.innerHTML == "X") || (box7.innerHTML == "O")){
        alert("already picked");
    }
    if((box7.innerHTML != "X") || (box7.innerHTML != "O")){
        box7.style.backgroundColor = "red";
        box7.style.transition = "1.5s";
        box7.innerHTML = "X";
        check()
    }
})

box8.addEventListener("click", (e)=>{
    if((box8.innerHTML == "X") || (box8.innerHTML == "O")){
        alert("already picked");
    }
    if((box8.innerHTML != "X") || (box8.innerHTML != "O")){
        box8.style.backgroundColor = "red";
        box8.style.transition = "1.5s";
        box8.innerHTML = "X";
        check()
    }
})

box9.addEventListener("click", (e)=>{
    if((box9.innerHTML == "X") || (box9.innerHTML == "O")){
        alert("already picked");
    }
    if((box9.innerHTML != "X") || (box9.innerHTML != "O")){
        box9.style.backgroundColor = "red";
        box9.style.transition = "1.5s";
        box9.innerHTML = "X";
        check()
    }
})

/**
 * randomBot() generates a random number from 1-9, and adds an 'O' on the grid where that value is stored in the box array
 */

function randomBot(){
    let rand = Math.floor(Math.random() * 10);
    
    if(box[rand].style.backgroundColor == "red"){
        
    }
    box[rand].style.backgroundColor = "blue";
    box[rand].style.transition = "1.5s";
    box[rand].innerHTML = "O";
    return;
}

/**
 * check() function will check for every combination where the user can win the game. 
 * It'll do this by checking if the the box.innerHTML has got an X or not.
 */

function check(){
    if((box[0].innerHTML == "X") && (box[4].innerHTML == "X") && (box[8].innerHTML == "X")){
        result.innerHTML = "X Won" + "<button id='reset'>Reset</button>";
        user_won = true;
        const reset = document.getElementById('reset').addEventListener("click", (e)=>{
            for(let i = 0; i < box.length; i++){
                box[i].style.backgroundColor = "white";
                box[i].style.transition = "1.5";
                box[i].innerHTML = "";
            }
            user_won = false;
            result.innerHTML = "";
        })
    }
    
    if((box[0].innerHTML == "X") && (box[1].innerHTML == "X") && (box[2].innerHTML == "X")){
        result.innerHTML = "X Won" + "<button id='reset'>Reset</button>";
        user_won = true;
        const reset = document.getElementById('reset').addEventListener("click", (e)=>{
            for(let i = 0; i < box.length; i++){
                box[i].style.backgroundColor = "white";
                box[i].style.transition = "1.5";
                box[i].innerHTML = "";
            }
            user_won = false;
            result.innerHTML = "";
        })
    }
    
    if((box[2].innerHTML == "X") && (box[5].innerHTML == "X") && (box[8].innerHTML == "X")){
        result.innerHTML = "X Won" + "<button id='reset'>Reset</button>";
        user_won = true;
        const reset = document.getElementById('reset').addEventListener("click", (e)=>{
            for(let i = 0; i < box.length; i++){
                box[i].style.backgroundColor = "white";
                box[i].style.transition = "1.5";
                box[i].innerHTML = "";
            }
            user_won = false;
            result.innerHTML = "";
        })
    }
    
    if((box[2].innerHTML == "X") && (box[4].innerHTML == "X") && (box[6].innerHTML == "X")){
        result.innerHTML = "X Won" + "<button id='reset'>Reset</button>";
        user_won = true;
        const reset = document.getElementById('reset').addEventListener("click", (e)=>{
            for(let i = 0; i < box.length; i++){
                box[i].style.backgroundColor = "white";
                box[i].style.transition = "1.5";
                box[i].innerHTML = "";
            }
            user_won = false;
            result.innerHTML = "";
        })
    }
    
    if((box[1].innerHTML == "X") && (box[4].innerHTML == "X") && (box[7].innerHTML == "X")){
        result.innerHTML = "X Won" + "<button id='reset'>Reset</button>";
        user_won = true;
        const reset = document.getElementById('reset').addEventListener("click", (e)=>{
            for(let i = 0; i < box.length; i++){
                box[i].style.backgroundColor = "white";
                box[i].style.transition = "1.5";
                box[i].innerHTML = "";
            }
            user_won = false;
            result.innerHTML = "";
        })
    }
    
    if((box[0].innerHTML == "X") && (box[3].innerHTML == "X") && (box[6].innerHTML == "X")){
        result.innerHTML = "X Won" + "<button id='reset'>Reset</button>";
        user_won = true;
        const reset = document.getElementById('reset').addEventListener("click", (e)=>{
            for(let i = 0; i < box.length; i++){
                box[i].style.backgroundColor = "white";
                box[i].style.transition = "1.5";
                box[i].innerHTML = "";
            }
            user_won = false;
            result.innerHTML = "";
        })
    }
    
    if((box[6].innerHTML == "X") && (box[7].innerHTML == "X") && (box[8].innerHTML == "X")){
        result.innerHTML = "X Won" + "<button id='reset'>Reset</button>";
        user_won = true;
        const reset = document.getElementById('reset').addEventListener("click", (e)=>{
            for(let i = 0; i < box.length; i++){
                box[i].style.backgroundColor = "white";
                box[i].style.transition = "1.5";
                box[i].innerHTML = "";
            }
            user_won = false;
            result.innerHTML = "";
        })
    }
    if((box[3].innerHTML == "X") && (box[4].innerHTML == "X") && (box[5].innerHTML == "X")){
        result.innerHTML = "X Won" + "<button id='reset'>Reset</button>";
        user_won = true;
        const reset = document.getElementById('reset').addEventListener("click", (e)=>{
            for(let i = 0; i < box.length; i++){
                box[i].style.backgroundColor = "white";
                box[i].style.transition = "1.5";
                box[i].innerHTML = "";
            }
            user_won = false;
            result.innerHTML = "";
        })
    }
    
    //checks if user has won. 
    //If user haven't won the randomBot() will continue to play the game.
    //If the has won the randomBot() will stop and the user has to restart the game
    if(user_won == false){
        randomBot();
    } else {
        alert("X Won");
    }
}