function shiftCol(col, v) {
    for (let x = 0; x <= rowCount -1; x++) {
        
        let el = $('[data-col="' + col + '"][data-row="' + x + '"]');
        let newEl = $('[data-col="' + col + '"][data-row="' + (x + v) + '"]');
        newEl.data("color",el.data("color"));
        newEl.data("value",el.data("value"));
        newEl.html(el.html());
    }
}

$(document).ready(function(e){
    let keys = {};
    let selRow = 0;
    let selCol = 0;

    //set initial highlits

    $('[data-row="0"]').addClass('hl');
    $('[data-col="0"]').addClass('hl');

    $(document).keydown(function(event){
        keys[event.which] = true;
    }).keyup(function(event){
        delete keys[event.which];
    });

    function gameLoop() {
        // w for north
        if (keys[87]) {
            shiftCol(selCol, -1);
        }
        //press s for south
        if (keys[83]) {
            shiftCol(selCol, 1);
        }

        //up arrow
        if (keys[38]) {
            $('[data-row="' + selRow + '"]').removeClass('hl');
            $('[data-col="' + selCol + '"]').addClass('hl');
            if (selRow === 0) {
                selRow = rowCount - 1;
            } else {
                selRow--;
            }
            $('[data-row="' + selRow + '"]').addClass('hl');
        }

        //down arrow
        if (keys[40]) {
            $('[data-row="' + selRow + '"]').removeClass('hl');
            $('[data-col="' + selCol + '"]').addClass('hl');
            if (selRow === rowCount - 1) {
                selRow = 0;
            } else {
                selRow++;
            }
            $('[data-row="' + selRow + '"]').addClass('hl');
        }

        //left arrow
        if (keys[37]) {
            $('[data-col="' + selCol + '"]').removeClass('hl');
            $('[data-row="' + selRow + '"]').addClass('hl');
            if (selCol === 0) {
                selCol = colCount - 1;
            } else {
                selCol--;
            }
            $('[data-col="' + selCol + '"]').addClass('hl');
        }

        //right arrow
        if (keys[39]) {
            $('[data-col="' + selCol + '"]').removeClass('hl');
            $('[data-row="' + selRow + '"]').addClass('hl');
            if (selCol === colCount - 1) {
                selCol = 0;
            } else {
                selCol++;
            }
            $('[data-col="' + selCol + '"]').addClass('hl');
        }
        // code to move objects and repaint canvas goes here

        setTimeout(gameLoop, 100);
    }
    gameLoop();
});

/*

$(document).on('mouseenter','.piece', function() {
   let thisX = $(this).data('x');
   let thisY = $(this).data('y');
   $('[data-row="' + thisX + '"]').addClass('hl');
   $('[data-col="' + thisY + '"]').addClass('hl');
   if (isValidTarget(thisX,thisY)) {
       $(this).addClass('targeted')
   }

}).on('mouseleave','.piece', function() {
    $('.piece').removeClass('hl').removeClass('targeted');
}).on('click','.piece', function() {
    let thisX = $(this).data('x');
    let thisY = $(this).data('y');
    console.log("selected.x: " + selected.x + ", selected.y: " + selected.y);
    if (selected.x >= 0) { //if there is a selected piece
        if (selected.x === thisX && selected.y === thisY) { //if the clicked piece is already selected deselect it
            $(this).removeClass('selected');
            selected.x = -1;
            selected.y = -1;
        } else { //if the selected piece is not the one that was clicked
            //do target code
        }
    } else {
        $(this).addClass('selected');
        selected.x = thisX;
        selected.y = thisY;
    }
});*/
