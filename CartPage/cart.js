var cartItem = JSON.parse(localStorage.getItem("cartProduct"))
displayData(cartItem)
var sum = 0
function displayData(data)
{
    var subt=0
    data.forEach(function (elem,index) {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.setAttribute("id", "BillImg")
        var prodImg = document.createElement("img")
        prodImg.src = elem.productImg
        prodImg.style.width = "50px"
        prodImg.style.height = "50px"
        prodImg.style.marginRight="20px"
        var prodName = document.createElement("p")
        prodName.innerText = elem.productName
         var btn = document.createElement("button")
        btn.innerText = "Delete"    
        td1.append(prodImg, prodName)
        var td2 = document.createElement("td")
        td2.innerText=elem.productPrice
        var td3 = document.createElement("td")
        td3.innerText = 0
        var td4 = document.createElement("td")
        var s1 = document.createElement("span")
        s1.innerText = "-"
        var count = 1
        var s2 = document.createElement("span")
        s2.innerText = count
        var s3 =document.createElement("span")
        s3.innerText = "+"
        s1.addEventListener("click", function ()
        {   
            count--
            s2.innerText = count
            td5.innerText = (Number(elem.productPrice)) * (Number(s2.innerText))
             if (count == 0)
            {
                 DeleteMe(elem,index)
            }
        })
        s3.addEventListener("click", function ()
        {
            count++
            s2.innerText=count
            td5.innerText = (Number(elem.productPrice)) * (Number(s2.innerText))
        })
        td4.append(s1,s2,s3)
        var td5 = document.createElement("td")
        td5.innerText = (Number(elem.productPrice)) * (Number(s2.innerText))
        subt =subt +(Number(elem.productPrice)) * (Number(s2.innerText))
        localStorage.setItem("TotalAmount",JSON.stringify(subt))
        tr.append(td1, td2, td3, td4, td5)
        document.querySelector("tbody").append(tr)
    })  
}

    
document.querySelector("#ItemNo").innerText = cartItem.length
document.querySelector("#subTotal").innerText=JSON.parse(localStorage.getItem("TotalAmount"))
document.querySelector("#DeliveryC").innerText =50
document.querySelector("#TotalC").innerText=Number(document.querySelector("#subTotal").innerText)+50
        
function DeleteMe(elem,index)
{
    cartItem.splice(index, 1)
    localStorage.setItem("cartProduct", JSON.stringify(cartItem))
    window.location.reload()
}
var cart = document.querySelector("#cart")
cart.style.cursor="pointer"
cart.addEventListener("click", function ()
{
    window.location.href="/CartPage/cart.html"
})