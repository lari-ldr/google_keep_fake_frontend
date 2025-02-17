import React from 'react';
import axios from 'axios';
// import {createBrowserHistory} from 'history';
// import {locationToRoute} from '../router/ultils';

// export const history = createBrowserHistory();
// export const NotaContext = React.createContext({
//     route: locationToRoute(history.location),
// })

export const NotaContext = React.createContext();

class NotaProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      noteSettings: [],
      notesSearch: [],
      labels: [],
      // notesLabels: [],
      isLoaded: false,
      isClicked: false,
      isEmpty: true,
      isEditing: false,
      isSearchInputClicked: false,
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/index`).then((response) => {
      this.setState({
        data: response.data,
        isLoaded: true,
      });
    });
    axios.get(`http://localhost:9000/settings`).then((response) => {
      this.setState({
        noteSettings: response.data,
        isLoaded: true,
      });
    });
    axios.get(`http://localhost:9000/labels`).then((response) => {
      this.setState({
        labels: response.data,
        isLoaded: true,
      });
    });
  }

  saveNote = (newNote) => {
    const id = this.state.data.length + 1;
    // const CancelToken = axios.CancelToken;
    // const source = CancelToken.source();
    // const isEmptyCancel = this.state.isEmpty ? source.token : '';

    axios
      .post(
        `http://localhost:9000/index/${id}`,
        {
          id: this.state.data.length + 1,
          title: newNote.title,
          content: newNote.content,
        }
        // {CancelToken: isEmptyCancel}
      )
      .then((response) => {
        response.data = {
          id: this.state.data.length + 1,
          title: newNote.title,
          content: newNote.content,
        };
      });
    this.setState({ data: [...this.state.data, newNote] });
    // source.cancel('Operation canceled by the user')
    // this.state.isEmpty ? console.log("Operation canceled") : console.log("item added frontend")
  };

  saveNotesettings = (newNote) => {
    const id = this.state.data.length + 1;

    axios
      .post(`http://localhost:9000/settings/${id}`, {
        note_id: this.state.data.length + 1,
        background_color: newNote.background_color,
        is_archived: newNote.is_archived,
        is_pinned: newNote.is_pinned,
      })
      .then((response) => {
        response.data = {
          note_id: this.state.data.length + 1,
          background_color: newNote.background_color,
          is_archived: newNote.is_archived,
          is_pinned: newNote.is_pinned,
        };
      });

    this.setState({ data: [...this.state.data, newNote] });
  };

  editNote = (noteEdited) => {
    const id = noteEdited.id;
    axios
      .put(`http://localhost:9000/index/${id}`, {
        id: noteEdited.id,
        title: noteEdited.title,
        content: noteEdited.content,
      })
      .then((response) => {
        response.data = {
          id: noteEdited.id,
          title: noteEdited.title,
          content: noteEdited.content,
        };
      });
    this.setState({ data: [...this.state.data] });
    const teste = this.state.data.map((el) =>
      el.id === id ? Object.assign({}, el, noteEdited) : el
    );
    console.log(teste);
    this.setState(
      {
        data: teste,
      },
      () => {
        console.log(this.state.data);
      }
    );
  };

  // delete a note
  deleteNote = (noteDeleted) => {
    const id = noteDeleted.id;
    axios.delete(`http://localhost:9000/index/${id}`).then((response) => {
      console.log(response);
    });

    this.setState({ data: [...this.state.data] });

    const removedItem = this.state.data.filter((delItem) => {
      return delItem.id !== id;
    });
    this.setState({ data: removedItem });
    console.log(this.state.data);
    console.log(removedItem);
  };

  searchNote = (search_query) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get(
        `http://localhost:9000/search`,
        { params: { search_query: search_query } },
        { CancelToken: source.token }
      )
      .then((response) =>
        response.data.length !== 0
          ? this.setState({ notesSearch: response.data })
          : null
      )
      .catch((err) => {
        console.log(err);
      });
    source.cancel('Operation canceled by the user');
  };

  saveNewLabel = (newLabel) => {
    const id = this.state.labels.length + 1;

    axios
      .post(`http://localhost:9000/labels/${id}`, {
        id: this.state.labels.length + 1,
        labels: newLabel.labels,
      })
      .then((response) => {
        response.data = {
          id: this.state.labels.length + 1,
          labels: newLabel.labels,
        };
      });
    this.setState({ labels: [...this.state.labels, newLabel] });
  };

  putEditLabel = (edLabel) => {
    const id = edLabel.id;
    axios
      .put(`http://localhost:9000/labels/${id}`, {
        id: edLabel.id,
        labels: edLabel.labels,
      })
      .then((response) => {
        response.data = {
          id: edLabel.id,
          labels: edLabel.labels,
        };
      });
    this.setState({ labels: [...this.state.labels] });
    const teste = this.state.labels.map((el) =>
      el.id === id ? Object.assign({}, el, edLabel) : el
    );
    console.log(teste);
    this.setState(
      {
        labels: teste,
      },
      () => {
        console.log(this.state.labels);
      }
    );
  };

  deleteLabel = (labelDeleted) => {
    const id = labelDeleted.id;
    axios.delete(`http://localhost:9000/labels/${id}`).then((response) => {
      console.log(response);
    });

    this.setState({ labels: [...this.state.labels] });

    const removedLabel = this.state.labels.filter((delLabel) => {
      return delLabel.id !== id;
    });
    this.setState({ labels: removedLabel });
  };

  handleFormVisibilityOutside = () => {
    this.setState({ isClicked: false });
  };

  handleFormVisibilityInside = () => {
    this.setState({ isClicked: true });
  };

  handleEditMode = () => {
    this.setState({ isEditing: false });
  };

  handleClickSearch = () => {
    // setIsSearchInputClicked(!isSearchInputClicked)
    this.setState({ isSearchInputClicked: true });
  };

  handleCloseSearch = () => {
    this.setState({ isSearchInputClicked: false });
  };

  render() {
    return (
      // <></>
      <NotaContext.Provider
        value={{
          state: this.state,
          handleFormVisibilityOutside: this.handleFormVisibilityOutside,
          handleFormVisibilityInside: this.handleFormVisibilityInside,
          saveNote: this.saveNote,
          saveNotesettings: this.saveNotesettings,
          editNote: this.editNote,
          deleteNote: this.deleteNote,
          searchNote: this.searchNote,
          saveNewLabel: this.saveNewLabel,
          putEditLabel: this.putEditLabel,
          deleteLabel: this.deleteLabel,
          editingModeTeste: this.editingModeTeste,
          handleEditMode: this.handleEditMode,
          handleClickSearch: this.handleClickSearch,
          handleCloseSearch: this.handleCloseSearch,
        }}
      >
        {this.props.children}
      </NotaContext.Provider>
    );
  }
}

export default NotaProvider;
