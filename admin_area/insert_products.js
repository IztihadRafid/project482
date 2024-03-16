document.getElementById("insertButton").addEventListener('click',function(){
const productName= document.getElementById("product_name").value
const productBrand= document.getElementById("product_brand").value
const productPrice= document.getElementById("product_price").value
const productImage= document.getElementById("product_image").value
const productDesc= document.getElementById("product_desc").value

console.log(productName," ",productBrand," ",productPrice," ",productImage," ",productDesc);
})