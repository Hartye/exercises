const date = {
    loadDate() {
        let nowDate = new Date()
        let nowYear = nowDate.getFullYear()
        document.querySelector(".date").innerHTML = nowYear
    }
}

function count(start, finish) {
    finish = finish === undefined ? start: finish
    start = finish === start ? 1: start

    const length = finish - start + 1
    const result = Array.from({length}, (_, i) => start + i)

    return result
}

console.log(mapCars)

date.loadDate()