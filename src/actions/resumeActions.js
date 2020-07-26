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

export const RESUME_DOWNLOAD_REQUESTED = "RESUME_DOWNLOAD_REQUESTED";
export function resumeDownloadRequested() {
  return { type: RESUME_DOWNLOAD_REQUESTED };
}

export const RESUME_DOWNLOAD_SUCCEEDED = "RESUME_DOWNLOAD_SUCCEEDED";
export function resumeDownloadSucceeded(fileURL) {
  return { type: RESUME_DOWNLOAD_SUCCEEDED, payload: fileURL };
}

export const RESUME_DOWNLOAD_FAILED = "RESUME_DOWNLOAD_FAILED";
export function resumeDownloadFailed(error) {
  return { type: RESUME_DOWNLOAD_FAILED, payload: error };
}
