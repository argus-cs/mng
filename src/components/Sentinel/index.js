import React from 'react'
import PropsTypes from 'prop-types'

const Sentinel = props => (
  <div ref={props.sentinelref} {...props}></div>
)

Sentinel.propsTypes = {
  sentinelRef: PropsTypes.any.isRequired,
}

export default Sentinel