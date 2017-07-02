// ==UserScript==
// @name         Ethereum Pricer
// @namespace    https://github.com/jknigga/eth-miner-price
// @version      0.1.8
// @description  Shows the price of Ethereum
// @author       Jakob Knigga
// @match        https://ethermine.org/miners/*
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @require      http://courses.ischool.berkeley.edu/i290-4/f09/resources/gm_jq_xhr.js
// @updateURL    https://raw.githubusercontent.com/jknigga/eth-miner-price/master/eth-price.userscript.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function ($, undefined) {
    $(function () {
        var eth_data;

        $(document).ready(function(){
            //$.getJSON('https://coinmarketcap-nexuist.rhcloud.com/api/eth', function (data) {
            //    eth_data = data;
            //});
            GM_xmlhttpRequest({
             method: "GET",
             url: "https://coinmarketcap-nexuist.rhcloud.com/api/eth",
             onload: function(xhr) {
              var data = eval("(" + xhr.responseText + ")");
              console.log(data.price.usd);
              var eth = $('.progress').parent().find('h4').html();
              var eth_parts = eth.split(" ");
              var dollars = eth_parts[0] * data.price.usd;
              $('.progress').parent().find('h4').after('<h5>$'+dollars.toFixed(2)+'</h5>');
            }
          });
        });
    });
})(window.jQuery.noConflict(true));
