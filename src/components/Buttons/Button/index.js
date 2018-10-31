import React from 'react'

// style
import s from './Button.scss'

const Button = props => (
  <button className={s.btn} {...props}>{props.children}</button>
)

export default Button