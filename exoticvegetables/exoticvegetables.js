var exoticVeggies=[{

    productName:"Avocado-Imported",
    qt:"1kg",
    productPrice: 374,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a473f647-d419-42d6-bceb-6859d017acbe_425x425.jpg"

},
{
    productName:"Mango Badami NB",
    qt: "1kg",
    productPrice:189,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b4703da0-b787-4446-9070-b44f5e23a597_425x425.jpg"
},
{
    productName:"NB Spinach",
    qt:"1kg",
    productPrice:250,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6fe7cc7b-c825-4126-90da-1c631719940c_425x425.JPG"
},
{
    productName:"Salad Ready To Eat",
    qt:"1 box",
    productPrice:99,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6d4cd380-9b73-4092-9704-945abfe09637_425x425.JPG"
},
{
    productName:"Basil-Italian Exotic",
    qt:"1kg",
    productPrice:790,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17162500-e066-4f78-bbbb-affb40755a0a_425x425.jpg"
},
{
    productName:"Baby Spinach-Exotic",
    qt:"1kg",
    productPrice:600,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2841946c-6155-402e-8e30-ffb53dc689b4_425x425.jpg"
},
{
    productName:"Parsley Flat-Exotic",
    qt:"1kg",
    productPrice:800,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c2f7af5c-db79-4f5f-990f-2935f88d9657_425x425.jpg"

},
{
    productName:"Lettuce Romain Green",
    qt:"1kg",
    productPrice:500,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e4ee6164-cf2d-4c3b-9baf-34801e64db0c_425x425.JPG"
},
{
    productName:"Baby Corn-Exotic",
    qt:"1kg",
    productPrice:300,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cb4590ff-72ec-4343-8276-c27b02f94ba4_425x425.jpg"
},
{
    productName:"Curry Leaf",
    qt:"1kg",
    productPrice:380,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1b080f5d-c454-488f-b4cb-f81ba8e5f029_425x425.jpg"
},
{
    productName:"Sprouts Wheat",
    qt:"1kg",
    productPrice:80,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1365195_425x425.jpg"
},
{
    productName:"Readymade Salad with Spices",
    qt:"1 box",
    productPrice:119,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f7adc644-ac50-4727-a951-db1797f43f8b_425x425.jpg"
},
{
    productName:"Cabbage",
    qt:"1pc",
    productPrice:29,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d51a997-87be-45f4-a85e-72d07279b3c7_425x425.JPG"
},
{
    productName:"Aloe vera Exotic",
    qt:"1kg",
    productPrice:150,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/74ef7445-eabd-41dc-b030-20fa92cf603b_425x425.jpg"
},
{
    productName:"Readymade Salad With B.Spinach",
    qt:"1pc",
    productPrice:119,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/680b28ab-b43d-4fac-b674-a23ac74d6234_425x425.jpg"
},
{
    productName:"Italian Lemon-Exotic",
    qt:"1kg",
    productPrice:1000,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fc60eb5f-d6b1-4718-a4b1-9118a968af8a_425x425.jpg"
},
{
    productName:"Thyme-Exotic",
    qt:"1600",
    productPrice:1600,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dac3bd9f-2c87-40f8-b7ca-2b76b5bf16a9_425x425.JPG"
},
{
    productName:"Asparagus Green-Imported",
    qt:"1kg",
    productPrice:2500,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dc9530c2-2669-4fbc-9c43-6424e743c940_425x425.JPG"
},
{
    productName:"Portobello Mushroom-Imported",
    qt:"1kg",
    productPrice:3600,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e6f58831-2ae1-4238-b91a-1ff1bd6ad059_425x425.JPG"
},
{
    productName:"Bud Chili Red-Exotic",
    qt:"1kg",
    productPrice:1400,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1365290_425x425.jpg"
}]



var addArr=JSON.parse(localStorage.getItem("cartProduct")) || []                    

var display=document.querySelector("#products")

var filterPrice=document.querySelector("#relevance")
filterPrice.addEventListener("change",function(elem){

if(filterPrice.value=="none")
{
displayVeggies(exoticVeggies)
}
else if(filterPrice.value=="HTL")
{
var filtered=exoticVeggies.sort(function(a,b){

    return b.productPrice-a.productPrice


})
displayVeggies(filtered)
}
else
{
var filtered2=exoticVeggies.sort(function(a,b){

return a.productPrice-b.productPrice

})
displayVeggies(filtered2)
}  

})

displayVeggies(exoticVeggies)

function displayVeggies(exoticVeggies){

display.innerHTML=null

exoticVeggies.forEach(function(elem){

var DIV=document.createElement("div")
DIV.setAttribute("class","productDiv")
var div2=document.createElement("div")
div2.setAttribute("class","innerDiv")
// var P1=document.createElement("p")
// P1.innerText="❤"
// P1.style.fontSize="12px"
// P1.style.position="relative"
// P1.style.position="bottom:25px,right:25px"
var Img=document.createElement("img")
Img.src=elem.productImg

var Pb=document.createElement("p")
Pb.innerText="DELIVERY IN  90  MINUTES"
Pb.style.textAlign="center"
Pb.style.border="1px solid #B71761"
Pb.style.borderRadius="8px"
Pb.style.color="#B71761"

var Pn=document.createElement("p")
Pn.innerText=elem.productName
// Pn.style.fontFamily= "'Raleway', sans-serif;"
Pn.style.fontSize="14px"

var H4=document.createElement("h4")
H4.innerText=elem.qt

var Pr=document.createElement("p")
Pr.innerText="MRP"+" "+"₹"+elem.productPrice
Pr.style.border="1px solid black"
Pr.style.borderRadius="8px"

var add=document.createElement("div")
add.setAttribute("class","ATC")
add.style.backgroundImage="url(https://www.naturesbasket.co.in/Images/CartAddBtn.PNG)"
add.style.backgroundSize="cover"
add.style.width="92px"
add.style.height="31.5px"
add.addEventListener("click",function(){


addToCart(elem)


})

div2.append(Pr,add)
DIV.append(Img,Pb,Pn,H4,div2)
display.append(DIV)

});

}

function addToCart(elem){

addArr.push(elem)
    alert(elem.productName+" "+"Added to cart !")
    
localStorage.setItem("cartProduct",JSON.stringify(addArr))
}
var cart = document.querySelector("#cart")
cart.addEventListener("click", function ()
{
    window.location.href="../CartPage/cart.html"
})
document.querySelector("#logoBoxImg").addEventListener("click", function ()
{
    window.location.href="../index.html"
})