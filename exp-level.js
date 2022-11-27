function level_calculate() {
    if (Number(sessionStorage.getItem("totalExp")) > 74) {
        sessionStorage.setItem("championLevel",Number(sessionStorage.getItem("championLevel"))+1)
        sessionStorage.setItem("totalExp",0)
    }
}

