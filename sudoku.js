$(function(){
    let game = new Sudoku();
    game.fillArray();
    let numbers = game.getBoard();
    $('.board').text(numbers);  
});

class Sudoku{

    numbers = [];
    amount = [];
    board = [];
    total = 81;

    constructor() {
        this.numbers=[1,2,3,4,5,6,7,8,9];
        this.amount=[9,9,9,9,9,9,9,9,9];
    }

    getBoard(){
        console.log(this.board);
        return(this.board);
    }

    fillArray(){
        while (this.total>0){
           let rand = Math.floor(Math.random() * 9) + 1;
           this.board.push(rand);
           this.total--;
        }
    }

}