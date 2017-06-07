var data;
var len;
//holds the category of media
var cat = [];
//leftwing = 1;
//rightwing = 2;
//mainstream = 3;
var rating = [];
//Truth scale below...
// no factual content = 1
//mostly true = 2
//mixture of true and false = 3
//mostly false = 4
var particle = [];

function preload() {
data = loadJSON("data/fb.JSON");
}

function setup() {
createCanvas(windowWidth, windowHeight);
len = Object.keys(data).length;
decideCat();
decideRate();
for (var i = 0; i < len; i++){
  particle[i] = new Particle(width/2, height/2, rating[i], rating[i], cat[i]);
 }
}

function draw(){
  colorMode(HSB);
background(0, 0, 0);
  for (var i = 0; i < len; i++){
      particle[i].show();
      particle[i].moveVector();
    }
  }


function decideRate(){
  for (var i = 0; i < len; i++){
    //console.log(data[i]);
  if(data[i].Rating == "no factual content"){
    rating[i] = 1;
  }else if (data[i].Rating == "mostly true"){
    rating[i] = 2;
  }else if(data[i].Rating == "mixture of true and false"){
    rating[i] = 3;
  }else{
    rating[i] = 4;
  }
 }
}




function decideCat(){
  for (var i = 0; i < len; i++){
    //console.log(data[i]);
  if(data[i].Category == "left"){
    cat[i] = 1;
  }else if (data[i].Category == "right"){
    cat[i] = 2;
  }else if(data[i].Category == "mainstream"){
    cat[i] = 3;
   }
  }
}
