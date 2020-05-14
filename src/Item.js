import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './App.css';

// less more button
// setState is true because the text is suprimido
// when you clik inthe plu button -> state is false
// because the text is not suprimido anymore

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.aviso.id,
            nomedogrupo: props.aviso.nomedogrupo,
            assunto: props.aviso.assunto,
            mensagem: props.aviso.mensagem,
            intervalo: props.aviso.intervalo,
            editing: false,
            isLess: true
        }
        this.handleChangeToDelete = this.handleChangeToDelete.bind(this)
        this.handleSubmitToDelete = this.handleSubmitToDelete.bind(this)
        this.editAviso = this.editAviso.bind(this)
        this.saveAviso = this.saveAviso.bind(this)
        this.renderAvisoNormal = this.renderAvisoNormal.bind(this)
        this.renderAvisoEditingMode = this.renderAvisoEditingMode.bind(this)
        this.moreText = this.moreText.bind(this)
    }

    moreText(){
        console.log("You clickedn in the less more button")
        this.setState({
            isLess: false
        })
    }
    handleChangeToDelete(event){
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmitToDelete(event){
        const id = this.state.id
        event.preventDefault();
        axios.delete(`http://localhost:9000/index/${id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
        })

        console.log("this is will remove the aviso: " + this.state.id)
        this.props.deleteFromApp(this.props.index)
    }

    editAviso(){
        console.log("OMG YOU CLICKED ON ME, HOW DARE YOU?! O.O ")
        this.setState({
            editing: true
        })
    }

    saveAviso(){
        this.setState({
            editing: false
        })
    }

    renderAvisoNormal(){
          console.log(this.state.isLess)
          const editar = <FontAwesomeIcon icon={faEdit} />;
          const excluir = <FontAwesomeIcon icon={faTrashAlt} />;
          const more = <FontAwesomeIcon icon={faPlus}/>;
          return(
              <div  key={this.state.id} className="Side-container">
              <ul className="Side-card">
              <li>Nome do Grupo: {this.state.nomedogrupo}</li>
              <li>Sobre: {this.state.assunto}</li>
              <li>{this.state.mensagem}</li>
              <li>Mandar mensagem a cada {this.state.intervalo} minuto</li>
              </ul>
  
  {/* DELETE FORM */}
      <form onClick={this.handleSubmitToDelete}>
          <label className="Delete">{excluir}
              <input className="InputDelete" type="submit" name="id" value={this.state.id} onChange={this.handleChangeToDelete} />
          </label>
      </form>
  {/* END OF THE DELETE FORM */}
  
  {/* EDIT BUTTON */}
          <button className="Edit" onClick={this.editAviso}>{editar}</button>

          <button onClick={this.moreText}>{more}</button>
      </div>
          )
    }

    renderAvisoEditingMode(){
        // console.log(this.state.editing)
                  const editar = <FontAwesomeIcon icon={faEdit} />;
                  const excluir = <FontAwesomeIcon icon={faTrashAlt} />;
                  const more = <FontAwesomeIcon icon={faPlus}/>;
                  return(
                    <form key={this.state.id}>
                    <label>
                    <input type="text" name="nomedogrupo" defaultValue={this.state.nomedogrupo}/>
                    </label>
    
                    <label>
                    <input type="text" name="assunto" defaultValue={this.state.assunto} />
                    </label>
    
                    <label>
                    <textarea name="mensagem" defaultValue={this.state.mensagem} rows="10" cols="10"/>
                    </label>
    
                    <label>A mensagem deve ser enviada a cada:</label>
                    <select name="intervalo" defaultValue={this.state.intervalo} >
                        <option value="0">Minutos</option>
                        <option value="60000">1 minuto</option>
                    </select>
                    <button className="Salve" onClick={this.saveAviso}>Salvar</button>
                </form>
          
                  )
    }


    render(){

        const abacate = this.state.editing ? this.renderAvisoEditingMode() : this.renderAvisoNormal()

        return(
            abacate
        )
    //     if(this.state.editing){
    //         return this.renderAvisoEditingMode()
    //     } else{
    //         return this.renderAvisoNormal()
    //     }
    }


}

// function Item(props) {
//     // console.log(props.aviso)
//     const [id, setId] = useState(props.aviso.id)
//     const [aviso, setAviso] = useState(props.aviso)
//     // console.log(aviso)

//     const removeItem = (index)=>{
//         const aviso = props.aviso.filter((x,i)=> i != index)
//         setAviso(aviso)
//         console.log(aviso)
//     }
//     // const removeComment = (index)=>{
//     //     console.log(index)
//     //     const comment = props.aviso
//     //     comment.splice(index, 1);
//     //     setAviso(comment)
//     // }
    // const handleChange = (event)=>{
    //     setId(event.target.value)
    //     // console.log(setId)
    // }

    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     // axios.delete(`http://localhost:9000/index/${id}`)
    //     // .then(res => {
    //     //     console.log(res)
    //     //     console.log(res.data)
    //     // })
    // }

 

        // const edit = <FontAwesomeIcon icon={faEdit} />;
        // const excluir = <FontAwesomeIcon icon={faTrashAlt} />;
        // const more = <FontAwesomeIcon icon={faPlus}/>;
//     return (

    // <div  key={props.aviso.id} index={aviso} className="Side-container">
    // <ul className="Side-card">
    // <li>Nome do Grupo: {props.aviso.nomedogrupo}</li>
    // <li>Sobre: {props.aviso.assunto}</li>
    // <li>{props.aviso.mensagem}</li>
    // <li>Mandar mensagem a cada {props.aviso.intervalo} minuto</li>
    // </ul>

//     {/* EDIT FORM */}
//     {/* <form key={props.aviso.id}>
//         <label>
//         <input type="text" name="nomedogrupo" value={props.aviso.nomedogrupo} />
//         </label>

//         <label>
//         <input type="text" name="assunto" value={props.aviso.assunto} />
//         </label>

//         <label>
//         <textarea name="mensagem" value={props.aviso.mensagem} rows="10" cols="10" />
//         </label>

//         <label>A mensagem deve ser enviada a cada:</label>
//         <select name="intervalo" value={props.aviso.intervalo}>
//             <option value="0">Minutos</option>
//             <option value="60000">1 minuto</option>
//         </select>
//         <button type="submit">Send me</button>
//     </form> */}

    // {/* DELETE FORM */}
    // <form onClick={handleSubmit}>
    //     <label>{excluir}
    //         <input type="submit" name="id" value={props.aviso.id} onChange={handleChange} />
    //     </label>
    // </form>
    // {/* <a>{edit}</a> */}
    // {/* <a>{excluir}</a> */}
    // </div>
//     );
//   }

  export default Item;