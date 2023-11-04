import React, { Component } from 'react';
import css from "./Modal.module.css"
// import { StyledModal } from './Styled';

export class Modal extends Component {
  // state = {
  //   counter: 1,
  // };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    // document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    // document.body.style.overflow = 'auto';
  }

  // handleIncrementProduct = () => {
  //   this.setState(prevState => ({ counter: prevState.counter + 1 }));
  // };

  handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
    <div className={css.Overlay} onClick={this.handleOverayClick}>
  <div className={css.Modal}>
    <img src= {this.props.img} alt="" />
  </div>
</div>
      // <StyledModal onClick={this.handleOverayClick}>
      //   <div className="modal">
      //     <button onClick={this.props.closeModal} className="closeBtn">
      //       ❌
      //     </button>
      //     <h2>Product Details</h2>
      //     <div>
      //       <h3>Title: {this.props.modalData.title}</h3>
      //       <p>Price: {this.props.modalData.price}$</p>
      //       <p>Discount: {this.props.modalData.discount}$</p>
      //       <button onClick={this.handleIncrementProduct}>
      //         Add product: {this.state.counter}
      //       </button>
      //     </div>
      //   </div>
      // </StyledModal>
    );
  }
}