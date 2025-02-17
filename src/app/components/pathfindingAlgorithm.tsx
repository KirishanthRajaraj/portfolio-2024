'use client';
import p5 from 'p5';
import { useEffect } from 'react';

const PathfindingAlgorithm = ({ className }) => {
    let isInitialized = false;

    //useEffect needed to prevent double rendering due to p5 library
    useEffect(() => {
        if (!isInitialized) {
            let grid;
            let gridManager;
            let startingNode;
            let targetNode;
            let a_star;
            const col_row_length = 50;
            const grid_size_px = 400;
            let drawObstActive = false;
            let temp_tenative_g;
            let myp5;
            let container;
            let buttonCreated = false;
            let startButton;

            //setup p5
            const manager = (sketch) => {

                sketch.setup = () => {
                    container = sketch.select('#p5-container');
                    const canvas = sketch.createCanvas(grid_size_px, grid_size_px);
                    container.child(canvas);
                    canvas.style('max-width', '100%');
                    canvas.style('height', 'auto');

                    // generate new grid
                    gridManager = new GridManager(sketch);
                    grid = gridManager.createGrid();
                    gridManager.createObstacleNodes(0.6);
                    startingNode = gridManager.createStartingNode();
                    targetNode = gridManager.createTargetNode();

                    a_star = new A_Star(startingNode, targetNode, grid, sketch);

                    const userInteractions = new User(sketch);
                    userInteractions.StartAlgorithmButton();

                    sketch.loop();
                };

                sketch.draw = () => {
                    a_star.calculate();
                };
            };

            if (!myp5) {
                myp5 = new p5(manager);
            }

            //grid manager

            function GridManager(sketch) {
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
                    startingNode = grid[sketch.int(sketch.random(0, starting_range))][sketch.int(sketch.random(0, starting_range))];
                    startingNode.isObstacle = false;
                    startingNode.color(sketch.color(0, 255, 0));
                    startingNode.g = 0;

                    return startingNode;
                };

                this.createTargetNode = function () {
                    // set random target node
                    const ending_range = 0.6 * col_row_length;
                    targetNode =
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

            // user

            function User(sketch) {
                this.StartAlgorithmButton = function () {
                    if (!buttonCreated) {
                        startButton = sketch.createButton("Start Algorithm!");
                        let buttonContainer = sketch.select('#redo-algorithm');
                        buttonContainer.child(startButton);

                        startButton.class("px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green");
                        buttonCreated = true;
                    }

                    startButton.mousePressed(() => {
                        sketch.select('#no-solution').elt.textContent = '';
                        if (drawObstActive) {
                            new A_Star(startingNode, targetNode, grid, sketch).calculate();
                            sketch.loop();
                        } else {
                            sketch.setup();
                        }
                        drawObstActive = false;
                    });
                };
            }

            //a_star
            function A_Star(startingNode, targetNode, grid, sketch) {
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
                                    neighbours[i].f = temp_tenative_g + calcHCost(neighbours[i], targetNode);


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
                        sketch.select('#no-solution').elt.textContent = 'No solution';
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
        <div className={`${className} container mx-auto md:py-8 relative`}>
            <div className="canvas-wrapper">

                <div className="flex gap-2 flex-wrap justify-center mb-4">
                    <div className="flex items-center space-x-2 text-xs">
                        <div className="w-3 h-3 rounded-[5px] bg-[#00ff00]"></div>
                        <span className="text-white">Starting Point</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                        <div className="w-3 h-3 rounded-[5px] bg-[#8B0000]"></div>
                        <span className="text-white">Ending Point</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                        <div className="w-3 h-3 rounded-[5px] bg-[#233047]"></div>
                        <span className="text-white">Obstacle</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                        <div className="w-3 h-3 rounded-[5px] bg-[#3c0068]"></div>
                        <span className="text-white">Tracked Fields</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                        <div className="w-3 h-3 rounded-[5px] bg-[#17F29A]"></div>
                        <span className="text-white">Final Path</span>
                    </div>
                </div>

                <div id='p5-container' className='flex justify-center'>
                </div>
                <div id='no-solution' className="text-white font-bold text-lg mt-2 text-center"></div>
                <div id='redo-algorithm' className="button-container flex justify-center mt-4 text-black"></div>
            </div>
        </div>
    );
};

export default PathfindingAlgorithm;

