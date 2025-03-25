import React, { useState } from 'react'
import './TicTacToe.css'
import useTictactoe from './hooks/useTictactoe.jsx'

export const TicTacToe = () => {
  const {board,handleClick, resetGame, getStatusMessage} = useTictactoe();
  console.log(board)
  return (
    <div className="container"> 
        <h1 className='title'>Tic Tac Toe</h1>
        <div className="status">{getStatusMessage()}</div>
        <div className="board">
          <div className="row1">
            <div className="box" onClick={()=>handleClick(0)}>{board[0]}</div>
            <div className="box" onClick={()=>handleClick(1)}>{board[1]}</div>
            <div className="box" onClick={()=>handleClick(2)}>{board[2]}</div>
          </div>
          <div className="row2">
            <div className="box" onClick={()=>handleClick(3)}>{board[3]}</div>
            <div className="box" onClick={()=>handleClick(4)}>{board[4]}</div>
            <div className="box" onClick={()=>handleClick(5)}>{board[5]}</div>
          </div>
          <div className="row3">
            <div className="box" onClick={()=>handleClick(6)}>{board[6]}</div>
            <div className="box" onClick={()=>handleClick(7)}>{board[7]}</div>
            <div className="box" onClick={()=>handleClick(8)}>{board[8]}</div>
          </div>
        </div>
        <button className ="button" onClick={resetGame}>Reset</button>
    </div>
  )
}
