
const config = {
  serverHost: ''
}

export default {
  getServerUrl(path){
    return config.serverHost + path;
  }
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