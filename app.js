let loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => showProduct(data));
};

let loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => showCategories(data));
};

let showCategories = (categories) => {
  for (const category of categories) {
    //  console.log(category)
    let loadCategory = document.getElementById("loadCategory");
    let button = document.createElement("button");
    button.innerHTML = `
     <button onclick="loadProductByCategory(\`${category}\`)" class="btn rounded-2xl btn-outline">${category}</button>
           
        `;
    loadCategory.appendChild(button);
  }
};
let showProduct = (products) => {
  // console.log(product);
  loadProduct.textContent = "";
  for (const product of products) {
    //  console.log(product);
    let { title, price, description, category, image, rating } = product;
    let loadProduct = document.getElementById("loadProduct");

    let div = document.createElement("div");
    div.innerHTML = `
         <div class="card bg-base-100 shadow-md">
          <figure class="bg-gray-100">
            <img
              src=${image}
              class=""
            />
          </figure>

          <div class="card-body">
            <div class="flex justify-between items-center">
              <span class="badge badge-soft badge-primary">
                ${category}
              </span>
              <span class="text-sm"
                ><i
                  class="fa-solid fa-star"
                  style="color: rgba(255, 212, 59, 1)"
                ></i>
                <span>${rating.rate}(${rating.count})</span></span
              >
            </div>

            <h2 class="card-title text-base font-semibold">
             ${title}
            </h2>

            <p class="text-lg font-bold">$${price}</p>

            <div class="flex gap-4">
              <button class="btn btn-outline btn-sm flex-1">
                <i class="fa-regular fa-eye"></i>
                Details
              </button>
              <button class="btn btn-primary btn-sm flex-1">
                <i class="fa-solid fa-cart-shopping"></i> Add
              </button>
            </div>
          </div>
        </div>
        `;
    loadProduct.appendChild(div);
  }
};

let loadProductByCategory = (category) => {
  //  console.log(category)
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => productByCategory(data));
};
let productByCategory = (products) => {
  loadProduct.textContent = "";
  for (const product of products) {
    //  console.log(product);
    let { title, price, description, category, image, rating } = product;
    let loadProduct = document.getElementById("loadProduct");

    let div = document.createElement("div");
    div.innerHTML = `
         <div class="card bg-base-100 shadow-md">
          <figure class="bg-gray-100">
            <img
              src=${image}
              class=""
            />
          </figure>

          <div class="card-body">
            <div class="flex justify-between items-center">
              <span class="badge badge-soft badge-primary">
                ${category}
              </span>
              <span class="text-sm"
                ><i
                  class="fa-solid fa-star"
                  style="color: rgba(255, 212, 59, 1)"
                ></i>
                <span>${rating.rate}(${rating.count})</span></span
              >
            </div>

            <h2 class="card-title text-base font-semibold">
             ${title}
            </h2>

            <p class="text-lg font-bold">$${price}</p>

            <div class="flex gap-4">
              <button class="btn btn-outline btn-sm flex-1">
                <i class="fa-regular fa-eye"></i>
                Details
              </button>
              <button class="btn btn-primary btn-sm flex-1">
                <i class="fa-solid fa-cart-shopping"></i> Add
              </button>
            </div>
          </div>
        </div>
        `;
    loadProduct.appendChild(div);
  }
};

loadCategories();
loadProducts();
