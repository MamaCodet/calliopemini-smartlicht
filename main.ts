basic.forever(function () {
    if (input.soundLevel() > 15 || input.lightLevel() < 10) {
        basic.setLedColor(0xffffff)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(3000)
        basic.turnRgbLedOff()
        basic.clearScreen()
    } else {
        basic.turnRgbLedOff()
        basic.clearScreen()
    }
})
