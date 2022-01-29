let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else if (bearing < 135 || bearing > 225) {
        basic.showString("S")
    } else if (bearing > 225 || bearing < 315) {
        basic.showString("W")
    } else if (bearing > 45 || bearing < 135) {
        basic.showString("E")
    } else {
    	
    }
})
