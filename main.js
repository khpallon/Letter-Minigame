let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let leftkeyboard = 'qwerasdfzxcv'.split('');
let middlekeyboard = 'tyuighjkbnm'.split('');

let keyCombo = [];
let up = 0;
let setTime = 10;


function randomizeLetters(){

    for (let ind = 0; ind < 15; ind++){
        let key = leftkeyboard[Math.floor(Math.random() * 10)]
        keyCombo.push(key); 
        let character = htmlToElement(`<p id="${ind}" class="letter">${key.toUpperCase()}</p>`)
        document.getElementById("letterContainer").appendChild(character)
    }
    window.addEventListener('keyup', pressed)
    document.getElementById('timer').innerHTML = setTime;
    var gameTimer = setInterval(timer, 1000)

    setTimeout(function(){
        clearInterval(gameTimer)
        document.getElementById('timer').innerHTML = 0;
        failGame();
    }, 10000)
}

function pressed(event){
    if (event.key === keyCombo[0]){
        keyCombo.splice(0, 1)
        this.document.getElementById(up).style.backgroundColor = "#18a78a";
        up++
    } else {
        failGame()
    }
}

function timer(){
    setTime--
    document.getElementById('timer').innerHTML = setTime;
}

function failGame(){
    this.document.getElementById(up).style.backgroundColor = "#cc3838";
    this.document.getElementById("whole").style.filter = "brightness(50%)"
    window.removeEventListener('keyup', pressed)
}

function restart(){
    document.getElementById("letterContainer").innerHTML = "";
    window.removeEventListener('keyup', pressed)
    this.document.getElementById("whole").style.filter = "brightness(100%)"
    up = 0;
    keyCombo = [];
    setTime = 10;
    randomizeLetters();
    clearInterval(gameTimer)
}


function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
}