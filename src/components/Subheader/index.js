import React from 'react'
import classNames from 'classnames/bind'

// core component
import Sentinel from '../Sentinel'

// style
import s from './Subheader.module.scss'

// binding style
let cx = classNames.bind(s)

const Subheader = props => {
  const { fixed, target } = props
  let subheader = cx({
    subheader_wrap: true,
    subheader_fixed: fixed,
    scale: fixed
  })
  return(
    <div className={s.wrapper}>
      <Sentinel id="subheader_sentinel" className={s.sentinel} sentinelref={target}/>
      <div className={subheader}>
        <nav className={s.subheader_nav} >
          <ul>
            <li>
              <p>Isekai</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Subheader