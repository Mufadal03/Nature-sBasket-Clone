var products=[{

    productName:"MUTTON CURRY CUT",
    qt: "500gm",
    productPrice:515.00,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/659eee9d-4247-437b-9397-b0aedea3dd7e_425x425.jpg",

    },
    {

    productName:"MUTTON RIBS CHOPS",
    qt:"500gm",
    productPrice: 599.5,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/12a77c0c-ca9f-473d-9e44-c313e69fac01_425x425.jpg"

    },
    {

    productName:"MUTTON PAYA",
    qt:"1pc",
    productPrice:118,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/37b87a4b-bc01-4368-88b3-b163a96f3c25_425x425.jpg"

    },
    {

    productName:"NATURES MUTTON BONELESS",
    qt:"500gm",
    productPrice:118,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bf782d6a-94d0-4880-89b1-1a0e550b6b4a_425x425.jpg"

    },
    {

    productName:"WHITE POMFRET",
    qt:"1kg",
    productPrice:1940,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c1f222d1-749f-4817-bc29-4bd0e39b2137_425x425.jpg"

    },
    {

    productName:"RAWAS(INDIAN SALMON)",
    qt:"500gm",
    productPrice:975,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c796cab0-884e-4c2e-b32a-4dea0858e230_425x425.jpg"

    },
    {

    productName:"MACKEREL(WHOLE)",
    qt:"500gm",
    productPrice:275,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/589a743c-d09d-4d34-b04e-424611a6a7e4_425x425.jpg"

    },
    {

    productName:"CHICKEN DRUMSTICK(WITHOUT SKIN)",
    qt:"500gm",
    productPrice:260,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f5050bad-9890-4b40-868f-e633c70caec9_425x425.jpg"

    },
    {

    productName:"BASA FILLET FISH",
    qt:"500gm",
    productPrice:790,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/13f8acf0-e8f7-4ba4-8820-6e2145d7cc3c_425x425.jpg"

    },
    {

    productName:"ROHU WHOLE",
    qt:"1kg",
    productPrice:165,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/91bc0bf5-6ea6-49ef-8914-13fba49b9a01_425x425.jpg"

    },
    {

    productName:"BACK POMPHRET",
    qt:"1kg",
    productPrice:1100,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e36ae2d1-cabf-4a2e-b13f-7d1441c64d08_425x425.jpg"

    },
    {

    productName:"CHICKEN BREAST(BONELESS)",
    qt:"500gm",
    productPrice:250,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6540da54-9ba2-4c2c-8590-07489a7c68b6_425x425.jpg"

    },
    {

    productName:"BOMBAY DUCK(WHOLE)",
    qt:"500gm",
    productPrice:300,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8a6bed39-06ea-4306-a7ad-e04a3d7fe0f7_425x425.jpg"

    },
    {

    productName:"ATLANTIC SALMON FILLETS",
    qt:"500gm",
    productPrice:2450,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e925a160-31fa-4caa-bf43-6408c1c3afc3_425x425.jpg"

    },
    {

    productName:"CATLA(WHOLE)",
    qt:"1kg",
    productPrice:350,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/78d56cad-6d68-46f8-b1b4-1f964661cb79_425x425.jpg"

    },
    {

    productName:"CHICKEN CURRY CUT",
    qt:"1kg",
    productPrice:400,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3874f5a2-be0b-4979-8b6c-eb0db8b6807c_425x425.jpg"

    },
    {

    productName:"CHICKEN WHOLE(WITHOUT SKIN)",
    qt:"1pc",
    productPrice:400,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3a324172-a804-4f21-a8f8-d5a1dbae47c7_425x425.jpg"

    },
    {

    productName:"SEE FISH(SURMAI)STEAKS",
    qt:"500gm",
    productPrice:1400,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/95ecf2e8-5348-4e7a-a838-364170c789e6_425x425.jpg"

    },
    {

    productName:"NATURES MUTTON BONELESS",
    qt:"500gm",
    productPrice:600,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bf782d6a-94d0-4880-89b1-1a0e550b6b4a_425x425.jpg"

    },
    {

    productName:"MUTTON MINCE(KEEMA)",
    qt:"500gm",
    productPrice:700,
    productImg:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d95f9282-52db-4ce3-9905-5236ff75651b_425x425.jpg"

    }]


var addArr=JSON.parse(localStorage.getItem("cartProduct")) || []                    

var display=document.querySelector("#products")

var filterPrice=document.querySelector("#relevance")
filterPrice.addEventListener("change",function(elem){

if(filterPrice.value=="none")
{
displayNonveg(products)
}
else if(filterPrice.value=="HTL")
{
var filtered=products.sort(function(a,b){

return b.productPrice-a.productPrice


})
displayNonveg(filtered)
}
else
{
var filtered2=products.sort(function(a,b){

return a.productPrice-b.productPrice

})
displayNonveg(filtered2)
}  

})

displayNonveg(products)

function displayNonveg(products){

display.innerHTML=null

products.forEach(function(elem){

var DIV=document.createElement("div")
DIV.setAttribute("class","productDiv")
var div2=document.createElement("div")
div2.setAttribute("class","innerDiv")

var Img=document.createElement("img")
Img.src=elem.productImg

var Pb=document.createElement("p")
Pb.innerText="DELIVERY IN 90 MINUTES"
Pb.style.border="1px solid #B71761"
Pb.style.borderRadius="8px"
Pb.style.color=" #B71761"

var Pn=document.createElement("p")
Pn.innerText=elem.productName
Pn.style.fontSize="14px"

var H4=document.createElement("h4")
H4.innerText=elem.qt

var Pr=document.createElement("p")
Pr.innerText="MRP"+"  "+"₹"+elem.productPrice
Pr.style.border="1px solid black"
Pr.style.borderRadius="8px"

var add=document.createElement("div")
add.setAttribute("class","ATC")
add.style.backgroundImage="url(https://www.naturesbasket.co.in/Images/CartAddBtn.PNG)"
add.style.backgroundSize="cover"
add.style.width="92px"
add.style.height="30.5px"
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
console.log(addArr)
alert("Product added to Cart")
localStorage.setItem("cartProduct",JSON.stringify(addArr))
}