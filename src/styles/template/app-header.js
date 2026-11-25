export function createAppHeader(titulo){
    return ` <header class= "app-header">
    <h1 class = "app-header__title">${titulo}</h1>
    </header>`
//alert("header")
}


window.addEventListener("haschange",(event)=>{
    console.log("URL anterior:", event.oldURL);
    console.log("URL nueva:", event.newURL);
    console.log("Hash actual:", location.hash)
})