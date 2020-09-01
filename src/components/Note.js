import React from 'react';
import axios from 'axios';
import IconsHead from './ButtonsAndIcons/IconsHead.js';
import IconsBottom from './ButtonsAndIcons/IconsBottom.js';
// import IconsEditAndNewForms from './ButtonsAndIcons/IconsEditAndNewForms.js';
// import axios from 'axios';
// import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdCheck} from 'react-icons/md'
// import { FaThumbtack } from 'react-icons/fa';
import { NotaContext } from '../contexts/NotaContext';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.editingMode = this.editingMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDeleteSubmit = this.handleChangeDeleteSubmit.bind(this);
    this.state = {
      allNotesLabels: [],
      isEditing: false,
      isMoreSettings: false,
      hover: false,
    };
  }
  static contextType = NotaContext;

  componentDidMount() {
    // const context = this.context
    const id = this.props.note.id;
    axios
      .get(`http://localhost:9000/index/${id}/see_all_noteslabels`)
      .then((response) => {
        this.setState({
          allNotesLabels: response.data,
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleChangeDeleteSubmit(event) {
    event.preventDefault();
    const noteDeleted = this.props.note;
    const deleteRequest = this.context.deleteNote;
    deleteRequest(noteDeleted);
    this.setState({ isEditing: false });
  }

  editingMode() {
    const id = this.props.note.id;
    this.props.componentEditMode(id);
  }

  render() {
    const allNL = this.state.allNotesLabels.map((nl) => {
      return <li key={nl.id}>{nl.labels}</li>;
    });
    return (
      <>
        <div
          id={this.props.note.id}
          // key={this.state.id}
          className={`Item`}
          style={{ backgroundColor: this.props.note.background_color }}
        >
          <IconsHead pin={this.props.note.is_pinned}></IconsHead>
          <div onClick={this.editingMode}>
            <ul className='ItemContent'>
              <li className='ItemTitle Both'>{this.props.note.title}</li>
              <li className='ItemMessage Both'>{this.props.note.content}</li>
            </ul>
            <ul className='ItemLabels'>{allNL}</ul>
          </div>

          <IconsBottom
            onClick={this.handleChangeDeleteSubmit}
            onChange={this.handleChange}
            value={this.props.note.id}
          ></IconsBottom>
        </div>
      </>
    );
  }
}

export default Note;
