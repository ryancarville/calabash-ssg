import React from 'react'

export default function Button({children, onClick, style}) {
  const handleOnClick = () => {
    if (onClick) onClick();
  }
  return (
    <button onClick={() => handleOnClick()} style={style}>{children}</button>
  )
}
