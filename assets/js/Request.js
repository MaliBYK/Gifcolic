class Request {
  constructor() {
    this.baseUrl = "https://api.giphy.com/v1/gifs";
    this.API_KEY = "9m66E1JBCtwoJ3qxvD8dfDDNhXUfxfKB";
  }

  async getGIFsFromApi(keyword, limit) {
    let dataList = [];
    let offset = 0;
    let loopTimes = parseInt(limit / 50);
    for (let i = 1; i <= loopTimes; i++) {
      fetch(
        `${this.baseUrl}/search?api_key=${this.API_KEY}&limit=50&offset=${offset}&q=${keyword}`
      )
        .then(res => res.json())
        .then(data => ui.showGIFsOnUI(data))
        .catch(err => console.log(new Error(err)));
      offset += 50;
    }
    return dataList;
  }
}
