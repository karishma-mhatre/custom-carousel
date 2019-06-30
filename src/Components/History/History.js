import React, { Component } from 'react';
import { connect } from 'react-redux';
import './history.scss';

class History extends Component {
    render() {
        let { selectedSlides } = this.props;
        return (
            <div className="container history">
                <div className="history-title">History
                    {/* <button onClick={this.props.toggleHistory}>X</button> */}
                </div>
                <div className="history-selected-slides">
                    {
                        selectedSlides.map((number, index) => (
                            <span className="slides" key={index}>{number}</span>
                        ))
                    }
                </div>
                <div className="btn-container"><button className="btn" onClick={this.props.toggleHistory}>Okay</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedSlides: state.carousel.selectedSlides
})

export default connect(mapStateToProps)(History);