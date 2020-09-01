import React from 'react';
import Masonry from 'react-masonry-component';
import Note from './Note.js';
import EditNote from './EditNote.js';
import { NotaContext } from '../contexts/NotaContext';

class Pinned extends React.Component {
  constructor(props) {
    super(props);
    this.componentEditMode = this.componentEditMode.bind(this);
    this.componentEditModeClose = this.componentEditModeClose.bind(this);
    this.state = {
      editComponent: '',
    };
  }
  static contextType = NotaContext;

  //   componentDidMount(){
  //     const context = this.context
  //     // const state = this.context.state.isEditing
  //     // console.log(context.state.isEditing)
  //   }

  componentEditMode(id) {
    return this.setState({ editComponent: id });
  }

  componentEditModeClose(isEditing) {
    return this.setState({ editComponent: isEditing });
  }

  render() {
    const allNotes = this.context.state.data.map((note) => {
      if (note.is_pinned === true) {
        return (
          <>
            <Note
              componentEditMode={this.componentEditMode}
              //    key={note.id}
              indexID={note.id}
              isPinned={note.is_pinned}
              note={note}
            />
          </>
        );
      } else {
        return <p></p>;
      }
    });

    const allNotesEdit = this.context.state.data.map((note) => {
      if (note.id === this.state.editComponent) {
        return (
          <EditNote
            componentEditModeClose={this.componentEditModeClose}
            // key={note.id}
            indexID={note.id}
            note={note}
          ></EditNote>
        );
      } else {
        if (this.state.editComponent === null) {
          //   return null;
          return <p></p>;
        }
      }
      return <p></p>;
    });

    return (
      // <></>
      <div style={{ paddingLeft: '300px' }}>
        <h4 className='NotesAreaTitle'>Pinned</h4>
        <Masonry>{allNotes}</Masonry>
        {allNotesEdit}
      </div>
    );
  }
}
export default Pinned;
