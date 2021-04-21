class Request {
  constructor() {
    this.baseUrl = "https://api.giphy.com/v1/gifs";
    this.API_KEY = "9m66E1JBCtwoJ3qxvD8dfDDNhXUfxfKB";
  }

  getGIFsFromApi(keyword) {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseUrl}/search?api_key=${this.API_KEY}&q=${keyword}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(new Error(err)));
    });
  }

  getRandomNubmerFromGIFsLength(keyword) {
    return new Promise((resolve, reject) => {
      fetch(
        `${this.baseUrl}/search?api_key=${this.API_KEY}&limit=50&q=${keyword}`
      )
        .then(res => res.json())
        .then(data => {
          const totalGIF = data.pagination.total_count;
          const offset = parseInt(Math.random() * totalGIF) - 50;
          resolve(offset);
        })
        .catch(err => reject(new Error(err)));
    });
  }
}
