import React, { Component } from "react";
import { GalleryImage, ModalView } from "./../styles";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  openModal = () => {
    this.setState({
      clicked: true
    });
  };

  closeModal = () => {
    this.setState({
      clicked: false
    });
  };

  render() {
    const { alt, imgUrl } = this.props;

    return (
      <GalleryImage>
        <figure>
          <img src={imgUrl} alt={alt} onClick={this.openModal} />
        </figure>
        {this.state.clicked && (
          <ModalView onClick={this.closeModal}>
            <div className="modal__overlay">
              <div className="modal__content">
                <img className="modal__content--img" src={imgUrl} alt={alt} />
              </div>
            </div>
          </ModalView>
        )}
      </GalleryImage>
    );
  }
}

export default Modal;
