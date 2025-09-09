//  loding part
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("treeCatgoris").style.display = "block";
});

// all categorys
const treeCatagorisLoad = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((json) => treeCatagoris(json));
};

// call tree itme by catagory wise
const treeCatagoris = (catg) => {
  const olId = document.getElementById("treeCatgoris");

  catg.categories.forEach((category) => {
    const catDiv = document.createElement("div");
    catDiv.className =
      "bg-white rounded-md p-2 mb-2 cursor-pointer w-full hover:bg-gray-300 transition-all";
    catDiv.textContent = category.category_name;

    catDiv.addEventListener("click", () => {

      document.querySelectorAll("#treeCatgoris div").forEach((el) => {
        el.classList.remove("bg-blue-500", "text-white");
        el.classList.add("bg-white"); 
      });

      catDiv.classList.remove("bg-white");
      catDiv.classList.add("bg-blue-500", "text-white");


      catItemCall(category.id);
    });
     catDiv.addEventListener("click", () => catItemCall(category.id));

    olId.appendChild(catDiv);
  });
};

// data fetching by catagori list
const catItemCall = (catName) => {
  // console.log(catName);
  const url = `https://openapi.programming-hero.com/api/category/${catName}`;
  // console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((fetchData) => allPlantsInfo(fetchData));
};

// const actagoryPlants = (datas) => {
//   allPlantsInfo(datas)
// };

treeCatagorisLoad();

// all card show by default
const allPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((json) => allPlantsInfo(json));
};

// All Cards Here

let totalPrice = 0;
const allPlantsInfo = (allP) => {
  const cardId = document.getElementById("allCards");
  cardId.innerHTML = "";

  allP.plants.forEach((plant) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="cards bg-white p-5 rounded-md">
        <img class="rounded-md" src="${plant.image}" alt="" />
        <h3 onclick ="loadModalDetails(${plant.id})" class= " cursor-pointer mt-1 text-left font-semibold text-[20px]">${plant.name}</h3>
        <p class="text-justify w-full text-gray-500 font-semibold my-2">
          ${plant.description}
        </p>
        <div class="flex justify-between">
          <p class="rounded-[999px] p-2 text-white bg-[#345f41]">
            ${plant.category}
          </p>
          <p class ="font-bold text-2"><span class ="price">${plant.price}</span></p>
        </div>
        <div class="navbar-end my-5">
          <button class="cardBtn btn bg-[#facc15] cursor-pointer border-0 rounded-[999px]">
            Add to Cart
          </button>
        </div>
      </div>
    `;
    cardId.append(div);

    const btn = div.querySelector(".cardBtn");
    btn.addEventListener("click", () => addToCart(plant));
  });
};

// add to cart history
const addToCart = (plant) => {
  const cartDiv = document.getElementById("cartDiv");
  const cartItem = document.createElement("div");
  cartItem.className = "flex justify-between bg-gray-100 p-2 mb-2 rounded-md";

  cartItem.innerHTML = `
    <div class="flex justify-between w-full max-w-full p-3 bg-white rounded shadow-md items-center">
      <div>
        <p class="font-semibold mb-1">${plant.name}</p>
        <p class="font-bold price">${plant.price}</p>
      </div>
      <p class="remove cursor-pointer text-red-500 hover:text-red-700">X</p>
    </div>
  `;
  cartDiv.appendChild(cartItem);

  // Total & price update
  totalPrice += parseInt(plant.price);
  document.getElementById("total").innerText = totalPrice.toFixed(2);

  // Remove & Subtract
  const removeBtn = cartItem.querySelector(".remove");
  removeBtn.addEventListener("click", () => {
    const price = parseFloat(cartItem.querySelector(".price").innerText);

    totalPrice -= price;
    document.getElementById("total").innerText = totalPrice.toFixed(2);
    cartItem.remove();
  });
};

allPlants();

// modal part 
const loadModalDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  console.log(url);
  const res = await fetch(url)
  const details = await res.json()
  displayModalDetails(details.plants);
  
}

const displayModalDetails = (details) => {
  // console.log(details);

  const detailsBox = document.getElementById("modalDiv")
  detailsBox.innerHTML = `
  <div class="cards bg-white p-5 rounded-md">
        <img class="rounded-md w-full max-h-[200px] object-cover mx-auto" src="${details.image}" alt="" />
        <h3 onclick ="loadModalDetails(${details.id})" class= " cursor-pointer mt-1 text-left font-semibold text-[20px]">${details.name}</h3>
        <p class="text-justify w-full text-gray-500 font-semibold my-2">
          ${details.description}
        </p>
        <div class="flex justify-between">
          <p class="rounded-[999px] p-2 text-white bg-[#345f41]">
            ${details.category}
          </p>
          <p class ="font-bold text-2"><span class ="price">${details.price}</span></p>
        </div>
  
  `




  document.getElementById("my_modal_5").showModal()
}

