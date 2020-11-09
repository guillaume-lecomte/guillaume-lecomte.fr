export const RESUME_FETCH_REQUESTED = "RESUME_FETCH_REQUESTED";
export function resumeFetchRequested() {
  return { type: RESUME_FETCH_REQUESTED };
}

export const RESUME_FETCH_SUCCEEDED = "RESUME_FETCH_SUCCEEDED";
export function resumeFetchSucceeded(resumeResponse) {
  return { type: RESUME_FETCH_SUCCEEDED, payload: resumeResponse };
}

export const RESUME_FETCH_FAILED = "RESUME_FETCH_FAILED";
export function resumeFetchFailed(error) {
  return { type: RESUME_FETCH_FAILED, payload: error };
}
