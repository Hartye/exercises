const result = Array.from({length: 12}, (_, i) => {
    const date = new Date(0, i)
    
    return date.toLocaleString("pt-BR", { month:"long"})
})

console.log(result)