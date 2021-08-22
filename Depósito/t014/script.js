const date = {
    loadDate() {
        let nowDate = new Date()
        let nowYear = nowDate.getFullYear()
        document.querySelector(".date").innerHTML = nowYear
    }
}

class CustomButton extends HTMLElement {
    constructor() {
        super()

        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode:'open'})

        shadow.appendChild(this.img())
        shadow.appendChild(this.button())
    }

    img() {
        const img = document.createElement('img')
        img.setAttribute('src', 'https://source.unsplash.com/random/50x50?sig=1')

        return img
    }

    button() {
        const button = document.createElement('button')
        button.innerHTML = 'CLICK'

        return button
    }
}

customElements.define('custom-button', CustomButton)
date.loadDate()