/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Nov 2023
 * This program makes neopixels light up in coordination to the value of the loopcounter
*/

// variables
let neopixelStrip: neopixel.Strip = null
let loopcounter = 4

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // neopixel colours
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))

  // loopcounter
  loopcounter = 4
  // while statement which makes the number on the MicroBit be the same as the number of lit up neopixels, continues as long as the loopcounter is greather than or equal to zero.
  while (loopcounter >= 0) {
    basic.pause(500)

    neopixelStrip.setPixelColor(loopcounter, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showNumber(loopcounter)
    loopcounter = loopcounter - 1
  }

  // display happy face when done
  basic.showIcon(IconNames.Happy)
})
