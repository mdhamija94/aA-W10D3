import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board'

class Game extends React.Component {
    constructor(props) {
        super(props);
        const minesweeperBoard = new Minesweeper.Board(10, 5);
        this.state = { board: minesweeperBoard };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render(props) {
        return (
            <div>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}

export default Game;