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
    //   this.refreshAvisoAfterSendPostRequest = this.refreshAvisoAfterSendPostRequest.bind(this)
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


removeComment(index){
  // console.log("removing comments: " + index)
  // console.log(this.state.results)
  console.log(this.state.results)
  const removedItem = this.state.results.filter(deletedItem => {return deletedItem.id !== index})
  // const removedItem = this.state.results.filter(deletedItem => {return deletedItem.id !== index})

  this.setState({
      results: removedItem
  })

  console.log(removedItem)

}

  render(){

    const results = this.state.results;
    const allResults = results.map((item)=>{

          return(
              <Item key={item.id} index={item.id} aviso={item} deleteFromApp={this.removeComment} />
              // <Item key={item.id} index={item.id} aviso={item}/>
          )
      })

      return (

          <main className="App-main" onClick={this.teste}>
              <h1>Notes</h1>
      
             {allResults}
             </main>
        

      )
  }
}

export default Main;
