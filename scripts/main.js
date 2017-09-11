
const colCount = 10;
const rowCount = 10;

const elBoard = $('#gameBoard');

let board = [];
let selected = {
    x: -1,
    y: -1
};

const colors = ["cyan","magenta","red"];
const values = ["b","n","B"];

class piece {
    constructor(value, color) {
        this.value = value;
        this.color = color;
    }
}

populateBoard();

$(function() {
    checkMatches();
});