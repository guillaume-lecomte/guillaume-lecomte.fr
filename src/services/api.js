function resumeApi() {
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

export default resumeApi;
