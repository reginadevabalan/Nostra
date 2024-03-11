var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

//offer

var offer = document.getElementById("offer")
var close = document.getElementById("close")

close.addEventListener("click",function(){
    offer.style.display="none"
})