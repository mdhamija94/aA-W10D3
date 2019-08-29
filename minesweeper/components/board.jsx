import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const board = this.props.board;

        return board.grid.map( (row, i) => {
            return row.map( (col, j) => {
                return(
                    <div id="board">
                        <div className="row" key={`row-${i}`}>
                            <div className="col" key={`row-${j}`}>
                                T
                            </div>
                        </div>
                    </div>
                )
            })
        })
    }
}

export default Board;