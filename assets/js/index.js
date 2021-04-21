const button = document.querySelector(".search-button");
const input = document.querySelector(".search-input");

//!Event Listeners
button.addEventListener("click", searchForGIF);

//! Creating Objects
const request = new Request();
const ui = new UI();

function searchForGIF() {
  ui.clearBody();
  const keyword = input.value;
  const dataList = request.getGIFsFromApi(keyword, 100);
  console.log(dataList);
}
