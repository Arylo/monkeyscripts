// ==UserScript==
// @name        A Change
// @namespace   https://github.com/Arylo
// @version     1.0.1
// @author      AryloYeung
// @homepageURL https://github.com/Arylo/monkeyscripts
// @updateURL   https://github.com/Arylo/monkeyscripts/releases/latest/download/index.js
// @downloadURL https://github.com/Arylo/monkeyscripts/releases/latest/download/index.js
// @supportURL  https://github.com/Arylo/monkeyscripts/issues
// @license     MIT
// @run-at      document-end
// @exclude     http://*.acfun.cn/*
// @exclude     https://*
// @require     https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==
(() => {
    "use strict";
    let arr = [];
    if (/(^要看|\s要看)\s/.test(document.title)) {
        // 删除广告
        arr = [".top_box", "#leftCcoup", "#rightCcoup", "#leftFloat"];
        for (const item of arr) {
            if ($(item).length > 0) {
                $(item).remove();
            }
        }
        // 跳转图片项大小
        $(".col-md-2.col-sm-3.col-xs-4")
            .removeClass("col-md-2 col-sm-3 col-xs-4")
            .addClass("col-md-4");
        // 调整播放页宽度
        if ($("#zanpiancms_player").length) {
            $(".container")
                .removeClass("container")
                .addClass("container-fluid");
        }
        // 导航在原页面跳转
        $(".row .row-item-content .item a").removeAttr("target");
    } else if (/Mimi\s+Board\s+/.test(document.title)) {
        $(".maintable > [align=center]").remove();
    }
})();
