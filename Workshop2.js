
let productPrice = 1000;   
let discountPercent = 20;  


let discountAmount = (productPrice * discountPercent) / 100;
let finalPrice = productPrice - discountAmount;

console.log("ราคาสินค้าก่อนส่วนลด:", productPrice, "บาท");
console.log("ส่วนลด:", discountPercent, "%");
console.log("ราคาหลังหักส่วนลดเบื้องต้น:", finalPrice, "บาท");


if (finalPrice <= 0) {
  finalPrice = 0;
  console.log("ราคาสุดท้าย:", finalPrice, "บาท (สินค้าได้ฟรี!)");
}

if (finalPrice > 0 && finalPrice <= 500) {
  finalPrice = finalPrice + 50; 
  console.log("บวกค่าธรรมเนียมจัดส่ง 50 บาท");
  console.log("ราคาสุดท้าย:", finalPrice, "บาท");
}

if (finalPrice > 500) {
  let extraDiscount = (finalPrice * 10) / 100; 
  finalPrice = finalPrice - extraDiscount;
  console.log("ได้รับส่วนลดพิเศษ 10% =", extraDiscount, "บาท");
  console.log("ราคาสุดท้าย:", finalPrice, "บาท");
}
