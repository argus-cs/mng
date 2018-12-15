import React, { Component } from 'react'

// core components
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Highlight from '../../components/Highlight'
import Subheader from '../../components/Subheader'
import Sentinel from '../../components/Sentinel'

// utils
import { handleTitle } from '../../utils/Titles'
import data from '../../utils/hero_recommends.json'

// layout
import Layout from '../../layouts/Master'

// style
import s from './Home.module.scss'

class Home extends Component {

  constructor(props){
    super(props)

    this.headerSentinel = React.createRef()
    this.subheaderSentinel = React.createRef()

    this.state = {
      fixed: false,
      fixedSub: false
    }

    this.handlerObserver = this.handlerObserver.bind(this)

    this.observer = new IntersectionObserver(this.handlerObserver)
  }

  componentDidMount() {
    document.title = handleTitle(false, 'welcome to MNG homepage')
    this.observer.observe(this.headerSentinel.current)
    this.observer.observe(this.subheaderSentinel.current)
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  handlerObserver(entrys) {
    const { fixed, fixedSub } = this.state
    entrys.forEach(entry => {
      if(entry.target.id === this.headerSentinel.current.id){
        if(entry.intersectionRatio !== 0) {
          if(fixed) {
            this.setState({
              fixed: false
            })
          }
        } else {
          if(!fixed) {
            this.setState({
              fixed: true
            })
          }
        }
      } else if(entry.target.id === this.subheaderSentinel.current.id) {
        if((!entry.isIntersecting) && (entry.boundingClientRect.y < entry.rootBounds.y)){
          if(!fixedSub) {
            this.setState({
              fixedSub: true
            })
          }
        } else {
          if(fixedSub) {
            this.setState({
              fixedSub: false
            })
          }
        }
      }
    })
  }

  render() {
    return(
      <Layout>
        <Sentinel id="header_sentinel" className={s.sentinel} sentinelref={this.headerSentinel}/>
        <Header fixed={this.state.fixed} />
        <Banner 
          background={data[0].background.path + '.' + data[0].background.extension} 
          title={data[0].title}
          data={data[0].createdAt}
          chapter={`Chapter ${data[0].chapter.number} - ${data[0].chapter.title}`} />
        <Highlight />
        <Subheader fixed={this.state.fixedSub} target={this.subheaderSentinel} />
        <main className={s.wrap_container} >
          <h3>Recomendações</h3>
        </main>
      </Layout>
    )
  }
}

export default Home