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
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }
// MUDAR O POST REQUEST PARA O APP FILE, PEGAR AS INFORMAÇÕES AQUI MANDAR PRA LA E
// FAZER O POST REQUEST
    handleSubmit(event){
        const id = this.state.id
        console.log(id)
        event.preventDefault();
        // console.log(this.state)
        axios.post(`http://localhost:9000/index/${id}`, {
            params:{id},
            nomedogrupo: this.state.nomedogrupo,
            assunto: this.state.assunto,
            mensagem: this.state.mensagem,
            intervalo: this.state.intervalo
        })
        .then(response =>{
            response.data ={
                id: {id},
                nomedogrupo: this.state.nomedogrupo,
                assunto: this.state.assunto,
                mensagem: this.state.mensagem,
                intervalo: this.state.intervalo
            }
            // console.log(response);
            // console.log(response.data);
            // const {teste} = this.state
            // teste.push(response.data);
            // this.setState({teste})
            // console.log(response);
            // console.log(response.data);
            // const teste = response.data   
            // this.props.addNewItem(teste)
            
            const refresh = "I am just a trigger"
            this.props.refreshAvisoAfterPostRequest(refresh)
        })
        // .catch( error =>{
        //     console.log(error.response.data)
        // })
        // console.log(this.state) //obj obj
        // this.props.addNewItem(teste)
      
    }


    render(){
        // console.log(this.state.criadoem)
        return(
            <main className="App-main">
            <h1>Form goes here</h1>

            <form onSubmit={this.handleSubmit}>
                <label>Nome do Grupo:</label>
                <input type="text" name="nomedogrupo" value={this.state.nomedogrupo} title="colocar explicações" placeholder="Nome do Grupo" onChange={this.handleChange} />

                <label>Assunto:</label>
                <input type="text" name="assunto" value={this.state.assunto} title="colocar explicações" placeholder="Assunto" onChange={this.handleChange} />

                <label>Mensagem:</label>
                <textarea name="mensagem" value={this.state.mensagem} rows="10" cols="10" title="colocar explicações" placeholder="Mensagem" onChange={this.handleChange} />

                <label>A mensagem deve ser enviada a cada:</label>
                <select name="intervalo" value={this.state.intervalo} onChange={this.handleChange}>
                    <option value="0">Minutos</option>
                    <option value="60000">1 minuto</option>
                </select>
                <button type="submit">Send me</button>
            </form>
          </main>
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
