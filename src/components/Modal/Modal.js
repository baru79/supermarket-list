import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = 'modal-overlay';
  }

  componentDidMount = () => {
    modalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    modalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
