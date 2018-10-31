import React from 'react'

// style
import s from './Banner.module.scss'

const Banner = props => (
  <div className={s.hero} style={{backgroundImage: `url(${props.bg})`}}>
    <div className={s.hero_info}>
      <h4>{props.title}</h4>
    </div>
  </div>
)

export default Banner