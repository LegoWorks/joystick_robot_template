radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        X = Math.map(value, 0, 1023, 1, -1)
    }
    if (name == "y") {
        Y = Math.map(value, 0, 1023, -1, 1)
    }
})
let vD = 0
let vI = 0
let Y = 0
let X = 0
basic.showNumber(3)
radio.setGroup(3)
let vel = 100
X = 0
Y = 0
basic.forever(function () {
    vI = (vel * Y + 1 * (vel * X)) * 0.3
    vD = (vel * Y - 1 * (vel * X)) * -0.3
    wuKong.setAllMotor(vD, vI)
})
