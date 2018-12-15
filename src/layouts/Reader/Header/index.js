import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

// local components
import IconButton from '../../../components/Buttons/IconButton'

// style
import s from './Header.scss'

// binding style
let cx = classNames.bind(s)

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isFetching: null,
      data: {
        title: null,
        chapter: {
          title: null,
          number: null
        }
      }
    }
  }

  async componentDidMount() {
    const { isFetching, title, chapter_title, chapter_number } = this.props;
    if(await !isFetching) {
      this.setState({
        data: {
          title: await title,
          chapter: {
            title: await chapter_title,
            number: await chapter_number
          }
        }
      })
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.isFetching !== state.isFetching) {
      return {
        isFetching: props.isFetching,
        data: {
          title: props.title,
          chapter: {
            title: props.chapter_title,
            number: props.chapter_number
          }
        }
      }
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.isFetching === false) {
      return {
        isFetching: this.props.isFetching,
        data: {
          title: this.props.title,
          chapter: {
            title: this.props.chapter_title,
            number: this.props.chapter_number
          }
        }
      }
    }
  }

  render(){
    const { isFetching, data } = this.state;
    let textLoad = cx({
      loadedText: true,
      loadText: isFetching
    })

    return(
      <header className={s.main_header}>
        <div className={s.header_title}>
          <IconButton 
            schema="reader"
            icon="arrow_back"
            loading={isFetching} />
          <div className={s.titles_header}>
            <h4 className={textLoad}>{data.title}</h4>
          </div>
          <div className={s.titles_header}>
            <p className={textLoad}>CH {data.chapter.number} - {data.chapter.title} </p>
          </div>
        </div>
        <div className={s.header_actions}>
          <IconButton 
            schema="reader"
            icon="view_day"
            loading={isFetching}
            data-tooltip="Alterar Modo de Visualização"
            tooltip-direction="bottom left" />
          <IconButton 
            schema="reader"
            icon="translate"
            loading={isFetching}
            data-tooltip="Linguagens"
            tooltip-direction="bottom left" />
          <IconButton 
            schema="reader"
            icon="error_outline"
            loading={isFetching}
            data-tooltip="Informações"
            tooltip-direction="bottom right" />
          <IconButton 
            schema="reader"
            icon="settings"
            loading={isFetching}
            data-tooltip="Configurações"
            tooltip-direction="bottom right" />
        </div>
      </header>
    )
  }
}

// types check
Header.propTypes = {
  title: PropTypes.string.isRequired,
  chapter_number: PropTypes.number.isRequired,
  chapter_title: PropTypes.string
}

export default Header