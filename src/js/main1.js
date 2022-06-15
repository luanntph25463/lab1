import { render } from "./common";
import { works } from "./data";

function showproduct(products) {
    if (!Array.isArray(works) || works.length === 0) {
        return -1;
    }
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `<div class="px-4 ease-in duration-300  hover:shadow-xl hover:cursor-pointer group py-10">
        <a href="detail1.html?id=${product.id}"><img src="${product.img}" alt="">
          <h3 class="font-bold text-2xl my-2 hover:text-rose-500">${product.title}</h3>
          <P class="font-bold text-xl text-[#848484] my-2">${product.description}</P></a> 
          </div> `;
    }
    return result;
}
render("product", showproduct(works));