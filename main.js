let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let leftkeyboard = 'qwerasdfzxcv'.split('');
let middlekeyboard = 'tyuighjkbnm'.split('');

let keyCombo = [];
let up = 0;

function restart(){
    document.getElementById("letterContainer").innerHTML = "";
    window.removeEventListener('keydown', pressed)
    up = 0;
    keyCombo = [];
    randomizeLetters();
}

function randomizeLetters(){

    for (let ind = 0; ind < 15; ind++){
        let key = leftkeyboard[Math.floor(Math.random() * 10)]
        keyCombo.push(key); 
        let character = htmlToElement(`<p id="${ind}" class="letter">${key.toUpperCase()}</p>`)
        document.getElementById("letterContainer").appendChild(character)
    }

    console.log(keyCombo)

    window.addEventListener('keydown', pressed)
}

function pressed(event){
    if (event.key === keyCombo[0]){
        console.log('Correct!')
        keyCombo.splice(0, 1)
        this.document.getElementById(up).style.backgroundColor = "#18a78a";
        up++
    } else {
        console.error("WRONG!")
    }
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
}