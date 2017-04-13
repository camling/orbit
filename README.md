# Orbit
## AFRAME VR Orbit Component

AFAME VR Orbit Component created by Chris Amling

This is a component to work with the AFRAME WebVr framework. It allows you to set an orbit based on an X,Z starting position.
You can also use it to position elements in a circle or oval without motion by setting the speed to 0.

Set orbit with schema inputs: rotationPostion, radious, speed, clockwise, oval, startPosition, and centerView

* rotationPosition is the X,Z postion at the center of the rotation, it defaults to 0,0
* radious is how far out the element will rotate from the center rotationPosition, it defaults to 5
* speed is how fast the the element will travel, it defaults to 1
* clockwise is the direction that the element will travel, it defaults to true
* oval allows the orbit to be shaped into an oval instead of a perfect circle, by multiplying to the first position the oval will extend along the x axis, the second position will extent along the z axis.
* startPosition is put in degrees,  if you're looking forward at 0,0,0  270 degrees is in front of you.
* centerView is a boolean that lets the element always face in towards the rotationPosition

EXAMPLE: `<a-box orbit></a-box>`

EXAMPLE: `<a-box orbit="rotationPosition: 0 0; radious: 2; speed: 3;"></a-box>`

EXAMPLE: `<a-box position="0 2 0" orbit="rotationPosition: 1 2; radious: 3; speed: 2; clockwise:false; oval: 1.6 1; startPosition: 270"></a-box>`
