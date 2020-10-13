var wins = [];
var arr1 = [];
var arr2 = [];
var b = 0;
var c = 5;
for (var i = 0; i < 5; i++) {
  arr1 = [];
  arr2 = [];
  for (var j = 0; j < 5; j++) {
    arr1.push(j + b);
    arr2.push(j * 5 + i);
  }
  b += 5;
  wins.push(arr1);
  wins.push(arr2);
}

var arr3 = [0, 6, 12, 18, 24];
var arr4 = [4, 8, 12, 16, 20];
wins.push(arr3);
wins.push(arr4);

var board = document.getElementById("board");
var whoseturn = 2;

document.getElementById("button").addEventListener("click", function () {
  gen();
});

function gen() {
  var mul = 0;
  for (var i = 0; i < 5; i++) {
    let row = board.insertRow(i);
    for (var j = 0; j < 5; j++) {
      //console.log(i);
      var cell = row.insertCell(j);
      cell.id = j + mul;
      cell.innerHTML = "-";
      cell.addEventListener("click", turnClick, false);
    }
    mul += 5;
  }
}

//const cells = document.querySelectorAll(".cell");

function turnClick(square) {
  if (whoseturn % 2 === 0) {
    turn(square.target.id, "X");
  } else {
    turn(square.target.id, "O");
  }
  whoseturn += 1;
}

var moi = 0;
function turn(squareid, xo) {
  document.getElementById(squareid).innerText = xo;
  checkwin(board, xo);
  moi += 1;
}

function checkwin() {
  var checkarrx = [];
  var counter = 0;
  var checkarro = [];
  for (let index of wins) {
    
    for (let item of index) {
      var xo = document.getElementById(item).textContent;
      
      if (xo === "X") {
        
        checkarrx.push(1);
      } else if (xo === "O") {
        
        checkarro.push(1);
      }
    }
    if (checkarrx.length === 5) {
      gameover("player 1");
      break;
    } else if (checkarro.length === 5) {
      gameover("player 2");
      break;
    }
    checkarrx = [];
    checkarro = [];
  }
}

function gameover(winner) {
  alert("Winner is " + winner + "!");
  for (var i = 0; i < 25; i++) {
    var cell = document.getElementById(i);
    cell.remove();
  }
}
