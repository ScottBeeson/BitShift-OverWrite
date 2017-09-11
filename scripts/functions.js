function randColor() {
    let min = Math.ceil(0);
    let max = colors.length;
    return colors[Math.floor(Math.random() * (max - min)) + min]; //The maximum is exclusive and the minimum is inclusive
}

function isValidTarget(x,y) {
    let nearX = Math.abs(selected.x - x) <= 1;
    let nearY = Math.abs(selected.y - y) <= 1;
    let notSame = selected.x !== x || selected.y !== y;
    return nearX && nearY && notSame;
}

function populateBoard() {
    for (let x = 0; x < rowCount; x++) {
        board[x] = [];
        for (let y = 0; y < colCount; y++) {
            let p = new piece('b',randColor());
            board[x][y] = p;
            let elPiece = $("<span>", {
                id: "p" + x + "." + y,
                "class": p.color + ' piece',
                "data-x": x,
                "data-y": y,
                text: "b"
            });
            elBoard.append(elPiece)
        }
    }
}

function checkMatches() {
    let seqCount = 0;
    let matchCount = 0;
    let matches = [];
    let lastColor = '';
    for (let x = 0; x < rowCount; x++) {
        seqCount = 0;
        matches = [];
        for (let y = 0; y < colCount; y++) {
            let el = $('[data-x="' + x + '"][data-y="' + y + '"]');
            el.addClass('checking');
            if (board[x][y].color === lastColor) {
                seqCount++;
                matches.push(el);
            } else {
                if (seqCount >= 4) {
                    console.log("Found a match!");
                    matchCount++;
                    $.each(matches, function(i) {
                        matches[i].addClass('matched')
                    })
                }
                seqCount = 0;
                matches = [];
            }
            lastColor = board[x][y].color;
            console.log("Checking " + x + "," + y + ": " + board[x][y].color + ".  Sequence Count: " + seqCount);
            el.removeClass('checking');
        }
    }
    return matchCount;
}