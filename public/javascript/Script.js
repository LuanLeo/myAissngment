const button = document.querySelectorAll("button")
//console.log(button)
button.forEach(function(button,index){{
    button.addEventListener("click",function(event){{
        var buttonItem = event.target
        var product = buttonItem.parentElement
        var productName = product.querySelector("h4").innerText
        var productPrice = product.querySelector("span").innerText
        
        //console.log(productName, productPrice)

        addcart(productName, productPrice)
        {
        }
    }})
}})

function addcart(  productName, productPrice)
{
    var addtr = document.createElement("tr")
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT=document.querySelectorAll(".name")
            if(productT[i].innerHTML==productName){
            alert("Already in cart")
            return
        }     
    }
    var trcontent = '<tr><th class="name">'+productName+'</th><th><input style="width:50px;outline: none;"type="number" value="1" min="1"></th><th><span>'+productPrice+'</span><sup>$</sup></th><th><button name="button" type="button" class="cart-delete">Delete</button></th></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    deleteCart()
    carttotal()
}
function deleteCart(){
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT=document.querySelectorAll(".cart-delete")
       // console.log(productT[i])
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
        })
    }
}
function carttotal(){
    var cartItem=document.querySelectorAll("tbody tr")
    var totalC=0
    for(var i=0;i<cartItem.length;i++){
        var inputValue=cartItem[i].querySelector("input").value
         var productPrice=cartItem[i].querySelector("span").innerHTML
        totalA=inputValue*productPrice
        //totalB=totalA.toLocaleString('de-DE')
        totalC=totalC+totalA
        }
        var carttotalA = document.querySelector(".total-price span")
        carttotalA.innerHTML=totalC
        inputchange()
}
function inputchange(){
    var cartItem=document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue=cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
        carttotal()
        })
    }
}