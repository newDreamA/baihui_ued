/*
* @Author: tangxiewen
* @Date:   2017-11-06 10:30:18
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-11-07 13:29:27
*/
'use strict';
require('./index.css');
require('page/common/header/index.js');
require('util/slider/index.js');

require('util/bootstrap/index.js');
var templateBanner  = require('./banner.string');
var _mm             = require('util/commonUtil.js');

$(function() {
    // 渲染banner的html
    var bannerHtml  = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });



    //课程分类展示-start
    $(".item").popover({
            trigger:'manual',
            placement : 'right',
            html: 'true',
            content : '',
            animation: false
        }).on("mouseenter", function () {
            var cid = $(this).attr('data-id');
            $('#' + cid).show();
            $('#' + cid).hover(function(){
                $('#' + cid).show();
            },function(){
                $('#' + cid).hide();
            });
        }).on("mouseleave", function () {
            var cid = $(this).attr('data-id');
            $('#' + cid).hide();
        });
        //课程分类展示-end
});