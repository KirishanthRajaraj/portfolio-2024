var grid;
var startingNode;
var targetNode;
var a_star;
var col_row_length = 50;

function GridManager() {
  this.createGrid = function () {
    grid = new Array(col_row_length);

    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(col_row_length);
    }

    // create and render boxes
    for (let i = 0; i < col_row_length; i++) {
      for (let j = 0; j < col_row_length; j++) {
        grid[i][j] = new Node(i, j, grid_size_px, col_row_length);
        grid[i][j].color('regular');
        grid[i][j].init();
      }
    }
    return grid;
  };

  this.createObstacleNodes = function (obstacleChance) {
    for (let i = 0; i < col_row_length; i++) {
      for (let j = 0; j < col_row_length; j++) {
        if (random(1) > obstacleChance) {
          grid[i][j].isObstacle = true;
          grid[i][j].color('obstacle');
          grid[i][j].init();
        }
      }
    }
  };

  this.createStartingNode = function () {
    // set random starting node
    var starting_range = 0.4 * col_row_length;
    startingNode =
      grid[int(random(0, starting_range))][int(random(0, starting_range))];
    startingNode.isObstacle = false;
    startingNode.color(color(0, 255, 0));
    startingNode.g = 0;

    return startingNode;
  };

  this.createTargetNode = function () {
    // set random target node
    var ending_range = 0.6 * col_row_length;
    targetNode =
      grid[int(random(ending_range, col_row_length))][
        int(random(ending_range, col_row_length))
      ];
    targetNode.isObstacle = false;
    targetNode.color('target');

    return targetNode;
  };

  this.updateGrid = function () {
    for (let i = 0; i < col_row_length; i++) {
      for (let j = 0; j < col_row_length; j++) {
        grid[i][j].init();
      }
    }
  };
}
