let type = {
    num: 1,
    black: 2,
    gray: 3
}
let board = document.getElementById("board");
for (let i = 0; i <= 9; i++) {
	for (let j = 0; j <=9; j++) {
        if ((i === 0 || j === 0) || (i === 9 || j === 9)) {            
            addCell(type.num);
        }
        else if(isOdd(i) ^ isOdd(j)) {
            addCell(type.black);
        }
        else {
            addCell(type.gray);
        }
  }
}
let numCells = document.getElementsByClassName("num");
for (let i = 0; i <= 0; i++) {
    if (i === 0 || i === 9) {
        
    }
}
function addCell(cellType) {
switch (cellType) {
    case 1:
        board.innerHTML += "<div class=\"cell num\"> </div>"
        break;
    case 2:
        board.innerHTML += "<div class=\"cell black\"> </div>"
        break;
    case 3:
        board.innerHTML += "<div class=\"cell gray\"> </div>"
        break;
    default:
        break;
}
}
function isOdd(number) {
    return number%2 === 0;
}
