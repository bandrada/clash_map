function addToUpgrades() {
    var display = document.getElementById('display');
    var upgradeData = document.getElementById('upgradeData');
    console.debug(upgradeData.value);
    display.innerText = parseInput(upgradeData.value);
}

function parseInput(input) {
    var data = [];
    var sub = '';
    for (let i = 0; i < input.length; i++) {
        sub += input[i];
        if (input[i] === '\n'){
            data.push(sub);
            sub = '';
        }
    }
    console.debug(data);
    return data;
}

function getJSON(path) {
    console.debug('NEW! load json');
    fetch(path)
        .then((response) => response.text())
        //.then((response) => response.json())
        .then((json) => console.log(json));
}

function onLoad() {
    var display = document.getElementById('display');
    display.innerText = getJSON('cool');
    //display.innerText = getJSON('./game_upgrades.json');
}

