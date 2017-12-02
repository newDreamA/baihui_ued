/*
* @Author: tangxiewen
* @Date:   2017-11-06 19:29:07
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-12-02 12:51:25
*/
require('./index.css');
var page = {
    init:function(){
        this.bindEvent();
    },

     bindEvent:function(){
      var _this = this;
        $('.nav-item li').click(function() {
        $(this).siblings('li').removeClass('selected');  // 删除其他兄弟元素的样式
        $(this).addClass('selected');                            // 添加当前元素的样式
      });
     }
     
   

   
}

$(function(){
    page.init();
})

 