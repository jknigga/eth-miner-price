// ==UserScript==
// @name         Ethereum Pricer
// @namespace    https://github.com/jknigga/eth-miner-price
// @version      0.1
// @description  Shows the price of Ethereum
// @author       Jakob Knigga
// @match        https://ethermine.org/miners/*
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @updateURL    https://raw.githubusercontent.com/jknigga/eth-miner-price/master/eth-price.userscript.js
// @grant        none
// ==/UserScript==

(function ($, undefined) {
    $(function () {
        
        var eth_price = $.getJSON('https://coinmarketcap-nexuist.rhcloud.com/api/eth');
        
        $(document).ready(function(){
           console.log(eth_price);
        });
    });
})(window.jQuery.noConflict(true));