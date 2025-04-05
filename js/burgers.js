let burgersArray = [];
function sellingBurgers() {
  let index = 0;
  let sellingBurgers = document.getElementById("burgers-container");
  let body = "";
  fetch("json/burgers.json")
    .then((res) => res.json())
    .then((dataList) => {
      dataList.forEach((element) => {
        burgersArray.push({
          image: element.image,
          title: element.title,
          price: element.price,
          discount:element.discount,
          itemCode: element.itemCode
        });
        body += `
            <div class="col">
            <div class="card shadow-sm">
              <img src="${element.image}" alt="">
              <div class="card-body">
              <h5>${element.title}</h5>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">

                    <button type="button" onclick="loadBurgerDetails(${index++})" class="btn custom-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">${
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

function loadBurgerDetails(index) {
  let modalCard = document.getElementById("modal-card");
  let image = burgersArray[index].image;
  let title = burgersArray[index].title;
  let price = burgersArray[index].price;
  let discount = burgersArray[index].discount;
  let itemCode= burgersArray[index].itemCode;

  let cardBody = `
  <img src="${image}" alt="" style="width: 450px; height: auto;">
    <h4>${title}</h4>
    <h5>${price}</h5>
    <h5>${discount}</h5>
    <h5>Item Code - ${itemCode}</h5>
    <label for="qty">Qty:</label>
    <select id="qty">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>

</select>

  `
  modalCard.innerHTML = cardBody;
}

function oderConfirm(){
  alert("Oder confirmed!");
}
