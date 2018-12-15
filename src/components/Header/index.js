import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

// style
import s from './Header.scss'

// logo
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

// binding style
let cx = classNames.bind(s)

const Header = props => {
  let wrapperStiky = cx({
    wrap_header: true,
    fixed: props.fixed
  })
  let brandStiky = cx({
    brand: true,
    brand_highlight: !props.fixed
  })
  return (
    <header className={wrapperStiky}>
      <div className={brandStiky}>
        <Logo />
      </div>
    </header>
  )
}

Header.propsTypes = {
  fixed: PropTypes.bool,
  brand: PropTypes.any
}

export default Header