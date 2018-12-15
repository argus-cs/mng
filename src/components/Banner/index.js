import React, { Component } from 'react'

// style
import s from './Banner.module.scss'

class Banner extends Component {

  constructor(props){
    super(props)

    this.image = new Image()

    this.state = {
      currentImage: ''
    }
  }

  componentDidMount() {
    this.image.src = this.props.background
    this.image.onload = () => this.loadImage()
    this.image.onerror = err => console.log(err)
  }

  loadImage() {
    this.setState({
      currentImage: this.image.src
    })
  }

  render() {
    const { currentImage } = this.state
    if(currentImage === '') {
      return (
        <div className={s.hero} >
          <p>Carregando...</p>
        </div>
      )
    } else {
      return(
        <div className={s.hero} style={{backgroundImage: `url(${this.state.currentImage})`}}>
          <div className={s.hero_info}>
            <div>
              <p>Most recomended</p>
              <h4>{this.props.title}</h4>
              <p>published in <strong>{this.props.data}</strong></p>
            </div>
            <div className={s.hero_details}>
              <p>New Chapter</p>
              <div className={s.hero_chapter}>
                <p>{this.props.chapter}</p>
                <i className="material-icons">open_in_new</i>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Banner