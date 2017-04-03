var positions = [];

var rows = 10;
var col = 10;

var offset = 10;
function setup(){
    
    width = windowWidth-17
    height = windowHeight-17
	createCanvas(width,height);
    frameRate(10);
    for(var x = 0;x<rows;x++){
        for(var y = 0;y<col;y++){
            var p = createVector(x*offset,y*offset);            
            positions.push(p)
        }
    }
    
}
var pos = 0;
function draw(){
    
    clear();
    for(var i = 0;i<positions.length;i++){
        var x_pos = positions[i].x;
        var y_pos = positions[i].y;
        var value = 500*Math.sin(frameCount);
        ellipse(x_pos*value,y_pos*value,x_pos,y_pos);
        }
    
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}
