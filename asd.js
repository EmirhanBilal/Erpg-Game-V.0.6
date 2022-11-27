let name_character;
let specCharacter;
let slimeSword;
let totalCoin;
let totalExp;
let addCoin;
function send_name() {
    name_character = sessionStorage.setItem("name", document.getElementById('character-name').innerHTML);
}

function paste_name() {
    document.getElementById('champion-name').innerHTML = sessionStorage.getItem("name");
    document.getElementById('area-level').innerHTML = "Level "+sessionStorage.getItem("championLevel")
}

function paste_town_name() {
document.getElementById('character-name').innerHTML = sessionStorage.getItem("nameback");
document.getElementById('player').innerHTML ="Name: " + sessionStorage.getItem("nameback");

levelP.innerHTML = "Level: "+sessionStorage.getItem("championLevel")
level.innerHTML ="Level "+sessionStorage.getItem("championLevel") + " " + sessionStorage.getItem("specCharacter")
document.getElementById('coin').innerHTML = sessionStorage.getItem("totalCoin");
expHave.innerHTML = sessionStorage.getItem("totalExp");
expBar.style.width = (Number(sessionStorage.getItem("totalExp")) * 5) + "px";
}

function character_spec() {
    if ( document.getElementById('spec-name').innerHTML === "WARRIOR") {
        sessionStorage.setItem("specCharacter", "warrior")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
    if ( document.getElementById('spec-name').innerHTML === "ROGUE") {
        specCharacter = sessionStorage.setItem("specCharacter", "rogue")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
    if ( document.getElementById('spec-name').innerHTML === "MAGE") {
        specCharacter = sessionStorage.setItem("specCharacter", "mage")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
    sessionStorage.setItem("totalCoin",0)
    sessionStorage.setItem("sword",null)
    sessionStorage.setItem("forNextLevel",null)
    for (let index = 0; index < 10; index++) {
        sessionStorage.setItem(`item${index}`,null)
    }
}
function load_for_spec(){
    if (sessionStorage.getItem("specCharacter") === "warrior") {
        document.getElementById('championİmage').src = "Photos/medival-knight-png-5a3a8e26810fe5.8281968015137869185287-removebg-preview (4).png"
        document.getElementById('small-champion-image').src = "Photos/small-img/warrior-small-img.png"
        document.getElementById('flee').href = "warrior-town.html"
        document.getElementById('back-after-victory').action= "warrior-town.html"
    }
    if (sessionStorage.getItem("specCharacter") === "rogue") {
        document.getElementById('championİmage').src = "Photos/266-2663387_rogue-final-ronin-rpg-class.png"
        document.getElementById('small-champion-image').src = "Photos/small-img/small-rogue.png"
        document.getElementById('flee').href = "rogue-town.html"
        document.getElementById('back-after-victory').action= "rogue-town.html"
    }
    if (sessionStorage.getItem("specCharacter") === "mage") {
        document.getElementById('championİmage').src = "Photos/png-transparent-drakensang-online-drakensang-the-dark-eye-mu-online-monster-hunter-freedom-browser-game-mage-game-fictional-character-quest-thumbnail-removebg-preview.png"
        document.getElementById('small-champion-image').src = "Photos/small-img/small-mage.png"
        document.getElementById('flee').href = "mage-town.html"
        document.getElementById('back-after-victory').action= "mage-town.html"
    }
}
function champion_default_level() {
    sessionStorage.setItem("championLevel", 1)
}
function item_pickup() {
    const itemSelect = document.getElementById("itemImage").getAttribute("src");

    if (itemSelect != null && "null"){
        sessionStorage.setItem("sword",itemSelect)
    }
    
    if (sessionStorage.getItem("totalCoin") === null) {
        sessionStorage.setItem("totalCoin",0)
    }
    if (sessionStorage.getItem("totalExp") === null) {
        sessionStorage.setItem("totalExp",0)
    }
    totalCoin = document.getElementById('coinLoot').innerHTML - "";
    totalCoin += sessionStorage.getItem("totalCoin") - "";
    sessionStorage.setItem("totalCoin",totalCoin)
    totalExp = Number(expGain.innerHTML);
    totalExp += Number(sessionStorage.getItem("totalExp"))
    sessionStorage.setItem("totalExp",totalExp)
    
}
function reset_coins() {
    sessionStorage.setItem("totalCoin",0)
    sessionStorage.setItem("sword",null)
    sessionStorage.setItem("forNextLevel",null)
    for (let index = 0; index < 10; index++) {
        sessionStorage.setItem(`item${index}`,null)
    }
}