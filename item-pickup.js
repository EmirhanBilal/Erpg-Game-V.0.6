if (sessionStorage.getItem("sword") != null && sessionStorage.getItem("sword") != "null") {
    let y = 0
    if (sessionStorage.getItem(`item1`) == null || sessionStorage.getItem(`item1`) == "null") {
        sessionStorage.setItem("item1","")
    }   
    
    for (let i= 1; i > y;  i++) {

        if (sessionStorage.getItem(`item${i}`) == "") {

        sessionStorage.setItem(`item${i}`,sessionStorage.getItem("sword"))
        sessionStorage.setItem(`item${i+1}`, "")
         document.getElementById(`item${i}`).style.visibility = "visible"
         y = i + 3
     }
    }
    }
for (let index = 1; sessionStorage.getItem(`item${index}`) != null && sessionStorage.getItem(`item${index}`) != "" && sessionStorage.getItem(`item${index}`) != "null"  ; index++) {
    document.getElementById(`item${index}`).src = sessionStorage.getItem(`item${index}`)
    document.getElementById(`item${index}`).style.visibility = "visible"
}

sessionStorage.setItem("sword",null)