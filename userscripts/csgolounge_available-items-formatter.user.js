// ==UserScript==
// @name        CSGO Lounge Available Items formatter
// @namespace   http://csgolounge.com/availableweapons
// @include     http://csgolounge.com/availableweapons
// @grant       none
// ==/UserScript==
document.title="Available items in CSGO Lounge";
document.styleSheets[0].insertRule(".hover_bold:hover {font-weight: bold;}",document.styleSheets[0].cssRules.length);
document.body.innerHTML=document.body.innerHTML.replace(/\t\t/g,'</br>').replace(/StatTrakâ„¢/g,'StatTrak™').replace(/&lt;marketname&gt;/g,'<span class="hover_bold">').replace(/&lt;\/marketname&gt;&lt;price&gt;/g,'\t-\t$').replace(/&lt;\/price&gt;/g,'').replace(/<\/br>/g,"</span></br>");