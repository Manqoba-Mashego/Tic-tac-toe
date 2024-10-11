// game object
class TicTacToe {
     constructor(player1, player2){
        this.player1 = {
            name: player1,
            turn : true,
        };
        this.player2 = {
            name: player2,
            turn: false
        }
     }
     playerWon(){
        const a1 = document.getElementById('a1').textContent;
        const a2 = document.getElementById('a2').textContent;
        const a3 = document.getElementById('a3').textContent;
        const b1 = document.getElementById('b1').textContent;
        const b2 = document.getElementById('b2').textContent;
        const b3 = document.getElementById('b3').textContent;
        const c1 = document.getElementById('c1').textContent;
        const c2 = document.getElementById('c2').textContent;
        const c3 = document.getElementById('c3').textContent;
    
        if ((a1 != '' && a1 == a2  && a2== a3) || (b1 != '' && b1 == b2 && b2== b3) || (c1 != '' && c1 == c2 && c2 == c3) || (a1 != '' && a1 == b1 && b1 == c1) || ( a2 != '' && a2 == b2 && b2 == c2) || (a3 != '' && a3 == b3 && b3 == c3) || (a1 != '' && a1 == b2 && b2 == c3) || (a3 != '' && a3 == b2 && b2 == c1 )) {
            return true
        } else {
            return false;
        }
     }

     start(){
        document.getElementById('game').innerHTML = `
            <h4 class="text-center mb-2"> ${this.player1.name} vs ${this.player2.name} </h2>
            
            <div id="game-container">
        
        <div class="square" id="a1"></div>
        <div class="square" id="a2"></div>
        <div class="square" id="a3"></div>
        <div class="square" id="b1"></div>
        <div class="square" id="b2"></div>
        <div class="square" id="b3"></div>
        <div class="square" id="c1"></div>
        <div class="square" id="c2"></div>
        <div class="square" id="c3"></div>
      </div>
        `
        const board = document.getElementById('game-container');
        document.getElementById('game-container').addEventListener('click', (e)=>{
            if (e.target.innerHTML == ''){
                if (this.player1.turn){
                    e.target.classList.add('x');
                    e.target.innerHTML = '<p>&times;</p>'
                    this.player1.turn = false;
                    this.player2.turn = true;
                    if (this.playerWon()){
                        this.end(this.player1.name);
                    }
                    
                } else if (this.player2.turn == true){
                    e.target.classList.add('o');
                    e.target.innerHTML = '<p>&cir;</p>'
                    this.player1.turn = true;
                    this.player2.turn = false;
                    if (this.playerWon()){
                        this.end(this.player2.name);
                    }
                }
            }
        })
     }
     end(player){
        document.getElementById('game').innerHTML = `
        <h2>Results: <span class="text-primary">${player}</span> won!<h2>
        <button class="btn btn-primary w-100 mt-4" id="play-again-btn">Play again?</button>
        `
     }
}

//form validation
document.querySelector('form').addEventListener('keyup', ()=>{
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    if (player1 != '' && player2 != '' && player1 != player2){
        document.getElementById('start').removeAttribute('disabled');
    } else {
        document.getElementById('start').setAttribute('disabled', 'true');
    }
});

//start game 
document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const game = new TicTacToe(player1, player2);
    game.start();
})

// play again

// document. 