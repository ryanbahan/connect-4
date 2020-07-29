import './styles.css'
import React, { useState } from 'react';
import Cell from '../Cell/Cell';


// when we click on a given column
// find the first empty cell (highest y value)
// populate it with a color based on turn

const Board = () => {
  const [game, setGame] = useState({
    0: [null, null, null, null, null, null],
    1: [null, null, null, null, null, null],
    2: [null, null, null, null, null, null],
    3: [null, null, null, null, null, null],
    4: [null, null, null, null, null, null],
    5: [null, null, null, null, null, null],
    6: [null, null, null, null, null, null],
  })
  const [turn, setTurn] = useState(true)
  const [token, setToken] = useState("black")

  const handleClick = (pos) => {
    if (game[pos[0]][pos[1]] !== null) {
      window.alert("Invalid move")
      return
    }

    if (turn) {
      setToken("red")
    } else {
      setToken("black")
    }

    const y = game[pos[0]].findIndex(item => item === null)
    const newBoard = { ...game };
    newBoard[pos[0]][y] = token
    setGame(newBoard)
    setTurn(!turn)
  }

  const generateColumn = (c) => {
    const arr = game[c]
    const data = []

    for (let i = 0; i < arr.length; i++) {
      data.push(<Cell token={game[c][i]} pos={[c, i]} onClick={handleClick} key={[c,i]} />)
    }

    return (
      <div className="column" key={c}>
        { data.reverse() }
      </div>
    )
  }

  const generateColumns = () => {
    const columns = Object.keys(game);
    return columns.map(c => generateColumn(c))
  }

  return (
    <section className="board">
      {generateColumns()}
    </section>
  )
}

export default Board