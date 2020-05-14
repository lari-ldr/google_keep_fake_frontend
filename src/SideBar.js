import React, {Component} from 'react';
import axios from 'axios';
import Item from './Item.js';
import './App.css';

class SideBar extends React.Component{
    constructor(){
        super()
        this.state ={
            results: [],
        }
    }
  
    componentDidMount(){
        const url = `http://localhost:9000/index`
        axios.get(url)
        .then(res =>{
            this.setState({
                results: res.data
            })
        })
    }
  
    render(){
  
        const results = this.state.results;
        const allResults = results.map((item)=>{
  
            return(
                <Item key={item.id} aviso={item} />
            )
        })
  
        return (
            <div className="Side-nav">
            <h1>Avisos</h1>
           
            {allResults}
        </div>
        )
    }
  }


export default SideBar;
