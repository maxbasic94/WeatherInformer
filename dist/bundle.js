(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"images/0e56d05e08c9cf49890107e6c15082f0.png",n=e.p+"images/dabc17b153f2bd421935d6fa8798138a.png",i=e.p+"images/663cc253f315e911a7394fb231b3b207.png",c=e.p+"images/890ef3748a6f3de6995b177cec5204b2.png",a=e.p+"images/bda8907dac772b8e6efe3c01a042c92a.png",s=function(e,t,n){let i={};return"c"===e?(i.tempUnit="Celsius",i.tempRequest=n.temp_c,i.tempSign="°"):(i.tempUnit="Fahrenheit",i.tempRequest=n.temp_f,i.tempSign="f"),"kph"===t?(i.windUnit="kph",i.windSpeedRequest=n.wind_kph):(i.windUnit="mph",i.windSpeedRequest=n.wind_mph),i};function r(e){const{location:r,current:o,forecast:d}=e,{temperatureUnit:u="c",windSpeedUnit:l="kph"}=localStorage,{tempRequest:p,tempSign:m,tempUnit:v,windUnit:h,windSpeedRequest:g}=s(u,l,o),f=document.createElement("div");f.className="informer";const S=function(e,t,n,i){const c=document.createElement("div");return c.className="currentInfo",c.innerHTML=`\n        <div class="city">${e.name}</div>\n        <div class="currentTemp">${n}${i}<img src="https:${t.condition.icon}"></div>\n        <div class="currentCondition">${t.condition.text}</div>`,c}(r,o,p,m),y=function(e,c,a){const s=document.createElement("div");return s.className="humPresSpeed",s.innerHTML=`\n    <div class="humidity"><img сlass='imgHumPresSpeed' src="${t}" alt="Hum" height="30px" width="30px">${e.humidity} %</div>\n    <div class="pressure"><img сlass='imgHumPresSpeed' src="${n}" alt="Pres" height="30px" width="30px">${e.pressure_mb} mBar</div>\n    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${i}" height="30px" width="30px">${a} ${c}</div>`,s}(o,h,g),w=function(e){const t=document.createElement("div");return t.className="sun",t.innerHTML=`\n    <div class="sunrise"><img class="sunrise" src="${c}" alt="sunrise" height="30px" width="30px">${e.forecastday[0].astro.sunrise}</div>\n    <div class="sunset">${e.forecastday[0].astro.sunset}<img class="sunset" src="${a}" alt="sunset" height="30px" width="30px"></div>`,t}(d),$=function(e,t,n,i){const c=document.createElement("div"),a=document.createElement("div"),s=t.last_updated.slice(-5).split(":")[0],r=e.forecastday[0].hour.slice(s).concat(e.forecastday[1].hour).splice(1,24);return a.className="dayForecast",c.className="today",c.innerHTML='<div class="caption">Today</div>',r.forEach((e=>a.append(function(e,t,n){const i=document.createElement("div");let c;return c="Celsius"===t?e.temp_c:e.temp_f,i.className="timeGroup",i.innerHTML=`\n    <div class="time">${e.time.substr(-5)}</div>\n    <div class="icon"><img src="https:${e.condition.icon}"></div>\n    <div class="time">${c}${n}</div>`,i}(e,n,i)))),c.append(a),c}(d,o,v,m),q=function(e,t,n){const i=document.createElement("div");return i.className="nextDays",e.forecastday.slice(1).forEach((e=>i.append(function(e,t,n){const i=function(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:Error("error getting week day")}}(new Date(e.date).getDay()),c=document.createElement("div");let a,s;return"Celsius"===n?(a=e.day.maxtemp_c,s=e.day.mintemp_c):(a=e.day.maxtemp_f,s=e.day.mintemp_f),c.className="nextDay",c.innerHTML=`\n    <div class="nameNextDay">${i}</div>\n    <div class="iconNextDay"><img src="https:${e.day.condition.icon}"></div>\n    <div class="maxTempNextDay">${a}${t}</div>\n    <div class="minTempNextDay">${s}${t}</div>`,c}(e,t,n)))),i}(d,m,v);f.append(S),f.append(y),f.append(w),f.append($),f.append(q),document.querySelector(".app").prepend(f),document.querySelector(".dayForecast").addEventListener("mousewheel",(e=>{e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.querySelector(".dayForecast").scrollLeft-=40*t,e.preventDefault()}),!1)}const o=function(e){(async function(e){const t=await fetch(e,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(t.status)})(e).then((e=>r(e))).catch(alert)},d=e.p+"images/94d69086bdb47533fb08532ab762a13f.png";const u=function(){const e=document.createElement("div"),t=function(){const e=document.createElement("div"),t=function(){const e=document.createElement("form"),t=function(){const e=document.createElement("input");return e.className="search",e.type="text",e.placeholder="Search",e}(),n=function(){const e=document.createElement("input");return e.className="submit",e.type="submit",e.value="",e.style.background=`url(${d}) no-repeat`,e}();return e.className="searchForm",e.append(t),e.append(n),e}();return e.className="searchDiv",e.append(t),e}(),n=function(){const e=document.createElement("div");return e.className="favouriteCities",e}();e.className="favouritePage",e.append(t),e.append(n),document.querySelector(".app").prepend(e),document.querySelector(".searchForm").addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".search").value;if(!t)return;console.log(t);const n=async function(e){const t=await fetch(e,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(t.status)}(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${t}&days=4&aqi=no&alerts=no`);n.then((e=>console.log(e))).catch(alert),document.querySelector(".search").value=""}))};function l(){"Celsius"===document.querySelector(".tempSettingUnit").textContent?(document.querySelector(".tempSettingUnit").textContent="Fahrenheit",localStorage.temperatureUnit="f"):(document.querySelector(".tempSettingUnit").textContent="Celsius",localStorage.temperatureUnit="c"),document.querySelector(".settingPage").remove(),m()}function p(){"kph"===document.querySelector(".windSpeedSettingUnit").textContent?(document.querySelector(".windSpeedSettingUnit").textContent="mph",localStorage.windSpeedUnit="mph"):(document.querySelector(".windSpeedSettingUnit").textContent="kph",localStorage.windSpeedUnit="kph"),document.querySelector(".settingPage").remove(),m()}function m(){const e=document.createElement("div");e.className="settingPage",document.querySelector(".app").prepend(e),async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no",{mode:"cors"});if(200==e.status)return await e.json();throw new Error(e.status)}().then((e=>function(e){const{current:c,location:a}=e,{temperatureUnit:r="c",windSpeedUnit:o="kph"}=localStorage,{tempUnit:d,tempRequest:u,tempSign:m,windUnit:v,windSpeedRequest:h}=s(r,o,c);document.querySelector(".settingPage").innerHTML=`\n    <div class="locationDiv">\n        <div class="locationCaptionDiv">Your Location Now</div>\n        <div class="locationDescriptionDiv">${a.name}, ${a.country}</div>\n    </div>\n    <div class="locationInfoDiv">\n        <div class="locationIconDiv"><img class="sunrise" src="https:${c.condition.icon}" alt="sunrise" height="150px" width="150px"></div>\n        <div class="locationIconDescriptionDiv">${c.condition.text}</div>\n        <div class="localTempDiv">${u}${m}</div>\n    </div>\n    <div class="locationExtraInfoDiv">\n        <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${i}" height="30px" width="30px">${h} ${v}</div>\n        <div class="humidity"><img сlass='imgHumPresSpeed' src="${t}" alt="Hum" height="30px" width="30px">${c.humidity} %</div>\n        <div class="pressure"><img сlass='imgHumPresSpeed' src="${n}" alt="Pres" height="30px" width="30px">${c.pressure_mb} mBar</div>\n    </div>\n    <div class="locationEditDiv">\n        <div class="tempSettingDiv">\n            <div class="tempSettingCaption">Temperature</div>\n            <div class="tempSettingUnit">${d}</div>\n        </div>\n        <div class="speedWindSettingDiv">\n            <div class="windSpeedSettingCaption">Wind Speed</div>\n            <div class="windSpeedSettingUnit">${v}</div>\n        </div>\n        <div class="sourceSettingDiv">\n            <div class="sourceSettingCaption">Source</div>\n            <div class="sourceSettingUnit">weatherapi.com</div>\n        </div>\n    </div>`,console.log(c),console.log(a),document.querySelector(".tempSettingUnit").addEventListener("click",l),document.querySelector(".windSpeedSettingUnit").addEventListener("click",p)}(e))).catch(alert)}const v=m,h=document.querySelector(".controlMenu"),g=document.querySelector("#homeButton"),f=document.querySelector("#favouriteButton"),S=document.querySelector("#settingButton"),y="http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no";function w(e,t,n){f.setAttribute("fill",e),g.setAttribute("fill",t),S.setAttribute("fill",n)}h.addEventListener("click",(({target:e})=>{const t=function(e){return"path"===e.tagName?e.parentNode:e}(e);switch(t.id){case"favouriteButton":document.querySelector(".app").firstChild.remove(),u(),w("#a37695","#37515e","#37515e");break;case"homeButton":document.querySelector(".app").firstChild.remove(),o(y),w("#37515e","#a37695","#37515e");break;case"settingButton":document.querySelector(".app").firstChild.remove(),v(),w("#37515e","#37515e","#a37695")}})),o(y)})();