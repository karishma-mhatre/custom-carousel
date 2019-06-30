import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeNumberOfSlides} from '../../Actions';
import './slide-selector.scss';
import { NUMBERS } from '../../utils';

class SlidesSelector extends Component {


    handleSelect = (num) => {
        this.props.dispatch(changeNumberOfSlides(num))
    }

    render() {
        return (
            <div className="container slide-selector">
                <p className="slide-selector-title">Select a number between 1 to 20</p>
                <div className="slide-selector-input">
                    <select className="select-input" onChange={(e) => { this.handleSelect(e.target.value) }}>
                        {
                            NUMBERS.map((number, index) => {
                                return <option key={index} value={index + 1}>{number}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default connect()(SlidesSelector);