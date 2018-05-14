
// code for the background image 
	var s = 0;
	var picture = ['1','2','3','4','5'];
	var p = picture.length;

	// The prev < arrow
function prev(){
	var h = document.getElementById("header");
	var b = document.getElementById("banner");
	if(s > 0) {
		s--;
		if(s === 0){
			h.style.backgroundImage = "url('b6h.jpg')";
    		b.style.backgroundImage = "url('b6.jpg')";		
		} else if ( s === 1) {
			h.style.backgroundImage = "url('b12h.jpg')";
    		b.style.backgroundImage = "url('b12.jpg')";	

  		} else if ( s === 2) {
			h.style.backgroundImage = "url('b13h.jpg')";
    		b.style.backgroundImage = "url('b13.jpg')";		
		} else if ( s === 3) {
			h.style.backgroundImage = "url('b14h.jpg')";
    		b.style.backgroundImage = "url('b14.jpg')";		
		} else if ( s === 4) {
			h.style.backgroundImage = "url('b5h.jpg')";
    		b.style.backgroundImage = "url('b5.jpg')";		
		} 
	}

}

      // The next > arrow
function next() {
	var h = document.getElementById("header");
	var b = document.getElementById("banner");
	if(s < p) {
		s++;
		if(s === 1){
			h.style.backgroundImage = "url('b12h.jpg')";
    		b.style.backgroundImage = "url('b12.jpg')";			
		} else if ( s === 2) {
			h.style.backgroundImage = "url('b13h.jpg')";
    		b.style.backgroundImage = "url('b13.jpg')";			
		} else if ( s === 3) {
			h.style.backgroundImage = "url('b14h.jpg')";
    		b.style.backgroundImage = "url('b14.jpg')";		
		} else if ( s === 4) {
			h.style.backgroundImage = "url('b12h.jpg')";
    		b.style.backgroundImage = "url('b12.jpg')";		
		} else if ( s === 5) {
			h.style.backgroundImage = "url('b5h.jpg')";
    		b.style.backgroundImage = "url('b5.jpg')";		
		} 
	}

}

// TO HIDE/SHOW THE CALCULATOR 

function calculator1() {
    var x = document.getElementById('calContainer');


    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// Moving Graph button movement display etc.... 


 function movingGraphHidden(x){
		x.style.display = "none";
}
function movingGraphShow(x){
		x.style.display = "block"
}


function movingGraph() {
	var x = document.getElementById("myCanvas");
	if(x.style.display === 'none') {
			x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}

// END OF Moving Graph button movement display etc....


// START OF MOVING GRAPH CANVAS	

 var canvas = document.getElementById('myCanvas');
 var c = canvas.getContext('2d');

var canvasPos = getPos(canvas);

var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", mousePos, false);

function mousePos(e){
	mouseX = e.clientX - canvasPos.x;
	mouseY = e.clientY - canvasPos.y;
	console.log("x : " + mouseX);
}

function update() {
	c.clearRect(0,0,canvas.width, canvas.height);
	c.beginPath();
	c.arc(mouseX,mouseY,50,0,Math.PI *2 , true);
	c.fillStyle = "red";
	c.fill();

	requestAnimationFrame(update);  // loops 60 frames per second 
}

update();

function getPos(e){
	var xPos = 0;
	var yPos = 0;
	while(e) {
		xPos += (e.offsetLeft - e.scrollLeft + e.clientLeft);
		yPos += (e.offsetTop - e.scrollTop + e.clientTop);

		e = e.offsetParent;
	}
	return {
		x: xPos, y: yPos
	};
}


// tumbnail code 


function openImg(imgName) {
  var i, x;
  x = document.getElementsByClassName("expandedImg");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  document.getElementById(imgName).style.display = "block";
}

