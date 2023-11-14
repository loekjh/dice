input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showNumber(randint(1, 4))
    } else {
        if (Math.randomBoolean()) {
            basic.showIcon(IconNames.Ghost)
        } else {
            basic.showNumber(randint(1, 4))
        }
    }
})
