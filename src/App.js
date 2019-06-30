import React from 'react';
import Carousel from '../src/Components/Carousel/Carousel'
import SlidesSelector from './Components/SlidesSelector/SlidesSelector';
import { connect } from 'react-redux';
import { toggleHistory } from './Actions';
import Modal from './Components/Modal';
import History from './Components/History/History'
import './App.css';

class App extends React.Component {

  toggleHistory = () => {
    this.props.dispatch(toggleHistory())
  }

  render() {
    return (
      <>
        <SlidesSelector></SlidesSelector>
        <Carousel></Carousel>
        <div>
          <button type="button" onClick={this.toggleHistory}>Finish</button>
        </div>
        {
          this.props.showHistory &&
          <Modal>
            <History toggleHistory={this.toggleHistory}></History>
          </Modal>
        }
      </>
    );
  }

}

const mapStateToProps = (state) => ({
  showHistory: state.carousel.showHistory
})

export default connect(mapStateToProps)(App);
