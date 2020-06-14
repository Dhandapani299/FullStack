var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

var queen = {
    position: {
        x: 0,
        y: 0,
    },
};



function moveforward(num, dir) {
    var b = document.getElementById("move").value;

    let temp;
    let temp1;
    switch (dir) {
        case "N":
            if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.x - num;
                if (temp > 7 || temp < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                }
            } else if (b == "BACKWARD") {
                document.write(b);
                temp = queen.position.x + num;
                if (temp > 7 || temp < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                }
            }
            break;
        case "S":
            if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.x + num;
                if (temp > 7 || temp < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                }
            } else if (b == "BACKWARD") {
                document.write(b);
                temp = queen.position.x - num;
                if (temp > 7 || temp < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                }
            }
            break;
        case "E":
            if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.y + num;
                if (temp > 7 || temp < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.y = temp;
                }
            } else if (b == "BACKWARD") {
                document.write(b);
                temp = queen.position.y + num;
                if (temp > 7 || temp < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.y = temp;
                }
            }
            break;
        case "W":
            if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.y - num;

                if (temp > 7 || temp < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.y = temp;
                }
            } else if (b == "BACKWARD") {
                document.write(b);
                temp = queen.position.y - num;

                if (temp > 7 || temp < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.y = temp;
                }
            }
            break;
        case "NE":
            if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.x - num;
                temp1 = queen.position.y + num;

                if (temp > 7 || (temp < 0 && temp1 > 7) || temp1 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                    queen.position.y = temp1;
                }
            } else if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.x - num;
                temp1 = queen.position.y + num;

                if (temp > 7 || (temp < 0 && temp1 > 7) || temp1 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                    queen.position.y = temp1;
                }
            }

            break;
        case "NW":
            if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.x - num;
                temp1 = queen.position.y - num;

                if (temp > 7 || (temp < 0 && temp1 > 7) || temp1 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                    queen.position.y = temp1;
                }
            } else if (b == "BACKWARD") {
                document.write(b);
                temp = queen.position.x - num;
                temp1 = queen.position.y - num;

                if (temp > 7 || (temp < 0 && temp1 > 7) || temp1 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                    queen.position.y = temp1;
                }
            }
            break;
        case "SE":
            if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.x + num;
                temp1 = queen.position.y + num;

                if (temp > 7 || (temp < 0 && temp1 > 7) || temp1 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                    queen.position.y = temp1;
                }
            } else if (b == "BACKWARD") {
                document.write(b);
                temp = queen.position.x + num;
                temp1 = queen.position.y + num;

                if (temp > 7 || (temp < 0 && temp1 > 7) || temp1 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                    queen.position.y = temp1;
                }
            }
            break;
        case "SW":
            if (b == "FORWARD") {
                document.write(b);
                temp = queen.position.x + num;
                temp1 = queen.position.y - num;

                if (temp > 7 || (temp < 0 && temp1 > 7) || temp1 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                    queen.position.y = temp1;
                }
            } else if (b == "BACKWARD") {
                document.write(b);
                temp = queen.position.x + num;
                temp1 = queen.position.y - num;

                if (temp > 7 || (temp < 0 && temp1 > 7) || temp1 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen.position.x = temp;
                    queen.position.y = temp1;
                }
            }
            break;

        default:
            console.log("invalid");
    }
}


function jump1() {
    var a = document.getElementById("queen1").value;
    var value = a.split(" ");
    value.forEach((element) => {
        let num = Number(element.slice(element.length - 1));
        let dir = element.slice(0, element.length - 1);
        moveforward(num, dir);
    });
    console.log("your position" + board[queen.position.x][queen.position.y]);
    document.write("\n");
    document.write("\n");
    document.write(" YOUR POSITION " + board[queen.position.x][queen.position.y]);
    document.write(" YOUR POSITION " + board[queensecond.position.x][queensecond.position.y]);
}

var queen2 = {
    position: {
        x: 7,
        y: 7,
    },
};


