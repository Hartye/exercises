class Microfone {
    constructor() {
        this.isOn = true;
    }
    isOnReverse() {
        console.log(this.isOn);
        console.log(!this.isOn);
    }
}


const microfone = new Microfone()

microfone.isOnReverse()