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
  let loadProduct = document.getElementById("loadProduct");
  loadProduct.textContent = "";
  for (const product of products) {
    //  console.log(product);
    let { title, price, description, category, image, rating, id } = product;

    let div = document.createElement("div");
    div.innerHTML = `
  <div class="card bg-base-100 shadow-md">
    <figure class="bg-gray-100">
      <img src="${image}" class="h-[300px]" />
    </figure>

    <div class="card-body h-[200px] md:h-[250px]">
      <div class="flex justify-between items-center">
        <span class="badge badge-soft badge-primary"> ${category} </span>
        <span class="text-sm"
          ><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1)"></i>
          <span>${rating.rate}(${rating.count})</span></span
        >
      </div>

      <h2 class="card-title text-base font-semibold">${title}</h2>

      <p class="text-lg font-bold">$${price}</p>

      <div class="flex gap-4">
        <label
          onclick="modalView(${id})"
          for="my_modal_6"
          class="btn btn-outline btn-sm flex-1"
        >
          <i class="fa-regular fa-eye"></i>
          Details
        </label>
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
  let loadProduct = document.getElementById("loadProduct");
  loadProduct.textContent = "";
  for (const product of products) {
    //  console.log(product);
    let { title, price, description, category, image, rating, id } = product;

    let div = document.createElement("div");
    div.innerHTML = `
  <div class="card bg-base-100 shadow-md">
    <figure class="bg-gray-100">
      <img src="${image}" class="h-[300px]" />
    </figure>

    <div class="card-body h-[200px] md:h-[250px]">
      <div class="flex justify-between items-center">
        <span class="badge badge-soft badge-primary"> ${category} </span>
        <span class="text-sm"
          ><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1)"></i>
          <span>${rating.rate}(${rating.count})</span></span
        >
      </div>

      <h2 class="card-title text-base font-semibold">${title}</h2>

      <p class="text-lg font-bold">$${price}</p>

      <div class="flex gap-4">
        <label
          onclick="modalView(${id})"
          for="my_modal_6"
          class="btn btn-outline btn-sm flex-1"
        >
          <i class="fa-regular fa-eye"></i>
          Details
        </label>
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

let modalView = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => showModalProduct(data));
};
let showModalProduct = (product) => {
  console.log(product);

  let { title, price, description, category, image, rating, id } = product;
  document.getElementById("showModalData").innerHTML = `
  <div class="card bg-base-100 shadow-md">
    <figure class="bg-gray-100">
      <img src="${image}" class="h-[300px]" />
    </figure>
    <div class="card-body h-[200px] md:h-[250px] max-w-[700px]">
      <div class="flex justify-between items-center">
        <span class="badge badge-soft badge-primary"> ${category} </span>
        <span class="text-sm"
          ><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1)"></i>
          <span>${rating.rate}(${rating.count})</span></span
        >
      </div>
      <h2 class="card-title text-base font-semibold">${title}</h2>
      <div class="">
      <h2 class="card-title text-lg font-bold">Description :</h2>
       <span class="text-base font-semibold line-clamp-3">${description}</span></div>
      <div class="flex items-center">
      <p class="text-lg font-bold">$${price}</p>
      <div class="">
      <label for="my_modal_6" class="btn">Close!</label>
    </div>
       </div>
      </div>
    </div>
  </div>
        `;
};

loadCategories();
loadProducts();
