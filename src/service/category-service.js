/*
* @Author: tangxiewen
* @Date:   2017-11-29 14:16:38
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-11-29 14:29:11
*/
'use strict';
var _mm = require('util/commonUtil.js');

var _category = {
     // 获取购物车数量
    getAllCategories : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/category/queryAllClassify.do'),
            success : resolve,
            error   : reject
        });
    },
  } 

module.exports = _category;