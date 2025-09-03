let products = [
  { price: 200, discount: 10 },  
  { price: 150, discount: 20 },   
  { price: 300, discount: 15 },   
  { price: 80,  discount: 5  },  
  { price: 400, discount: 25 },  
];

function calculateTotal() {
  let total = 0;
  products.forEach((product, index) => {
    let discountedPrice = product.price - (product.price * product.discount / 100);
    console.log(`Product [${index + 1}]: Original = $${product.price}, Discount = ${product.discount}%, After discount = $${discountedPrice.toFixed(2)}`);
    total += discountedPrice;
  });

  console.log("--------------------------------------");
  console.log(`Total price after discount: $${total.toFixed(2)}`);
}

calculateTotal();
