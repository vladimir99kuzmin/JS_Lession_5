let cellType = {
    num: "num",
    black: "black",
    grey: "grey"
}
let board = document.getElementById("board");
let n = cellType.num,
    b = cellType.black,
    g = cellType.grey,
    p = cellType.player;
let map =
    [
        [n, n, n, n, n, n, n, n, n, n],
        [n, g, b, g, b, g, b, g, b, n],
        [n, b, g, b, g, b, g, b, g, n],
        [n, g, b, g, b, g, b, g, b, n],
        [n, b, g, b, g, b, g, b, g, n],
        [n, g, b, g, b, g, b, g, b, n],
        [n, b, g, b, g, b, g, b, g, n],
        [n, g, b, g, b, g, b, g, b, n],
        [n, b, g, b, g, b, g, b, g, n],
        [n, n, n, n, n, n, n, n, n, n]
    ];
//Этот MAP можно получить при помощи цикла с XOR'ом влегкую, очевидно, но я наглядно хочу показать, что могу ее изменить в любом месте в любой момент (это может сгодиться для каких-нить других игрушек)

function drawCell(type, posY, posX, inner = " ") {
    board.innerHTML += "<div class=\"cell " + type + "\" style = \"top: " + (40 * posY) + "px; left: " + (40 * posX) + "px;\">" + inner + "</div>";
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        switch (map[i][j]) {
            case n:
                let val = " ";
                if (i == 0 && j != 0 && j != 9) {
                    val = String.fromCharCode(48+j);
                }
                if (j == 0 && i != 0 && i != 9) {
                    val = String.fromCharCode(64+i);
                }
                drawCell(n, i, j, val);
                break;
            case g:
                drawCell(g, i, j);
                break;
            case b:
                drawCell(b, i, j);
                break;
        }
    }
}
