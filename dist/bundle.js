(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"images/0e56d05e08c9cf49890107e6c15082f0.png",n=e.p+"images/dabc17b153f2bd421935d6fa8798138a.png",a=e.p+"images/663cc253f315e911a7394fb231b3b207.png",c=e.p+"images/890ef3748a6f3de6995b177cec5204b2.png",r=e.p+"images/bda8907dac772b8e6efe3c01a042c92a.png";function s(e){const{location:s,current:i,forecast:o}=e,u=document.createElement("div");u.className="informer";const d=function(e,t){const n=document.createElement("div");return n.className="currentInfo",n.innerHTML=`\n        <div class="city">${e.name}</div>\n        <div class="currentTemp">${t.temp_c}°<img src="https:${t.condition.icon}"></div>\n        <div class="currentCondition">${t.condition.text}</div>`,n}(s,i),m=function(e){const c=document.createElement("div");return c.className="humPresSpeed",c.innerHTML=`\n    <div class="humidity"><img сlass='imgHumPresSpeed' src="${t}" alt="Hum" height="30px" width="30px">${e.humidity} %</div>\n    <div class="pressure"><img сlass='imgHumPresSpeed' src="${n}" alt="Pres" height="30px" width="30px">${e.pressure_mb} mBar</div>\n    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${a}" height="30px" width="30px">${e.wind_kph} km/h</div>`,c}(i),l=function(e){const t=document.createElement("div");return t.className="sun",t.innerHTML=`\n    <div class="sunrise"><img class="sunrise" src="${c}" alt="sunrise" height="30px" width="30px">${e.forecastday[0].astro.sunrise}</div>\n    <div class="sunset">${e.forecastday[0].astro.sunset}<img class="sunset" src="${r}" alt="sunset" height="30px" width="30px"></div>`,t}(o),p=function(e,t){const n=document.createElement("div"),a=document.createElement("div"),c=t.last_updated.slice(-5).split(":")[0],r=e.forecastday[0].hour.slice(c).concat(e.forecastday[1].hour).splice(1,24);return a.className="dayForecast",n.className="today",n.innerHTML='<div class="caption">Today</div>',r.forEach((e=>a.append(function(e){const t=document.createElement("div");return t.className="timeGroup",t.innerHTML=`\n    <div class="time">${e.time.substr(-5)}</div>\n    <div class="icon"><img src="https:${e.condition.icon}"></div>\n    <div class="time">${e.temp_c}°</div>`,t}(e)))),n.append(a),n}(o,i),f=function(e){const t=document.createElement("div");return t.className="nextDays",e.forecastday.slice(1).forEach((e=>t.append(function(e){const t=function(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:Error("error getting week day")}}(new Date(e.date).getDay()),n=document.createElement("div");return n.className="nextDay",n.innerHTML=`\n    <div class="nameNextDay">${t}</div>\n    <div class="iconNextDay"><img src="https:${e.day.condition.icon}"></div>\n    <div class="maxTempNextDay">${e.day.maxtemp_c}°</div>\n    <div class="minTempNextDay">${e.day.mintemp_c}°</div>`,n}(e)))),t}(o);u.append(d),u.append(m),u.append(l),u.append(p),u.append(f),document.querySelector(".app").prepend(u),document.querySelector(".dayForecast").addEventListener("mousewheel",(e=>{e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.querySelector(".dayForecast").scrollLeft-=40*t,e.preventDefault()}),!1)}const i=e.p+"images/94d69086bdb47533fb08532ab762a13f.png";const o=function(){const e=document.createElement("div"),t=function(){const e=document.createElement("div"),t=function(){const e=document.createElement("form"),t=function(){const e=document.createElement("input");return e.className="search",e.type="text",e.placeholder="Search",e}(),n=function(){const e=document.createElement("input");return e.className="submit",e.type="submit",e.value="",e.style.background=`url(${i}) no-repeat`,e}();return e.className="searchForm",e.append(t),e.append(n),e}();return e.className="searchDiv",e.append(t),e}(),n=function(){const e=document.createElement("div");return e.className="favouriteCities",e}();e.className="favouritePage",e.append(t),e.append(n),document.querySelector(".app").prepend(e),document.querySelector(".searchForm").addEventListener("submit",(e=>{e.preventDefault();(async function(e){const t=await fetch(e,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(t.status)})(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${document.querySelector(".search").value}&days=4&aqi=no&alerts=no`).then((e=>console.log(e))).catch(alert),document.querySelector(".search").value=""}))},u=function(){const e=document.createElement("div");e.className="settingPage",document.querySelector(".app").prepend(e),async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no",{mode:"cors"});if(200==e.status)return await e.json();throw new Error(e.status)}().then((e=>function(e){const{current:t,location:n}=e;console.log(t),console.log(n)}(e))).catch(alert)},d=document.querySelector(".controlMenu"),m=document.querySelector("#homeButton"),l=document.querySelector("#favouriteButton"),p=document.querySelector("#settingButton");function f(e,t,n){l.setAttribute("fill",e),m.setAttribute("fill",t),p.setAttribute("fill",n)}d.addEventListener("click",(({target:e})=>{const t=function(e){return"path"===e.tagName?e.parentNode:e}(e);switch(t.id){case"favouriteButton":document.querySelector(".app").firstChild.remove(),o(),f("#a37695","#37515e","#37515e");break;case"homeButton":document.querySelector(".app").firstChild.remove(),async function(e){const t=await fetch(e,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(t.status)}("http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no").then((e=>s(e))).catch(alert),f("#37515e","#a37695","#37515e");break;case"settingButton":document.querySelector(".app").firstChild.remove(),u(),f("#37515e","#37515e","#a37695")}})),u()})();