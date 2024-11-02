var guessPathActive = false;
var drawObstActive = false;
var gridGuessPath;
var startingNodeGuessPath;
var targetNodeGuessPath;
var startingNode;
var targetNode;

function User() {
  this.StartAlgorithmButton = function (noObstacles) {
    startButton = createButton("Start Algorithm!");
    startButton.position(10, 410);
    startButton.class("px-6 py-3 text-xl hover:bg-green shadow-green duration-200 bg-green text-[var(--background)] font-extrabold border-transparent border-2 hover:bg-transparent hover:border-green hover:border-2 hover:text-green");

    
    startButton.mouseClicked(() => {

      if (drawObstActive) {
        new A_Star(startingNode, targetNode, grid).calculate();
        loop();
      } else {
        setup();
      }
      drawObstActive = false;
    });
  };
}

function evaluateGuessedPath(guessedPath, actualPath) {}
