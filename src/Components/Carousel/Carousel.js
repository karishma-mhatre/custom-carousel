import React, { Component } from 'react';
import { connect } from 'react-redux';
import './carousel.scss';

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
        var slides = document.getElementsByClassName("slide");

        if (n > slides.length) { this.currentSlide = 1 }
        if (n < 1) { this.currentSlide = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[this.currentSlide - 1].style.display = "flex";
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
            slides.push(<div key={i} className="slide">
                            <div className="slide-title">{i + 1}</div>
                        </div>)
        }

        return (
            <div className="slide-container">
                <button className="carousel-btn carousel-btn--left" type="button" onClick={(e) => {this.changeSlide(e, -1)}}>
                    <i className="fa fa-caret-left" aria-hidden="true"></i>
                </button>
                {
                    slides   
                }
                <button className="carousel-btn carousel-btn--right" type="button" onClick={(e) => {this.changeSlide(e, 1)}}>
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    numberOfSlides: state.carousel.numberOfSlides,
    isLoggedIn: state.carousel.isLoggedIn
})

export default connect(mapStateToProps)(Carousel);