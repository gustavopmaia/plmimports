import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Image from 'next/image';
import Link from 'next/link';

class CardCamisa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div className='card'>
        <div className='img-wrapper'>
          <a onClick={this.toggle}>
            <Image
              src={this.props.src}
              alt='Camisa'
              className='card-img-top hover-zoom card-img'
              layout='responsive'
              width={280}
              height={280}
            />
          </a>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>
              {this.props.children}
            </ModalHeader>
            <ModalBody>
              <Image
                src={this.props.src}
                alt='Camisa'
                layout='responsive'
                className="card-img-top hover-zoom"
                width={280}
                height={280}
              />
            </ModalBody>
          </Modal>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{this.props.children}</h5>
        </div>
        <div className='card-footer'>
          <Link
            target='_blank'
            href='https://api.whatsapp.com/send/?phone=5511981476124&text&app_absent=0'
          >
            <a target='_blank' className='btn btn-primary'>
              Compre agora
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default CardCamisa;
