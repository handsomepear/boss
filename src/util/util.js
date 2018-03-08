
let util = {};



util.title = function(title) {
  title = title || 'boss';
  window.document.title = title;
}


/**
 * 存储localstorage
 */

 export const setStore = (name, content) => {
   if(!name) return;
   if(typeof content !== "string"){
     content = JSON.stringify(content);
   }
   window.localStorage.setItem(name, content);
 }

/**
 * 获取localstorage
 */

 export const getStore = name => {
   if(!name) return;
   window.localStorage.getItem(name)
 }

export function oneOf(ele, targetArr){
  if(targetArr.indexOf(ele) >= 0){
    return true;
  }else {
    return false;
  }
}