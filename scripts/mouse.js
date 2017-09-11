
$(document).on('mouseenter','.piece', function() {
   let thisX = $(this).data('x');
   let thisY = $(this).data('y');
   $('[data-x="' + thisX + '"]').addClass('hl');
   $('[data-y="' + thisY + '"]').addClass('hl');
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
});