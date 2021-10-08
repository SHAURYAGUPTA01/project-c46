const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var courtImg;
var netImg;

var database;
var game, form;
var playerCount;
var gameState;
var player;
var net;
var shuttle;
var player1Img, player1;
var player2Img, player2;
var players = []
var allPlayers

function preload() {
  courtImg = loadImage("assets/badmintonCourt.png");
  netImg = loadImage("assets/net.png");
  player1Img = loadImage("assets/player.png")
  player2Img = loadImage("assets/player2.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  database = firebase.database()

  net = createSprite(635, 400, 20, 500);
  net.addImage(netImg);
  net.scale = 1.5;

  shuttle = new Shuttle(650, 310, 50);

  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  background(51);
  image(courtImg, 0, 0, width, height);
  Engine.update(engine);

  if (playerCount === 2) {
    game.updateState(1)
  }
  if (gameState === 1) {
    game.play();
  }

  text(mouseX + "," + mouseY, mouseX, mouseY);

  shuttle.display();
}