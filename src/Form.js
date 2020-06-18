import React from 'react';
import axios from 'axios';
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
            isEmpty: true
        }
        // this.state.nomedogrupo sempre vai começar como true, pq esta vazio
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value,
            isEmpty: false
        })
    }
// MUDAR O POST REQUEST PARA O APP FILE, PEGAR AS INFORMAÇÕES AQUI MANDAR PRA LA E
// FAZER O POST REQUEST
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
        // console.log(this.state.criadoem)
        const emptyForm = this.state.isEmpty === false ? 'required' : ''

        console.log(this.state.isEmpty)

        const messageStyle = {width: "380px", height: "200px"}

        return(
            // <main className="App-main">
            <div class="Form">
            <form onSubmit={this.handleSubmit}>
                <label>
                <input 
                    type="text"
                    name="nomedogrupo"
                    value={this.state.nomedogrupo}
                    required={emptyForm}
                    title="colocar explicações"
                    placeholder="Nome do Grupo"
                    onChange={this.handleChange}
                    class="Title"
                />
                </label>

                {/* <label>Assunto:</label>
                <input type="text" name="assunto" value={this.state.assunto} required={emptyForm} title="colocar explicações" placeholder="Assunto" onChange={this.handleChange} /> */}

                <label>
                <textarea 
                    name="mensagem"
                    value={this.state.mensagem}
                    required={emptyForm}
                    style={messageStyle}
                    rows="10"
                    cols="10"
                    title="colocar explicações"
                    placeholder="Mensagem"
                    onChange={this.handleChange}
                />
                </label>

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
                <button type="submit">Send me</button>
            </form>
        {/* //   </main> */}
        </div>
        )
    }

}

export default Form;
// FRONTEND
// MANDAR AS INFOS PARA A DATABASE
// ====================================================================================
// sobre as horas:
// eu preciso que a função corra conforme determinado pela pessoa. Ex, J quer q ele seja avisado a cada 1 horas
// O q eu preciso pra fazer isso:
// pegar a hora atual e acrescentar 1 hora e assim sucessivamente
// Passos: (trocar para minutos pra ser mais facil de ver se funciona)
// pegar a hora que o aviso foi feito
// contar 1 hora
// disparar o aviso
// repetir o processo
