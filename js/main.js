"use strict";

//VARIABLES////////////

let level1 = [
  ["#", 0, 0, 0, 0, 0, 0, "A"]
];
let level2 = [
  ["#", 0, 0, 0, 0, 0, 0, 0][(0, 0, 0, 0, 0, 0, 0, 0)][
    (0, 0, 0, 0, 0, 0, 0, "A")
  ]
];
let game = {};

game.level = level1;

game.posX = 0;
game.posY = 0;
game.posOldX;
game.posOldY;

//CONSTANTE //////////

const left = 37;
const up = 38;
const right = 39;
const down = 40;

//FUNCTION ///////////

function moveLeft() {}

function moveTop() {

}

function moveRight() {
  game.level[game.posX] = 0;
  game.level[game.posX] = game.posX++;
  level1[game.posOldX] = 0;
  console.log(game.posX);
  console.log(game.level);
}
moveRight();
/*
function moveDown() {

}

function remove() {

}
*/
function keyboard(keydown) {
  if (keydown.keyCode == right) {
    moveRight();
  } else if (keydown.keyCode == left) {
    moveLeft();
  } else if (keydown.keyCode == up) {
    moveTop();
  } else if (keydown.keyCode == down) {
    moveDown();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", keyboard);
});
