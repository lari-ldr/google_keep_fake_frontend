import React from 'react';
import axios from 'axios';
import './App.css';
import Form from './Form.js';
import Main from './Main.js';
import Item from './Item.js';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
        results: [],
        isLoaded: false,
        isClickedAll: true
    }
    
    // this.addItem = this.addItem.bind(this)
    this.refreshAvisoAfterSendPostRequest = this.refreshAvisoAfterSendPostRequest.bind(this)
    this.singer = this.singer.bind(this)
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

  singer(refresh){
    console.log("Lady Gaga")
    // console.log(refresh)
    
  }

  render(){
      return (
        <div className="App">
          <Form singer={this.singer} refreshAvisoAfterPostRequest={this.refreshAvisoAfterSendPostRequest} />
          <Main
          results={this.state.results}
          singer={this.singer}
          contact={
            {name: 'madonna'}
          }/>
        
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
