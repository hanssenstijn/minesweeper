
function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
}

function Cell() {
  this.bee = true;
  this.revealed = true;
}

var grid;
var cols = 20;
var rows = 20;

function setup() {
  createCanvas(200, 200);
  grid = make2DArray(cols, rows);


}

function draw() {

}