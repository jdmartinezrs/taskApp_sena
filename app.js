import {mountAppLayout} from "./src/styles/template/app-layout.js"
import { navigationItems } from "./src/core/item.js";
//import{}from "./src/core/router/router.js"


const rootElement = document.querySelector('#app-root');

export function startApp(){
    //alert("Hola")
    mountAppLayout(rootElement,{sectionTitle:"Tareas", navigationItems});
}

