import React from 'react'

function Button({ children, className }) {
  return (
    <div className={className} >{ children }</div>
  )
}

export default Button