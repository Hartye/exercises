class StatRater extends HTMLElement {
    constructor() {
        super()

        this.build()
    }

    build() {
        const shadow = this.attachShadow({mode: "open"})

        shadow.appendChild(this.style())

        const rater = this.createRater()
        this.stars = this.createStars()

        this.stars.forEach(star => rater.appendChild(star))

        this.resetRating()
        
        shadow.appendChild(rater)

    }

    createRater() {
        const rater = document.createElement("div")
        rater.classList.add("star-rater")
        rater.addEventListener('mouseout', this.resetRating.bind(this))

        return rater
    }

    createStars() {
        // O id na função createStar é o index do Array criado, ou seja, ele é o número das casas: ex [0, 1, 2, 3, 4] index = 4
        const createStar = (_, id) => {
            const star = document.createElement("span")
            star.classList.add("star")
            star.setAttribute("data-value", Number(id) + 1)
            star.innerHTML = "&#9733;"

            // A partir do momento que nós colocamos o this dentro de uma função ele para de referenciar o this principal (no caso atual a classe StarRater) e passa a referenciar o protocolo da função ( no caso do setRating seria o event), porém, com o método bind() nós conseguimos fazer com que a função herde o this principal (bind significa ligar)
            star.addEventListener("click", this.setRating.bind(this))
            star.addEventListener("mouseover", this.ratingHover.bind(this))
            return star
        }

        return Array.from({ length: 5}, createStar)
    }

    resetRating() {
        this.currentRatingValue = this.getAttribute('data-rating') || 0
        this.hightlightRating()
    }

    setRating(event) {
        this.setAttribute("data-rating", event.currentTarget.getAttribute("data-value"))
    }

    ratingHover(event) {
        this.currentRatingValue = event.currentTarget.getAttribute('data-value')
        this.hightlightRating()
    }

    hightlightRating() {
        this.stars.forEach( star => {
            star.style.color = this.currentRatingValue >= star.getAttribute('data-value') ? 'yellow': 'gray'
        })
    }

    style() {
        const style = document.createElement("style")
        style.textContent = `
            .star {
                font-size: 60px;
                color: gray;
                cursor: pointer;
            }
        `

        return style
    }
}

customElements.define("star-rater", StatRater)