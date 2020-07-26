export function resumeApi() {
  return fetch("https://www.guillaume-lecomte.fr/docs/resumeData.json", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function downloadResumeApi() {
  return fetch("https://www.guillaume-lecomte.fr/docs/CV_fr.pdf", {
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    const file = new Blob([response.data], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    return fileURL;
  });
}
