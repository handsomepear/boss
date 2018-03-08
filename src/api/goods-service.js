import {ajaxGet, ajaxPost} from '@/util/http.js';


const _goods = {
    getGoodsList(params){
        return ajaxPost('goods/list', params);
    }
}


export default _goods;