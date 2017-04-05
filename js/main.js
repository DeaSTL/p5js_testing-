function setup(){
	createCanvas(windowWidth,windowHeight,WEBGL);
	
    
}


function draw(){
	rect(200);
	rotateZ(frameCount);
    
    
    
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}
