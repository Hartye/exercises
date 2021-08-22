const Note = {
    swap() {
        document
            .querySelector(".note-popup")
            .classList
            .toggle("active")
    }
}


const Form = {

    /*
    - Preciso de uma variável que pega o erro e o trata
    - Preciso de uma variável que aciona um aviso de erro caso as informações estejam       incompletas ou erradas
    - Preciso de uma variável que guarda os valores
    */

    getValues() {
        return {
            description: document.querySelector("#description").value,
            date: document.querySelector("#date").value
        }
    },

    verifyValues() {
        let {description, date} = Form.getValues()

        if (description.trim() === "" || date.trim() === "") {
            throw new Error("Preencha todos os campos")
        }
    },

    submit(event) {
        event.preventDefault()
        
        try {
            Form.verifyValues()

        } catch (error) {
            alert(error)

        }
    }
}
