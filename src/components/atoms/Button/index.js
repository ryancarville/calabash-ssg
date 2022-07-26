import React from 'react'

export default function Button({children, onClick, style, className}) {
  const handleOnClick = () => {
    if (onClick) onClick();
  }
  return (
    <button
      onClick={() => handleOnClick()}
      style={style}
      className={className}
    >
      {children}
    </button>
  );
}
