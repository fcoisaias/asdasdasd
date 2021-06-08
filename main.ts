input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . # # # .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.pause(5000)
    basic.clearScreen()
})
