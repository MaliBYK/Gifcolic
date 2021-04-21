class UI {
  constructor() {
    this.resultBody = document.querySelector(".results-body");
  }

  showGIFsOnUI(GIFs) {
    console.log(GIFs);
    GIFs.data.forEach(gif => {
      this.resultBody.innerHTML += ` <img src="https://i.giphy.com/media/${gif.id}/giphy.webp" alt="GIF"/>`;
    });
  }

  clearBody() {
    this.resultBody.innerHTML = "";
  }
}
