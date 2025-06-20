/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
;/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;/*
 *  Menuzord - Responsive Megamenu
 * -----------------------------------------------
 */
!(function (e) {
    var mz_generate_id = function () {
        return (
            "mz_" +
            Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        );
    };

    jQuery.fn.menuzord = function (n) {
        function i(n) {
            "fade" == p.effect
                ? e(n)
                      .children(".dropdown, .megamenu")
                      .stop(!0, !0)
                      .delay(p.showDelay)
                      .fadeIn(p.showSpeed)
                      .addClass(p.animation)
                : e(n)
                      .children(".dropdown, .megamenu")
                      .stop(!0, !0)
                      .delay(p.showDelay)
                      .slideDown(p.showSpeed)
                      .addClass(p.animation);
        }
        function d(n) {
            "fade" == p.effect
                ? e(n)
                      .children(".dropdown, .megamenu")
                      .stop(!0, !0)
                      .delay(p.hideDelay)
                      .fadeOut(p.hideSpeed)
                      .removeClass(p.animation)
                : e(n)
                      .children(".dropdown, .megamenu")
                      .stop(!0, !0)
                      .delay(p.hideDelay)
                      .slideUp(p.hideSpeed)
                      .removeClass(p.animation),
                e(n)
                    .children(".dropdown, .megamenu")
                    .find(".dropdown, .megamenu")
                    .stop(!0, !0)
                    .delay(p.hideDelay)
                    .fadeOut(p.hideSpeed);
        }
        function o() {
            e(g).find(".dropdown, .megamenu").hide(0),
                navigator.userAgent.match(/Mobi/i) ||
                window.navigator.msMaxTouchPoints > 0 ||
                "click" == p.trigger
                    ? (e(
                          ".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a"
                      ).bind("click touchstart", function (n) {
                          return (
                              n.stopPropagation(),
                              n.preventDefault(),
                              e(this)
                                  .parent("li")
                                  .siblings("li")
                                  .find(".indicator")
                                  .parent("a")
                                  .attr("aria-expanded", false),
                              e(this).attr("aria-expanded", true),
                              e(this)
                                  .parent("li")
                                  .siblings("li")
                                  .find(".dropdown, .megamenu")
                                  .stop(!0, !0)
                                  .fadeOut(300),
                              "none" ==
                              e(this).siblings(".dropdown, .megamenu").css("display")
                                  ? (i(e(this).parent("li")), !1)
                                  : (d(e(this).parent("li")),
                                    void (window.location.href = e(this).attr("href")))
                          );
                      }),
                      e(document).bind("click.menu touchstart.menu", function (n) {
                          0 == e(n.target).closest(".menuzord").length &&
                              e(".menuzord-menu")
                                  .find(".dropdown, .megamenu")
                                  .fadeOut(300);
                      }))
                    : e(w)
                          .bind("mouseenter", function () {
                              i(this);
                          })
                          .bind("mouseleave", function () {
                              d(this);
                          });
        }
        function t() {
            e(g).find(".dropdown, .megamenu").hide(0),
                e(g)
                    .find(".indicator")
                    .each(function () {
                        e(this).parent("a").siblings(".dropdown, .megamenu").length >
                            0 &&
                            e(this).bind("click", function (n) {
                                var a_parent = e(this).parent();
                                e(g).scrollTo({ top: 45, left: 0 }, 600);
                                "A" == a_parent.prop("tagName") && n.preventDefault();
                                if (
                                    a_parent
                                        .siblings(".dropdown, .megamenu")
                                        .css("display") == "none"
                                ) {
                                    // close others
                                    a_parent
                                        .parent("li")
                                        .siblings("li")
                                        .find(".indicator")
                                        .parent("a")
                                        .attr("aria-expanded", false);
                                    a_parent
                                        .parent("li")
                                        .siblings("li")
                                        .find(".dropdown, .megamenu")
                                        .slideUp(p.hideSpeed);

                                    // open this
                                    a_parent.attr("aria-expanded", true);
                                    a_parent
                                        .siblings(".dropdown, .megamenu")
                                        .delay(p.showDelay)
                                        .slideDown(p.showSpeed);
                                } else {
                                    a_parent.attr("aria-expanded", false);
                                    a_parent
                                        .siblings(".dropdown, .megamenu")
                                        .slideUp(p.hideSpeed);
                                }
                            });
                    });
        }
        function a() {
            var n = e(g).children("li").children(".dropdown, .megamenu");
            if (e(window).innerWidth() > v)
                for (var i = e(f).outerWidth(!0), d = 0; d < n.length; d++)
                    e(n[d]).parent("li").position().left + e(n[d]).outerWidth() > i
                        ? e(n[d]).css("right", 0)
                        : ((i == e(n[d]).outerWidth() ||
                              i - e(n[d]).outerWidth() < 20) &&
                              e(n[d]).css("left", 0),
                          e(n[d]).parent("li").position().left + e(n[d]).outerWidth() <
                              i && e(n[d]).css("right", "auto"));
        }
        function s() {
            e(g).hide(0),
                e(m)
                    .show(0)
                    .click(function () {
                        if ("none" == e(g).css("display")) {
                            e(this).attr("aria-expanded", true);
                            e(g).slideDown(p.showSpeed);
                        } else {
                            e(this).attr("aria-expanded", false);
                            e(g)
                                .slideUp(p.hideSpeed)
                                .find(".dropdown, .megamenu")
                                .hide(p.hideSpeed);
                        }
                    });
        }
        function r() {
            e(g).show(0), e(m).hide(0);
        }
        function l() {
            e(f).find("li, a").unbind(),
                e(document).unbind("click.menu touchstart.menu");
        }
        function h() {
            function n(n) {
                var i = e(n).find(".menuzord-tabs-nav > li"),
                    d = e(n).find(".menuzord-tabs-content");
                e(i).bind("click touchstart", function (n) {
                    n.stopPropagation(),
                        n.preventDefault(),
                        e(i).removeClass("active"),
                        e(this).addClass("active"),
                        e(d).hide(0),
                        e(d[e(this).index()]).show(0);
                });
            }
            if (e(g).find(".menuzord-tabs").length > 0)
                for (var i = e(g).find(".menuzord-tabs"), d = 0; d < i.length; d++)
                    n(i[d]);
        }
        function c() {
            return (
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth
            );
        }
        function u() {
            if (
                (a(),
                c() <= v && b > v && (l(), p.responsive ? (s(), t()) : o()),
                c() > v && v >= y && (l(), r(), o()),
                (b = c()),
                (y = c()),
                h(),
                /MSIE (\d+\.\d+);/.test(navigator.userAgent) && c() < v)
            ) {
                var n = new Number(RegExp.$1);
                8 == n && (e(m).hide(0), e(g).show(0), l(), o());
            }
        }
        var p;
        e.extend(
            (p = {
                showSpeed: 300,
                hideSpeed: 300,
                trigger: "hover",
                showDelay: 0,
                hideDelay: 0,
                effect: "fade",
                align: "left",
                responsive: !0,
                animation: "none",
                indentChildren: !0,
                indicatorFirstLevel: "+",
                indicatorSecondLevel: "+",
                scrollable: !0,
                scrollableMaxHeight: 400,
            }),
            n
        );
        var m,
            f = e(this),
            g = e(f).children(".menuzord-menu"),
            w = e(g).find("li"),
            v = 900,
            b = 2e3,
            y = 200;
        e(g)
            .children("li")
            .children("a")
            .each(function () {
                var submenus = e(this).siblings(".dropdown, .megamenu");
                if (submenus.length > 0) {
                    // for connecting via aria-controls, let's just use the first submenu.
                    var first_submenu = e(submenus[0]);
                    if (!first_submenu.attr("id")) {
                        first_submenu.attr("id", mz_generate_id);
                    }
                    e(this).attr("aria-controls", first_submenu.attr("id"));
                    e(this).attr("aria-expanded", false);
                    e(this).append(
                        "<span class='indicator'>" +
                            p.indicatorFirstLevel +
                            "<span class='sr-only'>Untermenü ausklappen</span>" +
                            "</span>"
                    );
                }
            }),
            e(g)
                .find(".dropdown")
                .children("li")
                .children("a")
                .each(function () {
                    var submenus = e(this).siblings(".dropdown");
                    if (submenus.length > 0) {
                        // for connecting via aria-controls, let's just use the first submenu.
                        var first_submenu = e(submenus[0]);
                        if (!first_submenu.attr("id")) {
                            first_submenu.attr("id", mz_generate_id);
                        }
                        e(this).attr("aria-controls", first_submenu.attr("id"));
                        e(this).attr("aria-expanded", false);
                        e(this).append(
                            "<span class='indicator'>" +
                                p.indicatorSecondLevel +
                                "<span class='sr-only'>Untermenü ausklappen</span>" +
                                "</span>"
                        );
                    }
                }),
            "right" == p.align && e(g).addClass("menuzord-right"),
            p.indentChildren && e(g).addClass("menuzord-indented");

        if (p.responsive) {
            var submenu = e(f).find(".menuzord-menu");
            if (submenu && !submenu.attr("id")) {
                submenu.attr("id", mz_generate_id());
            }
            var submenu_id = submenu.attr("id");
            e(f)
                .addClass("menuzord-responsive")
                .prepend(
                    "<a href='javascript:void(0)' class='showhide' role='button' aria-label='Mobilmenü' aria-expanded='false' aria-controls='" +
                        submenu_id +
                        "'><span aria-hidden='true'><em></em><em></em><em></em></span></a>"
                );
            m = e(f).children(".showhide");
        }

        var main_menu = e(f);
        main_menu.on("keyup", function (ev) {
            if (ev.key == "Escape") {
                main_menu.find(".indicator").parent("a").attr("aria-expanded", false);
                main_menu.find(".dropdown, .megamenu").slideUp(p.hideSpeed);
                if (main_menu.find(".showhide").is(":visible")) {
                    main_menu.find(".showhide").attr("aria-expanded", "false");
                    main_menu.find(".menuzord-menu").slideUp(p.hideSpeed);
                }
            }
        });

        //p.scrollable &&
        //    p.responsive &&
        //    e(g)
        //        .css("max-height", p.scrollableMaxHeight)
        //        .addClass("scrollable")
        //        .append("<li class='scrollable-fix'></li>");
        u();
        e(window).resize(function () {
            u(), a();
        });
    };
})(jQuery);
;/**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 *
 * The jQuery plugin for equalizing the height or width of elements.
 *
 * Equalize will accept any of the jQuery Dimension methods:
 *   height, outerHeight, innerHeight,
 *   width, outerWidth, innerWidth.
 *
 * EXAMPLE
 * $('.parent').equalize(); // defaults to 'height'
 * $('.parent').equalize('width'); // equalize the widths
 *
 * ADVANCED EXAMPLES
 * Get the minimum max dimension by removing the existing height/width
 * $('.parent').equalize({reset: true}); // equalize height by default, remove existing height, then determin max
 * $('.parent').equalize({equalize: 'width', reset: true}); // equalize width, remove existing width, then determin max
 *
 * Equalize internal child elements
 * From @larsbo : http://jsfiddle.net/4QTNP/3/
 * $('.parent').equalize({children: 'p'}); // equalize height of paragraphs within .parent
 */
;(function($) {

  $.fn.equalize = function(options) {
    var $containers = this, // this is the jQuery object
        children    = false,
        reset       = false,
        equalize,
        type;

    // when options are an object
    if ($.isPlainObject(options)) {
      equalize = options.equalize || 'height';
      children = options.children || false;
      reset    = options.reset || false;
    } else { // otherwise, a string was passed in or default to height
      equalize = options || 'height';
    }

    if (!$.isFunction($.fn[equalize])) { return false; }

    // determine if the height or width is being equalized
    type = (equalize.indexOf('eight') > 0) ? 'min-height' : 'min-width';

    return $containers.each(function() {
          // when children exist, equalize the passed in child elements, otherwise equalize the children
      var $children = (children) ? $(this).find(children) : $(this).children(),
          max = 0; // reset for each container

      $children.each(function() {
        var $element = $(this),
            value;
        if (reset) { $element.css(type, ''); } // remove existing height/width dimension
        value = $element[equalize]();          // call height(), outerHeight(), etc.
        if (value > max) { max = value; }      // update max
      });

      $children.css(type, max +'px'); // add CSS to children
    });
  };

}(jQuery));
;/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.2.4 (25.03.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
(function(jQuery,undefined){
	"use strict";

	jQuery.fn.extend({

		revolution: function(options) {

			// SET DEFAULT VALUES OF ITEM //
			var defaults = {
				delay:9000,
				responsiveLevels:4064,					// Single or Array for Responsive Levels i.e.: 4064 or i.e. [2048, 1024, 768, 480]
				visibilityLevels:[2048,1024,778,480],	// Single or Array for Responsive Visibility Levels i.e.: 4064 or i.e. [2048, 1024, 768, 480]
				gridwidth:960,							// Single or Array i.e. 960 or [960, 840,760,460]
				gridheight:500,							// Single or Array i.e. 500 or [500, 450,400,350]
				minHeight:0,
				autoHeight:"off",
				sliderType : "standard",				// standard, carousel, hero
				sliderLayout : "auto",					// auto, fullwidth, fullscreen

				fullScreenAutoWidth:"off",				// Turns the FullScreen Slider to be a FullHeight but auto Width Slider
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer:"",			// Size for FullScreen Slider minimising Calculated on the Container sizes
				fullScreenOffset:"0",					// Size for FullScreen Slider minimising

				hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
				hideAllCaptionAtLimit:0,				// Hide all The Captions if Width of Browser is less then this value
				hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
				disableProgressBar:"off",				// Hides Progress Bar if is set to "on"
				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
				shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
				dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite
				startDelay:0,							// Delay before the first Animation starts.
				lazyType : "smart",						//full, smart, single
				spinner:"spinner0",
				shuffle:"off",							// Random Order of Slides,


				viewPort:{
					enable:false,						// if enabled, slider wait with start or wait at first slide.
					outof:"wait",						// wait,pause
					visible_area:"60%"
				},

				fallbacks:{
					isJoomla:false,
					panZoomDisableOnMobile:"off",
					simplifyAll:"on",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:true
				},

				parallax : {
					type : "off",						// off, mouse, scroll, mouse+scroll
					levels: [10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
					origo:"enterpoint",				// slidercenter or enterpoint
					speed:400,
					bgparallax : "off",
					opacity:"on",
					disable_onmobile:"off",
					ddd_shadow:"on",
					ddd_bgfreeze:"off",
					ddd_overflow:"visible",
					ddd_layer_overflow:"visible",
					ddd_z_correction:65,
					ddd_path:"mouse"

				},

				carousel : {
					horizontal_align : "center",
					vertical_align : "center",
					infinity : "on",
					space : 0,
					maxVisibleItems : 3,
					stretch:"off",
					fadeout:"on",
					maxRotation:0,
					minScale:0,
					vary_fade:"off",
					vary_rotation:"on",
					vary_scale:"off",
					border_radius:"0px",
					padding_top:0,
					padding_bottom:0
				},

				navigation : {
					keyboardNavigation:"on",
					keyboard_direction:"horizontal",		//	horizontal - left/right arrows,  vertical - top/bottom arrows
					mouseScrollNavigation:"off",			// on, off, carousel
					onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

					touch:{
						touchenabled:"off",						// Enable Swipe Function : on/off
						swipe_treshold : 75,					// The number of pixels that the user must move their finger by before it is considered a swipe.
						swipe_min_touches : 1,					// Min Finger (touch) used for swipe
						drag_block_vertical:false,				// Prevent Vertical Scroll during Swipe
						swipe_direction:"horizontal"
					},
					arrows: {
						style:"",
						enable:false,
						hide_onmobile:false,
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						hide_under:0,
						hide_over:9999,
						tmp:'',
						rtl:false,
						left : {
							h_align:"left",
							v_align:"center",
							h_offset:20,
							v_offset:0,
							container:"slider",
						},
						right : {
							h_align:"right",
							v_align:"center",
							h_offset:20,
							v_offset:0,
							container:"slider",
						}
					},
					bullets: {
						container:"slider",
						rtl:false,
						style:"",
						enable:false,
						hide_onmobile:false,
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						hide_under:0,
						hide_over:9999,
						direction:"horizontal",
						h_align:"left",
						v_align:"center",
						space:0,
						h_offset:20,
						v_offset:0,
						tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
					},
					thumbnails: {
						container:"slider",
						rtl:false,
						style:"",
						enable:false,
						width:100,
						height:50,
						min_width:100,
						wrapper_padding:2,
						wrapper_color:"#f5f5f5",
						wrapper_opacity:1,
						tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
						visibleAmount:5,
						hide_onmobile:false,
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						hide_under:0,
						hide_over:9999,
						direction:"horizontal",
						span:false,
						position:"inner",
						space:2,
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:0
					},
					tabs: {
						container:"slider",
						rtl:false,
						style:"",
						enable:false,
						width:100,
						min_width:100,
						height:50,
						wrapper_padding:10,
						wrapper_color:"#f5f5f5",
						wrapper_opacity:1,
						tmp:'<span class="tp-tab-image"></span>',
						visibleAmount:5,
						hide_onmobile:false,
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						hide_under:0,
						hide_over:9999,
						direction:"horizontal",
						span:false,
						space:0,
						position:"inner",
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:0
					}
				},
				extensions:"extensions/",			//example extensions/ or extensions/source/
				extensions_suffix:".min.js",
				//addons:[{fileprefix:"revolution.addon.whiteboard",init:"initWhiteBoard",params:"opt",handel:"whiteboard"}],
				debugMode:false
			};

			// Merge of Defaults
			options = jQuery.extend(true,{},defaults, options);

			return this.each(function() {


				var c = jQuery(this);
				//REMOVE SLIDES IF SLIDER IS HERO
				if (options.sliderType=="hero") {
					c.find('>ul>li').each(function(i) {
						if (i>0) jQuery(this).remove();
					})
				}
				options.jsFileLocation = options.jsFileLocation || getScriptLocation("themepunch.revolution.min.js");
				options.jsFileLocation = options.jsFileLocation + options.extensions;
				options.scriptsneeded = getNeededScripts(options,c);
				options.curWinRange = 0;

				options.rtl = true; //jQuery('body').hasClass("rtl");

				  if (options.navigation!=undefined && options.navigation.touch!=undefined)
       				 options.navigation.touch.swipe_min_touches = options.navigation.touch.swipe_min_touches >5 ? 1 : options.navigation.touch.swipe_min_touches;



				jQuery(this).on("scriptsloaded",function() {
					if (options.modulesfailing ) {
						c.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+options.errorm+'</div>').show();
						return false;
					}

					// CHECK FOR MIGRATION
					if (_R.migration!=undefined) options = _R.migration(c,options);
					punchgs.force3D = true;
					if (options.simplifyAll!=="on") punchgs.TweenLite.lagSmoothing(1000,16);
					prepareOptions(c,options);
					initSlider(c,options);
				});
				c.data('opt',options);
				waitForScripts(c,options);
			})
		},

		// Remove a Slide from the Slider
		revremoveslide : function(sindex) {

			return this.each(function() {

				var container=jQuery(this);
				if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
					var bt = container.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
					if (opt && opt.li.length>0) {
						if (sindex>0 || sindex<=opt.li.length) {

							var li = jQuery(opt.li[sindex]),
								ref = li.data("index"),
								nextslideafter = false;

							opt.slideamount = opt.slideamount-1;
							removeNavWithLiref('.tp-bullet',ref,opt);
							removeNavWithLiref('.tp-tab',ref,opt);
							removeNavWithLiref('.tp-thumb',ref,opt);
							if (li.hasClass('active-revslide'))
								nextslideafter = true;
							li.remove();
							opt.li = removeArray(opt.li,sindex);
							if (opt.carousel && opt.carousel.slides)
								opt.carousel.slides = removeArray(opt.carousel.slides,sindex)
							opt.thumbs = removeArray(opt.thumbs,sindex);
							if (_R.updateNavIndexes) _R.updateNavIndexes(opt);
							if (nextslideafter) container.revnext();

						}
					}
				}
			});

		},

		// Add a New Call Back to some Module
		revaddcallback: function(callback) {
			return this.each(function() {
				var container=jQuery(this);
				if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
					var bt = container.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
					if (opt.callBackArray === undefined)
						opt.callBackArray = new Array();
					opt.callBackArray.push(callback);
				}
			})
		},

		// Get Current Parallax Proc
		revgetparallaxproc : function() {
			var container=jQuery(this);
			if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
				var bt = container.parent().find('.tp-bannertimer'),
					opt = bt.data('opt');
				return opt.scrollproc;
			}

		},

		// ENABLE DEBUG MODE
		revdebugmode: function() {
			return this.each(function() {
				var container=jQuery(this);
				if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
					var bt = container.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
						opt.debugMode = true;
					containerResized(container,opt);
				}
			})
		},

		// METHODE SCROLL
		revscroll: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0)
							jQuery('body,html').animate({scrollTop:(container.offset().top+(container.height())-oy)+"px"},{duration:400});
					})
				},

		// METHODE PAUSE
		revredraw: function(oy) {
					return this.each(function() {

						var container=jQuery(this);
						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {
							var bt = container.parent().find('.tp-bannertimer');
							var opt = bt.data('opt');
							containerResized(container,opt);
						}
					})
				},
		// METHODE PAUSE
		revkill: function(oy) {

						var self = this,
							container=jQuery(this);

							punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements);
							if (_R.endMoveCaption)
								if (opt.endtimeouts && opt.endtimeouts.length>0)
									jQuery.each(opt.endtimeouts,function(i,timeo) {	clearTimeout(timeo);});

								//punchgs.TweenLite.killDelayedCallsTo(_R.endMoveCaption);

						if (container!=undefined && container.length>0 && jQuery('body').find('#'+container.attr('id')).length>0) {

							container.data('conthover',1);
							container.data('conthover-changed',1);
							container.trigger('revolution.slide.onpause');
							var bt = container.parent().find('.tp-bannertimer'),
								opt = bt.data('opt');
							opt.tonpause = true;
							container.trigger('stoptimer');

							punchgs.TweenLite.killTweensOf(container.find('*'),false);
							punchgs.TweenLite.killTweensOf(container,false);
							container.unbind('hover, mouseover, mouseenter,mouseleave, resize');
							var resizid = "resize.revslider-"+container.attr('id');
							jQuery(window).off(resizid);
							container.find('*').each(function() {
									var el = jQuery(this);

									el.unbind('on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer');
									el.off('on, hover, mouseenter,mouseleave,mouseover, resize');
									el.data('mySplitText',null);
									el.data('ctl',null);
									if (el.data('tween')!=undefined)
										el.data('tween').kill();
									if (el.data('kenburn')!=undefined)
										el.data('kenburn').kill();
									if (el.data('timeline_out')!=undefined)
										el.data('timeline_out').kill();
									if (el.data('timeline')!=undefined)
										el.data('timeline').kill();

									el.remove();
									el.empty();
									el=null;
							})


							punchgs.TweenLite.killTweensOf(container.find('*'),false);
							punchgs.TweenLite.killTweensOf(container,false);
							bt.remove();
							try{container.closest('.forcefullwidth_wrapper_tp_banner').remove();} catch(e) {}
							try{container.closest('.rev_slider_wrapper').remove()} catch(e) {}
							try{container.remove();} catch(e) {}
							container.empty();
							container.html();
							container = null;

							opt = null;
							delete(self.c);
							delete(self.opt);

							return true;
						} else {
							return false;
						}


				},

		// METHODE PAUSE
		revpause: function() {
			return this.each(function() {
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					c.data('conthover',1);
					c.data('conthover-changed',1);
					c.trigger('revolution.slide.onpause');
					var bt = c.parent().find('.tp-bannertimer');
					var opt = bt.data('opt');
					opt.tonpause = true;
					c.trigger('stoptimer');
				}
			})
		},

		// METHODE RESUME
		revresume: function() {
			return this.each(function() {
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					c.data('conthover',0);
					c.data('conthover-changed',1);
					c.trigger('revolution.slide.onresume');
					var bt = c.parent().find('.tp-bannertimer');
					var opt = bt.data('opt');
					opt.tonpause = false;
					c.trigger('starttimer');
				}
			})
		},

		revstart: function() {
			//return this.each(function() {
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0 && c.data('opt')) {
					if (!c.data('opt')["sliderisrunning"]) {
						runSlider(c,c.data('opt'));
						return true;
					}
					else {
						console.log("Slider Is Running Already");
						return false;
					}

				}
			//})

		},

		// METHODE NEXT
		revnext: function() {
			return this.each(function() {
				// CATCH THE CONTAINER
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					var bt = c.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
					_R.callingNewSlide(opt,c,1);
				}
			})
		},

		// METHODE RESUME
		revprev: function() {
			return this.each(function() {
				// CATCH THE CONTAINER
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					var bt = c.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
					_R.callingNewSlide(opt,c,-1);
				}
			})
		},

		// METHODE LENGTH
		revmaxslide: function() {
			// CATCH THE CONTAINER
			return jQuery(this).find('.tp-revslider-mainul >li').length;
		},


		// METHODE CURRENT
		revcurrentslide: function() {
			// CATCH THE CONTAINER
			var c=jQuery(this);
			if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
				var bt = c.parent().find('.tp-bannertimer');
				var opt = bt.data('opt');
				return parseInt(opt.act,0)+1;
			}
		},

		// METHODE CURRENT
		revlastslide: function() {
			// CATCH THE CONTAINER
			return jQuery(this).find('.tp-revslider-mainul >li').length;
		},


		// METHODE JUMP TO SLIDE
		revshowslide: function(slide) {
			return this.each(function() {
				// CATCH THE CONTAINER
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					var bt = c.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
					_R.callingNewSlide(opt,c,"to"+(slide-1));
				}
			})
		},
		revcallslidewithid: function(slide) {
			return this.each(function() {
				// CATCH THE CONTAINER
				var c=jQuery(this);
				if (c!=undefined && c.length>0 && jQuery('body').find('#'+c.attr('id')).length>0) {
					var bt = c.parent().find('.tp-bannertimer'),
						opt = bt.data('opt');
					_R.callingNewSlide(opt,c,slide);
				}
			})
		}
});



//////////////////////////////////////////////////////////////
// -	REVOLUTION FUNCTION EXTENSIONS FOR GLOBAL USAGE  -  //
//////////////////////////////////////////////////////////////
var _R = jQuery.fn.revolution;

jQuery.extend(true, _R, {

	simp : function(a,b,basic) {
		var c = Math.abs(a) - (Math.floor(Math.abs(a / b))*b);
		if (basic)
			return c;
		else
			return a<0 ? -1*c : c;
	},

	//	-	IS IOS VERSION OLDER THAN 5 ??
 	iOSVersion : function() {
		var oldios = false;
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
	        if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
	        	oldios = true;
			}
	    } else {
			   oldios = false;
	    }
		return oldios;
	},


	//	-	CHECK IF BROWSER IS IE		-
	isIE : function( version, comparison ){
	    var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
	    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
	    var ieTest = $div.find('a').length;
	    $div.remove();
	    return ieTest;
	},

	// 	-	IS MOBILE ??
	is_mobile : function() {
	    var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
		var ismobile=false;
	    for(var i in agents) {

		    if (navigator.userAgent.split(agents[i]).length>1) {
	            ismobile = true;

	          }
	    }
	    return ismobile;
	},

	// -  CALL BACK HANDLINGS - //
	 callBackHandling : function(opt,type,position) {
	 	try{
			if (opt.callBackArray)
				jQuery.each(opt.callBackArray,function(i,c) {
					if (c) {
						if (c.inmodule && c.inmodule === type)
							if (c.atposition && c.atposition === position)
								if (c.callback)
									c.callback.call();
					}
				});
		} catch(e) {
			console.log("Call Back Failed");
		}
	},

	get_browser : function(){
	    var N=navigator.appName, ua=navigator.userAgent, tem;
	    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
	    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
	    return M[0];
    },

	get_browser_version  : function(){
	    var N=navigator.appName, ua=navigator.userAgent, tem;
	    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
	    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
	    return M[1];
    },

    // GET THE HORIZONTAL OFFSET OF SLIDER BASED ON THE THU`MBNAIL AND TABS LEFT AND RIGHT SIDE
	getHorizontalOffset : function(container,side) {
		var thumbloff = gWiderOut(container,'.outer-left'),
			thumbroff = gWiderOut(container,'.outer-right');

		switch (side) {
			case "left":
				return thumbloff;
			break;
			case "right":
				return thumbroff;
			break;
			case "both":
				return thumbloff+thumbroff;
			break;
		}
	},


	// 	-	CALLING THE NEW SLIDE 	-	//
	callingNewSlide : function(opt,container,direction) {


		var aindex = container.find('.next-revslide').length>0 ? container.find('.next-revslide').index() : container.find('.processing-revslide').length>0 ? container.find('.processing-revslide').index() : container.find('.active-revslide').index(),
			nindex = 0;

		container.find('.next-revslide').removeClass("next-revslide");

		// IF WE ARE ON AN INVISIBLE SLIDE CURRENTLY
		if (container.find('.active-revslide').hasClass("tp-invisible-slide"))
			aindex = opt.last_shown_slide;

		// SET NEXT DIRECTION
		if (direction && jQuery.isNumeric(direction) || direction.match(/to/g)) {
			if (direction===1 || direction === -1) {

				nindex = aindex + direction;
				nindex = nindex<0 ? opt.slideamount-1 : nindex>=opt.slideamount ? 0 : nindex;
			} else {

				direction=jQuery.isNumeric(direction) ? direction : parseInt(direction.split("to")[1],0);
				nindex = direction<0 ? 0 : direction>opt.slideamount-1 ? opt.slideamount-1 : direction;
			}
			container.find('.tp-revslider-slidesli:eq('+nindex+')').addClass("next-revslide");
		} else
		if (direction) {

			container.find('.tp-revslider-slidesli').each(function() {
				var li=jQuery(this);
				if (li.data('index')===direction) li.addClass("next-revslide");
			})
		}


		nindex = container.find('.next-revslide').index();
		container.trigger("revolution.nextslide.waiting");


		if (nindex !== aindex && nindex!=-1)
			swapSlide(container,opt);
		else
			container.find('.next-revslide').removeClass("next-revslide");
	},

	slotSize : function(img,opt) {
		opt.slotw=Math.ceil(opt.width/opt.slots);

		if (opt.sliderLayout=="fullscreen")
			opt.sloth=Math.ceil(jQuery(window).height()/opt.slots);
		else
			opt.sloth=Math.ceil(opt.height/opt.slots);

		if (opt.autoHeight=="on" && img!==undefined && img!=="")
		 	opt.sloth=Math.ceil(img.height()/opt.slots);


	},

	setSize : function(opt) {

		var ofh = (opt.top_outer || 0) + (opt.bottom_outer || 0),
			cpt = parseInt((opt.carousel.padding_top||0),0),
			cpb = parseInt((opt.carousel.padding_bottom||0),0),
			maxhei = opt.gridheight[opt.curWinRange];

			opt.paddings = opt.paddings === undefined ? {top:(parseInt(opt.c.parent().css("paddingTop"),0) || 0), bottom:(parseInt(opt.c.parent().css("paddingBottom"),0) || 0)} : opt.paddings;

		maxhei = maxhei<opt.minHeight ? opt.minHeight : maxhei;
		if (opt.sliderLayout=="fullwidth" && opt.autoHeight=="off")	punchgs.TweenLite.set(opt.c,{maxHeight:maxhei+"px"});
		opt.c.css({marginTop:cpt,marginBottom:cpb});
		opt.width=opt.ul.width();
		opt.height=opt.ul.height();
		setScale(opt);

		opt.height = Math.round(opt.gridheight[opt.curWinRange] * (opt.width/opt.gridwidth[opt.curWinRange]));

		if (opt.height>opt.gridheight[opt.curWinRange] && opt.autoHeight!="on") opt.height=opt.gridheight[opt.curWinRange];

		if (opt.sliderLayout=="fullscreen" || opt.infullscreenmode) {
			opt.height = opt.bw * opt.gridheight[opt.curWinRange];
			var cow = opt.c.parent().width();
			var coh = jQuery(window).height();

			if (opt.fullScreenOffsetContainer!=undefined) {
				try{
					var offcontainers = opt.fullScreenOffsetContainer.split(",");
					if (offcontainers)
						jQuery.each(offcontainers,function(index,searchedcont) {
							coh = jQuery(searchedcont).length>0 ? coh - jQuery(searchedcont).outerHeight(true) : coh;
						});
				} catch(e) {}
				try{
					if (opt.fullScreenOffset.split("%").length>1 && opt.fullScreenOffset!=undefined && opt.fullScreenOffset.length>0)
							coh = coh - (jQuery(window).height()* parseInt(opt.fullScreenOffset,0)/100);
					else
					if (opt.fullScreenOffset!=undefined && opt.fullScreenOffset.length>0)
					 		coh = coh - parseInt(opt.fullScreenOffset,0);
				} catch(e) {}
			}

			coh = coh<opt.minHeight ? opt.minHeight : coh;
			coh = coh - ofh;
			opt.c.parent().height(coh);

			opt.c.closest('.rev_slider_wrapper').height(coh);
			opt.c.css({'height':'100%'});

			opt.height=coh;
			if (opt.minHeight!=undefined && opt.height<opt.minHeight)
				opt.height = opt.minHeight;
		} else {

			if (opt.minHeight!=undefined && opt.height<opt.minHeight)
				opt.height = opt.minHeight;
			opt.c.height(opt.height);

		}
		var si = {	height:(cpt+cpb+ofh+opt.height+opt.paddings.top+opt.paddings.bottom)};

		opt.c.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css(si);
		opt.c.closest('.rev_slider_wrapper').css(si);
		setScale(opt);
	},

	enterInViewPort : function(opt) {
		// START COUNTER IF VP ENTERED, AND COUNTDOWN WAS NOT ON YET
		if (opt.waitForCountDown) {
			countDown(opt.c,opt);
			opt.waitForCountDown=false;
		}
		// START FIRST SLIDE IF NOT YET STARTED AND VP ENTERED
		if (opt.waitForFirstSlide) {
			swapSlide(opt.c,opt);
			opt.waitForFirstSlide=false;
		}

		if (opt.sliderlaststatus == "playing" || opt.sliderlaststatus==undefined) {
			opt.c.trigger("starttimer");
		}


		if (opt.lastplayedvideos != undefined && opt.lastplayedvideos.length>0) {

			jQuery.each(opt.lastplayedvideos,function(i,_nc) {

				_R.playVideo(_nc,opt);
			});
		}
	},

	leaveViewPort : function(opt) {
		opt.sliderlaststatus = opt.sliderstatus;
		opt.c.trigger("stoptimer");
		if (opt.playingvideos != undefined && opt.playingvideos.length>0) {
			opt.lastplayedvideos = jQuery.extend(true,[],opt.playingvideos);
			if (opt.playingvideos)
				jQuery.each(opt.playingvideos,function(i,_nc) {
					if (_R.stopVideo) _R.stopVideo(_nc,opt);
				});
		}
	},

	unToggleState : function(a) {
		if (a!=undefined && a.length>0)
			jQuery.each(a,function(i,layer) {
				layer.removeClass("rs-toggle-content-active");
			});
	},

	toggleState : function(a) {
		if (a!=undefined && a.length>0)
			jQuery.each(a,function(i,layer) {
				layer.addClass("rs-toggle-content-active");
			});
	},
	lastToggleState : function(a) {
		var state = 0;
		if (a!=undefined && a.length>0)
			jQuery.each(a,function(i,layer) {
				state = layer.hasClass("rs-toggle-content-active");
			});
		return state;
	}

});


var	_ISM = _R.is_mobile();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var removeArray = function(arr,i) {
				var newarr = [];
				jQuery.each(arr,function(a,b) {
					if (a!=i) newarr.push(b);
				})
				return newarr;
			}

var removeNavWithLiref = function(a,ref,opt) {
	opt.c.find(a).each(function() {
		var a = jQuery(this);
		if (a.data('liref')===ref)
			a.remove();
	})
}


var lAjax = function(s,o) {
	if (jQuery('body').data(s)) return false;
	if (o.filesystem) {
		if (o.errorm===undefined)
			o.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:";
		console.warn('Local Filesystem detected !');
		o.errorm = o.errorm+'<br>&lt;script type="text/javascript" src="'+o.jsFileLocation+s+o.extensions_suffix+'"&gt;&lt;/script&gt;';
		console.warn(o.jsFileLocation+s+o.extensions_suffix+' could not be loaded !');
		console.warn('Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document.');
		console.log(" ");
		o.modulesfailing = true;
		return false;
	}
	jQuery.ajax({
		url:o.jsFileLocation+s+o.extensions_suffix,
		'dataType':'script',
		'cache':true,
		"error":function(e) {
			console.warn("Slider Revolution 5.0 Error !")
			console.error("Failure at Loading:"+s+o.extensions_suffix+" on Path:"+o.jsFileLocation)
			console.info(e);
		}
	});
	jQuery('body').data(s,true);
}

var getNeededScripts = function(o,c) {
	var n = new Object(),
		_n = o.navigation;

	n.kenburns = false;
	n.parallax = false;
	n.carousel = false;
	n.navigation = false;
	n.videos = false;
	n.actions = false;
	n.layeranim = false;
	n.migration = false;




	// MIGRATION EXTENSION
	if (!c.data('version') || !c.data('version').toString().match(/5./gi)) {
		n.kenburns = true;
		n.parallax = true;
		n.carousel = false;
		n.navigation = true;
		n.videos = true;
		n.actions = true;
		n.layeranim = true;
		n.migration = true;
	}
	else {
		// KEN BURN MODUL
		c.find('img').each(function(){
			if (jQuery(this).data('kenburns')=="on") n.kenburns = true;
		});

		// NAVIGATION EXTENSTION
		if (o.sliderType =="carousel" || _n.keyboardNavigation=="on" || _n.mouseScrollNavigation=="on" || _n.touch.touchenabled=="on" || _n.arrows.enable || _n.bullets.enable || _n.thumbnails.enable || _n.tabs.enable )
			n.navigation = true;

		// LAYERANIM, VIDEOS, ACTIONS EXTENSIONS
		c.find('.tp-caption, .tp-static-layer, .rs-background-video-layer').each(function(){
			var _nc = jQuery(this);
			if ((_nc.data('ytid')!=undefined  || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('youtube')>0))
				n.videos = true;
			if ((_nc.data('vimeoid')!=undefined || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('vimeo')>0))
				n.videos = true;
			if (_nc.data('actions')!==undefined)
				n.actions = true;
			n.layeranim = true;
		});

		c.find('li').each(function() {
			if (jQuery(this).data('link') && jQuery(this).data('link')!=undefined) {
				n.layeranim = true;
				n.actions = true;
			}
		})

		// VIDEO EXTENSION
		if (!n.videos && (c.find('.rs-background-video-layer').length>0 || c.find(".tp-videolayer").length>0 || c.find(".tp-audiolayer") || c.find('iframe').length>0 || c.find('video').length>0))
			n.videos = true;

		// VIDEO EXTENSION
		if (o.sliderType =="carousel")
			n.carousel = true;



		if (o.parallax.type!=="off" || o.viewPort.enable || o.viewPort.enable=="true")
			n.parallax = true;
	}

	if (o.sliderType=="hero") {
		n.carousel = false;
		n.navigation = false;
	}

	if (window.location.href.match(/file:/gi)) {
		n.filesystem = true;
		o.filesystem = true;
	}


	// LOAD THE NEEDED LIBRARIES
	if (n.videos && typeof _R.isVideoPlaying=='undefined') lAjax('revolution.extension.video',o);
	if (n.carousel && typeof _R.prepareCarousel=='undefined') lAjax('revolution.extension.carousel',o);
	if (!n.carousel && typeof _R.animateSlide=='undefined') lAjax('revolution.extension.slideanims',o);
	if (n.actions && typeof _R.checkActions=='undefined') lAjax('revolution.extension.actions',o);
	if (n.layeranim && typeof _R.handleStaticLayers=='undefined') lAjax('revolution.extension.layeranimation',o);
	if (n.kenburns && typeof _R.stopKenBurn=='undefined') lAjax('revolution.extension.kenburn',o);
	if (n.navigation && typeof _R.createNavigation=='undefined') lAjax('revolution.extension.navigation',o);
	if (n.migration && typeof _R.migration=='undefined') lAjax('revolution.extension.migration',o);
	if (n.parallax && typeof _R.checkForParallax=='undefined') lAjax('revolution.extension.parallax',o);

	if (o.addons!=undefined && o.addons.length>0) {
		jQuery.each(o.addons, function(i,obj) {
			if (typeof obj === "object" && obj.fileprefix!=undefined)
				lAjax(obj.fileprefix,o);
		})
	}


	return n;
}

///////////////////////////////////
//   -  WAIT FOR SCRIPT LOADS  - //
///////////////////////////////////
var waitForScripts = function(c,o) {
	// CHECK KEN BURN DEPENDENCIES
	var addonsloaded = true,
		n = o.scriptsneeded;

	// CHECK FOR ADDONS
	if (o.addons!=undefined && o.addons.length>0) {
		jQuery.each(o.addons, function(i,obj) {
			if (typeof obj === "object" && obj.init!=undefined) {
				if (_R[obj.init]===undefined) addonsloaded = false;
			}
		})
	}

	if (n.filesystem ||
		(typeof punchgs !== 'undefined' &&
		(addonsloaded) &&
		(!n.kenburns || (n.kenburns && typeof _R.stopKenBurn !== 'undefined')) &&
		(!n.navigation || (n.navigation && typeof _R.createNavigation !== 'undefined')) &&
		(!n.carousel || (n.carousel && typeof _R.prepareCarousel !== 'undefined')) &&
		(!n.videos || (n.videos && typeof _R.resetVideo !== 'undefined')) &&
		(!n.actions || (n.actions && typeof _R.checkActions !== 'undefined')) &&
		(!n.layeranim || (n.layeranim && typeof _R.handleStaticLayers !== 'undefined')) &&
		(!n.migration || (n.migration && typeof _R.migration !== 'undefined')) &&
		(!n.parallax || (n.parallax && typeof _R.checkForParallax !== 'undefined')) &&
		(n.carousel || (!n.carousel && typeof _R.animateSlide !== 'undefined'))
	   ))
		c.trigger("scriptsloaded");
	else
		setTimeout(function() {
			waitForScripts(c,o);
		},50);

}


function _R_get_src(el) {
    if (el.jquery) {
        el = el[0];
    }
    var value = el.src || el.dataset && el.dataset.src || "";
    return value;
}

function _R_set_src(el, src) {
    if (el.jquery) {
        el = el[0];
    }
    if (el.tagName !== "IMG" && el.dataset !== undefined) {
        el.dataset.src = src;
    } else {
        try {
            el.src = src;
        } catch(e) {
            return;
        }
    }
}

//////////////////////////////////
//	-	GET SCRIPT LOCATION	-	//
//////////////////////////////////
var getScriptLocation = function(a) {

	var srcexp = new RegExp("themepunch.revolution.min.js","gi"),
		ret = "";
	jQuery("script").each(function() {
		var src = jQuery(this).attr("src");
		if (src && src.match(srcexp))
			ret = src;
	});

	ret = ret.replace('jquery.themepunch.revolution.min.js', '');
	ret = ret.replace('jquery.themepunch.revolution.js', '');
	ret = ret.split("?")[0];
	return ret;
}

//////////////////////////////////////////
//	-	ADVANCED RESPONSIVE LEVELS	-	//
//////////////////////////////////////////
var setCurWinRange = function(opt,vis) {
	var curlevel = 0,
		curwidth = 9999,
		lastmaxlevel = 0,
		lastmaxid = 0,
		curid = 0,
		winw = jQuery(window).width(),
		l = vis && opt.responsiveLevels==9999 ? opt.visibilityLevels : opt.responsiveLevels;

	 if (l && l.length)
		jQuery.each(l,function(index,level) {
			if (winw<level) {
				if (lastmaxlevel==0 || lastmaxlevel>level) {
					curwidth = level;
					curid = index;
					lastmaxlevel = level;
				}
			}

		if (winw>level && lastmaxlevel<level) {
			lastmaxlevel = level;
			lastmaxid = index;
		}
	});

	if (lastmaxlevel<curwidth)
		curid = lastmaxid;


	if (!vis)
		opt.curWinRange = curid;
	else
		opt.forcedWinRange = curid;


}




//////////////////////////////////////////
//	-	INITIALISATION OF OPTIONS 	-	//
//////////////////////////////////////////
var prepareOptions = function(container,opt) {
	opt.carousel.maxVisibleItems = opt.carousel.maxVisibleItems < 1 ? 999 : opt.carousel.maxVisibleItems; // === 1 ? 2 : opt.carousel.maxVisibleItems;
	opt.carousel.vertical_align = opt.carousel.vertical_align === "top" ? "0%" : opt.carousel.vertical_align==="bottom" ? "100%" : "50%";
}

var gWiderOut = function(c,cl) {
	var r = 0;
	c.find(cl).each(function() {
		var a = jQuery(this);
		if (!a.hasClass("tp-forcenotvisible") && r<a.outerWidth())
			r = a.outerWidth();
	});
	return r;
}




//////////////////////////////////////////
//	-	INITIALISATION OF SLIDER	-	//
//////////////////////////////////////////
var initSlider = function (container,opt) {
	if (container==undefined) return false;

	// CHECK FOR ALTERNATIVE IMAGE, AND IFRAM EXIST, AND WE ARE IN IE8, MOBILE, DRAW IT SIMPLE
	if (container.data('aimg')!=undefined)
		if ((container.data('aie8')=="enabled" && _R.isIE(8)) || (container.data('amobile')=="enabled" && _ISM))
			container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">');

	// PREPRARE SOME CLASSES AND VARIABLES
	container.find('>ul').addClass("tp-revslider-mainul");


	// CREATE SOME DEFAULT OPTIONS FOR LATER
	opt.c=container;
	opt.ul = container.find('.tp-revslider-mainul');

	 // Remove Not Needed Slides for Mobile Devices
    opt.ul.find('>li').each(function(i) {
    	var li = jQuery(this);
    	if (li.data('hideslideonmobile')=="on" && _ISM) li.remove();
    	if (li.data('invisible') || li.data('invisible')===true) {
    		li.addClass("tp-invisible-slide");
    		li.appendTo(opt.ul);
    	}
   	});


   	if (opt.addons!=undefined && opt.addons.length>0) {
		jQuery.each(opt.addons, function(i,obj) {
			if (typeof obj === "object" && obj.init!=undefined) {
				_R[obj.init](eval(obj.params));
			}
		})
	}



	opt.cid = container.attr('id');
	opt.ul.css({visibility:"visible"});
    opt.slideamount = opt.ul.find('>li').not('.tp-invisible-slide').length;
    opt.slayers = container.find('.tp-static-layers');

    if (opt.waitForInit == true)
    	return;
    else {
    	container.data('opt',opt);
    	runSlider(container,opt);
    }

 }

 var runSlider = function(container,opt) {


 	opt.sliderisrunning = true;
    // Save Original Index of Slides
    opt.ul.find('>li').each(function(i) {
    	jQuery(this).data('originalindex',i);
    });




	// RANDOMIZE THE SLIDER SHUFFLE MODE
	if (opt.shuffle=="on") {
		var fsa = new Object,
			fli = opt.ul.find('>li:first-child');
		fsa.fstransition = fli.data('fstransition');
		fsa.fsmasterspeed = fli.data('fsmasterspeed');
		fsa.fsslotamount = fli.data('fsslotamount');

		for (var u=0;u<opt.slideamount;u++) {
			var it = Math.round(Math.random()*opt.slideamount);
			opt.ul.find('>li:eq('+it+')').prependTo(opt.ul);
		}

		var newfli = opt.ul.find('>li:first-child');
		newfli.data('fstransition',fsa.fstransition);
		newfli.data('fsmasterspeed',fsa.fsmasterspeed);
		newfli.data('fsslotamount',fsa.fsslotamount);

		 // COLLECT ALL LI INTO AN ARRAY
		opt.li = opt.ul.find('>li').not('.tp-invisible-slide');
	}

	opt.allli = opt.ul.find('>li');
	opt.li = opt.ul.find('>li').not('.tp-invisible-slide');
	opt.inli = opt.ul.find('>li.tp-invisible-slide');


	opt.thumbs = new Array();

	opt.slots=4;
	opt.act=-1;
	opt.firststart=1;
	opt.loadqueue = new Array();
	opt.syncload = 0;
	opt.conw = container.width();
	opt.conh = container.height();

	if (opt.responsiveLevels.length>1)
		opt.responsiveLevels[0] = 9999;
	else
		opt.responsiveLevels = 9999;

	// RECORD THUMBS AND SET INDEXES
	jQuery.each(opt.allli,function(index,li) {
		var li = jQuery(li),
			img = li.find('.rev-slidebg') || li.find('img').first(),
			i = 0;


		li.addClass("tp-revslider-slidesli");
		if (li.data('index')===undefined) li.data('index','rs-'+Math.round(Math.random()*999999));

		var obj = new Object;
		obj.params = new Array();

		obj.id = li.data('index');
		obj.src = li.data('thumb')!==undefined ? li.data('thumb') : img.data('lazyload') !== undefined ? img.data('lazyload') : _R_get_src(img);
		if (li.data('title') !== undefined) obj.params.push({from:RegExp("\\{\\{title\\}\\}","g"), to:li.data("title")})
		if (li.data('description') !== undefined) obj.params.push({from:RegExp("\\{\\{description\\}\\}","g"), to:li.data("description")})
		for (var i=1;i<=10;i++) {
			if (li.data("param"+i)!==undefined)
				obj.params.push({from:RegExp("\\{\\{param"+i+"\\}\\}","g"), to:li.data("param"+i)})
		}
		opt.thumbs.push(obj);

		li.data('origindex',li.index());

		// IF LINK ON SLIDE EXISTS, NEED TO CREATE A PROPER LAYER FOR IT.
		if (li.data('link')!=undefined) {
			var link = li.data('link'),
				target= li.data('target') || "_self",
				zindex= li.data('slideindex')==="back" ? 0 : 60,
				linktoslide=li.data('linktoslide'),
				checksl = linktoslide;

			if (linktoslide != undefined)
				if (linktoslide!="next" && linktoslide!="prev")
					opt.allli.each(function() {
						var t = jQuery(this);
						if (t.data('origindex')+1==checksl) linktoslide = t.data('index');
					});


			if (link!="slide") linktoslide="no";

			var apptxt = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+zindex+';" data-x="center" data-y="center" data-basealign="slide" ',
				jts = linktoslide==="scroll_under" ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' :
					 linktoslide==="prev" ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' :
					 linktoslide==="next" ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"'+linktoslide+'","delay":"0.2"}]'

			apptxt = linktoslide=="no" ? apptxt +' data-start="0">' : apptxt + 'data-actions='+"'"+jts + "'"+' data-start="0">';
			apptxt = apptxt + '<a style="width:100%;height:100%;display:block"';
			apptxt = link!="slide" ? apptxt + ' target="'+target+'" href="'+link+'"' : apptxt;
			apptxt = apptxt + '><span style="width:100%;height:100%;display:block"></span></a></div>';
			li.append(apptxt);
		}
	});


	// CREATE GRID WIDTH AND HEIGHT ARRAYS
	opt.rle = opt.responsiveLevels.length || 1;
	opt.gridwidth = cArray(opt.gridwidth,opt.rle);
	opt.gridheight = cArray(opt.gridheight,opt.rle);
	// END OF VERSION 5.0 INIT MODIFICATION



	// SIMPLIFY ANIMATIONS ON OLD IOS AND IE8 IF NEEDED
	if (opt.simplifyAll=="on" && (_R.isIE(8) || _R.iOSVersion())) {
		container.find('.tp-caption').each(function() {
			var tc = jQuery(this);
			tc.removeClass("customin customout").addClass("fadein fadeout");
			tc.data('splitin',"");
			tc.data('speed',400);
		})
		opt.allli.each(function() {
			var li= jQuery(this);
			li.data('transition',"fade");
			li.data('masterspeed',500);
			li.data('slotamount',1);
			var img = li.find('.rev-slidebg') || li.find('>img').first();
			img.data('kenburns',"off");
		});
	}

	opt.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);

	// SOME OPTIONS WHICH SHOULD CLOSE OUT SOME OTHER SETTINGS
	opt.autoHeight = opt.sliderLayout=="fullscreen" ? "on" : opt.autoHeight;

	if (opt.sliderLayout=="fullwidth" && opt.autoHeight=="off") container.css({maxHeight:opt.gridheight[opt.curWinRange]+"px"});

	// BUILD A FORCE FULLWIDTH CONTAINER, TO SPAN THE FULL SLIDER TO THE FULL WIDTH OF BROWSER
	if (opt.sliderLayout!="auto" && container.closest('.forcefullwidth_wrapper_tp_banner').length==0) {
		if (opt.sliderLayout!=="fullscreen" || opt.fullScreenAutoWidth!="on") {
			var cp = container.parent(),
				mb = cp.css('marginBottom'),
				mt = cp.css('marginTop');
			mb = mb===undefined ? 0 : mb;
			mt = mt===undefined ? 0 : mt;

			cp.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:'+mt+';margin-bottom:'+mb+'"></div>');
			container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+container.height()+'px"></div>');
			container.parent().css({marginTop:"0px",marginBottom:"0px"});
			//container.css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
			container.parent().css({position:'absolute'});
		}
	}



	// SHADOW ADD ONS
	if (opt.shadow!==undefined && opt.shadow>0) {
		container.parent().addClass('tp-shadow'+opt.shadow);
		container.parent().append('<div class="tp-shadowcover"></div>');
		container.parent().find('.tp-shadowcover').css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
	}

	// ESTIMATE THE CURRENT WINDOWS RANGE INDEX
	setCurWinRange(opt);
	setCurWinRange(opt,true);

	// IF THE CONTAINER IS NOT YET INITIALISED, LETS GO FOR IT
	if (!container.hasClass("revslider-initialised")) {
		// MARK THAT THE CONTAINER IS INITIALISED WITH SLIDER REVOLUTION ALREADY
		container.addClass("revslider-initialised");

		// FOR BETTER SELECTION, ADD SOME BASIC CLASS
		container.addClass("tp-simpleresponsive");

		// WE DONT HAVE ANY ID YET ? WE NEED ONE ! LETS GIVE ONE RANDOMLY FOR RUNTIME
		if (container.attr('id')==undefined) container.attr('id',"revslider-"+Math.round(Math.random()*1000+5));

		// CHECK IF FIREFOX 13 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED
		opt.firefox13 = false;
		opt.ie = !jQuery.support.opacity;
		opt.ie9 = (document.documentMode == 9);

		opt.origcd=opt.delay;



		// CHECK THE jQUERY VERSION
		var version = jQuery.fn.jquery.split('.'),
			versionTop = parseFloat(version[0]),
			versionMinor = parseFloat(version[1]),
			versionIncrement = parseFloat(version[2] || '0');
		if (versionTop==1 && versionMinor < 7)
			container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+version+' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');
		if (versionTop>1) opt.ie=false;



		// PREPARE VIDEO PLAYERS
		var addedApis = new Object();
		addedApis.addedyt=0;
		addedApis.addedvim=0;
		addedApis.addedvid=0;

		container.find('.tp-caption, .rs-background-video-layer').each(function(i) {
			var _nc = jQuery(this),
				an = _nc.data('autoplayonlyfirsttime'),
				ap = _nc.data('autoplay'),
				al = _nc.hasClass("tp-audiolayer"),
				loop = _nc.data('videoloop');


			if (_nc.hasClass("tp-static-layer") && _R.handleStaticLayers)
				_R.handleStaticLayers(_nc,opt);

			var pom = _nc.data('noposteronmobile') || _nc.data('noPosterOnMobile') ||  _nc.data('posteronmobile') || _nc.data('posterOnMobile') || _nc.data('posterOnMObile');
			_nc.data('noposteronmobile',pom);

			// FIX VISIBLE IFRAME BUG IN SAFARI
			var iff = 0;
			_nc.find('iframe').each(function() {
				punchgs.TweenLite.set(jQuery(this),{autoAlpha:0});
				iff++;
			})
			if (iff>0)
				_nc.data('iframes',true)

			if (_nc.hasClass("tp-caption")) {
				// PREPARE LAYERS AND WRAP THEM WITH PARALLAX, LOOP, MASK HELP CONTAINERS
				var ec = _nc.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
				_nc.wrap('<div class="tp-parallax-wrap" style="'+ec+'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="'+ec+'position:absolute;"><div class="tp-mask-wrap" style="'+ec+'position:absolute" ></div></div></div>');
				var lar = ['pendulum', 'rotate','slideloop','pulse','wave'],
					_lc = _nc.closest('.tp-loop-wrap');

				jQuery.each(lar,function(i,k) {
					var lw = _nc.find('.rs-'+k),
						f = lw.data() || "";
					if (f!="") {
						_lc.data(f);
						_lc.addClass("rs-"+k);
						lw.children(0).unwrap();
						_nc.data('loopanimation',"on");
					}
				});
				punchgs.TweenLite.set(_nc,{visibility:"hidden"});
			}

			var as = _nc.data('actions');
			if (as!==undefined) _R.checkActions(_nc,opt,as);

			checkHoverDependencies(_nc,opt);

			if (_R.checkVideoApis)
				addedApis = _R.checkVideoApis(_nc,opt,addedApis);

			// REMOVE VIDEO AUTOPLAYS FOR MOBILE DEVICES
			if (_ISM) {
				if (an == true || an=="true") {
						_nc.data('autoplayonlyfirsttime',"false");
						an=false;
				}
				if (ap==true || ap=="true" || ap=="on" || ap=="1sttime") {
					 _nc.data('autoplay',"off");
					 ap="off";
				}
			}

			//loop =  loop=="none" && _nc.hasClass('rs-background-video-layer') ?  "loopandnoslidestop" : loop;

			_nc.data('videoloop',loop);


			// PREPARE TIMER BEHAVIOUR BASED ON AUTO PLAYED VIDEOS IN SLIDES
			if (!al && (an == true || an=="true" || ap == "1sttime") && loop !="loopandnoslidestop")
				_nc.closest('li.tp-revslider-slidesli').addClass("rs-pause-timer-once");


			if (!al && (ap==true || ap=="true" || ap == "on" || ap == "no1sttime") && loop !="loopandnoslidestop")
				_nc.closest('li.tp-revslider-slidesli').addClass("rs-pause-timer-always");




		});

		container.hover(
			function() {
					container.trigger('tp-mouseenter');
					opt.overcontainer=true;
			},
			function() {
					container.trigger('tp-mouseleft');
					opt.overcontainer=false;
			});


		container.on('mouseover',function() {
			container.trigger('tp-mouseover');
			opt.overcontainer=true;
		})

		// REMOVE ANY VIDEO JS SETTINGS OF THE VIDEO  IF NEEDED  (OLD FALL BACK, AND HELP FOR 3THD PARTY PLUGIN CONFLICTS)
		container.find('.tp-caption video').each(function(i) {
			var v = jQuery(this);
			v.removeClass("video-js vjs-default-skin");
			v.attr("preload","");
			v.css({display:"none"});
		});

		//PREPARE LOADINGS ALL IN SEQUENCE
		if (opt.sliderType!=="standard") opt.lazyType = "all";


		// PRELOAD STATIC LAYERS
		loadImages(container.find('.tp-static-layers'),opt,0,true);

		waitForCurrentImages(container.find('.tp-static-layers'),opt,function() {
			container.find('.tp-static-layers img').each(function() {
				var e = jQuery(this),
					src = e.data('lazyload') != undefined ? e.data('lazyload') : _R_get_src(e),
					loadobj = getLoadObj(opt,src);
                                _R_set_src(e, _R_get_src(loadobj));
			})
		})



		// SET ALL LI AN INDEX AND INIT LAZY LOADING
		opt.allli.each(function(i) {
			var li = jQuery(this);

			if (opt.lazyType=="all" || (opt.lazyType=="smart" && (i==0 || i == 1 || i == opt.slideamount || i == opt.slideamount-1))) {
				loadImages(li,opt,i);
				waitForCurrentImages(li,opt,function() {
					if (opt.sliderType=="carousel")
						punchgs.TweenLite.to(li,1,{autoAlpha:1,ease:punchgs.Power3.easeInOut});
				});
			}

		});



		// IF DEEPLINK HAS BEEN SET
		var deeplink = getUrlVars("#")[0];
		if (deeplink.length<9) {
			if (deeplink.split('slide').length>1) {
				var dslide=parseInt(deeplink.split('slide')[1],0);
				if (dslide<1) dslide=1;
				if (dslide>opt.slideamount) dslide=opt.slideamount;
				opt.startWithSlide=dslide-1;
			}
		}

		// PREPARE THE SPINNER
		container.append(	'<div class="tp-loader '+opt.spinner+'">'+
					  		'<div class="dot1"></div>'+
					  	    '<div class="dot2"></div>'+
					  	    '<div class="bounce1"></div>'+
							'<div class="bounce2"></div>'+
							'<div class="bounce3"></div>'+
						 '</div>');


		// RESET THE TIMER
		if (container.find('.tp-bannertimer').length===0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
		container.find('.tp-bannertimer').css({'width':'0%'});
		container.find('.tp-bannertimer').data('opt',opt);


		// PREPARE THE SLIDES
		opt.ul.css({'display':'block'});
		prepareSlides(container,opt);
		if (opt.parallax.type!=="off") _R.checkForParallax(container,opt);


		// PREPARE SLIDER SIZE
		_R.setSize(opt);


		// Call the Navigation Builder
		if (opt.sliderType!=="hero") _R.createNavigation(container,opt);
		if (_R.resizeThumbsTabs) _R.resizeThumbsTabs(opt);
		contWidthManager(opt);
		var _v = opt.viewPort;
		opt.inviewport = false;

		if (_v !=undefined && _v.enable) {
			if (!jQuery.isNumeric(_v.visible_area))
			 if (_v.visible_area.indexOf('%')!==-1)
				_v.visible_area = parseInt(_v.visible_area)/100;

			if (_R.scrollTicker) _R.scrollTicker(opt,container);
		}



		// START THE SLIDER
		setTimeout(function() {
			if ( opt.sliderType =="carousel") _R.prepareCarousel(opt);

			if (!_v.enable || (_v.enable && opt.inviewport) || (_v.enable &&  !opt.inviewport && !_v.outof=="wait")) {
				swapSlide(container,opt);
			}
			else
				opt.waitForFirstSlide = true;

			if (_R.manageNavigation) _R.manageNavigation(opt);


			// START COUNTDOWN
			if (opt.slideamount>1) {
				if (!_v.enable || (_v.enable && opt.inviewport))
					countDown(container,opt);
				else
					opt.waitForCountDown = true;
			}
			setTimeout(function() {
				container.trigger('revolution.slide.onloaded');
			},100);
		},opt.startDelay);
		opt.startDelay=0;



		/******************************
			-	FULLSCREEN CHANGE	-
		********************************/
		// FULLSCREEN MODE TESTING
		jQuery("body").data('rs-fullScreenMode',false);
		jQuery(window).on ('mozfullscreenchange webkitfullscreenchange fullscreenchange',function(){
		     jQuery("body").data('rs-fullScreenMode',!jQuery("body").data('rs-fullScreenMode'));
		     if (jQuery("body").data('rs-fullScreenMode')) {
			     setTimeout(function() {
			     	jQuery(window).trigger("resize");
			     },200);
		     }
		});

		var resizid = "resize.revslider-"+container.attr('id');

		// IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
		jQuery(window).on(resizid,function() {
			if (container==undefined) return false;

			if (jQuery('body').find(container)!=0)
				contWidthManager(opt);

				if (container.outerWidth(true)!=opt.width || container.is(":hidden") || (opt.sliderLayout=="fullscreen" && jQuery(window).height()!=opt.lastwindowheight)) {
						opt.lastwindowheight = jQuery(window).height();
						containerResized(container,opt);
				}


		});

		hideSliderUnder(container,opt);
		contWidthManager(opt);
		if (!opt.fallbacks.disableFocusListener && opt.fallbacks.disableFocusListener != "true" && opt.fallbacks.disableFocusListener !== true) tabBlurringCheck(container,opt);
	}
}

/*************************************
	-	 CREATE SIMPLE ARRAYS	-
**************************************/
var cArray = function(b,l) {
	if (!jQuery.isArray(b)) {
		var t = b;
		b = new Array();
		b.push(t);
	}
	if (b.length<l) {
		var t = b[b.length-1];
		for (var i=0;i<(l-b.length)+2;i++)
			b.push(t)
	}
	return b;
}



var checkHoverDependencies = function(_nc,opt) {

	if (_nc.data('start')==="sliderenter") {
		if (opt.layersonhover===undefined) {
			opt.c.on('tp-mouseenter',function() {
				if (opt.layersonhover)
					jQuery.each(opt.layersonhover,function(i,tnc) {
						tnc.data('animdirection',"in");
						var otl = tnc.data('timeline_out'),
							base_offsetx = opt.sliderType==="carousel" ? 0 : opt.width/2 - (opt.gridwidth[opt.curWinRange]*opt.bw)/2,
							base_offsety=0,
							cli = tnc.closest('.tp-revslider-slidesli'),
							stl = tnc.closest('.tp-static-layers');

						if ((cli.length>0 && (cli.hasClass("active-revslide")) || cli.hasClass("processing-revslide")) || (stl.length>0)) {

							if (otl!=undefined) {
								otl.pause(0);
								otl.kill();
							}
							_R.animateSingleCaption(tnc,opt,base_offsetx,base_offsety,0,false,true);
							var tl = tnc.data('timeline');
							tnc.data('triggerstate',"on");
							tl.play(0);
						}
					});
			});
			opt.c.on('tp-mouseleft',function() {
				if (opt.layersonhover)
					jQuery.each(opt.layersonhover,function(i,tnc) {
						tnc.data('animdirection',"out");
						tnc.data('triggered',true);
						tnc.data('triggerstate',"off");
						if (_R.stopVideo) _R.stopVideo(tnc,opt);
						if (_R.endMoveCaption) _R.endMoveCaption(tnc,null,null,opt);
					});
			});
			opt.layersonhover = new Array;
		}
		opt.layersonhover.push(_nc);
	}
}



var contWidthManager = function(opt) {

	var rl = _R.getHorizontalOffset(opt.c,"left");

	if (opt.sliderLayout!="auto" && (opt.sliderLayout!=="fullscreen" || opt.fullScreenAutoWidth!="on")) {
		var loff = Math.ceil(opt.c.closest('.forcefullwidth_wrapper_tp_banner').offset().left - rl);
		punchgs.TweenLite.set(opt.c.parent(),{'left':(0-loff)+"px",'width':jQuery(window).width()-_R.getHorizontalOffset(opt.c,"both")});
	} else {
		if (opt.sliderLayout=="fullscreen" && opt.fullScreenAutoWidth=="on")
			punchgs.TweenLite.set(opt.ul,{left:0,width:opt.c.width()});
		else
			punchgs.TweenLite.set(opt.ul,{left:rl,width:opt.c.width()-_R.getHorizontalOffset(opt.c,"both")});
	}


	// put Static Layer Wrapper in Position
	if (opt.slayers && (opt.sliderLayout!="fullwidth" && opt.sliderLayout!="fullscreen"))
		punchgs.TweenLite.set(opt.slayers,{left:rl});
}


var cv = function(a,d) {
  	return a===undefined ? d : a;
}


var hideSliderUnder = function(container,opt,resized) {
	// FIRST TIME STOP/START HIDE / SHOW SLIDER
	//REMOVE AND SHOW SLIDER ON DEMAND
	var contpar= container.parent();
	if (jQuery(window).width()<opt.hideSliderAtLimit) {
		container.trigger('stoptimer');
		if (contpar.css('display')!="none")
			contpar.data('olddisplay',contpar.css('display'));
		contpar.css({display:"none"});
	} else {
		if (container.is(":hidden") && resized) {
			if (contpar.data('olddisplay')!=undefined && contpar.data('olddisplay')!="undefined" && contpar.data('olddisplay') != "none")
				contpar.css({display:contpar.data('olddisplay')});
			else
				contpar.css({display:"block"});
			container.trigger('restarttimer');
			setTimeout(function() {
				containerResized(container,opt);
			},150)
		}
	}
	if (_R.hideUnHideNav) _R.hideUnHideNav(opt);
}


//////////////////////////
//	CONTAINER RESIZED	//
/////////////////////////
var containerResized = function (c,opt) {
	if (opt.infullscreenmode == true)
		opt.minHeight = jQuery(window).height();


	setCurWinRange(opt);
	setCurWinRange(opt,true);
	if (!_R.resizeThumbsTabs || _R.resizeThumbsTabs(opt)===true) {

		hideSliderUnder(c,opt,true);
		contWidthManager(opt);

		if ( opt.sliderType =="carousel") _R.prepareCarousel(opt,true);

		if (c===undefined) return false;

		_R.setSize(opt);

		opt.conw = opt.c.width();
		opt.conh = opt.infullscreenmode ? opt.minHeight : opt.c.height();


		var actsh = c.find('.active-revslide .slotholder'),
			nextsh = c.find('.processing-revslide .slotholder');

		removeSlots(c,opt,c,2);

		if (opt.sliderType==="standard") {
			punchgs.TweenLite.set(nextsh.find('.defaultimg'),{opacity:0});
			actsh.find('.defaultimg').css({'opacity':1});
		}


		if ( opt.sliderType =="carousel" && opt.lastconw != opt.conw)  {
			clearTimeout(opt.pcartimer);
			opt.pcartimer = setTimeout(function() {
				_R.prepareCarousel(opt,true);
			},100);
			opt.lastconw = opt.conw;
		}

		if (_R.manageNavigation) _R.manageNavigation(opt);


		if (_R.animateTheCaptions) _R.animateTheCaptions(c.find('.active-revslide'), opt,true);

		if (nextsh.data('kenburns')=="on")
			_R.startKenBurn(nextsh,opt,nextsh.data('kbtl').progress());

		if (actsh.data('kenburns')=="on")
			_R.startKenBurn(actsh,opt,actsh.data('kbtl').progress());

		// DOUBLE CALL FOR SOME FUNCTION TO AVOID PORTRAIT/LANDSCAPE ISSUES, AND TO AVOID FULLSCREEN/NORMAL SWAP ISSUES
		if (_R.animateTheCaptions) _R.animateTheCaptions(nextsh.closest('li'), opt,true);
		if (_R.manageNavigation) _R.manageNavigation(opt);

	}

}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////       PREPARING / REMOVING		////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var setScale = function(opt) {
	opt.bw = (opt.width / opt.gridwidth[opt.curWinRange]);
	opt.bh = (opt.height / opt.gridheight[opt.curWinRange]);


	if (opt.bh>opt.bw)
		opt.bh=opt.bw
	else
		opt.bw = opt.bh;

	if (opt.bh>1 || opt.bw>1) { opt.bw=1; opt.bh=1; }
}





/////////////////////////////////////////
//	-	PREPARE THE SLIDES / SLOTS -  //
///////////////////////////////////////
var prepareSlides = function(container,opt) {

	container.find('.tp-caption').each(function() {
		var c = jQuery(this);
		if (c.data('transition')!==undefined) c.addClass(c.data('transition'));
	});

	// PREPARE THE UL CONTAINER TO HAVEING MAX HEIGHT AND HEIGHT FOR ANY SITUATION
	opt.ul.css({overflow:'hidden',width:'100%',height:'100%',maxHeight:container.parent().css('maxHeight')})
	if (opt.autoHeight=="on") {
	   opt.ul.css({overflow:'hidden',width:'100%',height:'100%',maxHeight:"none"});
	   container.css({'maxHeight':'none'});
	   container.parent().css({'maxHeight':'none'});
	 }
	//_R.setSize("",opt);
	opt.allli.each(function(j) {
		var li=jQuery(this),
			originalIndex = li.data('originalindex');

		//START WITH CORRECT SLIDE
		if ((opt.startWithSlide !=undefined && originalIndex==opt.startWithSlide) || opt.startWithSlide ===undefined && j==0)
			li.addClass("next-revslide");


		// MAKE LI OVERFLOW HIDDEN FOR FURTHER ISSUES
		li.css({'width':'100%','height':'100%','overflow':'hidden'});

	});

	if (opt.sliderType === "carousel") {
		//SET CAROUSEL
		opt.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
		var apt = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
		opt.c.parent().prepend(apt);
		opt.c.parent().append(apt);
		_R.prepareCarousel(opt);
	}

	// RESOLVE OVERFLOW HIDDEN OF MAIN CONTAINER
	container.parent().css({'overflow':'visible'});

	opt.allli.find('>img').each(function(j) {

		var img=jQuery(this),
			bgvid = img.closest('li').find('.rs-background-video-layer');

		bgvid.addClass("defaultvid").css({zIndex:30});

		img.addClass('defaultimg');

		// TURN OF KEN BURNS IF WE ARE ON MOBILE AND IT IS WISHED SO
		if (opt.fallbacks.panZoomDisableOnMobile == "on"  && _ISM) {
			img.data('kenburns',"off");
			img.data('bgfit',"cover");
		}

		img.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>');
		bgvid.appendTo(img.closest('li').find('.slotholder'));
		var dts = img.data();
		img.closest('.slotholder').data(dts);

		if (bgvid.length>0 && dts.bgparallax!=undefined)
			bgvid.data('bgparallax',dts.bgparallax);

		if (opt.dottedOverlay!="none" && opt.dottedOverlay!=undefined)
				img.closest('.slotholder').append('<div class="tp-dottedoverlay '+opt.dottedOverlay+'"></div>');

		var src=_R_get_src(img);
		dts.src = src;
		dts.bgfit = dts.bgfit || "cover";
		dts.bgrepeat = dts.bgrepeat || "no-repeat",
		dts.bgposition = dts.bgposition || "center center";

		var pari = img.closest('.slotholder');
		img.parent().append('<div class="tp-bgimg defaultimg" style="background-color:'+img.css("backgroundColor")+';background-repeat:'+dts.bgrepeat+';background-image:url('+src+');background-size:'+dts.bgfit+';background-position:'+dts.bgposition+';width:100%;height:100%;"></div>');
		var comment = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + img.get(0).outerHTML);
		img.replaceWith(comment);
		img = pari.find('.tp-bgimg');
		img.data(dts);
                _R_set_src(img, src);

		if (opt.sliderType === "standard" || opt.sliderType==="undefined")
			img.css({'opacity':0});

	})


}


//	REMOVE SLOTS	//
var removeSlots = function(container,opt,where,addon) {
	opt.removePrepare = opt.removePrepare + addon;
	where.find('.slot, .slot-circle-wrapper').each(function() {
		jQuery(this).remove();
	});
	opt.transition = 0;
	opt.removePrepare = 0;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////       SLIDE SWAPS			////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// THE IMAGE IS LOADED, WIDTH, HEIGHT CAN BE SAVED
var cutParams = function(a) {
	var b = a;
	if (a!=undefined && a.length>0)
		b = a.split("?")[0];
	return b;
}

var relativeRedir = function(redir){
  return location.pathname.replace(/(.*)\/[^/]*/, "$1/"+redir);
}

var abstorel = function (base, relative) {
    var stack = base.split("/"),
        parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)
    for (var i=0; i<parts.length; i++) {
        if (parts[i] == ".")
            continue;
        if (parts[i] == "..")
            stack.pop();
        else
            stack.push(parts[i]);
    }
    return stack.join("/");
}

var imgLoaded = function(img,opt,progress) {
	opt.syncload--;
	if (opt.loadqueue)
		jQuery.each(opt.loadqueue, function(index,queue) {

                        var queue_src = _R_get_src(queue);
                        var img_src = _R_get_src(img);
			var mqsrc = queue_src.replace(/\.\.\/\.\.\//gi,""),
				fullsrc = self.location.href,
				origin = document.location.origin,
				fullsrc_b = fullsrc.substring(0,fullsrc.length-1)+"/"+mqsrc,
				origin_b = origin+"/"+mqsrc,
				absolute = abstorel(self.location.href, queue_src);

			fullsrc = fullsrc.substring(0,fullsrc.length-1)+mqsrc;
			origin = origin+mqsrc;

			if (cutParams(origin) === cutParams(decodeURIComponent(img_src)) ||
				cutParams(fullsrc)=== cutParams(decodeURIComponent(img_src)) ||
				cutParams(absolute)=== cutParams(decodeURIComponent(img_src)) ||
				cutParams(origin_b) === cutParams(decodeURIComponent(img_src)) ||
				cutParams(fullsrc_b)=== cutParams(decodeURIComponent(img_src)) ||
				cutParams(queue_src) === cutParams(decodeURIComponent(img_src)) ||
				cutParams(queue_src).replace(/^.*\/\/[^\/]+/, '') === cutParams(decodeURIComponent(img_src)).replace(/^.*\/\/[^\/]+/, '') ||
				(window.location.origin==="file://" && cutParams(img_src).match(new RegExp(mqsrc)))) {
					queue.progress = progress;
					queue.width = img.width;
					queue.height = img.height;
			}
		});
	progressImageLoad(opt);
}

// PRELOAD IMAGES 3 PIECES ON ONE GO, CHECK LOAD PRIORITY
var progressImageLoad = function(opt) {
	if (opt.syncload == 3) return;
	if (opt.loadqueue)
		jQuery.each(opt.loadqueue, function(index,queue) {
			if (queue.progress.match(/prepared/g)) {
			 	 if (opt.syncload<=3) {
					opt.syncload++;
					if (queue.type=="img") {
						var img = new Image();

						img.onload = function() {
						 	imgLoaded(this,opt,"loaded");
						};
						img.onerror = function() {
							imgLoaded(this,opt,"failed");
						};

						img.src=_R_get_src(queue);
					} else {
						jQuery.get(_R_get_src(queue), function(data) {
						  queue.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
						  queue.progress="loaded";
						  opt.syncload--;
						  progressImageLoad(opt);
						}).fail(function() {
						  queue.progress="failed";
						  opt.syncload--;
						  progressImageLoad(opt);
						});
					}
					queue.progress="inload";
				}
			}
		});
}



// ADD TO QUEUE THE NOT LOADED IMAGES YES
var addToLoadQueue = function(src,opt,prio,type,staticlayer) {
	var alreadyexist = false;
	if (opt.loadqueue)
		jQuery.each(opt.loadqueue, function(index,queue) {
			if (_R_get_src(queue) === src) alreadyexist = true;
		});


	if (!alreadyexist) {
			var loadobj = new Object();
			loadobj.src = src;
			loadobj.type = type || "img";
			loadobj.prio = prio;
			loadobj.progress = "prepared";
			loadobj.static = staticlayer;
			opt.loadqueue.push(loadobj);
	}

}

// LOAD THE IMAGES OF THE PREDEFINED CONTAINER
var loadImages = function(container,opt,prio,staticlayer) {

	container.find('img,.defaultimg, .tp-svg-layer').each(function() {
		var element = jQuery(this),
			src = element.data('lazyload') !== undefined && element.data('lazyload')!=="undefined" ? element.data('lazyload') : element.data('svg_src') !=undefined ? element.data('svg_src')  : _R_get_src(element),
			type = element.data('svg_src') !=undefined ? "svg" : "img";

		element.data('start-to-load',jQuery.now());
		addToLoadQueue(src,opt,prio,type,staticlayer);
	});
	progressImageLoad(opt);
}


// FIND SEARCHED IMAGE/SRC IN THE LOAD QUEUE
var getLoadObj = function(opt,src) {
	var obj = new Object();
	if (opt.loadqueue)
		jQuery.each(opt.loadqueue, function(index,queue) {
			if (_R_get_src(queue) == src) obj = queue;
		});
	return obj;
}

// WAIT PROGRESS TILL THE PREDEFINED CONTAINER HAS ALL IMAGES LOADED INSIDE
var waitForCurrentImages = function(nextli,opt,callback) {

	var waitforload = false;


	// PRELOAD ALL IMAGES
	nextli.find('img,.defaultimg, .tp-svg-layer').each(function() {
		var element = jQuery(this),
			src = element.data('lazyload') != undefined ? element.data('lazyload') : element.data('svg_src') !=undefined ? element.data('svg_src')  : _R_get_src(element),
			loadobj = getLoadObj(opt,src);


		// IF ELEMENTS IS NOT LOADED YET, AND IT IS NOW LOADED
		if (element.data('loaded')===undefined && loadobj !==undefined && loadobj.progress && loadobj.progress.match(/loaded/g)) {

                        _R_set_src(element, _R_get_src(loadobj));


			// IF IT IS A DEFAULT IMG, WE NEED TO ASSIGN SOME SPECIAL VALUES TO IT
			if (loadobj.type=="img") {
				if (element.hasClass("defaultimg")) {
					if (!_R.isIE(8))
						element.css({backgroundImage:'url("'+loadobj.src+'")'});
					else {
						_R_set_src(defimg, loadobj.src);
					}
					nextli.data('owidth',loadobj.width);
					nextli.data('oheight',loadobj.height);
					nextli.find('.slotholder').data('owidth',loadobj.width);
					nextli.find('.slotholder').data('oheight',loadobj.height);
				} else {
					var w = element.data('ww'),
						h = element.data('hh');

					element.data('owidth',loadobj.width);
					element.data('oheight',loadobj.height);

					w = w==undefined || w =="auto" || w=="" ? loadobj.width : w;
					h = h==undefined || h =="auto" || h=="" ? loadobj.height : h;


					element.data('ww',w);
					element.data('hh',h);

				}
			} else

			if (loadobj.type=="svg" && loadobj.progress=="loaded") {

				element.append('<div class="tp-svg-innercontainer"></div>');
				element.find('.tp-svg-innercontainer').append(loadobj.innerHTML);
			}
			// ELEMENT IS NOW FULLY LOADED
			element.data('loaded',true);
		}


		if (loadobj && loadobj.progress && loadobj.progress.match(/inprogress|inload|prepared/g))
			if (jQuery.now()-element.data('start-to-load')<5000)
					waitforload = true;
			else {
				loadobj.progress="failed";
				console.error(src+"  Could not be loaded !");
			}

		// WAIT FOR VIDEO API'S
		if (opt.youtubeapineeded == true && (!window['YT'] || YT.Player==undefined)) {
			waitforload = true;
			if (jQuery.now()-opt.youtubestarttime>5000 && opt.youtubewarning!=true) {
				opt.youtubewarning = true;
				var txt = "YouTube Api Could not be loaded !";
				if (location.protocol === 'https:') txt = txt + " Please Check and Renew SSL Certificate !";
				console.error(txt);
				opt.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+txt+'</strong></div>')
			}
		}

		if (opt.vimeoapineeded == true && !window['Froogaloop']) {
			waitforload = true;
			if (jQuery.now()-opt.vimeostarttime>5000 && opt.vimeowarning!=true) {
				opt.vimeowarning= true;
				var txt = "Vimeo Froogaloop Api Could not be loaded !";
				if (location.protocol === 'https:') txt = txt + " Please Check and Renew SSL Certificate !";
				console.error(txt);
				opt.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+txt+'</strong></div>')
			}
		}

	});

	if (!_ISM && opt.audioqueue && opt.audioqueue.length>0) {
		jQuery.each(opt.audioqueue,function(i,obj) {
			if (obj.status && obj.status==="prepared")
				if (jQuery.now() - obj.start<obj.waittime)
					waitforload = true;
		});
	}

	jQuery.each(opt.loadqueue,function(i,o) {
		if (o.static===true && (o.progress!="loaded" || o.progress==="failed"))
			waitforload = true;
	});

	if (waitforload)
		setTimeout(function() {
				waitForCurrentImages(nextli,opt,callback) ;
			},19);
	else
		setTimeout(callback,19);

}




//////////////////////////////////////
//	-	CALL TO SWAP THE SLIDES -  //
/////////////////////////////////////
var swapSlide = function(container,opt) {

	clearTimeout(opt.waitWithSwapSlide);



	if (container.find('.processing-revslide').length>0) {
		opt.waitWithSwapSlide = setTimeout(function() {
			swapSlide(container,opt);

		},150);
		return false;
	}

	var actli = container.find('.active-revslide'),
		nextli = container.find('.next-revslide'),
		defimg= nextli.find('.defaultimg');


	if (nextli.index() === actli.index()) {
		nextli.removeClass("next-revslide");
		return false;
	}


	nextli.removeClass("next-revslide").addClass("processing-revslide");

	nextli.data('slide_on_focus_amount',(nextli.data('slide_on_focus_amount')+1) || 1);
	// CHECK IF WE ARE ALREADY AT LAST ITEM TO PLAY IN REAL LOOP SESSION
	if (opt.stopLoop=="on" && nextli.index()==opt.lastslidetoshow-1) {
		container.find('.tp-bannertimer').css({'visibility':'hidden'});
		container.trigger('revolution.slide.onstop');
		opt.noloopanymore = 1;
	}

	// INCREASE LOOP AMOUNTS
	if (nextli.index()===opt.slideamount-1) {
		opt.looptogo=opt.looptogo-1;
		if (opt.looptogo<=0)
				opt.stopLoop="on";
	}

	opt.tonpause = true;
	container.trigger('stoptimer');
	opt.cd=0;
	if (opt.spinner==="off")
		container.find('.tp-loader').css({display:"none"});
	else
		container.find('.tp-loader').css({display:"block"});


	loadImages(nextli,opt,1);
	if (_R.preLoadAudio) _R.preLoadAudio(nextli,opt,1);

	// WAIT FOR SWAP SLIDE PROGRESS
	waitForCurrentImages(nextli,opt,function() {


		// MANAGE BG VIDEOS
		nextli.find('.rs-background-video-layer').each(function() {
			var _nc = jQuery(this);
			if (!_nc.hasClass("HasListener")) {
				_nc.data('bgvideo',1);
				if (_R.manageVideoLayer) _R.manageVideoLayer(_nc,opt);
			}
			if (_nc.find('.rs-fullvideo-cover').length==0)
				_nc.append('<div class="rs-fullvideo-cover"></div>')
		});
		swapSlideProgress(opt,defimg,container)
	});

}

//////////////////////////////////////
//	-	PROGRESS SWAP THE SLIDES -  //
/////////////////////////////////////
var swapSlideProgress = function(opt,defimg,container) {

	var actli = container.find('.active-revslide'),
		nextli = container.find('.processing-revslide'),
		actsh = actli.find('.slotholder'),
		nextsh = nextli.find('.slotholder');


	opt.tonpause=false;

    opt.cd=0;




    container.find('.tp-loader').css({display:"none"});
   // if ( opt.sliderType =="carousel") _R.prepareCarousel(opt);
	_R.setSize(opt);
	_R.slotSize(defimg,opt);

   	if (_R.manageNavigation) _R.manageNavigation(opt);
   	var data={};
   	data.nextslide=nextli;
    data.currentslide=actli;
	container.trigger('revolution.slide.onbeforeswap',data);

	opt.transition = 1;
	opt.videoplaying = false;

	// IF DELAY HAS BEEN SET VIA THE SLIDE, WE TAKE THE NEW VALUE, OTHER WAY THE OLD ONE...
	if (nextli.data('delay')!=undefined) {
				opt.cd=0;
				opt.delay=nextli.data('delay');
	} else
		opt.delay=opt.origcd;


	if (nextli.data('ssop')=="true" || nextli.data('ssop')===true)
		opt.ssop = true
	else
		opt.ssop = false;



	container.trigger('nulltimer');

	var ai = actli.index(),
		ni = nextli.index();
	opt.sdir = ni<ai ? 1 : 0;

	if (opt.sc_indicator=="arrow") {
		if (ai==0 && ni==opt.slideamount-1) opt.sdir = 1;
		if (ai==opt.slideamount-1 && ni==0) opt.sdir = 0;
	}

	opt.lsdir = opt.lsdir === undefined ? opt.sdir : opt.lsdir;
	opt.dirc = opt.lsdir != opt.sdir;
	opt.lsdir = opt.sdir;

	///////////////////////////
	//	REMOVE THE CAPTIONS //
	///////////////////////////



	if (actli.index() != nextli.index() && opt.firststart!=1)
		if (_R.removeTheCaptions) _R.removeTheCaptions(actli,opt);


	if (!nextli.hasClass('rs-pause-timer-once') && !nextli.hasClass("rs-pause-timer-always"))
    	container.trigger('restarttimer');
    else
    	opt.videoplaying = true;

    nextli.removeClass("rs-pause-timer-once");

	var nexttrans,
		direction=-1,
		mtl;

	// SELECT SLIDER TYPE
	if ( opt.sliderType =="carousel") {
		mtl = new punchgs.TimelineLite();
		_R.prepareCarousel(opt,mtl);
		letItFree(container,opt,nextsh,actsh,nextli,actli,mtl);
		opt.transition = 0;
		opt.firststart = 0;
	} else {
		mtl = new punchgs.TimelineLite({onComplete:function() {
			letItFree(container,opt,nextsh,actsh,nextli,actli,mtl);
		}});
		mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'),{opacity:0}));
		mtl.pause();

		if (opt.firststart==1) {
			punchgs.TweenLite.set(actli,{autoAlpha:0});
			opt.firststart=0;
		}


		punchgs.TweenLite.set(actli,{zIndex:18});
		punchgs.TweenLite.set(nextli,{autoAlpha:0,zIndex:20});


		// IF THERE IS AN OTHER FIRST SLIDE START HAS BEED SELECTED
		if (nextli.data('differentissplayed') =='prepared') {
			nextli.data('differentissplayed','done');
			nextli.data('transition',nextli.data('savedtransition'));
			nextli.data('slotamount',nextli.data('savedslotamount'));
			nextli.data('masterspeed',nextli.data('savedmasterspeed'));
		}


		if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') !="done") {

			nextli.data('savedtransition',nextli.data('transition'));
			nextli.data('savedslotamount',nextli.data('slotamount'));
			nextli.data('savedmasterspeed',nextli.data('masterspeed'));
			nextli.data('transition',nextli.data('fstransition'));
			nextli.data('slotamount',nextli.data('fsslotamount'));
			nextli.data('masterspeed',nextli.data('fsmasterspeed'));
			nextli.data('differentissplayed','prepared');
		}

		if (nextli.data('transition')==undefined) nextli.data('transition',"random");

		nexttrans = 0;
		var transtext = nextli.data('transition') !== undefined ? nextli.data('transition').split(",") : "fade",
			curtransid = nextli.data('nexttransid') == undefined ? -1 : nextli.data('nexttransid');
		if (nextli.data('randomtransition')=="on")
			curtransid = Math.round(Math.random()*transtext.length);
		else
			curtransid=curtransid+1;

		if (curtransid==transtext.length) curtransid=0;
		nextli.data('nexttransid',curtransid);

		var comingtransition = transtext[curtransid];

		if (opt.ie) {
			if (comingtransition=="boxfade") comingtransition = "boxslide";
			if (comingtransition=="slotfade-vertical") comingtransition = "slotzoom-vertical";
			if (comingtransition=="slotfade-horizontal") comingtransition = "slotzoom-horizontal";
		}

		if (_R.isIE(8))
			comingtransition = 11;



		mtl = _R.animateSlide(nexttrans, comingtransition, container,  opt, nextli, actli, nextsh, actsh,  mtl);
		if (nextsh.data('kenburns')=="on") {
			_R.startKenBurn(nextsh,opt);
			mtl.add(punchgs.TweenLite.set(nextsh,{autoAlpha:0}))
		}

		// SHOW FIRST LI && ANIMATE THE CAPTIONS
		mtl.pause();
	}

	if (_R.scrollHandling) {
		_R.scrollHandling(opt, true);
		mtl.eventCallback("onUpdate",function() {
			_R.scrollHandling(opt, true);
		});
	}

	// START PARALLAX IF NEEDED
	if (opt.parallax.type!="off" && opt.parallax.firstgo==undefined && _R.scrollHandling) {
		opt.parallax.firstgo = true;
		opt.lastscrolltop = -999;
		_R.scrollHandling(opt,true);
		setTimeout(function() {
			opt.lastscrolltop = -999;
			_R.scrollHandling(opt,true);
		},210);
		setTimeout(function() {
			opt.lastscrolltop = -999;
			_R.scrollHandling(opt,true);
		},420);
	}


	if (_R.animateTheCaptions) {
		_R.animateTheCaptions(nextli, opt,null,mtl);
	} else {
		if (mtl != undefined) setTimeout(function() {
			mtl.resume();
		},30);
	}
	punchgs.TweenLite.to(nextli,0.001,{autoAlpha:1});


	//if (_R.callStaticDDDParallax) _R.callStaticDDDParallax(container,opt,nextli);

}


//////////////////////////////////////////
//	GIVE FREE THE TRANSITIOSN			//
//////////////////////////////////////////
var letItFree = function(container,opt,nextsh,actsh,nextli,actli,mtl) {

	if (opt.sliderType==="carousel") {
		// CAROUSEL SLIDER
	}  else {
		opt.removePrepare = 0;
		punchgs.TweenLite.to(nextsh.find('.defaultimg'),0.001,{zIndex:20,autoAlpha:1,onComplete:function() {
			removeSlots(container,opt,nextli,1);

		}});
		if (nextli.index()!=actli.index()) {
			punchgs.TweenLite.to(actli,0.2,{zIndex:18,autoAlpha:0,onComplete:function() {
				removeSlots(container,opt,actli,1);
			}});
		}
	}


	container.find('.active-revslide').removeClass("active-revslide");
	container.find('.processing-revslide').removeClass("processing-revslide").addClass("active-revslide");
	opt.act=nextli.index();

	opt.c.attr('data-slideactive',container.find('.active-revslide').data('index'));


	if (opt.parallax.type=="scroll" || opt.parallax.type=="scroll+mouse" || opt.parallax.type=="mouse+scroll") {
		opt.lastscrolltop = -999;
		_R.scrollHandling(opt);
	}

	mtl.clear();


	if (actsh.data('kbtl')!=undefined) {
		actsh.data('kbtl').reverse();
		actsh.data('kbtl').timeScale(25);
	}
	if (nextsh.data('kenburns')=="on") {
		if (nextsh.data('kbtl')!=undefined) {
			nextsh.data('kbtl').timeScale(1);
			nextsh.data('kbtl').play();
		}
		else
			_R.startKenBurn(nextsh,opt);
	}

	nextli.find('.rs-background-video-layer').each(function(i) {
		if (_ISM) return false;
		var _nc = jQuery(this)
		_R.resetVideo(_nc,opt);

		punchgs.TweenLite.fromTo(_nc,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:0.2,onComplete:function() {
			if (_R.animcompleted) _R.animcompleted(_nc,opt);
		}});
	});


	actli.find('.rs-background-video-layer').each(function(i) {
		if (_ISM) return false;
		var _nc = jQuery(this);
		if (_R.stopVideo) {
			_R.resetVideo(_nc,opt);
			_R.stopVideo(_nc,opt);
		}
		punchgs.TweenLite.to(_nc,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:0.2});
	});
	// TIRGGER THE ON CHANGE EVENTS
	var data={};
	data.slideIndex=nextli.index()+1;
	data.slideLIIndex=nextli.index();
	data.slide = nextli;
	data.currentslide=nextli;
	data.prevslide = actli;
	opt.last_shown_slide = actli.index();

	container.trigger('revolution.slide.onchange',data);
	container.trigger('revolution.slide.onafterswap',data);

	opt.duringslidechange = false;

	var lastSlideLoop = actli.data('slide_on_focus_amount'),
		lastSlideMaxLoop = actli.data('hideafterloop');
	if (lastSlideMaxLoop!=0 && lastSlideMaxLoop<=lastSlideLoop) {
		opt.c.revremoveslide(actli.index());
	}
	//if (_R.callStaticDDDParallax) _R.callStaticDDDParallax(container,opt,nextli);

}





///////////////////////////
//	REMOVE THE LISTENERS //
///////////////////////////
var removeAllListeners = function(container,opt) {
	container.children().each(function() {
	  try{ jQuery(this).die('click'); } catch(e) {}
	  try{ jQuery(this).die('mouseenter');} catch(e) {}
	  try{ jQuery(this).die('mouseleave');} catch(e) {}
	  try{ jQuery(this).unbind('hover');} catch(e) {}
	})
	try{ container.die('click','mouseenter','mouseleave');} catch(e) {}
	clearInterval(opt.cdint);
	container=null;
}

///////////////////////////
//	-	countDown	-	//
/////////////////////////
var countDown = function(container,opt) {
	opt.cd=0;
	opt.loop=0;
	if (opt.stopAfterLoops!=undefined && opt.stopAfterLoops>-1)
			opt.looptogo=opt.stopAfterLoops;
	else
		opt.looptogo=9999999;

	if (opt.stopAtSlide!=undefined && opt.stopAtSlide>-1)
			opt.lastslidetoshow=opt.stopAtSlide;
	else
			opt.lastslidetoshow=999;

	opt.stopLoop="off";

	if (opt.looptogo==0) opt.stopLoop="on";


	var bt=container.find('.tp-bannertimer');

	// LISTENERS  //container.trigger('stoptimer');
	container.on('stoptimer',function() {

		var bt = jQuery(this).find('.tp-bannertimer');
		bt.data('tween').pause();
		if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
		opt.sliderstatus = "paused";
		_R.unToggleState(opt.slidertoggledby);
	});


	container.on('starttimer',function() {
		if (opt.forcepause_viatoggle) return;
		if (opt.conthover!=1 && opt.videoplaying!=true && opt.width>opt.hideSliderAtLimit && opt.tonpause != true && opt.overnav !=true && opt.ssop!=true)
			if (opt.noloopanymore !== 1 && (!opt.viewPort.enable || opt.inviewport)) {

				bt.css({visibility:"visible"});
				bt.data('tween').resume();
				opt.sliderstatus = "playing";
			}

			if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
			_R.toggleState(opt.slidertoggledby);
	});


	container.on('restarttimer',function() {
		if (opt.forcepause_viatoggle) return;
		var bt = jQuery(this).find('.tp-bannertimer');
		if (opt.mouseoncontainer && opt.navigation.onHoverStop=="on" && (!_ISM)) return false;
		if (opt.noloopanymore !== 1 && (!opt.viewPort.enable || opt.inviewport) && opt.ssop!=true) {
			bt.css({visibility:"visible"});
			bt.data('tween').kill();

			bt.data('tween',punchgs.TweenLite.fromTo(bt,opt.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:countDownNext,delay:1}));
			opt.sliderstatus = "playing";
		}
		if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
		_R.toggleState(opt.slidertoggledby);
	});

	container.on('nulltimer',function() {
			bt.data('tween').kill();
			bt.data('tween',punchgs.TweenLite.fromTo(bt,opt.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:countDownNext,delay:1}));
			bt.data('tween').pause(0);
			if (opt.disableProgressBar=="on") bt.css({visibility:"hidden"});
			opt.sliderstatus = "paused";
	});

	var countDownNext = function() {
		if (jQuery('body').find(container).length==0) {
			removeAllListeners(container,opt);
			clearInterval(opt.cdint);
		}

		container.trigger("revolution.slide.slideatend");

		//STATE OF API CHANGED -> MOVE TO AIP BETTER
		if (container.data('conthover-changed') == 1) {
			opt.conthover=	container.data('conthover');
			container.data('conthover-changed',0);
		}

		_R.callingNewSlide(opt,container,1);
	}

	bt.data('tween',punchgs.TweenLite.fromTo(bt,opt.delay/1000,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:countDownNext,delay:1}));
	bt.data('opt',opt);

	if (opt.slideamount >1 && !(opt.stopAfterLoops==0 && opt.stopAtSlide==1)) {
		container.trigger("starttimer");
	}
	else {
		opt.noloopanymore = 1;

		container.trigger("nulltimer");
	}

	container.on('tp-mouseenter',function() {
		    opt.mouseoncontainer = true;
			if (opt.navigation.onHoverStop=="on" && (!_ISM)) {
				container.trigger('stoptimer');
				container.trigger('revolution.slide.onpause');
			}
	});
	container.on('tp-mouseleft',function() {
			opt.mouseoncontainer = false;
			if (container.data('conthover')!=1 && opt.navigation.onHoverStop=="on" && ((opt.viewPort.enable==true && opt.inviewport) || opt.viewPort.enable==false)) {
				container.trigger('revolution.slide.onresume');
				container.trigger('starttimer');
			}
	});

}




//////////////////////////////////////////////////////
// * Revolution Slider - NEEDFULL FUNCTIONS
// * @version: 1.0 (30.10.2014)
// * @author ThemePunch
//////////////////////////////////////////////////////



// 	-	BLUR / FOXUS FUNCTIONS ON BROWSER

var vis = (function(){
	    var stateKey,
	        eventKey,
	        keys = {
	                hidden: "visibilitychange",
	                webkitHidden: "webkitvisibilitychange",
	                mozHidden: "mozvisibilitychange",
	                msHidden: "msvisibilitychange"
	    };
	    for (stateKey in keys) {
	        if (stateKey in document) {
	            eventKey = keys[stateKey];
	            break;
	        }
	    }
	    return function(c) {
	        if (c) document.addEventListener(eventKey, c);
	        return !document[stateKey];
	    }
	})();

var restartOnFocus = function(opt) {
	if (opt==undefined || opt.c==undefined) return false;
	if (opt.windowfocused!=true) {
		opt.windowfocused = true;
	    punchgs.TweenLite.delayedCall(0.3,function(){
	        // TAB IS ACTIVE, WE CAN START ANY PART OF THE SLIDER
	        if (opt.fallbacks.nextSlideOnWindowFocus=="on") opt.c.revnext();
	        opt.c.revredraw();
	        if (opt.lastsliderstatus=="playing")
			opt.c.revresume();
	    });
	}
}

var lastStatBlur = function(opt) {
	opt.windowfocused = false;
	opt.lastsliderstatus = opt.sliderstatus;
	opt.c.revpause();
	var actsh = opt.c.find('.active-revslide .slotholder'),
		nextsh = opt.c.find('.processing-revslide .slotholder');

	if (nextsh.data('kenburns')=="on")
		_R.stopKenBurn(nextsh,opt);

	if (actsh.data('kenburns')=="on")
		_R.stopKenBurn(actsh,opt);


}

var tabBlurringCheck = function(container,opt) {
	var notIE = (document.documentMode === undefined),
	    isChromium = window.chrome;

	if (notIE && !isChromium) {
	    // checks for Firefox and other  NON IE Chrome versions
	    jQuery(window).on("focusin", function () {
			restartOnFocus(opt);
	    }).on("focusout", function () {
	    	lastStatBlur(opt);
	    });
	} else {
	    // checks for IE and Chromium versions
	    if (window.addEventListener) {
	        // bind focus event
	        window.addEventListener("focus", function (event) {
				restartOnFocus(opt);
	        }, false);
	        // bind blur event
	        window.addEventListener("blur", function (event) {
				lastStatBlur(opt);
	        }, false);

	    } else {
	        // bind focus event
	        window.attachEvent("focus", function (event) {
	        	restartOnFocus(opt);
	        });
	        // bind focus event
	        window.attachEvent("blur", function (event) {
				lastStatBlur(opt);
	        });
	    }
	}
}


// 	-	GET THE URL PARAMETER //

var getUrlVars = function (hashdivider){
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
	for(var i = 0; i < hashes.length; i++)
	{
		hashes[i] = hashes[i].replace('%3D',"=");
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}
})(jQuery);
;/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 27.02.2015
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.12
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.rampinteractive.co.uk/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010-2015 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/

/*
*
* Changelog
* $Date: 2010-12-12 (Wed, 12 Dec 2010) $
* $version: 1.0.0
* $version: 1.0.1 - removed multibyte comments
*
* $Date: 2011-21-02 (Mon, 21 Feb 2011) $
* $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
*					- changed handler signatures so one handler can be used for multiple events
* $Date: 2011-23-02 (Wed, 23 Feb 2011) $
* $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
*					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
* $version: 1.2.1 	- removed console log!
*
* $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
*
* $Date: 2011-28-04 (Thurs, 28 April 2011) $
* $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
*
* $Date: 2011-27-09 (Tues, 27 September 2011) $
* $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
*
* $Date: 2012-14-05 (Mon, 14 May 2012) $
* $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
*
* $Date: 2012-05-06 (Tues, 05 June 2012) $
* $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
*
* $Date: 2012-06-06 (Wed, 06 June 2012) $
* $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
*
* $Date: 2012-05-06 (Fri, 05 June 2012) $
* $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
*
* $Date: 2012-29-07 (Sun, 29 July 2012) $
* $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
* 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
*
* $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
* $version: 1.3.3	- Code tidy prep for minefied version
*
* $Date: 2012-04-10 (wed, 4 Oct 2012) $
* $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
*
* $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
* $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
*
* $Date: 2012-22-10 (Mon, 22 Oct 2012) $
* $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
*					- Fixed bug with IE and eventPreventDefault()
* $Date: 2013-01-12 (Fri, 12 Jan 2013) $
* $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
*					- made the demo site all static local HTML pages so they can be run locally by a developer
*					- added jsDoc comments and added documentation for the plugin	
*					- code tidy
*					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
* $Date: 2013-03-23 (Sat, 23 Mar 2013) $
* $version: 1.6.1	- Added support for ie8 touch events
* $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
*                   - Deprecated the 'click' handler in favour of tap.
*                   - added cancelThreshold property
*                   - added option method to update init options at runtime
* $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
*
* $Date: 2013-04-04 (Thurs, 04 April 2013) $
* $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
*
* $Date: 2013-08-24 (Sat, 24 Aug 2013) $
* $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
*
* $Date: 2014-06-04 (Wed, 04 June 2014) $
* $version 1.6.6 	- Merge of pull requests.
*    				- IE10 touch support 
*    				- Only prevent default event handling on valid swipe
*    				- Separate license/changelog comment
*    				- Detect if the swipe is valid at the end of the touch event.
*    				- Pass fingerdata to event handlers. 
*    				- Add 'hold' gesture 
*    				- Be more tolerant about the tap distance
*    				- Typos and minor fixes
*
* $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
* $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
*
* $Date: 2015-2-2 (Mon, 2 Feb 2015) $
* $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
*					- Fixed issue with swipe and pinch not triggering at the same time
*
* $Date: 2015-9-6 (Tues, 9 June 2015) $
* $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
*					- Added scrolling demo
*					- Added version property to plugin
*
* $Date: 2015-1-10 (Wed, 1 October 2015) $
* $version 1.6.10    - Added PR from beatspace to fix tap events
* $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
*					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances 				
* $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
*/

/**
 * See (http://jquery.com/).
 * @name $
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */
 
/**
 * See (http://jquery.com/)
 * @name fn
 * @class 
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */



(function (factory) {
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {
	"use strict";

	//Constants
	var VERSION = "1.6.12",
		LEFT = "left",
		RIGHT = "right",
		UP = "up",
		DOWN = "down",
		IN = "in",
		OUT = "out",

		NONE = "none",
		AUTO = "auto",
		
		SWIPE = "swipe",
		PINCH = "pinch",
		TAP = "tap",
		DOUBLE_TAP = "doubletap",
		LONG_TAP = "longtap",
		HOLD = "hold",
		
		HORIZONTAL = "horizontal",
		VERTICAL = "vertical",

		ALL_FINGERS = "all",
		
		DOUBLE_TAP_THRESHOLD = 10,

		PHASE_START = "start",
		PHASE_MOVE = "move",
		PHASE_END = "end",
		PHASE_CANCEL = "cancel",

		SUPPORTS_TOUCH = 'ontouchstart' in window,
		
		SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
		
		SUPPORTS_POINTER = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,

		PLUGIN_NS = 'TouchSwipe';



	/**
	* The default configuration, and available options to configure touch swipe with.
	* You can set the default values by updating any of the properties prior to instantiation.
	* @name $.fn.swipe.defaults
	* @namespace
	* @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
	* @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe. 
	* @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
	* @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch. 
	* @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe. 
	* @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release. 
	* @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
	* @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
	* @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
	* @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
	* @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
	* @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
	* @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
	* @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
	* @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
	* @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
	* @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
	* @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not. 
	* @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
	* @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#longTapThreshold}
	* @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link $.fn.swipe.defaults#longTapThreshold}
	* @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically. 
	* @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers. 
	* @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
										<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
										<code>"none"</code> : the page will not scroll when user swipes. <br/>
										<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
										<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
	* @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices. 
	* @property {string} [excludedElements="button, input, select, textarea, a, .noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes all form, input, select, button, anchor and .noSwipe elements. 
	* @property {boolean} [preventDefaultEvents=true] by default default events are cancelled, so the page doesn't move.  You can dissable this so both native events fire as well as your handlers. 
	
	*/
	var defaults = {
		fingers: 1, 		
		threshold: 75, 	
		cancelThreshold:null,	
		pinchThreshold:20,
		maxTimeThreshold: null, 
		fingerReleaseThreshold:250, 
		longTapThreshold:500,
		doubleTapThreshold:200,
		swipe: null, 		
		swipeLeft: null, 	
		swipeRight: null, 	
		swipeUp: null, 		
		swipeDown: null, 	
		swipeStatus: null, 	
		pinchIn:null,		
		pinchOut:null,		
		pinchStatus:null,	
		click:null, //Deprecated since 1.6.2
		tap:null,
		doubleTap:null,
		longTap:null, 		
		hold:null, 
		triggerOnTouchEnd: true, 
		triggerOnTouchLeave:false, 
		allowPageScroll: "auto", 
		fallbackToMouseEvents: true,	
		excludedElements:"label, button, input, select, textarea, a, .noSwipe",
		preventDefaultEvents:true
	};



	/**
	* Applies TouchSwipe behaviour to one or more jQuery objects.
	* The TouchSwipe plugin can be instantiated via this method, or methods within 
	* TouchSwipe can be executed via this method as per jQuery plugin architecture.
	* An existing plugin can have its options changed simply by re calling .swipe(options)
	* @see TouchSwipe
	* @class
	* @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
	* the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
	* If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the 
	* configuration properties defined in the object. See TouchSwipe
	*
	*/
	$.fn.swipe = function (method) {
		var $this = $(this),
			plugin = $this.data(PLUGIN_NS);

		//Check if we are already instantiated and trying to execute a method	
		if (plugin && typeof method === 'string') {
			if (plugin[method]) {
				return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.swipe');
			}
		}

		//Else update existing plugin with new options hash
		else if (plugin && typeof method === 'object') {
			plugin['option'].apply(this, arguments);
		}

		//Else not instantiated and trying to pass init object (or nothing)
		else if (!plugin && (typeof method === 'object' || !method)) {
			return init.apply(this, arguments);
		} 

		return $this;
	};
	
	/**
	 * The version of the plugin
	 * @readonly
	 */
	$.fn.swipe.version = VERSION;



	//Expose our defaults so a user could override the plugin defaults
	$.fn.swipe.defaults = defaults;

	/**
	* The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers. 
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
	* @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
	* @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
	* @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
	*/
	$.fn.swipe.phases = {
		PHASE_START: PHASE_START,
		PHASE_MOVE: PHASE_MOVE,
		PHASE_END: PHASE_END,
		PHASE_CANCEL: PHASE_CANCEL
	};

	/**
	* The direction constants that are passed to the event handlers. 
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
	* @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
	* @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
	* @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
	* @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
	* @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
	*/
	$.fn.swipe.directions = {
		LEFT: LEFT,
		RIGHT: RIGHT,
		UP: UP,
		DOWN: DOWN,
		IN : IN,
		OUT: OUT
	};
	
	/**
	* The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
	* These properties are read only
	* @namespace
	* @readonly
	* @see $.fn.swipe.defaults#allowPageScroll
	* @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
	* @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
	* @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
	* @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
	*/
	$.fn.swipe.pageScroll = {
		NONE: NONE,
		HORIZONTAL: HORIZONTAL,
		VERTICAL: VERTICAL,
		AUTO: AUTO
	};

	/**
	* Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the 
	* options object, as well as the value of the <code>fingers</code> event property.
	* These properties are read only, attempting to change them will not alter the values passed to the event handlers.
	* @namespace
	* @readonly
	* @see $.fn.swipe.defaults#fingers
	* @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
	* @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>2</code>.
	* @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>3</code>.
	* @property {string} FOUR Constant indicating 4 finger are to be detected / were detected. Not all devices support this. Value is <code>4</code>.
	* @property {string} FIVE Constant indicating 5 finger are to be detected / were detected. Not all devices support this. Value is <code>5</code>.
	* @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
	*/
	$.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		FOUR: 4,
		FIVE: 5,
		ALL: ALL_FINGERS
	};

	/**
	* Initialise the plugin for each DOM element matched
	* This creates a new instance of the main TouchSwipe class for each DOM element, and then
	* saves a reference to that instance in the elements data property.
	* @internal
	*/
	function init(options) {
		//Prep and extend the options
		if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
			options.allowPageScroll = NONE;
		}
		
        //Check for deprecated options
		//Ensure that any old click handlers are assigned to the new tap, unless we have a tap
		if(options.click!==undefined && options.tap===undefined) {
		    options.tap = options.click;
		}

		if (!options) {
			options = {};
		}
		
        //pass empty object so we dont modify the defaults
		options = $.extend({}, $.fn.swipe.defaults, options);

		//For each element instantiate the plugin
		return this.each(function () {
			var $this = $(this);

			//Check we havent already initialised the plugin
			var plugin = $this.data(PLUGIN_NS);

			if (!plugin) {
				plugin = new TouchSwipe(this, options);
				$this.data(PLUGIN_NS, plugin);
			}
		});
	}

	/**
	* Main TouchSwipe Plugin Class.
	* Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
	* @private
	* @name TouchSwipe
	* @param {DOMNode} element The HTML DOM object to apply to plugin to
	* @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
	* @see $.fh.swipe.defaults
	* @see $.fh.swipe
    * @class
	*/
	function TouchSwipe(element, options) {

		//take a local/instacne level copy of the options - should make it this.options really...
		var options = $.extend({}, options);

		var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
            START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
            MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
            END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
            LEAVE_EV = useTouchEvents ? null : 'mouseleave', //we manually detect leave on touch devices, so null event here
            CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');



		//touch properties
		var distance = 0,
			direction = null,
			duration = 0,
			startTouchesDistance = 0,
			endTouchesDistance = 0,
			pinchZoom = 1,
			pinchDistance = 0,
			pinchDirection = 0,
			maximumsMap=null;

		
		
		//jQuery wrapped element for this instance
		var $element = $(element);
		
		//Current phase of th touch cycle
		var phase = "start";

		// the current number of fingers being used.
		var fingerCount = 0; 			

		//track mouse points / delta
		var fingerData = {};

		//track times
		var startTime = 0,
			endTime = 0,
			previousTouchEndTime=0,
			fingerCountAtRelease=0,
			doubleTapStartTime=0;

		//Timeouts
		var singleTapTimeout=null,
			holdTimeout=null;
        
		// Add gestures to all swipable areas if supported
		try {
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
		}
		catch (e) {
			$.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
		}

		//
		//Public methods
		//
		
		/**
		* re-enables the swipe plugin with the previous configuration
		* @function
		* @name $.fn.swipe#enable
		* @return {DOMNode} The Dom element that was registered with TouchSwipe 
		* @example $("#element").swipe("enable");
		*/
		this.enable = function () {
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
			return $element;
		};

		/**
		* disables the swipe plugin
		* @function
		* @name $.fn.swipe#disable
		* @return {DOMNode} The Dom element that is now registered with TouchSwipe
	    * @example $("#element").swipe("disable");
		*/
		this.disable = function () {
			removeListeners();
			return $element;
		};

		/**
		* Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
		* @function
		* @name $.fn.swipe#destroy
		* @example $("#element").swipe("destroy");
		*/
		this.destroy = function () {
			removeListeners();
			$element.data(PLUGIN_NS, null);
			$element = null;
		};

		
        /**
         * Allows run time updating of the swipe configuration options.
         * @function
    	 * @name $.fn.swipe#option
    	 * @param {String} property The option property to get or set, or a has of multiple options to set
         * @param {Object} [value] The value to set the property to
		 * @return {Object} If only a property name is passed, then that property value is returned. If nothing is passed the current options hash is returned.
		 * @example $("#element").swipe("option", "threshold"); // return the threshold
         * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
         * @example $("#element").swipe("option", {threshold:100, fingers:3} ); // set multiple properties after init
         * @example $("#element").swipe({threshold:100, fingers:3} ); // set multiple properties after init - the "option" method is optional!
         * @example $("#element").swipe("option"); // Return the current options hash
         * @see $.fn.swipe.defaults
         *
         */
        this.option = function (property, value) {
			
			if(typeof property === 'object') {
        		options = $.extend(options, property);
        	} else if(options[property]!==undefined) {
                if(value===undefined) {
                    return options[property];
                } else {
                    options[property] = value;
                }
            } else if (!property) {
            	return options;   
            } else {
                $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
            }

            return null;
        }

       

		//
		// Private methods
		//
		
		//
		// EVENTS
		//
		/**
		* Event handler for a touch start event.
		* Stops the default click event from triggering and stores where we touched
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchStart(jqEvent) {

			//If we already in a touch event (a finger already in use) then ignore subsequent ones..
			if( getTouchInProgress() )
				return;
			
			//Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
			if( $(jqEvent.target).closest( options.excludedElements, $element ).length>0 ) 
				return;
				
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			
			var ret,
				touches = event.touches,
				evt = touches ? touches[0] : event;

			phase = PHASE_START;

			//If we support touches, get the finger count
			if (touches) {
				// get the total number of fingers touching the screen
				fingerCount = touches.length;
			}
			//Else this is the desktop, so stop the browser from dragging content
			else if(options.preventDefaultEvents !== false) {
				jqEvent.preventDefault(); //call this on jq event so we are cross browser
			}

			//clear vars..
			distance = 0;
			direction = null;
			pinchDirection=null;
			duration = 0;
			startTouchesDistance=0;
			endTouchesDistance=0;
			pinchZoom = 1;
			pinchDistance = 0;
			maximumsMap=createMaximumsData();
			cancelMultiFingerRelease();

			//Create the default finger data
			createFingerData( 0, evt );

			// check the number of fingers is what we are looking for, or we are capturing pinches
			if (!touches || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
				// get the coordinates of the touch
				startTime = getTimeStamp();
				
				if(fingerCount==2) {
					//Keep track of the initial pinch distance, so we can calculate the diff later
					//Store second finger data as start
					createFingerData( 1, touches[1] );
					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
				}
				
				if (options.swipeStatus || options.pinchStatus) {
					ret = triggerHandler(event, phase);
				}
			}
			else {
				//A touch with more or less than the fingers we are looking for, so cancel
				ret = false; 
			}

			//If we have a return value from the users handler, then return and cancel
			if (ret === false) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
				return ret;
			}
			else {
				if (options.hold) {
					holdTimeout = setTimeout($.proxy(function() {
						//Trigger the event
						$element.trigger('hold', [event.target]);
						//Fire the callback
						if(options.hold) {
							ret = options.hold.call($element, event, event.target);
						}
					}, this), options.longTapThreshold );
				}

				setTouchInProgress(true);
			}

            return null;
		};
		
		
		
		/**
		* Event handler for a touch move event. 
		* If we change fingers during move, then cancel the event
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchMove(jqEvent) {
			
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			
			//If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
			if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
				return;

			var ret,
				touches = event.touches,
				evt = touches ? touches[0] : event;
			

			//Update the  finger data 
			var currentFinger = updateFingerData(evt);
			endTime = getTimeStamp();
			
			if (touches) {
				fingerCount = touches.length;
			}

			if (options.hold)
				clearTimeout(holdTimeout);

			phase = PHASE_MOVE;

			//If we have 2 fingers get Touches distance as well
			if(fingerCount==2) {
				
				//Keep track of the initial pinch distance, so we can calculate the diff later
				//We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
				if(startTouchesDistance==0) {
					//Create second finger if this is the first time...
					createFingerData( 1, touches[1] );
					
					startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
				} else {
					//Else just update the second finger
					updateFingerData(touches[1]);
				
					endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
					pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
				}
				
				
				pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
				pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
			}
			
			
			

			if ( (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !touches || hasPinches() ) {
				
				direction = calculateDirection(currentFinger.start, currentFinger.end);
				
				//Check if we need to prevent default event (page scroll / pinch zoom) or not
				validateDefaultEvent(jqEvent, direction);

				//Distance and duration are all off the main finger
				distance = calculateDistance(currentFinger.start, currentFinger.end);
				duration = calculateDuration();

                //Cache the maximum distance we made in this direction
                setMaxDistance(direction, distance);


				if (options.swipeStatus || options.pinchStatus) {
					ret = triggerHandler(event, phase);
				}
				
				
				//If we trigger end events when threshold are met, or trigger events when touch leaves element
				if(!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
					
					var inBounds = true;
					
					//If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
					if(options.triggerOnTouchLeave) {
						var bounds = getbounds( this );
						inBounds = isInBounds( currentFinger.end, bounds );
					}
					
					//Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
					if(!options.triggerOnTouchEnd && inBounds) {
						phase = getNextPhase( PHASE_MOVE );
					} 
					//We end if out of bounds here, so set current phase to END, and check if its modified 
					else if(options.triggerOnTouchLeave && !inBounds ) {
						phase = getNextPhase( PHASE_END );
					}
						
					if(phase==PHASE_CANCEL || phase==PHASE_END)	{
						triggerHandler(event, phase);
					}				
				}
			}
			else {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

			if (ret === false) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}
		}




		/**
		* Event handler for a touch end event. 
		* Calculate the direction and trigger events
		* @inner
		* @param {object} jqEvent The normalised jQuery event object.
		*/
		function touchEnd(jqEvent) {
			//As we use Jquery bind for events, we need to target the original event object
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
			    touches = event.touches;

			//If we are still in a touch with the device wait a fraction and see if the other finger comes up
			//if it does within the threshold, then we treat it as a multi release, not a single release and end the touch / swipe
			if (touches) {
				if(touches.length && !inMultiFingerRelease()) {
					startMultiFingerRelease();
					return true;
				} else if (touches.length && inMultiFingerRelease()) {
					return true;
				}
			}

			//If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
			//This is used to allow 2 fingers to release fractionally after each other, whilst maintainig the event as containg 2 fingers, not 1
			if(inMultiFingerRelease()) {	
				fingerCount=fingerCountAtRelease;
			}	

			//Set end of swipe
			endTime = getTimeStamp();
			
			//Get duration incase move was never fired
			duration = calculateDuration();
			
			//If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
			if(didSwipeBackToCancel() || !validateSwipeDistance()) {
			    phase = PHASE_CANCEL;
                triggerHandler(event, phase);
			} else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd == false && phase === PHASE_MOVE)) {
				//call this on jq event so we are cross browser 
				if(options.preventDefaultEvents !== false) {
					jqEvent.preventDefault(); 
				}
				phase = PHASE_END;
                triggerHandler(event, phase);
			}
			//Special cases - A tap should always fire on touch end regardless,
			//So here we manually trigger the tap end handler by itself
			//We dont run trigger handler as it will re-trigger events that may have fired already
			else if (!options.triggerOnTouchEnd && hasTap()) {
                //Trigger the pinch events...
			    phase = PHASE_END;
			    triggerHandlerForGesture(event, phase, TAP);
			}
			else if (phase === PHASE_MOVE) {
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

			setTouchInProgress(false);

            return null;
		}



		/**
		* Event handler for a touch cancel event. 
		* Clears current vars
		* @inner
		*/
		function touchCancel() {
			// reset the variables back to default values
			fingerCount = 0;
			endTime = 0;
			startTime = 0;
			startTouchesDistance=0;
			endTouchesDistance=0;
			pinchZoom=1;
			
			//If we were in progress of tracking a possible multi touch end, then re set it.
			cancelMultiFingerRelease();
			
			setTouchInProgress(false);
		}
		
		
		/**
		* Event handler for a touch leave event. 
		* This is only triggered on desktops, in touch we work this out manually
		* as the touchleave event is not supported in webkit
		* @inner
		*/
		function touchLeave(jqEvent) {
			//If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			
			//If we have the trigger on leave property set....
			if(options.triggerOnTouchLeave) {
				phase = getNextPhase( PHASE_END );
				triggerHandler(event, phase);
			}
		}
		
		/**
		* Removes all listeners that were associated with the plugin
		* @inner
		*/
		function removeListeners() {
			$element.unbind(START_EV, touchStart);
			$element.unbind(CANCEL_EV, touchCancel);
			$element.unbind(MOVE_EV, touchMove);
			$element.unbind(END_EV, touchEnd);
			
			//we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
			if(LEAVE_EV) { 
				$element.unbind(LEAVE_EV, touchLeave);
			}
			
			setTouchInProgress(false);
		}

		
		/**
		 * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
		 */
		function getNextPhase(currentPhase) {
			
			var nextPhase = currentPhase;
			
			// Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
			var validTime = validateSwipeTime();
			var validDistance = validateSwipeDistance();
			var didCancel = didSwipeBackToCancel();
						
			//If we have exceeded our time, then cancel	
			if(!validTime || didCancel) {
				nextPhase = PHASE_CANCEL;
			}
			//Else if we are moving, and have reached distance then end
			else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) ) {
				nextPhase = PHASE_END;
			} 
			//Else if we have ended by leaving and didn't reach distance, then cancel
			else if (!validDistance && currentPhase==PHASE_END && options.triggerOnTouchLeave) {
				nextPhase = PHASE_CANCEL;
			}
			
			return nextPhase;
		}
		
		
		/**
		* Trigger the relevant event handler
		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		* @param {object} event the original event object
		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
		* @inner
		*/
		function triggerHandler(event, phase) {

			var ret,
				touches = event.touches;
			
			//Swipes and pinches are not mutually exclusive - can happend at same time, so need to trigger 2 events potentially
			if( (didSwipe() && hasSwipes()) || (didPinch() && hasPinches()) ) {
				// SWIPE GESTURES
				if(didSwipe() && hasSwipes()) { //hasSwipes as status needs to fire even if swipe is invalid
					//Trigger the swipe events...
					ret = triggerHandlerForGesture(event, phase, SWIPE);
				}	

				// PINCH GESTURES (if the above didn't cancel)
				if((didPinch() && hasPinches()) && ret!==false) {
					//Trigger the pinch events...
					ret = triggerHandlerForGesture(event, phase, PINCH);
				}
			} 
			else {
			 
				// CLICK / TAP (if the above didn't cancel)
				if(didDoubleTap() && ret!==false) {
					//Trigger the tap events...
					ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
				}
				
				// CLICK / TAP (if the above didn't cancel)
				else if(didLongTap() && ret!==false) {
					//Trigger the tap events...
					ret = triggerHandlerForGesture(event, phase, LONG_TAP);
				}

				// CLICK / TAP (if the above didn't cancel)
				else if(didTap() && ret!==false) {
					//Trigger the tap event..
					ret = triggerHandlerForGesture(event, phase, TAP);
				}
			}
			
			// If we are cancelling the gesture, then manually trigger the reset handler
			if (phase === PHASE_CANCEL) {
				if(hasSwipes() ) {
					ret = triggerHandlerForGesture(event, phase, SWIPE);
				}
			
				if(hasPinches()) {
					ret = triggerHandlerForGesture(event, phase, PINCH);
				}
				touchCancel(event);
			}
			
			// If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
			if(phase === PHASE_END) {
				//If we support touch, then check that all fingers are off before we cancel
				if (touches) {
					if(!touches.length) {
						touchCancel(event);	
					}
				} 
				else {
					touchCancel(event);
				}
			}
					
			return ret;
		}
		
		
		
		/**
		* Trigger the relevant event handler
		* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		* @param {object} event the original event object
		* @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
		* @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
		* @return Boolean False, to indicate that the event should stop propagation, or void.
		* @inner
		*/
		function triggerHandlerForGesture(event, phase, gesture) {	
			
			var ret;
			
			//SWIPES....
			if(gesture==SWIPE) {
				//Trigger status every time..
				
				//Trigger the event...
				$element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData]);
				
				//Fire the callback
				if (options.swipeStatus) {
					ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData);
					//If the status cancels, then dont run the subsequent event handlers..
					if(ret===false) return false;
				}
				
				
				
				
				if (phase == PHASE_END && validateSwipe()) {
					//Fire the catch all event
					$element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData]);
					
					//Fire catch all callback
					if (options.swipe) {
						ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData);
						//If the status cancels, then dont run the subsequent event handlers..
						if(ret===false) return false;
					}
					
					//trigger direction specific event handlers	
					switch (direction) {
						case LEFT:
							//Trigger the event
							$element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeLeft) {
								ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case RIGHT:
							//Trigger the event
					        $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeRight) {
								ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case UP:
							//Trigger the event
					        $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeUp) {
								ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
	
						case DOWN:
							//Trigger the event
					        $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData]);
					
					        //Fire the callback
							if (options.swipeDown) {
								ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData);
							}
							break;
					}
				}
			}
			
			
			//PINCHES....
			if(gesture==PINCH) {
				//Trigger the event
			     $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
					
                //Fire the callback
				if (options.pinchStatus) {
					ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
					//If the status cancels, then dont run the subsequent event handlers..
					if(ret===false) return false;
				}
				
				if(phase==PHASE_END && validatePinch()) {
					
					switch (pinchDirection) {
						case IN:
							//Trigger the event
                            $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
                    
                            //Fire the callback
                            if (options.pinchIn) {
								ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
							}
							break;
						
						case OUT:
							//Trigger the event
                            $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
                    
                            //Fire the callback
                            if (options.pinchOut) {
								ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
							}
							break;	
					}
				}
			}
			


                
	    		
			if(gesture==TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					
    			    
    			    //Cancel any existing double tap
				    clearTimeout(singleTapTimeout);
    			    //Cancel hold timeout
				    clearTimeout(holdTimeout);
				           
					//If we are also looking for doubelTaps, wait incase this is one...
				    if(hasDoubleTap() && !inDoubleTap()) {
				        //Cache the time of this tap
                        doubleTapStartTime = getTimeStamp();
                       
				        //Now wait for the double tap timeout, and trigger this single tap
				        //if its not cancelled by a double tap
				        singleTapTimeout = setTimeout($.proxy(function() {
        			        doubleTapStartTime=null;
        			        //Trigger the event
                			$element.trigger('tap', [event.target]);

                        
                            //Fire the callback
                            if(options.tap) {
                                ret = options.tap.call($element, event, event.target);
                            }
    			        }, this), options.doubleTapThreshold );
    			    	
    			    } else {
                        doubleTapStartTime=null;
                        
                        //Trigger the event
                        $element.trigger('tap', [event.target]);

                        
                        //Fire the callback
                        if(options.tap) {
                            ret = options.tap.call($element, event, event.target);
                        }
	    		    }
	    		}
			}
			
			else if (gesture==DOUBLE_TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					//Cancel any pending singletap 
				    clearTimeout(singleTapTimeout);
				    doubleTapStartTime=null;
				        
                    //Trigger the event
                    $element.trigger('doubletap', [event.target]);
                
                    //Fire the callback
                    if(options.doubleTap) {
                        ret = options.doubleTap.call($element, event, event.target);
                    }
	    		}
			}
			
			else if (gesture==LONG_TAP) {
				if(phase === PHASE_CANCEL || phase === PHASE_END) {
					//Cancel any pending singletap (shouldnt be one)
				    clearTimeout(singleTapTimeout);
				    doubleTapStartTime=null;
				        
                    //Trigger the event
                    $element.trigger('longtap', [event.target]);
                
                    //Fire the callback
                    if(options.longTap) {
                        ret = options.longTap.call($element, event, event.target);
                    }
	    		}
			}				
				
			return ret;
		}



		
		//
		// GESTURE VALIDATION
		//
		
		/**
		* Checks the user has swipe far enough
		* @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
		* If no threshold was set, then we return true.
		* @inner
		*/
		function validateSwipeDistance() {
			var valid = true;
			//If we made it past the min swipe distance..
			if (options.threshold !== null) {
				valid = distance >= options.threshold;
			}
			
            return valid;
		}
		
		/**
		* Checks the user has swiped back to cancel.
		* @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
		* If no cancelThreshold was set, then we return true.
		* @inner
		*/
		function didSwipeBackToCancel() {
            var cancelled = false;
    		if(options.cancelThreshold !== null && direction !==null)  {
    		    cancelled =  (getMaxDistance( direction ) - distance) >= options.cancelThreshold;
			}
			
			return cancelled;
		}

		/**
		* Checks the user has pinched far enough
		* @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
		* If no threshold was set, then we return true.
		* @inner
		*/
		function validatePinchDistance() {
			if (options.pinchThreshold !== null) {
				return pinchDistance >= options.pinchThreshold;
			}
			return true;
		}

		/**
		* Checks that the time taken to swipe meets the minimum / maximum requirements
		* @return Boolean
		* @inner
		*/
		function validateSwipeTime() {
			var result;
			//If no time set, then return true

			if (options.maxTimeThreshold) {
				if (duration >= options.maxTimeThreshold) {
					result = false;
				} else {
					result = true;
				}
			}
			else {
				result = true;
			}

			return result;
		}

	

		/**
		* Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
		* This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
		* @param {object} jqEvent The normalised jQuery representation of the event object.
		* @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function validateDefaultEvent(jqEvent, direction) {

			//If we have no pinches, then do this
			//If we have a pinch, and we we have 2 fingers or more down, then dont allow page scroll.

			//If the option is set, allways allow the event to bubble up (let user handle wiredness)
			if( options.preventDefaultEvents === false) {
				return;
			}

			if (options.allowPageScroll === NONE) {
				jqEvent.preventDefault();
			} else {
				var auto = options.allowPageScroll === AUTO;

				switch (direction) {
					case LEFT:
						if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
							jqEvent.preventDefault();
						}
						break;

					case RIGHT:
						if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
							jqEvent.preventDefault();
						}
						break;

					case UP:
						if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
							jqEvent.preventDefault();
						}
						break;

					case DOWN:
						if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
							jqEvent.preventDefault();
						}
						break;
				}
			}

		}


		// PINCHES
		/**
		 * Returns true of the current pinch meets the thresholds
		 * @return Boolean
		 * @inner
		*/
		function validatePinch() {
		    var hasCorrectFingerCount = validateFingers();
		    var hasEndPoint = validateEndPoint();
			var hasCorrectDistance = validatePinchDistance();
			return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
			
		}
		
		/**
		 * Returns true if any Pinch events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasPinches() {
			//Enure we dont return 0 or null for false values
			return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
		}
		
		/**
		 * Returns true if we are detecting pinches, and have one
		 * @return Boolean
		 * @inner
		 */
		function didPinch() {
			//Enure we dont return 0 or null for false values
			return !!(validatePinch() && hasPinches());
		}




		// SWIPES
		/**
		 * Returns true if the current swipe meets the thresholds
		 * @return Boolean
		 * @inner
		*/
		function validateSwipe() {
			//Check validity of swipe
			var hasValidTime = validateSwipeTime();
			var hasValidDistance = validateSwipeDistance();	
			var hasCorrectFingerCount = validateFingers();
		    var hasEndPoint = validateEndPoint();
		    var didCancel = didSwipeBackToCancel();	
		    
			// if the user swiped more than the minimum length, perform the appropriate action
			// hasValidDistance is null when no distance is set 
			var valid =  !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
			
			return valid;
		}
		
		/**
		 * Returns true if any Swipe events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasSwipes() {
			//Enure we dont return 0 or null for false values
			return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
		}
		
		
		/**
		 * Returns true if we are detecting swipes and have one
		 * @return Boolean
		 * @inner
		*/
		function didSwipe() {
			//Enure we dont return 0 or null for false values
			return !!(validateSwipe() && hasSwipes());
		}

        /**
		 * Returns true if we have matched the number of fingers we are looking for
		 * @return Boolean
		 * @inner
		*/
        function validateFingers() {
            //The number of fingers we want were matched, or on desktop we ignore
    		return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
    	}
        
        /**
		 * Returns true if we have an end point for the swipe
		 * @return Boolean
		 * @inner
		*/
        function validateEndPoint() {
            //We have an end value for the finger
		    return fingerData[0].end.x !== 0;
        }

		// TAP / CLICK
		/**
		 * Returns true if a click / tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.tap) ;
		}
		
		/**
		 * Returns true if a double tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasDoubleTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.doubleTap) ;
		}
		
		/**
		 * Returns true if any long tap events have been registered
		 * @return Boolean
		 * @inner
		*/
		function hasLongTap() {
			//Enure we dont return 0 or null for false values
			return !!(options.longTap) ;
		}
		
		/**
		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
		 * @return Boolean
		 * @inner
		*/
		function validateDoubleTap() {
		    if(doubleTapStartTime==null){
		        return false;
		    }
		    var now = getTimeStamp();
		    return (hasDoubleTap() && ((now-doubleTapStartTime) <= options.doubleTapThreshold));
		}
		
		/**
		 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
		 * @return Boolean
		 * @inner
		*/
		function inDoubleTap() {
		    return validateDoubleTap();
		}
		
		
		/**
		 * Returns true if we have a valid tap
		 * @return Boolean
		 * @inner
		*/
		function validateTap() {
		    return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold));
		}
		
		/**
		 * Returns true if we have a valid long tap
		 * @return Boolean
		 * @inner
		*/
		function validateLongTap() {
		    //slight threshold on moving finger
            return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD)); 
		}
		
		/**
		 * Returns true if we are detecting taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateTap() && hasTap());
		}
		
		
		/**
		 * Returns true if we are detecting double taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didDoubleTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateDoubleTap() && hasDoubleTap());
		}
		
		/**
		 * Returns true if we are detecting long taps and have one
		 * @return Boolean
		 * @inner
		*/
		function didLongTap() {
		    //Enure we dont return 0 or null for false values
			return !!(validateLongTap() && hasLongTap());
		}
		
		
		
		
		// MULTI FINGER TOUCH
		/**
		 * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
		 * @inner
		*/
		function startMultiFingerRelease() {
			previousTouchEndTime = getTimeStamp();
			fingerCountAtRelease = event.touches.length+1;
		}
		
		/**
		 * Cancels the tracking of time between 2 finger releases, and resets counters
		 * @inner
		*/
		function cancelMultiFingerRelease() {
			previousTouchEndTime = 0;
			fingerCountAtRelease = 0;
		}
		
		/**
		 * Checks if we are in the threshold between 2 fingers being released 
		 * @return Boolean
		 * @inner
		*/
		function inMultiFingerRelease() {
			
			var withinThreshold = false;
			
			if(previousTouchEndTime) {	
				var diff = getTimeStamp() - previousTouchEndTime	
				if( diff<=options.fingerReleaseThreshold ) {
					withinThreshold = true;
				}
			}
			
			return withinThreshold;	
		}
		

		/**
		* gets a data flag to indicate that a touch is in progress
		* @return Boolean
		* @inner
		*/
		function getTouchInProgress() {
			//strict equality to ensure only true and false are returned
			return !!($element.data(PLUGIN_NS+'_intouch') === true);
		}
		
		/**
		* Sets a data flag to indicate that a touch is in progress
		* @param {boolean} val The value to set the property to
		* @inner
		*/
		function setTouchInProgress(val) {
			
			//Add or remove event listeners depending on touch status
			if(val===true) {
				$element.bind(MOVE_EV, touchMove);
				$element.bind(END_EV, touchEnd);

				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
				if(LEAVE_EV) { 
					$element.bind(LEAVE_EV, touchLeave);
				}
			} else {

				$element.unbind(MOVE_EV, touchMove, false);
				$element.unbind(END_EV, touchEnd, false);
			
				//we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
				if(LEAVE_EV) { 
					$element.unbind(LEAVE_EV, touchLeave, false);
				}
			}
			
		
			//strict equality to ensure only true and false can update the value
			$element.data(PLUGIN_NS+'_intouch', val === true);
		}
		
		
		/**
		 * Creates the finger data for the touch/finger in the event object.
		 * @param {int} id The id to store the finger data under (usually the order the fingers were pressed)
		 * @param {object} evt The event object containing finger data
		 * @return finger data object
		 * @inner
		*/
		function createFingerData(id, evt) {
			var f = {
				start:{ x: 0, y: 0 },
				end:{ x: 0, y: 0 }
			};
			f.start.x = f.end.x = evt.pageX||evt.clientX;
			f.start.y = f.end.y = evt.pageY||evt.clientY;
			fingerData[id] = f;
			return f;
		}
		
		/**
		 * Updates the finger data for a particular event object
		 * @param {object} evt The event object containing the touch/finger data to upadte
		 * @return a finger data object.
		 * @inner
		*/
		function updateFingerData(evt) {
			var id = evt.identifier!==undefined ? evt.identifier : 0; 
			var f = getFingerData( id );
			
			if (f === null) {
				f = createFingerData(id, evt);
			}

			f.end.x = evt.pageX||evt.clientX;
			f.end.y = evt.pageY||evt.clientY;

			return f;
		}
		
		/**
		 * Returns a finger data object by its event ID.
		 * Each touch event has an identifier property, which is used 
		 * to track repeat touches
		 * @param {int} id The unique id of the finger in the sequence of touch events.
		 * @return a finger data object.
		 * @inner
		*/
		function getFingerData(id) {
			return fingerData[id] || null;
		}

		
		/**
		 * Sets the maximum distance swiped in the given direction. 
		 * If the new value is lower than the current value, the max value is not changed.
		 * @param {string}  direction The direction of the swipe
		 * @param {int}  distance The distance of the swipe
		 * @inner
		*/
		function setMaxDistance(direction, distance) {
    		distance = Math.max(distance, getMaxDistance(direction) );
    		maximumsMap[direction].distance = distance;
		}
        
        /**
		 * gets the maximum distance swiped in the given direction. 
		 * @param {string}  direction The direction of the swipe
		 * @return int  The distance of the swipe
		 * @inner
		*/        
		function getMaxDistance(direction) {
			if (maximumsMap[direction]) return maximumsMap[direction].distance;
			return undefined;
		}
		
		/**
		 * Creats a map of directions to maximum swiped values.
		 * @return Object A dictionary of maximum values, indexed by direction.
		 * @inner
		*/
		function createMaximumsData() {
			var maxData={};
			maxData[LEFT]=createMaximumVO(LEFT);
			maxData[RIGHT]=createMaximumVO(RIGHT);
			maxData[UP]=createMaximumVO(UP);
			maxData[DOWN]=createMaximumVO(DOWN);
			
			return maxData;
		}
		
		/**
		 * Creates a map maximum swiped values for a given swipe direction
		 * @param {string} The direction that these values will be associated with
		 * @return Object Maximum values
		 * @inner
		*/
		function createMaximumVO(dir) {
		    return { 
		        direction:dir, 
		        distance:0
		    }
		}
		
		
		//
		// MATHS / UTILS
		//

		/**
		* Calculate the duration of the swipe
		* @return int
		* @inner
		*/
		function calculateDuration() {
			return endTime - startTime;
		}
		
		/**
		* Calculate the distance between 2 touches (pinch)
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int;
		* @inner
		*/
		function calculateTouchesDistance(startPoint, endPoint) {
			var diffX = Math.abs(startPoint.x - endPoint.x);
			var diffY = Math.abs(startPoint.y - endPoint.y);
				
			return Math.round(Math.sqrt(diffX*diffX+diffY*diffY));
		}
		
		/**
		* Calculate the zoom factor between the start and end distances
		* @param {int} startDistance Distance (between 2 fingers) the user started pinching at
	    * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
	    * @return float The zoom value from 0 to 1.
		* @inner
		*/
		function calculatePinchZoom(startDistance, endDistance) {
			var percent = (endDistance/startDistance) * 1;
			return percent.toFixed(2);
		}
		
		
		/**
		* Returns the pinch direction, either IN or OUT for the given points
		* @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function calculatePinchDirection() {
			if(pinchZoom<1) {
				return OUT;
			}
			else {
				return IN;
			}
		}
		
		
		/**
		* Calculate the length / distance of the swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int
		* @inner
		*/
		function calculateDistance(startPoint, endPoint) {
			return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
		}

		/**
		* Calculate the angle of the swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return int
		* @inner
		*/
		function calculateAngle(startPoint, endPoint) {
			var x = startPoint.x - endPoint.x;
			var y = endPoint.y - startPoint.y;
			var r = Math.atan2(y, x); //radians
			var angle = Math.round(r * 180 / Math.PI); //degrees

			//ensure value is positive
			if (angle < 0) {
				angle = 360 - Math.abs(angle);
			}

			return angle;
		}

		/**
		* Calculate the direction of the swipe
		* This will also call calculateAngle to get the latest angle of swipe
		* @param {point} startPoint A point object containing x and y co-ordinates
	    * @param {point} endPoint A point object containing x and y co-ordinates
	    * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
		* @see $.fn.swipe.directions
		* @inner
		*/
		function calculateDirection(startPoint, endPoint ) {
			var angle = calculateAngle(startPoint, endPoint);

			if ((angle <= 45) && (angle >= 0)) {
				return LEFT;
			} else if ((angle <= 360) && (angle >= 315)) {
				return LEFT;
			} else if ((angle >= 135) && (angle <= 225)) {
				return RIGHT;
			} else if ((angle > 45) && (angle < 135)) {
				return DOWN;
			} else {
				return UP;
			}
		}
		

		/**
		* Returns a MS time stamp of the current time
		* @return int
		* @inner
		*/
		function getTimeStamp() {
			var now = new Date();
			return now.getTime();
		}
		
		
		
		/**
		 * Returns a bounds object with left, right, top and bottom properties for the element specified.
		 * @param {DomNode} The DOM node to get the bounds for.
		 */
		function getbounds( el ) {
			el = $(el);
			var offset = el.offset();
			
			var bounds = {	
					left:offset.left,
					right:offset.left+el.outerWidth(),
					top:offset.top,
					bottom:offset.top+el.outerHeight()
					}
			
			return bounds;	
		}
		
		
		/**
		 * Checks if the point object is in the bounds object.
		 * @param {object} point A point object.
		 * @param {int} point.x The x value of the point.
		 * @param {int} point.y The x value of the point.
		 * @param {object} bounds The bounds object to test
		 * @param {int} bounds.left The leftmost value
		 * @param {int} bounds.right The righttmost value
		 * @param {int} bounds.top The topmost value
		* @param {int} bounds.bottom The bottommost value
		 */
		function isInBounds(point, bounds) {
			return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
		};
	
	
	}
	
	


/**
 * A catch all handler that is triggered for all swipe directions. 
 * @name $.fn.swipe#swipe
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 



/**
 * A handler that is triggered for "left" swipes.
 * @name $.fn.swipe#swipeLeft
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler that is triggered for "right" swipes.
 * @name $.fn.swipe#swipeRight
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A handler that is triggered for "up" swipes.
 * @name $.fn.swipe#swipeUp
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler that is triggered for "down" swipes.
 * @name $.fn.swipe#swipeDown
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
 * This is triggered regardless of swipe thresholds.
 * @name $.fn.swipe#swipeStatus
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
 * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {object} fingerData The coordinates of fingers in event
 */
 
/**
 * A handler triggered for pinch in events.
 * @name $.fn.swipe#pinchIn
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A handler triggered for pinch out events.
 * @name $.fn.swipe#pinchOut
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */ 

/**
 * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
 * @name $.fn.swipe#pinchStatus
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
 * @param {int} distance The distance the user pinched
 * @param {int} duration The duration of the swipe in milliseconds
 * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
 * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
 * @param {object} fingerData The coordinates of fingers in event
 */

/**
 * A click handler triggered when a user simply clicks, rather than swipes on an element.
 * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
 * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
 * Use the <code>tap</code> event instead.
 * @name $.fn.swipe#click
 * @event
 * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead 
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
 /**
 * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
 * @name $.fn.swipe#tap
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
/**
 * A double tap handler triggered when a user double clicks or taps on an element.
 * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property. 
 * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
 * as the script needs to check if its a double tap.
 * @name $.fn.swipe#doubleTap
 * @see  $.fn.swipe.defaults#doubleTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */
 
 /**
 * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
 * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. 
 * @name $.fn.swipe#longTap
 * @see  $.fn.swipe.defaults#longTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */

  /**
 * A hold tap handler triggered as soon as the longTapThreshold is reached
 * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property. 
 * @name $.fn.swipe#hold
 * @see  $.fn.swipe.defaults#longTapThreshold
 * @event
 * @default null
 * @param {EventObject} event The original event object
 * @param {DomObject} target The element clicked on.
 */

}));


// THEMEPUNCH INTERNAL HANDLINGS
if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

// THEMEPUNCH LOGS
if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }

// SANDBOX GREENSOCK
var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}

/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-03
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(window, moduleName) {

		"use strict";
		var _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.0000000001,
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl, hasModule;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							hasModule = (typeof(module) !== "undefined" && module.exports);
							if (!hasModule && typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
							} else if (ns === moduleName && hasModule){ //node
								module.exports = cl;
							}
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			_blankArray = [],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, {type:type, target:t});
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame),
				_lagThreshold = 500,
				_adjustedLag = 33,
				_tickWord = "tick", //helps reduce gc burden
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					var elapsed = _getTime() - _lastUpdate,
						overlap, dispatch;
					if (elapsed > _lagThreshold) {
						_startTime += elapsed - _adjustedLag;
					}
					_lastUpdate += elapsed;
					_self.time = (_lastUpdate - _startTime) / 1000;
					overlap = _self.time - _nextTime;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent(_tickWord);
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.lagSmoothing = function(threshold, adjustedLag) {
				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function() {
				if (_id !== null) {
					_self.sleep();
				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF && _self.frame < 5) {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = (vars.immediateRender === true);
				this.data = vars.data;
				this._reversed = (vars.reversed === true);

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000) {
					_ticker.wake();
				}
				setTimeout(_checkTimeout, 2000);
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

		p._callback = function(type) {
			var v = this.vars;
			v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			var duration = this.duration();
			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.endTime = function(includeRepeats) {
			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				var pauseTime = this._pauseTime,
					t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			return this._uncache(false);
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
				raw, elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};

/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice(targ));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(-this._delay);
				}
			}, true),
			_isSelector = function(v) {
				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;

		TweenLite.version = "1.18.0";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};

		TweenLite.selector = window.$ || window.jQuery || function(e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			return (typeof(document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
		};

		var _lazyTweens = [],
			_lazyLookup = {},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
			_setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = !pt.blob ? pt.c * v + pt.s : v ? this.join("") : this.start;
					if (pt.r) {
						val = Math.round(val);
					} else if (val < min) if (val > -min) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (!pt.f) {
						pt.t[pt.p] = val;
					} else if (pt.fp) {
						pt.t[pt.p](pt.fp, val);
					} else {
						pt.t[pt.p](val);
					}
					pt = pt._next;
				}
			},
			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
			_blobDif = function(start, end, filter, pt) {
				var a = [start, end],
					charIndex = 0,
					s = "",
					color = 0,
					startNums, endNums, num, i, l, nonNumbers, currentNum;
				a.start = start;
				if (filter) {
					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
					start = a[0];
					end = a[1];
				}
				a.length = 0;
				startNums = start.match(_numbersExp) || [];
				endNums = end.match(_numbersExp) || [];
				if (pt) {
					pt._next = null;
					pt.blob = 1;
					a._firstPT = pt; //apply last in the linked list (which means inserting it first)
				}
				l = endNums.length;
				for (i = 0; i < l; i++) {
					currentNum = endNums[i];
					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
					charIndex += nonNumbers.length;
					if (color) { //sense rgba() values and round them.
						color = (color + 1) % 5;
					} else if (nonNumbers.substr(-5) === "rgba(") {
						color = 1;
					}
					if (currentNum === startNums[i] || startNums.length <= i) {
						s += currentNum;
					} else {
						if (s) {
							a.push(s);
							s = "";
						}
						num = parseFloat(startNums[i]);
						a.push(num);
						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, r:(color && color < 4)};
						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
					}
					charIndex += currentNum.length;
				}
				s += end.substr(charIndex);
				if (s) {
					a.push(s);
				}
				a.setRatio = _setRatio;
				return a;
			},
			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
			_addPropTween = function(target, prop, start, end, overwriteProp, round, funcParam, stringFilter) {
				var s = (start === "get") ? target[prop] : start,
					type = typeof(target[prop]),
					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, r:round, pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
					blob, getterName;
				if (type !== "number") {
					if (type === "function" && start === "get") {
						getterName = ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3));
						pt.s = s = funcParam ? target[getterName](funcParam) : target[getterName]();
					}
					if (typeof(s) === "string" && (funcParam || isNaN(s))) {
						//a blob (string that has multiple numbers in it)
						pt.fp = funcParam;
						blob = _blobDif(s, end, stringFilter || TweenLite.defaultStringFilter, pt);
						pt = {t:blob, p:"setRatio", s:0, c:1, f:2, pg:0, n:overwriteProp || prop, pr:0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
					} else if (!isRelative) {
						pt.c = (parseFloat(end) - parseFloat(s)) || 0;
					}
				}
				if (pt.c) { //only add it to the linked list if there's a change.
					if ((pt._next = this._firstPT)) {
						pt._next._prev = pt;
					}
					this._firstPT = pt;
					return pt;
				}
			},
			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = _internals.tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
			_nextGCFrame = 30,
			_lazyRender = _internals.lazyRender = function() {
				var i = _lazyTweens.length,
					tween;
				_lazyLookup = {};
				while (--i > -1) {
					tween = _lazyTweens[i];
					if (tween && tween._lazy !== false) {
						tween.render(tween._lazy[0], tween._lazy[1], true);
						tween._lazy = false;
					}
				}
				_lazyTweens.length = 0;
			};

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

		Animation._updateRoot = TweenLite.render = function() {
				var i, a, p;
				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
					_lazyRender();
				}
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (_lazyTweens.length) {
					_lazyRender();
				}
				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},
			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
				var func = overwrittenTween.vars.onOverwrite, r1, r2;
				if (func) {
					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				func = TweenLite.onOverwrite;
				if (func) {
					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				return (r1 !== false && r2 !== false);
			},
			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) {
								if (curTween._kill(null, target, tween)) {
									changed = true;
								}
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					if (mode === 2) if (curTween._kill(props, target, tween)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
							continue;
						}
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},
			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = !!v.immediateRender,
				ease = v.ease,
				i, initPlugins, pt, p, startVars;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					this._startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = (immediate && v.lazy !== false);
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				this._startAt = TweenLite.to(this.target, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = (immediate && v.lazy !== false);
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				i = this._targets.length;
				while (--i > -1) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null)) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}

			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}

			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}

				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter);
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps);
			}
			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var prevTime = this._time,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration) {
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed ) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (time === 0 || prevRawPrevTime < 0 || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;

				if (this._easeType) {
					var r = time / duration, type = this._easeType, pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}
			}

			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
					this._time = this._totalTime = prevTime;
					this._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				this._lazy = false;
			}
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, suppressEvents, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete) {
					this._callback("onUpdate");
				}
			}
			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					this._startAt.render(time, suppressEvents, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

		p._kill = function(vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}

					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = (this._targets) ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(-this._delay);
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a;
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.18.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._roundProps = function(lookup, value) {
			var pt = this._firstPT;
			while (pt) {
				if (lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ])) { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					pt.r = value;
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_roundProps", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: com.greensock." + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

})((typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window, "TweenLite");

/*!
 * VERSION: 1.18.0
 * DATE: 2015-08-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {

		var TimelineLite = function(vars) {
				SimpleTimeline.call(this, vars);
				this._labels = {};
				this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
				this.smoothChildTiming = (this.vars.smoothChildTiming === true);
				this._sortChildren = true;
				this._onUpdate = this.vars.onUpdate;
				var v = this.vars,
					val, p;
				for (p in v) {
					val = v[p];
					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
						v[p] = this._swapSelfInParams(val);
					}
				}
				if (_isArray(v.tweens)) {
					this.add(v.tweens, 0, v.align, v.stagger);
				}
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = TweenLite._internals,
			_internals = TimelineLite._internals = {},
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _gsScope._gsDefine.globals,
			_copy = function(vars) {
				var copy = {}, p;
				for (p in vars) {
					copy[p] = vars[p];
				}
				return copy;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val.call(targets[i], i) : val[i % val.length];
				}
				delete vars.cycle;
			},
			_pauseCallback = _internals.pauseCallback = function() {},
			_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			p = TimelineLite.prototype = new SimpleTimeline();

		TimelineLite.version = "1.18.0";
		p.constructor = TimelineLite;
		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

		/* might use later...
		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
		function localToGlobal(time, animation) {
			while (animation) {
				time = (time / animation._timeScale) + animation._startTime;
				animation = animation.timeline;
			}
			return time;
		}

		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
		function globalToLocal(time, animation) {
			var scale = 1;
			time -= localToGlobal(0, animation);
			while (animation) {
				scale *= animation._timeScale;
				animation = animation.timeline;
			}
			return time * scale;
		}
		*/

		p.to = function(target, duration, vars, position) {
			var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
		};

		p.from = function(target, duration, vars, position) {
			return this.add( ((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
		};

		p.fromTo = function(target, duration, fromVars, toVars, position) {
			var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
		};

		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
				cycle = vars.cycle,
				copy, i;
			if (typeof(targets) === "string") {
				targets = TweenLite.selector(targets) || targets;
			}
			targets = targets || [];
			if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
				targets = _slice(targets);
			}
			stagger = stagger || 0;
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			for (i = 0; i < targets.length; i++) {
				copy = _copy(vars);
				if (copy.startAt) {
					copy.startAt = _copy(copy.startAt);
					if (copy.startAt.cycle) {
						_applyCycle(copy.startAt, targets, i);
					}
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
				}
				tl.to(targets[i], duration, copy, i * stagger);
			}
			return this.add(tl, position);
		};

		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.immediateRender = (vars.immediateRender != false);
			vars.runBackwards = true;
			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.call = function(callback, params, scope, position) {
			return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
		};

		p.set = function(target, vars, position) {
			position = this._parseTimeOrLabel(position, 0, true);
			if (vars.immediateRender == null) {
				vars.immediateRender = (position === this._time && !this._paused);
			}
			return this.add( new TweenLite(target, 0, vars), position);
		};

		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
			vars = vars || {};
			if (vars.smoothChildTiming == null) {
				vars.smoothChildTiming = true;
			}
			var tl = new TimelineLite(vars),
				root = tl._timeline,
				tween, next;
			if (ignoreDelayedCalls == null) {
				ignoreDelayedCalls = true;
			}
			root._remove(tl, true);
			tl._startTime = 0;
			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
			tween = root._first;
			while (tween) {
				next = tween._next;
				if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
					tl.add(tween, tween._startTime - tween._delay);
				}
				tween = next;
			}
			root.add(tl, 0);
			return tl;
		};

		p.add = function(value, position, align, stagger) {
			var curTime, l, i, child, tl, beforeRawTime;
			if (typeof(position) !== "number") {
				position = this._parseTimeOrLabel(position, 0, true, value);
			}
			if (!(value instanceof Animation)) {
				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
					align = align || "normal";
					stagger = stagger || 0;
					curTime = position;
					l = value.length;
					for (i = 0; i < l; i++) {
						if (_isArray(child = value[i])) {
							child = new TimelineLite({tweens:child});
						}
						this.add(child, curTime);
						if (typeof(child) !== "string" && typeof(child) !== "function") {
							if (align === "sequence") {
								curTime = child._startTime + (child.totalDuration() / child._timeScale);
							} else if (align === "start") {
								child._startTime -= child.delay();
							}
						}
						curTime += stagger;
					}
					return this._uncache(true);
				} else if (typeof(value) === "string") {
					return this.addLabel(value, position);
				} else if (typeof(value) === "function") {
					value = TweenLite.delayedCall(0, value);
				} else {
					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
				}
			}

			SimpleTimeline.prototype.add.call(this, value, position);

			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
				//in case any of the ancestors had completed but should now be enabled...
				tl = this;
				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
				while (tl._timeline) {
					if (beforeRawTime && tl._timeline.smoothChildTiming) {
						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
					} else if (tl._gc) {
						tl._enabled(true, false);
					}
					tl = tl._timeline;
				}
			}

			return this;
		};

		p.remove = function(value) {
			if (value instanceof Animation) {
				this._remove(value, false);
				var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
				value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
				return this;
			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
				var i = value.length;
				while (--i > -1) {
					this.remove(value[i]);
				}
				return this;
			} else if (typeof(value) === "string") {
				return this.removeLabel(value);
			}
			return this.kill(null, value);
		};

		p._remove = function(tween, skipDisable) {
			SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
			var last = this._last;
			if (!last) {
				this._time = this._totalTime = this._duration = this._totalDuration = 0;
			} else if (this._time > last._startTime + last._totalDuration / last._timeScale) {
				this._time = this.duration();
				this._totalTime = this._totalDuration;
			}
			return this;
		};

		p.append = function(value, offsetOrLabel) {
			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
		};

		p.insert = p.insertMultiple = function(value, position, align, stagger) {
			return this.add(value, position || 0, align, stagger);
		};

		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
		};

		p.addLabel = function(label, position) {
			this._labels[label] = this._parseTimeOrLabel(position);
			return this;
		};

		p.addPause = function(position, callback, params, scope) {
			var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
			t.vars.onComplete = t.vars.onReverseComplete = callback;
			t.data = "isPause";
			this._hasPause = true;
			return this.add(t, position);
		};

		p.removeLabel = function(label) {
			delete this._labels[label];
			return this;
		};

		p.getLabelTime = function(label) {
			return (this._labels[label] != null) ? this._labels[label] : -1;
		};

		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
			var i;
			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
			if (ignore instanceof Animation && ignore.timeline === this) {
				this.remove(ignore);
			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
				i = ignore.length;
				while (--i > -1) {
					if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
						this.remove(ignore[i]);
					}
				}
			}
			if (typeof(offsetOrLabel) === "string") {
				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - this.duration() : 0, appendIfAbsent);
			}
			offsetOrLabel = offsetOrLabel || 0;
			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
				i = timeOrLabel.indexOf("=");
				if (i === -1) {
					if (this._labels[timeOrLabel] == null) {
						return appendIfAbsent ? (this._labels[timeOrLabel] = this.duration() + offsetOrLabel) : offsetOrLabel;
					}
					return this._labels[timeOrLabel] + offsetOrLabel;
				}
				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : this.duration();
			} else if (timeOrLabel == null) {
				timeOrLabel = this.duration();
			}
			return Number(timeOrLabel) + offsetOrLabel;
		};

		p.seek = function(position, suppressEvents) {
			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
		};

		p.stop = function() {
			return this.paused(true);
		};

		p.gotoAndPlay = function(position, suppressEvents) {
			return this.play(position, suppressEvents);
		};

		p.gotoAndStop = function(position, suppressEvents) {
			return this.pause(position, suppressEvents);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevTime = this._time,
				prevStart = this._startTime,
				prevTimeScale = this._timeScale,
				prevPaused = this._paused,
				tween, isComplete, next, callback, internalForce, pauseTween;
			if (time >= totalDur) {
				this._totalTime = this._time = totalDur;
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if (time === 0 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
						internalForce = true;
						if (this._rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}

			} else {

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
					if (time >= prevTime) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
					}
				}

				this._totalTime = this._time = this._rawPrevTime = time;
			}
			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0) if (!suppressEvents) {
				this._callback("onStart");
			}

			if (this._time >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
						break;
					} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}

			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};

		p._hasPausedChild = function() {
			var tween = this._first;
			while (tween) {
				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
					return true;
				}
				tween = tween._next;
			}
			return false;
		};

		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
			var a = [],
				tween = this._first,
				cnt = 0;
			while (tween) {
				if (tween._startTime < ignoreBeforeTime) {
					//do nothing
				} else if (tween instanceof TweenLite) {
					if (tweens !== false) {
						a[cnt++] = tween;
					}
				} else {
					if (timelines !== false) {
						a[cnt++] = tween;
					}
					if (nested !== false) {
						a = a.concat(tween.getChildren(true, tweens, timelines));
						cnt = a.length;
					}
				}
				tween = tween._next;
			}
			return a;
		};

		p.getTweensOf = function(target, nested) {
			var disabled = this._gc,
				a = [],
				cnt = 0,
				tweens, i;
			if (disabled) {
				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
			}
			tweens = TweenLite.getTweensOf(target);
			i = tweens.length;
			while (--i > -1) {
				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
					a[cnt++] = tweens[i];
				}
			}
			if (disabled) {
				this._enabled(false, true);
			}
			return a;
		};

		p.recent = function() {
			return this._recent;
		};

		p._contains = function(tween) {
			var tl = tween.timeline;
			while (tl) {
				if (tl === this) {
					return true;
				}
				tl = tl.timeline;
			}
			return false;
		};

		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || 0;
			var tween = this._first,
				labels = this._labels,
				p;
			while (tween) {
				if (tween._startTime >= ignoreBeforeTime) {
					tween._startTime += amount;
				}
				tween = tween._next;
			}
			if (adjustLabels) {
				for (p in labels) {
					if (labels[p] >= ignoreBeforeTime) {
						labels[p] += amount;
					}
				}
			}
			return this._uncache(true);
		};

		p._kill = function(vars, target) {
			if (!vars && !target) {
				return this._enabled(false, false);
			}
			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
				i = tweens.length,
				changed = false;
			while (--i > -1) {
				if (tweens[i]._kill(vars, target)) {
					changed = true;
				}
			}
			return changed;
		};

		p.clear = function(labels) {
			var tweens = this.getChildren(false, true, true),
				i = tweens.length;
			this._time = this._totalTime = 0;
			while (--i > -1) {
				tweens[i]._enabled(false, false);
			}
			if (labels !== false) {
				this._labels = {};
			}
			return this._uncache(true);
		};

		p.invalidate = function() {
			var tween = this._first;
			while (tween) {
				tween.invalidate();
				tween = tween._next;
			}
			return Animation.prototype.invalidate.call(this);;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (enabled === this._gc) {
				var tween = this._first;
				while (tween) {
					tween._enabled(enabled, true);
					tween = tween._next;
				}
			}
			return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			this._forcingPlayhead = true;
			var val = Animation.prototype.totalTime.apply(this, arguments);
			this._forcingPlayhead = false;
			return val;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					this.totalDuration(); //just triggers recalculation
				}
				return this._duration;
			}
			if (this.duration() !== 0 && value !== 0) {
				this.timeScale(this._duration / value);
			}
			return this;
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					var max = 0,
						tween = this._last,
						prevStart = 999999999999,
						prev, end;
					while (tween) {
						prev = tween._prev; //record it here in case the tween changes position in the sequence...
						if (tween._dirty) {
							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
						}
						if (tween._startTime > prevStart && this._sortChildren && !tween._paused) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
							this.add(tween, tween._startTime - tween._delay);
						} else {
							prevStart = tween._startTime;
						}
						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
							max -= tween._startTime;
							if (this._timeline.smoothChildTiming) {
								this._startTime += tween._startTime / this._timeScale;
							}
							this.shiftChildren(-tween._startTime, false, -9999999999);
							prevStart = 0;
						}
						end = tween._startTime + (tween._totalDuration / tween._timeScale);
						if (end > max) {
							max = end;
						}
						tween = prev;
					}
					this._duration = this._totalDuration = max;
					this._dirty = false;
				}
				return this._totalDuration;
			}
			if (this.totalDuration() !== 0) if (value !== 0) {
				this.timeScale(this._totalDuration / value);
			}
			return this;
		};

		p.paused = function(value) {
			if (!value) { //if there's a pause directly at the spot from where we're unpausing, skip it.
				var tween = this._first,
					time = this._time;
				while (tween) {
					if (tween._startTime === time && tween.data === "isPause") {
						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
					}
					tween = tween._next;
				}
			}
			return Animation.prototype.paused.apply(this, arguments);
		};

		p.usesFrames = function() {
			var tl = this._timeline;
			while (tl._timeline) {
				tl = tl._timeline;
			}
			return (tl === Animation._rootFramesTimeline);
		};

		p.rawTime = function() {
			return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
		};

		return TimelineLite;

	}, true);


}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(define) === "function" && define.amd) { //AMD
		define(["TweenLite"], getGlobal);
	} else if (typeof(module) !== "undefined" && module.exports) { //node
		require("./TweenLite.js"); //dependency
		module.exports = getGlobal();
	}
}("TimelineLite"));

/*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
		
		var w = (_gsScope.GreenSockGlobals || _gsScope),
			gs = w.com.greensock,
			_2PI = Math.PI * 2,
			_HALF_PI = Math.PI / 2,
			_class = gs._class,
			_create = function(n, f) {
				var C = _class("easing." + n, function(){}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_easeReg = Ease.register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing."+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			EasePoint = function(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},

			//Back
			_createBack = function(n, f) {
				var C = _class("easing." + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true), 
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			},

			Back = _wrap("Back",
				_createBack("BackOut", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack("BackIn", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack("BackInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			),


			//SlowMo
			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
				power = (power || power === 0) ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = (linearRatio !== 1) ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = (yoyoMode === true);
			}, true),
			p = SlowMo.prototype = new Ease(),
			SteppedEase, RoughEase, _createElastic;
			
		p.constructor = SlowMo;
		p.getRatio = function(p) {
			var r = p + (0.5 - p) * this._p;
			if (p < this._p1) {
				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
			} else if (p > this._p3) {
				return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p);
			}
			return this._calcEnd ? 1 : r;
		};
		SlowMo.ease = new SlowMo(0.7, 0.7);
		
		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
			return new SlowMo(linearRatio, power, yoyoMode);
		};


		//SteppedEase
		SteppedEase = _class("easing.SteppedEase", function(steps) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + 1;
			}, true);
		p = SteppedEase.prototype = new Ease();	
		p.constructor = SteppedEase;
		p.getRatio = function(p) {
			if (p < 0) {
				p = 0;
			} else if (p >= 1) {
				p = 0.999999999;
			}
			return ((this._p2 * p) >> 0) * this._p1;
		};
		p.config = SteppedEase.config = function(steps) {
			return new SteppedEase(steps);
		};


		//RoughEase
		RoughEase = _class("easing.RoughEase", function(vars) {
			vars = vars || {};
			var taper = vars.taper || "none",
				a = [],
				cnt = 0,
				points = (vars.points || 20) | 0,
				i = points,
				randomize = (vars.randomize !== false),
				clamp = (vars.clamp === true),
				template = (vars.template instanceof Ease) ? vars.template : null,
				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
				x, y, bump, invX, obj, pnt;
			while (--i > -1) {
				x = randomize ? Math.random() : (1 / points) * i;
				y = template ? template.getRatio(x) : x;
				if (taper === "none") {
					bump = strength;
				} else if (taper === "out") {
					invX = 1 - x;
					bump = invX * invX * strength;
				} else if (taper === "in") {
					bump = x * x * strength;
				} else if (x < 0.5) {  //"both" (start)
					invX = x * 2;
					bump = invX * invX * 0.5 * strength;
				} else {				//"both" (end)
					invX = (1 - x) * 2;
					bump = invX * invX * 0.5 * strength;
				}
				if (randomize) {
					y += (Math.random() * bump) - (bump * 0.5);
				} else if (i % 2) {
					y += bump * 0.5;
				} else {
					y -= bump * 0.5;
				}
				if (clamp) {
					if (y > 1) {
						y = 1;
					} else if (y < 0) {
						y = 0;
					}
				}
				a[cnt++] = {x:x, y:y};
			}
			a.sort(function(a, b) {
				return a.x - b.x;
			});

			pnt = new EasePoint(1, 1, null);
			i = points;
			while (--i > -1) {
				obj = a[i];
				pnt = new EasePoint(obj.x, obj.y, pnt);
			}

			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
		}, true);
		p = RoughEase.prototype = new Ease();
		p.constructor = RoughEase;
		p.getRatio = function(p) {
			var pnt = this._prev;
			if (p > pnt.t) {
				while (pnt.next && p >= pnt.t) {
					pnt = pnt.next;
				}
				pnt = pnt.prev;
			} else {
				while (pnt.prev && p <= pnt.t) {
					pnt = pnt.prev;
				}
			}
			this._prev = pnt;
			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
		};
		p.config = function(vars) {
			return new RoughEase(vars);
		};
		RoughEase.ease = new RoughEase();


		//Bounce
		_wrap("Bounce",
			_create("BounceOut", function(p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}),
			_create("BounceIn", function(p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - (7.5625 * p * p);
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}),
			_create("BounceInOut", function(p) {
				var invert = (p < 0.5);
				if (invert) {
					p = 1 - (p * 2);
				} else {
					p = (p * 2) - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			})
		);


		//CIRC
		_wrap("Circ",
			_create("CircOut", function(p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}),
			_create("CircIn", function(p) {
				return -(Math.sqrt(1 - (p * p)) - 1);
			}),
			_create("CircInOut", function(p) {
				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			})
		);


		//Elastic
		_createElastic = function(n, f, def) {
			var C = _class("easing." + n, function(amplitude, period) {
					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					this._p2 = _2PI / this._p2; //precalculate to optimize
				}, true),
				p = C.prototype = new Ease();
			p.constructor = C;
			p.getRatio = f;
			p.config = function(amplitude, period) {
				return new C(amplitude, period);
			};
			return C;
		};
		_wrap("Elastic",
			_createElastic("ElasticOut", function(p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
			}, 0.3),
			_createElastic("ElasticIn", function(p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
			}, 0.3),
			_createElastic("ElasticInOut", function(p) {
				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
			}, 0.45)
		);


		//Expo
		_wrap("Expo",
			_create("ExpoOut", function(p) {
				return 1 - Math.pow(2, -10 * p);
			}),
			_create("ExpoIn", function(p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}),
			_create("ExpoInOut", function(p) {
				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			})
		);


		//Sine
		_wrap("Sine",
			_create("SineOut", function(p) {
				return Math.sin(p * _HALF_PI);
			}),
			_create("SineIn", function(p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}),
			_create("SineInOut", function(p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			})
		);

		_class("easing.EaseLookup", {
				find:function(s) {
					return Ease.map[s];
				}
			}, true);

		//register the non-standard eases
		_easeReg(w.SlowMo, "SlowMo", "ease,");
		_easeReg(RoughEase, "RoughEase", "ease,");
		_easeReg(SteppedEase, "SteppedEase", "ease,");
		
		return Back;
		
	}, true);

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }


/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function(TweenPlugin, TweenLite) {

		/** @constructor **/
		var CSSPlugin = function() {
				TweenPlugin.call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_globals = _gsScope._gsDefine.globals,
			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			p = CSSPlugin.prototype = new TweenPlugin("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "1.18.0";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		CSSPlugin.defaultSmoothOrigin = true;
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


		var _numExp = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_opacityExp = /opacity *= *([^)]*)/i,
			_opacityValExp = /opacity:([^;]*)/i,
			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			_rgbhslExp = /^(rgb|hsl)/,
			_capsExp = /([A-Z])/g,
			_camelExp = /-([a-z])/gi,
			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function(s, g) { return g.toUpperCase(); },
			_horizExp = /(?:Left|Right|Width)/i,
			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_forcePT = {},
			_doc = document,
			_createElement = function(type) {
				return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
			},
			_tempDiv = _createElement("div"),
			_tempImg = _createElement("img"),
			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = navigator.userAgent,
			_autoRound,
			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

			_isSafari,
			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
					a = _createElement("a");
				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i+8, 1)) > 3));
				_isSafariLT6 = (_isSafari && (Number(_agent.substr(_agent.indexOf("Version/")+8, 1)) < 6));
				_isFirefox = (_agent.indexOf("Firefox") !== -1);
				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
					_ieVers = parseFloat( RegExp.$1 );
				}
				if (!a) {
					return false;
				}
				a.style.cssText = "top:1px;opacity:.55;";
				return /^0.55/.test(a.style.opacity);
			}()),
			_getIEOpacity = function(v) {
				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
			},
			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (window.console) {
					console.log(s);
				}
			},

			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function(p, e) {
				e = e || _tempDiv;
				var s = e.style,
					a, i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O","Moz","ms","Ms","Webkit"];
				i = 5;
				while (--i > -1 && s[a[i]+p] === undefined) { }
				if (i >= 0) {
					_prefix = (i === 3) ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},

			_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},

			/**
			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
			 *
			 * @param {!Object} t Target element whose style property you want to query
			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
			 * @return {?string} The current property value
			 */
			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t))) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
			},

			/**
			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
			 * @param {!Object} t Target element
			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
			 * @param {!number} v Value
			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
			 * @return {number} value in pixels
			 */
			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || !sfx) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					pix, cache, time;
				if (neg) {
					v = -v;
				}
				if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
						node = t.parentNode || _doc.body;
						cache = node._gsCache;
						time = TweenLite.ticker.frame;
						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},

			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function(t, cs) {
				var s = {},
					i, tr, p;
				if ((cs = cs || _getComputedStyle(t, null))) {
					if ((i = cs.length)) {
						while (--i > -1) {
							p = cs[i];
							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
							}
						}
					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[i] = cs[i];
							}
						}
					}
				} else if ((cs = t.currentStyle || t.style)) {
					for (i in cs) {
						if (typeof(i) === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},

			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function(t, s1, s2, vars, forceLookup) {
				var difs = {},
					style = t.style,
					val, p, mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) { //copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return {difs:difs, firstMPT:mpt};
			},
			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

			/**
			 * @private Gets the width or height of an element
			 * @param {!Object} t Target element
			 * @param {!string} p Property name ("width" or "height")
			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
			 * @return {number} Dimension (in pixels)
			 */
			_getDimension = function(t, p, cs) {
				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
					a = _dimensions[p],
					i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
				}
				return v;
			},

			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function(v, recObj) {
				if (v === "contain" || v === "auto" || v === "auto auto") {
					return v + " ";
				}
				if (v == null || v === "") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					v = "0 0";
				}
				var a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1];
				if (y == null) {
					y = (x === "center") ? "50%" : "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
				if (recObj) {
					recObj.oxp = (x.indexOf("%") !== -1);
					recObj.oyp = (y.indexOf("%") !== -1);
					recObj.oxr = (x.charAt(1) === "=");
					recObj.oyr = (y.charAt(1) === "=");
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
					recObj.v = v;
				}
				return recObj || v;
			},

			/**
			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
			 * @param {(number|string)} e End value which is typically a string, but could be a number
			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
			 */
			_parseChange = function(e, b) {
				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b);
			},

			/**
			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @return {number} Parsed value
			 */
			_parseVal = function(v, d) {
				return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v);
			},

			/**
			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
			 * @return {number} parsed angle in radians
			 */
			_parseAngle = function(v, d, p, directionalEnd) {
				var min = 0.000001,
					cap, split, dif, result, isRelative;
				if (v == null) {
					result = d;
				} else if (typeof(v) === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					isRelative = (v.charAt(1) === "=");
					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},

			_colorLookup = {aqua:[0,255,255],
				lime:[0,255,0],
				silver:[192,192,192],
				black:[0,0,0],
				maroon:[128,0,0],
				teal:[0,128,128],
				blue:[0,0,255],
				navy:[0,0,128],
				white:[255,255,255],
				fuchsia:[255,0,255],
				olive:[128,128,0],
				yellow:[255,255,0],
				orange:[255,165,0],
				gray:[128,128,128],
				purple:[128,0,128],
				green:[0,128,0],
				red:[255,0,0],
				pink:[255,192,203],
				cyan:[0,255,255],
				transparent:[255,255,255,0]},

			_hue = function(h, m1, m2) {
				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
			},

			/**
			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
			 */
			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
				var a, r, g, b, h, s, l, max, min, d, wasHSL;
				if (!v) {
					a = _colorLookup.black;
				} else if (typeof(v) === "number") {
					a = [v >> 16, (v >> 8) & 255, v & 255];
				} else {
					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						a = _colorLookup[v];
					} else if (v.charAt(0) === "#") {
						if (v.length === 4) { //for shorthand like #9F0
							r = v.charAt(1);
							g = v.charAt(2);
							b = v.charAt(3);
							v = "#" + r + r + g + g + b + b;
						}
						v = parseInt(v.substr(1), 16);
						a = [v >> 16, (v >> 8) & 255, v & 255];
					} else if (v.substr(0, 3) === "hsl") {
						a = wasHSL = v.match(_numExp);
						if (!toHSL) {
							h = (Number(a[0]) % 360) / 360;
							s = Number(a[1]) / 100;
							l = Number(a[2]) / 100;
							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
							r = l * 2 - g;
							if (a.length > 3) {
								a[3] = Number(v[3]);
							}
							a[0] = _hue(h + 1 / 3, r, g);
							a[1] = _hue(h, r, g);
							a[2] = _hue(h - 1 / 3, r, g);
						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
							return v.match(_relNumExp);
						}
					} else {
						a = v.match(_numExp) || _colorLookup.transparent;
					}
					a[0] = Number(a[0]);
					a[1] = Number(a[1]);
					a[2] = Number(a[2]);
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
				}
				if (toHSL && !wasHSL) {
					r = a[0] / 255;
					g = a[1] / 255;
					b = a[2] / 255;
					max = Math.max(r, g, b);
					min = Math.min(r, g, b);
					l = (max + min) / 2;
					if (max === min) {
						h = s = 0;
					} else {
						d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
						h *= 60;
					}
					a[0] = (h + 0.5) | 0;
					a[1] = (s * 100 + 0.5) | 0;
					a[2] = (l * 100 + 0.5) | 0;
				}
				return a;
			},
			_formatColors = function(s, toHSL) {
				var colors = s.match(_colorExp) || [],
					charIndex = 0,
					parsed = colors.length ? "" : s,
					i, color, temp;
				for (i = 0; i < colors.length; i++) {
					color = colors[i];
					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
					charIndex += temp.length + color.length;
					color = _parseColor(color, toHSL);
					if (color.length === 3) {
						color.push(1);
					}
					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
				}
				return parsed;
			},
			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp+")", "gi");

		CSSPlugin.colorStringFilter = function(a) {
			var combined = a[0] + a[1],
				toHSL;
			_colorExp.lastIndex = 0;
			if (_colorExp.test(combined)) {
				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
				a[0] = _formatColors(a[0], toHSL);
				a[1] = _formatColors(a[1], toHSL);
			}
		};

		if (!TweenLite.defaultStringFilter) {
			TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
		}

		/**
		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
		 * @return {Function} formatter function
		 */
		var _getFormatter = function(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function(v) {return v;};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
					numVals = dVals.length,
					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
					formatter;
				if (!numVals) {
					return function(v) {return v;};
				}
				if (clr) {
					formatter = function(v) {
						var color, vals, i, a;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return formatter;

				}
				formatter = function(v) {
					var vals, a, i;
					if (typeof(v) === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = formatter(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + sfx;
				};
				return formatter;
			},

			/**
			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
			 * @return {Function} a formatter function
			 */
			_getEdgeParser = function(props) {
				props = props.split(",");
				return function(t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
						i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},

			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens  which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function(v) {
				this.plugin.setRatio(v);
				var d = this.data,
					proxy = d.proxy,
					mpt = d.firstMPT,
					min = 0.000001,
					val, pt, i, str;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = Math.round(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = proxy.rotation;
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method.
				if (v === 1) {
					mpt = d.firstMPT;
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt.e = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.e = str;
						}
						mpt = mpt._next;
					}
				}
			},

			/**
			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
			 * @param {!string} p property name
			 * @param {(number|string|object)} v value
			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
			 */
			MiniPropTween = function(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},

			/**
			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
			 * This method returns an object that has the following properties:
			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
			 *  - firstMPT: the first MiniPropTween in the linked list
			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
			 * @param {!Object} t target object to be tweened
			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
			 * @param {!CSSPlugin} cssp The CSSPlugin instance
			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
			 */
			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
					start = {},
					end = {},
					transform = cssp._transform,
					oldForce = _forcePT,
					i, p, xp, mpt, firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
			},



			/**
			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
			 * @param {number} s Starting numeric value
			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
			 * @param {boolean=} r If true, the value(s) should be rounded
			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
			 */
			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = r; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = (b === undefined) ? s : b;
				this.e = (e === undefined) ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},

			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
				pt.b = start;
				pt.e = pt.xs0 = end;
				return pt;
			},

			/**
			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
			 *
			 * @param {!Object} t Target whose property will be tweened
			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
			 * @param {string} b Beginning value
			 * @param {string} e Ending value
			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
			 */
			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
				e += ""; //ensures it's a string
				var ba = b.split(", ").join(",").split(" "), //beginning array
					ea = e.split(", ").join(",").split(" "), //ending array
					l = ba.length,
					autoRound = (_autoRound !== false),
					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				_colorExp.lastIndex = 0;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i];
					bn = parseFloat(bv);
					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);

					//if the value is a color
					} else if (clrs && _colorExp.test(bv)) {
						str = ev.charAt(ev.length - 1) === "," ? ")," : ")"; //if there's a comma at the end, retain it.
						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
						bv = _parseColor(bv, useHSL);
						ev = _parseColor(ev, useHSL);
						hasAlpha = (bv.length + ev.length > 6);
						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) { //old versions of IE don't support rgba().
								hasAlpha = false;
							}
							if (useHSL) {
								pt.appendXtra((hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
							} else {
								pt.appendXtra((hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true)
									.appendXtra("", bv[1], ev[1] - bv[1], ",", true)
									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), true);
							}

							if (hasAlpha) {
								bv = (bv.length < 4) ? 1 : bv[3];
								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
							}
						}
						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += pt.l ? " " + bv : bv;

						//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			i = 9;


		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


		/**
		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
		 * @param {string=} pfx Prefix (if any)
		 * @param {!number} s Starting value
		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
		 * @param {string=} sfx Suffix (if any)
		 * @param {boolean=} r Round (if true).
		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
		 */
		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
			var pt = this,
				l = pt.l;
			pt["xs" + l] += (pad && l) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = {s:s + c};
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
		 * @param {Object=} options An object containing any of the following configuration options:
		 *                      - defaultValue: the default value
		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
		 */
		var SpecialProp = function(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.pr = options.priority || 0;
			},

			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
				if (typeof(options) !== "object") {
					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
					d = options.defaultValue,
					i, temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = (i === 0 && options.prefix);
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},

			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = function(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = _globals.com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					}});
				}
			};


		p = SpecialProp.prototype;

		/**
		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
		 * @param {!Object} t target element
		 * @param {(string|number|object)} b beginning value
		 * @param {(string|number|object)} e ending (destination) value
		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
		 * @return {CSSPropTween=} First CSSPropTween in the linked list
		 */
		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
				i, ba, ea, l, bi, ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = (ea.length > ba.length) ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
								ba[i] = ba[i].split(kwd).join("");
							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
								ba[i] += " " + kwd;
							}
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
		 * @param {!Object} t Target object whose property is being tweened
		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
		 * @param {!string} p Property name
		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
		 * @param {Object=} vars Original vars object that contains the data for parsing.
		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
		 */
		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
		 *  1) Target object whose property should be tweened (typically a DOM element)
		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
		 *
		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
		 *
		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
		 *      var start = target.style.width;
		 *      return function(ratio) {
		 *              target.style.width = (start + value * ratio) + "px";
		 *              console.log("set width to " + target.style.width);
		 *          }
		 * }, 0);
		 *
		 * Then, when I do this tween, it will trigger my special property:
		 *
		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
		 *
		 * In the example, of course, we're just changing the width, but you can do anything you want.
		 *
		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
		 */
		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority:priority});
		};






		//transform-related methods and properties
		CSSPlugin.useSVGTransformAttr = _isSafari || _isFirefox; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			_transformOriginProp = _checkPropPrefix("transformOrigin"),
			_supports3D = (_checkPropPrefix("perspective") !== null),
			Transform = _internals.Transform = function() {
				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
			},
			_SVGElement = window.SVGElement,
			_useSVGTransformAttr,
			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

			_createSVG = function(type, container, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
					reg = /([a-z])([A-Z])/g,
					p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				container.appendChild(element);
				return element;
			},
			_docElement = _doc.documentElement,
			_forceSVGTransformAttr = (function() {
				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
				var force = _ieVers || (/Android/i.test(_agent) && !window.chrome),
					svg, rect, width;
				if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
					svg = _createSVG("svg", _docElement);
					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
					width = rect.getBoundingClientRect().width;
					rect.style[_transformOriginProp] = "50% 50%";
					rect.style[_transformProp] = "scaleX(0.5)";
					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
					_docElement.removeChild(svg);
				}
				return force;
			})(),
			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin) {
				var tm = e._gsTransform,
					m = _getMatrix(e, true),
					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
				if (tm) {
					xOriginOld = tm.xOrigin; //record the original values before we alter them.
					yOriginOld = tm.yOrigin;
				}
				if (!absolute || (v = absolute.split(" ")).length < 2) {
					b = e.getBBox();
					local = _parsePosition(local).split(" ");
					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
				}
				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = (a * d - b * c);
					x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
					y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
					xOrigin = decoratee.xOrigin = v[0] = x;
					yOrigin = decoratee.yOrigin = v[1] = y;
				}
				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
						x = xOrigin - xOriginOld;
						y = yOrigin - yOriginOld;
						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
						//tm.x -= x - (x * m[0] + y * m[2]);
						//tm.y -= y - (x * m[1] + y * m[3]);
						tm.xOffset += (x * m[0] + y * m[2]) - x;
						tm.yOffset += (x * m[1] + y * m[3]) - y;
					} else {
						tm.xOffset = tm.yOffset = 0;
					}
				}
				e.setAttribute("data-svg-origin", v.join(" "));
			},
			_isSVG = function(e) {
				return !!(_SVGElement && typeof(e.getBBox) === "function" && e.getCTM && (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM)));
			},
			_identity2DMatrix = [1,0,0,1,0,0],
			_getMatrix = function(e, force2D) {
				var tm = e._gsTransform || new Transform(),
					rnd = 100000,
					isDefault, s, m, n, dec;
				if (_transformProp) {
					s = _getStyle(e, _transformPropCSS, null, true);
				} else if (e.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = e.currentStyle.filter.match(_ieGetMatrixExp);
					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
				}
				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
				if (tm.svg || (e.getBBox && _isSVG(e))) {
					if (isDefault && (e.style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
						s = e.style[_transformProp];
						isDefault = 0;
					}
					m = e.getAttribute("transform");
					if (isDefault && m) {
						if (m.indexOf("matrix") !== -1) { //just in case there's a "transform" value specified as an attribute instead of CSS style. Accept either a matrix() or simple translate() value though.
							s = m;
							isDefault = 0;
						} else if (m.indexOf("translate") !== -1) {
							s = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")";
							isDefault = 0;
						}
					}
				}
				if (isDefault) {
					return _identity2DMatrix;
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
			},

			/**
			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
			 * @param {!Object} t target element
			 * @param {Object=} cs computed style object (optional)
			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
			 */
			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
					min = 0.00002,
					rnd = 100000,
					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
					m, i, scaleX, scaleY, rotation, skewX;

				tm.svg = !!(t.getBBox && _isSVG(t));
				if (tm.svg) {
					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, _cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
				}
				m = _getMatrix(t);
				if (m !== _identity2DMatrix) {

					if (m.length === 16) {
						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
							a13 = m[8], a23 = m[9], a33 = m[10],
							a14 = m[12], a24 = m[13], a34 = m[14],
							a43 = m[11],
							angle = Math.atan2(a32, a33),
							t1, t2, t3, t4, cos, sin;

						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
						if (tm.zOrigin) {
							a34 = -tm.zOrigin;
							a14 = a13*a34-m[12];
							a24 = a23*a34-m[13];
							a34 = a33*a34+tm.zOrigin-m[14];
						}
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12*cos+a13*sin;
							t2 = a22*cos+a23*sin;
							t3 = a32*cos+a33*sin;
							a13 = a12*-sin+a13*cos;
							a23 = a22*-sin+a23*cos;
							a33 = a32*-sin+a33*cos;
							a43 = a42*-sin+a43*cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(a13, a33);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11*cos-a13*sin;
							t2 = a21*cos-a23*sin;
							t3 = a31*cos-a33*sin;
							a23 = a21*sin+a23*cos;
							a33 = a31*sin+a33*cos;
							a43 = a41*sin+a43*cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a11);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							a11 = a11*cos+a12*sin;
							t2 = a21*cos+a22*sin;
							a22 = a21*-sin+a22*cos;
							a32 = a31*-sin+a32*cos;
							a21 = t2;
						}

						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
							tm.rotationX = tm.rotation = 0;
							tm.rotationY += 180;
						}

						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
						tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
						tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
						tm.skewX = 0;
						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
						}

					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY)) && !(tm.x !== undefined && _getStyle(t, "display", cs) === "none")) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
						var k = (m.length >= 6),
							a = k ? m[0] : 1,
							b = m[1] || 0,
							c = m[2] || 0,
							d = k ? m[3] : 1;
						tm.x = m[4] || 0;
						tm.y = m[5] || 0;
						scaleX = Math.sqrt(a * a + b * b);
						scaleY = Math.sqrt(d * d + c * c);
						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
						if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
							if (invX) {
								scaleX *= -1;
								skewX += (rotation <= 0) ? 180 : -180;
								rotation += (rotation <= 0) ? 180 : -180;
							} else {
								scaleY *= -1;
								skewX += (skewX <= 0) ? 180 : -180;
							}
						}
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
						if (_supports3D) {
							tm.rotationX = tm.rotationY = tm.z = 0;
							tm.perspective = defaultTransformPerspective;
							tm.scaleZ = 1;
						}
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
						}
					}
					tm.zOrigin = zOrigin;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
					for (i in tm) {
						if (tm[i] < min) if (tm[i] > -min) {
							tm[i] = 0;
						}
					}
				}
				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
						if (_useSVGTransformAttr && t.style[_transformProp]) {
							TweenLite.delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
								_removeProp(t.style, _transformProp);
							});
						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
							TweenLite.delayedCall(0.001, function(){
								t.removeAttribute("transform");
							});
						}
					}
				}
				return tm;
			},

			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					ang = -t.rotation * _DEG2RAD,
					skew = ang + t.skewX * _DEG2RAD,
					rnd = 100000,
					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
					style = this.t.style,
					cs = this.t.currentStyle,
					filters, val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
					h = this.t.offsetHeight,
					clip = (cs.position !== "absolute"),
					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
					ox = t.x + (w * t.xPercent / 100),
					oy = t.y + (h * t.yPercent / 100),
					dx, dy;

				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}

				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = (w / 2);
					dy = (h / 2);
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}

				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}

				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
						marg, prop, dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
					}
				}
			},

			/* translates a super small decimal to a string WITHOUT scientific notation
			_safeDecimal = function(n) {
				var s = (n < 0 ? -n : n) + "",
					a = s.split("e-");
				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
			},
			*/

			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					style = this.t.style,
					angle = t.rotation,
					rotationX = t.rotationX,
					rotationY = t.rotationY,
					sx = t.scaleX,
					sy = t.scaleY,
					sz = t.scaleZ,
					x = t.x,
					y = t.y,
					z = t.z,
					isSVG = t.svg,
					perspective = t.perspective,
					force3D = t.force3D,
					a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
					zOrigin, min, cos, sin, t1, t2, transform, comma, zero, skew, rnd;
				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

					//2D
					if (angle || t.skewX || isSVG) {
						angle *= _DEG2RAD;
						skew = t.skewX * _DEG2RAD;
						rnd = 100000;
						a11 = Math.cos(angle) * sx;
						a21 = Math.sin(angle) * sx;
						a12 = Math.sin(angle - skew) * -sy;
						a22 = Math.cos(angle - skew) * sy;
						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(skew);
							t1 = Math.sqrt(1 + t1 * t1);
							a12 *= t1;
							a22 *= t1;
							if (t.skewY) {
								a11 *= t1;
								a21 *= t1;
							}
						}
						if (isSVG) {
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
								min = this.t.getBBox();
								x += t.xPercent * 0.01 * min.width;
								y += t.yPercent * 0.01 * min.height;
							}
							min = 0.000001;
							if (x < min) if (x > -min) {
								x = 0;
							}
							if (y < min) if (y > -min) {
								y = 0;
							}
						}
						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
						if (isSVG && _useSVGTransformAttr) {
							this.t.setAttribute("transform", "matrix(" + transform);
						} else {
							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
						}
					} else {
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
					}
					return;

				}
				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
					min = 0.0001;
					if (sx < min && sx > -min) {
						sx = sz = 0.00002;
					}
					if (sy < min && sy > -min) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || t.skewX) {
					angle *= _DEG2RAD;
					cos = a11 = Math.cos(angle);
					sin = a21 = Math.sin(angle);
					if (t.skewX) {
						angle -= t.skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(t.skewX * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
							if (t.skewY) {
								a11 *= t1;
								a21 *= t1;
							}
						}
					}
					a12 = -sin;
					a22 = cos;

				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				// KEY  INDEX   AFFECTS
				// a11  0       rotation, rotationY, scaleX
				// a21  1       rotation, rotationY, scaleX
				// a31  2       rotationY, scaleX
				// a41  3       rotationY, scaleX
				// a12  4       rotation, skewX, rotationX, scaleY
				// a22  5       rotation, skewX, rotationX, scaleY
				// a32  6       rotationX, scaleY
				// a42  7       rotationX, scaleY
				// a13  8       rotationY, rotationX, scaleZ
				// a23  9       rotationY, rotationX, scaleZ
				// a33  10      rotationY, rotationX, scaleZ
				// a43  11      rotationY, rotationX, perspective, scaleZ
				// a14  12      x, zOrigin, svgOrigin
				// a24  13      y, zOrigin, svgOrigin
				// a34  14      z, zOrigin
				// a44  15
				// rotation: Math.atan2(a21, a11)
				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
				// rotationX: Math.atan2(a32, a33)
				a33 = 1;
				a13 = a23 = a31 = a32 = a41 = a42 = 0;
				a43 = (perspective) ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
				comma = ",";
				zero = "0";
				angle = rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = -sin;
					a41 = a43*-sin;
					a13 = a11*sin;
					a23 = a21*sin;
					a33 = cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12*cos+a13*sin;
					t2 = a22*cos+a23*sin;
					a32 = a33*sin;
					a42 = a43*sin;
					a13 = a12*-sin+a13*cos;
					a23 = a22*-sin+a23*cos;
					a33 = a33*cos;
					a43 = a43*cos;
					a12 = t1;
					a22 = t2;
				}
				if (sz !== 1) {
					a13*=sz;
					a23*=sz;
					a33*=sz;
					a43*=sz;
				}
				if (sy !== 1) {
					a12*=sy;
					a22*=sy;
					a32*=sy;
					a42*=sy;
				}
				if (sx !== 1) {
					a11*=sx;
					a21*=sx;
					a31*=sx;
					a41*=sx;
				}

				if (zOrigin || isSVG) {
					if (zOrigin) {
						x += a13*-zOrigin;
						y += a23*-zOrigin;
						z += a33*-zOrigin+zOrigin;
					}
					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					}
					if (x < min && x > -min) {
						x = zero;
					}
					if (y < min && y > -min) {
						y = zero;
					}
					if (z < min && z > -min) {
						z = 0; //don't use string because we calculate perspective later and need the number.
					}
				}

				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
				if (rotationX || rotationY) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
				} else {
					transform += ",0,0,0,0,1,0,";
				}
				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

				style[_transformProp] = transform;
			};

		p = Transform.prototype;
		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
		p.scaleX = p.scaleY = p.scaleZ = 1;

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
			cssp._lastParsedTransform = vars;
			var originalGSTransform = t._gsTransform,
				style = t.style,
				min = 0.000001,
				i = _transformProps.length,
				v = vars,
				endRotations = {},
				transformOriginString = "transformOrigin",
				m1, m2, skewY, copy, orig, has3D, hasChange, dr, x, y;
			if (vars.display) { //if the user is setting display during this tween, it may not be instantiated yet but we must force it here in order to get accurate readings. If display is "none", some browsers refuse to report the transform properties correctly.
				copy = _getStyle(t, "display");
				style.display = "block";
				m1 = _getTransform(t, _cs, true, vars.parseTransform);
				style.display = copy;
			} else {
				m1 = _getTransform(t, _cs, true, vars.parseTransform);
			}
			cssp._transform = m1;
			if (typeof(v.transform) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
				copy[_transformProp] = v.transform;
				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				copy.position = "absolute";
				_doc.body.appendChild(_tempDiv);
				m2 = _getTransform(_tempDiv, null, false);
				_doc.body.removeChild(_tempDiv);
				if (!m2.perspective) {
					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
				}
				if (v.xPercent != null) {
					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
				}
				if (v.yPercent != null) {
					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
				}
			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
					x:_parseVal(v.x, m1.x),
					y:_parseVal(v.y, m1.y),
					z:_parseVal(v.z, m1.z),
					xPercent:_parseVal(v.xPercent, m1.xPercent),
					yPercent:_parseVal(v.yPercent, m1.yPercent),
					perspective:_parseVal(v.transformPerspective, m1.perspective)};
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof(dr) === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
					m2.x = 0;
					m2.xPercent = _parseVal(v.x, m1.xPercent);
				}
				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
					m2.y = 0;
					m2.yPercent = _parseVal(v.y, m1.yPercent);
				}

				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = (v.skewX == null) ? m1.skewX : _parseAngle(v.skewX, m1.skewX);

				//note: for performance reasons, we combine all skewing into the skewX and rotation values, ignoring skewY but we must still record it so that we can discern how much of the overall skew is attributed to skewX vs. skewY. Otherwise, if the skewY would always act relative (tween skewY to 10deg, for example, multiple times and if we always combine things into skewX, we can't remember that skewY was 10 from last time). Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of -10 degrees.
				m2.skewY = (v.skewY == null) ? m1.skewY : _parseAngle(v.skewY, m1.skewY);
				if ((skewY = m2.skewY - m1.skewY)) {
					m2.skewX += skewY;
					m2.rotation += skewY;
				}
			}
			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;

			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = v.transformOrigin;
			if (m1.svg && (orig || v.svgOrigin)) {
				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
				y = m1.yOffset;
				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
				if (x !== m1.xOffset || y !== m1.yOffset) {
					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
				}
				orig = _useSVGTransformAttr ? null : "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
			}
			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = orig;
					}

					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}
			if (hasChange) {
				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			return pt;
		}, prefix:true});

		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
				style = t.style,
				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) { //older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = (es.charAt(1) === "=");
				if (rel) {
					en = parseInt(es.charAt(0)+"1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = (hn / w * 100) + "%";
						bs2 = (vn / h * 100) + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = (hn / em) + "em";
						bs2 = (vn / em) + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = (parseFloat(bs) + en) + esfx;
						es2 = (parseFloat(bs2) + en) + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
				cs = (_cs || _getComputedStyle(t, null)),
				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				ba, ea, i, pct, overlap, src;
			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1)) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = (bs.indexOf("%") !== -1);
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter:_parsePosition});
		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:_parsePosition});
		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
		_registerComplexSpecialProp("transformStyle", {prefix:true});
		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
		_registerComplexSpecialProp("userSelect", {prefix:true});
		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
			var b, cs, delim;
			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		}});
		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
				return this.parseComplex(t.style, this.format(_getStyle(t, "borderTopWidth", _cs, false, "0px") + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), this.format(e), pt, plugin);
			}, color:true, formatter:function(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			}});
		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
			var s = t.style,
				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		}});

		//opacity-related
		var _setIEOpacityRatio = function(v) {
				var t = this.t, //refers to the element's style property
					filters = t.filter || _getStyle(this.data, "filter") || "",
					val = (this.s + this.c * v) | 0,
					skip;
				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				style = t.style,
				isAutoAlpha = (p === "autoAlpha");
			if (typeof(e) === "string" && e.charAt(1) === "=") {
				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		}});


		var _removeProp = function(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "-" + p;
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			_setClassNameRatio = function(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
					var mpt = this.data, //first MiniPropTween
						s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.getAttribute("class") !== this.e) {
					this.t.setAttribute("class", this.e);
				}
			};
		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
				cssText = t.style.cssText,
				difData, bs, cnpt, cnptLookup, mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
			t.setAttribute("class", pt.e);
			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
			t.setAttribute("class", b);
			pt.data = difData.firstMPT;
			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			return pt;
		}});


		var _setClearPropsRatio = function(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
					transformParse = _specialProps.transform.parse,
					a, p, i, clearTransform, transform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(" ").join("").split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					transform = this.t._gsTransform;
					if (transform) {
						if (transform.svg) {
							this.t.removeAttribute("data-svg-origin");
						}
						delete this.t._gsTransform;
					}
				}

			}
		};
		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		}});

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}








		p = CSSPlugin.prototype;
		p._firstPT = p._lastParsedTransform = p._transform = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function(target, vars, tween) {
			if (!target.nodeType) { //css is only for dom elements
				return false;
			}
			this._target = target;
			this._tween = tween;
			this._vars = vars;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					this._addLazySet(style, "zIndex", 0);
				}
			}

			if (typeof(vars) === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat( RegExp.$1 );
				}
				vars = v;
				style.cssText = first;
			}

			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
			} else {
				this._firstPT = pt = this.parse(target, vars, null);
			}

			if (this._transformType) {
				threeD = (this._transformType === 3);
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							this._addLazySet(style, "zIndex", 0);
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				tpt.tween = tween;
				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};


		p.parse = function(target, vars, pt, plugin) {
			var style = target.style,
				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				sp = _specialProps[p]; //SpecialProp lookup.
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);

				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = (typeof(es) === "string");
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

					} else if (isStr && (es.indexOf(" ") !== -1 || es.indexOf(",") !== -1)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

					} else {
						bn = parseFloat(bs);
						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = (p !== "opacity") ? 0 : 1;
								bsfx = "";
							}
						}

						rel = (isStr && es.charAt(1) === "=");
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.replace(_suffixExp, "") : "";
						}

						if (esfx === "") {
							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.

						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}

							} else if (esfx === "em" || esfx === "rem") {
								bn /= _convertToPixels(target, p, 1, esfx);

							//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};


		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val, str, i;
			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						if (pt.r && pt.type !== -1) {
							val = Math.round(pt.s + pt.c);
							if (!pt.type) {
								pt.t[pt.p] = val + pt.xs0;
							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
								i = pt.l;
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}
						} else {
							pt.t[pt.p] = pt.e;
						}
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = Math.round(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.t[pt.p] = str;
						}

					} else if (pt.type === -1) { //non-tweening value
						pt.t[pt.p] = pt.xs0;

					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
		 * @private
		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
		 * want and it won't create duplicate CSSPropTweens.
		 *
		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
		 */
		p._enableTransforms = function(threeD) {
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
		};

		var lazySet = function(v) {
			this.t[this.p] = this.e;
			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
		};
		/** @private Gives us a way to set a value on the first render (and only the first render). **/
		p._addLazySet = function(t, p, v) {
			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
			pt.e = v;
			pt.setRatio = lazySet;
			pt.data = this;
		};

		/** @private **/
		p._linkCSSP = function(pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function(lookup) {
			var copy = lookup,
				pt, p, xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			return TweenPlugin.prototype._kill.call(this, copy);
		};



		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};

		/**
		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
		 * and it would create other problems. For example:
		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
		 *
		 * @param {Object} target object to be tweened
		 * @param {number} Duration in seconds (or frames for frames-based tweens)
		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
		 * @return {Array} An array of TweenLite instances
		 */
		CSSPlugin.cascadeTo = function(target, duration, vars) {
			var tween = TweenLite.to(target, duration, vars),
				results = [tween],
				b = [],
				e = [],
				targets = [],
				_reservedProps = TweenLite._internals.reservedProps,
				i, difs, p, from;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true, true);
			_getChildStyles(target, e);
			tween.render(0, true, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					from = {};
					for (p in difs) {
						from[p] = b[i][p];
					}
					results.push(TweenLite.fromTo(targets[i], duration, from, difs));
				}
			}
			return results;
		};

		TweenPlugin.activate([CSSPlugin]);
		return CSSPlugin;

	}, true);
	
}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(define) === "function" && define.amd) { //AMD
		define(["TweenLite"], getGlobal);
	} else if (typeof(module) !== "undefined" && module.exports) { //node
		require("../TweenLite.js");
		module.exports = getGlobal();
	}
}("CSSPlugin"));



/*!
 * VERSION: beta 0.3.4
 * DATE: 2015-08-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(function(window) {
	
	"use strict";
	var _globals = window.GreenSockGlobals || window,
		_namespace = function(ns) {
			var a = ns.split("."),
				p = _globals, i;
			for (i = 0; i < a.length; i++) {
				p[a[i]] = p = p[a[i]] || {};
			}
			return p;
		},
		pkg = _namespace("com.greensock.utils"),
		_getText = function(e) {
			var type = e.nodeType,
				result = "";
			if (type === 1 || type === 9 || type === 11) {
				if (typeof(e.textContent) === "string") {
					return e.textContent;
				} else {
					for ( e = e.firstChild; e; e = e.nextSibling ) {
						result += _getText(e);
					}
				}
			} else if (type === 3 || type === 4) {
				return e.nodeValue;
			}
			return result;
		},
		_doc = document,
		_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},
		_capsExp = /([A-Z])/g,
		_getStyle = function(t, p, cs, str) {
			var result;
			if ((cs = cs || _getComputedStyle(t, null))) {
				t = cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				result = (t || cs.length) ? t : cs[p]; //Opera behaves VERY strangely - length is usually 0 and cs[p] is the only way to get accurate results EXCEPT when checking for -o-transform which only works with cs.getPropertyValue()!
			} else if (t.currentStyle) {
				cs = t.currentStyle;
				result = cs[p];
			}
			return str ? result : parseInt(result, 10) || 0;
		},
		_isArrayLike = function(e) {
			return (e.length && e[0] && ((e[0].nodeType && e[0].style && !e.nodeType) || (e[0].length && e[0][0]))) ? true : false; //could be an array of jQuery objects too, so accommodate that.
		},
		_flattenArray = function(a) {
			var result = [],
				l = a.length,
				i, e, j;
			for (i = 0; i < l; i++) {
				e = a[i];
				if (_isArrayLike(e)) {
					j = e.length;
					for (j = 0; j < e.length; j++) {
						result.push(e[j]);
					}
				} else {
					result.push(e);
				}
			}
			return result;
		},
		_brSwap = ")eefec303079ad17405c",
		_brExp = /(?:<br>|<br\/>|<br \/>)/gi,
		_isOldIE = (_doc.all && !_doc.addEventListener),
		_divStart = "<div style='position:relative;display:inline-block;" + (_isOldIE ? "*display:inline;*zoom:1;'" : "'"), //note: we must use both display:inline-block and *display:inline for IE8 and earlier, otherwise it won't flow correctly (and if we only use display:inline, IE won't render most of the property tweens - very odd).
		_cssClassFunc = function(cssClass) {
			cssClass = cssClass || "";
			var iterate = (cssClass.indexOf("++") !== -1),
				num = 1;
			if (iterate) {
				cssClass = cssClass.split("++").join("");
			}
			return function() {
				return _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
			};
		},
		SplitText = pkg.SplitText = _globals.SplitText = function(element, vars) {
			if (typeof(element) === "string") {
				element = SplitText.selector(element);
			}
			if (!element) {
				throw("cannot split a null element.");
			}
			this.elements = _isArrayLike(element) ? _flattenArray(element) : [element];
			this.chars = [];
			this.words = [];
			this.lines = [];
			this._originals = [];
			this.vars = vars || {};
			this.split(vars);
		},
		_swapText = function(element, oldText, newText) {
			var type = element.nodeType;
			if (type === 1 || type === 9 || type === 11) {
				for ( element = element.firstChild; element; element = element.nextSibling ) {
					_swapText(element, oldText, newText);
				}
			} else if (type === 3 || type === 4) {
				element.nodeValue = element.nodeValue.split(oldText).join(newText);
			}
		},
		_pushReversed = function(a, merge) {
			var i = merge.length;
			while (--i > -1) {
				a.push(merge[i]);
			}
		},
		_split = function(element, vars, allChars, allWords, allLines) {
			if (_brExp.test(element.innerHTML)) {
				element.innerHTML = element.innerHTML.replace(_brExp, _brSwap); //swap in a unique string for <br/> tags so that we can identify it when we loop through later, and replace it appropriately
			}
			var text = _getText(element),
				types = vars.type || vars.split || "chars,words,lines",
				lines = (types.indexOf("lines") !== -1) ? [] : null,
				words = (types.indexOf("words") !== -1),
				chars = (types.indexOf("chars") !== -1),
				absolute = (vars.position === "absolute" || vars.absolute === true),
				space = absolute ? "&#173; " : " ",
				lineOffsetY = -999,
				cs = _getComputedStyle(element),
				paddingLeft = _getStyle(element, "paddingLeft", cs),
				borderTopAndBottom = _getStyle(element, "borderBottomWidth", cs) + _getStyle(element, "borderTopWidth", cs),
				borderLeftAndRight = _getStyle(element, "borderLeftWidth", cs) + _getStyle(element, "borderRightWidth", cs),
				padTopAndBottom = _getStyle(element, "paddingTop", cs) + _getStyle(element, "paddingBottom", cs),
				padLeftAndRight = _getStyle(element, "paddingLeft", cs) + _getStyle(element, "paddingRight", cs),
				textAlign = _getStyle(element, "textAlign", cs, true),
				origHeight = element.clientHeight,
				origWidth = element.clientWidth,
				wordEnd = "</div>",
				wordStart = _cssClassFunc(vars.wordsClass),
				charStart = _cssClassFunc(vars.charsClass),
				iterateLine = ((vars.linesClass || "").indexOf("++") !== -1),
				linesClass = vars.linesClass,
				hasTagStart = text.indexOf("<") !== -1,
				wordIsOpen = true,
				charArray = [],
				wordArray = [],
				lineArray = [],
				l, curLine, isChild, splitText, i, j, character, nodes, node, offset, lineNode, style, lineWidth, addWordSpaces;

			if (iterateLine) {
				linesClass = linesClass.split("++").join("");
			}
			if (hasTagStart) {
				text = text.split("<").join("{{LT}}"); //we can't leave "<" in the string, or when we set the innerHTML, it can be interpreted as
			}
			l = text.length;

			splitText = wordStart();
			for (i = 0; i < l; i++) {
				character = text.charAt(i);
				if (character === ")" && text.substr(i, 20) === _brSwap) {
					splitText += (wordIsOpen ? wordEnd : "") + "<BR/>";
					wordIsOpen = false;
					if (i !== l - 20 && text.substr(i+20, 20) !== _brSwap) {
						splitText += " " + wordStart();
						wordIsOpen = true;
					}
					i += 19;

				} else if (character === " " && text.charAt(i-1) !== " " && i !== l-1 && text.substr(i-20, 20) !== _brSwap) {
					splitText += wordIsOpen ? wordEnd : "";
					wordIsOpen = false;
					while (text.charAt(i + 1) === " ") { //skip over empty spaces (to avoid making them words)
						splitText += space;
						i++;
					}
					if (text.charAt(i + 1) !== ")" || text.substr(i + 1, 20) !== _brSwap) {
						splitText += space + wordStart();
						wordIsOpen = true;
					}

				} else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
					splitText +=  chars ? charStart() + "{{LT}}" + "</div>" : "{{LT}}";
					i += 5;
				} else {
					splitText += (chars && character !== " ") ? charStart() + character + "</div>" : character;
				}
			}
			element.innerHTML = splitText + (wordIsOpen ? wordEnd : "");

			if (hasTagStart) {
				_swapText(element, "{{LT}}", "<");
			}
			//copy all the descendant nodes into an array (we can't use a regular nodeList because it's live and we may need to renest things)
			j = element.getElementsByTagName("*");
			l = j.length;
			nodes = [];
			for (i = 0; i < l; i++) {
				nodes[i] = j[i];
			}

			//for absolute positioning, we need to record the x/y offsets and width/height for every <div>. And even if we're not positioning things absolutely, in order to accommodate lines, we must figure out where the y offset changes so that we can sense where the lines break, and we populate the lines array.
			if (lines || absolute) {
				for (i = 0; i < l; i++) {
					node = nodes[i];
					isChild = (node.parentNode === element);
					if (isChild || absolute || (chars && !words)) {
					 	offset = node.offsetTop;
						if (lines && isChild && offset !== lineOffsetY && node.nodeName !== "BR") {
							curLine = [];
							lines.push(curLine);
							lineOffsetY = offset;
						}
						if (absolute) { //record offset x and y, as well as width and height so that we can access them later for positioning. Grabbing them at once ensures we don't trigger a browser paint & we maximize performance.
							node._x = node.offsetLeft;
							node._y = offset;
							node._w = node.offsetWidth;
							node._h = node.offsetHeight;
						}
						if (lines) {
							if (words === isChild || !chars) {
								curLine.push(node);
								node._x -= paddingLeft;
							}
							if (isChild && i) {
								nodes[i-1]._wordEnd = true;
							}
							if (node.nodeName === "BR" && node.nextSibling && node.nextSibling.nodeName === "BR") { //two consecutive <br> tags signify a new [empty] line.
								lines.push([]);
							}
						}
					}
				}
			}

			for (i = 0; i < l; i++) {
				node = nodes[i];
				isChild = (node.parentNode === element);
				if (node.nodeName === "BR") {
					if (lines || absolute) {
						element.removeChild(node);
						nodes.splice(i--, 1);
						l--;
					} else if (!words) {
						element.appendChild(node);
					}
					continue;
				}

				if (absolute) {
					style = node.style;
					if (!words && !isChild) {
						node._x += node.parentNode._x;
						node._y += node.parentNode._y;
					}
					style.left = node._x + "px";
					style.top = node._y + "px";
					style.position = "absolute";
					style.display = "block";
					//if we don't set the width/height, things collapse in older versions of IE and the origin for transforms is thrown off in all browsers.
					style.width = (node._w + 1) + "px"; //IE is 1px short sometimes. Avoid wrapping
					style.height = node._h + "px";
				}

				if (!words) {
					//we always start out wrapping words in their own <div> so that line breaks happen correctly, but here we'll remove those <div> tags if necessary and renest the characters directly into the element rather than inside the word <div>
					if (isChild) {
						element.removeChild(node);
						nodes.splice(i--, 1);
						l--;
					} else if (!isChild && chars) {
						offset = (!lines && !absolute && node.nextSibling); //if this is the last letter in the word (and we're not breaking by lines and not positioning things absolutely), we need to add a space afterwards so that the characters don't just mash together
						element.appendChild(node);
						if (!offset) {
							element.appendChild(_doc.createTextNode(" "));
						}
						charArray.push(node); //TODO: push()
					}
				} else if (isChild && node.innerHTML !== "") {
					wordArray.push(node);  //TODO: push()
				} else if (chars) {
					charArray.push(node);  //TODO: push()
				}
			}

			if (lines) {
				//the next 7 lines just give us the line width in the most reliable way and figure out the left offset (if position isn't relative or absolute). We must set the width along with text-align to ensure everything works properly for various alignments.
				if (absolute) {
					lineNode = _doc.createElement("div");
					element.appendChild(lineNode);
					lineWidth = lineNode.offsetWidth + "px";
					offset = (lineNode.offsetParent === element) ? 0 : element.offsetLeft;
					element.removeChild(lineNode);
				}
				style = element.style.cssText;
				element.style.cssText = "display:none;"; //to improve performance, set display:none on the element so that the browser doesn't have to worry about reflowing or rendering while we're renesting things. We'll revert the cssText later.
				//we can't use element.innerHTML = "" because that causes IE to literally delete all the nodes and their content even though we've stored them in an array! So we must loop through the children and remove them.
				while (element.firstChild) {
					element.removeChild(element.firstChild);
				}
				addWordSpaces = (!absolute || (!words && !chars));
				for (i = 0; i < lines.length; i++) {
					curLine = lines[i];
					lineNode = _doc.createElement("div");
					lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
					if (linesClass) {
						lineNode.className = linesClass + (iterateLine ? i+1 : "");
					}
					lineArray.push(lineNode);  //TODO: push()
					l = curLine.length;
					for (j = 0; j < l; j++) {
						if (curLine[j].nodeName !== "BR") {
							node = curLine[j];
							lineNode.appendChild(node);
							if (addWordSpaces && (node._wordEnd || words)) {
								lineNode.appendChild(_doc.createTextNode(" "));
							}
							if (absolute) {
								if (j === 0) {
									lineNode.style.top = node._y + "px";
									lineNode.style.left = (paddingLeft + offset) + "px";
								}
								node.style.top = "0px";
								if (offset) {
									node.style.left = (node._x - offset) + "px";
								}
							}
						}
					}
					if (l === 0) { //if there are no nodes in the line (typically meaning there were two consecutive <br> tags, just add a non-breaking space so that things display properly.
						lineNode.innerHTML = "&nbsp;";
					}
					if (!words && !chars) {
						lineNode.innerHTML = _getText(lineNode).split(String.fromCharCode(160)).join(" ");
					}
					if (absolute) {
						lineNode.style.width = lineWidth;
						lineNode.style.height = node._h + "px";
					}
					element.appendChild(lineNode);
				}
				element.style.cssText = style;
			}

			//if everything shifts to being position:absolute, the container can collapse in terms of height or width, so fix that here.
			if (absolute) {
				if (origHeight > element.clientHeight) {
					element.style.height = (origHeight - padTopAndBottom) + "px";
					if (element.clientHeight < origHeight) { //IE8 and earlier use a different box model - we must include padding and borders
						element.style.height = (origHeight + borderTopAndBottom)+ "px";
					}
				}
				if (origWidth > element.clientWidth) {
					element.style.width = (origWidth - padLeftAndRight) + "px";
					if (element.clientWidth < origWidth) { //IE8 and earlier use a different box model - we must include padding and borders
						element.style.width = (origWidth + borderLeftAndRight)+ "px";
					}
				}
			}
			_pushReversed(allChars, charArray);
			_pushReversed(allWords, wordArray);
			_pushReversed(allLines, lineArray);
		},
		p = SplitText.prototype;

	p.split = function(vars) {
		if (this.isSplit) {
			this.revert();
		}
		this.vars = vars || this.vars;
		this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
		var i = this.elements.length;
		//we split in reversed order so that if/when we position:absolute elements, they don't affect the position of the ones after them in the document flow (shifting them up as they're taken out of the document flow).
		while (--i > -1) {
			this._originals[i] = this.elements[i].innerHTML;
			_split(this.elements[i], this.vars, this.chars, this.words, this.lines);
		}
		this.chars.reverse();
		this.words.reverse();
		this.lines.reverse();
		this.isSplit = true;
		return this;
	};

	p.revert = function() {
		if (!this._originals) {
			throw("revert() call wasn't scoped properly.");
		}
		var i = this._originals.length;
		while (--i > -1) {
			this.elements[i].innerHTML = this._originals[i];
		}
		this.chars = [];
		this.words = [];
		this.lines = [];
		this.isSplit = false;
		return this;
	};

	SplitText.selector = window.$ || window.jQuery || function(e) {
		var selector = window.$ || window.jQuery;
		if (selector) {
			SplitText.selector = selector;
			return selector(e);
		}
		return (typeof(document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
	};
	SplitText.version = "0.3.4";
	
})(_gsScope);

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(define) === "function" && define.amd) { //AMD
		define(["TweenLite"], getGlobal);
	} else if (typeof(module) !== "undefined" && module.exports) { //node
		module.exports = getGlobal();
	}
}("SplitText"));


// Sandboxing Greensock
try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}


;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS / nodejs module
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images.
    $.waitForImages = {
        hasImageProperties: [
            'backgroundImage',
            'listStyleImage',
            'borderImage',
            'borderCornerImage',
            'cursor'
        ],
        hasImageAttributes: ['srcset']
    };

    // Custom selector to find all `img` elements with a valid `src` attribute.
    $.expr[':']['has-src'] = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        return $(obj).is('img[src][src!=""]');
    };

    // Custom selector to find images which are not already cached by the
    // browser.
    $.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        if (!$(obj).is(':has-src')) {
            return false;
        }

        return !obj.complete;
    };

    $.fn.waitForImages = function () {

        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();

        var finishedCallback;
        var eachCallback;
        var waitForAll;

        // Handle options object (if passed).
        if ($.isPlainObject(arguments[0])) {

            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished;

        } else {

            // Handle if using deferred object and only one param was passed in.
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0];
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2];
            }

        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        this.each(function () {
            // Build a list of all imgs, dependent on what images will
            // be considered.
            var obj = $(this);
            var allImgs = [];
            // CSS properties which may contain an image.
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            // Element attributes which may contain an image.
            var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
            // To match `url()` references.
            // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            if (waitForAll) {

                // Get all elements (including the original), as any one of
                // them could have a background image.
                obj.find('*').addBack().each(function () {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in
                    // case it has a background image too.
                    if (element.is('img:has-src')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;

                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        }
                    });

                    $.each(hasImageAttributes, function (i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;

                        // If it doesn't contain this property, skip.
                        if (!attributeValue) {
                            return true;
                        }

                        // Check for multiple comma separated images
                        attributeValues = attributeValue.split(',');

                        $.each(attributeValues, function(i, value) {
                            // Trim value and get string before first
                            // whitespace (for use with srcset).
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            });
                        });
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj.find('img:has-src')
                    .each(function () {
                    allImgs.push({
                        src: this.src,
                        element: this
                    });
                });
            }

            allImgsLength = allImgs.length;
            allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0]);
            }

            $.each(allImgs, function (i, img) {

                var image = new Image();
                var events =
                  'load.' + eventNamespace + ' error.' + eventNamespace;

                // Handle the image loading and error with the same callback.
                $(image).one(events, function me (event) {
                    // If an error occurred with loading the image, set the
                    // third argument accordingly.
                    var eachArguments = [
                        allImgsLoaded,
                        allImgsLength,
                        event.type == 'load'
                    ];
                    allImgsLoaded++;

                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);

                    // Unbind the event listeners. I use this in addition to
                    // `one` as one of those events won't be called (either
                    // 'load' or 'error' will be called).
                    $(this).off(events, me);

                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false;
                    }

                });

                image.src = img.src;
            });
        });

        return deferred.promise();

    };
}));

;/********************************************
 * REVOLUTION 5.2 EXTENSION - ACTIONS
 * @version: 1.3.1 (03.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/

(function($) {

var _R = jQuery.fn.revolution,
	_ISM = _R.is_mobile();

///////////////////////////////////////////
// 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
///////////////////////////////////////////
jQuery.extend(true,_R, {
	checkActions : function(_nc,opt,as) {
		checkActions_intern(_nc,opt,as);
	}		
});

//////////////////////////////////////////
//	-	INITIALISATION OF ACTIONS 	-	//
//////////////////////////////////////////
var checkActions_intern = function(_nc,opt,as) {
if (as)				
	jQuery.each(as,function(i,a) {		
		a.delay = parseInt(a.delay,0)/1000;
		_nc.addClass("noSwipe");

		// LISTEN TO ESC TO EXIT FROM FULLSCREEN
		if (!opt.fullscreen_esclistener) {
			if (a.action=="exitfullscreen" || a.action=="togglefullscreen") {				
				jQuery(document).keyup(function(e) {
				     if (e.keyCode == 27 && jQuery('#rs-go-fullscreen').length>0)  
				     	_nc.trigger(a.event);				   
				});
				opt.fullscreen_esclistener = true;
			}
		}

		var tnc = a.layer == "backgroundvideo" ? jQuery(".rs-background-video-layer") : a.layer == "firstvideo" ? jQuery(".tp-revslider-slidesli").find('.tp-videolayer') : jQuery("#"+a.layer);
		// COLLECT ALL TOGGLE TRIGGER TO CONNECT THEM WITH TRIGGERED LAYER
		switch (a.action) {
			case "togglevideo":
				jQuery.each(tnc,function(i,_tnc) {
					_tnc = jQuery(_tnc);
					var videotoggledby = _tnc.data('videotoggledby');
					if (videotoggledby == undefined)
						videotoggledby = new Array();
					videotoggledby.push(_nc);					
					_tnc.data('videotoggledby',videotoggledby)				
				});
			break;
			case "togglelayer":
				jQuery.each(tnc,function(i,_tnc) {
					_tnc = jQuery(_tnc);
					var layertoggledby = _tnc.data('layertoggledby');
					if (layertoggledby == undefined)
						layertoggledby = new Array();
					layertoggledby.push(_nc);					
					_tnc.data('layertoggledby',layertoggledby)				
				});
			break;
			case "toggle_mute_video":
				jQuery.each(tnc,function(i,_tnc) {
					_tnc = jQuery(_tnc);
					var videomutetoggledby = _tnc.data('videomutetoggledby');
					if (videomutetoggledby == undefined)
						videomutetoggledby = new Array();
					videomutetoggledby.push(_nc);					
					_tnc.data('videomutetoggledby',videomutetoggledby);				
				});
			break;
			case "toggle_global_mute_video":
				jQuery.each(tnc,function(i,_tnc) {
					_tnc = jQuery(_tnc);
					var videomutetoggledby = _tnc.data('videomutetoggledby');
					if (videomutetoggledby == undefined)
						videomutetoggledby = new Array();
					videomutetoggledby.push(_nc);					
					_tnc.data('videomutetoggledby',videomutetoggledby);				
				});
			break;
			case "toggleslider":
				if (opt.slidertoggledby == undefined) opt.slidertoggledby = new Array();
					opt.slidertoggledby.push(_nc);
			break;
			case "togglefullscreen":								
				if (opt.fullscreentoggledby == undefined) opt.fullscreentoggledby = new Array();
				opt.fullscreentoggledby.push(_nc);													
			break;

		}
		
		_nc.on(a.event,function() {			
			var tnc = a.layer == "backgroundvideo" ? jQuery(".active-revslide .slotholder .rs-background-video-layer") : a.layer == "firstvideo" ? jQuery(".active-revslide .tp-videolayer").first() : jQuery("#"+a.layer);

			if (a.action=="stoplayer" || a.action=="togglelayer" || a.action=="startlayer") {
				if (tnc.length>0) 												
					if (a.action=="startlayer" || (a.action=="togglelayer" && tnc.data('animdirection')!="in")) {
						tnc.data('animdirection',"in");
						var otl = tnc.data('timeline_out'),
							base_offsetx = opt.sliderType==="carousel" ? 0 : opt.width/2 - (opt.gridwidth[opt.curWinRange]*opt.bw)/2,
							base_offsety=0;																		
						if (otl!=undefined) otl.pause(0).kill();																		
						if (_R.animateSingleCaption) _R.animateSingleCaption(tnc,opt,base_offsetx,base_offsety,0,false,true);	
						var tl = tnc.data('timeline');
						tnc.data('triggerstate',"on");		
						_R.toggleState(tnc.data('layertoggledby'));																												
						punchgs.TweenLite.delayedCall(a.delay,function() {
							tl.play(0);
						},[tl]);								
					} else 

					if (a.action=="stoplayer" || (a.action=="togglelayer" && tnc.data('animdirection')!="out")) {
						tnc.data('animdirection',"out");
						tnc.data('triggered',true);
						tnc.data('triggerstate',"off");
						if (_R.stopVideo) _R.stopVideo(tnc,opt);
						if (_R.endMoveCaption)												
							punchgs.TweenLite.delayedCall(a.delay,_R.endMoveCaption,[tnc,null,null,opt]);
						_R.unToggleState(tnc.data('layertoggledby'))														
					}															
			} else 	{
				if (_ISM && (a.action=='playvideo' || a.action=='stopvideo' || a.action=='togglevideo' || a.action=='mutevideo' || a.action=='unmutevideo' || a.action=='toggle_mute_video' || a.action=='toggle_global_mute_video')) {
						actionSwitches(tnc,opt,a,_nc);
				} else {
					punchgs.TweenLite.delayedCall(a.delay,function() {
						actionSwitches(tnc,opt,a,_nc);	
					},[tnc,opt,a,_nc]);
				}
			}
		});		
		switch (a.action) {					
			case "togglelayer":
			case "startlayer":
			case "playlayer":
			case "stoplayer":
				var tnc = jQuery("#"+a.layer);		
					if (tnc.data('start')!="bytrigger")	{
						tnc.data('triggerstate',"on");						
						tnc.data('animdirection',"in");						
					}	
			break;
		}
	})		
}


var actionSwitches = function(tnc,opt,a,_nc) {
	switch (a.action) {
		case "scrollbelow":		

			_nc.addClass("tp-scrollbelowslider");
			_nc.data('scrolloffset',a.offset);
			_nc.data('scrolldelay',a.delay);						
			var off=getOffContH(opt.fullScreenOffsetContainer) || 0,
				aof = parseInt(a.offset,0) || 0;									 
			off =  off - aof || 0;							
			jQuery('body,html').animate({scrollTop:(opt.c.offset().top+(jQuery(opt.li[0]).height())-off)+"px"},{duration:400});																											
		break;
		case "callback":
			eval(a.callback);							
		break;
		case "jumptoslide":	
			switch (a.slide.toLowerCase()) {
				case "+1":
				case "next":
					opt.sc_indicator="arrow";
					_R.callingNewSlide(opt,opt.c,1);					
				break;
				case "previous":
				case "prev":
				case "-1":									
					opt.sc_indicator="arrow";
					_R.callingNewSlide(opt,opt.c,-1);																		
				break;
				default:
					var ts = jQuery.isNumeric(a.slide) ?  parseInt(a.slide,0) : a.slide;
					_R.callingNewSlide(opt,opt.c,ts);									
				break;
			}												
		break;
		case "simplelink":						
			window.open(a.url,a.target);
		break;
		case "toggleslider":
			opt.noloopanymore=0;								
			if (opt.sliderstatus=="playing") {
				opt.c.revpause();
				opt.forcepause_viatoggle = true;
				_R.unToggleState(opt.slidertoggledby);
			}
			else {
				opt.forcepause_viatoggle = false;
				opt.c.revresume();	
				_R.toggleState(opt.slidertoggledby);							
			}
		break;
		case "pauseslider":								
			opt.c.revpause();	
			_R.unToggleState(opt.slidertoggledby);						
		break;
		case "playslider":			
			opt.noloopanymore=0;					
			opt.c.revresume();	
			_R.toggleState(opt.slidertoggledby);				
		break;
		case "playvideo":		
			
			if (tnc.length>0)													
				_R.playVideo(tnc,opt);									
		break;
		case "stopvideo":						
			if (tnc.length>0)										
				if (_R.stopVideo) _R.stopVideo(tnc,opt);									
		break;
		case "togglevideo":
			if (tnc.length>0) 										
				if (!_R.isVideoPlaying(tnc,opt))
					_R.playVideo(tnc,opt);
				else
					if (_R.stopVideo) _R.stopVideo(tnc,opt);		
		break;
		case "mutevideo":							
			if (tnc.length>0)									
				_R.muteVideo(tnc,opt);									
		break;
		case "unmutevideo":						
			if (tnc.length>0)										
				if (_R.unMuteVideo) _R.unMuteVideo(tnc,opt);									
		break;
		case "toggle_mute_video":
			
			if (tnc.length>0) 		
				if (_R.isVideoMuted(tnc,opt)) {
					_R.unMuteVideo(tnc,opt);			
				} else {
					if (_R.muteVideo) _R.muteVideo(tnc,opt);					
				}
			_nc.toggleClass('rs-toggle-content-active');
		break;
		case "toggle_global_mute_video":
		    if (_nc.hasClass("rs-toggle-content-active")) {
		    	opt.globalmute = false;				    	
		    	if (opt.playingvideos != undefined && opt.playingvideos.length>0) {			
					jQuery.each(opt.playingvideos,function(i,_nc) {							
						if (_R.unMuteVideo) _R.unMuteVideo(_nc,opt);
					});
				}
			 	
		    } else {
		    	opt.globalmute = true;			    	
		    	if (opt.playingvideos != undefined && opt.playingvideos.length>0) {			
					jQuery.each(opt.playingvideos,function(i,_nc) {									
						if (_R.muteVideo) _R.muteVideo(_nc,opt);
					});
				}			 	
		    }			
			_nc.toggleClass('rs-toggle-content-active');
		break;
		case "simulateclick":
			if (tnc.length>0) tnc.click();										
		break;
		case "toggleclass":
			if (tnc.length>0) 								
				if (!tnc.hasClass(a.classname))
					tnc.addClass(a.classname);
				else
					tnc.removeClass(a.classname);									
		break;
		case "gofullscreen":
		case "exitfullscreen":
		case "togglefullscreen":
			
			if (jQuery('#rs-go-fullscreen').length>0 && (a.action=="togglefullscreen" || a.action=="exitfullscreen")) {
				jQuery('#rs-go-fullscreen').appendTo(jQuery('#rs-was-here'));
				var paw = opt.c.closest('.forcefullwidth_wrapper_tp_banner').length>0 ? opt.c.closest('.forcefullwidth_wrapper_tp_banner') : opt.c.closest('.rev_slider_wrapper');
				paw.unwrap();
				paw.unwrap();
				opt.minHeight  = opt.oldminheight;
				opt.infullscreenmode = false;
				opt.c.revredraw();	
				if (opt.playingvideos != undefined && opt.playingvideos.length>0) {			
					jQuery.each(opt.playingvideos,function(i,_nc) {									
						_R.playVideo(_nc,opt);
					});
				}
				_R.unToggleState(opt.fullscreentoggledby);

			} else 
			if (jQuery('#rs-go-fullscreen').length==0 && (a.action=="togglefullscreen" || a.action=="gofullscreen")) {
				var paw = opt.c.closest('.forcefullwidth_wrapper_tp_banner').length>0 ? opt.c.closest('.forcefullwidth_wrapper_tp_banner') : opt.c.closest('.rev_slider_wrapper');
				paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>');
				var gf = jQuery('#rs-go-fullscreen');
				gf.appendTo(jQuery('body'));
				gf.css({position:'fixed',width:'100%',height:'100%',top:'0px',left:'0px',zIndex:'9999999',background:'#ffffff'});
				opt.oldminheight = opt.minHeight;
				opt.minHeight = jQuery(window).height();							
				opt.infullscreenmode = true;
				opt.c.revredraw();	
				if (opt.playingvideos != undefined && opt.playingvideos.length>0) {			
					jQuery.each(opt.playingvideos,function(i,_nc) {									
						_R.playVideo(_nc,opt);
					});
				}	
				_R.toggleState(opt.fullscreentoggledby);						
			}	
			
		break;
	}
}

var getOffContH = function(c) {
	if (c==undefined) return 0;		
	if (c.split(',').length>1) {
		oc = c.split(",");
		var a =0;
		if (oc)
			jQuery.each(oc,function(index,sc) {
				if (jQuery(sc).length>0)
					a = a + jQuery(sc).outerHeight(true);							
			});
		return a;
	} else {
		return jQuery(c).height();
	}
	return 0;
}

})(jQuery);;/********************************************
 * REVOLUTION 5.0 EXTENSION - CAROUSEL
 * @version: 1.0.2 (01.10.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
(function($) {

var _R = jQuery.fn.revolution;

	///////////////////////////////////////////
	// 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
	///////////////////////////////////////////
jQuery.extend(true,_R, {

	// CALCULATE CAROUSEL POSITIONS
	prepareCarousel : function(opt,a,direction) {	

		direction = opt.carousel.lastdirection = dircheck(direction,opt.carousel.lastdirection);		
		setCarouselDefaults(opt);	
			
		opt.carousel.slide_offset_target = getActiveCarouselOffset(opt);
		
		if (a==undefined) 	
			_R.carouselToEvalPosition(opt,direction);		
		else 	
			animateCarousel(opt,direction,false);	
			
	},

	// MOVE FORWARDS/BACKWARDS DEPENDING ON THE OFFSET TO GET CAROUSEL IN EVAL POSITION AGAIN
	carouselToEvalPosition : function(opt,direction) {
		
		var _ = opt.carousel;
		direction = _.lastdirection = dircheck(direction,_.lastdirection);		
		
		var bb = _.horizontal_align==="center" ? ((_.wrapwidth/2-_.slide_width/2) - _.slide_globaloffset) / _.slide_width : (0 - _.slide_globaloffset) / _.slide_width,
			fi = _R.simp(bb,opt.slideamount,false);		
		
		var cm = fi - Math.floor(fi),
			calc = 0,
			mc = -1 * (Math.ceil(fi) - fi),
			mf = -1 * (Math.floor(fi) - fi);
			
		calc = cm>=0.3 && direction==="left" || cm>=0.7 && direction==="right" ?  mc : cm<0.3 && direction==="left" || cm<0.7 && direction==="right" ? mf : calc;
		calc = _.infinity==="off" ?  fi<0 ? fi : bb>opt.slideamount-1 ? bb-(opt.slideamount-1) : calc : calc;

		_.slide_offset_target = calc * _.slide_width;
		// LONGER "SMASH" +/- 1 to Calc
		
		if (Math.abs(_.slide_offset_target) !==0) 
			animateCarousel(opt,direction,true);
		else {
			_R.organiseCarousel(opt,direction);				
		}	
	},

	// ORGANISE THE CAROUSEL ELEMENTS IN POSITION AND TRANSFORMS
	organiseCarousel : function(opt,direction,setmaind,unli) {	

		direction = direction === undefined  || direction=="down" || direction=="up" || direction===null || jQuery.isEmptyObject(direction) ? "left" : direction;
		var _ = opt.carousel,
			slidepositions = new Array(),
			len = _.slides.length,
			leftlimit = _.horizontal_align ==="right" ? leftlimit = opt.width : 0;
		

		for (var i=0;i<len;i++) {					
			var pos = (i * _.slide_width) + _.slide_offset;	
			if (_.infinity==="on") {						
				pos = pos>_.wrapwidth-_.inneroffset && direction=="right" ? _.slide_offset - ((_.slides.length-i)*_.slide_width) : pos;			
				pos = pos<0-_.inneroffset-_.slide_width && direction=="left" ? pos + _.maxwidth : pos;									
			}
			slidepositions[i] = pos;			
		}
		var maxd = 999;

		// SECOND RUN FOR NEGATIVE ADJUSTMENETS
		if (_.slides)
		 jQuery.each(_.slides,function(i,slide) {		
			var pos = slidepositions[i];		
			if (_.infinity==="on") {	

				pos = pos>_.wrapwidth-_.inneroffset && direction==="left" ? slidepositions[0] - ((len-i)*_.slide_width) : pos;
				pos = pos<0-_.inneroffset-_.slide_width ? direction=="left" ? pos + _.maxwidth :  direction==="right" ? slidepositions[len-1] + ((i+1)*_.slide_width) : pos : pos;			
			}

			var tr= new Object();	

			tr.left = pos + _.inneroffset;

			// CHCECK DISTANCES FROM THE CURRENT FAKE FOCUS POSITION
			var d =  _.horizontal_align==="center" ? (Math.abs(_.wrapwidth/2) - (tr.left+_.slide_width/2))/_.slide_width : (_.inneroffset - tr.left)/_.slide_width,
				offsdir = d<0 ? -1:1,
				ha = _.horizontal_align==="center" ? 2 : 1;
			 	
					
			if ((setmaind && Math.abs(d)<maxd) || d===0) {	
				maxd = Math.abs(d);				
				_.focused = i;		
			}	
									
			tr.width =_.slide_width;
			tr.x = 0;		
			tr.transformPerspective = 1200;
			tr.transformOrigin = "50% "+_.vertical_align;
					
			// SET VISIBILITY OF ELEMENT		
			if (_.fadeout==="on") 			
				if (_.vary_fade==="on")
					tr.autoAlpha = 1-Math.abs(((1/Math.ceil(_.maxVisibleItems/ha))*d))
				else 
					switch(_.horizontal_align) {
						case "center":
							tr.autoAlpha = Math.abs(d)<Math.ceil((_.maxVisibleItems/ha)-1) ? 1 : 1-(Math.abs(d)-Math.floor(Math.abs(d)));
						break;
						case "left":
							tr.autoAlpha = d<1 &&  d>0 ?  1-d : Math.abs(d)>_.maxVisibleItems-1 ? 1- (Math.abs(d)-(_.maxVisibleItems-1)) : 1;
						break;
						case "right":
							tr.autoAlpha = d>-1 &&  d<0 ?  1-Math.abs(d) : d>_.maxVisibleItems-1 ? 1- (Math.abs(d)-(_.maxVisibleItems-1)) : 1;
						break;
					}
			else
				tr.autoAlpha = Math.abs(d)<Math.ceil((_.maxVisibleItems/ha)) ? 1 : 0;

				
			
			// SET SCALE DOWNS 
			if (_.minScale!==undefined && _.minScale >0) {
				if (_.vary_scale==="on") {
					tr.scale = 1- Math.abs(((_.minScale/100/Math.ceil(_.maxVisibleItems/ha))*d));
					var sx = (_.slide_width - (_.slide_width*tr.scale))  *Math.abs(d);				
				} else {				
					tr.scale = d>=1 || d<=-1 ? 1 - _.minScale/100 : (100-( _.minScale*Math.abs(d)))/100;				
					var sx=(_.slide_width - (_.slide_width*(1 - _.minScale/100)))*Math.abs(d);				
				}
			}

			// ROTATION FUNCTIONS		
			if (_.maxRotation!==undefined && Math.abs(_.maxRotation)!=0)	{	
				if (_.vary_rotation  ==="on") {
					tr.rotationY = Math.abs(_.maxRotation) - Math.abs((1-Math.abs(((1/Math.ceil(_.maxVisibleItems/ha))*d))) * _.maxRotation);						
					tr.autoAlpha = Math.abs(tr.rotationY)>90 ? 0 : tr.autoAlpha;
				} else {
					tr.rotationY = d>=1 || d<=-1 ?  _.maxRotation : Math.abs(d)*_.maxRotation;
				}
				tr.rotationY = d<0 ? tr.rotationY*-1 : tr.rotationY;
			}

			// SET SPACES BETWEEN ELEMENTS
			tr.x = (-1*_.space) * d;	

			tr.left = Math.floor(tr.left);
			tr.x = Math.floor(tr.x);
			
			// ADD EXTRA SPACE ADJUSTEMENT IF COVER MODE IS SELECTED		
			 tr.scale !== undefined ? d<0 ? tr.x-sx :tr.x+sx : tr.x;

			// ZINDEX ADJUSTEMENT
			tr.zIndex = Math.round(100-Math.abs(d*5));
			
			// TRANSFORM STYLE			
			tr.transformStyle = opt.parallax.type!="3D" && opt.parallax.type!="3d" ? "flat" : "preserve-3d";
			


			// ADJUST TRANSFORMATION OF SLIDE
			punchgs.TweenLite.set(slide,tr);				
		});	
		
		if (unli) {
			opt.c.find('.next-revslide').removeClass("next-revslide");
			jQuery(_.slides[_.focused]).addClass("next-revslide");
			opt.c.trigger("revolution.nextslide.waiting");
		}	

		var ll = _.wrapwidth/2 - _.slide_offset ,
			rl = _.maxwidth+_.slide_offset-_.wrapwidth/2;			
	}	
		
});

/**************************************************
	-	CAROUSEL FUNCTIONS   -
***************************************************/

var defineCarouselElements = function(opt) {
	var _ = opt.carousel;

	_.infbackup = _.infinity;
	_.maxVisiblebackup = _.maxVisibleItems;
	// SET DEFAULT OFFSETS TO 0
	_.slide_globaloffset = "none";
	_.slide_offset = 0; 	
	// SET UL REFERENCE
	_.wrap = opt.c.find('.tp-carousel-wrapper');	
	// COLLECT SLIDES
	_.slides = opt.c.find('.tp-revslider-slidesli');

	// SET PERSPECTIVE IF ROTATION IS ADDED
	if (_.maxRotation!==0) 
		if (opt.parallax.type!="3D" && opt.parallax.type!="3d") 
			punchgs.TweenLite.set(_.wrap,{perspective:1200,transformStyle:"flat"});
		else
			punchgs.TweenLite.set(_.wrap,{perspective:1600,transformStyle:"preserve-3d"});

	if (_.border_radius!==undefined && parseInt(_.border_radius,0) >0) {
		punchgs.TweenLite.set(opt.c.find('.tp-revslider-slidesli'),{borderRadius:_.border_radius});
	}		
}

var setCarouselDefaults = function(opt) {	
	
	if (opt.bw===undefined) _R.setSize(opt);
	var _=opt.carousel,
		loff = _R.getHorizontalOffset(opt.c,"left"),
		roff = _R.getHorizontalOffset(opt.c,"right");		

	// IF NO DEFAULTS HAS BEEN DEFINED YET
	if (_.wrap===undefined) defineCarouselElements(opt);	
	// DEFAULT LI WIDTH SHOULD HAVE THE SAME WIDTH OF TH OPT WIDTH
	_.slide_width = _.stretch!=="on" ? opt.gridwidth[opt.curWinRange]*opt.bw : opt.c.width();		

	// CALCULATE CAROUSEL WIDTH
	_.maxwidth = opt.slideamount*_.slide_width;
	if (_.maxVisiblebackup>_.slides.length+1) 
		_.maxVisibleItems = _.slides.length+2;
	
	// SET MAXIMUM CAROUSEL WARPPER WIDTH (SHOULD BE AN ODD NUMBER)	
	_.wrapwidth = (_.maxVisibleItems * _.slide_width) + ((_.maxVisibleItems - 1) * _.space);	
	_.wrapwidth = opt.sliderLayout!="auto" ? 
		_.wrapwidth>opt.c.closest('.tp-simpleresponsive').width() ? opt.c.closest('.tp-simpleresponsive').width() : _.wrapwidth : 
		_.wrapwidth>opt.ul.width() ? opt.ul.width() : _.wrapwidth;
	

	// INFINITY MODIFICATIONS		
	_.infinity = _.wrapwidth >=_.maxwidth ? "off" : _.infbackup;
			
	
	// SET POSITION OF WRAP CONTAINER		
	_.wrapoffset = _.horizontal_align==="center" ? (opt.c.width()-roff - loff - _.wrapwidth)/2 : 0;	
	_.wrapoffset = opt.sliderLayout!="auto" && opt.outernav ? 0 : _.wrapoffset < loff ? loff : _.wrapoffset;
	
	var ovf = "hidden";
	if ((opt.parallax.type=="3D" || opt.parallax.type=="3d"))
		ovf = "visible";

	
	
	if (_.horizontal_align==="right")	
		punchgs.TweenLite.set(_.wrap,{left:"auto",right:_.wrapoffset+"px", width:_.wrapwidth, overflow:ovf});
	else
		punchgs.TweenLite.set(_.wrap,{right:"auto",left:_.wrapoffset+"px", width:_.wrapwidth, overflow:ovf});



	// INNER OFFSET FOR RTL
	_.inneroffset = _.horizontal_align==="right" ? _.wrapwidth - _.slide_width : 0;
	
	// THE REAL OFFSET OF THE WRAPPER
	_.realoffset = (Math.abs(_.wrap.position().left)); // + opt.c.width()/2);
	
	// THE SCREEN WIDTH/2
	_.windhalf = jQuery(window).width()/2;			

	

}


// DIRECTION CHECK
var dircheck = function(d,b) {		
	return d===null || jQuery.isEmptyObject(d) ? b : d === undefined ?  "right" : d;;
}

// ANIMATE THE CAROUSEL WITH OFFSETS
var animateCarousel = function(opt,direction,nsae) {
	var _ = opt.carousel;
	direction = _.lastdirection = dircheck(direction,_.lastdirection);		
	
	var animobj = new Object();	
	animobj.from = 0;
	animobj.to = _.slide_offset_target;
	if (_.positionanim!==undefined)
		_.positionanim.pause();
	_.positionanim = punchgs.TweenLite.to(animobj,1.2,{from:animobj.to,
		onUpdate:function() {					
			_.slide_offset = _.slide_globaloffset + animobj.from;
			_.slide_offset = _R.simp(_.slide_offset , _.maxwidth);
			_R.organiseCarousel(opt,direction,false,false);												
		},
		onComplete:function() {	
			
			_.slide_globaloffset = _.infinity==="off" ? _.slide_globaloffset + _.slide_offset_target : _R.simp(_.slide_globaloffset + _.slide_offset_target, _.maxwidth);
			_.slide_offset = _R.simp(_.slide_offset , _.maxwidth);
			
			_R.organiseCarousel(opt,direction,false,true);	
			var li = jQuery(opt.li[_.focused]);	
			opt.c.find('.next-revslide').removeClass("next-revslide");
			if (nsae) _R.callingNewSlide(opt,opt.c,li.data('index'));
		}, ease:punchgs.Expo.easeOut});	
}


var breduc = function(a,m) {	
	return Math.abs(a)>Math.abs(m) ? a>0 ? a - Math.abs(Math.floor(a/(m))*(m)) : a + Math.abs(Math.floor(a/(m))*(m)) : a;
}

// CAROUSEL INFINITY MODE, DOWN OR UP ANIMATION
var getBestDirection = function(a,b,max) {		
		var dira = b-a,max,
			dirb = (b-max) - a,max;						
		dira = breduc(dira,max);
		dirb = breduc(dirb,max);		
		return Math.abs(dira)>Math.abs(dirb) ? dirb : dira;
	}

// GET OFFSETS BEFORE ANIMATION
var getActiveCarouselOffset = function(opt) {
	var ret = 0,
		_ = opt.carousel;
	
	if (_.positionanim!==undefined) _.positionanim.kill();					

	if (_.slide_globaloffset=="none") 
		_.slide_globaloffset = ret = _.horizontal_align==="center" ? (_.wrapwidth/2-_.slide_width/2) : 0;									
	
	else {
		
		_.slide_globaloffset = _.slide_offset;
		_.slide_offset = 0;
		var ci = opt.c.find('.processing-revslide').index(),
			fi = _.horizontal_align==="center" ? ((_.wrapwidth/2-_.slide_width/2) - _.slide_globaloffset) / _.slide_width : (0 - _.slide_globaloffset) / _.slide_width;				

		fi = _R.simp(fi,opt.slideamount,false);		
		ci = ci>=0 ? ci : opt.c.find('.active-revslide').index(); 
		ci = ci>=0 ? ci : 0;		
		
		ret = _.infinity==="off" ? fi-ci : -getBestDirection(fi,ci,opt.slideamount);				
		ret = ret *  _.slide_width;	
	}	
	return ret; 		
}
	
})(jQuery);;/********************************************
 * REVOLUTION 5.0 EXTENSION - KEN BURN
 * @version: 1.0.0 (03.08.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/

(function($) {

var _R = jQuery.fn.revolution;

///////////////////////////////////////////
// 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
///////////////////////////////////////////
jQuery.extend(true,_R, {

	stopKenBurn : function(l) {			
		if (l.data('kbtl')!=undefined)			
		l.data('kbtl').pause();				
	},

	startKenBurn :  function(l,opt,prgs) {			
		var d = l.data(),
			i = l.find('.defaultimg'),
			s = i.data('lazyload') || i.data('src'),
			i_a = d.owidth / d.oheight,
			cw = opt.sliderType==="carousel" ?  opt.carousel.slide_width : opt.ul.width(),
			ch = opt.ul.height(),
			c_a = cw / ch;

		
		if (l.data('kbtl'))
			l.data('kbtl').kill();
		

		prgs = prgs || 0;



		
		// NO KEN BURN IMAGE EXIST YET
		if (l.find('.tp-kbimg').length==0) {
			l.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="'+s+'" style="position:absolute;" width="'+d.owidth+'" height="'+d.oheight+'"></div>');
			l.data('kenburn',l.find('.tp-kbimg'));
		}

		var getKBSides = function(w,h,f,cw,ch,ho,vo) {			
					var tw = w * f,
						th = h * f,
						hd = Math.abs(cw-tw),
						vd = Math.abs(ch-th),
						s = new Object();
					s.l = (0-ho)*hd;
					s.r = s.l + tw;			
					s.t = (0-vo)*vd;
					s.b = s.t + th;	
					s.h = ho;
					s.v = vo;
					return s;
				},

			getKBCorners = function(d,cw,ch,ofs,o) {

				var p = d.bgposition.split(" ") || "center center",
					ho = p[0] == "center"  ? "50%" : p[0] == "left" || p [1] == "left" ? "0%" : p[0]=="right" || p[1] =="right" ? "100%" : p[0],
					vo = p[1] == "center" ? "50%" : p[0] == "top" || p [1] == "top" ? "0%" : p[0]=="bottom" || p[1] =="bottom" ? "100%" : p[1];
				
				ho = parseInt(ho,0)/100 || 0;
				vo = parseInt(vo,0)/100 || 0;


				var sides = new Object();


				sides.start = getKBSides(o.start.width,o.start.height,o.start.scale,cw,ch,ho,vo);
				sides.end = getKBSides(o.start.width,o.start.height,o.end.scale,cw,ch,ho,vo);
							
				return sides;	
			},

			kcalcL = function(cw,ch,d) {				
				var f=d.scalestart/100,
					fe=d.scaleend/100,
					ofs = d.oofsetstart != undefined ? d.offsetstart.split(" ") || [0,0] : [0,0],
					ofe = d.offsetend != undefined ? d.offsetend.split(" ") || [0,0] : [0,0];
				d.bgposition = d.bgposition == "center center" ? "50% 50%" : d.bgposition;
				
				
				var o = new Object(),
					sw = cw*f,
					sh = sw/d.owidth * d.oheight,
					ew = cw*fe,
					eh = ew/d.owidth * d.oheight;		


				
				o.start = new Object();		
				o.starto = new Object();
				o.end = new Object();
				o.endo = new Object();
				
				o.start.width = cw;
				o.start.height = o.start.width / d.owidth * d.oheight;		

				if (o.start.height<ch) {
					var newf = ch / o.start.height;
					o.start.height = ch;
					o.start.width = o.start.width*newf;
				}
				o.start.transformOrigin = d.bgposition;					
				o.start.scale = f;	
				o.end.scale = fe;

				o.start.rotation = d.rotatestart+"deg";
				o.end.rotation = d.rotateend+"deg";		
				
				// MAKE SURE THAT OFFSETS ARE NOT TOO HIGH
				var c = getKBCorners(d,cw,ch,ofs,o);


				ofs[0] = parseFloat(ofs[0]) + c.start.l;
				ofe[0] = parseFloat(ofe[0]) + c.end.l;
				
				ofs[1] = parseFloat(ofs[1]) + c.start.t;			
				ofe[1] = parseFloat(ofe[1]) + c.end.t;
					
				var iws = c.start.r - c.start.l,
					ihs	= c.start.b - c.start.t,
					iwe = c.end.r - c.end.l,
					ihe	= c.end.b - c.end.t;
						
				ofs[0] = ofs[0]>0 ? 0 : iws + ofs[0] < cw ? cw-iws : ofs[0];
				ofe[0] = ofe[0]>0 ? 0 : iwe + ofe[0] < cw ? cw-iwe : ofe[0];
				
				ofs[1] = ofs[1]>0 ? 0 : ihs + ofs[1] < ch ? ch-ihs : ofs[1];
				ofe[1] = ofe[1]>0 ? 0 : ihe + ofe[1] < ch ? ch-ihe : ofe[1];

				

				o.starto.x = ofs[0]+"px";
				o.starto.y = ofs[1]+"px";
				o.endo.x = ofe[0]+"px";
				o.endo.y = ofe[1]+"px";				
				o.end.ease = o.endo.ease = d.ease;
				o.end.force3D = o.endo.force3D = true;
				return o;
			};
		
		if (l.data('kbtl')!=undefined) {
			l.data('kbtl').kill();
			l.removeData('kbtl');
		}

		var k = l.data('kenburn'),
			kw = k.parent(),
			anim = kcalcL(cw,ch,d),
			kbtl =  new punchgs.TimelineLite();
		
		
		kbtl.pause();
		
		anim.start.transformOrigin = "0% 0%";
		anim.starto.transformOrigin = "0% 0%";	

		kbtl.add(punchgs.TweenLite.fromTo(k,d.duration/1000,anim.start,anim.end),0);
		kbtl.add(punchgs.TweenLite.fromTo(kw,d.duration/1000,anim.starto,anim.endo),0);
			
		kbtl.progress(prgs);
		kbtl.play();	
		
		l.data('kbtl',kbtl);														
	}		
});

})(jQuery);;/************************************************
 * REVOLUTION 5.2 EXTENSION - LAYER ANIMATION
 * @version: 2.2.1 (23.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/

(function($) {

var _R = jQuery.fn.revolution,
	_ISM = _R.is_mobile();

///////////////////////////////////////////
// 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
///////////////////////////////////////////
jQuery.extend(true,_R, {

	// MAKE SURE THE ANIMATION ENDS WITH A CLEANING ON MOZ TRANSFORMS
 	animcompleted : function(_nc,opt) {			
		var t = _nc.data('videotype'),
			ap = _nc.data('autoplay'),
			an = _nc.data('autoplayonlyfirsttime');

		
		if (t!=undefined && t!="none")
		 if (ap==true || ap=="true" || ap=="on" ||  ap=="1sttime" || an) {				
			_R.playVideo(_nc,opt);	

			_R.toggleState(_nc.data('videotoggledby'));
			if ( an || ap=="1sttime") {
				_nc.data('autoplayonlyfirsttime',false);
				_nc.data('autoplay',"off");
			}
		  }	else {
			  if (ap=="no1sttime") 
				_nc.data('autoplay','on');
			  _R.unToggleState(_nc.data('videotoggledby'));
		  }

	},

	/********************************************************
		-	PREPARE AND DEFINE STATIC LAYER DIRECTIONS -
	*********************************************************/
	handleStaticLayers : function(_nc,opt) {
		var s = parseInt(_nc.data('startslide'),0),
			e = parseInt(_nc.data('endslide'),0);
		if (s < 0)
			s=0;
		if (e <0 )
			e = opt.slideamount;
		if (s===0 && e===opt.slideamount-1)
			e = opt.slideamount+1;
		_nc.data('startslide',s);
		_nc.data('endslide',e);		
	},

	/************************************ 
		ANIMATE ALL CAPTIONS 
	*************************************/	
	animateTheCaptions : function(nextli, opt,recalled,mtl) {		
		var base_offsetx = opt.sliderType==="carousel" ? 0 : opt.width/2 - (opt.gridwidth[opt.curWinRange]*opt.bw)/2,
			base_offsety=0,
			index = nextli.data('index');


		opt.layers = opt.layers || new Object();
		opt.layers[index] = opt.layers[index] || nextli.find('.tp-caption')		
		opt.layers["static"] = opt.layers["static"] || opt.c.find('.tp-static-layers').find('.tp-caption');
			
		var allcaptions = new Array;

		opt.conh = opt.c.height();
		opt.conw = opt.c.width();
		opt.ulw = opt.ul.width();
		opt.ulh = opt.ul.height();



		/* ENABLE DEBUG MODE */
		if (opt.debugMode) {
			nextli.addClass("indebugmode");
			nextli.find('.helpgrid').remove();	
			opt.c.find('.hglayerinfo').remove();	
			nextli.append('<div class="helpgrid" style="width:'+(opt.gridwidth[opt.curWinRange]*opt.bw)+'px;height:'+(opt.gridheight[opt.curWinRange]*opt.bw)+'px;"></div>');
			var hg = nextli.find('.helpgrid');
			hg.append('<div class="hginfo">Zoom:'+(Math.round(opt.bw*100))+'% &nbsp;&nbsp;&nbsp; Device Level:'+opt.curWinRange+'&nbsp;&nbsp;&nbsp; Grid Preset:'+opt.gridwidth[opt.curWinRange]+'x'+opt.gridheight[opt.curWinRange]+'</div>')
			opt.c.append('<div class="hglayerinfo"></div>')
			hg.append('<div class="tlhg"></div>');
		}

		if (allcaptions)
			jQuery.each(allcaptions,function(i) {
				var _nc = jQuery(this);
				punchgs.TweenLite.set(_nc.find('.tp-videoposter'),{autoAlpha:1});
				punchgs.TweenLite.set(_nc.find('iframe'),{autoAlpha:0});
			})
		
		// COLLECT ALL CAPTIONS
		if (opt.layers[index])
			jQuery.each(opt.layers[index], function(i,a) { allcaptions.push(a); });
		if (opt.layers["static"])
			jQuery.each(opt.layers["static"], function(i,a) { allcaptions.push(a); });

		// GO THROUGH ALL CAPTIONS, AND MANAGE THEM
		if (allcaptions)
			jQuery.each(allcaptions,function(i) {	
				_R.animateSingleCaption(jQuery(this),opt,base_offsetx,base_offsety,i,recalled)
			}); 

		var bt=jQuery('body').find('#'+opt.c.attr('id')).find('.tp-bannertimer');
		bt.data('opt',opt);
		

		if (mtl != undefined) setTimeout(function() {			
			mtl.resume();
		},30);
	},

	/***************************************
		-	ANIMATE THE CAPTIONS   -
	***************************************/
	animateSingleCaption : function(_nc,opt,offsetx,offsety,i,recalled,triggerforce) {
		
		var internrecalled = recalled,
	    	staticdirection = staticLayerStatus(_nc,opt,"in",true),				
			_pw = _nc.data('_pw') || _nc.closest('.tp-parallax-wrap'),
			_lw = _nc.data('_lw') || _nc.closest('.tp-loop-wrap'),
			_mw = _nc.data('_mw') || _nc.closest('.tp-mask-wrap'),
			_responsive  = _nc.data('responsive') || "on",
			_respoffset  = _nc.data('responsive_offset') || "on",
			_ba = _nc.data('basealign') || "grid",				
			_gw = _ba==="grid" ? opt.width : opt.ulw, //opt.conw,
			_gh = _ba==="grid" ? opt.height : opt.ulh,  //opt.conh;
			rtl = jQuery('body').hasClass("rtl"); 

		

		if (!_nc.data('_pw')) {
			if (_nc.data('staticlayer'))
				_nc.data('_li',_nc.closest('.tp-static-layers'));
			else
				_nc.data('_li',_nc.closest('.tp-revslider-slidesli'));
			_nc.data('slidelink',_nc.hasClass("slidelink"));
			_nc.data('_pw',_pw);
			_nc.data('_lw',_lw);
			_nc.data('_mw',_mw);
		}

		if (opt.sliderLayout=="fullscreen") 
			offsety = _gh/2 - (opt.gridheight[opt.curWinRange]*opt.bh)/2;

		if (opt.autoHeight=="on" || (opt.minHeight!=undefined && opt.minHeight>0))
			  offsety = opt.conh/2 - (opt.gridheight[opt.curWinRange]*opt.bh)/2;;

		if (offsety<0) offsety=0;


		
		// LAYER GRID FOR DEBUGGING
		if (opt.debugMode) {
			_nc.closest('li').find('.helpgrid').css({top:offsety+"px", left:offsetx+"px"}); 
			var linfo = opt.c.find('.hglayerinfo');
			_nc.on("hover, mouseenter",function() {
				var ltxt = "",
					spa = 0;
				if (_nc.data())
					jQuery.each(_nc.data(),function(key,val) {
						if (typeof val !== "object") {
								
								ltxt = ltxt + '<span style="white-space:nowrap"><span style="color:#27ae60">'+key+":</span>"+val+"</span>&nbsp; &nbsp; ";
							
						}
					});
				linfo.html(ltxt);
			});
		}
		/* END OF DEBUGGING */

			
		var handlecaption=0,
			layervisible =  makeArray(_nc.data('visibility'),opt)[opt.forcedWinRange] || makeArray(_nc.data('visibility'),opt) || "on";
		
		

		// HIDE CAPTION IF RESOLUTION IS TOO LOW			
		if (layervisible=="off" || (_gw<opt.hideCaptionAtLimit && _nc.data('captionhidden')=="on") || (_gw<opt.hideAllCaptionAtLimit)) 
			_nc.addClass("tp-hidden-caption");											
		else
			_nc.removeClass("tp-hidden-caption")


		
		_nc.data('layertype',"html");

		if (offsetx<0) offsetx=0;

		// FALL BACK TO NORMAL IMAGES
		if (_nc.data('thumbimage')!=undefined && _nc.data('videoposter')==undefined)
				_nc.data('videoposter',_nc.data('thumbimage'))
				
		// FALL BACK TO NORMAL IMAGE IF NO VIDEO SHOULD BE PLAYED ON MOBILE DEVICES
	/*	if (_nc.hasClass("tp-videolayer") &&  _nc.data('videoposter')!=undefined && (_nc.data('noposteronmobile')=="on" && _ISM)) {			
			var vidw =  makeArray(_nc.data('videowidth'),opt)[opt.curWinRange] || makeArray(_nc.data('videowidth'),opt) || "auto",
				vidh =  makeArray(_nc.data('videoheight'),opt)[opt.curWinRange] || makeArray(_nc.data('videoheight'),opt) || "auto";					
			
			vidw = parseFloat(ww),
			vidh = parseFloat(hh);
			
			_nc.append('<div class="tp-videoposter" style="position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+_nc.data('videoposter')+'); background-size:cover;background-position:center center;"></div>');
			if (vidw!="100%") 
				_nc.css({minWidth:vidw+"px",minHeight:vidh+"px"});
			else 
				_nc.css({width:"100%",height:"100%"});										
			_nc.removeClass("tp-videolayer");							
		}*/
																				
		// IF IT IS AN IMAGE
		if (_nc.find('img').length>0) {
			var im = _nc.find('img');
			_nc.data('layertype',"image");
			if (im.width()==0) im.css({width:"auto"});
			if (im.height()==0) im.css({height:"auto"});


			

			if (im.data('ww') == undefined && im.width()>0) im.data('ww',im.width());
			if (im.data('hh') == undefined && im.height()>0) im.data('hh',im.height());

			var ww = im.data('ww'),
				hh = im.data('hh'),
				fuw = _ba =="slide" ? opt.ulw : opt.gridwidth[opt.curWinRange],
				fuh = _ba =="slide" ? opt.ulh : opt.gridheight[opt.curWinRange],
			
			ww =  makeArray(im.data('ww'),opt)[opt.curWinRange] || makeArray(im.data('ww'),opt) || "auto",
			hh =  makeArray(im.data('hh'),opt)[opt.curWinRange] || makeArray(im.data('hh'),opt) || "auto";
			
			var wful = ww==="full" || ww === "full-proportional",
				hful = hh==="full" || hh === "full-proportional";

			if (ww==="full-proportional") {
				var ow = im.data('owidth'),
					oh = im.data('oheight');				
				if (ow/fuw < oh/fuh) {
					ww = fuw;
					hh = oh*(fuw/ow);
				} else {
					hh = fuh;
					ww = ow*(fuh/oh);
				}				
			} else {
				ww = wful ? fuw : parseFloat(ww);
				hh = hful ? fuh : parseFloat(hh);	
			}
			

			if (ww==undefined) ww=0;
			if (hh==undefined) hh=0;

			if (_responsive!=="off") {			
				
				if (_ba!="grid" && wful) 
					im.width(ww);
				else
					im.width(ww*opt.bw);
				if (_ba!="grid" && hful) 
					im.height(hh);					
				else
					im.height(hh*opt.bh);					
			} else {
				im.width(ww);
				im.height(hh);					
			}
		} 

		if (_ba==="slide") {
			offsetx = 0;
			offsety=0;
		}

		var tag = _nc.data('audio')=="html5" ? "audio" : "video";

		// IF IT IS A VIDEO LAYER
		if (_nc.hasClass("tp-videolayer") || _nc.hasClass("tp-audiolayer") || _nc.find('iframe').length>0 || _nc.find(tag).length>0) {

			_nc.data('layertype',"video");
			if (_R.manageVideoLayer) _R.manageVideoLayer(_nc,opt,recalled,internrecalled);				
			if (!recalled && !internrecalled) {
				var t = _nc.data('videotype');						
				if (_R.resetVideo) _R.resetVideo(_nc,opt);					
			}
			
			var asprat = _nc.data('aspectratio');														
			if (asprat!=undefined && asprat.split(":").length>1) 			
				_R.prepareCoveredVideo(asprat,opt,_nc);

			var im = _nc.find('iframe') ? _nc.find('iframe') : im = _nc.find(tag),
				html5vid = _nc.find('iframe') ? false : true,				
				yvcover = _nc.hasClass('coverscreenvideo');
									
			im.css({display:"block"});

			// SET WIDTH / HEIGHT 
			if (_nc.data('videowidth') == undefined) {
					_nc.data('videowidth',im.width());
					_nc.data('videoheight',im.height());
			}
			var ww =  makeArray(_nc.data('videowidth'),opt)[opt.curWinRange] || makeArray(_nc.data('videowidth'),opt) || "auto",
				hh =  makeArray(_nc.data('videoheight'),opt)[opt.curWinRange] || makeArray(_nc.data('videoheight'),opt) || "auto",
				getobj;

			ww = parseFloat(ww);
			hh = parseFloat(hh);
				
			
			// READ AND WRITE CSS SETTINGS OF IFRAME AND VIDEO FOR RESIZING ELEMENST ON DEMAND
			if (_nc.data('cssobj')===undefined) {									
				getobj = getcssParams(_nc,0);
				_nc.data('cssobj',getobj);
			} 

			var ncobj = setResponsiveCSSValues(_nc.data('cssobj'),opt);

									
			// IE8 FIX FOR AUTO LINEHEIGHT
			if (ncobj.lineHeight=="auto") ncobj.lineHeight = ncobj.fontSize+4;
						

			if (!_nc.hasClass('fullscreenvideo') && !yvcover) {
				
				punchgs.TweenLite.set(_nc,{							 						 
					 paddingTop: Math.round((ncobj.paddingTop * opt.bh)) + "px",
					 paddingBottom: Math.round((ncobj.paddingBottom * opt.bh)) + "px",
					 paddingLeft: Math.round((ncobj.paddingLeft* opt.bw)) + "px",
					 paddingRight: Math.round((ncobj.paddingRight * opt.bw)) + "px",
					 marginTop: (ncobj.marginTop * opt.bh) + "px",
					 marginBottom: (ncobj.marginBottom * opt.bh) + "px",
					 marginLeft: (ncobj.marginLeft * opt.bw) + "px",
					 marginRight: (ncobj.marginRight * opt.bw) + "px",
					 borderTopWidth: Math.round(ncobj.borderTopWidth * opt.bh) + "px",
					 borderBottomWidth: Math.round(ncobj.borderBottomWidth * opt.bh) + "px",
					 borderLeftWidth: Math.round(ncobj.borderLeftWidth * opt.bw) + "px",
					 borderRightWidth: Math.round(ncobj.borderRightWidth * opt.bw) + "px",	
					 width:(ww*opt.bw)+"px",						 
					 height:(hh*opt.bh)+"px"
				});
			} else  {
			   offsetx=0; offsety=0;
			   _nc.data('x',0)
			   _nc.data('y',0)

			   var ovhh = _gh;
			   if (opt.autoHeight=="on") ovhh = opt.conh
			   _nc.css({'width':_gw, 'height':ovhh });

			
			}
						
			if ((html5vid == false && !yvcover) || ((_nc.data('forcecover')!=1 && !_nc.hasClass('fullscreenvideo') && !yvcover))) {
				im.width(ww*opt.bw);
				im.height(hh*opt.bh);
			}					
		}	// END OF POSITION AND STYLE READ OUTS OF VIDEO

		
		var slidelink = _nc.data('slidelink') || false;
		
		// ALL WRAPPED REKURSIVE ELEMENTS SHOULD BE RESPONSIVE HANDLED
		_nc.find('.tp-resizeme, .tp-resizeme *').each(function() {
				calcCaptionResponsive(jQuery(this),opt,"rekursive",_responsive);
		});

		// ALL ELEMENTS IF THE MAIN ELEMENT IS REKURSIVE RESPONSIVE SHOULD BE REPONSIVE HANDLED
		if (_nc.hasClass("tp-resizeme")) 
			_nc.find('*').each(function() {
				calcCaptionResponsive(jQuery(this),opt,"rekursive",_responsive);
			});									

		// RESPONIVE HANDLING OF CURRENT LAYER
		calcCaptionResponsive(_nc,opt,0,_responsive);
		
		// _nc FRONTCORNER CHANGES
		var ncch = _nc.outerHeight(),
			bgcol = _nc.css('backgroundColor');
		sharpCorners(_nc,'.frontcorner','left','borderRight','borderTopColor',ncch,bgcol);
		sharpCorners(_nc,'.frontcornertop','left','borderRight','borderBottomColor',ncch,bgcol);
		sharpCorners(_nc,'.backcorner','right','borderLeft','borderBottomColor',ncch,bgcol);
		sharpCorners(_nc,'.backcornertop','right','borderLeft','borderTopColor',ncch,bgcol);


		if (opt.fullScreenAlignForce == "on") {
			offsetx=0;
			offsety=0;
		}
			
		var arrobj = _nc.data('arrobj');
		if (arrobj===undefined) {
			var arrobj = new Object();
			arrobj.voa = makeArray(_nc.data('voffset'),opt)[opt.curWinRange] || makeArray(_nc.data('voffset'),opt)[0];
			arrobj.hoa = makeArray(_nc.data('hoffset'),opt)[opt.curWinRange] || makeArray(_nc.data('hoffset'),opt)[0];
			arrobj.elx = makeArray(_nc.data('x'),opt)[opt.curWinRange] || makeArray(_nc.data('x'),opt)[0];
			arrobj.ely = makeArray(_nc.data('y'),opt)[opt.curWinRange] || makeArray(_nc.data('y'),opt)[0];					
		}

		
		// CORRECTION OF NEGATIVE VALUES FROM OLDER SLIDER
		//arrobj.voa = arrobj.ely==="bottom" ? arrobj.voa * -1 : arrobj.voa;
		//arrobj.hoa = arrobj.elx==="right" ? arrobj.hoa * -1 : arrobj.hoa;
							

		var voa = arrobj.voa.length==0 ? 0 : arrobj.voa,
			hoa = arrobj.hoa.length==0 ? 0 : arrobj.hoa,
			elx = arrobj.elx.length==0 ? 0 : arrobj.elx,
			ely = arrobj.ely.length==0 ? 0 : arrobj.ely,
			eow = _nc.outerWidth(true),
			eoh = _nc.outerHeight(true);

		
		// NEED CLASS FOR FULLWIDTH AND FULLHEIGHT LAYER SETTING !!
		if (eow==0 && eoh==0) {
			eow = opt.ulw;
			eoh = opt.ulh;
		}

		var  vofs= _respoffset !=="off" ? parseInt(voa,0)*opt.bw : parseInt(voa,0),			
			hofs= _respoffset !=="off" ? parseInt(hoa,0)*opt.bw : parseInt(hoa,0),
			crw = _ba==="grid" ? opt.gridwidth[opt.curWinRange]*opt.bw : _gw,
			crh = _ba==="grid" ? opt.gridheight[opt.curWinRange]*opt.bw : _gh;

					

		if (opt.fullScreenAlignForce == "on") {
			crw = opt.ulw;
			crh = opt.ulh;
		}
			
		
		// ALIGN POSITIONED ELEMENTS	
		
		
		elx = elx==="center" || elx==="middle" ? (crw/2 - eow/2) +  hofs : elx==="left" ? hofs : elx==="right" ? (crw - eow) - hofs : _respoffset !=="off"  ? elx * opt.bw : elx;
		ely = ely=="center" || ely=="middle" ? 	(crh/2 - eoh/2) + vofs : ely =="top" ? vofs : ely=="bottom" ? (crh - eoh)-vofs : _respoffset !=="off"  ? ely*opt.bw : ely;			
		
	
		if (rtl && !slidelink) 
			elx = elx + eow;
	
		if (slidelink)
			elx=0;
	
		// THE TRANSITIONS OF CAPTIONS
		// MDELAY AND MSPEED
												
		
		var $lts = _nc.data('lasttriggerstate'),
			$cts = _nc.data('triggerstate'),
			$start = _nc.data('start') != undefined ? _nc.data('start') : 100,		
			$end = _nc.data('end'),
			mdelay = triggerforce ? 0 : $start==="bytrigger" || $start==="sliderenter" ? 0 : parseFloat($start)/1000,
			calcx = (elx+offsetx),
			calcy = (ely+offsety),
			tpcapindex = _nc.css("z-Index");
						
		if (!triggerforce) 
			if ($lts=="reset" && $start!="bytrigger") {
				_nc.data("triggerstate","on");
				_nc.data('animdirection',"in");
				$cts = "on";
			}	else 
			if ($lts=="reset" && $start=="bytrigger") {				
				_nc.data("triggerstate","off");
				_nc.data('animdirection',"out");
				$cts = "off";			
			}  


		// SET TOP/LEFT POSITION OF LAYER
		punchgs.TweenLite.set(_pw,{zIndex:tpcapindex, top:calcy,left:calcx,overwrite:"auto"});

		if (staticdirection == 0) internrecalled = true;

		// STATIC LAYER, THINK ON THIS !!!
		if (_nc.data('timeline')!=undefined && !internrecalled) {
			if (staticdirection!=2)
				_nc.data('timeline').gotoAndPlay(0);
			internrecalled = true;
		}
		
		// KILL OUT ANIMATION
		
		if (!recalled && _nc.data('timeline_out') && staticdirection!=2 && staticdirection!=0) 	{						
				_nc.data('timeline_out').kill();
				_nc.data('outstarted',0);					
		}
		
		// TRIGGERED ELEMENTS SHOULD 
		if (triggerforce && _nc.data('timeline')!=undefined) {			
			_nc.removeData('$anims')
			_nc.data('timeline').pause(0);
			_nc.data('timeline').kill();
			if (_nc.data('newhoveranim')!=undefined) {
				_nc.data('newhoveranim').progress(0);
				_nc.data('newhoveranim').kill();
			}
			_nc.removeData('timeline');
			punchgs.TweenLite.killTweensOf(_nc);		
			_nc.unbind('hover');
			_nc.removeClass("rs-hover-ready");
			
			_nc.removeData('newhoveranim');

		}

		var $time = _nc.data('timeline') ? _nc.data('timeline').time() : 0,
			$progress = _nc.data('timeline')!==undefined ? _nc.data('timeline').progress() : 0,	
			tl = _nc.data('timeline') || new punchgs.TimelineLite({smoothChildTiming:true});

		$progress = jQuery.isNumeric($progress) ? $progress: 0;
		
		tl.pause();			
		// LAYER IS TRIGGERED ??
		
		// CHECK FOR SVG
		var $svg = {};
		$svg.svg = _nc.data('svg_src')!=undefined ? _nc.find('svg') : false;

		
		// GO FOR ANIMATION
		if ($progress<1 && _nc.data('outstarted') != 1 || staticdirection==2 || triggerforce) {			
			var animobject = _nc;

			if (_nc.data('mySplitText') !=undefined) _nc.data('mySplitText').revert();

			if (_nc.data('splitin')!=undefined && _nc.data('splitin').match(/chars|words|lines/g) || _nc.data('splitout')!=undefined && _nc.data('splitout').match(/chars|words|lines/g)) {				
				var splittarget = _nc.find('a').length>0 ? _nc.find('a') : _nc;
				_nc.data('mySplitText',new punchgs.SplitText(splittarget,{type:"lines,words,chars",charsClass:"tp-splitted tp-charsplit",wordsClass:"tp-splitted tp-wordsplit",linesClass:"tp-splitted tp-linesplit"}));					
				_nc.addClass("splitted");
			}

			if ( _nc.data('mySplitText') !==undefined && _nc.data('splitin') && _nc.data('splitin').match(/chars|words|lines/g)) animobject = _nc.data('mySplitText')[_nc.data('splitin')]
		
			var $a = new Object();
			
			// PRESET SVG STYLE
			if ($svg.svg) {
				$svg.idle = setSVGAnimObject(_nc.data('svg_idle'),newSVGHoverAnimObject());			
				//$svg.idle.anim.css.color = 
				punchgs.TweenLite.set($svg.svg,$svg.idle.anim);
			}

			var reverseanim = _nc.data('transform_in')!=undefined ? _nc.data('transform_in').match(/\(R\)/gi) : false;

			// BUILD ANIMATION LIBRARY AND HOVER ANIMATION
			if (!_nc.data('$anims') || triggerforce || reverseanim) {		


				var $from = newAnimObject(),
					$result = newAnimObject(),
					$hover = newHoverAnimObject(),										
					hashover = _nc.data('transform_hover')!==undefined || _nc.data('style_hover')!==undefined;				
			
				// WHICH ANIMATION TYPE SHOULD BE USED				
				$result = getAnimDatas($result,_nc.data('transform_idle'));
								
				$from = getAnimDatas($result,_nc.data('transform_in'),opt.sdir==1);		
				
				if (hashover) {

					$hover = getAnimDatas($hover,_nc.data('transform_hover'));
					$hover = convertHoverStyle($hover,_nc.data('style_hover'));					
					if ($svg.svg) {
						$svghover = setSVGAnimObject(_nc.data('svg_hover'),newSVGHoverAnimObject());
						if ($hover.anim.color!=undefined) {
							$svghover.anim.fill = $hover.anim.color;	

						}						
						_nc.data('hoversvg',$svghover);
					}
					_nc.data('hover',$hover);

				}
			
				// DELAYS
				$from.elemdelay = (_nc.data('elementdelay') == undefined) ? 0 : _nc.data('elementdelay');
				$result.anim.ease = $from.anim.ease = $from.anim.ease || punchgs.Power1.easeInOut;

				
				
	  	  		// HOVER ANIMATION
				if (hashover && !_nc.hasClass("rs-hover-ready")) {		

					_nc.addClass("rs-hover-ready");		  						
					_nc.hover(function(e) {
					 	var nc = jQuery(e.currentTarget),						 		
					 		t = nc.data('hover'),					 		
					 		intl = nc.data('timeline');
					 		
					 	if (intl && intl.progress()==1) {						 		

						 	if (nc.data('newhoveranim')===undefined || 	nc.data('newhoveranim')==="none")	{						 		
						 		nc.data('newhoveranim',punchgs.TweenLite.to(nc,t.speed,t.anim));
						 		if ($svg.svg)  
						 			nc.data('newsvghoveranim',punchgs.TweenLite.to($svg.svg,t.speed,nc.data('hoversvg').anim));						 	

						 	} else {						 		
						 		nc.data('newhoveranim').progress(0);
						 		nc.data('newhoveranim').play();
						 		if ($svg.svg) nc.data('newsvghoveranim').progress(0).play();
						 	}
						 }
					 },
					 function(e) {
					 	var nc = jQuery(e.currentTarget),
					 		intl = nc.data('timeline');

					 	if (intl && intl.progress()==1 && nc.data('newhoveranim')!=undefined) {							 						 		
					 		nc.data('newhoveranim').reverse();
					 		if ($svg.svg) nc.data('newsvghoveranim').reverse();
					 	}
					 });
				}
				$a = new Object();
				$a.f = $from;
				$a.r = $result;										
				_nc.data('$anims');
			} else {
				$a = _nc.data('$anims');
			}


			
			// SET WRAPPING CONTAINER SIZES				 
			var $mask_frm = getMaskDatas(_nc.data('mask_in')),
				newtl = new punchgs.TimelineLite();
																	
			$a.f.anim.x = $a.f.anim.x * opt.bw || getBorderDirections($a.f.anim.x,opt,eow,eoh,calcy,calcx, "horizontal" );
		  	$a.f.anim.y = $a.f.anim.y * opt.bw || getBorderDirections($a.f.anim.y,opt,eow,eoh,calcy,calcx, "vertical" );					
	  	  	
			

			// IF LAYER IS NOT STATIC, OR STATIC AND NOT ANIMATED IN AT THIS LOOP
			if (staticdirection != 2 || triggerforce) {
			 
			  // SPLITED ANIMATION IS IN GAME
			  if (animobject != _nc) {	
			  	  var oldease = $a.r.anim.ease;			  	 
				  tl.add(punchgs.TweenLite.set(_nc, $a.r.anim));
				  $a.r = newAnimObject();	
				  $a.r.anim.ease = oldease;
			  }
			 
			  $a.f.anim.visibility = "hidden";		

			  _nc.data('eow',eow);
			  _nc.data('eoh',eoh);
			  _nc.data('speed',$a.f.speed);
			  _nc.data('ease',$a.r.anim.ease);			  			  

			  newtl.eventCallback("onStart",function(){			  	
			  	punchgs.TweenLite.set(_nc,{visibility:"visible"});
				// FIX VISIBLE IFRAME BUG IN SAFARI
				if (_nc.data('iframes'))
					_nc.find('iframe').each(function() {
						punchgs.TweenLite.set(jQuery(this),{autoAlpha:1});
					})
			  	punchgs.TweenLite.set(_pw,{visibility:"visible"});
			  	var data={};
			  	data.layer = _nc;
			  	data.eventtype = "enterstage";
			  	data.layertype = _nc.data('layertype');
			  	_nc.data('active',true);
			  	data.layersettings = _nc.data();			  	
			  	opt.c.trigger("revolution.layeraction",[data])
			  });

			  newtl.eventCallback("onComplete",function() {
			  	var data={};
			  	data.layer = _nc;
			  	data.eventtype = "enteredstage";
			  	data.layertype = _nc.data('layertype');
			  	data.layersettings = _nc.data();			  	
			  	opt.c.trigger("revolution.layeraction",[data]);			  	
			  	_R.animcompleted(_nc,opt);
			  });

			  // SHOW ELEMENTS WITH SLIDEENTER A BIT LATER FIRST ! 
			  if (($start=="sliderenter" && opt.overcontainer))			
			  	mdelay = 0.6;
			  


			  tl.add(newtl.staggerFromTo(animobject,$a.f.speed,$a.f.anim,$a.r.anim,$a.f.elemdelay),mdelay);	
			  
			
			  // MASK ANIMATION
			  if ($mask_frm) {				  						  	
			  	var $mask_rsl = new Object();			  				  					  	
			  	$mask_rsl.ease = $a.r.anim.ease;					  	
			  	$mask_rsl.overflow = $mask_frm.anim.overflow ="hidden";
			  	$mask_rsl.overwrite = "all";
			  	$mask_rsl.x = $mask_rsl.y = 0;				  	

			  	$mask_frm.anim.x = $mask_frm.anim.x * opt.bw || getBorderDirections($mask_frm.anim.x,opt,eow,eoh,calcy,calcx,"horizontal");
	  	  		$mask_frm.anim.y = $mask_frm.anim.y * opt.bw || getBorderDirections($mask_frm.anim.y,opt,eow,eoh,calcy,calcx,"vertical");
			   	  					  	
			  	tl.add(punchgs.TweenLite.fromTo(_mw,$a.f.speed,$mask_frm.anim,$mask_rsl,$from.elemdelay),mdelay);				  	
			  } else {			  	
			  	tl.add(punchgs.TweenLite.set(_mw,{overflow:"visible"},$from.elemdelay),0);				  	
			  }		    				 
			}

			// SAVE IT TO NCAPTION BEFORE NEW STEPS WILL BE ADDED
			_nc.data('timeline',tl);

			opt.sliderscrope = opt.sliderscrope === undefined ? Math.round(Math.random()*99999) : opt.sliderscrope;
			
			// IF THERE IS ANY EXIT ANIM DEFINED
			// For Static Layers -> 1 -> In,  2-> Out  0-> Ignore  -1-> Not Static
			staticdirection = staticLayerStatus(_nc,opt,"in");

			
			if (opt.endtimeouts === undefined) opt.endtimeouts = [];
			
			if (($progress === 0 || staticdirection==2) &&  $end!=="bytrigger" && !triggerforce && $end!="sliderleave") {
				if (($end!=undefined) && (staticdirection==-1 || staticdirection==2) && ($end!=="bytriger"))
					var tot = setTimeout(function() {
						_R.endMoveCaption(_nc,_mw,_pw,opt);
					},parseInt(_nc.data('end'),0));					
				/*else
					var tot = setTimeout(function() {
						_R.endMoveCaption(_nc,_mw,_pw,opt);
					},999999999);*/
				opt.endtimeouts.push(tot);

			}
			

			// SAVE THE TIMELINE IN DOM ELEMENT

			tl = _nc.data('timeline');
			
			if (_nc.data('loopanimation')=="on") callCaptionLoops(_lw,opt.bw);		
			
			
		
			
			if (($start!="sliderenter" || ($start=="sliderenter" && opt.overcontainer)) && (staticdirection==-1 || staticdirection==1 || triggerforce || (staticdirection==0 && $progress<1 && _nc.hasClass("rev-static-visbile"))))				
				if (($progress<1 && $progress>0) || 
					($progress==0 && $start!="bytrigger" && $lts!="keep") || 
					($progress==0 && $start!="bytrigger" && $lts=="keep" && $cts=="on") || 				
					($start=="bytrigger" && $lts=="keep" && $cts=="on")) {				
						tl.resume($time);			
						_R.toggleState(_nc.data('layertoggledby'))
			}
		}
		
		//punchgs.TweenLite.set(_mw,{width:eow, height:eoh});
		if (_nc.data('loopanimation')=="on") punchgs.TweenLite.set(_lw,{minWidth:eow,minHeight:eoh});

		if (_nc.data('slidelink')!=0 && (_nc.data('slidelink')==1 || _nc.hasClass("slidelink"))) {
			punchgs.TweenLite.set(_mw,{width:"100%", height:"100%"});
			_nc.data('slidelink',1);
		} else {
			punchgs.TweenLite.set(_mw,{width:"auto", height:"auto"});
			_nc.data('slidelink',0);
		}
	},

	//////////////////////////////
	//	MOVE OUT THE CAPTIONS  //
	////////////////////////////
	endMoveCaption : function(_nc,_mw,_pw,opt) {

		_mw = _mw !=undefined ? _mw : _nc.data('_mw');
		_pw = _pw !=undefined ? _pw : _nc.data('_pw');

		// Kill TimeLine of "in Animation"
		_nc.data('outstarted',1);
		
		
		if (_nc.data('timeline'))
			_nc.data('timeline').pause();
		else
			if (_nc.data('_pw')===undefined) return;
		
		var tl = new punchgs.TimelineLite(),
			subtl = new punchgs.TimelineLite(),
			newmasktl = new punchgs.TimelineLite(),				
			$from = getAnimDatas(newAnimObject(),_nc.data('transform_in'),opt.sdir==1),
			$to = _nc.data('transform_out') ? getAnimDatas(newEndAnimObject(),_nc.data('transform_out'),opt.sdir==1) : getAnimDatas(newEndAnimObject(),_nc.data('transform_in'),opt.sdir==1),			
			animobject = _nc.data('splitout') && _nc.data('splitout').match(/words|chars|lines/g) ? _nc.data('mySplitText')[_nc.data('splitout')] : _nc,
			elemdelay = (_nc.data('endelementdelay') == undefined) ? 0 : _nc.data('endelementdelay'),					
			iw = _nc.innerWidth(),
			ih = _nc.innerHeight(),
			p = _pw.position();
		
		// IF REVERSE AUTO ANIMATION ENABLED
		if (_nc.data('transform_out') && _nc.data('transform_out').match(/auto:auto/g)) {			
			$from.speed = $to.speed;
			$from.anim.ease = $to.anim.ease;
			$to = $from;
		}
				
		var $mask_to = getMaskDatas(_nc.data('mask_out'));

		$to.anim.x = $to.anim.x * opt.bw || getBorderDirections($to.anim.x,opt,iw,ih,p.top,p.left,"horizontal");
		$to.anim.y = $to.anim.y * opt.bw || getBorderDirections($to.anim.y,opt,iw,ih,p.top,p.left,"vertical");
		
		subtl.eventCallback("onStart",function(){			  	
			  	var data={};
			  	data.layer = _nc;
			  	data.eventtype = "leavestage";
			  	data.layertype = _nc.data('layertype');
			  	data.layersettings = _nc.data();	
			  	_nc.data('active',false);		  	
			  	opt.c.trigger("revolution.layeraction",[data]);			  				  	
		});

		subtl.eventCallback("onComplete",function(){			  	
			  	punchgs.TweenLite.set(_nc,{visibility:"hidden"});
			  	punchgs.TweenLite.set(_pw,{visibility:"hidden"});
			  	var data={};
			  	data.layer = _nc;
			  	data.eventtype = "leftstage";
			  	_nc.data('active',false);
			  	data.layertype = _nc.data('layertype');
			  	data.layersettings = _nc.data();			  	
			  	opt.c.trigger("revolution.layeraction",[data]); 	
			  	if (_R.stopVideo) _R.stopVideo(_nc,opt);
		});

		
				
		tl.add(subtl.staggerTo(animobject,$to.speed,$to.anim,elemdelay),0);	
				
		// MASK ANIMATION
		if ($mask_to) {				  					  			  	
			$mask_to.anim.ease = $to.anim.ease;		  	
			$mask_to.anim.overflow = "hidden";	

			$mask_to.anim.x = $mask_to.anim.x * opt.bw || getBorderDirections($mask_to.anim.x,opt,iw,ih,p.top,p.left,"horizontal");
		  	$mask_to.anim.y = $mask_to.anim.y * opt.bw || getBorderDirections($mask_to.anim.y,opt,iw,ih,p.top,p.left,"vertical");

		
			tl.add(newmasktl.to(_mw,$to.speed,$mask_to.anim,elemdelay),0);				  	
		} else {		  	
			tl.add(newmasktl.set(_mw,{overflow:"visible",overwrite:"auto"},elemdelay),0);				  	
		}
		
		_nc.data('timeline_out',tl);
	},

	//////////////////////////
	//	REMOVE THE CAPTIONS //
	/////////////////////////
	removeTheCaptions : function(actli,opt) {		
		var removetime = 0,
			index = actli.data('index'),	
			allcaptions = new Array;
		
		// COLLECT ALL CAPTIONS		
		if (opt.layers[index])
			jQuery.each(opt.layers[index], function(i,a) { allcaptions.push(a); });
		if (opt.layers["static"])
			jQuery.each(opt.layers["static"], function(i,a) { allcaptions.push(a); });

		
		
		//punchgs.TweenLite.killDelayedCallsTo(_R.endMoveCaption,false,opt.sliderscrope);
		
		if (opt.endtimeouts && opt.endtimeouts.length>0) 
			jQuery.each(opt.endtimeouts,function(i,timeo) {	clearTimeout(timeo);});
		opt.endtimeouts = new Array();

		// GO THROUGH ALL CAPTIONS, AND MANAGE THEM
		if (allcaptions)
			jQuery.each(allcaptions,function(i) {
			    var _nc=jQuery(this),
			    	stat = staticLayerStatus(_nc,opt,"out");				    
				if (stat != 0 ) {  //0 == ignore		
					killCaptionLoops(_nc);
					clearTimeout(_nc.data('videoplaywait'));
					if (_R.stopVideo) _R.stopVideo(_nc,opt);												
					_R.endMoveCaption(_nc,null,null,opt)
					//opt.playingvideos = [];
					if (_R.removeMediaFromList) _R.removeMediaFromList(_nc,opt);
					opt.lastplayedvideos = [];
				}
			});		
	}
});





/**********************************************************************************************
						-	HELPER FUNCTIONS FOR LAYER TRANSFORMS -
**********************************************************************************************/


/////////////////////////////////////
//	-	CREATE ANIMATION OBJECT	-  //
/////////////////////////////////////
var newAnimObject = function() {
	var a = new Object();
	a.anim = new Object();
	a.anim.x=0;
	a.anim.y=0;
	a.anim.z=0;
	a.anim.rotationX = 0;
	a.anim.rotationY = 0;
	a.anim.rotationZ = 0;				
	a.anim.scaleX = 1;
	a.anim.scaleY = 1;
	a.anim.skewX = 0;
	a.anim.skewY = 0;
	a.anim.opacity=1;
	a.anim.transformOrigin = "50% 50%";
	a.anim.transformPerspective = 600;
	a.anim.rotation = 0;
	a.anim.ease = punchgs.Power3.easeOut;
	a.anim.force3D = "auto";
	a.speed = 0.3;
	a.anim.autoAlpha = 1;
	a.anim.visibility = "visible";
	a.anim.overwrite = "all";  
	return a;
}

var newSVGHoverAnimObject = function() {
	var a = new Object();
	a.anim = new Object();
	
	a.anim.stroke="none";
	a.anim.strokeWidth=0;
	a.anim.strokeDasharray="none";
	a.anim.strokeDashoffset="0";
	return a;
}

var setSVGAnimObject = function(data,a) {
	var customarray = data.split(';');	
	if (customarray)	
		jQuery.each(customarray,function(index,pa) {
			var p = pa.split(":")
			var w = p[0],
				v = p[1];
			
			if (w=="sc") a.anim.stroke=v;
			if (w=="sw") a.anim.strokeWidth=v;
			if (w=="sda") a.anim.strokeDasharray=v;
			if (w=="sdo") a.anim.strokeDashoffset=v;
		});
	return a;
}



var newEndAnimObject = function() {
	var a = new Object();
	a.anim = new Object();	
	a.anim.x=0;
	a.anim.y=0;	
	a.anim.z=0;
	return a;
}

var newHoverAnimObject = function() {
	var a = new Object();
	a.anim = new Object();		
	a.speed = 0.2;						
	return a;
}

var animDataTranslator = function(val,defval) {

	if (jQuery.isNumeric(parseFloat(val))) {				
		return parseFloat(val);
	} else 
	if (val===undefined || val==="inherit") {				
		return defval;
	} else 
	if (val.split("{").length>1) {
		var min = val.split(","),
			max = parseFloat(min[1].split("}")[0]);
		min = parseFloat(min[0].split("{")[1]);
		val = Math.random()*(max-min) + min;		
	}	
	return val;	
}	

var getBorderDirections = function (x,o,w,h,top,left,direction) {		
			
	if (!jQuery.isNumeric(x) && x.match(/%]/g)) {
		x = x.split("[")[1].split("]")[0];				
		if (direction=="horizontal")
			x = (w+2)*parseInt(x,0)/100;
		else
		if (direction=="vertical")
			x = (h+2)*parseInt(x,0)/100;
	} else {


		x = x === "layer_left"  ? (0-w) : x === "layer_right" ? w : x;
		x = x === "layer_top" ? (0-h) : x==="layer_bottom" ? h : x;
		x = x === "left" || x==="stage_left" ? (0-w-left) : x === "right" || x==="stage_right" ? o.conw-left : x === "center" || x === "stage_center" ? (o.conw/2 - w/2)-left : x;
		x = x === "top" || x==="stage_top" ? (0-h-top) : x==="bottom" || x==="stage_bottom" ? o.conh-top : x === "middle" || x === "stage_middle" ? (o.conh/2 - h/2)-top : x;					
	}
	
	return x;
}

///////////////////////////////////////////////////
// ANALYSE AND READ OUT DATAS FROM HTML CAPTIONS //
///////////////////////////////////////////////////
var getAnimDatas = function(frm,data,reversed) {		
	var o = new Object();
	o = jQuery.extend(true,{},o, frm);
	if (data === undefined) 
		return o;		

	var customarray = data.split(';');	
	if (customarray)	
		jQuery.each(customarray,function(index,pa) {
			var p = pa.split(":")
			var w = p[0],
				v = p[1];
			
			
			if (reversed && v!=undefined && v.length>0 && v.match(/\(R\)/)) {							
				v = v.replace("(R)","");
				v = v==="right" ? "left" : v==="left" ? "right" : v==="top" ? "bottom" : v==="bottom" ? "top" : v;	
				if (v[0]==="[" && v[1]==="-") v = v.replace("[-","[");
				else
				if (v[0]==="[" && v[1]!=="-") v = v.replace("[","[-");	
				else
				if (v[0]==="-") v = v.replace("-","");
				else
				if (v[0].match(/[1-9]/)) v="-"+v;
								
			}
			
			if (v!=undefined) {
				v = v.replace(/\(R\)/,'');
				if (w=="rotationX" || w=="rX") o.anim.rotationX = animDataTranslator(v,o.anim.rotationX)+"deg";			
				if (w=="rotationY" || w=="rY") o.anim.rotationY = animDataTranslator(v,o.anim.rotationY)+"deg";
				if (w=="rotationZ" || w=="rZ") o.anim.rotation = animDataTranslator(v,o.anim.rotationZ)+"deg";					
				if (w=="scaleX" || w=="sX") o.anim.scaleX = animDataTranslator(v,o.anim.scaleX);
				if (w=="scaleY" || w=="sY") o.anim.scaleY = animDataTranslator(v,o.anim.scaleY);
				if (w=="opacity" || w=="o") o.anim.opacity = animDataTranslator(v,o.anim.opacity);
				o.anim.opacity = o.anim.opacity == 0 ? 0.0001 : o.anim.opacity;
				if (w=="skewX" || w=="skX") o.anim.skewX = animDataTranslator(v,o.anim.skewX);
				if (w=="skewY" || w=="skY") o.anim.skewY = animDataTranslator(v,o.anim.skewY);
				if (w=="x") o.anim.x = animDataTranslator(v,o.anim.x);
				if (w=="y") o.anim.y = animDataTranslator(v,o.anim.y);
				if (w=="z") o.anim.z = animDataTranslator(v,o.anim.z);
				if (w=="transformOrigin" || w=="tO") o.anim.transformOrigin = v.toString();
				if (w=="transformPerspective" || w=="tP") o.anim.transformPerspective=parseInt(v,0);
				if (w=="speed" || w=="s") o.speed = parseFloat(v)/1000;									
				if (w=="ease" || w=="e") o.anim.ease = v;
			}

		})	
	
	return o;
}



/////////////////////////////////
// BUILD MASK ANIMATION OBJECT //
/////////////////////////////////
var getMaskDatas = function(d) {		
	if (d === undefined)
		return false;

	var o = new Object();	
	o.anim = new Object();
	var s = d.split(';')
	if (s)
		jQuery.each(s,function(index,param) {
			param = param.split(":")
			var w = param[0],
				v = param[1];
			if (w=="x") o.anim.x = v;
			if (w=="y") o.anim.y = v;
			if (w=="s") o.speed = parseFloat(v)/1000;
			if (w=="e" || w=="ease") o.anim.ease = v;	
		});

	return o;
}
	



////////////////////////
// SHOW THE CAPTION  //
///////////////////////

var makeArray = function(obj,opt,show) {
	
	if (obj==undefined) obj = 0;

	if (!jQuery.isArray(obj) && jQuery.type(obj)==="string" && (obj.split(",").length>1 || obj.split("[").length>1)) {
		obj = obj.replace("[","");
		obj = obj.replace("]","");
		var newobj = obj.match(/'/g) ? obj.split("',") : obj.split(",");
		obj = new Array();
		if (newobj)
			jQuery.each(newobj,function(index,element) {
				element = element.replace("'","");
				element = element.replace("'","");
				obj.push(element);
			})
	} else {
		var tempw = obj;			
		if (!jQuery.isArray(obj) ) {
			obj = new Array();				
			obj.push(tempw);				
		} 
	}

	var tempw = obj[obj.length-1]; 

	if (obj.length<opt.rle) {
		for (var i=1;i<=opt.curWinRange;i++) {
			obj.push(tempw);
		}
	}
	return obj;
}


/* CREATE SHARP CORNERS */
function sharpCorners(nc,$class, $side,$borderh,$borderv,ncch,bgcol) {
	var a = nc.find($class);
	a.css('borderWidth',ncch+"px");
	a.css($side,(0-ncch)+'px');
	a.css($borderh,'0px solid transparent');
	a.css($borderv,bgcol);
}





var staticLayerStatus = function(_nc,opt,dir,dontmod) {
	
	var a = -1;		
	if (_nc.hasClass("tp-static-layer")) {	
		_nc.data('staticlayer',true);
		var s = parseInt(_nc.data('startslide'),0),
			e = parseInt(_nc.data('endslide'),0),
			pi = opt.c.find('.processing-revslide').index(),
			ai = pi!=-1 ? pi : opt.c.find('.active-revslide').index();
			
		ai = ai == -1 ? 0 : ai;			
		
		
		if (dir==="in") {				
			// IF STATIC ITEM CURRENTLY NOT VISIBLE
			if (!_nc.hasClass("rev-static-visbile")) {
				// IF ITEM SHOULD BECOME VISIBLE			
					
				if ((s<=ai && e>=ai) || (s == ai) || (e == ai)){						
					if (!dontmod) {
						_nc.addClass("rev-static-visbile");
						_nc.removeClass("rev-static-hidden");
					}
					a = 1;
				} else 
					a = 0;

			// IF STATIC ITEM ALREADY VISIBLE
			} else {
				if ((e==ai) || (s > ai) || (e < ai)) 
					a = 2;					
				else 
					a = 0;					
			}		
		} else {				
			// IF STATIC ITEM CURRENTLY NOT VISIBLE
			if (_nc.hasClass("rev-static-visbile")) {					
				if ((s > ai) ||
					(e < ai)) {
					a = 2;
					if (!dontmod) {
						_nc.removeClass("rev-static-visbile");
						_nc.addClass("rev-static-hidden");
					}
				} else {
					a = 0;
				}
			} else {
				a = 2;
			}
		}
	}
			
	return a; // 1 -> In,  2-> Out  0-> Ignore  -1-> Not Static
}
	


var convertHoverStyle = function(t,s) {
	if (s===undefined) return t;
	s = s.replace("c:","color:");
	s = s.replace("bg:","background-color:");
	s = s.replace("bw:","border-width:");
	s = s.replace("bc:","border-color:");
	s = s.replace("br:","borderRadius:");
	s = s.replace("bs:","border-style:");
	s = s.replace("td:","text-decoration:");
	var sp = s.split(";");
	if (sp)
		jQuery.each(sp,function(key,cont){
			var attr = cont.split(":");
			if (attr[0].length>0)
				t.anim[attr[0]] = attr[1];		
		})			

	return t;

}
////////////////////////////////////////////////
//	-	GET CSS ATTRIBUTES OF ELEMENT	-	  //
////////////////////////////////////////////////
var getcssParams = function(nc,level) {
	
	var obj = new Object(),
		gp = false,
		pc;
	
	// CHECK IF CURRENT ELEMENT SHOULD RESPECT REKURSICVE RESIZES, AND SHOULD OWN THE SAME ATTRIBUTES FROM PARRENT ELEMENT
	if (level=="rekursive") {
		pc = nc.closest('.tp-caption');		
		if (pc && nc.css("fontSize") === pc.css("fontSize")) 
			gp = true;
	}

	obj.basealign = nc.data('basealign') || "grid";
	obj.fontSize = gp ? pc.data('fontsize')===undefined ?  parseInt(pc.css('fontSize'),0) || 0 : pc.data('fontsize')  :  nc.data('fontsize')===undefined ?  parseInt(nc.css('fontSize'),0) || 0 : nc.data('fontsize'); 
	obj.fontWeight = gp ? pc.data('fontweight')===undefined ?  parseInt(pc.css('fontWeight'),0) || 0 : pc.data('fontweight')  :  nc.data('fontweight')===undefined ?  parseInt(nc.css('fontWeight'),0) || 0 : nc.data('fontweight'); 
	obj.whiteSpace = gp ? pc.data('whitespace')===undefined ?  pc.css('whitespace') || "normal" : pc.data('whitespace')  :  nc.data('whitespace')===undefined ?  nc.css('whitespace') || "normal" : nc.data('whitespace'); 
	
	
	if (jQuery.inArray(nc.data('layertype'),["video","image","audio"])===-1 && !nc.is("img"))
		obj.lineHeight = gp ? pc.data('lineheight')===undefined ? parseInt(pc.css('lineHeight'),0) || 0 : pc.data('lineheight')  :  nc.data('lineheight')===undefined ? parseInt(nc.css('lineHeight'),0) || 0 : nc.data('lineheight');
	else
		obj.lineHeight = 0;
		
	obj.letterSpacing = gp ? pc.data('letterspacing')===undefined ? parseFloat(pc.css('letterSpacing'),0) || 0 : pc.data('letterspacing') : nc.data('letterspacing')===undefined ? parseFloat(nc.css('letterSpacing')) || 0 : nc.data('letterspacing');
				
	obj.paddingTop = nc.data('paddingtop')===undefined ? parseInt(nc.css('paddingTop'),0) || 0 : nc.data('paddingtop');
	obj.paddingBottom = nc.data('paddingbottom')===undefined ? parseInt(nc.css('paddingBottom'),0) || 0 : nc.data('paddingbottom');
	obj.paddingLeft = nc.data('paddingleft')===undefined ? parseInt(nc.css('paddingLeft'),0) || 0 : nc.data('paddingleft');
	obj.paddingRight = nc.data('paddingright')===undefined ? parseInt(nc.css('paddingRight'),0) || 0 : nc.data('paddingright');

	obj.marginTop = nc.data('margintop')===undefined ? parseInt(nc.css('marginTop'),0) || 0 : nc.data('margintop');
	obj.marginBottom = nc.data('marginbottom')===undefined ? parseInt(nc.css('marginBottom'),0) || 0 : nc.data('marginbottom');
	obj.marginLeft = nc.data('marginleft')===undefined ? parseInt(nc.css('marginLeft'),0) || 0 : nc.data('marginleft');
	obj.marginRight = nc.data('marginright')===undefined ? parseInt(nc.css('marginRight'),0) || 0 : nc.data('marginright');

	obj.borderTopWidth = nc.data('bordertopwidth')===undefined ? parseInt(nc.css('borderTopWidth'),0) || 0 : nc.data('bordertopwidth');
	obj.borderBottomWidth = nc.data('borderbottomwidth')===undefined ? parseInt(nc.css('borderBottomWidth'),0) || 0 : nc.data('borderbottomwidth');
	obj.borderLeftWidth = nc.data('borderleftwidth')===undefined ? parseInt(nc.css('borderLeftWidth'),0) || 0 : nc.data('borderleftwidth');
	obj.borderRightWidth = nc.data('borderrightwidth')===undefined ? parseInt(nc.css('borderRightWidth'),0) || 0 : nc.data('borderrightwidth');

	if (level!="rekursive") {
		obj.color = nc.data('color')===undefined ? "nopredefinedcolor" : nc.data('color');

		obj.whiteSpace = gp ? pc.data('whitespace')===undefined ? pc.css('whiteSpace') || "nowrap" : pc.data('whitespace') : nc.data('whitespace')===undefined ? nc.css('whiteSpace') || "nowrap" : nc.data('whitespace');
		
		obj.minWidth = nc.data('width')===undefined ? parseInt(nc.css('minWidth'),0) || 0 : nc.data('width');
		obj.minHeight = nc.data('height')===undefined ? parseInt(nc.css('minHeight'),0) || 0 : nc.data('height');

		if (nc.data('videowidth')!=undefined && nc.data('videoheight')!=undefined) {
			var vwid = nc.data('videowidth'),
				vhei = nc.data('videoheight');
			vwid = vwid==="100%" ? "none" : vwid;
			vhei = vhei==="100%" ? "none" : vhei;
			nc.data('width',vwid);
			nc.data('height',vhei);
		}
		
		obj.maxWidth = nc.data('width')===undefined ? parseInt(nc.css('maxWidth'),0) || "none" : nc.data('width');
		obj.maxHeight = nc.data('height')===undefined ? parseInt(nc.css('maxHeight'),0) || "none" : nc.data('height');
		
		obj.wan = nc.data('wan')===undefined ? parseInt(nc.css('-webkit-transition'),0) || "none" : nc.data('wan');
		obj.moan = nc.data('moan')===undefined ? parseInt(nc.css('-moz-animation-transition'),0) || "none" : nc.data('moan');
		obj.man = nc.data('man')===undefined ? parseInt(nc.css('-ms-animation-transition'),0) || "none" : nc.data('man');
		obj.ani = nc.data('ani')===undefined ? parseInt(nc.css('transition'),0) || "none" : nc.data('ani');
	}
	
	

	obj.styleProps = nc.css(["background-color",							 
							 "border-top-color",
							 "border-bottom-color",
							 "border-right-color",
							 "border-left-color",							
							 "border-top-style",
							 "border-bottom-style",
							 "border-left-style",
							 "border-right-style",							
							 "border-left-width",
							 "border-right-width",
							 "border-bottom-width",
							 "border-top-width",							 
							 "color",							 
							 "text-decoration",
							 "font-style",							 
							 "borderTopLeftRadius",
							 "borderTopRightRadius",
							 "borderBottomLeftRadius",
							 "borderBottomRightRadius"							 
							 ]);		 
	return obj;
}

// READ SINGLE OR ARRAY VALUES OF OBJ CSS ELEMENTS
var setResponsiveCSSValues = function(obj,opt) {
	var newobj = new Object();
	if (obj)
		jQuery.each(obj,function(key,val){			
			newobj[key] = makeArray(val,opt)[opt.curWinRange] || obj[key];
		})
	return newobj;
}

var minmaxconvert = function(a,m,r,fr) {
	
	a = jQuery.isNumeric(a) ? (a * m)+"px" : a;
	a = a==="full" ? fr : a==="auto" || a==="none" ? r : a;
	return a;

}

/////////////////////////////////////////////////////////////////
//	-	CALCULATE THE RESPONSIVE SIZES OF THE CAPTIONS	-	  //
/////////////////////////////////////////////////////////////////
var calcCaptionResponsive = function(nc,opt,level,responsive) {
	var getobj;
	try{
		if (nc[0].nodeName=="BR" || nc[0].tagName=="br")
			return false;
	} catch(e) {

	}

	if (nc.data('cssobj')===undefined) {									
		getobj = getcssParams(nc,level);
		nc.data('cssobj',getobj);
	} else 
		getobj = nc.data('cssobj');

	var obj = setResponsiveCSSValues(getobj,opt);
	
	var bw=opt.bw,
		bh=opt.bh;

	if (responsive==="off") {
		bw=1;
		bh=1;
	}
																	
	// IE8 FIX FOR AUTO LINEHEIGHT
	if (obj.lineHeight=="auto") obj.lineHeight = obj.fontSize+4;

						
	if (!nc.hasClass("tp-splitted")) {

		nc.css("-webkit-transition", "none");
	    nc.css("-moz-transition", "none");
	    nc.css("-ms-transition", "none");
	    nc.css("transition", "none");
	   
	    var hashover = nc.data('transform_hover')!==undefined || nc.data('style_hover')!==undefined;
	    if (hashover) punchgs.TweenLite.set(nc,obj.styleProps);
		
		punchgs.TweenLite.set(nc,{

			 fontSize: Math.round((obj.fontSize * bw))+"px",
			 fontWeight: obj.fontWeight,
			 letterSpacing:Math.floor((obj.letterSpacing * bw))+"px",
			 paddingTop: Math.round((obj.paddingTop * bh)) + "px",
			 paddingBottom: Math.round((obj.paddingBottom * bh)) + "px",
			 paddingLeft: Math.round((obj.paddingLeft* bw)) + "px",
			 paddingRight: Math.round((obj.paddingRight * bw)) + "px",
			 marginTop: (obj.marginTop * bh) + "px",
			 marginBottom: (obj.marginBottom * bh) + "px",
			 marginLeft: (obj.marginLeft * bw) + "px",
			 marginRight: (obj.marginRight * bw) + "px",			 
			 borderTopWidth: Math.round(obj.borderTopWidth * bh) + "px",
			 borderBottomWidth: Math.round(obj.borderBottomWidth * bh) + "px",
			 borderLeftWidth: Math.round(obj.borderLeftWidth * bw) + "px",
			 borderRightWidth: Math.round(obj.borderRightWidth * bw) + "px",
			 lineHeight: Math.round(obj.lineHeight * bh) + "px",
			 overwrite:"auto"});


		if (level!="rekursive") {
			
			
			
			var winw = obj.basealign =="slide" ? opt.ulw : opt.gridwidth[opt.curWinRange],
				winh = obj.basealign =="slide" ? opt.ulh : opt.gridheight[opt.curWinRange],
				maxw = minmaxconvert(obj.maxWidth,bw,"none",winw),
				maxh = minmaxconvert(obj.maxHeight,bh,"none",winh),
				minw = minmaxconvert(obj.minWidth,bw,"0px",winw),
				minh = minmaxconvert(obj.minHeight,bh,"0px",winh);
										
			punchgs.TweenLite.set(nc,{
				 maxWidth:maxw,
				 maxHeight:maxh,
				 minWidth:minw,
				 minHeight:minh,
				 whiteSpace:obj.whiteSpace,					 
				 overwrite:"auto"
			});

			if (obj.color!="nopredefinedcolor") 
				punchgs.TweenLite.set(nc,{color:obj.color,overwrite:"auto"});
			
			if (nc.data('svg_src')!=undefined) {
				if (obj.color!="nopredefinedcolor") 
					punchgs.TweenLite.set(nc.find('svg'),{fill:obj.color,overwrite:"auto"});
				else
					punchgs.TweenLite.set(nc.find('svg'),{fill:obj.styleProps.color,overwrite:"auto"});
			}
			
		}

		setTimeout(function() {
			nc.css("-webkit-transition", nc.data('wan'));
		    nc.css("-moz-transition", nc.data('moan'));
		    nc.css("-ms-transition", nc.data('man'));
		    nc.css("transition", nc.data('ani'));

		},30);									
	}
}


//////////////////////
//	CAPTION LOOPS	//
//////////////////////
var callCaptionLoops = function(el,factor) {

	// SOME LOOPING ANIMATION ON INTERNAL ELEMENTS
	if (el.hasClass("rs-pendulum")) {			
		if (el.data('loop-timeline')==undefined) {
			el.data('loop-timeline',new punchgs.TimelineLite);
			var startdeg = el.data('startdeg')==undefined ? -20 : el.data('startdeg'),
				enddeg = el.data('enddeg')==undefined ? 20 : el.data('enddeg'),
				speed = el.data('speed')==undefined ? 2 : el.data('speed'),
				origin = el.data('origin')==undefined ? "50% 50%" : el.data('origin'),
				easing = el.data('easing')==undefined ? punchgs.Power2.easeInOut : el.data('ease');

				
			startdeg = startdeg * factor;
			enddeg = enddeg * factor;

			el.data('loop-timeline').append(new punchgs.TweenLite.fromTo(el,speed,{force3D:"auto",rotation:startdeg,transformOrigin:origin},{rotation:enddeg,ease:easing}));
			el.data('loop-timeline').append(new punchgs.TweenLite.fromTo(el,speed,{force3D:"auto",rotation:enddeg,transformOrigin:origin},{rotation:startdeg,ease:easing,onComplete:function() {
				el.data('loop-timeline').restart();
			}}));
		}

	}

	// SOME LOOPING ANIMATION ON INTERNAL ELEMENTS
	if (el.hasClass("rs-rotate")) {			
		if (el.data('loop-timeline')==undefined) {
			el.data('loop-timeline',new punchgs.TimelineLite);
			var startdeg = el.data('startdeg')==undefined ? 0 : el.data('startdeg'),
				enddeg = el.data('enddeg')==undefined ? 360 : el.data('enddeg');
				speed = el.data('speed')==undefined ? 2 : el.data('speed'),
				origin = el.data('origin')==undefined ? "50% 50%" : el.data('origin'),
				easing = el.data('easing')==undefined ? punchgs.Power2.easeInOut : el.data('easing');

			startdeg = startdeg * factor;
			enddeg = enddeg * factor;

			el.data('loop-timeline').append(new punchgs.TweenLite.fromTo(el,speed,{force3D:"auto",rotation:startdeg,transformOrigin:origin},{rotation:enddeg,ease:easing,onComplete:function() {
				el.data('loop-timeline').restart();
			}}));
		}

	}

	// SOME LOOPING ANIMATION ON INTERNAL ELEMENTS
	if (el.hasClass("rs-slideloop")) {			
		if (el.data('loop-timeline')==undefined) {
			el.data('loop-timeline',new punchgs.TimelineLite);
			var xs = el.data('xs')==undefined ? 0 : el.data('xs'),
				ys = el.data('ys')==undefined ? 0 : el.data('ys'),
				xe = el.data('xe')==undefined ? 0 : el.data('xe'),
				ye = el.data('ye')==undefined ? 0 : el.data('ye'),
				speed = el.data('speed')==undefined ? 2 : el.data('speed'),
				easing = el.data('easing')==undefined ? punchgs.Power2.easeInOut : el.data('easing');

				xs = xs * factor;
				ys = ys * factor;
				xe = xe * factor;
				ye = ye * factor;

			el.data('loop-timeline').append(new punchgs.TweenLite.fromTo(el,speed,{force3D:"auto",x:xs,y:ys},{x:xe,y:ye,ease:easing}));
			el.data('loop-timeline').append(new punchgs.TweenLite.fromTo(el,speed,{force3D:"auto",x:xe,y:ye},{x:xs,y:ys,onComplete:function() {
				el.data('loop-timeline').restart();
			}}));
		}
	}

	// SOME LOOPING ANIMATION ON INTERNAL ELEMENTS
	if (el.hasClass("rs-pulse")) {			
		if (el.data('loop-timeline')==undefined) {
			el.data('loop-timeline',new punchgs.TimelineLite);
			var zoomstart = el.data('zoomstart')==undefined ? 0 : el.data('zoomstart'),
				zoomend = el.data('zoomend')==undefined ? 0 : el.data('zoomend'),
				speed = el.data('speed')==undefined ? 2 : el.data('speed'),
				easing = el.data('easing')==undefined ? punchgs.Power2.easeInOut : el.data('easing');

			el.data('loop-timeline').append(new punchgs.TweenLite.fromTo(el,speed,{force3D:"auto",scale:zoomstart},{scale:zoomend,ease:easing}));
			el.data('loop-timeline').append(new punchgs.TweenLite.fromTo(el,speed,{force3D:"auto",scale:zoomend},{scale:zoomstart,onComplete:function() {
				el.data('loop-timeline').restart();
			}}));
		}
	}

	if (el.hasClass("rs-wave")) {			
		if (el.data('loop-timeline')==undefined) {
			el.data('loop-timeline',new punchgs.TimelineLite);

			var angle= el.data('angle')==undefined ? 10 : parseInt(el.data('angle'),0),
				radius = el.data('radius')==undefined ? 10 : parseInt(el.data('radius'),0),
				speed = el.data('speed')==undefined ? -20 : el.data('speed'),
				origin = el.data('origin')==undefined ? "50% 50%" : el.data('origin'),
				ors = origin.split(" "),
				oo = new Object();

				if (ors.length>=1) {
					oo.x = ors[0];
					oo.y = ors[1];
				} else {
					oo.x = "50%";
					oo.y = "50%";
				}

				angle = angle*factor;
				radius = radius * factor;

			var  yo = (0-el.height()/2) + (radius*(-1+(parseInt(oo.y,0)/100))),
				 xo = (el.width())*(-0.5+(parseInt(oo.x,0)/100)), 
				 angobj=	{a:0, ang : angle, element:el, unit:radius, xoffset:xo, yoffset:yo};


				el.data('loop-timeline').append(new punchgs.TweenLite.fromTo(angobj,speed,
											{	a:360	},
											{	a:0,
												force3D:"auto",
												ease:punchgs.Linear.easeNone,
												onUpdate:function() {

													var rad = angobj.a * (Math.PI / 180);
										            punchgs.TweenLite.to(angobj.element,0.1,{force3D:"auto",x:angobj.xoffset+Math.cos(rad) * angobj.unit, y:angobj.yoffset+angobj.unit * (1 - Math.sin(rad))});

												},
												onComplete:function() {
													el.data('loop-timeline').restart();
												}
											}
											));
		}
	}
}

var killCaptionLoops = function(nextcaption) {
	// SOME LOOPING ANIMATION ON INTERNAL ELEMENTS
	nextcaption.find('.rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave').each(function() {
		var el = jQuery(this);
		if (el.data('loop-timeline')!=undefined) {
				el.data('loop-timeline').pause();
				el.data('loop-timeline',null);
			}
		});
}

})(jQuery);;/*****************************************************************************************************
 * jquery.themepunch.revmigrate.js - jQuery Plugin for Revolution Slider Migration from 4.x to 5.0   
 * @version: 1.0.2 (20.01.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
*****************************************************************************************************/


(function($) {

var _R = jQuery.fn.revolution;

///////////////////////////////////////////
// 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
///////////////////////////////////////////
jQuery.extend(true,_R, {

		// OUR PLUGIN HERE :)
		migration: function(container,options) {
			// PREPARE THE NEW OPTIONS
			options = prepOptions(options);			
			// PREPARE LAYER ANIMATIONS
			prepLayerAnimations(container,options);
			return options;
		}
	});

var prepOptions = function(o) {
	
	// PARALLAX FALLBACKS
	if (o.parallaxLevels || o.parallaxBgFreeze) {
		var p = new Object();		
		p.type = o.parallax
		p.levels = o.parallaxLevels;
		p.bgparallax = o.parallaxBgFreeze == "on" ? "off" : "on";

		p.disable_onmobile = o.parallaxDisableOnMobile;
		o.parallax = p;				
	}
	if (o.disableProgressBar === undefined) 
		o.disableProgressBar = o.hideTimerBar || "off";
	
	// BASIC FALLBACKS
	if (o.startwidth || o.startheight) {
		o.gridwidth = o.startwidth;
		o.gridheight = o.startheight;
	}

	if (o.sliderType===undefined) 
		o.sliderType = "standard";
	
	if (o.fullScreen==="on") 
		o.sliderLayout = "fullscreen";

	if (o.fullWidth==="on") 
		o.sliderLayout = "fullwidth";
	
	if (o.sliderLayout===undefined)
			o.sliderLayout = "auto";


	// NAVIGATION ARROW FALLBACKS
	if (o.navigation===undefined) {
		var n = new Object();
		if (o.navigationArrows=="solo" || o.navigationArrows=="nextto") {
			var a = new Object();
			a.enable = true;
			a.style = o.navigationStyle || "";
			a.hide_onmobile = o.hideArrowsOnMobile==="on" ? true : false; 														
			a.hide_onleave = o.hideThumbs >0 ? true : false;
			a.hide_delay = o.hideThumbs>0 ? o.hideThumbs : 200;
			a.hide_delay_mobile = o.hideNavDelayOnMobile || 1500;
			a.hide_under = 0;
			a.tmp = '';
			a.left = {															
							h_align:o.soloArrowLeftHalign,
							v_align:o.soloArrowLeftValign,
							h_offset:o.soloArrowLeftHOffset,
							v_offset:o.soloArrowLeftVOffset								
					 };
			a.right = {
							h_align:o.soloArrowRightHalign,
							v_align:o.soloArrowRightValign,
							h_offset:o.soloArrowRightHOffset,
							v_offset:o.soloArrowRightVOffset
						};
			n.arrows = a;
		}
		if (o.navigationType=="bullet") {
			var b = new Object();
			b.style = o.navigationStyle || "";
			b.enable=true;
			b.hide_onmobile = o.hideArrowsOnMobile==="on" ? true : false; 														
			b.hide_onleave = o.hideThumbs >0 ? true : false;
			b.hide_delay = o.hideThumbs>0 ? o.hideThumbs : 200;
			b.hide_delay_mobile = o.hideNavDelayOnMobile || 1500;
			b.hide_under = 0;
			b.direction="horizontal";
			b.h_align=o.navigationHAlign || "center";
			b.v_align=o.navigationVAlign || "bottom";
			b.space=5;
			b.h_offset=o.navigationHOffset || 0;
			b.v_offset=o.navigationVOffset || 20;
			b.tmp='<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>';
			n.bullets = b;
		}
		if (o.navigationType=="thumb") {
			var t = new Object();
			t.style=o.navigationStyle || "";
			t.enable=true;
			t.width=o.thumbWidth || 100;
			t.height=o.thumbHeight || 50;
			t.min_width=o.thumbWidth || 100;
			t.wrapper_padding=2;
			t.wrapper_color="#f5f5f5";
			t.wrapper_opacity=1;
			t.visibleAmount=o.thumbAmount || 3;
			t.hide_onmobile = o.hideArrowsOnMobile==="on" ? true : false; 														
			t.hide_onleave = o.hideThumbs >0 ? true : false;
			t.hide_delay = o.hideThumbs>0 ? o.hideThumbs : 200;
			t.hide_delay_mobile = o.hideNavDelayOnMobile || 1500;
			t.hide_under = 0;
			t.direction="horizontal";
			t.span=false;
			t.position="inner";							
			t.space=2;
			t.h_align=o.navigationHAlign || "center";
			t.v_align=o.navigationVAlign || "bottom";
			t.h_offset=o.navigationHOffset || 0;
			t.v_offset=o.navigationVOffset || 20;
			t.tmp='<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>';
			n.thumbnails = t;
		}
		
		o.navigation = n;

		o.navigation.keyboardNavigation=o.keyboardNavigation || "on";				
		o.navigation.onHoverStop=o.onHoverStop || "on";
		o.navigation.touch = {
			touchenabled:o.touchenabled || "on",
			swipe_treshold : o.swipe_treshold ||75,
			swipe_min_touches : o.swipe_min_touches || 1,
			drag_block_vertical:o.drag_block_vertical || false
		};

	}
	
	if (o.fallbacks==undefined)
		o.fallbacks  = {
						isJoomla:o.isJoomla || false,
						panZoomDisableOnMobile: o.parallaxDisableOnMobile || "off",
						simplifyAll:o.simplifyAll || "on",
						nextSlideOnWindowFocus:o.nextSlideOnWindowFocus || "off",	
						disableFocusListener:o.disableFocusListener || true						
					};

	return o;

}
	
var prepLayerAnimations = function(container,opt) {
			
	var c = new Object(),
		cw = container.width(),
		ch = container.height();

	c.skewfromleftshort = "x:-50;skX:85;o:0";
	c.skewfromrightshort = "x:50;skX:-85;o:0";
	c.sfl = "x:-50;o:0";
	c.sfr = "x:50;o:0";
	c.sft = "y:-50;o:0";
	c.sfb = "y:50;o:0";
	c.skewfromleft = "x:top;skX:85;o:0";
	c.skewfromright = "x:bottom;skX:-85;o:0";
	c.lfl = "x:top;o:0";
	c.lfr = "x:bottom;o:0";
	c.lft = "y:left;o:0";
	c.lfb = "y:right;o:0";
	c.fade = "o:0";
	var src = (Math.random()*720-360)
	
	
	container.find('.tp-caption').each(function() {		
		var cp = jQuery(this),
			rw = Math.random()*(cw*2)-cw,
			rh = Math.random()*(ch*2)-ch,
			rs = Math.random()*3,
			rz = Math.random()*720-360,
			rx = Math.random()*70-35,
			ry = Math.random()*70-35,
			ncc = cp.attr('class');
		c.randomrotate = "x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;";	
		
		if (ncc.match("randomrotate")) cp.data('transform_in',c.randomrotate) 
			else
		if (ncc.match(/\blfl\b/)) cp.data('transform_in',c.lfl) 
			else
		if (ncc.match(/\blfr\b/)) cp.data('transform_in',c.lfr) 
			else
		if (ncc.match(/\blft\b/)) cp.data('transform_in',c.lft) 
			else
		if (ncc.match(/\blfb\b/)) cp.data('transform_in',c.lfb) 
			else
		if (ncc.match(/\bsfl\b/)) cp.data('transform_in',c.sfl) 
			else
		if (ncc.match(/\bsfr\b/)) cp.data('transform_in',c.sfr) 
			else
		if (ncc.match(/\bsft\b/)) cp.data('transform_in',c.sft) 
			else
		if (ncc.match(/\bsfb\b/)) cp.data('transform_in',c.sfb) 
			else
		if (ncc.match(/\bskewfromleftshort\b/)) cp.data('transform_in',c.skewfromleftshort) 
			else
		if (ncc.match(/\bskewfromrightshort\b/)) cp.data('transform_in',c.skewfromrightshort) 
			else 
		if (ncc.match(/\bskewfromleft\b/)) cp.data('transform_in',c.skewfromleft) 
			else
		if (ncc.match(/\bskewfromright\b/)) cp.data('transform_in',c.skewfromright) 
			else
		if (ncc.match(/\bfade\b/)) cp.data('transform_in',c.fade);

		if (ncc.match(/\brandomrotateout\b/)) cp.data('transform_out',c.randomrotate) 
			else
		if (ncc.match(/\bltl\b/)) cp.data('transform_out',c.lfl) 
			else
		if (ncc.match(/\bltr\b/)) cp.data('transform_out',c.lfr) 
			else
		if (ncc.match(/\bltt\b/)) cp.data('transform_out',c.lft) 
			else
		if (ncc.match(/\bltb\b/)) cp.data('transform_out',c.lfb) 
			else
		if (ncc.match(/\bstl\b/)) cp.data('transform_out',c.sfl) 
			else
		if (ncc.match(/\bstr\b/)) cp.data('transform_out',c.sfr) 
			else
		if (ncc.match(/\bstt\b/)) cp.data('transform_out',c.sft) 
			else
		if (ncc.match(/\bstb\b/)) cp.data('transform_out',c.sfb) 
			else
		if (ncc.match(/\bskewtoleftshortout\b/)) cp.data('transform_out',c.skewfromleftshort) 
			else
		if (ncc.match(/\bskewtorightshortout\b/)) cp.data('transform_out',c.skewfromrightshort) 
			else
		if (ncc.match(/\bskewtoleftout\b/)) cp.data('transform_out',c.skewfromleft) 
			else
		if (ncc.match(/\bskewtorightout\b/)) cp.data('transform_out',c.skewfromright) 
			else
		if (ncc.match(/\bfadeout\b/)) cp.data('transform_out',c.fade);

		if (cp.data('customin')!=undefined) cp.data('transform_in',cp.data('customin'));
		if (cp.data('customout')!=undefined) cp.data('transform_out',cp.data('customout'));			

	})
	
}
})(jQuery);					




;/********************************************
 * REVOLUTION 5.2 EXTENSION - NAVIGATION
 * @version: 1.2.4 (10.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
(function($) {

var _R = jQuery.fn.revolution,
	_ISM = _R.is_mobile();


///////////////////////////////////////////
// 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
///////////////////////////////////////////
jQuery.extend(true,_R, {

		
	hideUnHideNav : function(opt) {	
		var w = opt.c.width(),
			a = opt.navigation.arrows,
			b = opt.navigation.bullets,
			c = opt.navigation.thumbnails,
			d = opt.navigation.tabs;

		if (ckNO(a)) biggerNav(opt.c.find('.tparrows'),a.hide_under,w,a.hide_over);	
		if (ckNO(b)) biggerNav(opt.c.find('.tp-bullets'),b.hide_under,w,b.hide_over);			
		if (ckNO(c)) biggerNav(opt.c.parent().find('.tp-thumbs'),c.hide_under,w,c.hide_over);	
		if (ckNO(d)) biggerNav(opt.c.parent().find('.tp-tabs'),d.hide_under,w,d.hide_over);		
		
		setONHeights(opt);
		
	},

	resizeThumbsTabs : function(opt,force) {	
		
		
		if ((opt.navigation && opt.navigation.tabs.enable) || (opt.navigation && opt.navigation.thumbnails.enable)) {
			var f = (jQuery(window).width()-480) / 500,
				tws = new punchgs.TimelineLite(),
				otab = opt.navigation.tabs,
				othu = opt.navigation.thumbnails,
				otbu = opt.navigation.bullets;

			tws.pause();
			f = f>1 ? 1 : f<0 ? 0 : f;
			
			if (ckNO(otab) && (force || otab.width>otab.min_width)) rtt(f,tws,opt.c,otab,opt.slideamount,'tab');	
			if (ckNO(othu) && (force || othu.width>othu.min_width)) rtt(f,tws,opt.c,othu,opt.slideamount,'thumb');
			if (ckNO(otbu) && force) {
				// SET BULLET SPACES AND POSITION
				var bw = opt.c.find('.tp-bullets');

				bw.find('.tp-bullet').each(function(i){
					var b = jQuery(this),			
						am = i+1,
						w = b.outerWidth()+parseInt((otbu.space===undefined? 0:otbu.space),0),
						h = b.outerHeight()+parseInt((otbu.space===undefined? 0:otbu.space),0);					
					
				if (otbu.direction==="vertical") {
					b.css({top:((am-1)*h)+"px", left:"0px"});
					bw.css({height:(((am-1)*h) + b.outerHeight()),width:b.outerWidth()});
				}
				else {
					b.css({left:((am-1)*w)+"px", top:"0px"});
					bw.css({width:(((am-1)*w) + b.outerWidth()),height:b.outerHeight()});			
				}
				});
				
			}

			tws.play();	
			
			setONHeights(opt);
		}
		return true;
	},

	updateNavIndexes : function(opt) {
		var _ = opt.c;
		
		function setNavIndex(a) {
			if (_.find(a).lenght>0) {
				_.find(a).each(function(i) {				
					jQuery(this).data('liindex',i);
				})
			}
		}
		
		setNavIndex('.tp-tab');
		setNavIndex('.tp-bullet');
		setNavIndex('.tp-thumb');		
		_R.resizeThumbsTabs(opt,true);
		_R.manageNavigation(opt);
	},


	// PUT NAVIGATION IN POSITION AND MAKE SURE THUMBS AND TABS SHOWING TO THE RIGHT POSITION
	manageNavigation : function(opt) {
		
		
		var	lof = _R.getHorizontalOffset(opt.c.parent(),"left"),
			rof = _R.getHorizontalOffset(opt.c.parent(),"right");

		if (ckNO(opt.navigation.bullets)) {
			if (opt.sliderLayout!="fullscreen" && opt.sliderLayout!="fullwidth") {
				// OFFSET ADJUSTEMENT FOR LEFT ARROWS BASED ON THUMBNAILS AND TABS OUTTER
				opt.navigation.bullets.h_offset_old = opt.navigation.bullets.h_offset_old === undefined ? opt.navigation.bullets.h_offset : opt.navigation.bullets.h_offset_old;
				opt.navigation.bullets.h_offset = opt.navigation.bullets.h_align==="center" ? opt.navigation.bullets.h_offset_old+lof/2 -rof/2: opt.navigation.bullets.h_offset_old+lof-rof;
			}
			setNavElPositions(opt.c.find('.tp-bullets'),opt.navigation.bullets,opt);		
		}
		
		if (ckNO(opt.navigation.thumbnails)) 
			setNavElPositions(opt.c.parent().find('.tp-thumbs'),opt.navigation.thumbnails,opt);		

		if (ckNO(opt.navigation.tabs))
			setNavElPositions(opt.c.parent().find('.tp-tabs'),opt.navigation.tabs,opt);		
		
		if (ckNO(opt.navigation.arrows)) {
			
			if (opt.sliderLayout!="fullscreen" && opt.sliderLayout!="fullwidth") {
				// OFFSET ADJUSTEMENT FOR LEFT ARROWS BASED ON THUMBNAILS AND TABS OUTTER
				opt.navigation.arrows.left.h_offset_old = opt.navigation.arrows.left.h_offset_old === undefined ? opt.navigation.arrows.left.h_offset : opt.navigation.arrows.left.h_offset_old;
				opt.navigation.arrows.left.h_offset = opt.navigation.arrows.left.h_align==="right" ?  opt.navigation.arrows.left.h_offset_old+rof : opt.navigation.arrows.left.h_offset_old+lof;

				opt.navigation.arrows.right.h_offset_old = opt.navigation.arrows.right.h_offset_old === undefined ? opt.navigation.arrows.right.h_offset : opt.navigation.arrows.right.h_offset_old;
				opt.navigation.arrows.right.h_offset = opt.navigation.arrows.right.h_align==="right" ? opt.navigation.arrows.right.h_offset_old+rof : opt.navigation.arrows.right.h_offset_old+lof;
			}
			setNavElPositions(opt.c.find('.tp-leftarrow.tparrows'),opt.navigation.arrows.left,opt);
			setNavElPositions(opt.c.find('.tp-rightarrow.tparrows'),opt.navigation.arrows.right,opt);
		}


		if (ckNO(opt.navigation.thumbnails))
			moveThumbsInPosition(opt.c.parent().find('.tp-thumbs'),opt.navigation.thumbnails);
		
		if (ckNO(opt.navigation.tabs))
			moveThumbsInPosition(opt.c.parent().find('.tp-tabs'),opt.navigation.tabs);
	},


	// MANAGE THE NAVIGATION
	 createNavigation : function(container,opt) {

		var cp = container.parent(),		
			_a = opt.navigation.arrows, _b = opt.navigation.bullets, _c = opt.navigation.thumbnails, _d = opt.navigation.tabs,
			a = ckNO(_a), b = ckNO(_b), c = ckNO(_c), d = ckNO(_d);
			
		
		// Initialise Keyboard Navigation if Option set so
		initKeyboard(container,opt);

		// Initialise Mouse Scroll Navigation if Option set so
		initMouseScroll(container,opt);

		//Draw the Arrows
		if (a) initArrows(container,_a,opt);

		// BUILD BULLETS, THUMBS and TABS		
		opt.li.each(function(index) {
			
			var li_rtl = jQuery(opt.li[opt.li.length-1-index]);
			var li = jQuery(this);				

			if (b) 
				if (opt.navigation.bullets.rtl)
					addBullet(container,_b,li_rtl,opt);		
				else
					addBullet(container,_b,li,opt);	
			
			if (c) 
				if (opt.navigation.thumbnails.rtl)
					addThumb(container,_c,li_rtl,'tp-thumb',opt);		
				else
					addThumb(container,_c,li,'tp-thumb',opt);
			if (d) 
				if (opt.navigation.tabs.rtl)
					addThumb(container,_d,li_rtl,'tp-tab',opt);
				else
					addThumb(container,_d,li,'tp-tab',opt);
		});
		
		// LISTEN TO SLIDE CHANGE - SET ACTIVE SLIDE BULLET				
		container.bind('revolution.slide.onafterswap revolution.nextslide.waiting',function() {		
			
			//cp.find('.tp-bullet, .tp-thumb, .tp-tab').removeClass("selected");			
			
			var si = container.find(".next-revslide").length==0 ? container.find(".active-revslide").data("index") : container.find(".next-revslide").data("index");			
			
			container.find('.tp-bullet').each(function() {
				var _t = jQuery(this);		
				if (_t.data('liref')===si) 
					_t.addClass("selected");
				else
					_t.removeClass("selected");
			});		

			cp.find('.tp-thumb, .tp-tab').each(function() {
				var _t = jQuery(this);				
				if (_t.data('liref')===si) {			
					_t.addClass("selected");	
					if (_t.hasClass("tp-tab"))			
						moveThumbsInPosition(cp.find('.tp-tabs'),_d);				
					else
						moveThumbsInPosition(cp.find('.tp-thumbs'),_c);				
				} else
					_t.removeClass("selected");		
				
			});		
			
			var ai = 0,			
				f = false;
			if (opt.thumbs)
				jQuery.each(opt.thumbs,function(i,obj) {			
					ai = f === false ? i : ai;
					f = obj.id === si || i === si ? true : f;
				});			
			
			
			var pi = ai>0 ? ai-1 : opt.slideamount-1,
				ni = (ai+1)==opt.slideamount ? 0 : ai+1;
				
			
            // Disable inserting the ``tmp`` template within the arrow buttons.
            // We have patched the arrow buttons directly in a way which wouldn't be possible with the ``tmp`` config.
			if (false && _a.enable === true) {
				var inst = _a.tmp;

				jQuery.each(opt.thumbs[pi].params,function(i,obj) {
					inst = inst.replace(obj.from,obj.to);
				});	
				_a.left.j.html(inst);
				inst = _a.tmp;
				if (ni>opt.slideamount) return;
				jQuery.each(opt.thumbs[ni].params,function(i,obj) {
					inst = inst.replace(obj.from,obj.to);
				});	
				_a.right.j.html(inst);
				punchgs.TweenLite.set(_a.left.j.find('.tp-arr-imgholder'),{backgroundImage:"url("+opt.thumbs[pi].src+")"});
				punchgs.TweenLite.set(_a.right.j.find('.tp-arr-imgholder'),{backgroundImage:"url("+opt.thumbs[ni].src+")"});			
			}

			
		});
			
		hdResets(_a);
		hdResets(_b);
		hdResets(_c);
		hdResets(_d);
		
		
		// HOVER OVER ELEMENTS SHOULD SHOW/HIDE NAVIGATION ELEMENTS
		cp.on("mouseenter mousemove",function() {

			if (!cp.hasClass("tp-mouseover")) {
				cp.addClass("tp-mouseover");
				
				punchgs.TweenLite.killDelayedCallsTo(showHideNavElements);
				
				if (a && _a.hide_onleave) showHideNavElements(cp.find('.tparrows'),_a,"show");
				if (b && _b.hide_onleave) showHideNavElements(cp.find('.tp-bullets'),_b,"show");		
				if (c && _c.hide_onleave) showHideNavElements(cp.find('.tp-thumbs'),_c,"show");
				if (d && _d.hide_onleave) showHideNavElements(cp.find('.tp-tabs'),_d,"show");
				
				// ON MOBILE WE NEED TO HIDE ELEMENTS EVEN AFTER TOUCH
				if (_ISM) {
					cp.removeClass("tp-mouseover");		
					callAllDelayedCalls(container,opt);
				}
			}
		});
		
		cp.on("mouseleave",function() {
			cp.removeClass("tp-mouseover");		
			callAllDelayedCalls(container,opt);
		});

		// FIRST RUN HIDE ALL ELEMENTS 
		if (a && _a.hide_onleave) showHideNavElements(cp.find('.tparrows'),_a,"hide",0);
		if (b && _b.hide_onleave) showHideNavElements(cp.find('.tp-bullets'),_b,"hide",0);	
		if (c && _c.hide_onleave) showHideNavElements(cp.find('.tp-thumbs'),_c,"hide",0);
		if (d && _d.hide_onleave) showHideNavElements(cp.find('.tp-tabs'),_d,"hide",0);
		
		// Initialise Swipe Navigation
		if (c) swipeAction(cp.find('.tp-thumbs'),opt);
		if (d) swipeAction(cp.find('.tp-tabs'),opt);
		if (opt.sliderType==="carousel") swipeAction(container,opt,true);
		if (opt.navigation.touch.touchenabled=="on") swipeAction(container,opt,"swipebased");
	}

});




/////////////////////////////////
//	-	INTERNAL FUNCTIONS	- ///
/////////////////////////////////


var moveThumbsInPosition = function(container,opt) {

		var thumbs = container.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs",
			thumbmask = container.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask",
			thumbsiw = container.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
			thumb = container.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
			t=container.find(thumbmask),
			el = t.find(thumbsiw),
			thumbdir = opt.direction,							
			tw = thumbdir==="vertical" ? t.find(thumb).first().outerHeight(true)+opt.space : t.find(thumb).first().outerWidth(true)+opt.space,					
			tmw = thumbdir==="vertical" ? t.height() : t.width(),
			ti = parseInt(t.find(thumb+'.selected').data('liindex'),0),		
			me = tmw/tw,
			ts = thumbdir==="vertical" ? t.height() : t.width(),
			tp = 0-(ti * tw),
			els =  thumbdir==="vertical" ? el.height() : el.width(),
			curpos = tp < 0-(els-ts) ? 0-(els-ts) : curpos > 0 ? 0 : tp,
			elp = el.data('offset');


		if (me>2) {
			curpos = tp - (elp+tw) <= 0 ? tp - (elp+tw) < 0-tw ? elp : curpos + tw : curpos;		
			curpos = ( (tp-tw + elp + tmw)< tw && tp  + (Math.round(me)-2)*tw < elp) ? tp + (Math.round(me)-2)*tw : curpos;				
		}
		
		curpos = curpos < 0-(els-ts) ? 0-(els-ts) : curpos > 0 ? 0 : curpos;

		if (thumbdir!=="vertical" && t.width()>=el.width()) curpos = 0;
		if (thumbdir==="vertical" && t.height()>=el.height()) curpos = 0;


		if (!container.hasClass("dragged")) {
			if (thumbdir==="vertical")
				el.data('tmmove',punchgs.TweenLite.to(el,0.5,{top:curpos+"px",ease:punchgs.Power3.easeInOut}));
			else
				el.data('tmmove',punchgs.TweenLite.to(el,0.5,{left:curpos+"px",ease:punchgs.Power3.easeInOut}));
			el.data('offset',curpos);	
		}	
	};


// RESIZE THE THUMBS BASED ON ORIGINAL SIZE AND CURRENT SIZE OF WINDOW
var rtt = function(f,tws,c,o,lis,wh) {	
	var h = c.parent().find('.tp-'+wh+'s'),
		ins = h.find('.tp-'+wh+'s-inner-wrapper'),
		mask = h.find('.tp-'+wh+'-mask'),		
		cw = o.width*f < o.min_width ? o.min_width : Math.round(o.width*f),
		ch = Math.round((cw/o.width) * o.height),
		iw = o.direction === "vertical" ? cw : (cw*lis) + ((o.space)*(lis-1)),
		ih = o.direction === "vertical" ? (ch*lis) + ((o.space)*(lis-1)) : ch,
		anm = o.direction === "vertical" ? {width:cw+"px"} : {height:ch+"px"};
			

	tws.add(punchgs.TweenLite.set(h,anm));
	tws.add(punchgs.TweenLite.set(ins,{width:iw+"px",height:ih+"px"}));
	tws.add(punchgs.TweenLite.set(mask,{width:iw+"px",height:ih+"px"}));	
	var fin = ins.find('.tp-'+wh+'');
	if (fin)
		jQuery.each(fin,function(i,el) {
			if (o.direction === "vertical")
				tws.add(punchgs.TweenLite.set(el,{top:(i*(ch+parseInt((o.space===undefined? 0:o.space),0))),width:cw+"px",height:ch+"px"}));	
			else 
			if (o.direction === "horizontal")
				tws.add(punchgs.TweenLite.set(el,{left:(i*(cw+parseInt((o.space===undefined? 0:o.space),0))),width:cw+"px",height:ch+"px"}));	
		});	
	return tws;
};

// INTERNAL FUNCTIONS
var normalizeWheel = function( event) /*object*/ {
			
			  var sX = 0, sY = 0,       // spinX, spinY
			      pX = 0, pY = 0,       // pixelX, pixelY
			      PIXEL_STEP = 1,
			      LINE_HEIGHT = 1,
			      PAGE_HEIGHT = 1;

			  // Legacy
			  if ('detail'      in event) { sY = event.detail; }
			  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
			  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
			  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

			  
			  //sY = navigator.userAgent.match(/mozilla/i) ? sY*10 : sY;
			  
			  
			  // side scrolling on FF with DOMMouseScroll
			  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
			    sX = sY;
			    sY = 0;
			  }
			  
			  pX = sX * PIXEL_STEP;
			  pY = sY * PIXEL_STEP;

			  if ('deltaY' in event) { pY = event.deltaY; }
			  if ('deltaX' in event) { pX = event.deltaX; }



			  if ((pX || pY) && event.deltaMode) {
			    if (event.deltaMode == 1) {          // delta in LINE units
			      pX *= LINE_HEIGHT;
			      pY *= LINE_HEIGHT;
			    } else {                             // delta in PAGE units
			      pX *= PAGE_HEIGHT;
			      pY *= PAGE_HEIGHT;
			    }
			  }

			  // Fall-back if spin cannot be determined
			  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
			  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }
			 
			  pY = navigator.userAgent.match(/mozilla/i) ? pY*10 : pY;			 			  

			  if (pY>300 || pY<-300) pY = pY/10;

			  return { spinX  : sX,
			           spinY  : sY,
			           pixelX : pX,
			           pixelY : pY };
		};

var initKeyboard = function(container,opt) {
	if (opt.navigation.keyboardNavigation!=="on")  return;		
	jQuery(document).keydown(function(e){
		if ((opt.navigation.keyboard_direction=="horizontal" && e.keyCode == 39) || (opt.navigation.keyboard_direction=="vertical" && e.keyCode==40)) {
			opt.sc_indicator="arrow";
			opt.sc_indicator_dir = 0;
			_R.callingNewSlide(opt,container,1);					
		}
		if ((opt.navigation.keyboard_direction=="horizontal" && e.keyCode == 37) || (opt.navigation.keyboard_direction=="vertical" && e.keyCode==38)) {
			opt.sc_indicator="arrow";
			opt.sc_indicator_dir = 1;
			_R.callingNewSlide(opt,container,-1);									
		}
	});		
};



var initMouseScroll = function(container,opt) {			

	if (opt.navigation.mouseScrollNavigation!=="on" && opt.navigation.mouseScrollNavigation!=="carousel") return;
	opt.isIEEleven = !!navigator.userAgent.match(/Trident.*rv\:11\./);
	opt.isSafari = !!navigator.userAgent.match(/safari/i);
	opt.ischrome = !!navigator.userAgent.match(/chrome/i);

	
	var bl = opt.ischrome ? -49 : opt.isIEEleven || opt.isSafari ? -9 : navigator.userAgent.match(/mozilla/i) ?  -29 :  -49,
		tl = opt.ischrome ? 49 : opt.isIEEleven || opt.isSafari ? 9 : navigator.userAgent.match(/mozilla/i) ? 29 :  49;
	
	
	container.on('mousewheel DOMMouseScroll', function(e) {							
						
			var res = normalizeWheel(e.originalEvent),		
				asi = container.find('.tp-revslider-slidesli.active-revslide').index(),
				psi = container.find('.tp-revslider-slidesli.processing-revslide').index(),
				fs = asi!=-1 && asi==0 || psi!=-1 && psi==0 ? true : false,
				ls = asi!=-1 && asi==opt.slideamount-1 || psi!=1 && psi==opt.slideamount-1 ? true:false,				
				ret = true;
			if (opt.navigation.mouseScrollNavigation=="carousel") 
				fs = ls = false;								
		if (psi==-1) {				

			if(res.pixelY<bl) {
				
				if (!fs) {					
					opt.sc_indicator="arrow";
					if (opt.navigation.mouseScrollReverse!=="reverse") {
						opt.sc_indicator_dir = 0;
						_R.callingNewSlide(opt,container,-1);	
					} 
					ret = false;
				}
				if (!ls) {
					opt.sc_indicator="arrow";
					if (opt.navigation.mouseScrollReverse==="reverse") {
						opt.sc_indicator_dir = 1;
						_R.callingNewSlide(opt,container,1);	
					}					
					ret = false;			 
				}
			 }
			 else 
			 if(res.pixelY>tl) {				
			 	if (!ls) {			 					 		
				 	opt.sc_indicator="arrow";
				 	if (opt.navigation.mouseScrollReverse!=="reverse") {
						opt.sc_indicator_dir = 1;
						_R.callingNewSlide(opt,container,1);	
					} 				
					ret = false;
				}
				if (!fs) {
					opt.sc_indicator="arrow";
					if (opt.navigation.mouseScrollReverse==="reverse") {
						opt.sc_indicator_dir = 0;
						_R.callingNewSlide(opt,container,-1);	
					}		
					ret = false;
				}
			 }
			 
			
		} else {										
			ret = false;		
		}	

		var tc = opt.c.offset().top-jQuery('body').scrollTop(),
			bc = tc+opt.c.height();
		if (opt.navigation.mouseScrollNavigation!="carousel") {
			if (opt.navigation.mouseScrollReverse!=="reverse")
				if ((tc>0 && res.pixelY>0) || (bc<jQuery(window).height() && res.pixelY<0))
					ret = true;
			if (opt.navigation.mouseScrollReverse==="reverse")
				if ((tc<0 && res.pixelY<0) || (bc>jQuery(window).height() && res.pixelY>0))
					ret = true;
		} else {
			ret=false;
		}

		
		if (ret==false) {
			e.preventDefault(e);    		
			return false;
		} else {			
			return;
		}
	});
};

var isme = function (a,c,e) {		
		a =  _ISM ? jQuery(e.target).closest('.'+a).length || jQuery(e.srcElement).closest('.'+a).length : jQuery(e.toElement).closest('.'+a).length || jQuery(e.originalTarget).closest('.'+a).length;
		return a === true || a=== 1 ? 1 : 0;
};

// 	-	SET THE SWIPE FUNCTION //	
var swipeAction = function(container,opt,vertical) {	
		
	container.data('opt',opt);

	// TOUCH ENABLED SCROLL
	var _ = opt.carousel;
	jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe");
	
	_.Limit = "endless";			
	var notonbody =  _ISM || _R.get_browser()==="Firefox",
		SwipeOn =  container, //notonbody ? container : jQuery('body'),
		pagescroll = opt.navigation.thumbnails.direction==="vertical" || opt.navigation.tabs.direction==="vertical"? "none" : "vertical",
		swipe_wait_dir = opt.navigation.touch.swipe_direction || "horizontal";

	pagescroll = vertical == "swipebased" && swipe_wait_dir=="vertical" ? "none" : vertical ? "vertical" : pagescroll;
	
	if (!jQuery.fn.swipetp) jQuery.fn.swipetp = jQuery.fn.swipe;
	if (!jQuery.fn.swipetp.defaults || !jQuery.fn.swipetp.defaults.excludedElements) 
		if (!jQuery.fn.swipetp.defaults) 
			jQuery.fn.swipetp.defaults = new Object();

	jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, .noSwipe"


	SwipeOn.swipetp({			
		allowPageScroll:pagescroll,			
		triggerOnTouchLeave:true,
		treshold:opt.navigation.touch.swipe_treshold,
		fingers:opt.navigation.touch.swipe_min_touches,
						
		excludeElements:jQuery.fn.swipetp.defaults.excludedElements,	
			
		swipeStatus:function(event,phase,direction,distance,duration,fingerCount,fingerData) {			
					

			var withinslider = isme('rev_slider_wrapper',container,event),
				withinthumbs =  isme('tp-thumbs',container,event),
				withintabs =  isme('tp-tabs',container,event),
				starget = jQuery(this).attr('class'),
				istt = starget.match(/tp-tabs|tp-thumb/gi) ? true : false;
								

				
			// SWIPE OVER SLIDER, TO SWIPE SLIDES IN CAROUSEL MODE
			if (opt.sliderType==="carousel" && 
				(((phase==="move" || phase==="end" || phase=="cancel") &&  (opt.dragStartedOverSlider && !opt.dragStartedOverThumbs && !opt.dragStartedOverTabs))
				 || (phase==="start" && withinslider>0 && withinthumbs===0 && withintabs===0))) {				
									
				opt.dragStartedOverSlider = true;
				distance = (direction && direction.match(/left|up/g)) ?  Math.round(distance * -1) : distance = Math.round(distance * 1);
				
				switch (phase) {
					case "start":								
						if (_.positionanim!==undefined) {											
								_.positionanim.kill();																		
								_.slide_globaloffset = _.infinity==="off" ? _.slide_offset : _R.simp(_.slide_offset, _.maxwidth);																		
						}
						_.overpull = "none";																						
						_.wrap.addClass("dragged");		
					break;
					case "move":	
										

							_.slide_offset = _.infinity==="off" ? _.slide_globaloffset + distance : _R.simp(_.slide_globaloffset + distance, _.maxwidth);
							
							if (_.infinity==="off") {
								var bb = _.horizontal_align==="center" ? ((_.wrapwidth/2-_.slide_width/2) - _.slide_offset) / _.slide_width : (0 - _.slide_offset) / _.slide_width;
								
								if ((_.overpull ==="none" || _.overpull===0)  && (bb<0 || bb>opt.slideamount-1)) 
									_.overpull =  distance;
								else
								if (bb>=0 && bb<=opt.slideamount-1 && ((bb>=0 && distance>_.overpull) || (bb<=opt.slideamount-1 && distance<_.overpull)))
									_.overpull = 0;
																																			
								_.slide_offset = bb<0 ? _.slide_offset+ (_.overpull-distance)/1.1 + Math.sqrt(Math.abs((_.overpull-distance)/1.1)) : 
								 bb>opt.slideamount-1 ? _.slide_offset+ (_.overpull-distance)/1.1 - Math.sqrt(Math.abs((_.overpull-distance)/1.1)) : _.slide_offset ;
							 }
							_R.organiseCarousel(opt,direction,true,true);									
					break;

					case "end":
					case "cancel":		
							//duration !!
							_.slide_globaloffset = _.slide_offset;	
							_.wrap.removeClass("dragged");
							_R.carouselToEvalPosition(opt,direction);							
							opt.dragStartedOverSlider = false;
							opt.dragStartedOverThumbs = false;
							opt.dragStartedOverTabs = false;																									
					break;
				}
			}  else

			// SWIPE OVER THUMBS OR TABS
			if ((
				((phase==="move" || phase==="end" || phase=="cancel") &&  (!opt.dragStartedOverSlider && (opt.dragStartedOverThumbs || opt.dragStartedOverTabs)))
				 || 
				(phase==="start" && (withinslider>0 && (withinthumbs>0 || withintabs>0))))) {				
								
				
				if (withinthumbs>0) opt.dragStartedOverThumbs = true;
				if (withintabs>0) opt.dragStartedOverTabs = true;
				
				var thumbs = opt.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
					thumbmask = opt.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
					thumbsiw = opt.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
					thumb = opt.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
					_o = opt.dragStartedOverThumbs ? opt.navigation.thumbnails : opt.navigation.tabs;


				distance = (direction && direction.match(/left|up/g)) ?  Math.round(distance * -1) : distance = Math.round(distance * 1);						
				var t= container.parent().find(thumbmask),
					el = t.find(thumbsiw),
					tdir = _o.direction,
					els = tdir==="vertical" ? el.height() : el.width(),
					ts =  tdir==="vertical" ? t.height() : t.width(),
					tw = tdir==="vertical" ? t.find(thumb).first().outerHeight(true)+_o.space : t.find(thumb).first().outerWidth(true)+_o.space,	
					newpos =  (el.data('offset') === undefined ? 0 : parseInt(el.data('offset'),0)),
					curpos = 0;
				
				switch (phase) {
					case "start":							
						container.parent().find(thumbs).addClass("dragged");
						newpos = tdir === "vertical" ? el.position().top : el.position().left;
						el.data('offset',newpos);
						if (el.data('tmmove')) el.data('tmmove').pause();
						
					break;
					case "move":	
							if (els<=ts) return false;
															
							curpos = newpos + distance;																					
							curpos = curpos>0 ? tdir==="horizontal" ? curpos - (el.width() * (curpos/el.width() * curpos/el.width())) : curpos - (el.height() * (curpos/el.height() * curpos/el.height())) : curpos;
							var dif = tdir==="vertical" ? 0-(el.height()-t.height()) : 0-(el.width()-t.width());
							curpos = curpos < dif ? tdir==="horizontal" ? curpos + (el.width() * (curpos-dif)/el.width() * (curpos-dif)/el.width()) : curpos + (el.height() * (curpos-dif)/el.height() * (curpos-dif)/el.height()) : curpos;									
							if (tdir==="vertical") 									
								punchgs.TweenLite.set(el,{top:curpos+"px"});									
							else
								punchgs.TweenLite.set(el,{left:curpos+"px"});	
							

					break;

					case "end":
					case "cancel":		
						
						if (istt) {
							curpos = newpos + distance;								
															
							curpos = tdir==="vertical" ? curpos < 0-(el.height()-t.height()) ? 0-(el.height()-t.height()) : curpos : curpos < 0-(el.width()-t.width()) ? 0-(el.width()-t.width()) : curpos;
							curpos = curpos > 0 ? 0 : curpos;

							curpos = Math.abs(distance)>tw/10 ? distance<=0 ? Math.floor(curpos/tw)*tw : Math.ceil(curpos/tw)*tw : distance<0 ? Math.ceil(curpos/tw)*tw : Math.floor(curpos/tw)*tw;

							curpos = tdir==="vertical" ? curpos < 0-(el.height()-t.height()) ? 0-(el.height()-t.height()) : curpos : curpos < 0-(el.width()-t.width()) ? 0-(el.width()-t.width()) : curpos;
							curpos = curpos > 0 ? 0 : curpos;
							
							if (tdir==="vertical")
								punchgs.TweenLite.to(el,0.5,{top:curpos+"px",ease:punchgs.Power3.easeOut});
							else
								punchgs.TweenLite.to(el,0.5,{left:curpos+"px",ease:punchgs.Power3.easeOut});

							curpos = !curpos ?  tdir==="vertical" ? el.position().top : el.position().left : curpos;	
							
							el.data('offset',curpos);								
							el.data('distance',distance);

							setTimeout(function() {
								opt.dragStartedOverSlider = false;
								opt.dragStartedOverThumbs = false;
								opt.dragStartedOverTabs = false;
							},100);
							container.parent().find(thumbs).removeClass("dragged");
							
							return false;
						}
					break;							
				}
			}									
			else  {								
				if (phase=="end" && !istt) {		
					
					opt.sc_indicator="arrow";	
					
					if ((swipe_wait_dir=="horizontal" && direction == "left") || (swipe_wait_dir=="vertical" && direction == "up")) {
						opt.sc_indicator_dir = 0;
						_R.callingNewSlide(opt,opt.c,1);
						return false;
					}
					if ((swipe_wait_dir=="horizontal" && direction == "right") || (swipe_wait_dir=="vertical" && direction == "down")) {
						opt.sc_indicator_dir = 1;
						_R.callingNewSlide(opt,opt.c,-1);	
						return false;
					}

				}
				opt.dragStartedOverSlider = false;
				opt.dragStartedOverThumbs = false;
				opt.dragStartedOverTabs = false;
				return true;				
			}												
		}
	});	
};


// NAVIGATION HELPER FUNCTIONS
var hdResets = function(o) { 
	o.hide_delay = !jQuery.isNumeric(parseInt(o.hide_delay,0)) ? 0.2 : o.hide_delay/1000; 
	o.hide_delay_mobile = !jQuery.isNumeric(parseInt(o.hide_delay_mobile,0)) ? 0.2 : o.hide_delay_mobile/1000;
};

var ckNO = function(opt) { 
 	return opt && opt.enable; 
};

var ckNOLO = function(opt) { 
 	return opt && opt.enable && opt.hide_onleave===true && (opt.position===undefined ? true : !opt.position.match(/outer/g)); 
};

var callAllDelayedCalls = function(container,opt) {
	var cp = container.parent();

	if (ckNOLO(opt.navigation.arrows))
			punchgs.TweenLite.delayedCall(_ISM ? opt.navigation.arrows.hide_delay_mobile : opt.navigation.arrows.hide_delay,showHideNavElements,[cp.find('.tparrows'),opt.navigation.arrows,"hide"]);

	if (ckNOLO(opt.navigation.bullets))
		punchgs.TweenLite.delayedCall(_ISM ? opt.navigation.bullets.hide_delay_mobile : opt.navigation.bullets.hide_delay,showHideNavElements,[cp.find('.tp-bullets'),opt.navigation.bullets,"hide"]);
	
	if (ckNOLO(opt.navigation.thumbnails))
		punchgs.TweenLite.delayedCall(_ISM ? opt.navigation.thumbnails.hide_delay_mobile : opt.navigation.thumbnails.hide_delay,showHideNavElements,[cp.find('.tp-thumbs'),opt.navigation.thumbnails,"hide"]);
	
	if (ckNOLO(opt.navigation.tabs))
		punchgs.TweenLite.delayedCall(_ISM ? opt.navigation.tabs.hide_delay_mobile : opt.navigation.tabs.hide_delay,showHideNavElements,[cp.find('.tp-tabs'),opt.navigation.tabs,"hide"]);
};

var showHideNavElements = function(container,opt,dir,speed) {
	speed = speed===undefined ? 0.5 : speed;	
	switch (dir) {
		case "show":	
			punchgs.TweenLite.to(container,speed, {autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});
		break;
		case "hide":
			punchgs.TweenLite.to(container,speed, {autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"});
		break;		
	}	

};


// ADD ARROWS
var initArrows = function(container,o,opt) {

	// SET oIONAL CLASSES
	o.style = o.style === undefined ? "" : o.style;
	o.left.style = o.left.style === undefined ? "" : o.left.style;
	o.right.style = o.right.style === undefined ? "" : o.right.style;	
		
	
	// ADD LEFT AND RIGHT ARROWS
	if (container.find('.tp-leftarrow.tparrows').length===0) 
		container.append('<button type="button" class="tp-leftarrow tparrows '+o.style+' '+o.left.style+'" title="Zurück"><i class="fa icon" aria-hidden="true"></i><span class="sr-only button-title">Zurück</span><span class="tp-title-wrap"></span></button>');
	if (container.find('.tp-rightarrow.tparrows').length===0) 
		container.append('<button type="button" class="tp-rightarrow tparrows '+o.style+' '+o.right.style+'" title="Weiter"><i class="fa icon" aria-hidden="true"></i><span class="sr-only button-title">Weiter</span><span class="tp-title-wrap"></span></button>');
	var la = container.find('.tp-leftarrow.tparrows'),
		ra = container.find('.tp-rightarrow.tparrows');
	if (o.rtl) {
		// CLICK HANDLINGS ON LEFT AND RIGHT ARROWS
		la.click(function() { opt.sc_indicator="arrow"; opt.sc_indicator_dir = 0;container.revnext();});
		ra.click(function() { opt.sc_indicator="arrow"; opt.sc_indicator_dir = 1;container.revprev();});
	} else {
		// CLICK HANDLINGS ON LEFT AND RIGHT ARROWS
		ra.click(function() { opt.sc_indicator="arrow"; opt.sc_indicator_dir = 0;container.revnext();});
		la.click(function() { opt.sc_indicator="arrow"; opt.sc_indicator_dir = 1;container.revprev();});
	}
	// SHORTCUTS
	o.right.j = container.find('.tp-rightarrow.tparrows');
	o.left.j = container.find('.tp-leftarrow.tparrows')
	
	// OUTTUER PADDING DEFAULTS
	o.padding_top = parseInt((opt.carousel.padding_top||0),0),
	o.padding_bottom = parseInt((opt.carousel.padding_bottom||0),0);
	
	// POSITION OF ARROWS
	setNavElPositions(la,o.left,opt);
	setNavElPositions(ra,o.right,opt);

	o.left.opt = opt;
	o.right.opt = opt;
	

	if (o.position=="outer-left" || o.position=="outer-right") opt.outernav = true;	
};


// PUT ELEMENTS VERTICAL / HORIZONTAL IN THE RIGHT POSITION
var putVinPosition = function(el,o,opt) {
	
	var elh = el.outerHeight(true),
		elw = el.outerWidth(true),
		oh = o.opt== undefined ? 0 : opt.conh == 0 ? opt.height : opt.conh,
		by = o.container=="layergrid" ? opt.sliderLayout=="fullscreen" ? opt.height/2 - (opt.gridheight[opt.curWinRange]*opt.bh)/2 : (opt.autoHeight=="on" || (opt.minHeight!=undefined && opt.minHeight>0)) ? oh/2 - (opt.gridheight[opt.curWinRange]*opt.bh)/2  : 0 : 0,		
		a = o.v_align === "top" ? {top:"0px",y:Math.round(o.v_offset+by)+"px"} : o.v_align === "center" ? {top:"50%",y:Math.round(((0-elh/2)+o.v_offset))+"px"} : {top:"100%",y:Math.round((0-(elh+o.v_offset+by)))+"px"};					
	if (!el.hasClass("outer-bottom")) punchgs.TweenLite.set(el,a);	
	
};

var putHinPosition = function(el,o,opt) {
	
	var elh = el.outerHeight(true),
		elw = el.outerWidth(true),
		bx = o.container=="layergrid" ? opt.sliderType==="carousel" ? 0 : opt.width/2 - (opt.gridwidth[opt.curWinRange]*opt.bw)/2 : 0,
		a = o.h_align === "left" ? {left:"0px",x:Math.round(o.h_offset+bx)+"px"} : o.h_align === "center" ? {left:"50%",x:Math.round(((0-elw/2)+o.h_offset))+"px"} : {left:"100%",x:Math.round((0-(elw+o.h_offset+bx)))+"px"};	
	punchgs.TweenLite.set(el,a);
};

// SET POSITION OF ELEMENTS
var setNavElPositions = function(el,o,opt) {

	var wrapper =  
		el.closest('.tp-simpleresponsive').length>0 ? 
			el.closest('.tp-simpleresponsive') : 
			el.closest('.tp-revslider-mainul').length>0 ? 
				el.closest('.tp-revslider-mainul')  : 
				el.closest('.rev_slider_wrapper').length>0  ? 
				el.closest('.rev_slider_wrapper'):
				el.parent().find('.tp-revslider-mainul'),
		ww = wrapper.width(),
		wh = wrapper.height();	

	putVinPosition(el,o,opt);
	putHinPosition(el,o,opt);

	if (o.position==="outer-left" && (o.sliderLayout=="fullwidth" || o.sliderLayout=="fullscreen")) 
		punchgs.TweenLite.set(el,{left:(0-el.outerWidth())+"px",x:o.h_offset+"px"});
	else 
	if (o.position==="outer-right" && (o.sliderLayout=="fullwidth" || o.sliderLayout=="fullscreen"))
		punchgs.TweenLite.set(el,{right:(0-el.outerWidth())+"px",x:o.h_offset+"px"});
	
		
	// MAX WIDTH AND HEIGHT BASED ON THE SOURROUNDING CONTAINER
	if (el.hasClass("tp-thumbs") || el.hasClass("tp-tabs")) {

		var wpad = el.data('wr_padding'),
			maxw = el.data('maxw'),
			maxh = el.data('maxh'),			
			mask = el.hasClass("tp-thumbs") ? el.find('.tp-thumb-mask') : el.find('.tp-tab-mask'),
			cpt = parseInt((o.padding_top||0),0),
			cpb = parseInt((o.padding_bottom||0),0);
					
		
		// ARE THE CONTAINERS BIGGER THAN THE SLIDER WIDTH OR HEIGHT ?
		if (maxw>ww && o.position!=="outer-left" && o.position!=="outer-right") {				
			punchgs.TweenLite.set(el,{left:"0px",x:0,maxWidth:(ww-2*wpad)+"px"});
			punchgs.TweenLite.set(mask,{maxWidth:(ww-2*wpad)+"px"});
		} else {			
			punchgs.TweenLite.set(el,{maxWidth:(maxw)+"px"});
			punchgs.TweenLite.set(mask,{maxWidth:(maxw)+"px"});			
		}
		
		if (maxh+2*wpad>wh && o.position!=="outer-bottom" && o.position!=="outer-top") {				
			punchgs.TweenLite.set(el,{top:"0px",y:0,maxHeight:(cpt+cpb+(wh-2*wpad))+"px"});
			punchgs.TweenLite.set(mask,{maxHeight:(cpt+cpb+(wh-2*wpad))+"px"});
		} else {						
			punchgs.TweenLite.set(el,{maxHeight:(maxh)+"px"});
			punchgs.TweenLite.set(mask,{maxHeight:maxh+"px"});
		}
		
		if (o.position!=="outer-left" && o.position!=="outer-right") {
			cpt = 0;
			cpb = 0;
		}

		// SPAN IS ENABLED
		if (o.span===true && o.direction==="vertical") {
			punchgs.TweenLite.set(el,{maxHeight:(cpt+cpb+(wh-2*wpad))+"px",height:(cpt+cpb+(wh-2*wpad))+"px",top:(0-cpt),y:0});					
			putVinPosition(mask,o,opt);
		} else 

		if (o.span===true && o.direction==="horizontal") {
			punchgs.TweenLite.set(el,{maxWidth:"100%",width:(ww-2*wpad)+"px",left:0,x:0});					
			putHinPosition(mask,o,opt);
		}
	}
};


// ADD A BULLET
var addBullet = function(container,o,li,opt) {
	
	// Check if Bullet exists already ?		
	if (container.find('.tp-bullets').length===0) {
		o.style = o.style === undefined ? "" : o.style;		
		container.append('<ul class="tp-bullets '+o.style+' '+o.direction+'"></ul>');
	}
	
	// Add Bullet Structure to the Bullet Container
	var bw = container.find('.tp-bullets'),
		 linkto = li.data('index'),
		 inst = o.tmp;

	jQuery.each(opt.thumbs[li.index()].params,function(i,obj) { inst = inst.replace(obj.from,obj.to);})


	bw.append('<li><button type="button" title="Zum Sliderbild Nummer ' + (parseInt(li.index(), 10) + 1) + '" class="justaddedbullet tp-bullet">'+inst+'</button></li>');

	// SET BULLET SPACES AND POSITION
	var b = container.find('.justaddedbullet'),
		am = container.find('.tp-bullet').length,
		w = b.outerWidth()+parseInt((o.space===undefined? 0:o.space),0),
		h = b.outerHeight()+parseInt((o.space===undefined? 0:o.space),0);
		
		//bgimage = li.data('thumb') !==undefined ? li.data('thumb') : li.find('.defaultimg').data('lazyload') !==undefined && li.find('.defaultimg').data('lazyload') !== 'undefined' ? li.find('.defaultimg').data('lazyload') : li.find('.defaultimg').data('src');

	if (o.direction==="vertical") {
		
		b.css({top:((am-1)*h)+"px", left:"0px"});
		bw.css({height:(((am-1)*h) + b.outerHeight()),width:b.outerWidth()});
	}
	else {
		
		b.css({left:((am-1)*w)+"px", top:"0px"});
		bw.css({width:(((am-1)*w) + b.outerWidth()),height:b.outerHeight()});			
	}
	
	b.find('.tp-bullet-image').css({backgroundImage:'url('+opt.thumbs[li.index()].src+')'});
	// SET LINK TO AND LISTEN TO CLICK
	b.data('liref',linkto);
	b.click(function() {
		opt.sc_indicator="bullet";				
		container.revcallslidewithid(linkto);
		container.find('.tp-bullet').removeClass("selected");
		jQuery(this).addClass("selected");

	});		
	// REMOVE HELP CLASS
	b.removeClass("justaddedbullet");

	// OUTTUER PADDING DEFAULTS
	o.padding_top = parseInt((opt.carousel.padding_top||0),0),
	o.padding_bottom = parseInt((opt.carousel.padding_bottom||0),0);
	o.opt = opt;	
	if (o.position=="outer-left" || o.position=="outer-right") opt.outernav = true;

	bw.addClass("nav-pos-hor-"+o.h_align);
	bw.addClass("nav-pos-ver-"+o.v_align);
	bw.addClass("nav-dir-"+o.direction);

	// PUT ALL CONTAINER IN POSITION
	setNavElPositions(bw,o,opt);		
};


var cHex = function(hex,o){	
		o = parseFloat(o);
	    hex = hex.replace('#','');	    
	    var r = parseInt(hex.substring(0,2), 16),
	    	g = parseInt(hex.substring(2,4), 16),
	    	b = parseInt(hex.substring(4,6), 16),
			result = 'rgba('+r+','+g+','+b+','+o+')';
	    return result;
};

// ADD THUMBNAILS
var addThumb = function(container,o,li,what,opt) {
	var thumbs = what==="tp-thumb" ? ".tp-thumbs" : ".tp-tabs",
		thumbmask = what==="tp-thumb" ? ".tp-thumb-mask" : ".tp-tab-mask",
		thumbsiw = what==="tp-thumb" ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
		thumb = what==="tp-thumb" ? ".tp-thumb" : ".tp-tab",
		timg = what ==="tp-thumb" ? ".tp-thumb-image" : ".tp-tab-image";

	o.visibleAmount = o.visibleAmount>opt.slideamount ? opt.slideamount : o.visibleAmount;	
	o.sliderLayout = opt.sliderLayout;

	// Check if THUNBS/TABS exists already ?		
	if (container.parent().find(thumbs).length===0) {
		o.style = o.style === undefined ? "" : o.style;		
		
		var spanw = o.span===true ? "tp-span-wrapper" : "",
			addcontent = '<div class="'+what+'s '+spanw+" "+o.position+" "+o.style+'"><div class="'+what+'-mask"><div class="'+what+'s-inner-wrapper" style="position:relative;"></div></div></div>';
	
		if (o.position==="outer-top")
			container.parent().prepend(addcontent)
		else
		if (o.position==="outer-bottom") 
			container.after(addcontent);
		else		
			container.append(addcontent);

		// OUTTUER PADDING DEFAULTS
		o.padding_top = parseInt((opt.carousel.padding_top||0),0),
		o.padding_bottom = parseInt((opt.carousel.padding_bottom||0),0);
		 
		if (o.position=="outer-left" || o.position=="outer-right") opt.outernav = true;
	}
	
	

	// Add Thumb/TAB Structure to the THUMB/TAB Container
	var linkto = li.data('index'),
		t = container.parent().find(thumbs),
		tm = t.find(thumbmask),
		tw = tm.find(thumbsiw),
		maxw = o.direction==="horizontal" ? (o.width * o.visibleAmount) + (o.space*(o.visibleAmount-1)) : o.width,		
		maxh = o.direction==="horizontal" ? o.height : (o.height * o.visibleAmount) + (o.space*(o.visibleAmount-1)),
		inst = o.tmp;
		jQuery.each(opt.thumbs[li.index()].params,function(i,obj) {
			inst = inst.replace(obj.from,obj.to);
		})	
	

		tw.append('<div data-liindex="'+li.index()+'" data-liref="'+linkto+'" class="justaddedthumb '+what+'" style="width:'+o.width+'px;height:'+o.height+'px;">'+inst+'</div>');


	// SET BULLET SPACES AND POSITION
	var b = t.find('.justaddedthumb'),
		am = t.find(thumb).length,
		w = b.outerWidth()+parseInt((o.space===undefined? 0:o.space),0),
		h = b.outerHeight()+parseInt((o.space===undefined? 0:o.space),0);		

	// FILL CONTENT INTO THE TAB / THUMBNAIL
	b.find(timg).css({backgroundImage:"url("+opt.thumbs[li.index()].src+")"});
	

	if (o.direction==="vertical") {		
		b.css({top:((am-1)*h)+"px", left:"0px"});
		tw.css({height:(((am-1)*h) + b.outerHeight()),width:b.outerWidth()});
	}
	else {		
		b.css({left:((am-1)*w)+"px", top:"0px"});
		tw.css({width:(((am-1)*w) + b.outerWidth()),height:b.outerHeight()});			
	}

	t.data('maxw',maxw);
	t.data('maxh',maxh);
	t.data('wr_padding',o.wrapper_padding);
	var position = o.position === "outer-top" || o.position==="outer-bottom" ? "relative" : "absolute",
		_margin = (o.position === "outer-top" || o.position==="outer-bottom") && (o.h_align==="center") ? "auto" : "0";
	

	tm.css({maxWidth:maxw+"px",maxHeight:maxh+"px",overflow:"hidden",position:"relative"});		
	t.css({maxWidth:(maxw)+"px",/*margin:_margin, */maxHeight:maxh+"px",overflow:"visible",position:position,background:cHex(o.wrapper_color,o.wrapper_opacity),padding:o.wrapper_padding+"px",boxSizing:"contet-box"});

	
	
	// SET LINK TO AND LISTEN TO CLICK	
	b.click(function() {

		opt.sc_indicator="bullet";			
		var dis = container.parent().find(thumbsiw).data('distance');
		dis = dis === undefined ? 0 : dis;
		if (Math.abs(dis)<10) {					
			container.revcallslidewithid(linkto);			
			container.parent().find(thumbs).removeClass("selected");			
			jQuery(this).addClass("selected");
		} 
	});		
	// REMOVE HELP CLASS
	b.removeClass("justaddedthumb");

	o.opt = opt;

	t.addClass("nav-pos-hor-"+o.h_align);
	t.addClass("nav-pos-ver-"+o.v_align);
	t.addClass("nav-dir-"+o.direction);
	
	// PUT ALL CONTAINER IN POSITION		
	setNavElPositions(t,o,opt);	
};

var setONHeights = function(o) {
	var ot = o.c.parent().find('.outer-top'),
		ob = o.c.parent().find('.outer-bottom');
	o.top_outer = !ot.hasClass("tp-forcenotvisible") ? ot.outerHeight() || 0 : 0;
	o.bottom_outer = !ob.hasClass("tp-forcenotvisible") ? ob.outerHeight() || 0 : 0;
};


// HIDE NAVIGATION ON PURPOSE
var biggerNav = function(el,a,b,c) {				
	if (a>b || b>c) 
		el.addClass("tp-forcenotvisible")
	else
		el.removeClass("tp-forcenotvisible");
};

})(jQuery);
;/********************************************
 * REVOLUTION 5.1.6 EXTENSION - PARALLAX
 * @version: 1.4 (10.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
(function($) {

var _R = jQuery.fn.revolution,
	_ISM = _R.is_mobile();

jQuery.extend(true,_R, {	
	/*callStaticDDDParallax: function(container,opt,li) {
		// STATIC 3D PARALLAX MOVEMENTS
	    if (opt.parallax && (opt.parallax.ddd_path=="static" || opt.parallax.ddd_path=="both")) {
			var coo = {},
				path = li.data('3dpath');
			coo.li = li;
			if (path.split(',').length>1) {
				coo.h = parseInt(path.split(',')[0],0);
				coo.v = parseInt(path.split(',')[1],0);				
				container.trigger('trigger3dpath',coo);
			}		
		}
	},*/

	checkForParallax : function(container,opt) {
		
		var _ = opt.parallax;

		if (_ISM && _.disable_onmobile=="on") return false;

		if (_.type=="3D" || _.type=="3d") {			
			punchgs.TweenLite.set(opt.c,{overflow:_.ddd_overflow});
			punchgs.TweenLite.set(opt.ul,{overflow:_.ddd_overflow});		
			if (opt.sliderType!="carousel" && _.ddd_shadow=="on") {
				opt.c.prepend('<div class="dddwrappershadow"></div>')
				punchgs.TweenLite.set(opt.c.find('.dddwrappershadow'),{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%", width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0});			
			}
		}
		
		function setDDDInContainer(li) {
			if (_.type=="3D" || _.type=="3d") {
				li.find('.slotholder').wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>');				
				li.find('.tp-parallax-wrap').wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+_.ddd_layer_overflow+';"></div>');				

				// MOVE THE REMOVED 3D LAYERS OUT OF THE PARALLAX GROUP					
				li.find('.rs-parallaxlevel-tobggroup').closest('.tp-parallax-wrap').wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');

				var dddw = li.find('.dddwrapper'),
					dddwl = li.find('.dddwrapper-layer'),
					dddwlbg = li.find('.dddwrapper-layertobggroup');

				

				dddwlbg.appendTo(dddw);
								
				if (opt.sliderType=="carousel") {
					 if (_.ddd_shadow=="on") dddw.addClass("dddwrappershadow");					 
					 punchgs.TweenLite.set(dddw,{borderRadius:opt.carousel.border_radius});
				}
				punchgs.TweenLite.set(li,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600});
				punchgs.TweenLite.set(dddw,{force3D:"auto",transformOrigin:"50% 50%"});					
				punchgs.TweenLite.set(dddwl,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5});					
				punchgs.TweenLite.set(opt.ul,{transformStyle:"preserve-3d",transformPerspective:1600});					
			}
		}

		opt.li.each(function() {
			setDDDInContainer(jQuery(this));						
		});

		if (_.type=="3D" || _.type=="3d" && opt.c.find('.tp-static-layers').length>0) {
			punchgs.TweenLite.set(opt.c.find('.tp-static-layers'),{top:0, left:0,width:"100%",height:"100%"});
			setDDDInContainer(opt.c.find('.tp-static-layers'));
		}

		for (var i = 1; i<=_.levels.length;i++)				
			opt.c.find('.rs-parallaxlevel-'+i).each(function() {					
				var pw = jQuery(this),
					tpw = pw.closest('.tp-parallax-wrap');												
				tpw.data('parallaxlevel',_.levels[i-1])
				tpw.addClass("tp-parallax-container");								
			});		

		
		if (_.type=="mouse" || _.type=="scroll+mouse" || _.type=="mouse+scroll" || _.type=="3D" || _.type=="3d") {
		
			container.mouseenter(function(event) {
				var currslide = container.find('.active-revslide'),
					t = container.offset().top,
					l = container.offset().left,
					ex = (event.pageX-l),
					ey =  (event.pageY-t);
				currslide.data("enterx",ex);
				currslide.data("entery",ey);
			});

			container.on('mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath',function(event,data) {				
				var currslide = data && data.li ? data.li : container.find('.active-revslide');

				
				// CALCULATE DISTANCES
				if (_.origo=="enterpoint") {
					var	t = container.offset().top,
						l = container.offset().left;

					if (currslide.data("enterx")==undefined) currslide.data("enterx",(event.pageX-l));
					if (currslide.data("entery")==undefined) currslide.data("entery",(event.pageY-t));										

					var mh = currslide.data("enterx") || (event.pageX-l),
						mv = currslide.data("entery") || (event.pageY-t),
						diffh = (mh - (event.pageX - l)),
						diffv = (mv - (event.pageY - t)),
						s = _.speed/1000 || 0.4;
				} else {
					var	t = container.offset().top,
						l = container.offset().left,
						diffh = (opt.conw/2 - (event.pageX-l)),
						diffv = (opt.conh/2 - (event.pageY-t)),
						s = _.speed/1000 || 3;
				}
								
				/*if (event.type=="trigger3dpath") {
					diffh = data.h;
					diffv = data.v;					
					_.ddd_lasth = diffh;
					_.ddd_lastv = diffv;
				}*/

				if (event.type=="mouseleave") {
					diffh = _.ddd_lasth || 0;
					diffv = _.ddd_lastv || 0;
					s = 1.5;									
				}

				/*if (_.ddd_path=="static") {
					diffh = _.ddd_lasth || 0;
					diffv = _.ddd_lastv || 0;							
				}*/
				var pcnts = [];
				currslide.find(".tp-parallax-container").each(function(i){					
					pcnts.push(jQuery(this));
				});
				container.find('.tp-static-layers .tp-parallax-container').each(function(){
					pcnts.push(jQuery(this));
				});
				
				jQuery.each(pcnts, function() {
					var pc = jQuery(this),
						bl = parseInt(pc.data('parallaxlevel'),0),
						pl = _.type=="3D" || _.type=="3d" ? bl/200 : bl/100,
						offsh =	 diffh * pl,
						offsv =	 diffv * pl;		
						if (_.type=="scroll+mouse" || _.type=="mouse+scroll" ) 
							punchgs.TweenLite.to(pc,s,{force3D:"auto",x:offsh,ease:punchgs.Power3.easeOut,overwrite:"all"});
						else
							punchgs.TweenLite.to(pc,s,{force3D:"auto",x:offsh,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"});
				});

				if (_.type=="3D" || _.type=="3d") {
					var sctor = '.tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer';
					if (opt.sliderType==="carousel") sctor = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";
					opt.c.find(sctor).each(function() {										
						var t = jQuery(this),
							pl = _.levels[_.levels.length-1]/200,										
							offsh =	diffh * pl,
							offsv =	diffv * pl,
							offrv = opt.conw == 0 ? 0 :  Math.round((diffh / opt.conw * pl)*100) || 0,
							offrh = opt.conh == 0 ? 0 : Math.round((diffv / opt.conh * pl)*100) || 0,										
							li = t.closest('li'),
							zz = 0,
							itslayer = false;

							if (t.hasClass("dddwrapper-layer")) {
								zz = _.ddd_z_correction || 65;
								itslayer = true;
							}

						if (t.hasClass("dddwrapper-layer")) {
							offsh=0;
							offsv=0;
						}
												
						if (li.hasClass("active-revslide") || opt.sliderType!="carousel")
							if (_.ddd_bgfreeze!="on" || (itslayer))								
								punchgs.TweenLite.to(t,s,{rotationX:offrh, rotationY:-offrv, x:offsh, z:zz,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"});								  	
							else 								
								punchgs.TweenLite.to(t,0.5,{force3D:"auto",rotationY:0, rotationX:0, z:0,ease:punchgs.Power3.easeOut,overwrite:"all"});
						else 
							punchgs.TweenLite.to(t,0.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0, rotationX:0, z:0,ease:punchgs.Power3.easeOut,overwrite:"all"});
																	
						if (event.type=="mouseleave")
						 	punchgs.TweenLite.to(jQuery(this),3.8,{z:0, ease:punchgs.Power3.easeOut});
					});
				}					
			});

			if (_ISM)
				window.ondeviceorientation = function(event) {
					var y = Math.round(event.beta  || 0)-70,
						x = Math.round(event.gamma || 0);

					var currslide = container.find('.active-revslide');

					if (jQuery(window).width() > jQuery(window).height()){
							var xx = x;
							x = y;
							y = xx;
					}

					var cw = container.width(),
						ch = container.height(),
						diffh = (360/cw * x),
				  		diffv = (180/ch * y),
				  		s = _.speed/1000 || 3,				  	
				  		pcnts = [];
					
					currslide.find(".tp-parallax-container").each(function(i){					
						pcnts.push(jQuery(this));
					});
					container.find('.tp-static-layers .tp-parallax-container').each(function(){
						pcnts.push(jQuery(this));
					});

				  	jQuery.each(pcnts, function() {
						var pc = jQuery(this),
							bl = parseInt(pc.data('parallaxlevel'),0),
							pl = bl/100,
							offsh =	 diffh * pl*2,
							offsv =	 diffv * pl*4;									
							punchgs.TweenLite.to(pc,s,{force3D:"auto",x:offsh,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"});	
					});
					
					if (_.type=="3D" || _.type=="3d") {
						var sctor = '.tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer';
						if (opt.sliderType==="carousel") sctor = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";
						opt.c.find(sctor).each(function() {			
							var t = jQuery(this),
								pl = _.levels[_.levels.length-1]/200
								offsh =	diffh * pl,
								offsv =	diffv * pl*3,
								offrv = opt.conw == 0 ? 0 :  Math.round((diffh / opt.conw * pl)*500) || 0,
								offrh = opt.conh == 0 ? 0 : Math.round((diffv / opt.conh * pl)*700) || 0,
								li = t.closest('li'),
								zz = 0,
								itslayer = false;

							if (t.hasClass("dddwrapper-layer")) {
								zz = _.ddd_z_correction || 65;
								itslayer = true;
							}

							if (t.hasClass("dddwrapper-layer")) {
								offsh=0;
								offsv=0;
							}
												
							if (li.hasClass("active-revslide") || opt.sliderType!="carousel")
								if (_.ddd_bgfreeze!="on" || (itslayer))								
									punchgs.TweenLite.to(t,s,{rotationX:offrh, rotationY:-offrv, x:offsh, z:zz,y:offsv,ease:punchgs.Power3.easeOut,overwrite:"all"});								  	
								else 								
									punchgs.TweenLite.to(t,0.5,{force3D:"auto",rotationY:0, rotationX:0, z:0,ease:punchgs.Power3.easeOut,overwrite:"all"});
							else 
								punchgs.TweenLite.to(t,0.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0, rotationX:0, z:0,ease:punchgs.Power3.easeOut,overwrite:"all"});
																	
							if (event.type=="mouseleave")
							 	punchgs.TweenLite.to(jQuery(this),3.8,{z:0, ease:punchgs.Power3.easeOut});
						});
					}
				}			 
		}
				
		_R.scrollTicker(opt,container);
		

	},
	
	scrollTicker : function(opt,container) {
		var faut;

		if (opt.scrollTicker!=true) {
			opt.scrollTicker = true;		
			if (_ISM) {		
				punchgs.TweenLite.ticker.fps(150);
				punchgs.TweenLite.ticker.addEventListener("tick",function() {_R.scrollHandling(opt);},container,false,1);
			} else {				
				jQuery(window).on('scroll mousewheel DOMMouseScroll', function() {				
					_R.scrollHandling(opt,true);					
				});
			}		
				
		}		
		_R.scrollHandling(opt, true);
	},



	//	-	SET POST OF SCROLL PARALLAX	-
	scrollHandling : function(opt,fromMouse) {	
		
		opt.lastwindowheight = opt.lastwindowheight || jQuery(window).height();

		var t = opt.c.offset().top,
			st = jQuery(window).scrollTop(),					
			b = new Object(),
			_v = opt.viewPort,
			_ = opt.parallax;

		
		if (opt.lastscrolltop==st && !opt.duringslidechange && !fromMouse) return false;
		//if (opt.lastscrolltop==st) return false;

		

		function saveLastScroll(opt,st) {			
			opt.lastscrolltop = st;			
		}
		punchgs.TweenLite.delayedCall(0.2,saveLastScroll,[opt,st]);

		b.top = (t-st);		
		b.h = opt.conh==0 ? opt.c.height() : opt.conh;		
		b.bottom = (t-st) + b.h;

		var proc = b.top<0 || b.h>opt.lastwindowheight ? b.top / b.h : b.bottom>opt.lastwindowheight ? (b.bottom-opt.lastwindowheight) / b.h : 0;
		opt.scrollproc = proc;

		if (_R.callBackHandling)
			_R.callBackHandling(opt,"parallax","start");

		

		if (_v.enable) {
			var area = 1-Math.abs(proc);
			area = area<0 ? 0 : area;
			// To Make sure it is not any more in %			
			if (!jQuery.isNumeric(_v.visible_area))
			 if (_v.visible_area.indexOf('%')!==-1) 
				_v.visible_area = parseInt(_v.visible_area)/100;
			

		 	if (1-_v.visible_area<=area) {
				if (!opt.inviewport) {
					opt.inviewport = true;
					_R.enterInViewPort(opt);
				}
			} else {
				if (opt.inviewport) {
					opt.inviewport = false;
					_R.leaveViewPort(opt);
				}
			}
		}

			
		// SCROLL BASED PARALLAX EFFECT 
		if (_ISM && opt.parallax.disable_onmobile=="on") return false;

		var pt = new punchgs.TimelineLite();
		pt.pause();

		if (_.type!="3d" && _.type!="3D") {
			if (_.type=="scroll" || _.type=="scroll+mouse" || _.type=="mouse+scroll") 
				opt.c.find(".tp-parallax-container").each(function(i) {
					var pc = jQuery(this),
						pl = parseInt(pc.data('parallaxlevel'),0)/100,
						offsv =	proc * -(pl*opt.conh) || 0;
					
					pc.data('parallaxoffset',offsv);					
					pt.add(punchgs.TweenLite.set(pc,{force3D:"auto",y:offsv}),0);
				});		

			opt.c.find('.tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer').each(function() {	
			
				var t = jQuery(this),
					l = t.data('bgparallax') || opt.parallax.bgparallax;				
					l = l == "on" ? 1 : l;						
					if (l!== undefined || l !== "off") {

						var pl = opt.parallax.levels[parseInt(l,0)-1]/100,
						offsv =	proc * -(pl*opt.conh) || 0;		


						if (jQuery.isNumeric(offsv))																					
							pt.add(punchgs.TweenLite.set(t,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:offsv+"px"}),0);								
					}
			});
		}

		if (_R.callBackHandling)
			_R.callBackHandling(opt,"parallax","end");		
		
		pt.play(0);
	}
		
});



//// END OF PARALLAX EFFECT	
})(jQuery);;/************************************************
 * REVOLUTION 5.2 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.1.2 (23.02.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/

(function($) {

var _R = jQuery.fn.revolution;

	///////////////////////////////////////////
	// 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
	///////////////////////////////////////////
	jQuery.extend(true,_R, {

		animateSlide : function(nexttrans, comingtransition, container,  opt, nextli, actli, nextsh, actsh,  mtl) {
			return animateSlideIntern(nexttrans, comingtransition, container,  opt, nextli, actli, nextsh, actsh,  mtl)
		}
			
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////       SLIDE TRANSITION MODULES 		////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


//////////////////////////////////////////////////////
//
// * Revolution Slider - TRANSITION PREDEFINITION MODULES
// * @version: 5.0.0 (13.02.2015)
// * @author ThemePunch
//
//////////////////////////////////////////////////////


	///////////////////////
	// PREPARE THE SLIDE //
	//////////////////////
	var prepareOneSlide = function(slotholder,opt,visible,vorh) {

				var sh=slotholder,
					img = sh.find('.defaultimg'),
					scalestart = sh.data('zoomstart'),
					rotatestart = sh.data('rotationstart');

				if (img.data('currotate')!=undefined)
					rotatestart = img.data('currotate');
				if (img.data('curscale')!=undefined && vorh=="box")
					scalestart = img.data('curscale')*100;
				else
				if (img.data('curscale')!=undefined)
					scalestart = img.data('curscale');
				
				_R.slotSize(img,opt);
				
				
				var src = img.attr('src'),
					bgcolor=img.css('backgroundColor'),
					w = opt.width,
					h = opt.height,
					fulloff = img.data("fxof"),
					fullyoff=0;

				if (opt.autoHeight=="on") h = opt.c.height();
				if (fulloff==undefined) fulloff=0;
			
				var off=0,
					bgfit = img.data('bgfit'),
					bgrepeat = img.data('bgrepeat'),
					bgposition = img.data('bgposition');

				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center";
								
				
				switch (vorh) {
					// BOX ANIMATION PREPARING
					case "box":
						// SET THE MINIMAL SIZE OF A BOX
						//var  basicsize = 0,
						var x = 0,
							y = 0;

						/*if (opt.sloth>opt.slotw)
							basicsize=opt.sloth
						else
							basicsize=opt.slotw;
						
						opt.slotw = basicsize;
						opt.sloth = basicsize;*/
						
											
						for (var j=0;j<opt.slots;j++) {
							y=0;
							for (var i=0;i<opt.slots;i++) 	{

								sh.append('<div class="slot" '+
										  'style="position:absolute;'+
													'top:'+(fullyoff+y)+'px;'+
													'left:'+(fulloff+x)+'px;'+
													'width:'+opt.slotw+'px;'+
													'height:'+opt.sloth+'px;'+
													'overflow:hidden;">'+

										  '<div class="slotslide" data-x="'+x+'" data-y="'+y+'" '+
										  			'style="position:absolute;'+
													'top:'+(0)+'px;'+
													'left:'+(0)+'px;'+
													'width:'+opt.slotw+'px;'+
													'height:'+opt.sloth+'px;'+
													'overflow:hidden;">'+

										  '<div style="position:absolute;'+
													'top:'+(0-y)+'px;'+
													'left:'+(0-x)+'px;'+
													'width:'+w+'px;'+
													'height:'+h+'px;'+
													'background-color:'+bgcolor+';'+
													'background-image:url('+src+');'+
													'background-repeat:'+bgrepeat+';'+
													'background-size:'+bgfit+';background-position:'+bgposition+';">'+
										  '</div></div></div>');
								y=y+opt.sloth;
								if (scalestart!=undefined && rotatestart!=undefined)
										punchgs.TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
							}
							x=x+opt.slotw;
						}
					break;

					// SLOT ANIMATION PREPARING
					case "vertical":
					case "horizontal":
						
						 if (vorh == "horizontal") {
							if (!visible) var off=0-opt.slotw;
							for (var i=0;i<opt.slots;i++) {
									sh.append('<div class="slot" style="position:absolute;'+
																	'top:'+(0+fullyoff)+'px;'+
																	'left:'+(fulloff+(i*opt.slotw))+'px;'+
																	'overflow:hidden;width:'+(opt.slotw+0.6)+'px;'+
																	'height:'+h+'px">'+
									'<div class="slotslide" style="position:absolute;'+
																	'top:0px;left:'+off+'px;'+
																	'width:'+(opt.slotw+0.6)+'px;'+
																	'height:'+h+'px;overflow:hidden;">'+
									'<div style="background-color:'+bgcolor+';'+
																	'position:absolute;top:0px;'+
																	'left:'+(0-(i*opt.slotw))+'px;'+
																	'width:'+w+'px;height:'+h+'px;'+
																	'background-image:url('+src+');'+
																	'background-repeat:'+bgrepeat+';'+
																	'background-size:'+bgfit+';background-position:'+bgposition+';">'+
									'</div></div></div>');
									if (scalestart!=undefined && rotatestart!=undefined)
										punchgs.TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
									
							}
						} else {
							if (!visible) var off=0-opt.sloth;
							for (var i=0;i<opt.slots+2;i++) {
								sh.append('<div class="slot" style="position:absolute;'+
														 'top:'+(fullyoff+(i*opt.sloth))+'px;'+
														 'left:'+(fulloff)+'px;'+
														 'overflow:hidden;'+
														 'width:'+w+'px;'+
														 'height:'+(opt.sloth)+'px">'+

											 '<div class="slotslide" style="position:absolute;'+
																 'top:'+(off)+'px;'+
																 'left:0px;width:'+w+'px;'+
																 'height:'+opt.sloth+'px;'+
																 'overflow:hidden;">'+
											'<div style="background-color:'+bgcolor+';'+
																	'position:absolute;'+
																	'top:'+(0-(i*opt.sloth))+'px;'+
																	'left:0px;'+
																	'width:'+w+'px;height:'+h+'px;'+
																	'background-image:url('+src+');'+
																	'background-repeat:'+bgrepeat+';'+
																	'background-size:'+bgfit+';background-position:'+bgposition+';">'+

											'</div></div></div>');
									if (scalestart!=undefined && rotatestart!=undefined)
										punchgs.TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
									
							}
						}
					break;
				}
		}



var getSliderTransitionParameters = function(container,opt,comingtransition,nextsh,slidedirection) {
	
	
	/* Transition Name ,
	   Transition Code,
	   Transition Sub Code,
	   Max Slots,
	   MasterSpeed Delays,
	   Preparing Slots (box,slideh, slidev),
	   Call on nextsh (null = no, true/false for visibility first preparing),
	   Call on actsh (null = no, true/false for visibility first preparing),
	   Index of Animation
	   easeIn,
	   easeOut,
	   speed,
	   slots,
	*/


	var p1i = punchgs.Power1.easeIn, 
		p1o = punchgs.Power1.easeOut,
		p1io = punchgs.Power1.easeInOut,
		p2i = punchgs.Power2.easeIn,
		p2o = punchgs.Power2.easeOut,
		p2io = punchgs.Power2.easeInOut,
		p3i = punchgs.Power3.easeIn, 
		p3o = punchgs.Power3.easeOut, 
		p3io = punchgs.Power3.easeInOut,
		flatTransitions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
		premiumTransitions = [16,17,18,19,20,21,22,23,24,25,27],
		nexttrans =0,
		specials = 1,
		STAindex = 0,
		indexcounter =0,
		STA = new Array,
		transitionsArray = [ ['boxslide' , 0, 1, 10, 0,'box',false,null,0,p1o,p1o,500,6],
							 ['boxfade', 1, 0, 10, 0,'box',false,null,1,p1io,p1io,700,5],
							 ['slotslide-horizontal', 2, 0, 0, 200,'horizontal',true,false,2,p2io,p2io,700,3],
							 ['slotslide-vertical', 3, 0,0,200,'vertical',true,false,3,p2io,p2io,700,3],
							 ['curtain-1', 4, 3,0,0,'horizontal',true,true,4,p1o,p1o,300,5],
							 ['curtain-2', 5, 3,0,0,'horizontal',true,true,5,p1o,p1o,300,5],
							 ['curtain-3', 6, 3,25,0,'horizontal',true,true,6,p1o,p1o,300,5],
							 ['slotzoom-horizontal', 7, 0,0,400,'horizontal',true,true,7,p1o,p1o,300,7],
							 ['slotzoom-vertical', 8, 0,0,0,'vertical',true,true,8,p2o,p2o,500,8],
							 ['slotfade-horizontal', 9, 0,0,500,'horizontal',true,null,9,p2o,p2o,500,25],
							 ['slotfade-vertical', 10, 0,0 ,500,'vertical',true,null,10,p2o,p2o,500,25],
							 ['fade', 11, 0, 1 ,300,'horizontal',true,null,11,p2io,p2io,1000,1],
							 ['crossfade', 11, 1, 1 ,300,'horizontal',true,null,11,p2io,p2io,1000,1],
							 ['fadethroughdark', 11, 2, 1 ,300,'horizontal',true,null,11,p2io,p2io,1000,1],
							 ['fadethroughlight', 11, 3, 1 ,300,'horizontal',true,null,11,p2io,p2io,1000,1],
							 ['fadethroughtransparent', 11, 4, 1 ,300,'horizontal',true,null,11,p2io,p2io,1000,1],
							 ['slideleft', 12, 0,1,0,'horizontal',true,true,12,p3io,p3io,1000,1],
							 ['slideup', 13, 0,1,0,'horizontal',true,true,13,p3io,p3io,1000,1],
							 ['slidedown', 14, 0,1,0,'horizontal',true,true,14,p3io,p3io,1000,1],
							 ['slideright', 15, 0,1,0,'horizontal',true,true,15,p3io,p3io,1000,1],
							 ['slideoverleft', 12, 7,1,0,'horizontal',true,true,12,p3io,p3io,1000,1],
							 ['slideoverup', 13, 7,1,0,'horizontal',true,true,13,p3io,p3io,1000,1],
							 ['slideoverdown', 14, 7,1,0,'horizontal',true,true,14,p3io,p3io,1000,1],
							 ['slideoverright', 15, 7,1,0,'horizontal',true,true,15,p3io,p3io,1000,1],
							 ['slideremoveleft', 12, 8,1,0,'horizontal',true,true,12,p3io,p3io,1000,1],
							 ['slideremoveup', 13, 8,1,0,'horizontal',true,true,13,p3io,p3io,1000,1],
							 ['slideremovedown', 14, 8,1,0,'horizontal',true,true,14,p3io,p3io,1000,1],
							 ['slideremoveright', 15, 8,1,0,'horizontal',true,true,15,p3io,p3io,1000,1],
							 ['papercut', 16, 0,0,600,'',null,null,16,p3io,p3io,1000,2],
							 ['3dcurtain-horizontal', 17, 0,20,100,'vertical',false,true,17,p1io,p1io,500,7],
							 ['3dcurtain-vertical', 18, 0,10,100,'horizontal',false,true,18,p1io,p1io,500,5],
							 ['cubic', 19, 0,20,600,'horizontal',false,true,19,p3io,p3io,500,1],
							 ['cube',19,0,20,600,'horizontal',false,true,20,p3io,p3io,500,1],
							 ['flyin', 20, 0,4,600,'vertical',false,true,21,p3o,p3io,500,1],
							 ['turnoff', 21, 0,1,500,'horizontal',false,true,22,p3io,p3io,500,1],
							 ['incube', 22, 0,20,200,'horizontal',false,true,23,p2io,p2io,500,1],
							 ['cubic-horizontal', 23, 0,20,500,'vertical',false,true,24,p2o,p2o,500,1],
							 ['cube-horizontal', 23, 0,20,500,'vertical',false,true,25,p2o,p2o,500,1],
							 ['incube-horizontal', 24, 0,20,500,'vertical',false,true,26,p2io,p2io,500,1],
							 ['turnoff-vertical', 25, 0,1,200,'horizontal',false,true,27,p2io,p2io,500,1],
							 ['fadefromright', 12, 1,1,0,'horizontal',true,true,28,p2io,p2io,1000,1],
							 ['fadefromleft', 15, 1,1,0,'horizontal',true,true,29,p2io,p2io,1000,1],
							 ['fadefromtop', 14, 1,1,0,'horizontal',true,true,30,p2io,p2io,1000,1],
							 ['fadefrombottom', 13, 1,1,0,'horizontal',true,true,31,p2io,p2io,1000,1],
							 ['fadetoleftfadefromright', 12, 2,1,0,'horizontal',true,true,32,p2io,p2io,1000,1],
							 ['fadetorightfadefromleft', 15, 2,1,0,'horizontal',true,true,33,p2io,p2io,1000,1],
							 ['fadetobottomfadefromtop', 14, 2,1,0,'horizontal',true,true,34,p2io,p2io,1000,1],
							 ['fadetotopfadefrombottom', 13, 2,1,0,'horizontal',true,true,35,p2io,p2io,1000,1],							 
							 ['parallaxtoright', 12, 3,1,0,'horizontal',true,true,36,p2io,p2i,1500,1],
							 ['parallaxtoleft', 15, 3,1,0,'horizontal',true,true,37,p2io,p2i,1500,1],
							 ['parallaxtotop', 14, 3,1,0,'horizontal',true,true,38,p2io,p1i,1500,1],
							 ['parallaxtobottom', 13, 3,1,0,'horizontal',true,true,39,p2io,p1i,1500,1],
							 ['scaledownfromright', 12, 4,1,0,'horizontal',true,true,40,p2io,p2i,1000,1],
							 ['scaledownfromleft', 15, 4,1,0,'horizontal',true,true,41,p2io,p2i,1000,1],
							 ['scaledownfromtop', 14, 4,1,0,'horizontal',true,true,42,p2io,p2i,1000,1],
							 ['scaledownfrombottom', 13, 4,1,0,'horizontal',true,true,43,p2io,p2i,1000,1],
							 ['zoomout', 13, 5,1,0,'horizontal',true,true,44,p2io,p2i,1000,1],
							 ['zoomin', 13, 6,1,0,'horizontal',true,true,45,p2io,p2i,1000,1],
							 ['slidingoverlayup', 27, 0,1,0,'horizontal',true,true,47,p1io,p1o,2000,1],
							 ['slidingoverlaydown', 28, 0,1,0,'horizontal',true,true,48,p1io,p1o,2000,1],
							 ['slidingoverlayright', 30, 0,1,0,'horizontal',true,true,49,p1io,p1o,2000,1],
							 ['slidingoverlayleft', 29, 0,1,0,'horizontal',true,true,50,p1io,p1o,2000,1],
							 ['parallaxcirclesup', 31, 0,1,0,'horizontal',true,true,51,p2io,p1i,1500,1],
							 ['parallaxcirclesdown', 32, 0,1,0,'horizontal',true,true,52,p2io,p1i,1500,1],
							 ['parallaxcirclesright', 33, 0,1,0,'horizontal',true,true,53,p2io,p1i,1500,1],
							 ['parallaxcirclesleft', 34, 0,1,0,'horizontal',true,true,54,p2io,p1i,1500,1],
							 ['notransition',26,0,1,0,'horizontal',true,null,46,p2io,p2i,1000,1],
							 ['parallaxright', 12, 3,1,0,'horizontal',true,true,55,p2io,p2i,1500,1],
							 ['parallaxleft', 15, 3,1,0,'horizontal',true,true,56,p2io,p2i,1500,1],
							 ['parallaxup', 14, 3,1,0,'horizontal',true,true,57,p2io,p1i,1500,1],
							 ['parallaxdown', 13, 3,1,0,'horizontal',true,true,58,p2io,p1i,1500,1],							 
						   ];

	opt.duringslidechange = true;

	// INTERNAL TEST FOR TRANSITIONS
	opt.testanims = false;
	if (opt.testanims==true) {
		opt.nexttesttransform = opt.nexttesttransform === undefined ? 34 : opt.nexttesttransform + 1;
		opt.nexttesttransform = opt.nexttesttransform>70 ? 0 : opt.nexttesttransform;
		comingtransition = transitionsArray[opt.nexttesttransform][0];
		console.log(comingtransition+"  "+opt.nexttesttransform+"  "+transitionsArray[opt.nexttesttransform][1]+"  "+transitionsArray[opt.nexttesttransform][2]);
	}
		

	// CHECK AUTO DIRECTION FOR TRANSITION ARTS		
	jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax"],function(i,b) {									
		if (comingtransition==b+"horizontal")  comingtransition = slidedirection!=1 ? b+"left" : b+"right";			
		if (comingtransition==b+"vertical") comingtransition = slidedirection!=1 ? b+"up" : b+"down";			
	});					

		
		
	// RANDOM TRANSITIONS
	if (comingtransition == "random") {
		comingtransition = Math.round(Math.random()*transitionsArray.length-1);
		if (comingtransition>transitionsArray.length-1) comingtransition=transitionsArray.length-1;
	}

	// RANDOM FLAT TRANSITIONS
	if (comingtransition == "random-static") {
		comingtransition = Math.round(Math.random()*flatTransitions.length-1);
		if (comingtransition>flatTransitions.length-1) comingtransition=flatTransitions.length-1;
		comingtransition = flatTransitions[comingtransition];
	}

	// RANDOM PREMIUM TRANSITIONS
	if (comingtransition == "random-premium") {
		comingtransition = Math.round(Math.random()*premiumTransitions.length-1);
		if (comingtransition>premiumTransitions.length-1) comingtransition=premiumTransitions.length-1;
		comingtransition = premiumTransitions[comingtransition];
	}
	
	//joomla only change: avoid problematic transitions that don't compatible with mootools
	var problematicTransitions = [12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
	if(opt.isJoomla == true && window.MooTools != undefined && problematicTransitions.indexOf(comingtransition) != -1){

		var newTransIndex = Math.round(Math.random() * (premiumTransitions.length-2) ) + 1;

		//some limits fix
		if (newTransIndex > premiumTransitions.length-1)
			newTransIndex = premiumTransitions.length-1;

		if(newTransIndex == 0)
			newTransIndex = 1;

		comingtransition = premiumTransitions[newTransIndex];
	}



	function findTransition() {
		// FIND THE RIGHT TRANSITION PARAMETERS HERE
		jQuery.each(transitionsArray,function(inde,trans) {
			if (trans[0] == comingtransition || trans[8] == comingtransition) {
				nexttrans = trans[1];
				specials = trans[2];
				STAindex = indexcounter;
			}
			indexcounter = indexcounter+1;
		})
	}

	findTransition();

	

	if (nexttrans>30) nexttrans = 30;
	if (nexttrans<0) nexttrans = 0;



	var obj = new Object();
	obj.nexttrans = nexttrans;
	obj.STA = transitionsArray[STAindex]; // PREPARED DEFAULT SETTINGS PER TRANSITION
	obj.specials = specials;	
	return obj;


}


/*************************************
	-	ANIMATE THE SLIDE  	-
*************************************/

var gSlideTransA = function(a,i) {
	if (i==undefined || jQuery.isNumeric(a)) return a;
	if (a==undefined) return a;
	return a.split(",")[i];
}

var animateSlideIntern = function(nexttrans, comingtransition, container,  opt, nextli, actli, nextsh, actsh,  mtl) {

	// GET THE TRANSITION
	
	var ai = actli.index(),
		ni = nextli.index(),
		slidedirection = ni<ai ? 1 : 0;

	if (opt.sc_indicator=="arrow") slidedirection = opt.sc_indicator_dir;			
			
	var stp = getSliderTransitionParameters(container,opt,comingtransition,nextsh,slidedirection),
		STA = stp.STA,
		specials = stp.specials,					
		nexttrans = stp.nexttrans;

	//KEN BURNS ONLY WITH FADE TRANSITION
	if (nextsh.data('kenburns')=="on") //|| actsh.data('kenburns')=="on") 
		nexttrans = 11;


	// DEFINE THE MASTERSPEED FOR THE SLIDE //
	var ctid = nextli.data('nexttransid') || 0,
		masterspeed=gSlideTransA(nextli.data('masterspeed'),ctid);

	masterspeed = masterspeed==="default" ? STA[11] : masterspeed==="random" ? Math.round(Math.random()*1000+300) : masterspeed!=undefined ? parseInt(masterspeed,0) : STA[11];
	masterspeed = masterspeed > opt.delay ? opt.delay : masterspeed;

	// ADJUST MASTERSPEED
	masterspeed = masterspeed + STA[4];
	
	
	///////////////////////
	//	ADJUST SLOTS     //	
	///////////////////////
	opt.slots = gSlideTransA(nextli.data('slotamount'),ctid);	
	opt.slots = opt.slots==undefined || opt.slots=="default" ? STA[12] : opt.slots=="random" ? Math.round(Math.random()*12+4) : opt.slots;
	opt.slots = opt.slots < 1 ? comingtransition=="boxslide" ? Math.round(Math.random()*6+3) : comingtransition=="flyin" ? Math.round(Math.random()*4+1) : opt.slots : opt.slots;
	opt.slots = (nexttrans==4 || nexttrans==5 || nexttrans==6) && opt.slots<3 ? 3 : opt.slots;
	opt.slots = STA[3] != 0 ? Math.min(opt.slots,STA[3]) : opt.slots;
	opt.slots = nexttrans==9 ? opt.width/20 : nexttrans==10 ? opt.height/20 : opt.slots;
	

	/////////////////////////////////////////////
	//	SET THE ACTUAL AMOUNT OF SLIDES !!     //
	//  SET A RANDOM AMOUNT OF SLOTS          //
	///////////////////////////////////////////
	opt.rotate = gSlideTransA(nextli.data('rotate'),ctid);
	opt.rotate = opt.rotate==undefined || opt.rotate=="default" ? 0 : opt.rotate==999 || opt.rotate=="random" ? Math.round(Math.random()*360) : opt.rotate;
	opt.rotate = (!jQuery.support.transition  || opt.ie || opt.ie9) ? 0 : opt.rotate;
	
	

	
	
	// prepareOneSlide
	if (nexttrans!=11) {
		if (STA[7] !=null) prepareOneSlide(actsh,opt,STA[7],STA[5]);
		if (STA[6] !=null) prepareOneSlide(nextsh,opt,STA[6],STA[5]);
	}

	// DEFAULT SETTINGS FOR NEXT AND ACT SH
	mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultvid'),{y:0,x:0,top:0,left:0,scale:1}),0);				
	mtl.add(punchgs.TweenLite.set(actsh.find('.defaultvid'),{y:0,x:0,top:0,left:0,scale:1}),0);				
	mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultvid'),{y:"+0%",x:"+0%"}),0);				
	mtl.add(punchgs.TweenLite.set(actsh.find('.defaultvid'),{y:"+0%",x:"+0%"}),0);				
	mtl.add(punchgs.TweenLite.set(nextsh,{autoAlpha:1,y:"+0%",x:"+0%"}),0);				
	mtl.add(punchgs.TweenLite.set(actsh,{autoAlpha:1,y:"+0%",x:"+0%"}),0);	
	mtl.add(punchgs.TweenLite.set(nextsh.parent(),{backgroundColor:"transparent"}),0);				
	mtl.add(punchgs.TweenLite.set(actsh.parent(),{backgroundColor:"transparent"}),0);	
				
	

	var ei= gSlideTransA(nextli.data('easein'),ctid), 
		eo =gSlideTransA(nextli.data('easeout'),ctid); 

	ei = ei==="default" ? STA[9] || punchgs.Power2.easeInOut : ei || STA[9] || punchgs.Power2.easeInOut;
	eo = eo==="default" ? STA[10] || punchgs.Power2.easeInOut : eo || STA[10] || punchgs.Power2.easeInOut;


	/////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION I.  //
	////////////////////////////////////
	if (nexttrans==0) {								// BOXSLIDE


				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				var maxz = Math.ceil(opt.height/opt.sloth);
				var curz = 0;
				nextsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this);
					curz=curz+1;
					if (curz==maxz) curz=0;

					mtl.add(punchgs.TweenLite.from(ss,(masterspeed)/600,
										{opacity:0,top:(0-opt.sloth),left:(0-opt.slotw),rotation:opt.rotate,force3D:"auto",ease:ei}),((j*15) + ((curz)*30))/1500);
				});
	}
	/////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION I.  //
	////////////////////////////////////
	if (nexttrans==1) {

				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				var maxtime,
					maxj = 0;

				nextsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this),
						rand=Math.random()*masterspeed+300,
						rand2=Math.random()*500+200;
					if (rand+rand2>maxtime) {
						maxtime = rand2+rand2;
						maxj = j;
					}
					mtl.add(punchgs.TweenLite.from(ss,rand/1000,
								{autoAlpha:0, force3D:"auto",rotation:opt.rotate,ease:ei}),rand2/1000);
				});
	}


	/////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION I.  //
	////////////////////////////////////
	if (nexttrans==2) {

				var subtl = new punchgs.TimelineLite();
				// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
				actsh.find('.slotslide').each(function() {
					var ss=jQuery(this);
					subtl.add(punchgs.TweenLite.to(ss,masterspeed/1000,{left:opt.slotw,ease:ei, force3D:"auto",rotation:(0-opt.rotate)}),0);
					mtl.add(subtl,0);
				});

				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				nextsh.find('.slotslide').each(function() {
					var ss=jQuery(this);
					subtl.add(punchgs.TweenLite.from(ss,masterspeed/1000,{left:0-opt.slotw,ease:ei, force3D:"auto",rotation:opt.rotate}),0);
					mtl.add(subtl,0);
				});
	}



	/////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION I.  //
	////////////////////////////////////
	if (nexttrans==3) {
				var subtl = new punchgs.TimelineLite();

				// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
				actsh.find('.slotslide').each(function() {
					var ss=jQuery(this);
					subtl.add(punchgs.TweenLite.to(ss,masterspeed/1000,{top:opt.sloth,ease:ei,rotation:opt.rotate,force3D:"auto",transformPerspective:600}),0);
					mtl.add(subtl,0);

				});

				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				nextsh.find('.slotslide').each(function() {
					var ss=jQuery(this);
					subtl.add(punchgs.TweenLite.from(ss,masterspeed/1000,{top:0-opt.sloth,rotation:opt.rotate,ease:eo,force3D:"auto",transformPerspective:600}),0);
					mtl.add(subtl,0);
				});
	}



	/////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION I.  //
	////////////////////////////////////
	if (nexttrans==4 || nexttrans==5) {

				setTimeout(function() {
					actsh.find('.defaultimg').css({opacity:0});
				},100);


				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				var cspeed = (masterspeed)/1000,
					ticker = cspeed,
					subtl = new punchgs.TimelineLite();

				actsh.find('.slotslide').each(function(i) {
					var ss=jQuery(this);
					var del = (i*cspeed)/opt.slots;
					if (nexttrans==5) del = ((opt.slots-i-1)*cspeed)/(opt.slots)/1.5;
					subtl.add(punchgs.TweenLite.to(ss,cspeed*3,{transformPerspective:600,force3D:"auto",top:0+opt.height,opacity:0.5,rotation:opt.rotate,ease:ei,delay:del}),0);
					mtl.add(subtl,0);
				});

				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				nextsh.find('.slotslide').each(function(i) {
					var ss=jQuery(this);
					var del = (i*cspeed)/opt.slots;
					if (nexttrans==5) del = ((opt.slots-i-1)*cspeed)/(opt.slots)/1.5;
					subtl.add(punchgs.TweenLite.from(ss,cspeed*3,
									{top:(0-opt.height),opacity:0.5,rotation:opt.rotate,force3D:"auto",ease:punchgs.eo,delay:del}),0);
					mtl.add(subtl,0);

				});


	}

	/////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION I.  //
	////////////////////////////////////
	if (nexttrans==6) {


				if (opt.slots<2) opt.slots=2;
				if (opt.slots % 2) opt.slots = opt.slots+1;

				var subtl = new punchgs.TimelineLite();

				//SET DEFAULT IMG UNVISIBLE
				setTimeout(function() {
					actsh.find('.defaultimg').css({opacity:0});
				},100);

				actsh.find('.slotslide').each(function(i) {
					var ss=jQuery(this);
					if (i+1<opt.slots/2)
						var tempo = (i+2)*90;
					else
						var tempo = (2+opt.slots-i)*90;

					subtl.add(punchgs.TweenLite.to(ss,(masterspeed+tempo)/1000,{top:0+opt.height,opacity:1,force3D:"auto",rotation:opt.rotate,ease:ei}),0);
					mtl.add(subtl,0);
				});

				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				nextsh.find('.slotslide').each(function(i) {
					var ss=jQuery(this);

					if (i+1<opt.slots/2)
						var tempo = (i+2)*90;
					else
						var tempo = (2+opt.slots-i)*90;

					subtl.add(punchgs.TweenLite.from(ss,(masterspeed+tempo)/1000,
											{top:(0-opt.height),opacity:1,force3D:"auto",rotation:opt.rotate,ease:eo}),0);
					mtl.add(subtl,0);
				});
	}


	////////////////////////////////////
	// THE SLOTSZOOM - TRANSITION II. //
	////////////////////////////////////
	if (nexttrans==7) {

				masterspeed = masterspeed *2;
				if (masterspeed>opt.delay) masterspeed=opt.delay;
				var subtl = new punchgs.TimelineLite();

				//SET DEFAULT IMG UNVISIBLE
				setTimeout(function() {
					actsh.find('.defaultimg').css({opacity:0});
				},100);

				// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
				actsh.find('.slotslide').each(function() {
					var ss=jQuery(this).find('div');
					subtl.add(punchgs.TweenLite.to(ss,masterspeed/1000,{
							left:(0-opt.slotw/2)+'px',
							top:(0-opt.height/2)+'px',
							width:(opt.slotw*2)+"px",
							height:(opt.height*2)+"px",
							opacity:0,
							rotation:opt.rotate,
							force3D:"auto",
							ease:ei}),0);
					mtl.add(subtl,0);

				});

				//////////////////////////////////////////////////////////////
				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
				///////////////////////////////////////////////////////////////
				nextsh.find('.slotslide').each(function(i) {
					var ss=jQuery(this).find('div');

					subtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
								{left:0,top:0,opacity:0,transformPerspective:600},
								{left:(0-i*opt.slotw)+'px',
								 ease:eo,
								 force3D:"auto",
							     top:(0)+'px',
							     width:opt.width,
							     height:opt.height,
								 opacity:1,rotation:0,
								 delay:0.1}),0);
					mtl.add(subtl,0);
				});
	}




	////////////////////////////////////
	// THE SLOTSZOOM - TRANSITION II. //
	////////////////////////////////////
	if (nexttrans==8) {

				masterspeed = masterspeed * 3;
				if (masterspeed>opt.delay) masterspeed=opt.delay;
				var subtl = new punchgs.TimelineLite();



				// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
				actsh.find('.slotslide').each(function() {
					var ss=jQuery(this).find('div');
					subtl.add(punchgs.TweenLite.to(ss,masterspeed/1000,
								  {left:(0-opt.width/2)+'px',
								   top:(0-opt.sloth/2)+'px',
								   width:(opt.width*2)+"px",
								   height:(opt.sloth*2)+"px",
								   force3D:"auto",
								   ease:ei,
								   opacity:0,rotation:opt.rotate}),0);
					mtl.add(subtl,0);

				});


				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
				///////////////////////////////////////////////////////////////
				nextsh.find('.slotslide').each(function(i) {
					var ss=jQuery(this).find('div');

					subtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
								  {left:0, top:0,opacity:0,force3D:"auto"},
								  {'left':(0)+'px',
								   'top':(0-i*opt.sloth)+'px',
								   'width':(nextsh.find('.defaultimg').data('neww'))+"px",
								   'height':(nextsh.find('.defaultimg').data('newh'))+"px",
								   opacity:1,
								   ease:eo,rotation:0,
								   }),0);
					mtl.add(subtl,0);
				});
	}


	////////////////////////////////////////
	// THE SLOTSFADE - TRANSITION III.   //
	//////////////////////////////////////
	if (nexttrans==9 || nexttrans==10) {
				var ssamount=0;
				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				nextsh.find('.slotslide').each(function(i) {
					var ss=jQuery(this);
					ssamount++;
					mtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,{autoAlpha:0,force3D:"auto",transformPerspective:600},
																		 {autoAlpha:1,ease:ei,delay:(i*5)/1000}),0);

				});
	}


	//////////////////////
	// SLIDING OVERLAYS //
	//////////////////////
				
	if (nexttrans==27||nexttrans==28||nexttrans==29||nexttrans==30) {

		var slot = nextsh.find('.slot'),		
			nd = nexttrans==27 || nexttrans==28 ? 1 : 2,
			mhp = nexttrans==27 || nexttrans==29 ? "-100%" : "+100%",
			php = nexttrans==27 || nexttrans==29 ? "+100%" : "-100%",
			mep = nexttrans==27 || nexttrans==29 ? "-80%" : "80%",
			pep = nexttrans==27 || nexttrans==29 ? "80%" : "-80%",
			ptp = nexttrans==27 || nexttrans==29 ? "10%" : "-10%",
			fa = {overwrite:"all"},
			ta = {autoAlpha:0,zIndex:1,force3D:"auto",ease:ei},
			fb = {position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},
			tb = {autoAlpha:1,force3D:"auto",ease:eo},
			fc = {overwrite:"all",zIndex:2},
			tc = {autoAlpha:1,force3D:"auto",overwrite:"all",ease:ei},
			fd = {overwrite:"all",zIndex:2},
			td = {autoAlpha:1,force3D:"auto",ease:ei},
			at = nd==1 ? "y" : "x";

		fa[at] = "0px";
		ta[at] = mhp;
		fb[at] = ptp;
		tb[at] = "0%";
		fc[at] = php;
		tc[at] = mhp;
		fd[at] = mep;  
		td[at] = pep;

		slot.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>');
				
		mtl.add(punchgs.TweenLite.fromTo(actsh,masterspeed/1000,fa,ta),0);						
		mtl.add(punchgs.TweenLite.fromTo(nextsh.find('.defaultimg'),masterspeed/2000,fb,tb),masterspeed/2000);				
		mtl.add(punchgs.TweenLite.fromTo(slot,masterspeed/1000,fc,tc),0);	
		mtl.add(punchgs.TweenLite.fromTo(slot.find('.slotslide div'),masterspeed/1000,fd,td),0);			
	}

	
	////////////////////////////////
	// PARALLAX CIRCLE TRANSITION //
	////////////////////////////////

	//nexttrans = 34;
	if (nexttrans==31||nexttrans==32||nexttrans==33||nexttrans==34) { // up , down, right ,left
		
		masterspeed = 6000;
		ei = punchgs.Power3.easeInOut;

		var ms = masterspeed / 1000;
			mas = ms - ms/5,
			_nt = nexttrans,
			fy = _nt == 31 ? "+100%" : _nt == 32 ? "-100%" : "0%",
			fx = _nt == 33 ? "+100%" : _nt == 34 ? "-100%" : "0%",
			ty = _nt == 31 ? "-100%" : _nt == 32 ? "+100%" : "0%",
			tx = _nt == 33 ? "-100%" : _nt == 34 ? "+100%" : "0%",
		
				
		mtl.add(punchgs.TweenLite.fromTo(actsh,ms-(ms*0.2),{y:0,x:0},{y:ty,x:tx,ease:eo}),ms*0.2);
		mtl.add(punchgs.TweenLite.fromTo(nextsh,ms,{y:fy, x:fx},{y:"0%",x:"0%",ease:ei}),0);
		//mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'),{autoAlpha:0}),0);border:1px solid #fff

		function moveCircles(cont,ms,_nt,dir,ei) {
			var slot = cont.find('.slot'),			
				pieces = 6,
				sizearray = [2,1.2,0.9,0.7,0.55,0.42],				
				sw = cont.width(),
				sh = cont.height(),
				di = sh>sw ? (sw*2) / pieces : (sh*2) / pieces;
			slot.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');
			
			for (var i=0; i<pieces;i++) slot.parent().clone(false).appendTo(nextsh);	

			cont.find('.slot-circle-wrapper').each(function(i) {
				if (i<pieces) {
					var t = jQuery(this),
						s = t.find('.slot'),						

						nh = sw>sh ? sizearray[i]*sw : sizearray[i]*sh,
						nw =  nh,
						
						nl = 0 + (nw/2 - sw/2),
						nt = 0 + (nh/2 - sh/2),
						br = i!=0 ? "50%" : "0",						
						
						ftop = _nt == 31 ? sh/2 - nh/2 : _nt == 32 ? sh/2 - nh/2 : sh/2 - nh/2,
						fleft = _nt == 33 ? sw/2 - nw/2 : _nt == 34 ? sw - nw : sw/2 - nw/2,											
						fa = {scale:1,transformOrigo:"50% 50%",width:nw+"px",height:nh+"px",top:ftop+"px",left:fleft+"px",borderRadius:br},
						ta = {scale:1,top:sh/2 - nh/2,left:sw/2 - nw/2,ease:ei},
						
						fftop = _nt == 31 ? nt : _nt == 32 ? nt : nt,
						ffleft = _nt == 33 ? nl : _nt == 34 ? nl+(sw/2) : nl,
						fb = {width:sw,height:sh,autoAlpha:1,top:fftop+"px",position:"absolute",left:ffleft+"px"},
						tb = {top:nt+"px",left:nl+"px",ease:ei},
						
						speed = ms,
						delay = 0;
						
					
									
					
					mtl.add(punchgs.TweenLite.fromTo(t,speed,fa,ta),delay);
					mtl.add(punchgs.TweenLite.fromTo(s,speed,fb,tb),delay);				
					mtl.add(punchgs.TweenLite.fromTo(t,0.001,{autoAlpha:0},{autoAlpha:1}),0);
				}
			})				
		}

		nextsh.find('.slot').remove();
		nextsh.find('.defaultimg').clone().appendTo(nextsh).addClass("slot");
		moveCircles(nextsh, ms,_nt,"in",ei);
	//	moveCircles(actsh, mas,_nt,"out",eo);


		
		
		
				
		
	}

	/////////////////////////////
	// SIMPLE FADE ANIMATIONS //
	////////////////////////////
	if (nexttrans==11) {

			if (specials>4) specials = 0;
						
				var ssamount=0,
					bgcol = specials == 2 ? "#000000" : specials == 3 ? "#ffffff" : "transparent";
												
				switch (specials) {
					case 0: //FADE 						
						mtl.add(punchgs.TweenLite.fromTo(nextsh,masterspeed/1000,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:ei}),0);																
					break;

					case 1: // CROSSFADE						
						mtl.add(punchgs.TweenLite.fromTo(nextsh,masterspeed/1000,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:ei}),0);				
						mtl.add(punchgs.TweenLite.fromTo(actsh,masterspeed/1000,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:ei}),0);														
					break;
					
					case 2:
					case 3:
					case 4:
						mtl.add(punchgs.TweenLite.set(actsh.parent(),{backgroundColor:bgcol,force3D:"auto"}),0);
						mtl.add(punchgs.TweenLite.set(nextsh.parent(),{backgroundColor:"transparent",force3D:"auto"}),0);
						mtl.add(punchgs.TweenLite.to(actsh,masterspeed/2000,{autoAlpha:0,force3D:"auto",ease:ei}),0);
						mtl.add(punchgs.TweenLite.fromTo(nextsh,masterspeed/2000,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:ei}),masterspeed/2000);																
					break;
					
				}

				mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'),{autoAlpha:1}),0);
				mtl.add(punchgs.TweenLite.set(actsh.find('defaultimg'),{autoAlpha:1}),0);	

				
    }

	if (nexttrans==26) {
				var ssamount=0;			
				masterspeed=0;	
				mtl.add(punchgs.TweenLite.fromTo(nextsh,masterspeed/1000,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:ei}),0);				
				mtl.add(punchgs.TweenLite.to(actsh,masterspeed/1000,{autoAlpha:0,force3D:"auto",ease:ei}),0);				
				mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'),{autoAlpha:1}),0);
				mtl.add(punchgs.TweenLite.set(actsh.find('defaultimg'),{autoAlpha:1}),0);
	}



	if (nexttrans==12 || nexttrans==13 || nexttrans==14 || nexttrans==15) {
				masterspeed = masterspeed;
				if (masterspeed>opt.delay) masterspeed=opt.delay;
				//masterspeed = 1000;

				setTimeout(function() {
					punchgs.TweenLite.set(actsh.find('.defaultimg'),{autoAlpha:0});

				},100);

				var oow = opt.width,
					ooh = opt.height,
					ssn=nextsh.find('.slotslide, .defaultvid'),
					twx = 0,
					twy = 0,
					op = 1,
					scal = 1,
					fromscale = 1,					
					speedy = masterspeed/1000,
					speedy2 = speedy;


				if (opt.sliderLayout=="fullwidth" || opt.sliderLayout=="fullscreen") {
					oow=ssn.width();
					ooh=ssn.height();
				}



				if (nexttrans==12)
					twx = oow;
				else
				if (nexttrans==15)
					twx = 0-oow;
				else
				if (nexttrans==13)
					twy = ooh;
				else
				if (nexttrans==14)
					twy = 0-ooh;


				// DEPENDING ON EXTENDED SPECIALS, DIFFERENT SCALE AND OPACITY FUNCTIONS NEED TO BE ADDED
				if (specials == 1) op = 0;
				if (specials == 2) op = 0;
				if (specials == 3) speedy = masterspeed / 1300;				

				if (specials==4 || specials==5)
					scal=0.6;
				if (specials==6 )
					scal=1.4;


				if (specials==5 || specials==6) {
				    fromscale=1.4;
				    op=0;
				    oow=0;
				    ooh=0;twx=0;twy=0;
				 }
				if (specials==6) fromscale=0.6;
				var dd = 0;

				if (specials==7) {
					oow = 0;
					ooh = 0;
				}

				var inc = nextsh.find('.slotslide'),
					outc = actsh.find('.slotslide, .defaultvid');

				mtl.add(punchgs.TweenLite.set(actli,{zIndex:15}),0);
				mtl.add(punchgs.TweenLite.set(nextli,{zIndex:20}),0);

				if (specials==8) {
										
					mtl.add(punchgs.TweenLite.set(actli,{zIndex:20}),0);
					mtl.add(punchgs.TweenLite.set(nextli,{zIndex:15}),0);					
					mtl.add(punchgs.TweenLite.set(inc,{left:0, top:0, scale:1, opacity:1,rotation:0,ease:ei,force3D:"auto"}),0);
				} else {

					mtl.add(punchgs.TweenLite.from(inc,speedy,{left:twx, top:twy, scale:fromscale, opacity:op,rotation:opt.rotate,ease:ei,force3D:"auto"}),0);
				}
				
				if (specials==4 || specials==5) {
					oow = 0; ooh=0;
				}

				if (specials!=1)
					switch (nexttrans) {
						case 12:							
							mtl.add(punchgs.TweenLite.to(outc,speedy2,{'left':(0-oow)+'px',force3D:"auto",scale:scal,opacity:op,rotation:opt.rotate,ease:eo}),0);
						break;
						case 15:
							mtl.add(punchgs.TweenLite.to(outc,speedy2,{'left':(oow)+'px',force3D:"auto",scale:scal,opacity:op,rotation:opt.rotate,ease:eo}),0);
						break;
						case 13:						
							mtl.add(punchgs.TweenLite.to(outc,speedy2,{'top':(0-ooh)+'px',force3D:"auto",scale:scal,opacity:op,rotation:opt.rotate,ease:eo}),0);
						break;
						case 14:
							mtl.add(punchgs.TweenLite.to(outc,speedy2,{'top':(ooh)+'px',force3D:"auto",scale:scal,opacity:op,rotation:opt.rotate,ease:eo}),0);
						break;
					}
	}

	//////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION XVI.  //
	//////////////////////////////////////
	if (nexttrans==16) {						// PAPERCUT


			var subtl = new punchgs.TimelineLite();
			mtl.add(punchgs.TweenLite.set(actli,{'position':'absolute','z-index':20}),0);
			mtl.add(punchgs.TweenLite.set(nextli,{'position':'absolute','z-index':15}),0);


			// PREPARE THE CUTS
			actli.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');

			actli.find('.tp-half-one').clone(true).appendTo(actli).addClass("tp-half-two");
			actli.find('.tp-half-two').removeClass('tp-half-one');

			var oow = opt.width,
				ooh = opt.height;
			if (opt.autoHeight=="on")
				ooh = container.height();


			actli.find('.tp-half-one .defaultimg').wrap('<div class="tp-papercut" style="width:'+oow+'px;height:'+ooh+'px;"></div>')
			actli.find('.tp-half-two .defaultimg').wrap('<div class="tp-papercut" style="width:'+oow+'px;height:'+ooh+'px;"></div>')
			actli.find('.tp-half-two .defaultimg').css({position:'absolute',top:'-50%'});
			actli.find('.tp-half-two .tp-caption').wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>');

			mtl.add(punchgs.TweenLite.set(actli.find('.tp-half-two'),
			                 {width:oow,height:ooh,overflow:'hidden',zIndex:15,position:'absolute',top:ooh/2,left:'0px',transformPerspective:600,transformOrigin:"center bottom"}),0);

			mtl.add(punchgs.TweenLite.set(actli.find('.tp-half-one'),
			                 {width:oow,height:ooh/2,overflow:'visible',zIndex:10,position:'absolute',top:'0px',left:'0px',transformPerspective:600,transformOrigin:"center top"}),0);

			// ANIMATE THE CUTS
			var img=actli.find('.defaultimg'),
				ro1=Math.round(Math.random()*20-10),
				ro2=Math.round(Math.random()*20-10),
				ro3=Math.round(Math.random()*20-10),
				xof = Math.random()*0.4-0.2,
				yof = Math.random()*0.4-0.2,
				sc1=Math.random()*1+1,
				sc2=Math.random()*1+1,
				sc3=Math.random()*0.3+0.3;

			mtl.add(punchgs.TweenLite.set(actli.find('.tp-half-one'),{overflow:'hidden'}),0);
			mtl.add(punchgs.TweenLite.fromTo(actli.find('.tp-half-one'),masterspeed/800,
			                 {width:oow,height:ooh/2,position:'absolute',top:'0px',left:'0px',force3D:"auto",transformOrigin:"center top"},
			                 {scale:sc1,rotation:ro1,y:(0-ooh-ooh/4),autoAlpha:0,ease:ei}),0);
			mtl.add(punchgs.TweenLite.fromTo(actli.find('.tp-half-two'),masterspeed/800,
			                 {width:oow,height:ooh,overflow:'hidden',position:'absolute',top:ooh/2,left:'0px',force3D:"auto",transformOrigin:"center bottom"},
			                 {scale:sc2,rotation:ro2,y:ooh+ooh/4,ease:ei,autoAlpha:0,onComplete:function() {
				                // CLEAN UP
								punchgs.TweenLite.set(actli,{'position':'absolute','z-index':15});
								punchgs.TweenLite.set(nextli,{'position':'absolute','z-index':20});
								if (actli.find('.tp-half-one').length>0)  {
									actli.find('.tp-half-one .defaultimg').unwrap();
									actli.find('.tp-half-one .slotholder').unwrap();
								}
								actli.find('.tp-half-two').remove();
			                 }}),0);

			subtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'),{autoAlpha:1}),0);

			if (actli.html()!=null)
				mtl.add(punchgs.TweenLite.fromTo(nextli,(masterspeed-200)/1000,
												{scale:sc3,x:(opt.width/4)*xof, y:(ooh/4)*yof,rotation:ro3,force3D:"auto",transformOrigin:"center center",ease:eo},
												{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0);

			mtl.add(subtl,0);


	}

	////////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION XVII.  //
	///////////////////////////////////////
	if (nexttrans==17) {								// 3D CURTAIN HORIZONTAL


				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

				nextsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this);

					mtl.add(punchgs.TweenLite.fromTo(ss,(masterspeed)/800,
									{opacity:0,rotationY:0,scale:0.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},
									{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:ei,delay:j*0.06}),0);

				});
	}



	////////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION XVIII.  //
	///////////////////////////////////////
	if (nexttrans==18) {								// 3D CURTAIN VERTICAL

				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				nextsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this);

					mtl.add(punchgs.TweenLite.fromTo(ss,(masterspeed)/500,
									{autoAlpha:0,rotationY:110,scale:0.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},
									{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:ei,delay:j*0.06}),0);
				});



	}


	////////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION XIX.  //
	///////////////////////////////////////
	if (nexttrans==19 || nexttrans==22) {								// IN CUBE

				var subtl = new punchgs.TimelineLite();
				//SET DEFAULT IMG UNVISIBLE

				mtl.add(punchgs.TweenLite.set(actli,{zIndex:20}),0);
				mtl.add(punchgs.TweenLite.set(nextli,{zIndex:20}),0);
				setTimeout(function() {
					actsh.find('.defaultimg').css({opacity:0});
				},100);
				var rot = 90,
					op = 1,
					torig ="center center ";

				if (slidedirection==1) rot = -90;

				if (nexttrans==19) {
					torig = torig+"-"+opt.height/2;
					op=0;

				} else {
					torig = torig+opt.height/2;
				}

				// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
				punchgs.TweenLite.set(container,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600});

				nextsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this);

					subtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
									{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:opt.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:torig,rotationX:rot},
									{left:0,rotationY:0,top:0,z:0, scale:1,force3D:"auto",rotationX:0, delay:(j*50)/1000,ease:ei}),0);
					subtl.add(punchgs.TweenLite.to(ss,0.1,{autoAlpha:1,delay:(j*50)/1000}),0);
					mtl.add(subtl);
				});

				actsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this);
					var rot = -90;
					if (slidedirection==1) rot = 90;

					subtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
									{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:torig, rotationX:0},
									{autoAlpha:1,rotationY:opt.rotate,top:0,z:10, scale:1,rotationX:rot, delay:(j*50)/1000,force3D:"auto",ease:eo}),0);

					mtl.add(subtl);					
				});
				mtl.add(punchgs.TweenLite.set(actli,{zIndex:18}),0);
	}




	////////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION XX.  //
	///////////////////////////////////////
	if (nexttrans==20 ) {								// FLYIN


				setTimeout(function() {
					actsh.find('.defaultimg').css({opacity:0});
				},100);
				
				if (slidedirection==1) {
				   var ofx = -opt.width
				   var rot  =80;
				   var torig = "20% 70% -"+opt.height/2;
				} else {
					var ofx = opt.width;
					var rot = -80;
					var torig = "80% 70% -"+opt.height/2;
				}


				nextsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this),
						d = (j*50)/1000;

					

					mtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
									{left:ofx,rotationX:40,z:-600, opacity:op,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:torig,transformStyle:"flat",rotationY:rot},
									{left:0,rotationX:0,opacity:1,top:0,z:0, scale:1,rotationY:0, delay:d,ease:ei}),0);
				

				});
				actsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this),
						d = (j*50)/1000;
						d = j>0 ?  d + masterspeed/9000 : 0;

					if (slidedirection!=1) {
					   var ofx = -opt.width/2
					   var rot  =30;
					   var torig = "20% 70% -"+opt.height/2;
					} else {
						var ofx = opt.width/2;
						var rot = -30;
						var torig = "80% 70% -"+opt.height/2;
					}
					eo=punchgs.Power2.easeInOut;

					mtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
									{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0, force3D:"auto",transformPerspective:600,transformOrigin:torig, transformStyle:"flat",rotationY:0},
									{opacity:1,rotationX:20,top:0, z:-600, left:ofx, force3D:"auto",rotationY:rot, delay:d,ease:eo}),0);
					
					
				});
	}

	////////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION XX.  //
	///////////////////////////////////////
	if (nexttrans==21 || nexttrans==25) {								// TURNOFF


				//SET DEFAULT IMG UNVISIBLE

				setTimeout(function() {
					actsh.find('.defaultimg').css({opacity:0});
				},100);
				var rot = 90,
					ofx = -opt.width,
					rot2 = -rot;

				if (slidedirection==1) {
				   if (nexttrans==25) {
				   	 var torig = "center top 0";
				   	 rot = opt.rotate;
				   } else {
				     var torig = "left center 0";
				     rot2 = opt.rotate;
				   }

				} else {
					ofx = opt.width;
					rot = -90;
					if (nexttrans==25) {
				   	 var torig = "center bottom 0"
				   	 rot2 = -rot;
				   	 rot = opt.rotate;
				   } else {
				     var torig = "right center 0";
				     rot2 = opt.rotate;
				   }
				}

				nextsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this),
						ms2 = ((masterspeed/1.5)/3);


					mtl.add(punchgs.TweenLite.fromTo(ss,(ms2*2)/1000,
									{left:0,transformStyle:"flat",rotationX:rot2,z:0, autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:torig,rotationY:rot},
									{left:0,rotationX:0,top:0,z:0, autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:ms2/1000, ease:ei}),0);
				});


				if (slidedirection!=1) {
				   	ofx = -opt.width
				   	rot  = 90;

				   if (nexttrans==25) {
				   	 torig = "center top 0"
				   	 rot2 = -rot;
				   	 rot = opt.rotate;
				   } else {
				     torig = "left center 0";
				     rot2 = opt.rotate;
				   }

				} else {
					ofx = opt.width;
					rot = -90;
					if (nexttrans==25) {
				   	 torig = "center bottom 0"
				   	 rot2 = -rot;
				   	 rot = opt.rotate;
				   } else {
				     torig = "right center 0";
				     rot2 = opt.rotate;
				   }
				}

				actsh.find('.slotslide').each(function(j) {
					var ss=jQuery(this);
					mtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
									{left:0,transformStyle:"flat",rotationX:0,z:0, autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:torig,rotationY:0},
									{left:0,rotationX:rot2,top:0,z:0,autoAlpha:1,force3D:"auto", scale:1,rotationY:rot,ease:eo}),0);
				});
	}



	////////////////////////////////////////
	// THE SLOTSLIDE - TRANSITION XX.  //
	///////////////////////////////////////
	if (nexttrans==23 || nexttrans == 24) {								// cube-horizontal - inboxhorizontal

		//SET DEFAULT IMG UNVISIBLE
		setTimeout(function() {
			actsh.find('.defaultimg').css({opacity:0});
		},100);
		var rot = -90,
			op = 1,
			opx=0;

		if (slidedirection==1) rot = 90;
		if (nexttrans==23) {
			var torig = "center center -"+opt.width/2;
			op=0;
		} else
			var torig = "center center "+opt.width/2;

		punchgs.TweenLite.set(container,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500});
						nextsh.find('.slotslide').each(function(j) {
			var ss=jQuery(this);
			mtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
							{left:opx,rotationX:opt.rotate,force3D:"auto",opacity:op,top:0,scale:1,transformPerspective:1200,transformOrigin:torig,rotationY:rot},
							{left:0,rotationX:0,autoAlpha:1,top:0,z:0, scale:1,rotationY:0, delay:(j*50)/500,ease:ei}),0);
		});

		rot = 90;
		if (slidedirection==1) rot = -90;

		actsh.find('.slotslide').each(function(j) {
			var ss=jQuery(this);
			mtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/1000,
							{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:torig, rotationY:0},
							{left:opx,rotationX:opt.rotate,top:0, scale:1,rotationY:rot, delay:(j*50)/500,ease:eo}),0);
			if (nexttrans==23) mtl.add(punchgs.TweenLite.fromTo(ss,masterspeed/2000,{autoAlpha:1},{autoAlpha:0,delay:(j*50)/500 + masterspeed/3000,ease:eo}),0);

		});
	}	
	

	return mtl;
}	

})(jQuery);;/********************************************
 * REVOLUTION 5.2.3 EXTENSION - VIDEO FUNCTIONS
 * @version: 1.7 (16.03.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
(function($) {
var _R = jQuery.fn.revolution,
	_ISM = _R.is_mobile();



///////////////////////////////////////////
// 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
///////////////////////////////////////////
jQuery.extend(true,_R, {

	
	preLoadAudio : function(li,opt) {
		li.find('.tp-audiolayer').each(function() {

			var element = jQuery(this),
				obj = {};
			if (element.find('audio').length===0) {
				obj.src =  element.data('videomp4') !=undefined ? element.data('videomp4')  : '',
				obj.pre = element.data('videopreload') || '';
				if (element.attr('id')===undefined) element.attr('audio-layer-'+Math.round(Math.random()*199999));
				obj.id = element.attr('id');
				obj.status = "prepared";
				obj.start = jQuery.now();
				obj.waittime = element.data('videopreloadwait')*1000 || 5000;


				if (obj.pre=="auto" || obj.pre=="canplaythrough" || obj.pre=="canplay" || obj.pre=="progress") {				
					if (opt.audioqueue===undefined) opt.audioqueue = [];					
					opt.audioqueue.push(obj);
					_R.manageVideoLayer(element,opt);
				}
			}
		});	
	},

	preLoadAudioDone : function(nc,opt,event) {	
		
		if (opt.audioqueue && opt.audioqueue.length>0)
			jQuery.each(opt.audioqueue,function(i,obj) {
				if (nc.data('videomp4') === obj.src && (obj.pre === event || obj.pre==="auto")) {				
					obj.status = "loaded";
				}
			});
	},

	resetVideo : function(_nc,opt) {		
		switch (_nc.data('videotype')) {
			case "youtube":
				var player=_nc.data('player');
			 	try{
					if (_nc.data('forcerewind')=="on" && !_ISM) {
						var s = getStartSec(_nc.data('videostartat'));
						s= s==-1 ? 0 : s;		
						if (_nc.data('player')!=undefined) {					
							_nc.data('player').seekTo(s);													
							_nc.data('player').pauseVideo();
						}
					}					
				} catch(e) {}
				if (_nc.find('.tp-videoposter').length==0)
					punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});	
			break;

			case "vimeo":
				var f = $f(_nc.find('iframe').attr("id"));	
			 	try{
					if (_nc.data('forcerewind')=="on" && !_ISM) 	{						
						var s = getStartSec(_nc.data('videostartat')),
							ct = 0;
						s= s==-1 ? 0 : s;													
						f.api("seekTo",s);								
						f.api("pause");				
						
					}
					
				} catch(e) {}
				if (_nc.find('.tp-videoposter').length==0)
					punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});
			break;

			case "html5":
				if (_ISM && _nc.data('disablevideoonmobile')==1) return false;			
		
				var tag = _nc.data('audio')=="html5" ? "audio" : "video",
					jvideo = _nc.find(tag),
					video = jvideo[0];

				
				punchgs.TweenLite.to(jvideo,0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});
				
				if (_nc.data('forcerewind')=="on" && !_nc.hasClass("videoisplaying")) {
					try{
						var s = getStartSec(_nc.data('videostartat'));					
						video.currentTime = s == -1 ? 0 : s;	
					} catch(e) {}
				}

				if (_nc.data('volume')=="mute" || _R.lastToggleState(_nc.data('videomutetoggledby')) || opt.globalmute===true)
					video.muted = true;			
			break;
		}
	},


	isVideoMuted : function(_nc,opt) {
		var muted = false;
		switch (_nc.data('videotype')) {
			case "youtube":
				try{
					var player=_nc.data('player');	
					muted = player.isMuted();										
				} catch(e) {}
			break;
			case "vimeo":
				try{
					var f = $f(_nc.find('iframe').attr("id"));
					if (_nc.data('volume')=="mute")
						muted = true;	
					
				} catch(e) {}
			break;
			case "html5":
				var tag = _nc.data('audio')=="html5" ? "audio" : "video",
					jvideo = _nc.find(tag),
					video = jvideo[0];

				if (video.muted)
					muted = true;							
			break;
		}	
		return muted;	
	},

	muteVideo : function(_nc,opt) {			
		switch (_nc.data('videotype')) {
			case "youtube":
				try{
					var player=_nc.data('player');	
					
					player.mute();										
				} catch(e) {}
			break;
			case "vimeo":
				try{
					var f = $f(_nc.find('iframe').attr("id"));
					_nc.data('volume',"mute");
					f.api('setVolume',0);
				} catch(e) {}
			break;
			case "html5":
				var tag = _nc.data('audio')=="html5" ? "audio" : "video",
					jvideo = _nc.find(tag),
					video = jvideo[0];
				video.muted = true;
			break;
		}		
	},

	unMuteVideo : function(_nc,opt) {	
		if (opt.globalmute===true) return;
		switch (_nc.data('videotype')) {
			case "youtube":
				try{
					var player=_nc.data('player');						
					player.unMute();										
				} catch(e) {}
			break;
			case "vimeo":
				try{
					var f = $f(_nc.find('iframe').attr("id"));
					_nc.data('volume',"1");
					f.api('setVolume',1);					
				} catch(e) {}
			break;
			case "html5":
				var tag = _nc.data('audio')=="html5" ? "audio" : "video",
					jvideo = _nc.find(tag),
					video = jvideo[0];
				video.muted = false;
			break;
		}		
	},

	



	stopVideo : function(_nc,opt) {	
		
		switch (_nc.data('videotype')) {
			case "youtube":
				try{
					var player=_nc.data('player');						
					player.pauseVideo();										
				} catch(e) {}
			break;
			case "vimeo":
				try{
					var f = $f(_nc.find('iframe').attr("id"));
					f.api("pause");
					
				} catch(e) {}
			break;
			case "html5":
				var tag = _nc.data('audio')=="html5" ? "audio" : "video",
					jvideo = _nc.find(tag),
					video = jvideo[0];
				if (jvideo!=undefined && video!=undefined) video.pause();						
			break;
		}		
	},

	playVideo : function(_nc,opt) {		

		clearTimeout(_nc.data('videoplaywait'));		
		switch (_nc.data('videotype')) {
			case "youtube":				

				if (_nc.find('iframe').length==0) {
					_nc.append(_nc.data('videomarkup'));						
					addVideoListener(_nc,opt,true);
				} else {										
					if (_nc.data('player').playVideo !=undefined) {									
						
						var s = getStartSec(_nc.data('videostartat')),
							ct = _nc.data('player').getCurrentTime();
							if (_nc.data('nextslideatend-triggered')==1) {
								ct=-1;
								_nc.data('nextslideatend-triggered',0);
							}
						if (s!=-1 && s>ct) _nc.data('player').seekTo(s);			
						_nc.data('player').playVideo();
					} else {
						_nc.data('videoplaywait',setTimeout(function() {							
							_R.playVideo(_nc,opt);
						},50));
					}
				}
			break;
			case "vimeo":		
				
				if (_nc.find('iframe').length==0) {							
					_nc.append(_nc.data('videomarkup'));			
					addVideoListener(_nc,opt,true);
					
				} else {	
						if (_nc.hasClass("rs-apiready")) {
							var id = _nc.find('iframe').attr("id"),
								f = $f(id);												
								if (f.api("play")==undefined) {																
										_nc.data('videoplaywait',setTimeout(function() {	
											
											_R.playVideo(_nc,opt);
										},50));								
								} else {																																											
									setTimeout(function() {			
									
										f.api("play");
										var s = getStartSec(_nc.data('videostartat')),
											ct = _nc.data('currenttime');										
										if (_nc.data('nextslideatend-triggered')==1) {
											ct=-1;
											_nc.data('nextslideatend-triggered',0);
										}
										if (s!=-1 && s>ct) f.api("seekTo",s);		
									},510);	
								}																	
						} else {
							_nc.data('videoplaywait',setTimeout(function() {	
								
								_R.playVideo(_nc,opt);
							},50));
						}
				}
			break;
			case "html5":
				if (_ISM && _nc.data('disablevideoonmobile')==1) return false;			


				var tag = _nc.data('audio')=="html5" ? "audio" : "video",
					jvideo = _nc.find(tag),
					video = jvideo[0],
					html5vid = jvideo.parent();

				if (html5vid.data('metaloaded') != 1) {						
					addEvent(video,'loadedmetadata',function(_nc) {								
						_R.resetVideo(_nc,opt);
						video.play();
						var s = getStartSec(_nc.data('videostartat')),
							ct = video.currentTime;
						if (_nc.data('nextslideatend-triggered')==1) {
								ct=-1;
								_nc.data('nextslideatend-triggered',0);
							}
						if (s!=-1 && s>ct) video.currentTime = s;
					}(_nc));
				} else {		
					video.play();					
					var s = getStartSec(_nc.data('videostartat')),
						ct = video.currentTime;
					if (_nc.data('nextslideatend-triggered')==1) {
							ct=-1;
							_nc.data('nextslideatend-triggered',0);
						}
					if (s!=-1 && s>ct) video.currentTime = s;										
				}
			break;
		}
	},

	isVideoPlaying : function(_nc,opt) {
		
		var ret = false;
		if (opt.playingvideos != undefined) {
			jQuery.each(opt.playingvideos,function(i,nc) {
				if (_nc.attr('id') == nc.attr('id'))					
					ret = true;													
			});
		}		
		return ret;
	},

	removeMediaFromList : function(_nc,opt) {
		remVidfromList(_nc,opt);
	},

	prepareCoveredVideo : function(asprat,opt,nextcaption) {		
		var ifr = nextcaption.find('iframe, video'),
			wa = asprat.split(':')[0],
			ha = asprat.split(':')[1],
			li = nextcaption.closest('.tp-revslider-slidesli'),
			od = li.width()/li.height(),
			vd = wa/ha,
			nvh = (od/vd)*100,
			nvw = (vd/od)*100;	

		if (od>vd) 																
			punchgs.TweenLite.to(ifr,0.001,{height:nvh+"%", width:"100%", top:-(nvh-100)/2+"%",left:"0px",position:"absolute"});
		else 
			punchgs.TweenLite.to(ifr,0.001,{width:nvw+"%", height:"100%", left:-(nvw-100)/2+"%",top:"0px",position:"absolute"});
		
		if (!ifr.hasClass("resizelistener")) {			
			ifr.addClass("resizelistener");		
			jQuery(window).resize(function() {
				clearTimeout(ifr.data('resizelistener'));
				ifr.data('resizelistener',setTimeout(function() {
					_R.prepareCoveredVideo(asprat,opt,nextcaption);
				},30));				
			})
		}
	},

	checkVideoApis : function(_nc,opt,addedApis) {		
		var httpprefix = location.protocol === 'https:' ? "https" : "http";
				
		if ((_nc.data('ytid')!=undefined  || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('youtube')>0)) opt.youtubeapineeded = true;
		if ((_nc.data('ytid')!=undefined  || _nc.find('iframe').length>0 &&  _nc.find('iframe').attr('src').toLowerCase().indexOf('youtube')>0) && addedApis.addedyt==0) {
			opt.youtubestarttime = jQuery.now();
			addedApis.addedyt=1;
			var s = document.createElement("script");								
			s.src = "https://www.youtube.com/iframe_api"; /* Load Player API*/
			var before = document.getElementsByTagName("script")[0],
				loadit = true;
			jQuery('head').find('*').each(function(){
				if (jQuery(this).attr('src') == "https://www.youtube.com/iframe_api")
				   loadit = false;
			});
			if (loadit) before.parentNode.insertBefore(s, before);

		}



		if ((_nc.data('vimeoid')!=undefined || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('vimeo')>0)) opt.vimeoapineeded = true;	
	  	if ((_nc.data('vimeoid')!=undefined || _nc.find('iframe').length>0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('vimeo')>0) && addedApis.addedvim==0) {
			opt.vimeostarttime = jQuery.now();
			addedApis.addedvim=1;
			var f = document.createElement("script"),
				before = document.getElementsByTagName("script")[0],
				loadit = true;
			f.src = httpprefix+"://f.vimeocdn.com/js/froogaloop2.min.js"; /* Load Player API*/							

			jQuery('head').find('*').each(function(){
				if (jQuery(this).attr('src') == httpprefix+"://f.vimeocdn.com/js/froogaloop2.min.js")
				   loadit = false;
			});
			if (loadit)
				before.parentNode.insertBefore(f, before);
		}
		return addedApis;
	},

	manageVideoLayer : function(_nc,opt,recalled,internrecalled) {				
		// YOUTUBE AND VIMEO LISTENRES INITIALISATION		
		var vida = _nc.data("videoattributes"),
			vidytid = _nc.data('ytid'),
			vimeoid = _nc.data('vimeoid'),
			videopreload = _nc.data('videopreload') === "auto" || _nc.data('videopreload') === "canplay" || _nc.data('videopreload') === "canplaythrough" || _nc.data('videopreload') === "progress" ? "auto" : _nc.data('videopreload'),
			videomp = _nc.data('videomp4'),
			videowebm = _nc.data('videowebm'),
			videoogv = _nc.data('videoogv'),
			videoafs = _nc.data('allowfullscreenvideo'),
			videocontrols = _nc.data('videocontrols'),
			httpprefix = "http",
			videoloop = _nc.data('videoloop')=="loop" ? "loop" : _nc.data('videoloop')=="loopandnoslidestop" ? "loop" : "",
			videotype = (videomp!=undefined || videowebm!=undefined) ? "html5" : 
						(vidytid!=undefined && String(vidytid).length>1) ? "youtube" : 
						(vimeoid!=undefined && String(vimeoid).length>1) ? "vimeo" : "none",
			tag = _nc.data('audio')=="html5" ? "audio" : "video",
			newvideotype = (videotype=="html5" && _nc.find(tag).length==0) ? "html5" : 
						(videotype=="youtube" && _nc.find('iframe').length==0) ? "youtube" : 
						(videotype=="vimeo" && _nc.find('iframe').length==0) ? "vimeo" : "none";

			// VideLoop reset if Next Slide at End is set ! 
			videoloop = _nc.data('nextslideatend') === true ? "" : videoloop;


		_nc.data('videotype',videotype);
		// ADD HTML5 VIDEO IF NEEDED
		switch (newvideotype) {
			case "html5":

				if (videocontrols!="controls") videocontrols="";
				var tag = "video"

				//_nc.data('audio',"html5");
				if (_nc.data('audio')=="html5") {
					tag = "audio";
					_nc.addClass("tp-audio-html5");
				}
				
				var apptxt = '<'+tag+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+videoloop+' preload="'+videopreload+'">';

				if (videopreload=="auto") opt.mediapreload = true;
				//if (_nc.data('videoposter')!=undefined) apptxt = apptxt + 'poster="'+_nc.data('videoposter')+'">';
				if (videowebm!=undefined && _R.get_browser().toLowerCase()=="firefox") apptxt = apptxt + '<source src="'+videowebm+'" type="video/webm" />';
				if (videomp!=undefined) apptxt = apptxt + '<source src="'+videomp+'" type="video/mp4" />';
				if (videoogv!=undefined) apptxt = apptxt + '<source src="'+videoogv+'" type="video/ogg" />';
				apptxt = apptxt + '</'+tag+'>';
				var hfm ="";
				if (videoafs==="true" ||  videoafs===true)
					hfm = '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>';

				if (videocontrols=="controls")
					apptxt = apptxt + ('<div class="tp-video-controls">'+
										  '<div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div>'+
										  '<div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div>'+
										  '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div>'+
										  '<div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+
										  hfm+
										  '</div>');
				
				_nc.data('videomarkup',apptxt)
				_nc.append(apptxt);

				// START OF HTML5 VIDEOS
				if ((_ISM && _nc.data('disablevideoonmobile')==1) ||_R.isIE(8)) _nc.find(tag).remove();

				// ADD HTML5 VIDEO CONTAINER				
				_nc.find(tag).each(function(i) {
					var video = this,
						jvideo = jQuery(this);

					if (!jvideo.parent().hasClass("html5vid"))
						jvideo.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>');

					var html5vid = jvideo.parent();
					if (html5vid.data('metaloaded') != 1) {
						addEvent(video,'loadedmetadata',function(_nc) {		
							htmlvideoevents(_nc,opt);
							_R.resetVideo(_nc,opt);						
						}(_nc));
					} 								
				});			
			break;
			case "youtube":
				httpprefix = "http";	
				if (location.protocol === 'https:')	
					httpprefix = "https";		
				if (videocontrols=="none") {					
			 		vida = vida.replace("controls=1","controls=0");
			 		if (vida.toLowerCase().indexOf('controls')==-1)
			 		  vida = vida+"&controls=0";
			 	}
			 	
			 	var	s = getStartSec(_nc.data('videostartat')),
			 		e = getStartSec(_nc.data('videoendat'));
							 	
			 	if (s!=-1) vida=vida+"&start="+s;
			 	if (e!=-1) vida=vida+"&end="+e;

				// CHECK VIDEO ORIGIN, AND EXTEND WITH WWW IN CASE IT IS MISSING !
			 	var orig = vida.split('origin='+httpprefix+'://'),
			 		vida_new = "";
			 				 	
			 	if (orig.length>1) {
			 		vida_new = orig[0]+'origin='+httpprefix+'://';
			 		if (self.location.href.match(/www/gi) && !orig[1].match(/www/gi)) 						 	 						 		
			 				vida_new=vida_new+"www."
			 		vida_new=vida_new+orig[1];
			 	} else {
			 		vida_new = vida;
			 	}	
			 	
			 	var yafv = videoafs==="true" ||  videoafs===true ? "allowfullscreen" : "";		 	
			 	_nc.data('videomarkup','<iframe style="visible:hidden" src="'+httpprefix+'://www.youtube.com/embed/'+vidytid+'?'+vida_new+'" '+yafv+' width="100%" height="100%" style="width:100%;height:100%"></iframe>');
			break;

			case "vimeo":
				if (location.protocol === 'https:')
					httpprefix = "https";												
				_nc.data('videomarkup','<iframe style="visible:hidden" src="'+httpprefix+'://player.vimeo.com/video/'+vimeoid+'?autoplay=0&'+vida+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="100%;height:100%"></iframe>');
				
			break;
		}
		
		//if (videotype=="vimeo" || videotype=="youtube") {
		
		// IF VIDEOPOSTER EXISTING		
		var noposteronmobile = _ISM && _nc.data('noposteronmobile')=="on";
		
		if (_nc.data('videoposter')!=undefined && _nc.data('videoposter').length>2 && !noposteronmobile) {
			if (_nc.find('.tp-videoposter').length==0)
				_nc.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+_nc.data('videoposter')+'); background-size:cover;background-position:center center;"></div>');				
			if (_nc.find('iframe').length==0)
			_nc.find('.tp-videoposter').click(function() {					
				_R.playVideo(_nc,opt);															
				if (_ISM) {
					if (_nc.data('disablevideoonmobile')==1) return false;						
					punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});
				}
			})
		} else {
			if  (_ISM && _nc.data('disablevideoonmobile')==1) return false;			
			if (_nc.find('iframe').length==0 && (videotype=="youtube" || videotype=="vimeo")) {				
				_nc.append(_nc.data('videomarkup'));
				addVideoListener(_nc,opt,false);
			}
		}
		
		// ADD DOTTED OVERLAY IF NEEDED
		if (_nc.data('dottedoverlay')!="none" && _nc.data('dottedoverlay')!=undefined && _nc.find('.tp-dottedoverlay').length!=1)
			_nc.append('<div class="tp-dottedoverlay '+_nc.data('dottedoverlay')+'"></div>');
		
		_nc.addClass("HasListener");	

		if (_nc.data('bgvideo')==1) {
			punchgs.TweenLite.set(_nc.find('video, iframe'),{autoAlpha:0});
		}
	}
	
});





//////////////////////////////////////////////////////
// * Revolution Slider - VIDEO / API FUNCTIONS		//
// * @version: 1.0 (30.10.2014)						//
// * @author ThemePunch								//
//////////////////////////////////////////////////////

function getStartSec(st) {						
	return st == undefined ? -1 :jQuery.isNumeric(st) ? st : st.split(":").length>1 ? parseInt(st.split(":")[0],0)*60 + parseInt(st.split(":")[1],0) : st;
};

// 	-	VIMEO ADD EVENT /////
var addEvent = function(element, eventName, callback) {
	if (element.addEventListener)
		element.addEventListener(eventName, callback, false);
	else
		element.attachEvent(eventName, callback, false);
};

var getVideoDatas = function(p,t,d) {
	var a = {};
	a.video = p;
	a.videotype = t;
	a.settings = d;
	return a;
}


var addVideoListener = function(_nc,opt,startnow) {
	
	var ifr = _nc.find('iframe'),
		frameID = "iframe"+Math.round(Math.random()*100000+1),
		loop = _nc.data('videoloop'),
		pforv = loop != "loopandnoslidestop";

	loop = loop =="loop" ||  loop =="loopandnoslidestop";

	// CARE ABOUT ASPECT RATIO

	if (_nc.data('forcecover')==1) {
		_nc.removeClass("fullscreenvideo").addClass("coverscreenvideo");			
		var asprat = _nc.data('aspectratio');														
		if (asprat!=undefined && asprat.split(":").length>1) 			
			_R.prepareCoveredVideo(asprat,opt,_nc);
	}
	
	if (_nc.data('bgvideo')==1) {
		var asprat = _nc.data('aspectratio');														
		if (asprat!=undefined && asprat.split(":").length>1) 			
			_R.prepareCoveredVideo(asprat,opt,_nc);
	}



	// IF LISTENER DOES NOT EXIST YET			
	ifr.attr('id',frameID);		

	if (startnow) _nc.data('startvideonow',true);

	if (_nc.data('videolistenerexist')!==1) {	
		switch (_nc.data('videotype')) {
			// YOUTUBE LISTENER
			case "youtube":

				var player = new YT.Player(frameID, {
					events: {
						"onStateChange": function(event) {		
														
							var container = _nc.closest('.tp-simpleresponsive'),
								videorate = _nc.data('videorate'),
								videostart = _nc.data('videostart'),							 								 	
							 	fsmode = checkfullscreenEnabled();
							 	
							if (event.data == YT.PlayerState.PLAYING) {
								punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});
								punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});							
								if (_nc.data('volume')=="mute" || _R.lastToggleState(_nc.data('videomutetoggledby')) || opt.globalmute===true) {
									  player.mute();									  
								 } else {
									  player.unMute();
									  player.setVolume(parseInt(_nc.data('volume'),0) || 75);
								}

								opt.videoplaying=true;									
								addVidtoList(_nc,opt);	
								if (pforv) 
									opt.c.trigger('stoptimer');
								else
									opt.videoplaying=false;								
																	
								opt.c.trigger('revolution.slide.onvideoplay',getVideoDatas(player,"youtube",_nc.data()));
								_R.toggleState(_nc.data('videotoggledby'));													
							} else {							
								if (event.data==0 && loop) {
									//player.playVideo();
									var s = getStartSec(_nc.data('videostartat'));
									if (s!=-1) player.seekTo(s);
									player.playVideo();		
									_R.toggleState(_nc.data('videotoggledby'));							
								}
								
								if (!fsmode && (event.data==0 || event.data==2) && _nc.data('showcoveronpause')=="on" && _nc.find('.tp-videoposter').length>0) {										
									punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut});
									punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut});																			
								} 
								if ((event.data!=-1 && event.data!=3)) {
																		
									opt.videoplaying=false;									
									opt.tonpause = false;
									
									remVidfromList(_nc,opt);
									container.trigger('starttimer');
									opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(player,"youtube",_nc.data()));
									
									if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))									
										_R.unToggleState(_nc.data('videotoggledby'));
									
								} 
								
								if (event.data==0 && _nc.data('nextslideatend')==true) {
									exitFullscreen();
									_nc.data('nextslideatend-triggered',1);
									opt.c.revnext();
									remVidfromList(_nc,opt);
								} else {									
									remVidfromList(_nc,opt);
									opt.videoplaying=false;
									container.trigger('starttimer');
									opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(player,"youtube",_nc.data()));
									if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))									
										_R.unToggleState(_nc.data('videotoggledby'));
								}
							}
						},
						'onReady': function(event) {	
							
							
							var videorate = _nc.data('videorate'),
								videostart = _nc.data('videostart');
								
							_nc.addClass("rs-apiready");
							if (videorate!=undefined)
								event.target.setPlaybackRate(parseFloat(videorate));
							
							// PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
							_nc.find('.tp-videoposter').unbind("click");
							_nc.find('.tp-videoposter').click(function() {										
								 if (!_ISM) {
									 player.playVideo();
								}
							})

							if (_nc.data('startvideonow')) {
								
								_nc.data('player').playVideo();	
								var s = getStartSec(_nc.data('videostartat'));
								if (s!=-1) _nc.data('player').seekTo(s);
								//_nc.find('.tp-videoposter').click();
							}
							_nc.data('videolistenerexist',1);					
						}
					}
				});			
				_nc.data('player',player);
			break;

			// VIMEO LISTENER
			case "vimeo":
				var isrc = ifr.attr('src'),
					queryParameters = {}, queryString = isrc,
					re = /([^&=]+)=([^&]*)/g, m;
				// Creates a map with the query string parameters
				while (m = re.exec(queryString)) {
					queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
				}
				if (queryParameters['player_id']!=undefined)
					isrc = isrc.replace(queryParameters['player_id'],frameID);
				else
					isrc=isrc+"&player_id="+frameID;
				try{ isrc = isrc.replace('api=0','api=1'); } catch(e) {}
				isrc=isrc+"&api=1";
				ifr.attr('src',isrc);
				
			
				var player = _nc.find('iframe')[0],
					vimcont = jQuery('#'+frameID),
					f = $f(frameID);				

				f.addEvent('ready', function(){	
						
					_nc.addClass("rs-apiready");
					f.addEvent('play', function(data) {							
						_nc.data('nextslidecalled',0);
						punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});
						punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});							
						opt.c.trigger('revolution.slide.onvideoplay',getVideoDatas(f,"vimeo",_nc.data()));
						opt.videoplaying=true;
						
						addVidtoList(_nc,opt);
						if (pforv) 
							opt.c.trigger('stoptimer');
						else
							opt.videoplaying=false;
						if (_nc.data('volume')=="mute" || _R.lastToggleState(_nc.data('videomutetoggledby')) || opt.globalmute===true)
						  f.api('setVolume',"0")
						else
						  f.api('setVolume',(parseInt(_nc.data('volume'),0)/100 || 0.75));
						_R.toggleState(_nc.data('videotoggledby'));
					});

					f.addEvent('playProgress',function(data) {					
						var et = getStartSec(_nc.data('videoendat'))							
						
						_nc.data('currenttime',data.seconds);
						if (et!=0 && (Math.abs(et-data.seconds) <0.3 && et>data.seconds) && _nc.data('nextslidecalled') != 1) {																
							if (loop) {								
								
								f.api("play");								
								var s = getStartSec(_nc.data('videostartat'));
								if (s!=-1) f.api("seekTo",s);				
							} else {									
								if (_nc.data('nextslideatend')==true) {	
									_nc.data('nextslideatend-triggered',1);			
									_nc.data('nextslidecalled',1);			
									opt.c.revnext();							
								}
								f.api("pause");
							}
						}
					});

					f.addEvent('finish', function(data) {
							remVidfromList(_nc,opt);
							opt.videoplaying=false;
							opt.c.trigger('starttimer');
							opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(f,"vimeo",_nc.data())); 
							if (_nc.data('nextslideatend')==true) {
								_nc.data('nextslideatend-triggered',1);
								opt.c.revnext();
							}
							if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))
								_R.unToggleState(_nc.data('videotoggledby'));
							
					});

					f.addEvent('pause', function(data) {

							if (_nc.find('.tp-videoposter').length>0 && _nc.data('showcoveronpause')=="on") {
								punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut});
								punchgs.TweenLite.to(_nc.find('iframe'),0.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut});
							} 
							opt.videoplaying=false;
							opt.tonpause = false;
							
							remVidfromList(_nc,opt);
							opt.c.trigger('starttimer');
							opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(f,"vimeo",_nc.data())); 
							if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))
								_R.unToggleState(_nc.data('videotoggledby'));
					});
					
					
					
					_nc.find('.tp-videoposter').unbind("click");
					_nc.find('.tp-videoposter').click(function() {							 
						 if (!_ISM) { 
						 	
						 	f.api("play");
						 	return false;
						 }
					})
					if (_nc.data('startvideonow')) {	
							
							f.api("play");
							var s = getStartSec(_nc.data('videostartat'));
							if (s!=-1) f.api("seekTo",s);					
					}
					_nc.data('videolistenerexist',1);
				});
			break;
		}
	} else {
		var s = getStartSec(_nc.data('videostartat'));
		switch (_nc.data('videotype')) {
			// YOUTUBE LISTENER
			case "youtube":
				if (startnow) {
					_nc.data('player').playVideo();	
					if (s!=-1) _nc.data('player').seekTo()
				}
			break;
			case "vimeo":
				if (startnow) {
					
					var f = $f(_nc.find('iframe').attr("id"));	
					f.api("play");					
					if (s!=-1) f.api("seekTo",s);					
				}
			break;
		}
	}
}


var exitFullscreen = function() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}


var checkfullscreenEnabled = function() {
   try{
	    // FF provides nice flag, maybe others will add support for this later on?
	    if(window['fullScreen'] !== undefined) {
	      return window.fullScreen;
	    }
	    // 5px height margin, just in case (needed by e.g. IE)
	    var heightMargin = 5;
	    if(jQuery.browser.webkit && /Apple Computer/.test(navigator.vendor)) {
	      // Safari in full screen mode shows the navigation bar, 
	      // which is 40px  
	      heightMargin = 42;
	    }
	    return screen.width == window.innerWidth &&
	        Math.abs(screen.height - window.innerHeight) < heightMargin;
	  } catch(e) {

	  }
  }
/////////////////////////////////////////	HTML5 VIDEOS 	///////////////////////////////////////////	

var htmlvideoevents = function(_nc,opt,startnow) {



	if (_ISM && _nc.data('disablevideoonmobile')==1) return false;			
	var tag = _nc.data('audio')=="html5" ? "audio" : "video",
		jvideo = _nc.find(tag),
		video = jvideo[0],
		html5vid = jvideo.parent(),
		loop = _nc.data('videoloop'),
		pforv = loop != "loopandnoslidestop";

	loop = loop =="loop" ||  loop =="loopandnoslidestop";

	html5vid.data('metaloaded',1);
	// FIRST TIME LOADED THE HTML5 VIDEO

	if (_nc.data('bgvideo')==1 && (_nc.data('videoloop')==="none" || _nc.data('videoloop')===false)) 		
		pforv = false;
	
	
								
	
	//PLAY, STOP VIDEO ON CLICK OF PLAY, POSTER ELEMENTS
	if (jvideo.attr('control') == undefined ) {
		if (_nc.find('.tp-video-play-button').length==0 && !_ISM)
			_nc.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>');
		_nc.find('video, .tp-poster, .tp-video-play-button').click(function() {
			if (_nc.hasClass("videoisplaying"))
				video.pause();
			else
				video.play();
		})
	}

	// PRESET FULLCOVER VIDEOS ON DEMAND
	if (_nc.data('forcecover')==1 || _nc.hasClass('fullscreenvideo') || _nc.data('bgvideo')==1)  {
		if (_nc.data('forcecover')==1 || _nc.data('bgvideo')==1) {
			html5vid.addClass("fullcoveredvideo");	
			var asprat = _nc.data('aspectratio') || "4:3";				
			_R.prepareCoveredVideo(asprat,opt,_nc);
		}
		else
			html5vid.addClass("fullscreenvideo");				
	}
	

	// FIND CONTROL BUTTONS IN VIDEO, AND ADD EVENT LISTENERS ON THEM
	var playButton = _nc.find('.tp-vid-play-pause')[0],
		muteButton = _nc.find('.tp-vid-mute')[0],
		fullScreenButton = _nc.find('.tp-vid-full-screen')[0],
		seekBar = _nc.find('.tp-seek-bar')[0],
		volumeBar = _nc.find('.tp-volume-bar')[0];

	if (playButton!=undefined) {
		// Event listener for the play/pause button
		addEvent(playButton,"click", function() {
			if (video.paused == true) 
				video.play();
			else
				video.pause();
		});
	}

	if (muteButton!=undefined) {

		// Event listener for the mute button
		addEvent(muteButton,"click", function() {
			if (video.muted == false) {
				video.muted = true;
				muteButton.innerHTML = "Unmute";
			} else {
				video.muted = false;
				muteButton.innerHTML = "Mute";
			}
		});
	}

	if (fullScreenButton!=undefined) {

		// Event listener for the full-screen button
		if (fullScreenButton)
			addEvent(fullScreenButton,"click", function() {
				if (video.requestFullscreen) {
					video.requestFullscreen();
				} else if (video.mozRequestFullScreen) {
					video.mozRequestFullScreen(); // Firefox
				} else if (video.webkitRequestFullscreen) {
					video.webkitRequestFullscreen(); // Chrome and Safari
				}
			});

	}

	if (seekBar !=undefined) {

		// Event listener for the seek bar
		addEvent(seekBar,"change", function() {							
			var time = video.duration * (seekBar.value / 100);							
			video.currentTime = time;											

		});

		// Pause the video when the seek handle is being dragged
		addEvent(seekBar,"mousedown", function() {
			_nc.addClass("seekbardragged");
			video.pause();

		});

		// Play the video when the seek handle is dropped
		addEvent(seekBar,"mouseup", function() {
			_nc.removeClass("seekbardragged");
			video.play();

		});
	}

	addEvent(video,"canplaythrough", function() {
		_R.preLoadAudioDone(_nc,opt,"canplaythrough");
	});

	addEvent(video,"canplay", function() {
		_R.preLoadAudioDone(_nc,opt,"canplay");
	});

	addEvent(video,"progress", function() {
		_R.preLoadAudioDone(_nc,opt,"progress");
	});

	// Update the seek bar as the video plays
	addEvent(video,"timeupdate", function() {						
	
		var value = (100 / video.duration) * video.currentTime,
			et = getStartSec(_nc.data('videoendat')),
			cs  =video.currentTime;	
		if (seekBar != undefined)	
			seekBar.value = value;	
		
		if (et!=0 && et!=-1 && (Math.abs(et-cs) <=0.3 && et>cs) && _nc.data('nextslidecalled') != 1) {
			if (loop) {
				video.play();
				var s = getStartSec(_nc.data('videostartat'));
				if (s!=-1) video.currentTime = s;				
			} else {
				if (_nc.data('nextslideatend')==true) {		
					_nc.data('nextslideatend-triggered',1);		
					_nc.data('nextslidecalled',1);						
					opt.just_called_nextslide_at_htmltimer = true; 
					opt.c.revnext();						
					setTimeout(function() {
						opt.just_called_nextslide_at_htmltimer = false;
					},1000);
				}
				video.pause();
			}
		}
	});

	
	if (volumeBar != undefined) {		

		// Event listener for the volume bar
		addEvent(volumeBar,"change", function() {
			// Update the video volume
			video.volume = volumeBar.value;
		});
	}


	// VIDEO EVENT LISTENER FOR "PLAY"
	addEvent(video,"play",function() {

		
		_nc.data('nextslidecalled',0);
		
		var vol = _nc.data('volume');
		vol = vol!=undefined && vol!="mute" ?parseFloat(vol)/100 : vol;
		
		if (opt.globalmute===true) 
			video.muted = true;
		else
			video.muted = false;

		if (vol>1) vol = vol/100;
		if (vol=="mute")
			video.muted=true;
		else
		if (vol!=undefined) 
			video.volume = vol;



		_nc.addClass("videoisplaying");

		var tag = _nc.data('audio')=="html5" ? "audio" : "video";

		addVidtoList(_nc,opt);

		if (!pforv || tag=="audio") {				
			opt.videoplaying=false;
			if (tag!="audio")  opt.c.trigger('starttimer');
			opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(video,"html5",_nc.data()));
		} else {				
			opt.videoplaying=true;
			opt.c.trigger('stoptimer');
			opt.c.trigger('revolution.slide.onvideoplay',getVideoDatas(video,"html5",_nc.data()));				
		}

		punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});
		punchgs.TweenLite.to(_nc.find(tag),0.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});	

		var playButton = _nc.find('.tp-vid-play-pause')[0],
			muteButton = _nc.find('.tp-vid-mute')[0];
		if (playButton!=undefined)
			playButton.innerHTML = "Pause";
		if (muteButton!=undefined && video.muted)
			muteButton.innerHTML = "Unmute";

		_R.toggleState(_nc.data('videotoggledby'));
	});

	// VIDEO EVENT LISTENER FOR "PAUSE"
	addEvent(video,"pause",function() {
		
		var tag = _nc.data('audio')=="html5" ? "audio" : "video",
			fsmode = checkfullscreenEnabled();
		

		if (!fsmode && _nc.find('.tp-videoposter').length>0 && _nc.data('showcoveronpause')=="on" && !_nc.hasClass("seekbardragged")) {
			punchgs.TweenLite.to(_nc.find('.tp-videoposter'),0.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut});
			punchgs.TweenLite.to(_nc.find(tag),0.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut});
		} 
		
		_nc.removeClass("videoisplaying");
		opt.videoplaying=false;
		remVidfromList(_nc,opt);
		if (tag!="audio")  opt.c.trigger('starttimer');
		opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(video,"html5",_nc.data()));
		var playButton = _nc.find('.tp-vid-play-pause')[0];
		if (playButton!=undefined)
			playButton.innerHTML = "Play";		

		if (opt.currentLayerVideoIsPlaying==undefined || opt.currentLayerVideoIsPlaying.attr("id") == _nc.attr("id"))
			_R.unToggleState(_nc.data('videotoggledby'));
	});

	// VIDEO EVENT LISTENER FOR "END"
	
	addEvent(video,"ended",function() {		
		exitFullscreen();
		
		remVidfromList(_nc,opt);
		opt.videoplaying=false;
		remVidfromList(_nc,opt);
		if (tag!="audio") opt.c.trigger('starttimer');
		opt.c.trigger('revolution.slide.onvideostop',getVideoDatas(video,"html5",_nc.data()));


		if (_nc.data('nextslideatend')===true) {	
			
			if (!opt.just_called_nextslide_at_htmltimer==true) {
				_nc.data('nextslideatend-triggered',1);
				opt.c.revnext();
				opt.just_called_nextslide_at_htmltimer = true;
			}			
			setTimeout(function() {				
				opt.just_called_nextslide_at_htmltimer = false;
			},1500)
		}
		_nc.removeClass("videoisplaying");
		
		
	});		
}



var addVidtoList = function(_nc,opt) {

	if (opt.playingvideos == undefined) opt.playingvideos = new Array();		
	
	// STOP OTHER VIDEOS
	if (_nc.data('stopallvideos')) {		
		if (opt.playingvideos != undefined && opt.playingvideos.length>0) { 
			opt.lastplayedvideos = jQuery.extend(true,[],opt.playingvideos);
			jQuery.each(opt.playingvideos,function(i,_nc) {
				_R.stopVideo(_nc,opt);
			});
		}			
	}	
	opt.playingvideos.push(_nc);	
	opt.currentLayerVideoIsPlaying = _nc;		
	
}


var remVidfromList = function(_nc,opt) {			
	if (opt.playingvideos != undefined && jQuery.inArray(_nc,opt.playingvideos)>=0)
		opt.playingvideos.splice(jQuery.inArray(_nc,opt.playingvideos),1);		
}





	

})(jQuery);;var live_equalizer;
(function ($) {
    var observer_options = {
        subtree: true,
        childList: true,
        // Listening for style attribute changes results in not being able to scroll to the very end in some cases.
        // See: https://github.com/syslabcom/scrum/issues/130
        //attributes: true,
        //attributeFilter: ["style"],
    };

    live_equalizer = function (container_selector, item_selector) {
        var listings = document.querySelectorAll(container_selector);
        Array.prototype.forEach.call(listings, function (listing) {
            var timeout = null;
            var $listing = $(listing);
            var observer;

            function equalizer() {
                clearTimeout(timeout); // make sure, this isn't called too often.
                timeout = setTimeout(function () {
                    observer.disconnect(); // need to disconnect because equalize is changing style attributes.
                    $listing.equalize({
                        children: item_selector,
                        equalize: "height",
                        reset: true,
                    });
                    observer.observe($listing[0], observer_options);
                    console.debug("equalized");
                }, 200);
            }

            observer = new MutationObserver(equalizer);
            observer.observe(listing, observer_options);

            $(window).resize(function () {
                equalizer();
            });
            // Initial equalization
            equalizer();
        });
    };

    function stickyNav(e) {
        var navContainer = document.getElementById('global-navigation')
        var navTop = navContainer.getBoundingClientRect().top;
        var navBar = document.querySelector('.header-nav-wrapper');
        if (navTop < 0){
            navBar.classList.add('is-fixed');
        } else if (navTop > 0){
            navBar.classList.remove('is-fixed');
        }
    }
    window.addEventListener('scroll', stickyNav);

})(jQuery);
