basic.forever(function () {
    basic.showIcon(IconNames.Chessboard)
    if (input.lightLevel() > 128) {
        led.setBrightness(input.lightLevel())
    } else if (input.lightLevel() > 50 && input.lightLevel() <= 128) {
        led.setBrightness(input.lightLevel())
    } else {
        led.setBrightness(input.lightLevel())
    }
})
