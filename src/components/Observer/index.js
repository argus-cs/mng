import React, { Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class Observer extends Component {

  constructor(props) {
    super(props)
    const { target, cb, options } = this.props
    
    this.target = React.createRef(target)

    this.observer = new IntersectionObserver(cb, options)
  }

  componentDidMount() {
    this.observer.observe(this.target)
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  render(){
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default Observer