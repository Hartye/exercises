const A = 65
const Z = 90
const length = Z - A + 1

const result = Array.from({ length }, (_, i) => A + i)

function reformuledResult() {
    const map1 = result.map(x => String.fromCharCode(x))

    console.log(map1)
}

reformuledResult()

// Alternative ===================================================================
const AZ = [65, 90]

const result = Array.from({ length: AZ[1] - AZ[0] + 1 }, (_, i) => AZ[0] + i)

console.log(result.map(x => String.fromCharCode(x)))