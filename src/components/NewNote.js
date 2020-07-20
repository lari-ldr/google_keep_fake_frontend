import React from 'react';
import axios from 'axios';

class NewNote extends React.Component{
    constructor(props){
        super(props)
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleChangeSubmitInput = this.handleChangeSubmitInput.bind(this)
        this.clickForm = this.clickForm.bind(this)
        this.state = {
          id: Number(),
          title: '',
          content: '',
          isEmpty: true,
          componentShouldUpdate: false
        }
    }
  
    clickForm(event){
      const id = event.currentTarget.id
      if(id !== "NoteForm"){
        this.props.clickOutside()
      }
      this.props.clickInside()
    }
  
    handleChangeInput(event){
        const {name, value} = event.target
        this.setState({
          [name]: value,
          isEmpty: false
        })
    }
  
    handleChangeSubmitInput(event){
      event.preventDefault();
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const id = this.state.id
        const isEmpty = this.state.isEmpty
        const isEmptyCancel = isEmpty ? source.token : ''
        axios.post(`http://localhost:9000/index/${id}`, {
          params:{id},
          title: this.state.title,
          content: this.state.content
        }, {
          cancelToken: isEmptyCancel
        })
        .then( response =>{
          response.data = {
            params:{id},
            title: this.state.title,
            content: this.state.content
          }
          this.setState({
            componentShouldUpdate: true,
          }, ()=>{
            const updateComponent = this.state.componentShouldUpdate
            this.props.onFormInput(updateComponent)
          })
        })
        source.cancel('Operation canceled by the user')
        isEmpty ? console.log("Operation canceled") : console.log("Item added frontend")
        this.setState({
          title: '',
          content: '',
          isEmpty: true
        })
    }
  
    render(){
      const isClicked = this.props.isClicked
  
        return(
          <div id="NoteForm" className={`FormInput ${isClicked === false ? 'HideForm' : ''}`} onClick={this.clickForm} >
          <form className="NewNote" onSubmit={this.handleChangeSubmitInput}>
                  {/* <label> */}
                    <input 
                      type="text"
                      name="title"
                      value={this.state.title}
                      title="colocar explicações"
                      placeholder="Title"
                      onChange={this.handleChangeInput}
                      className={`Title ${isClicked === false ? 'None' : ''}`}
                  />
                  {/* </label> */}
  
                  {/* <label className="FormLabel"> */}
                  <textarea 
                      className={`NoteItself ${isClicked === false ? 'HideForm' : ''}`}
                      name="content"
                      value={this.state.content}
                      rows="10"
                      cols="10"
                      title="colocar explicações"
                      placeholder="Take a note..."
                      onChange={this.handleChangeInput}
                  />
                  {/* </label> */}
                  <button 
                    className={`Send ${isClicked === false ? 'None' : ''}`}
                    type="submit">
                      {this.props.send}
                    </button>
              </form>
            </div>
        )
    }
  }

  export default NewNote;