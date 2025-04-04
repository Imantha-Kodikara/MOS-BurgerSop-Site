function mostPopularItems() {
  let mostPopularItems = document.getElementById(
    "most-popular-items-container"
  );
  let body = "";
  fetch("json/mostPopularItems.json")
    .then((res) => res.json())
    .then((dataList) => {

      dataList.forEach((element) => {
        body += `
            <div class="col">
            <div class="card shadow-sm">
              <img src="${element.image}" alt="">
              <div class="card-body">
              <h4>${element.title}</h4>
                <p class="card-text">${element.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn custom-btn">Buy Now!</button>
                  </div>
                  <small class="text-body-secondary"> <h4> ${element.price} </h4></small>
                </div>
              </div>
            </div>
          </div>
`;
      });
      mostPopularItems.innerHTML = body;
    });
    
}
mostPopularItems();
