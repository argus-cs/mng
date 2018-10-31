import React from 'react'
import classNames from 'classnames/bind'

import s from './Subheader.module.scss'

let cx = classNames.bind(s)

const Subheader = props => {
  const { fixed, target } = props
  let subheader = cx({
    subheader_wrap: true,
    subheader_fixed: fixed,
    scale: fixed
  })
  return(
    <div className={subheader}>
      <nav className={s.subheader_nav} >
        <ul>
          <li>
            <p>Isekai</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Subheader