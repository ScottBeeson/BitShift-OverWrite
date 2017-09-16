function randColor() {
    let min = Math.ceil(0);
    let max = colors.length;
    return colors[Math.floor(Math.random() * (max - min)) + min]; //The maximum is exclusive and the minimum is inclusive
}

function isValidTarget(row,col) {
    let nearX = Math.abs(selected.row - row) <= 1;
    let nearY = Math.abs(selected.col - col) <= 1;
    let notSame = selected.row !== row || selected.col !== col;
    return nearX && nearY && notSame;
}

function populateBoard() {
    board = [];
    $('#gameBoard').html('');
    for (let row = 0; row < rowCount; row++) {
        board[row] = [];
        for (let col = 0; col < colCount; col++) {
            let p = new piece('b',randColor());
            board[row][col] = p;
            let elPiece = $("<span>", {
                id: "p" + row + "." + col,
                "class": p.color + ' piece',
                "data-col": col,
                "data-row": row,
                "data-color": p.color,
                "data-value": p.value,
                text: p.value
            });
            elBoard.append(elPiece)
        }
    }
}


function checkMatches() {
    let matchCount = 0;
    let currentPiece = {row:-1,col:-1,value: '', color: ''};
    let currentEl;
    $('.piece').each(function(i) {
        let self = this;
        currentEl = $(self);
        currentEl.addClass('current');
        currentPiece.row = currentEl.data('row');
        currentPiece.col = currentEl.data('col');



        currentEl.removeClass('current');
    });
    return matchCount;
}

function checkMatches2() {
    let seqCount = 0;
    let matchCount = 0;
    let matches = [];
    let lastColor = '';
    let isFirstCell = true;
/*    for (let row = 0; row < rowCount; row++) {
        seqCount = 0;
        matches = [];*/
        let row = 0;
        for (let col = 0; col < colCount; col++) {
            let el = $('[data-row="' + row + '"][data-col="' + col + '"]');
            el.addClass('checking');
            seqCount++;
            matches.push(el);
            let matchesLast = board[row][col].color === lastColor;
            if (!matchesLast && !isFirstCell) {
                matches = matches.slice(0, -1);     // I know these two
                seqCount--;                         // lines are fucky.
                if (seqCount >= 4) {
                    console.log("Found a match!");
                    $.each(matches, function(i) {
                        matches[i].addClass('matched')
                    })
                }
                seqCount = 0;
                matches = [];
            } else {
            }
            lastColor = board[row][col].color;
            console.log("Checking " + row + "," + col + ": " + board[row][col].color + ".  Sequence Count: " + seqCount);
            el.removeClass('checking');
            isFirstCell = false;
        }
/*    }*/
    return matchCount;
}