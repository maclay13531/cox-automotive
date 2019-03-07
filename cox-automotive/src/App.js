import React, { Component } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';

import Layout from './container/Layout/Layout';
import HourSlot from './components/HourSlot/HourSlot';
import ModalInput from './components/ModalInput/ModalInput';
import Aux from './hoc/Auxiliary';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UpdateHourSlot from './actions/UpdateHourSlot';

import styles from './App.module.css';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'bisque'
  }
};

Modal.setAppElement('#root')

class App extends Component {
  state = {
    modalIsOpen: false,
    selectedSlot: null
  };

  openModal = (event) => {
    console.log(event);
    this.setState({
      modalIsOpen: true,
      selectedSlot: event
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      selectedSlot: null
    });
  }

  updateHourSlotHandler = () => {
    const name = document.getElementById('Name').value;
    const number = document.getElementById('Number').value;
    if (!name && !number) {
      console.log('empty');
      Swal.fire({
        title: 'Not enough info',
        text: 'Please fill in at least one text box!',
        type: 'warning',
      })
    } else {
      this.props.updateHourSlot(this.state.selectedSlot, name, number);
    }
  }

  render() {
    let hourSlotToRender = this.props.hourSlotToDisplay.map((slot, index) => {
      return (
        <HourSlot
          hour={slot.hour}
          availability={slot.availability}
          clicked={this.openModal}
          key={index} />
      );
    });

    let selectedHourSlot = null;
    let appointOrReserveBtn = null;
    if (this.state.selectedSlot) {
      let selectedHour = this.props.hourSlotToDisplay.find((slot) => {
        return slot.hour === this.state.selectedSlot;
      });
      switch (selectedHour.availability) {
        case (true):
          selectedHourSlot = (
            <Aux>
              <h3 className={styles.Green}>{this.state.selectedSlot}</h3>
            </Aux>
          );
          appointOrReserveBtn = (
            <Aux>
              <button onClick={this.updateHourSlotHandler} className={styles.UpdateBtn}>Reserve</button>
              <button onClick={this.closeModal} className={styles.CloseBtn}>Close</button>
            </Aux>
          );
          break;
        case (false):
          selectedHourSlot = (
            <Aux>
              <h3 className={styles.Red}>{this.state.selectedSlot}</h3>
              <h5 className={styles.Red}>Reserved By</h5>
              <p>{selectedHour.name}</p>
              <h5 className={styles.Red}>Contact No.</h5>
              <p>{selectedHour.number}</p>
            </Aux>
          );
          appointOrReserveBtn = (
            <Aux>
              <button onClick={this.updateHourSlotHandler} className={styles.UpdateBtn}>Update</button>
              <button onClick={this.closeModal} className={styles.CloseBtn}>Close</button>
            </Aux>
          );
          break;
        default:
          break;
      }
    }

    let modalToDisplay = (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={modalStyles}>
        {selectedHourSlot}
        <form className={styles.ModalForm}>
          <ModalInput label='Name'/>
          <ModalInput label='Number'/>
        </form>
        {appointOrReserveBtn}
      </Modal>
    );

    return (
      <Layout>
        {modalToDisplay}
        {hourSlotToRender}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    hourSlotToDisplay: state.slot
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateHourSlot: UpdateHourSlot
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
