/*
* @Author: tangxiewen
* @Date:   2017-12-02 12:33:19
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-12-02 12:51:57
*/
'use strict';

require('page/common/header/index.js');

var page={
    init:function(){
        $('#about').addClass('selected')
    }
}

$(function(){
    page.init();
})