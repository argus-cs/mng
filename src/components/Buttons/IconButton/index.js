import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

// style
import s from './IconButton.scss'

// binding style
let cx = classNames.bind(s)

class IconButton extends Component {
  render(){
    const { icon, schema, bordered, loading } = this.props

    let styleSchema = cx({
      wrap_btn: true,
      [`btn_${schema}`]: schema,
      bordered: bordered
    })

    let iconLoad = cx({
      "material-icons": true,
      loadIcon: loading
    })

    if(loading) {
      return (
        <button className={styleSchema} >
            <i className={iconLoad}></i>
        </button>
      )
    } else {
      return(
        <button className={styleSchema} {...this.props} >
            <i className={iconLoad}>{icon}</i>
        </button>
      )
    }
  }
}

IconButton.propTypes = {
  schema: PropTypes.oneOf([
    'defult',
    'reader',
    'reader_sidebar'
  ]),
  bordered: PropTypes.bool
}

IconButton.defaultProps = {
  schema: 'default',
  loading: false,
  icon: '',
  bordered: false
}

export default IconButton