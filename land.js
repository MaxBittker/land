

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

var coins = [];

for(var c = 0; c<6;c++)
{
	coins.push([Math.floor(Math.random()*7)+1,Math.floor(Math.random()*7)+1]);
}
  		// iso.add(Shape.Prism(Point.ORIGIN, 7, 7, 1))
for(var n = 0; n<coins.length;n++){
		// iso.add(Shape.Prism(new Point(coins[n][0]+.3,coins[n][1]+.3,0),.4,.4,.4),new Color(160,90,50));
		}
		
        // iso.add(Shape.Pyramid(new Point(x,y,z)),new Color(160, 60*Math.random(), 50));


	window.addEventListener("keydown", function(evt){        
		// console.log(x,y,evt.keyCode);
		switch(evt.keyCode)
		{
			 case 37:
            // left key pressed
            x-=delta;
            break;
        case 38:
            y+=delta;// up key pressed
            break;
        case 39:
            x+=delta;// right key pressed
            break;
        case 40:
            y-=delta;// down key pressed
            break;  

		}
  		// iso.add(Shape.Prism(Point.ORIGIN, 7, 7, 1))
		// for(var n = 0; n<coins.length;n++){
		// iso.add(Shape.Prism(new Point(coins[n][0]+.3,coins[n][1]+.3,0),.4,.4,.4),new Color(160,90,50));

		// }
        iso.add(Shape.Pyramid(new Point(x,y,z)),new Color(160*Math.random(), 60*Math.random(), 50*Math.random()));
      }, false);


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