const date = {
    loadDate() {
        let nowDate = new Date()
        let nowYear = nowDate.getFullYear()
        document.querySelector(".date").innerHTML = nowYear
    }
}

class DOM {
    constructor() {
        this.getValues()
        this.results()
    }

    getValues() {
        let startDate, stopDate

        startDate = document.querySelector("#start")
        stopDate = document.querySelector("#stop")

        startDate = startDate.value
        stopDate = stopDate.value

        startDate = startDate.split("-")[1]
        stopDate = stopDate.split("-")[1]

        startDate = Number(startDate)
        stopDate = Number(stopDate)

        return {
            startDate,
            stopDate
        }
    }

    results(start=12, stop) {
        stop = stop === undefined? stop = start: stop = stop
        start = stop === start? start = 0: start = start - 1

        const monthArray = Array.from({ length: stop - start }, (_, i) => {
            const month = start + i
            const date = new Date(0, month)

            return date
        })

        return monthArray.map(x => x.toLocaleString("pt-BR", {month: "long"}))
    }
}

const fileDOM = new DOM()

const Form = {
    submit(event) {
        event.preventDefault()
        const {startDate, stopDate} = fileDOM.getValues()

        isNaN(startDate) ? alert("Preencha ao menos o primerio campo"): continueFun()

        function continueFun() {
            const value = isNaN(stopDate) ? fileDOM.results(startDate): (fileDOM.results(startDate, stopDate))

            Form.setHTML(value)
        }
    },

    setHTML(value) {
        let setHTML = document.querySelector("#results")
        value.push(value.length)
        setHTML.innerHTML = value.join(" - ")
    },

    clearCanvas() {
        let setHTML = document.querySelector("#results")
        setHTML.innerHTML = ""
        
    }
}

date.loadDate()
