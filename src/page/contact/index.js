/*
* @Author: tangxiewen
* @Date:   2017-12-02 12:55:10
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-12-02 22:12:22
*/
'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');

var page={
    init:function(){
        $('#contactUs').addClass('selected')
    }
}

$(function(){
    page.init();
})