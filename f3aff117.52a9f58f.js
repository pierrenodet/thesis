(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{113:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/coteaching-8a41dcede948608101271068a30bcbdc.png"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(98)),i={title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)",tags:["reading-notes","instance-selection","collaborative-learning"]},c={permalink:"/notes/2021/02/26/coteaching",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2021-02-26-coteaching.md",source:"@site/notes/2021-02-26-coteaching.md",description:"Co-teaching",date:"2021-02-26T00:00:00.000Z",tags:[{label:"reading-notes",permalink:"/notes/tags/reading-notes"},{label:"instance-selection",permalink:"/notes/tags/instance-selection"},{label:"collaborative-learning",permalink:"/notes/tags/collaborative-learning"}],title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)",readingTime:2.385,truncated:!0,prevItem:{title:"MentorNet: Learning Data-Driven Curriculum for Very Deep Neural Networks on Corrupted Labels (MentorNet)",permalink:"/notes/2021/03/01/mentornet"},nextItem:{title:"Meta-Weight-Net: Learning an Explicit Mapping For Sample Weighting (MWNet)",permalink:"/notes/2021/02/24/mwnet"}},l=[{value:"Summary",id:"summary",children:[]}],s={toc:l};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",{align:"center"},Object(o.b)("p",null,Object(o.b)("img",{alt:"Co-teaching",src:n(113).default}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"code")," : ",Object(o.b)("a",{parentName:"li",href:"https://github.com/bhanML/Co-teaching"},"https://github.com/bhanML/Co-teaching")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"pdf")," : ",Object(o.b)("a",{parentName:"li",href:"https://arxiv.org/pdf/1804.06872.pdf"},"https://arxiv.org/pdf/1804.06872.pdf"))),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Collaborative algorithm between two networks to learn on untrusted data only."),Object(o.b)("li",{parentName:"ol"},"Each round, loss of each network is computed on it's own minibatch. The samples with the smallest loss are considered the most informative and are given to the other network to learn (link to curriculum learning)"),Object(o.b)("li",{parentName:"ol"},"Leverage memorization effect of deep neural networks (first learn clean and easy patterns then overfit noise)."),Object(o.b)("li",{parentName:"ol"},"Introduction of a dynamic size for the number of informative samples used (start high then reduce with number of epochs)")))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);