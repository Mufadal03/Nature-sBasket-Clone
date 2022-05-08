var form = document.querySelector("form")
form.addEventListener("submit", StoreAdd)
var addressArr = JSON.parse(localStorage.getItem("AddressData"))||[]
function StoreAdd()
{
    event.preventDefault()
    var myData = {
        FirstName: form.Fname.value,
        LastName: form.Lname.value,
        userAdd: form.Add.value,
        Landmark: form.Lmark.value,
        PinCode: form.Pcode.value,
        country: form.Country.value,
        state: form.State.value,
        city: form.City.value,
        Mobileno:form.MobileNo.value
    }
    addressArr.push(myData)
    localStorage.setItem("AddressData", JSON.stringify(addressArr))
    window.location.href="../paymentPage/payment.html"
}
if (addressArr.length == 0)
{
    var h3 = document.createElement("h3")
    h3.innerText = "There is no saved Address"
    document.querySelector("#leftContainer").append(h3)
}
else {
    DisplayData(addressArr)
    function DisplayData(data)
    {
        data.forEach(function (elem,index)
        {
            var div =document.createElement("div")
            var h3 = document.createElement("h3")
            h3.innerText = elem.FirstName + " " + elem.LastName
            var p1 = document.createElement("p")
            p1.innerText = elem.userAdd
            var p2 = document.createElement("p")
            p2.innerText = elem.Landmark
            var p3 = document.createElement("p")
            p3.innerText=elem.PinCode
            var p4 = document.createElement("p")
            p4.innerText=elem.country
            var p5= document.createElement("p")
            p5.innerText=elem.state
            var p6 = document.createElement("p")
            p6.innerText=elem.city
            var p7 = document.createElement("p")
            p7.innerText = elem.Mobileno
            var btn = document.createElement("button")
            btn.innerText = "Delete"
            btn.addEventListener("click", function ()
            {
                DeleteMe(elem,index)
            })
            div.append(h3,p1,p2,p3,p4,p5,p6,p7,btn)
            document.querySelector("#saved").append(div)
        })
    }
}
function DeleteMe(elem, index)
{
    addressArr.splice(index, 1)
    localStorage.setItem("AddressData",JSON.stringify(addressArr))
    window.location.reload()
}