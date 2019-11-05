import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ({ to, children, ...props }) {
  return (
    <NavLink
      to={to}
      className="tag-pill tag-default"
      {...props}
    >{children}</NavLink>
  )
}
