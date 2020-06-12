// Checkpoint 1 | Creating the queen object
var x = 4,
        y = 0;
      let queen = {
        direction: "south",
        positionx: x,
        positiony: y,
        whereabout: updateposition(),
      };

// Checkpoint 2 | Turning the queen

 var change = queen.direction;
      change = "north"; //choose the direction s,n,e,w,ne,nw,se,sw

      function changedirection(change) {
        return change;
      }
      switch (change) {
        case "north":
          console.log("Direction");
          console.log(change);
          moveforward(change);
          jumpmoveforward(change, 3); // give me a step count second argument
          break;
        case "south":
          console.log("Direction");
          console.log(change);
          moveforward(change);
          jumpmoveforward(change, 3);
          break;
        case "east":
          console.log("Direction");
          console.log(change);
          moveforward(change);
          jumpmoveforward(change, 3);
          break;
        case "west":
          console.log("Direction");
          console.log(change);
          moveforward(change);
          jumpmoveforward(change, 3);
          break;
        case "northeast":
          console.log("Direction");
          console.log(change);
          moveforward(change);
          jumpmoveforward(change, 3);
          break;
        case "northwest":
          console.log("Direction");
          console.log(change);
          moveforward(change);
          jumpmoveforward(change, 3);
          break;

        case "southeast":
          console.log("Direction");
          console.log(change);
          moveforward(change);
          jumpmoveforward(change, 3);
          break;
        case "southwest":
          console.log("Direction");
          console.log(change);
          moveforward(change);
          jumpmoveforward(change, 3);
          break;
        default:
          console.log("Direction");
          console.log("nothing");
      }

// Checkpoint 3 | Moving the queen

 var positionx = queen.positionx;
      var positiony = queen.positiony;
      function moveforward(change) {
        if (change == "north") {
          positionx = x;
          positiony = y + 1;
          console.log("POSITION");
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
        } else if (change == "south") {
          positionx = x;
          positiony = y + 1;
          console.log("POSITION");
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
        } else if (change == "east") {
          positionx = x + 1;
          positiony = y;
          console.log("POSITION");
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
        } else if (change == "west") {
          positionx = x - 1;
          positiony = y;
          console.log("POSITION");
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
        } else if (change == "northeast") {
          positionx = x + 1;
          positiony = y - 1;
          console.log("POSITION");
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
        } else if (change == "northwest") {
          positionx = x - 1;
          positiony = y - 1;
          console.log("POSITION");
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
        } else if (change == "southeast") {
          positionx = x + 1;
          positiony = y + 1;
          console.log("POSITION");
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
        } else if (change == "southwest") {
          positionx = x - 1;
          positiony = y + 1;
          console.log("POSITION");
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
        } else {
          console.log("POSITION");
          console.log("nothing");
        }
      }


// Checkpoint 4 | Jump move the queen

 var update;
      function jumpmoveforward(change, step) {
        if (change == "north") {
          positiony -= step;
          console.log("JUMPING POSITION");
          console.log("JUMPING POSITION is ", step);

          if (positionx >= 0 && positiony >= 0) {
            console.log(positiony, positiony);
          } else {
            console.log("CHECK MATE");
          }
          updateposition(positionx, positiony);
        } else if (change == "south") {
          positiony += step;
          console.log("JUMPING POSITION");
          console.log("JUMPING POSITION is ", step);
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
          updateposition(positionx, positiony);
        } else if (change == "east") {
          positionx += step;

          console.log("JUMPING POSITION");
          console.log("JUMPING POSITION is ", step);
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
          updateposition(positionx, positiony);
        } else if (change == "west") {
          positionx -= step;

          console.log("JUMPING POSITION");
          console.log("JUMPING POSITION is ", step);
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
          updateposition(positionx, positiony);
        } else if (change == "northeast") {
          positionx += step;
          positiony -= step;
          console.log("JUMPING POSITION");
          console.log("JUMPING POSITION is ", step);
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
          updateposition(positionx, positiony);
        } else if (change == "northwest") {
          positionx -= step;
          positiony -= step;
          console.log("JUMPING POSITION");
          console.log("JUMPING POSITION is ", step);
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
          updateposition(positionx, positiony);
        } else if (change == "southeast") {
          positionx += step;
          positiony += step;
          console.log("JUMPING POSITION");
          console.log("JUMPING POSITION is ", step);
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
          updateposition(positionx, positiony);
        } else if (change == "southwest") {
          positionx -= step;
          positiony += step;
          console.log("JUMPING POSITION");
          console.log("JUMPING POSITION is ", step);
          if (positionx >= 0 && positiony >= 0) {
            console.log(positionx, positiony);
          } else {
            console.log("CHECK MATE");
          }
          updateposition(positionx, positiony);
        } else {
          console.log("POSITION");
          console.log("nothing");
        }
      }

// Checkpoint 5 |  Tracking the position

 function updateposition(pos1, pos2) {
        console.log("updateposition");
        console.log(pos1, pos2);
      }

// Bonus 1 - Gotta keep her in the battle!
  
// Bonus 2 - The queen is more powerful than what you think!
    
// Bonus 3 - How about multiple queens?
