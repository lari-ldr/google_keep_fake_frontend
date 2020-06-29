import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMinus, faSave } from '@fortawesome/free-solid-svg-icons';
import DeleteItemForm from './DeleteItemForm.js';
import axios from 'axios';
import './App.css';

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
            itemsToShow: 140,
            expanded: false
        }
        this.handleChangeToDelete = this.handleChangeToDelete.bind(this)
        this.handleSubmitToDelete = this.handleSubmitToDelete.bind(this)
        this.handleChangeEdit = this.handleChangeEdit.bind(this)
        this.editAviso = this.editAviso.bind(this)
        this.handleSubmitEditMode = this.handleSubmitEditMode.bind(this)
        this.renderAvisoNormal = this.renderAvisoNormal.bind(this)
        this.renderAvisoEditingMode = this.renderAvisoEditingMode.bind(this)
        this.showMore = this.showMore.bind(this)
        // this.removeComment = this.removeComment.bind(this)
    }

    showMore(){
        console.log("You clickedn in the less more button")
        this.state.itemsToShow === 140 ? (
            this.setState({itemsToShow: this.state.mensagem.length, expanded: true})
        ) : (
            this.setState({itemsToShow: 140, expanded: false})
        )

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
            // console.log(res)
            // console.log(res.data)
        })

        // console.log("this is will remove the aviso: " + this.state.id)
        this.props.deleteFromApp(this.props.index)
    }

    handleChangeEdit(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        console.log(value)
    }

    editAviso(){
        console.log("OMG YOU CLICKED ON ME, HOW DARE YOU?! O.O ")
        this.setState({
            editing: true
        })
    }

    handleSubmitEditMode(event){
        this.setState({
            editing: false
        })
        const id = this.state.id
        event.preventDefault()
        axios.put(`http://localhost:9000/index/${id}`, {
            nomedogrupo: this.state.nomedogrupo,
            assunto: this.state.assunto,
            mensagem: this.state.mensagem,
            intervalo: this.state.intervalo
        })
        .then(response =>{
            response.data={
                nomedogrupo: this.state.nomedogrupo,
                assunto: this.state.assunto,
                mensagem: this.state.mensagem,
                intervalo: this.state.intervalo
            }
        })
    }

    renderAvisoNormal(){
          const editar = <FontAwesomeIcon icon={faEdit} />;
          const excluir = <FontAwesomeIcon icon={faTrashAlt} />;
          const more = <FontAwesomeIcon icon={faPlus}/>;
          const less = <FontAwesomeIcon icon={faMinus}/>

          const showMessage = this.state.expanded ? less : more

          const mensagem = this.state.mensagem.slice(0, this.state.itemsToShow)

          return(
              <div  key={this.state.id} className="Side-container">
              <ul className="Side-card">
              <li>Nome do Grupo: {this.state.nomedogrupo}</li>
              <li>Sobre: {this.state.assunto}</li>
              {/* <li>{this.state.mensagem}</li> */}
              <li>{mensagem}<a className="ShowMessage" onClick={this.showMore}>{showMessage}</a></li>
              <li>Mandar mensagem a cada {this.state.intervalo} minuto</li>
              </ul>
  
  {/* DELETE FORM */}
  {/* <DeleteItemForm id={this.state.id} deleteFromApp={this.removeComment}/> */}
      <form onClick={this.handleSubmitToDelete}>
          <label className="Delete">{excluir}
              <input className="InputDelete" type="submit" name="id" value={this.state.id} onChange={this.handleChangeToDelete} />
          </label>
      </form>
  {/* END OF THE DELETE FORM */}

  {/* EDIT BUTTON */}
          <button className="Edit" onClick={this.editAviso}>{editar}</button>
{/* EDIT BUTTON END */}

      </div>
          )
    }


    renderAvisoEditingMode(){
        // console.log(this.state.editing)
                  const save = <FontAwesomeIcon icon={faSave} />;

                  const styles = {
                      width: "225px", height: "200px"
                  }
                  
                  return(
                    <div className="Side-container">
                    <form key={this.state.id} onSubmit={this.handleSubmitEditMode} className="Side-card">
                    <label>
                    <input className="EditTextInput" type="text" name="nomedogrupo" defaultValue={this.state.nomedogrupo} onChange={this.handleChangeEdit}/>
                    </label>
    
                    <label>
                    <input className="EditTextInput" type="text" name="assunto" defaultValue={this.state.assunto} onChange={this.handleChangeEdit} />
                    </label>
    
                    <label>
                    <textarea name="mensagem" defaultValue={this.state.mensagem} style={styles} rows="10" cols="10" onChange={this.handleChangeEdit}/>
                    </label>
    
                    <label>A mensagem deve ser enviada a cada:</label>
                    <select name="intervalo" defaultValue={this.state.intervalo} onChange={this.handleChangeEdit} >
                        <option value="0">Minutos</option>
                        <option value="60000">1 minuto</option>
                    </select>
                  <button className="Save">{save}</button>
                </form>
                </div>
          
                  )
    }


    render(){

        const switchNormalToEditMode = this.state.editing ? this.renderAvisoEditingMode() : this.renderAvisoNormal()

        return(
            switchNormalToEditMode
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