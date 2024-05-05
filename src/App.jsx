import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {
   state = {
      advice : ""
   }
   getAdvice = () => {
      axios.get("	https://api.adviceslip.com/advice")
      .then(res => {
         let {advice} = res.data.slip
         this.setState({advice})
      })
      .catch(err => console.log(err))
   }
   componentDidMount(){
      this.getAdvice()
   }
   render() {
      let { advice } = this.state
      return (
         <section className="advice">
            <div className="content">
               <h1>{advice}</h1>
               <button onClick={this.getAdvice}>Give me advice!</button>
            </div>
         </section>
      )
   }
}
