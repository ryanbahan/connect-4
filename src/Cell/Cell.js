import './styles.css'
import React, { useState } from 'react';

const Cell = ({ token, pos, onClick }) => {
  const fillCell = () => {
    return (
      <div className={token + ' ' + 'token'}></div>
    )
  }

  return (
    <div className="cell" onClick={() => onClick(pos)}>
      <div className="circle">
        { token && fillCell() }
      </div>
    </div>
  )
}

export default Cell