var apple = [];
var value = 0;



function preload(){
    tree = loadImage('./assets/Apple-Tree.png');
    basket = loadImage('./assets/basket.png');
    //appleimage = loadImage('./assets/apple.png');
    //mele = loadImage('./assets/mele.png')
}
function setup() {
	createCanvas(windowWidth, windowHeight);   
}


function draw() {
	background(200);
    value += -1;
	image(tree,0,0,windowWidth, windowWidth);
    fill(103,154,49);
    rect(0,windowWidth,windowWidth,windowHeight);

	if (value > 2) {
		var newAppleFalling = {
			x: random(0,windowWidth),
			y: random(windowHeight/2-windowHeight/10,windowHeight/2),
			s: 70,
			
		};
		apple.push(newAppleFalling);
	} 

	for (i = 0; i < apple.length; i++) {
		var fruit = apple[i];
		applefalling(fruit.x, fruit.y, fruit.s);
		fruit.y += random(40, 50);
        
	}

    fill(255);
    textSize(25);
    textAlign(CENTER);
    textFont('Indie Flower');
    text('shake the tree and move around the basket to get the apples',windowWidth/4,windowHeight/7*5,windowWidth/2,windowHeight/5);
    image(basket,map(rotationY,-90,90,1,windowWidth),windowHeight/6*5,windowWidth/4,windowHeight/5);

   
}

function applefalling(x, y, s) {
	noStroke();
    //image(appleimage,xpos, ypos, size, size);
	
    fill(255,40,0);
    
	ellipse(x, y, s, s);
    fill(166,200,64);
    
    arc(x-5, y-30, 70, 50, PI, PI+QUARTER_PI);
    fill(181,82,57);
    rect(x-5,y-60,10,30);
    
    
    
}



function deviceShaken() {
    value = 0;
    value+=5;
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}