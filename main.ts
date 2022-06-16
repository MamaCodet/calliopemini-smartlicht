let led2 = 0
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() > 130) {
        basic.turnRgbLedOff()
    } else {
        led2 = 255 - input.lightLevel() * 2
        basic.setLedColor(basic.rgbw(
        led2,
        led2,
        led2,
        0
        ))
    }
})
