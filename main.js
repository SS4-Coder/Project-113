function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tintColor="";
}
function draw(){
image(video,0,0,640,480);
circle(50, 20, 20);
ellipse(100, 100, 55, 55);
rect(30, 20, 55, 55);
tint(tintColor);
}
function take_snapshot(){
save("tinted_img.png")
}