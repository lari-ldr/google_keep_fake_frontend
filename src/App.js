import React from 'react';
import axios from 'axios';

import './App.css';
import Item from './Item.js';
import Form from './Form.js';

class App extends React.Component{
  constructor(){
      super()
      this.state ={
          results: [],
          isLoaded: false,
          isClicked: true
      }
      this.removeComment = this.removeComment.bind(this)
      // this.addItem = this.addItem.bind(this)
      this.refreshAvisoAfterSendPostRequest = this.refreshAvisoAfterSendPostRequest.bind(this)
      this.teste = this.teste.bind(this)
  }

  teste(event){
    // console.log(event.isClicked)
    // this.setState({
    //   isClicked: false
    // })
  }

  componentDidMount(){
      const url = `http://localhost:9000/index`
      axios.get(url)
      .then(res =>{
          this.setState({
              results: res.data,
              isLoaded: true
          })
          // console.log(res.data)
      })
  }

//   addItem(teste){
//       console.log(teste) // infos vindas do form em forma de object
//       const abc = this.state.results //todos os resultados vindo da db do backend
//       const final = abc.concat(teste) // concat coloca o teste dentro do state.results
//       console.log(abc)
//       console.log(final)
//       // fazer o update do resultado com o final para mostrar na pagina
//       this.setState({
//         results: final
//       })
// // funciona, mas há o problema do ID que não aparece ainda
//   }

  refreshAvisoAfterSendPostRequest(refresh){
    console.log(refresh)
    const url = `http://localhost:9000/index`
    axios.get(url)
    .then(res =>{
        this.setState({
            results: res.data
        })
    })
  }

  removeComment(index){
    console.log("removing comments: " + index)
    const removedItem = this.state.results.filter(deletedItem => {return deletedItem.id !== index})

    this.setState({
        results: removedItem
    })

    console.log(removedItem)

  }

  render(){

    // console.log(this.state.isClicked)
    const url = window.location.href.toString()
// console.log(url)

      const results = this.state.results;
      // console.log("green eyes")
      // console.log(results) //array
      const allResults = results.map((item)=>{

          return(
              <Item key={item.id} index={item.id} aviso={item} deleteFromApp={this.removeComment} />
            // <Item key={item.id} aviso={item} />
          )
      })

      return (
        <div className="App" onClick={this.teste}>
          <Form teste={this.teste} refreshAvisoAfterPostRequest={this.refreshAvisoAfterSendPostRequest} />
          {/* <div className="Side-nav"> */}
          <main className="App-main">
              <h1>Avisos</h1>
              {/* <h2>{load}</h2> */}
              <h2 style={{display: this.state.isLoaded ? "none" : "block"}}>Loading... wait a minute</h2>
             {allResults}
             </main>
          {/* </div> */}
        {/* <Form addNewItem={this.addItem} /> */}
        
      </div>
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

export default App;
