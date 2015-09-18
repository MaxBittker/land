var iso = new Isomer(document.getElementById("art"));
var canvas = document.getElementById('art');
var context = canvas.getContext('2d');

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;
var blue = new Color(50, 60, 160);
var x = 6;
var y = 6;
var z = 0;
var delta = 1;

var dir = 0;
var c = 0;


window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();


(function animloop() {
    requestAnimFrame(animloop);
    render(0);
})();

function render(n) {
    if (n===30)
    {
    	x = 3+ Math.random()*3
    	y = 3+ Math.random()*3
    }
    if (oob())
        dir = (dir + 1) % 4;

    switch (dir) {
        case 0:
            x += delta;
            // y += delta/30;
            // y += delta;
            break;
        case 1:
            // x -= delta;
            // x -= delta/30;
            y += delta;
            break;
        case 2:
            x -= delta;
            // y -= delta;
            // y -= delta/30;
            break;
        case 3:
            // x += delta;
            x += delta/30;
            y -= delta;
            break;
        default:
            alert("badcase")
    }
    if(oob())
    	render(n+1)


    draw();
}

function oob() {
    // if (Math.sqrt((x * x) + (y * y)) > 9)
    if ((Math.abs(x-4)+Math.abs(y-3))>8.7)
        return true
    else
        return false
}

function draw() {
    // iso.add(Shape.Prism(new Point(x,y,z-2), 3, 3, 1.5));
    // iso.add(Shape.Pyramid(new Point(x, y, z)), new Color(11 , 130 , 50 * Math.random()));
    // iso.add(Shape.Pyramid(new Point(x, y, z)), new Color(160 * Math.random(), 60 * Math.random(), 50 * Math.random()));
     iso.add(Shape.Prism(new Point(x, y, z)), new Color(160 * Math.random(), 60 * Math.random(), 50 * Math.random()));

}

window.addEventListener("keydown", function(evt) {
    // console.log(x,y,evt.keyCode);
    switch (evt.keyCode) {
        case 37:
            // left key pressed
            x -= delta;
            break;
        case 38:
            y += delta; // up key pressed
            break;
        case 39:
            x += delta; // right key pressed
            break;
        case 40:
            y -= delta; // down key pressed
            break;

    }
    // iso.add(Shape.Prism(Point.ORIGIN, 7, 7, 1))
    // for(var n = 0; n<coins.length;n++){
    // iso.add(Shape.Prism(new Point(coins[n][0]+.3,coins[n][1]+.3,0),.4,.4,.4),new Color(160,90,50));

    // }
    render();
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
