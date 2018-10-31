import React from 'react'

// style
import s from './Master.module.scss'

const Master = props => (
  <div className={s.wrapper_container} >
    {props.children}
  </div>
)

export default Master