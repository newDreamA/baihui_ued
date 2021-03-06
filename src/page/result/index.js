/*
* @Author: Rosen
* @Date:   2017-05-19 21:52:46
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-12-02 22:49:20
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/commonUtil.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    if(type === 'payment'){
        var orderNumber  = _mm.getUrlParam('orderNumber'),
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }
    // 显示对应的提示元素
    $element.show();
})