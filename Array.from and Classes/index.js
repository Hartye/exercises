class dateClass {
    constructor() {

        this.result()
    }

    result(start=12, stop) {
        stop = stop === undefined ? stop = start: stop = stop
        start = stop === start ? start = 0: start = start - 1

        const finalResult = Array.from({length: stop - start}, (_, i) => {
            const month = start + i
            const date = new Date(0, month)

            return date
        })

        console.log(finalResult.map(x => x.toLocaleString("pt-BR", { month: "long" })))
    }
}

const dateOnClass = new dateClass()

dateOnClass.result(2)
