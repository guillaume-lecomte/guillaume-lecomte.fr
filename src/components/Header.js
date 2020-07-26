import React, { Component } from "react";

class Header extends Component {
  render() {
    const { name, occupation, description, address, social } = this.props.data;
    const networks = social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Montrer la navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Masquet la navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Accueil
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                A propos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                CV
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projets
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>
              Je suis <span>{occupation}</span> situé à {address.city} .{" "}
              {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
