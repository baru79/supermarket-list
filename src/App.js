import React, { Component } from 'react';

// Components
import Counter from './components/Counter/Counter';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import Spinner from './components/Spinner/Spinner';

// Functions
import API from './API/api';

// Styles
import './App.css';
import './components/Modal/Modal.css';

class App extends Component {

  state = {
    isFetching: true,
    showModal: false,
    inputName: '',
    data: [],
  }

  componentDidMount = () => {
    API.getAllItems().then(response => {
      if (response.ok) {
        this.setState({ data: response.results, isFetching: false })
      }
    });
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  addItem = async () => {
    const { inputName } = this.state;
    this.setState({ isFetching: true, showModal: false });
    await API.addItem(inputName).then(response => {
      if (response.ok) {
        const { data } = this.state;
        this.setState({ showModal: false, inputName: '', data: [...data, { ...response.results }], isFetching: false })
      }
    });
  }

  handleInput = event => {
    const { value } = event.target;
    this.setState({ inputName: value });
  }

  handleRemove = id => {
    this.setState({ isFetching: true });
    API.removeItem(id).then(response => {
      if (response.ok) {
        const { data } = this.state;
        const newData = data.filter(item => item.id !== response.results);
        this.setState({ data: newData, isFetching: false });
      }
    });
  }

  render() {
    const { data, showModal, inputName, isFetching } = this.state;
    return (
      <div className="container">
        <div className="title">Supermarket List</div>
        <Counter counterItems={data.length} />
        <div className="containerList">
          {isFetching ? <Spinner /> :
            data.length > 0 ? <List data={data} handleRemove={this.handleRemove} /> : <div className="listEmptyMessage">List is empty</div>}
        </div>
        <button type="button" className="addButton" onClick={() => this.showModal()}>Add Item</button>
        {showModal ? (
          <Modal>
            <div className="modal">
              <p className="modal-title">Add Item</p>
              <input className="modal-inputItem" onChange={(event) => this.handleInput(event)} />
              <div className="modal-buttons">
                <button type="button" onClick={() => this.setState({ showModal: false })}>
                  Cancel
                  </button>
                <button type="button" className="modal-addButton" onClick={() => this.addItem()} disabled={inputName === '' || isFetching}>
                  Add
                  </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default App;