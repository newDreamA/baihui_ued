/*
* @Author: tangxiewen
* @Date:   2017-12-02 08:42:45
* @Last Modified by:   tangxiewen
* @Last Modified time: 2017-12-02 10:10:50
*/
'use strict';
require('./index.css');
require('page/common/header/index.js');
var _mm             = require('util/commonUtil.js');
var _product        = require('service/product-service.js');
var Pagination      = require('util/pagination/index.js');
var templateIndex   = require('./list.string');

var page = {
    data : {
        listParam : {
            keyword         : _mm.getUrlParam('keyword')    || '',
            categoryId      : _mm.getUrlParam('categoryId') || '',
            orderBy         : _mm.getUrlParam('orderBy')    || 'default',
            pageNum         : _mm.getUrlParam('pageNum')    || 1,
            pageSize        : _mm.getUrlParam('pageSize')   || 10
        }
    },
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        this.loadList();
    },
    bindEvent : function(){
        var _this = this;
        // 排序的点击事件
        $('.sort-item').click(function(){
            var $this = $(this);
            _this.data.listParam.pageNum = 1;
            // 点击默认排序
            if($this.data('type') === 'default'){
                // 已经是active样式
                if($this.hasClass('active')) {
                    return;
                }
                // 其他
                else{
                    $this.addClass('active').siblings('.sort-item')
                        .removeClass('active asc desc');
                    _this.data.listParam.orderBy = 'default';
                }
            }
            // 点击价格排序
            else if($this.data('type') === 'price'){
                // active class 的处理
                $this.addClass('active').siblings('.sort-item')
                        .removeClass('active asc desc');
                // 升序、降序的处理
                if(!$this.hasClass('asc')){
                    $this.addClass('asc').removeClass('desc');
                    _this.data.listParam.orderBy = 'price_asc';
                }else{
                    $this.addClass('desc').removeClass('asc');
                    _this.data.listParam.orderBy = 'price_desc';
                }
            }
            // 重新加载列表
            _this.loadList();
        });
    },
    // 加载list数据
    loadList : function(){
        var _this       = this,
            listHtml    = '',
            listParam   = this.data.listParam,
            $pListCon   = $('.p-list-con');
        $pListCon.html('<div class="loading"></div>');
        // 删除参数中不必要的字段
        listParam.categoryId 
            ? (delete listParam.keyword) : (delete listParam.categoryId);
        // 请求接口
        _product.getProductList(listParam, function(res){
            listHtml = _mm.renderHtml(templateIndex, res);
            $pListCon.html(listHtml);
            _this.loadPagination({
                hasPreviousPage : res.data.hasPreviousPage,
                prePage         : res.data.prePage,
                hasNextPage     : res.data.hasNextPage,
                nextPage        : res.data.nextPage,
                pageNum         : res.data.pageNum,
                pages           : res.data.pages
            });
        }, function(errMsg){
            _mm.errorTips(errMsg);
        });
    },
    // 加载分页信息
    loadPagination : function(pageInfo){
        var _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container : $('.pagination'),
            onSelectPage : function(pageNum){
                _this.data.listParam.pageNum = pageNum;
                _this.loadList();
            }
        }));
    }
};
$(function(){
    page.init();
})