// ==UserScript==
// @name A Change
// @version 1.0.0
// @author AryloYeung
// @homepageURL https://github.com/Arylo/monkeyscripts
// @license MIT
// @run-at document-end
// @require https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==
(() => {
    "use strict";

    let arr = [];
    if (/(^要看|\s要看\s)/.test(document.title)) {
        arr = [".top_box", "#leftCcoup", "#rightCcoup", "#leftFloat"];
        for (const item of arr) {
            if ($(item).length > 0) {
                $(item).remove();
            }
        }
    }
    if (/(Mimi\s+Board\s+)/.test(document.title)) {
        $(".maintable > [align=center]").remove();
    }
})();
