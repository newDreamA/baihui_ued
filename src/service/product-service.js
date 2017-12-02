/*
* @Author: tangxiewen
* @Date:   2017-12-02 08:46:40
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-12-02 09:22:19
*/
'use strict';

var _mm = require('util/commonUtil.js');

var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;