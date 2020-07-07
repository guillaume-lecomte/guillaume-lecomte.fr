import React, { Component } from "react";
import Loader from "react-loader-spinner";
// import ReactGA from "react-ga";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
// import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
// import Testimonials from "./Components/Testimonials";
// import Portfolio from "./Components/Portfolio";

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
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    ) : (
      <>
        <div className="App">
          <Header data={resume.main} />
          <About data={resume.resume} />
          {/* <Resume />
          <Portfolio />
          <Testimonials />
          <Contact /> */}
          <Footer data={resume.main} />
        </div>
      </>
    );
  }
}

export default App;
