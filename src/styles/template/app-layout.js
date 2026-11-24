import {createAppHeader} from "./app-header.js"
import {createAppSideBar} from "./app-sidebar.js"

function createAppLayout({sectionTitle, navigationItems}){
return `<div class= "app-layout">
   ${createAppHeader(sectionTitle)}
   ${createAppSideBar(navigationItems)}
    <main class = "app-main">
    </main>
    </div>`;
}

function handleLayoutClick(event, layoutElement){

}

export function mountAppLayout(rootElement,options){

rootElement.innerHTML = createAppLayout(options);
const layoutElement = document.querySelector(".app-layout")
layoutElement.addEventListener('click',(event)=>(handleLayoutClick(event,layoutElement)
))
}