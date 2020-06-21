import React from 'react';
import axios from 'axios';
import './App.css';
import Form from './Form.js';

import Item from './Item.js';

class Main extends React.Component{
  constructor(props){
      super(props)
      this.state ={
          results: [],
          isLoaded: false,
          isClickedAll: true
      }
      this.removeComment = this.removeComment.bind(this)
      // this.addItem = this.addItem.bind(this)
    //   this.refreshAvisoAfterSendPostRequest = this.refreshAvisoAfterSendPostRequest.bind(this)
      this.teste = this.teste.bind(this)
      this.callThis = this.callThis.bind(this)
    //   this.pop = this.pop.bind(this)
  }

//   pop(){
//       this.props.singer()
//       this.refreshAvisoAfterSendPostRequest()
      
//   }

  teste(isClickedState){
    // if the form is true, all the rest is false
    // if all the rest is true, the form is false
    // console.log(isClickedState)
    if(isClickedState === false){
      this.setState({
        isClickedAll: !this.state.isClickedAll
      }, ()=>{console.log(this.state.isClickedAll)})
    }
    // if( isClickedState === false){
    //   console.log("666 the number of the beast")
    //   this.setState({
    //     isClickedAll: true
    //   }, ()=>{
    //     console.log(this.state.isClickedAll)
    //   })
    // } else{
    //   console.log("Twinckle twinclke little star")
    //   this.setState({
    //     isClickedAll: false
    //   }, ()=>{
    //     console.log(this.state.isClickedAll)
    //   })
    // }
  }

//   componentDidMount(){
//       const url = `http://localhost:9000/index`
//       axios.get(url)
//       .then(res =>{
//           this.setState({
//               results: res.data,
//               isLoaded: true
//           })
//           // console.log(res.data)
//       })
//   }

//   refreshAvisoAfterSendPostRequest(){
//     console.log(this.props.singer())
//     // console.log(refresh)
//     const url = `http://localhost:9000/index`
//     axios.get(url)
//     .then(res =>{
//         this.setState({
//             results: res.data
//         })
//     })
//   }

  removeComment(index){
    // console.log("removing comments: " + index)
    // console.log(this.state.results)
    console.log(this.props.results)
    const removedItem = this.props.results.filter(deletedItem => {return deletedItem.id !== index})
    // const removedItem = this.state.results.filter(deletedItem => {return deletedItem.id !== index})

    // this.setState({
    //     results: removedItem
    // })

    console.log(removedItem)
    this.callThis()

  }

  callThis(){
    // console.log(refresh)
    const url = `http://localhost:9000/index`
    axios.get(url)
    .then(res =>{
        this.setState({
            results: res.data
        })
    })
  }

  render(){
// console.log(this.state.results)
// console.log(this.props.results)
    // console.log(this.state.isClicked)
// const abc = this.pop()
    //   const results = this.state.results;
    const results = this.props.results;
      // console.log("green eyes")
      // console.log(results) //array
      const allResults = results.map((item)=>{

          return(
              <Item key={item.id} index={item.id} aviso={item} deleteFromApp={this.removeComment} />
            // <Item key={item.id} aviso={item} />
          )
      })

      return (

          <main className="App-main" onClick={this.teste}>
              <h1>Notes</h1>
              
              <h2 className={`${this.state.isLoaded ? 'None' : 'Block'}`} >Loading... wait a minute</h2>
      <h3>{this.props.contact.name}</h3>
             {allResults}
             </main>
        

      )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <SideBar />
//       <Form />
//     </div>
//   );
// }

export default Main;
