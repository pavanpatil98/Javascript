document.addEventListener("DOMContentLoaded",function(){
    let gameArena = document.getElementById("game-arena");
    let cellsize = 20;
    let gridSize = 600;
    let score = 0;

    let food = {x:16,y:16};
    let snake = [{x:9,y:16},{x:8,y:16},{x:7,y:16}];
    let gameStarted = false;

    let dx = cellsize;
    let dy = 0;
    
    function scaleUpPixels(){
        snake.forEach(cell => {
            cell.x *= cellsize;
            cell.y *= cellsize;
        });
        
        food.x *= cellsize;
        food.y *= cellsize;
    }
    function changeDirection(e){
        console.log("key pressed "+e);

        let isGoingUp = dy==-cellsize;
        let isGoingDown = dy==cellsize;
        let isGoingLeft = dx==-cellsize;
        let isGoingRight = dx==cellsize;

        if(e.key == "ArrowUp" && !isGoingDown){
            dx = 0;
            dy = -cellsize
        }
        else if(e.key == "ArrowDown" && !isGoingUp){
            dx = 0;
            dy = cellsize;
        }
        else if(e.key == "ArrowLeft" && !isGoingRight){
            dx = -cellsize;
            dy = 0;
        }
        else if(e.key == "ArrowRight" && !isGoingLeft){
            dx = cellsize;
            dy = 0;
        }

    }
   
    function updateSnake(){
        const snakeHead = {x:snake[0].x+dx,y:snake[0].y+dy};
        if(snake.includes(snakeHead))return false;
        snake.unshift(snakeHead);//Added newHead to snake(removes 1st element)
        if(snakeHead.x >= 600 || snakeHead.x<0 || snakeHead.y >=600 || snakeHead.y<0)return false;
        if(snakeHead.x==food.x && snakeHead.y==food.y){
            score+=10;
            document.getElementById("score-board").innerHTML = score;
            //length increase logic need to think of
            //snake.push({})
            food = {x:Math.floor((Math.random()*30))*20,y:Math.floor((Math.random()*30))*20};
        }
        else{
            snake.pop();
        }
        return true;
    }

    function drawDiv(x,y,classname){
        let div = document.createElement("div");
        div.classList.add(classname);
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
        return div;
    }

    
    function drawFoodAndSnake(){
        gameArena.innerHTML='';

        const returnFood = drawDiv(food.x, food.y,"food");
        gameArena.appendChild(returnFood);

        const returnSnake = snake.forEach((snakeCell)=>{
            const returnSnake = drawDiv(snakeCell.x, snakeCell.y, "snake");
            gameArena.appendChild(returnSnake);
        })
    }

    function gameLoop(){
        let intervalId = setInterval(()=>{
            let isValidPath = updateSnake();
            if(!isValidPath){
                console.log("Game Over");
                
                let snakeEles = gameArena.getElementsByClassName("snake");
                Array.from(snakeEles).forEach(ele => {
                    ele.style.display = "none";
                });
                
                clearInterval(intervalId);
                return;
            }
            drawFoodAndSnake();
        },200);
    }

    function runGame(){
        if(!gameStarted){
            gameStarted = true;
            console.log(snake);
            scaleUpPixels();
            console.log(snake);
            document.addEventListener('keydown', changeDirection);
            gameLoop();
        }
    }

    function startGame(){
        const scoreboard = document.createElement('div');
        scoreboard.id = 'score-board';

        document.body.insertBefore(scoreboard,gameArena);
    
        const startButton = document.createElement('button');
        startButton.textContent = 'Start Game';
        startButton.classList.add('start-button');

        startButton.addEventListener('click', () =>{
            startButton.style.display = 'none';
            runGame();
        })

        document.body.appendChild(startButton); // Append start button to the body
    }

    startGame();
});