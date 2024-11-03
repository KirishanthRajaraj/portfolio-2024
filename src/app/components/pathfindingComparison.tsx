'use client';
import p5 from 'p5';
import { useEffect, useState } from 'react';

const PathfindingComparison = () => {
    const [astarTime, setAstarTime] = useState(null);
    const [dijkstraTime, setDijkstraTime] = useState(null);
    let isInitialized = false;
    useEffect(() => {
        console.log(astarTime);
    }, [astarTime]);


    //useEffect needed to prevent double rendering due to p5 library
    useEffect(() => {
        if (!isInitialized) {
            let grid1, grid2;
            let gridManager1, gridManager2;
            let startingNode1, startingNode2;
            let targetNode1, targetNode2;
            let a_star, dijkstra;
            const col_row_length = 50;
            const grid_size_px = 250;
            let drawObstActive = false;
            let container;
            let buttonCreated = false;
            let startButton;

            let astarStartTime = null;
            let dijkstraStartTime = null;

            //setup p5
            const setupSketch = (sketch, isDijkstras) => {
                sketch.setup = () => {
                    const container = isDijkstras ? sketch.select('#p5-container-dijkstra') : sketch.select('#p5-container-astar');
                    const canvas = sketch.createCanvas(grid_size_px, grid_size_px);
                    container.child(canvas);
                    canvas.style('max-width', '100%');
                    canvas.style('height', 'auto');

                    const gridManager = new GridManager(sketch);
                    const grid = gridManager.createGrid();
                    gridManager.createObstacleNodes(0.60);
                    const startingNode = gridManager.createStartingNode();
                    const targetNode = gridManager.createTargetNode();

                    const algorithm = new A_Star(startingNode, targetNode, grid, sketch, isDijkstras);

                    if (isDijkstras) {
                        gridManager2 = gridManager;
                        grid2 = grid;
                        startingNode2 = startingNode;
                        targetNode2 = targetNode;
                        dijkstra = algorithm;
                    } else {
                        gridManager1 = gridManager;
                        grid1 = grid;
                        startingNode1 = startingNode;
                        targetNode1 = targetNode;
                        a_star = algorithm;
                    }

                    sketch.loop();
                };

                sketch.draw = () => {
                    if (isDijkstras) {
                        if (!dijkstraStartTime) dijkstraStartTime = Date.now();
                        if (dijkstra.calculate()) {
                            const elapsed = Date.now() - dijkstraStartTime;
                            setDijkstraTime((elapsed / 1000).toFixed(2));
                            sketch.noLoop();
                        }
                    } else {
                        if (!astarStartTime) astarStartTime = Date.now();
                        if (a_star.calculate()) {
                            const elapsed = Date.now() - astarStartTime;
                            setAstarTime((elapsed / 1000).toFixed(2));
                            sketch.noLoop();
                        }
                    }
                };
            };

            const p5Astar = new p5(sketch => setupSketch(sketch, false));
            const p5Dijkstra = new p5(sketch => setupSketch(sketch, true));
            // Button to start both algorithms
            if (!buttonCreated) {
                startButton = p5Astar.createButton("Compare");
                const buttonContainer = p5Astar.select('#redo-algorithm-comparison');
                buttonContainer.child(startButton);

                startButton.class("px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green");

                startButton.mousePressed(() => {
                    astarStartTime = null;
                    dijkstraStartTime = null;
                    setAstarTime(null);
                    setDijkstraTime(null);
                    p5Astar.setup();
                    p5Dijkstra.setup();
                });

                buttonCreated = true;
            }

            //grid manager
            function GridManager(sketch) {
                let grid;
                this.createGrid = function () {
                    grid = new Array(col_row_length);

                    for (let i = 0; i < grid.length; i++) {
                        grid[i] = new Array(col_row_length);
                    }

                    // create and render boxes
                    for (let i = 0; i < col_row_length; i++) {
                        for (let j = 0; j < col_row_length; j++) {
                            grid[i][j] = new Node(i, j, grid_size_px, col_row_length, sketch);
                            grid[i][j].color('regular');
                            grid[i][j].init();
                        }
                    }
                    return grid;
                };

                this.createObstacleNodes = function (obstacleChance) {
                    for (let i = 0; i < col_row_length; i++) {
                        for (let j = 0; j < col_row_length; j++) {
                            if (sketch.random(1) > obstacleChance) {
                                grid[i][j].isObstacle = true;
                                grid[i][j].color('obstacle');
                                grid[i][j].init();
                            }
                        }
                    }
                };

                this.createStartingNode = function () {
                    // set random starting node
                    const starting_range = 0.4 * col_row_length;
                    let startingNode = grid[sketch.int(sketch.random(0, starting_range))][sketch.int(sketch.random(0, starting_range))];
                    startingNode.isObstacle = false;
                    startingNode.color(sketch.color(0, 255, 0));
                    startingNode.g = 0;

                    return startingNode;
                };

                this.createTargetNode = function () {
                    // set random target node
                    const ending_range = 0.6 * col_row_length;
                    let targetNode =
                        grid[sketch.int(sketch.random(ending_range, col_row_length))][
                        sketch.int(sketch.random(ending_range, col_row_length))
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

            // node
            function Node(i, j, canvas_size, col_row_length, sketch) {
                this.w = canvas_size / col_row_length;
                this.px = i * this.w;
                this.py = j * this.w;

                this.x = i;
                this.y = j;

                this.isObstacle = false;

                this.f = Number.MAX_VALUE;
                this.g = Number.MAX_VALUE;

                this.box_color = sketch.color(255, 255, 255);

                this.init = function () {
                    if (this.isObstacle) {
                        const margin = this.w * 0.2;
                        const size = this.w - margin * 2;

                        sketch.fill(this.box_color);
                        sketch.rect(this.px + margin, this.py + margin, size, size, 5);
                    } else {
                        sketch.fill(this.box_color);
                        sketch.rect(this.px, this.py, this.w);
                    }

                };

                this.color = function (new_color) {
                    if (new_color === 'start') {
                        this.box_color = sketch.color(sketch.color(0, 255, 0));
                    } else if (new_color === 'regular') {
                        this.box_color = sketch.color('#0a0a0a');
                    } else if (new_color === 'target') {
                        this.box_color = sketch.color('#8B0000');
                    } else if (new_color === 'checked') {
                        this.box_color = sketch.color('#3c0068');
                    } else if (new_color === 'obstacle') {
                        this.box_color = sketch.color('#233047');
                    } else {
                        this.box_color = new_color;
                    }
                    this.init();
                };

                this.findNeighbours = function (current, grid) {
                    const neighbours = [];
                    const directions = [
                        [1, 0],
                        [-1, 0],
                        [0, 1],
                        [0, -1],
                        [-1, 1],
                        [-1, -1],
                        [1, -1],
                        [1, 1],
                    ];

                    for (const direction of directions) {
                        const newX = current.x + direction[0];
                        const newY = current.y + direction[1];
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

            //a_star
            function A_Star(startingNode, targetNode, grid, sketch, isDijkstras) {
                this.isDijkstras = isDijkstras;
                const openSet = [];
                const closedSet = [];
                const finalPath = [];

                openSet.push(startingNode);
                this.calculate = function () {
                    if (openSet.length != 0) {
                        const currentNode = getNodeWithLowestFScore(openSet);

                        if (JSON.stringify(currentNode) === JSON.stringify(targetNode)) {
                            // track back path
                            let tempCurrent = currentNode;
                            finalPath.push(tempCurrent);
                            while (tempCurrent.prev) {
                                finalPath.push(tempCurrent.prev);
                                tempCurrent = tempCurrent.prev;
                            }

                            colorFinalPath(finalPath, startingNode, targetNode, sketch);
                            sketch.noLoop();
                            return;
                        }

                        openSet.remove(currentNode);

                        const neighbours = currentNode.findNeighbours(currentNode, grid);

                        for (let i = 0; i < neighbours.length; i++) {
                            if (
                                !neighbours[i].isObstacle &&
                                !isObjInArr(neighbours[i], closedSet)
                            ) {
                                let temp_tenative_g =
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
                                    neighbours[i].f = isDijkstras ? temp_tenative_g : temp_tenative_g + calcHCost(neighbours[i], targetNode);


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
                        sketch.noLoop();
                        sketch.textSize(25);
                        sketch.fill(255);
                        sketch.textStyle(sketch.BOLD);
                        sketch.text('no solution', 10, 530);
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
                const diffX = Math.abs(targetNode.y - current.y);
                const diffY = Math.abs(targetNode.x - current.x);
                return diffX + diffY;
            }

            function getNodeWithLowestFScore(openSet) {
                let lowestFNode = openSet[0];
                for (const node of openSet) {
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

            function colorFinalPath(finalPath, startingNode, targetNode, sketch) {
                sketch.stroke("#17f29a");
                sketch.strokeWeight(4);
                sketch.noFill();
                sketch.beginShape();
                for (let i = 0; i < finalPath.length; i++) {
                    // avoid coloring start and endnode
                    if (
                        JSON.stringify(startingNode) !== JSON.stringify(finalPath[i]) &&
                        JSON.stringify(targetNode) !== JSON.stringify(finalPath[i]) &&
                        finalPath[i].isObstacle == false
                    ) {
                        sketch.vertex(finalPath[i].px + finalPath[i].w / 2, finalPath[i].py + finalPath[i].w / 2);
                    }
                }
                sketch.endShape();
            }
        }

        isInitialized = true;
    }, []);

    return (
        <div className="container mx-auto relative">
            <div className="flex justify-center gap-4">
                <div className="astar">
                    <p className='font-bold text-xl mb-3'>A*:</p>
                    <div id='p5-container-astar' className='flex justify-center'></div>
                </div>
                <div className="dijkstras">
                    <p className='font-bold text-xl mb-3'>Dijkstras:</p>
                    <div id='p5-container-dijkstra' className='flex justify-center'></div>
                </div>
            </div>
            <div id='redo-algorithm-comparison' className="button-container flex justify-center mt-4">

            </div>
        </div>
    );
};

export default PathfindingComparison;

