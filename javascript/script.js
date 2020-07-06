let numberOfIteams = 0;

let products = [];

function numberOfItemsInCart(product) {
  numberOfIteams = numberOfIteams + 1;
  products.push(product);
  document.getElementById("number1").innerHTML = "cart : " + numberOfIteams;
  document.getElementById("par1").innerHTML += product.name + "<br>";
  console.log(product);
}

function total() {
  let total = calculation * numberOfIteams;
  document.getElementById("price").innerHTML = total;
}

function ineer() {
  document.getElementById("par1").innerHTML +=
    document.getElementById("name").value + "<br>";
}
