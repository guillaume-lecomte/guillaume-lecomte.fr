import React, { Component } from "react";
import Loader from "react-loader-spinner";
// import ReactGA from "react-ga";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";

class App extends Component {
  state = {
    isLoading: true,
    resume: {},
    error: null,
  };

  componentWillMount() {
    this.props.resumeFetchRequest();
  }

  render() {
    const { resume } = this.props;
    return !resume ? (
      <div className="App-loader-container">
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
      </div>
    ) : (
      <>
        <div className="App">
          <Header data={resume.main} />
          <About data={resume.main} />
          <Resume data={resume.resume} />
          <Portfolio data={resume.portfolio} />
          <Testimonials data={resume.testimonials} />
          <Contact data={resume.main} />
          <Footer data={resume.main} />
        </div>
      </>
    );
  }
}

export default App;
