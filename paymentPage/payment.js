  document.querySelector("button").addEventListener("click", verify)
        function verify() {
            window.location.href = "verify.html"
        }
    var card = document.querySelector("#Card")
     var count = 1;
    card.addEventListener("click",function()
    {  
        if(count%2!=0)
        {
            card.style.backgroundColor = "lavender"
            document.querySelector("#right").style.display = "block"

        }
        else{
            card.style.backgroundColor="white"
        document.querySelector("#right").style.display = "none"

        }
        count++
    })

    var store="FREEDELIVERY"
document.querySelector("#ApplyBtn").addEventListener("click", function ()
{
    var code = document.querySelector("#CouponCode").value
    if (code == store)
{
        document.querySelector("#del").innerText = 0
        document.querySelector("#TotalA").innerText = Number(subtotal) + Number(document.querySelector("#del").innerText)
        document.querySelector("#applied").innerText=store+"Applied"

    }
    else {
        document.querySelector("#del").innerText = 50
        document.querySelector("#TotalA").innerText = Number(subtotal) + Number(document.querySelector("#del").innerText)
        document.querySelector("#applied").innerText=""
        
        alert("Invalid code")
    }
    })
    var NoItem = JSON.parse(localStorage.getItem("cartProduct"))
    var subtotal=JSON.parse(localStorage.getItem("TotalAmount"))
    document.querySelector("#No").innerText = Number(NoItem.length)
    document.querySelector("#Subt").innerText=subtotal
    document.querySelector("#disc").innerText = 0
    document.querySelector("#del").innerText = 50

document.querySelector("#TotalA").innerText = Number(subtotal) + Number(document.querySelector("#del").innerText)
    