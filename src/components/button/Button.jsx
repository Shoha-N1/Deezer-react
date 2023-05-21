import React from 'react'

export default function Button({type = "button", className = "", children = "Button"}) {
  return (
    <button type={type} className={`btn ${className}`}>
        {children}
    </button>
  )
}
