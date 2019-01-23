var weather;
var tempF;
var tempC;
var lon;
var lat;

var cloud1 = 0;
var cloud2 = 0;
var cloud3 = 0;
var cloud4 = 0;
var cloud5 = 0;
var api ='http://openweathermap.org/data/2.5/find?q=';



var apiKey = '&appid=b6907d289e10d714a6e88b30761fae22'

var units = '&units=imperial';

var input;

function setup() {
 createCanvas(windowWidth,windowHeight);
    
    
    var button = select('#submit');
    button.mousePressed(weatherQuery);
    
    input = select('#city')
        
    }
    
function weatherQuery(){
    var url = api + input.value() +apiKey;
    loadJSON(url,gotData);
}

function gotData(data){
        print(data);
        console.log(data);
        weather = data;
    }
    
function clouds() {
	 noStroke()
  fill(245,250,250,200);
  ellipse(100,200,200,80);
	ellipse(120,210,150,90);
}

function draw() {
 
    if (weather){
        
        
       background(181,210,221,weather.list[0].main.humidity); 
        
        
        
    /*for (var d = 0; d <= width; d += 30) {
    for (var e = 0; e <= height; e += 30){
      //fill(random(255), random(255), random(255));
      ellipse(d, e, 5, 5);
    }
  }*/
    
	
	push();
	translate(cloud1,100);
	scale(.5);
	clouds();
	pop();
	
	push();
	translate(cloud2,-100);
	scale(.9);
	clouds();
	pop();
	
	push();
	translate(cloud3,-60);
	scale(1.5);
	clouds();
	pop();
        
        
    push();
	translate(cloud4,-160);
    scale(1.9); 
	clouds();
	pop();   
    
    
    push();
	translate(cloud5,-200);
	scale(2.5); 
	clouds();
	pop();    
        
        
        
	
if (cloud1 > width) {
	cloud1= -50
}
	if (cloud2 > width) {
	cloud2= -50
}
	if (cloud3 > width) {
	cloud3= -50
}
    if (cloud4 > width) {
	cloud4= -50
}
     if (cloud5 > width) {
	cloud5= -50
}
        
        //wind speed
  cloud1 += 1.0 * weather.list[0].wind.speed;
  cloud2 += .9 * weather.list[0].wind.speed;
  cloud3 += .8 * weather.list[0].wind.speed;  
  cloud4 += .7 * weather.list[0].wind.speed;       
  cloud5 += 1.4 * weather.list[0].wind.speed;     
     
        //longitude in form of mountains
        //middle 
noStroke()
fill(153,153,153);
triangle(2, windowHeight, windowWidth/2, (windowHeight/2)-(weather.list[0].coord.lat*4), windowWidth, windowHeight);  
        
        
     //left
triangle(2, windowHeight, windowWidth/8, (windowHeight/1.25)-(weather.list[0].coord.lat*4), windowWidth/4, windowHeight);   
        
        
      //right  
        
      triangle(windowWidth/1.5,windowHeight,windowWidth/1.20,(windowHeight/1.25)-(weather.list[0].coord.lat*4),windowWidth-2,windowHeight);   
                
        tempF =((9/5)*(weather.list[0].main.temp-273)+32);
        fill(244,155+tempF,55)
        ellipse(120,150, tempF*3, tempF*3);
        
    }
    
    
}