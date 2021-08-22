function result(start, stop) {
    stop = stop === undefined ? stop = start: stop = stop
    start = stop === start ? start = 0: start = start - 1

    const result = Array.from({ length: stop - start }, (_, i) => {
        const month = start + i
        const date = new Date(0, month)

        return date
    })

    console.log(result.map(x => x.toLocaleString('pt-BR', { month:"long" })))

}