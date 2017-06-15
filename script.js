var ctx = document.getElementById('ctx').getContext('2d');
    var x = 0; /*position x*/
    var xSpd; /*adding to x*/
    var y = 0; /*position y*/
    var ySpd; /*adding to y*/
    var canvas = document.getElementById('ctx');

    var xSpd = 10;
    var ySpd = 10;

    /*making the first rectangle when you load the page*/
    function onload() {
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, 10, 10);
    }
    
    /*updating the position when you press an arrow*/
    function update(event) {
        var key = event.keyCode; /*getting keyCode of pressed key*/
        ctx.fillStyle = "blue"; /*color of rectangle*/

        if (key == 39) { //RIGHT
            ctx.clearRect(0, 0, canvas.width, canvas.height); /*clearing previous rectangles*/
            var xSpd = 10;
            var ySpd = 0;
            if (x == 490 || x > 490) { /*testing, if the rectangle is on the end of the canvas*/
                var xSpd = 0;
            } else {
                var xSpd = 10;
            }
            x = x + xSpd; /*changing x to change position*/
            y = y + ySpd; /*changing y to change position*/
            ctx.fillRect(x, y, 10, 10); /*making new rectangle with new position*/
        } else if (key == 37) { //LEFT
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var xSpd = -10;
            var ySpd = 0;
            if (x == 0 || x < 0) {
                var xSpd = 0;
            } else {
                var xSpd = -10;
            }
            x = x + xSpd;
            y = y + ySpd;
            ctx.fillRect(x, y, 10, 10);
        } else if (key == 38) { //UP
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var xSpd = 0;
            var ySpd = -10;
            if (y == 0 || y < 0) {
                var ySpd = 0;
            } else {
                var ySpd = -10;
            }
            x = x + xSpd;
            y = y + ySpd;
            ctx.fillRect(x, y, 10, 10);
        } else if (key == 40) { //DOWN
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var xSpd = 0;
            var ySpd = -10;
            if (y == 490 || y > 490) {
                var ySpd = 0;
            } else {
                var ySpd = 10;
            }
            x = x + xSpd;
            y = y + ySpd;

            ctx.fillRect(x, y, 10, 10);
        }
        
        /*logging position to console*/
        console.clear();
        console.log('x= ' + x);
        console.log('y= ' + y);
    }