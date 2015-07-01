

var iso = new Isomer(document.getElementById("art"));
var canvas = document.getElementById('art');
var context = canvas.getContext('2d');

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;
var blue = new Color(50, 60, 160);
var x = 1;
var y = 1;
var z = 0;
var delta = .3;


		var dir = 0;
var tick = function(){ 
		// console.log('x: '+x +' y: '+y);
		switch(dir)
		{
			 case 0:
            // left key pressed
            x-=delta;
            break;
        case 1:
            y+=delta;// up key pressed
            break;
        case 2:
            x+=delta;// right key pressed
            break;
        case 3:
            y-=delta;// down key pressed
            break;  

		}
		if( (x>6) || (x<0)	|| (y<0) || (y > 6)){
				dir++;
				dir = dir%4;

			}
		
        iso.add(Shape.Pyramid(new Point(x,y,z)),new Color(160*Math.random(), 60*Math.random(), 50*Math.random()));
      }

window.setInterval(tick,0 );

// iso.add([
//   Shape.Pyramid(new Point(0, 0, 1),2),
//   Shape.Pyramid(new Point(0, 2, 1)),
//   Shape.Pyramid(new Point(2, 0, 1)),
//   Shape.Prism(new Point(2, 2, 1),1,1,1),
//   Shape.Pyramid(new Point(2, 2, 2)),

// ]);

// var state = 0;
// var start = null;
// var element = document.getElementById("SomeElementYouWantToAnimate");

// function step(timestamp) {
//   if (!start) start = timestamp;
//   var progress = timestamp - start;
//   // element.style.left = Math.min(progress/10, 200) + "px";
//   iso.add(Shape.Pyramid(Point(state, 2, 1)));
//   if (progress < 2000) {
//     state++;
//     window.requestAnimationFrame(step);
//   }
// }

// window.requestAnimationFrame(step);