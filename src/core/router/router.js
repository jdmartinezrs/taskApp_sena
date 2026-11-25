import { routers } from "./routers.js";
export function startRouter(){

window.addEventListener("hashchange",(a)=>{
  let nuevo = window.location.hash.replace(/^#\/?/, " ");
  //console.log(initTasks())
console.log(routers)
  
})
};

