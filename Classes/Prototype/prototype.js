function Microfone() {
    isOn = true;
}

Microfone.prototype.isOnReverse = function() {
    console.log(isOn)
    console.log(!isOn)
}

const microfone = new Microfone()

microfone.isOnReverse()