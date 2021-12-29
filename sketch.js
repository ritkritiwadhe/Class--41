var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cars, car1, car2, car3, car4;
var track, car1_Img, car2_Img, car3_Img, car4_Img;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function preload(){
  track = loadImage("images/track.png")
  car1_Img = loadImage("images/car1.png")
  car2_Img = loadImage("images/car2.png")
  car3_Img = loadImage("images/car3.png")
  car4_Img = loadImage("images/car4.png")
  ground = loadImage("images/ground.png")
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2){
    game.end()
  }
}
