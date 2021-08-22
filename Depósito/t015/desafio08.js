const result = Array.from({length: 7}, (_, i) => {
    const date = new Date(0, 0, i)

    return date.toLocaleString("pt-BR", { weekday:"long"})
})

console.log(result)