import { connect } from "react-redux";
import { resumeFetchRequested } from "../actions/resumeActions";
import App from "../App";

const mapStateToProps = (state) => ({ resume: state.resume });

const mapDispatchToProps = (dispatch) => ({
  resumeFetchRequest: () => dispatch(resumeFetchRequested()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
