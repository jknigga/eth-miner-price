// ==UserScript==
// @name         Ethereum Pricer
// @namespace    https://github.com/jknigga/eth-miner-price
// @version      0.1.2
// @description  Shows the price of Ethereum
// @author       Jakob Knigga
// @match        https://ethermine.org/miners/*
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @require      http://courses.ischool.berkeley.edu/i290-4/f09/resources/gm_jq_xhr.js
// @updateURL    https://raw.githubusercontent.com/jknigga/eth-miner-price/master/eth-price.userscript.js
// @grant        none
// ==/UserScript==

(function ($, undefined) {
    $(function () {
        var eth_data;
        
        $(document).ready(function(){
            $.getJSON('https://coinmarketcap-nexuist.rhcloud.com/api/eth', function (data) {
                eth_data = data;
            });
           console.log(eth_data.price.usd);
        });
    });
})(window.jQuery.noConflict(true));
