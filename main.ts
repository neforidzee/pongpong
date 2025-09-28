radio.onReceivedNumber(function (receivedNumber) {
    let ressive_number = 0
    if (ressive_number == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (ressive_number == 1) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showString("Hello!")
    }
})
input.onButtonPressed(Button.A, function () {
    message_one = 0
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(message_one)
})
input.onButtonPressed(Button.B, function () {
    message_one = 1
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    message_one = 2
    basic.showString("Hello!")
})
let message_one = 0
radio.setGroup(30)
