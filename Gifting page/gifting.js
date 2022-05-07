//DOM manipulation here

let productsData = [
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cde53b0f-40be-40c4-b027-e432d8b75677_425x425.jpg",
        productName: "Nutty Way",
        productPrice: 3149,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ba9c5d44-39d5-484b-8ea3-8c0a49ba4100_425x425.jpg",
        productName: "The Caffeine Addict",
        productPrice: 6999,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/398fb058-2de3-40ff-9f3d-bc9d4524564c_425x425.jpg",
        productName: "Large Holy Guacamole Box",
        productPrice: 4049,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/398fb058-2de3-40ff-9f3d-bc9d4524564c_425x425.jpg",
        productName: "The Holy Guacamole Box",
        productPrice: 2899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/95d25014-24a6-47b3-942a-c8c6cd24f22e_425x425.jpg",
        productName: "Hola Mexico",
        productPrice: 2999,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9a4c7e02-3abc-4335-934c-7b3f235a4a55_425x425.jpg",
        productName: "Holy Guacamole Trunk",
        productPrice: 4899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a0130256-262d-47bb-9ead-14b774f4e488_425x425.jpg",
        productName: "Breakfast Buddy",
        productPrice: 2149,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/97e7631e-a04b-402a-a4ec-397f83091458_425x425.jpg",
        productName: "The Exotic Tea Trunk",
        productPrice: 3399,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d4d37b94-94cb-4d20-9985-1435be816b16_425x425.jpg",
        productName: "The Luxury Tea Trove By Anamika",
        productPrice: 11499,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7c9276d4-5e27-4153-974d-44d0e59d4ef8_425x425.jpg",
        productName: "Lazy AF",
        productPrice: 1099,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c7235da5-d8bc-47d9-a05c-77fc713e3a76_425x425.jpg",
        productName: "The Endless Love Affair",
        productPrice: 5699,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/444c0687-5b46-4df5-8666-1d1173769c79_425x425.jpg",
        productName: "The Positivitea Trunk",
        productPrice: 5499,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/233ab49a-4fe2-40c3-a8be-f3947e6fdda8_425x425.jpg",
        productName: "The Anamika Khanna Vegan Goodie",
        productPrice: 7699,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e130cf1b-78e4-4eff-acc7-6375e6038794_425x425.jpg",
        productName: "Baking Saturday",
        productPrice: 2849,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ee254f97-3b02-45cb-996b-db9a36c7e620_425x425.jpg",
        productName: "The Non GMO Hamper",
        productPrice: 3499,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b0532a6c-81a6-4e84-bbac-1d2d9d16ecf3_425x425.jpg",
        productName: "Obsessive Coffee Disorder",
        productPrice: 2999,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7e020b90-58dd-4f35-a235-f019bae24e33_425x425.jpg",
        productName: "A Large Dose Of Vitamin C Hamper",
        productPrice: 1199,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/22b9de68-adfa-4288-8053-3ae0f7eaa440_425x425.jpg",
        productName: "The Guilt Free Hamper",
        productPrice: 5899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/034e5fee-1148-4668-9e5c-7e82e4f1b175_425x425.jpg",
        productName: "The Zero Guilt Gluten Free Box",
        productPrice: 4899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/edd1f640-a354-4225-98cc-a3c69ec07682_425x425.jpg",
        productName: "Daily Dose Of Caffeine box",
        productPrice: 1899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ec5a37e9-3cd9-41e7-9961-12ec515d2e3d_425x425.jpg",
        productName: "Love For Food Hamper",
        productPrice: 2499,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bd5b3741-c9be-4ea4-b342-69708106d4cc_425x425.jpg",
        productName: "Food For Every Mood Hamper",
        productPrice: 2599,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9e4d686b-c600-4695-82c3-f6301c57eb03_425x425.jpg",
        productName: "Nuts About Nuts Hamper",
        productPrice: 5899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4ba7b06b-b138-4ee2-b255-b89f628b7839_425x425.jpg",
        productName: "Food Lover's Trunk",
        productPrice: 6849,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/22f36c6a-a913-4876-8fa2-89b520c5647d_425x425.jpg",
        productName: "The Binge Hamper",
        productPrice: 4049,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/884e9fd9-e1a8-4b10-a86d-04ed14467eb1_425x425.jpg",
        productName: "Classic go's",
        productPrice: 1799,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/742e6c6c-a4a2-41d9-a606-f60661a47181_425x425.jpg",
        productName: "Binge With Beer",
        productPrice: 4399,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cd583e34-3f1c-4962-97cd-0c12c70d1af4_425x425.jpg",
        productName: "De France Avec Amour",
        productPrice: 32549,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7d575df6-56c1-4a9a-99b0-57d367649eed_425x425.jpg",
        productName: "The Forbidden Fruit Hamper",
        productPrice: 849,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e7d75eee-bf4e-4d11-a37a-4b07fa27a802_425x425.jpg",
        productName: "Love For Wine",
        productPrice: 10849,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9c3e02ca-66a7-4f43-af2d-3ed05ce7cc4e_425x425.jpg",
        productName: "Chocolate Fetish",
        productPrice: 4449,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f0b607d3-f86e-4af6-937b-adb098e99832_425x425.jpg",
        productName: "Good Snacker",
        productPrice: 1199,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/22bcb00a-5097-42a3-be18-ba7deab9062a_425x425.jpg",
        productName: "The Baker's Dozen",
        productPrice: 4399,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c95456e9-65f9-4e73-ba09-0434dc64900f_425x425.jpg",
        productName: "The MF Husain Hamper",
        productPrice: 5499,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5dc76bc0-b9ba-46d2-9cfe-61b0559761f4_425x425.jpg",
        productName: "Fitness Snacker",
        productPrice: 1599,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/66ef1562-f57a-4843-ad41-6a19cd07a3d1_425x425.jpg",
        productName: "The Bose Krishnamachari Hamper",
        productPrice: 4949,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/589a65d7-b02e-43a5-b416-1e41b6556453_425x425.jpg",
        productName: "Embrace The Far East Hamper",
        productPrice: 2949,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d48d81c5-6cda-4599-90da-61964df0c69b_425x425.jpg",
        productName: "The Paresh Maity Hamper",
        productPrice: 6549,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7b227528-bb2e-4dd6-a074-82fc055905b1_425x425.jpg",
        productName: "The Exotic World Food Trunk",
        productPrice: 9699,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1600f815-9275-4e00-86e3-9b08605d5a73_425x425.jpg",
        productName: "La Dolce Vita",
        productPrice: 7399,
    },

    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e1a82cda-72a5-4359-9274-ab397dce0098_425x425.jpg",
        productName: "The Luxury World Food Trunk Handpic",
        productPrice: 9749,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/05b0b0f1-bf4d-4331-8802-9fa06c37f617_425x425.jpg",
        productName: "On Cloud Wine",
        productPrice: 8249,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8ff67fda-3d1f-494f-a9eb-568b9c256f35_425x425.jpg",
        productName: "The Perfect Snack box",
        productPrice: 5299,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4946abf7-c736-47fc-91c8-8717a24dbf14_425x425.jpg",
        productName: "Netflix & Chill Trunk",
        productPrice: 7099,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7ea20673-3f0b-4afe-888d-243ef5c9c38e_425x425.jpg",
        productName: "The Crunchy Munchies",
        productPrice: 1049,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/00b01a2b-5669-43a2-b908-a32ca8992abe_425x425.jpg",
        productName: "Food For Thought Hamper",
        productPrice: 4549,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/523aafc4-e07c-4240-9b71-4aba123626e5_425x425.jpg",
        productName: "Time To Wine Down",
        productPrice: 5849,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bfdaf8eb-c16a-4495-8d7d-971a00e13a7b_425x425.jpg",
        productName: "Happy Beerthday",
        productPrice: 1949,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/12120c2e-1018-481c-a34f-129ddfe43434_425x425.jpg",
        productName: "Tune Up immune",
        productPrice: 2649,
    },

    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cc9c59e0-424c-400d-88ea-cd3f2de45452_425x425.jpg",
        productName: "Drinking Buddy",
        productPrice: 1899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fabee1c2-7801-4f13-a21f-841daef4503d_425x425.jpg",
        productName: "Cheers And Beers",
        productPrice: 2299,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ac9a6ff2-c629-4f65-9c1a-2b8a590876b8_425x425.jpg",
        productName: "The Chocoholic",
        productPrice: 2249,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/393c9e50-421d-4583-af61-88c4e66ff873_425x425.jpg",
        productName: "The Six Senses Of Indulgence",
        productPrice: 3499,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0f8335be-5740-4652-b07a-f459ae86a120_425x425.jpg",
        productName: "The Tray Of Six Senses",
        productPrice: 1149,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3a144c15-1f3b-4f98-8869-980bcafa26fd_425x425.jpg",
        productName: "The Forbidden Fruit Large Hamper",
        productPrice: 1349,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f6875071-4e28-4a8e-bb70-a53ecf4b41b4_425x425.jpg",
        productName: "Healthy First",
        productPrice: 1199,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f3b77245-bb2a-44a7-ac3d-ba94153fa88f_425x425.jpg",
        productName: "Ultimate Beer Break",
        productPrice: 1899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/20f9c9c5-f4c0-4bc5-9a04-47673f98e70b_425x425.jpg",
        productName: "The Vitamin C Hamper",
        productPrice: 849,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/629604be-13e2-4669-9761-4095a5ee5a5e_425x425.jpg",
        productName: "Very Wednesday",
        productPrice: 1549,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/189a66fe-67e8-4f70-bb99-cf66b956edf1_425x425.jpg",
        productName: "Beer Mex Eve",
        productPrice: 2249,
    },

    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d3f189fd-2da7-4f60-a87d-3f6adb163fdd_425x425.jpg",
        productName: "The Gluten Free Box",
        productPrice: 4899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7ec70cd9-85a9-4e74-bc25-55e8ae4f6991_425x425.jpg",
        productName: "Italian Flesta",
        productPrice: 2999,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4a9a4be0-82c7-488d-81be-48364bcb7d66_425x425.jpg",
        productName: "Wish You Were Beer",
        productPrice: 1699,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f199e366-8fb3-4759-9920-b57ef88c62f1_425x425.jpg",
        productName: "Beer With Me",
        productPrice: 2499,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b8a18a91-ac0d-4c6a-a024-95d4fc949e35_425x425.jpg",
        productName: "Little Nibbles",
        productPrice: 4899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/14f49225-922e-48b4-9037-861f10264ec1_425x425.jpg",
        productName: "You're Chessy",
        productPrice: 4499,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6a1ed9a5-4d41-414e-b52c-a05aeed5f7d8_425x425.jpg",
        productName: "Nut & Chill",
        productPrice: 849,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4f44b1cc-67a1-4127-9844-98fb16477c48_425x425.jpg",
        productName: "The Mighty Celebration Trunk",
        productPrice: 7799,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f35f8024-bad9-4c1c-bca3-c5e794f4689b_425x425.jpg",
        productName: "The Italian Dream",
        productPrice: 11149,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d56b5d71-d946-4b55-91f0-3884396ceadf_425x425.jpg",
        productName: "The Entertainer",
        productPrice: 2749,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b4097132-c208-47b1-a7bb-546332cc2b72_425x425.jpg",
        productName: "The Sip Sip Hooray Trunk",
        productPrice: 10799,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f9f876f3-bb5b-4e88-9936-327cb102d6bc_425x425.jpg",
        productName: "The Lindt Case",
        productPrice: 6249,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0fad03c3-3c33-4011-bc8c-00d83ed02938_425x425.jpg",
        productName: "The Celebration Food Trunk Handpick",
        productPrice: 6849,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d112db56-3ab4-4469-839b-279886eb0b1c_425x425.jpg",
        productName: "Consious Indulgence Box",
        productPrice: 2149,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c787a3ef-0acb-4a22-8228-8e7ccbd8a74b_425x425.jpg",
        productName: "The Midnight Stash",
        productPrice: 899,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2b0bd2b4-8242-4cd0-9aad-c3884f8a4086_425x425.jpg",
        productName: "Wishing Wine",
        productPrice: 2699,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c2b990bc-2981-41cd-a78d-6483ed53a90d_425x425.jpg",
        productName: "Beer O'Clock",
        productPrice: 2399,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/66ef1562-f57a-4843-ad41-6a19cd07a3d1_425x425.jpg",
        productName: "The Bose Krishnamachari Hamper",
        productPrice: 4949,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/589a65d7-b02e-43a5-b416-1e41b6556453_425x425.jpg",
        productName: "Embrace The Far East Hamper",
        productPrice: 2949,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d48d81c5-6cda-4599-90da-61964df0c69b_425x425.jpg",
        productName: "The Paresh Maity Hamper",
        productPrice: 6549,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7b227528-bb2e-4dd6-a074-82fc055905b1_425x425.jpg",
        productName: "The Exotic World Food Trunk",
        productPrice: 9699,
    },
    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1600f815-9275-4e00-86e3-9b08605d5a73_425x425.jpg",
        productName: "La Dolce Vita",
        productPrice: 7399,
    },

    {
        productImg: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e1a82cda-72a5-4359-9274-ab397dce0098_425x425.jpg",
        productName: "The Luxury Food Trunk",
        productPrice: 9749,
    },
];


