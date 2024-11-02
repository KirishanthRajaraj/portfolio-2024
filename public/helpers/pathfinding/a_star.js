function A_Star(startingNode, targetNode, grid) {
  let openSet = [];
  let closedSet = [];
  let finalPath = [];
  
  openSet.push(startingNode);
  this.calculate = function () {
    if (openSet.length != 0) {
      var currentNode = getNodeWithLowestFScore(openSet);

      if (JSON.stringify(currentNode) === JSON.stringify(targetNode)) {
        // track back path
        let tempCurrent = currentNode;
        finalPath.push(tempCurrent);
        while (tempCurrent.prev) {
          finalPath.push(tempCurrent.prev);
          tempCurrent = tempCurrent.prev;
        }

        colorFinalPath(finalPath, startingNode, targetNode);
        noLoop();
        return;
      }

      openSet.remove(currentNode);

      let neighbours = currentNode.findNeighbours(currentNode, grid);

      for (let i = 0; i < neighbours.length; i++) {
        if (
          !neighbours[i].isObstacle &&
          !isObjInArr(neighbours[i], closedSet)
        ) {
          temp_tenative_g =
            currentNode.g + distNeighbour(currentNode, neighbours[i]);

          // avoid coloring start and endnode
          if (
            JSON.stringify(startingNode) !== JSON.stringify(neighbours[i]) &&
            JSON.stringify(targetNode) !== JSON.stringify(neighbours[i]) &&
            neighbours[i].isObstacle == false
          ) {
            neighbours[i].color("checked");
          }

          if (temp_tenative_g < neighbours[i].g) {
            neighbours[i].prev = currentNode;

            neighbours[i].g = temp_tenative_g;
            neighbours[i].f =
              temp_tenative_g + calcHCost(neighbours[i], targetNode);

            if (!isObjInArr(neighbours[i], openSet)) {
              openSet.push(neighbours[i]);
            }
          }

          if (!isObjInArr(neighbours[i], closedSet)) {
            closedSet.push(neighbours[i]);
          }
        }
      }
    } else {
      noLoop();
      textSize(25);
      fill(0);
      textStyle(BOLD); 
      text('no solution', 10, 430);
      return;
    }
  };
  
}

function isObjInArr(obj, array) {
  return array.some(
    (item) =>
      Object.keys(obj).length === Object.keys(item).length &&
      Object.keys(obj).every((key) => obj[key] === item[key])
  );
}

// euclidean formula weighs diagonal neighbours higher
function distNeighbour(current, neighbour) {
  return Math.sqrt(
    Math.pow(current.x - neighbour.x, 2) + Math.pow(current.y - neighbour.y, 2)
  );
}

function calcHCost(current, targetNode) {
  let diffX = Math.abs(targetNode.y - current.y);
  let diffY = Math.abs(targetNode.x - current.x);
  return diffX + diffY;
}

function getNodeWithLowestFScore(openSet) {
  let lowestFNode = openSet[0];
  for (let node of openSet) {
    if (node.f < lowestFNode.f) {
      lowestFNode = node;
    }
  }
  return lowestFNode;
}

Array.prototype.remove = function (item) {
  const index = this.indexOf(item);
  if (index !== -1) {
    this.splice(index, 1);
  }
  return this;
};

function colorFinalPath(finalPath, startingNode, targetNode) {
  stroke("#17f29a");
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < finalPath.length; i++) {
    // avoid coloring start and endnode
    if (
      JSON.stringify(startingNode) !== JSON.stringify(finalPath[i]) &&
      JSON.stringify(targetNode) !== JSON.stringify(finalPath[i]) &&
      finalPath[i].isObstacle == false
    ) {
        vertex(finalPath[i].px + finalPath[i].w / 2, finalPath[i].py + finalPath[i].w / 2);
    }
  }
  endShape();
}
