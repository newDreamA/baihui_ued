/*
* @Author: tangxiewen
* @Date:   2017-11-06 10:30:18
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-12-02 22:06:54
*/
'use strict';
require('./index.css');
require('page/common/header/index.js');
require('util/slider/index.js');
require('page/common/nav/index.js');

require('util/bootstrap/index.js');
var templateBanner  = require('./banner.string');
var templateCategory = require('./category.string');
var _mm             = require('util/commonUtil.js');
var _category = require('service/category-service');

$(function() {
     $('#home').addClass('selected')
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

    _category.getAllCategories(function(res){
    $(".item").popover('destroy')
      var categoryHtml = _mm.renderHtml(templateCategory,res);
      $('.menuContent').html(categoryHtml);
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

    },function(errMsg){
         _mm.errorTips(errMsg);

    });


   
});