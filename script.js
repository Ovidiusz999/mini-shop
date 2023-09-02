let cat = 10;
let book = 2;

let catprice = document.getElementById("catprice");
let bookprice = document.getElementById("bookprice");

let catpriceB = document.getElementById("itemb1");
let bookpriceB = document.getElementById("itemb2");

let total = document.getElementById("total");
let items = document.getElementsByClassName("items");

let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let reset = document.getElementById("re");

let x = 0;
let basket = 0;

add1.addEventListener("click", function() {
   x += cat;
   total.innerHTML = x;
   basket += 1;
   itemb1.innerHTML = "cat";
   for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = basket;
    }
});

add2.addEventListener("click", function() {
   x += book;
   total.innerHTML = x;
   basket += 1;
   itemb2.innerHTML = "book";

   for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = basket;
    }
});

reset.addEventListener("click", function() {
   x = 0;
   total.innerHTML = x;
   basket = 0;
   itemb1.innerHTML = "";
   itemb2.innerHTML = "";
   for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = basket;
    }
});
