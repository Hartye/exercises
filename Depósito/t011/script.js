const date = {
    loadDate() {
        let nowDate = new Date()
        let nowYear = nowDate.getFullYear()
        document.querySelector(".date").innerHTML = nowYear
    }
}

const buttonScale = {
    scale(value) {
        if (value === 1) {
            document.querySelector(".button").classList.toggle("active")
        }

        if (value === 2) {
            document.querySelector(`.add-button`).classList.toggle("active")
        }

        if (value === 3) {
            document.querySelector(`.cancel-button`).classList.toggle("active")
        }
    }
}

const Popup = {
    swap() {
        document.querySelector(".footer").classList.toggle("desactive")
        document.querySelector(".popup").classList.toggle("active")
    }
}

const Notes = {
    note: [],
    add(value) {
        Notes.note.push(value)
    }
}

const Data = {
    description: document.querySelector("#description"),
    date: document.querySelector("#date"),

    getValues() {
        return {
            description: Data.description.value,
            date: Data.date.value
        }
    },

    pushNotes() {
        const canvas = document.querySelector(".notes-content")
        const newNote = document.createElement("tr")

        newNote.innerHTML = Data.noteSample()

        canvas.appendChild(newNote)
    },

    noteSample() {
        const {description, date} = Data.getValues()

        let html = `
        <td>${description}</td>
        <td>${date}</td>
        <td><img src="./assets/minus.svg" alt="Deletar nota"></td>`

        return html
    },

    submit(event) {
        event.preventDefault()

        Data.pushNotes()
        
    }
}

date.loadDate()