const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImage;
var StartGame;
var test;

function preload(){
    backgroundImage = loadImage("images/background story img.jpg");
    testImage = loadAnimation("images/Man Running/1.png","images/Man Running/2.png","images/Man Running/3.png","images/Man Running/4.png","images/Man Running/5.png","images/Man Running/6.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    StartGame = createButton('Start Game');
    StartGame.position(550,350);
    test = createSprite(-130,300,50,50);
    test.addAnimation("running",testImage);
}

function draw(){
    background(backgroundImage);
    textSize(60);
    fill("blue")
    text("THE HERO",425,150);
    textSize(20);
    fill("White");
    text ("First a person will be walking he stops to have a cup of tea While drinking tea he sees a baby crawling from ",107,230);
    text ("highest floor then  He identified that she/he was in danger so he soon reacts and uses Physics to save the baby while falling.",50,280);
    StartGame.mousePressed(ManMoving);
    Engine.update(engine);
    drawSprites();
}

function ManMoving(){
    test.velocityX = 10;
}