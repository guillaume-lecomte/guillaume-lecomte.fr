import { RESUME_FETCH_SUCCEEDED } from "../actions/resumeActions";

function resumeReducer(state = { resume: null }, { type, payload }) {
  switch (type) {
    case RESUME_FETCH_SUCCEEDED:
      return { ...state, resume: payload };
    default:
      return state;
  }
}

export default resumeReducer;
