var x = 4;
var y = 0;

let queen = {
    direction: 'south',
    position: [x, y]
}

var change;
queen.direction = change;
change = "north"

function changedirection(direction) {
    switch (direction) {
        case "north":
            document.write("north");
            break;
        case "south":
            document.write("south");
            break;
        default:
            document.write("nothing");
    }
}