/**
* AFAME VR Orbit Component created by Chris Amling
* set orbit with rotationPostion, radious, speed, clockwise, oval, startPosition
*
* rotationPosition is the X,Z postion at the center of the rotation, it defaults to 0,0
* radious is how far out the element will rotate from the center rotationPosition, it defaults to 5
* speed is how fast the the element will travel, it defaults to 1
* clockwise is the direction that the element will travel, it defaults to true
* oval allows the orbit to be shaped into an oval instead of a perfect circle, by multiplying to the first position
* the oval will extend along the x axis, the second position will extent along the z axis.
* startPosition is put in degrees,  if you're looking forward at 0,0,0  270 degrees is in front of you.
* 
* EXAMPLE: <a-box position="1 2 3" orbit></a-box>
* EXAMPLE: <a-box position="0 2 0" orbit="rotationPosition: 0 0; radious: 2; speed: 3; clockwise:false; oval: 1.6 1; startPosition: 270"></a-box>
*
**/

AFRAME.registerComponent('orbit', {
  schema: {
	  rotationPosition: {type: 'string', default: '0 0'},
    radious: {type: 'number', default: 5},
    speed: {type: 'number', default: 1},
    clockwise: {type: 'boolean', default: true},
    oval: {type: 'string', default: '1 1'},
    startPosition: {type: 'int', default: 0},
    centerView : {type: 'boolean', default: false}

  },

  degreesConverter : function(degrees)
  {
    return degrees * Math.PI / 180;
  },

  radianConverter : function(radians)
  {
    return radians * 180 / Math.PI;
  },

  init: function ()
  {

    this.once = false;

    if(this.data.speed === 0)
    {
      this.once = true;
      this.data.speed = 1;
    }

  	this.speed = this.data.speed / 100;
  	
    if(this.data.clockwise === false)
  	{
  		this.speed = this.speed * -1;
  	}

  	var rotationPositions = this.data.rotationPosition.split(' ');
    this.rotationCenterX = rotationPositions[0];
    this.rotationCenterZ = rotationPositions[1];
    var ovalAmount = this.data.oval.split(' ');
    this.ovalX = ovalAmount[0];
    this.ovalZ = ovalAmount[1];

    this.radians = this.degreesConverter(this.data.startPosition);
    this.radious = this.data.radious;

    this.renderMove();
    
  },

  renderMove : function()
  {

    this.radians = this.radians + this.speed;

    console.log(this.radians);


    var r = this.radious; // radious      radious
    var h = this.rotationCenterX; // circle center    rotationPosition[0]
    var k = this.rotationCenterZ; // circle center    rotationPosition[1]
    var t = this.radians; // radians


    var x = r * Math.cos(t) + h;
    var z = r * Math.sin(t) + k;

    x = x * this.ovalX;
    z = z * this.ovalZ;

    if(this.data.centerView)
    {

      var rot = (t * -1) - 1.5708;

      this.el.object3D.rotation.set(this.el.object3D.rotation.x, rot ,this.el.object3D.rotation.z);

    }

    this.el.object3D.position.x = x;
    this.el.object3D.position.z = z;

    // reset radians
    if(this.radians.toFixed(2) == 6.28)
      {
        this.radians = 0;
      }
  },

  tick : function()
  {

    if(this.once === false)
    {
      this.renderMove();
    }
  	
  }

  /** LOGS **/

  // console.log("X: " + x);

  // console.log("element x: " + this.el.object3D.position.x);
  // console.log("element z: " + this.el.object3D.position.z);

  
});



	// degrees equal radians * 180 / pi
	// 1 degree = 0.0174
	// 90 = 1.570
	
