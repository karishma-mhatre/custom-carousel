import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeNumberOfSlides} from '../../Actions';

const NUMBERS = ["ONE", "TWO", "THREE", "FOUR"];

class SlidesSelector extends Component {


    handleSelect = (num) => {
        console.log(num);
        this.props.dispatch(changeNumberOfSlides(num))
    }

    render() {
        return (
            <div>
                <div>Select a number between 10 to 20</div>
                <select onChange={(e) => {this.handleSelect(e.target.value)}}>
                        {
                            NUMBERS.map((number, index) => {
                                return <option key={index} value={index+1}>{number}</option>
                            })
                        }
                </select>
            </div>
        )
    }
}

export default connect()(SlidesSelector);