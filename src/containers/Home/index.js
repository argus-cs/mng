import React, { Component } from 'react'

// core components
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Highlight from '../../components/Highlight'
import Sentinel from '../../components/Sentinel'

// layout
import Layout from '../../layouts/Master'

// style
import s from './Home.module.scss'

// img url
const img_url = "https://1.bp.blogspot.com/-E1ta3XkYUsk/WVjV7ggR6OI/AAAAAAAANnQ/nuB6JZ8r6AoyEQlRFdKkghubh5AV6HbsACLcBGAs/s1600/maxresdefault.jpg"

class Home extends Component {

  constructor(props){
    super(props)

    this.headerSentinel = React.createRef()
    this.subheaderSentinel = React.createRef()

    this.state = {
      fixed: false
    }

    this.handlerObserver = this.handlerObserver.bind(this)
    this.observer = new IntersectionObserver(this.handlerObserver)
  }

  componentDidMount() {
    this.observer.observe(this.headerSentinel.current)
    // this.observer.observe(this.subheaderSentinel.current)
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  handlerObserver(entrys) {
    console.log(entrys)
    const { fixed } = this.state
    entrys.forEach( entry => {
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
    })
  }

  render() {
    return(
      <Layout>
        <Sentinel className={s.sentinel} sentinelref={this.headerSentinel}/>
        <Header fixed={this.state.fixed} />
        <Banner bg={img_url} title="Dungeon ni Deai o Motomeru no wa Machigatte Iru Darou ka" />
        <Highlight />
        <main className={s.wrapper} >
          <h3 ref={this.subheaderSentinel} >Ápenas um teste...</h3>
        </main>
      </Layout>
    )
  }
}

export default Home