import React, { Component } from 'react'
import { setupScrollReveal } from '../../assets/js/main.js';
import logo from '../../assets/utopiialogo.png';

class Hero extends Component {
  componentDidMount() {
    setupScrollReveal();
  }

  render() {
    const { title, content } = this.props;
    const Illustration = this.props.illustration;

    return (
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="container-sm">
              <img src={logo} alt="Logo" width="300" height="300" />
                <p className="hero-paragraph is-revealing">{content}</p>
              </div>
              <a href="https://forms.gle/YHSVJQPYzExbNYsKA" target="_blank" rel="noopener noreferrer"><button type="button" className="button button-primary button-block button-shadow">Apply Now</button></a>
              
            </div>
            
            <div className="hero-illustration">
              <Illustration />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