productsData.forEach(function (e) {

    let box = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", e.productImg);

    let title = document.createElement("p");
    title.style.fontWeight = "bold";
    title.innerText = e.productName;

    let quantity = document.createElement("p");
    quantity.innerText = "1 Pc"
    quantity.style.color = "black";
    quantity.style.fontWeight = "bold";

    let price = document.createElement("p");
    price.innerText = "₹"+" " + e.productPrice;

    let addImg = document.createElement("img");
    addImg.setAttribute("src", "https://www.naturesbasket.co.in/Images/CartAddBtn.PNG");

    //For addImg
    addImg.setAttribute("id", "AddToCart");
    addImg.addEventListener("click", function () {
        AddToCart(e);
    })

    let div1 = document.createElement("div");
    div1.setAttribute("class", "priceNAddBtn")
    div1.append(price, addImg);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "product-description");
    div2.append(title, quantity, div1);

    box.append(image, div2);

    document.querySelector(".product-container").append(box);

});

let cartArr = JSON.parse(localStorage.getItem("cartProduct")) || [];

function AddToCart(e) {
    cartArr.push(e);
    localStorage.setItem("cartProduct", JSON.stringify(cartArr));
    alert(e.productName + "Added to cart!");
}
var cart = document.querySelector("#cart")
cart.addEventListener("click", function ()
{
    window.location.href="/Nature-sBasket/CartPage/cart.html"
})
document.querySelector("#logoBoxImg").addEventListener("click", function ()
{
    window.location.href="/Nature-sBasket/index.html"
})