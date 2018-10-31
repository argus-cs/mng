import React from 'react'

import s from './Highlight.module.scss'

const Highlight = props => (
  <div className={s.highlight_wrap}>
    {props.children}
  </div>
)

export default Highlight