import React, { Component } from 'react';
import { connect } from 'react-redux';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.currentSlide = 1
    }

    changeSlide = (e, n) => {
        this.showSlides(e, this.currentSlide += n);
    }

    showSlides = (e, n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) { this.currentSlide = 1 }
        if (n < 1) { this.currentSlide = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[this.currentSlide - 1].style.display = "block";
    }

    componentDidMount() {
        this.showSlides(null, this.currentSlide);
    }

    componentDidUpdate() {
        this.showSlides(null, this.currentSlide);
    }

    render() {
        if(!this.props.isLoggedIn) {
            window.location.hash="/"
        }
        
        let slides = [];
        for(let i=0; i<this.props.numberOfSlides; i++) {
            slides.push(<div key={i} className="mySlides">{i + 1}</div>)
        }

        return (
            <div className="mySlides-container">
                <button type="button" onClick={(e) => {this.changeSlide(e, -1)}}>-</button>
                {
                    slides   
                }
                <button type="button" onClick={(e) => {this.changeSlide(e, 1)}}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    numberOfSlides: state.carousel.numberOfSlides,
    isLoggedIn: state.carousel.isLoggedIn
})

export default connect(mapStateToProps)(Carousel);