function move2(num1, dir1) {
    var d = document.getElementById("move1").value;

    let temp2;
    let temp3;
    switch (dir1) {
        case "N":
            if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.x - num1;
                if (temp2 > 7 || temp2 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                }
            } else if (d == "BACKWARD") {
                document.write(d);
                temp2 = queen2.position.x + num1;
                if (temp2 > 7 || temp2 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                }
            }
            break;
        case "S":
            if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.x + num1;
                if (temp2 > 7 || temp2 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                }
            } else if (d == "BACKWARD") {
                document.write(d);
                temp2 = queen2.position.x - num1;
                if (temp2 > 7 || temp2 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                }
            }
            break;
        case "E":
            if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.y + num1;

                if (temp2 > 7 || temp2 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.y = temp2;
                }
            } else if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.y + num1;

                if (temp2 > 7 || temp2 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.y = temp2;
                }
            }
            break;
        case "W":
            if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.y - num1;

                if (temp2 > 7 || temp2 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.y = temp2;
                }
            } else if (d == "BACKWARD") {
                document.write(d);
                temp2 = queen2.position.y - num1;

                if (temp2 > 7 || temp2 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.y = temp2;
                }
            }

            break;

        case "NE":
            if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.x - num1;
                temp3 = queen2.position.y + num1;

                if (temp2 > 7 || (temp2 < 0 && temp3 > 7) || temp3 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                    queen2.position.y = temp3;
                }
            } else if (d == "BACKWARD") {
                document.write(d);
                temp2 = queen2.position.x - num1;
                temp3 = queen2.position.y + num1;

                if (temp2 > 7 || (temp2 < 0 && temp3 > 7) || temp3 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                    queen2.position.y = temp3;
                }
            }
            break;
        case "NW":
            if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.x - num1;
                temp3 = queen2.position.y - num1;

                if (temp2 > 7 || (temp2 < 0 && temp3 > 7) || temp3 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                    queen2.position.y = temp3;
                }
            } else if (d == "BACKWARD") {
                document.write(d);
                temp2 = queen2.position.x - num1;
                temp3 = queen2.position.y - num1;

                if (temp2 > 7 || (temp2 < 0 && temp3 > 7) || temp3 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                    queen2.position.y = temp3;
                }
            }
            break;
        case "SE":
            if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.x + num1;
                temp3 = queen2.position.y + num1;

                if (temp2 > 7 || (temp2 < 0 && temp3 > 7) || temp3 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                    queen2.position.y = temp3;
                }
            } else if (d == "BACKWARD") {
                document.write(d);
                temp2 = queen2.position.x + num1;
                temp3 = queen2.position.y + num1;

                if (temp2 > 7 || (temp2 < 0 && temp3 > 7) || temp3 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                    queen2.position.y = temp3;
                }
            }

            break;
        case "SW":
            if (d == "FORWARD") {
                document.write(d);
                temp2 = queen2.position.x + num1;
                temp3 = queen2.position.y - num1;

                if (temp2 > 7 || (temp2 < 0 && temp3 > 7) || temp3 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                    queen2.position.y = temp3;
                }
            } else if (d == "BACKWARD") {
                document.write(d);
                temp2 = queen2.position.x + num1;
                temp3 = queen2.position.y - num1;

                if (temp2 > 7 || (temp2 < 0 && temp3 > 7) || temp3 < 0) {
                    console.log("Outside Boundary");
                    document.write("Outside Boundary");
                } else {
                    queen2.position.x = temp2;
                    queen2.position.y = temp3;
                }
            }
            break;

        default:
            console.log("Invalid");
    }
}

function jump2() {
    var c = document.getElementById("queen2").value;
    var value1 = c.split(" ");
    value1.forEach((element) => {
        let num1 = Number(element.slice(element.length - 1));
        let dir1 = element.slice(0, element.length - 1);
        move2(num1, dir1);
    });
    console.log("your position" + board[queen2.position.x][queen2.position.y]);
    document.write("\n");
    document.write("\n");
    document.write(" YOUR POSITION " + board[queen2.position.x][queen2.position.y]);
}
