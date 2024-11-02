function Node(i, j, canvas_size, col_row_length) {
  this.w = canvas_size / col_row_length;
  this.px = i * this.w;
  this.py = j * this.w;

  this.x = i;
  this.y = j;
  
  this.isObstacle = false; 

  this.f = Number.MAX_VALUE;
  this.g = Number.MAX_VALUE;

  this.box_color = color(255, 255, 255);

  this.init = function () {
    if(this.isObstacle){
        let margin = this.w * 0.2;
        let size = this.w - margin * 2;

        fill(this.box_color);
        rect(this.px + margin, this.py + margin, size, size, 5);
    } else {
        fill(this.box_color);
        rect(this.px, this.py, this.w);
    }

  };

this.color = function (new_color) {
    if (new_color === 'start') {
        this.box_color = color(color(0, 255, 0));
    } else if (new_color === 'regular') {
        this.box_color = color('#0a0a0a');
    } else if (new_color === 'target') {
        this.box_color = color('#8B0000');
    } else if (new_color === 'checked') {
        this.box_color = color('#3c0068');
    } else if (new_color === 'obstacle') {
        this.box_color = color('#233047');
    } else {
        this.box_color = new_color;
    }
    this.init();
};

  this.findNeighbours = function (current, grid) {
    let neighbours = [];
    let directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [-1, 1],
      [-1, -1],
      [1, -1],
      [1, 1],
    ];

    for (let direction of directions) {
      let newX = current.x + direction[0];
      let newY = current.y + direction[1];
      // Check if the new coordinates are within the grid bounds or an obstacle
      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length 
      ) {
          neighbours.push(grid[newX][newY]);
      }
    }
    return neighbours;
  };
}
