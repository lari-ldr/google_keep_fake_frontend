import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            id: Number(),
            nomedogrupo: '',
            assunto: '',
            mensagem: '',
            intervalo: Number(),
            isEmpty: true,
            isClicked: false,
        }
        // this.state.nomedogrupo sempre vai começar como true, pq esta vazio
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        console.log(event)
        this.setState({
            isClicked: true
        })
        this.props.teste(event)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value,
            isEmpty: false,
        })
    }


handleSubmit(event){
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source()

    const id = this.state.id
    console.log(id)
    event.preventDefault();
    // aqui temos que verificar se eles continuam vazios (true) se sim, não pode envirar o request
 const teste = this.state.isEmpty ? source.token : ''
        axios.post(`http://localhost:9000/index/${id}`, {
            params:{id},
            nomedogrupo: this.state.nomedogrupo,
            assunto: this.state.assunto,
            mensagem: this.state.mensagem,
            intervalo: this.state.intervalo
        }, {
            cancelToken: teste
        })
        .then(response =>{
            response.data ={
                id: {id},
                nomedogrupo: this.state.nomedogrupo,
                assunto: this.state.assunto,
                mensagem: this.state.mensagem,
                intervalo: this.state.intervalo
            }

            const refresh = "I am just a trigger"
            this.props.refreshAvisoAfterPostRequest(refresh)
        })
        source.cancel("Operation canceled by the user")
        this.state.isEmpty ? console.log("Operation canceled by the user") : console.log("item succesfully added")
        this.setState({
            nomedogrupo: '',
            assunto: '',
            mensagem: '',
            intervalo: Number(),
            isEmpty: true
        })
}


    render(){
        const send = <FontAwesomeIcon icon={faSave}/>
        // console.log(this.state.isClicked)
        const emptyForm = this.state.isEmpty === false ? 'required' : ''
        // const secretForm = this.state.isClicked === false ? display none : ''
        // console.log(this.props.teste)
        // console.log(this.state.isEmpty)


        return(
            // <main className="App-main">
            <div className={`Form ${this.state.isClicked === false ? 'HideForm' : ''}`} >
            <form onSubmit={this.handleSubmit}>
                {/* <label> */}
                <input 
                    type="text"
                    name="nomedogrupo"
                    value={this.state.nomedogrupo}
                    required={emptyForm}
                    title="colocar explicações"
                    placeholder="Title"
                    onChange={this.handleChange}
                    className={`Title ${this.state.isClicked === false ? 'Collapse' : ''}`}
                />
                {/* </label> */}

                {/* <label>Assunto:</label>
                <input type="text" name="assunto" value={this.state.assunto} required={emptyForm} title="colocar explicações" placeholder="Assunto" onChange={this.handleChange} /> */}

                {/* <label className="FormLabel"> */}
                <textarea 
                    className={`NoteItself ${this.state.isClicked === false ? 'HideForm' : ''}`}
                    name="mensagem"
                    value={this.state.mensagem}
                    required={emptyForm}
                    // style={messageStyle}
                    rows="10"
                    cols="10"
                    title="colocar explicações"
                    placeholder="Take a note..."
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                />
                {/* </label> */}

                {/* <div 
                    class="NoteItself"
                    contentEditable="true"
                    name="mensagem"
                    value={this.state.mensagem}
                    required={emptyForm}
                    style={messageStyle}
                    rows="10"
                    cols="10"
                    title="colocar explicações"
                    placeholder="Mensagem"
                    onChange={this.handleChange}></div> */}

                {/* <label>A mensagem deve ser enviada a cada:</label>
                <select name="intervalo" value={this.state.intervalo} required={emptyForm} onChange={this.handleChange}>
                    <option value="0">Minutos</option>
                    <option value="60000">1 minuto</option>
                </select> */}
                <button className={`Send ${this.state.isClicked === false ? 'Collapse' : ''}`} type="submit">{send}</button>
            </form>
        {/* //   </main> */}
        </div>
        )
    }

}

export default Form;

