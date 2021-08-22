const date = {
    loadDate() {
        let nowDate = new Date()
        let nowYear = nowDate.getFullYear()
        document.querySelector(".date").innerHTML = nowYear
    }
}

const buttonScale = {
    scale() {
        document.querySelector(".button").classList.toggle("active")
    }
}

date.loadDate()