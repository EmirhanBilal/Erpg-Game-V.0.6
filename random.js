// slime --> 4 , skeleton --> 3 ,
function random_select() {
    let randomMonster = Math.floor(Math.random() * 20);
    let randomMap = Math.floor(Math.random() * 4);
    let monster
    let map
if (randomMonster <= 4 ) {
    // monster --> slime
    monster = "slime"
}
else if(randomMonster <= 8){
    //monster --> Skeleton
    monster = "skeleton"
}
else if(randomMonster <= 10){
    //monster --> Spider
    monster = "spider"
}
else if(randomMonster <= 12){
    //monster --> Wolf
    monster = "wolf"
}
else if(randomMonster <= 14){
    //monster --> Minatour
    monster = "minatour"
}
else if(randomMonster <= 16){
    //monster --> Orc
    monster = "orc"
}
else if(randomMonster <= 18 ){
    //monster --> Vampire
    monster = "vampire"
}
else if(randomMonster <= 19 ){
    //monster --> Dragon
    monster = "dragon"
}
sessionStorage.setItem("monsterName",monster)

if (randomMap === 0) {
//     // map --> Forest
    map = "forest"
}
else if(randomMap === 1){
//     // map --> ice-cave
    map = "ice-cave"
}
else if(randomMap === 2){
    // map --> Space
    map = "space"
}
else if(randomMap === 3){
    // map --> Empty
    map = "empty"
}
sessionStorage.setItem("mapName", map)
}

