import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Item from './Item.js';
import Main from './Main.js';
import App from './App.js';
import axios from 'axios';
import './App.css';

class DeleteItemForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id
        }
        this.handleChangeToDelete = this.handleChangeToDelete.bind(this)
        this.handleSubmitToDelete = this.handleSubmitToDelete.bind(this)
    }

    handleChangeToDelete(event){
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmitToDelete(event){
        const id = this.props.id
        console.log(this.props.id)
        event.preventDefault();
        axios.delete(`http://localhost:9000/index/${id}`)
        .then(res => {
            // console.log(res)
            // console.log(res.data)
        })

        // console.log("this is will remove the aviso: " + this.state.id)
        this.props.deleteFromApp(this.state.lula)
        // console.log(this.state.index)
    }

    render(){
// console.log(this.props.id)
        const excluir = <FontAwesomeIcon icon={faTrashAlt} />;

        return(
            <form onClick={this.handleSubmitToDelete}>
            <label className="Delete">{excluir}
                <input className="InputDelete" type="submit" name="id" value={this.props.id} onChange={this.handleChangeToDelete} />
            </label>
        </form>
        )

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

  export default DeleteItemForm;