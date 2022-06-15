/* eslint-disable no-plusplus */
import { render } from "./common";
import { works } from "./data";

function showproduct(product) {
    if (!Array.isArray(works) || works.length === 0) return -1;
    let result = "";
    for (let i = 0; i < product.length; i++) {
        const products = product[i];
        result += `<div class="ease-in-out duration-300 hover:shadow-xl hover:cursor-pointer group">
       <a href ="detail.html?id=${products.id}"> <img class="w-full mx-auto" src="${products.img}" alt=""> </a>
       <a href ="detail.html?id=${products.id}">   <h3 class="font-bold text-2xl my-1 hover:text-red-600">${products.title}</h3></a>
       <a href ="detail.html?id=${products.id}">  <p class="text-[#848484]">${products.description}</p> </a>
    </div>`;
    }
    return result;
}
render("product", showproduct(works));