radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
