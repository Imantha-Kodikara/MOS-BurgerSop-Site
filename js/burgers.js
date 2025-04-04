function sellingBurgers() {
  let sellingBurgers = document.getElementById("burgers-container");
  let body = "";
  fetch("json/burgers.json")
    .then((res) => res.json())
    .then((dataList) => {
      dataList.forEach((element) => {
        body += `
            <div class="col">
            <div class="card shadow-sm">
              <img src="${element.image}" alt="">
              <div class="card-body">
              <h5>${element.title}</h5>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn custom-btn">${
                      element.discount + " "
                    }Buy Now!</button>
                  </div>
                  <small class="text-body-secondary"> <h5> ${
                    element.price
                  } </h5></small>
                </div>
                <p>Item Code - ${element.itemCode}</p>
                
              </div>
            </div>
          </div>
        `;
      });
      sellingBurgers.innerHTML = body;
    });
}

sellingBurgers();
