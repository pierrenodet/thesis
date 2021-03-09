(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{80:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return p})),t.d(a,"metadata",(function(){return r})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return i}));var n=t(3),s=t(7),m=(t(0),t(98)),p={title:"Flexible Biquality Learning with Mutual Information",tags:["brainstorming"]},r={permalink:"/notes/2020/02/29/mutual-information",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2020-02-29-mutual-information.md",source:"@site/notes/2020-02-29-mutual-information.md",description:'The concept of Biquality Data has been introduced in "Unifying Semi-Supervised and Robust Learning by Mixup" by Hataya and Nakayama where there is two sets of data, a trusted and an untrusted one.',date:"2020-02-29T00:00:00.000Z",tags:[{label:"brainstorming",permalink:"/notes/tags/brainstorming"}],title:"Flexible Biquality Learning with Mutual Information",readingTime:5.305,truncated:!0,prevItem:{title:"Meta Label Correction for Noisy Label Learning (MLC)",permalink:"/notes/2021/02/19/mlc"},nextItem:{title:"Importance Reweighting for Positive Unlabeled Learning",permalink:"/notes/2020/02/28/ir-pul"}},b=[],c={toc:b};function i(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(m.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("p",null,'The concept of Biquality Data has been introduced in "Unifying Semi-Supervised and Robust Learning by Mixup" by Hataya and Nakayama where there is two sets of data, a trusted and an untrusted one.'),Object(m.b)("p",null,"The trusted dataset (",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"D"),Object(m.b)("mi",{parentName:"msub"},"T"))),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"D_T")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.02778em"}},"D"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.02778em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.13889em"}},"T")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))))))),") contains labels ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"Y"),Object(m.b)("mi",{parentName:"msub"},"T"))),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Y_T")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.22222em"}},"Y"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.13889em"}},"T")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"}))))))))))," that represents the true concept (",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"Y"),Object(m.b)("mi",{parentName:"msub"},"T")),Object(m.b)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),Object(m.b)("mi",{parentName:"mrow"},"X")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Y_T|X")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.22222em"}},"Y"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.13889em"}},"T")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mord"},"\u2223"),Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.07847em"}},"X"))))),") to learn on the learning task. The untrusted dataset (",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"D"),Object(m.b)("mi",{parentName:"msub"},"U"))),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"D_U")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.02778em"}},"D"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.02778em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.10903em"}},"U")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))))))),") contains labels ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"Y"),Object(m.b)("mi",{parentName:"msub"},"U"))),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Y_U")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault",style:{marginRight:"0.22222em"}},"Y"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.32833099999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathdefault mtight",style:{marginRight:"0.10903em"}},"U")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"}))))))))))," that range from being uniformative (as in Unsupervised Learning) to being the same as the trusted dataset (as in Supervised Learning)."),Object(m.b)("p",null,"In order to represents where the untrusted labels lie in this range, we define the quality of the untrusted labels. In the previous paper, they used a ratio of Kullback-Leibler divergence. Without critising the chosen formula, they were unable in the paper to directly use this value in the learning process."))}i.isMDXComponent=!0},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return h}));var n=t(0),s=t.n(n);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=s.a.createContext({}),i=function(e){var a=s.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=i(e.components);return s.a.createElement(c.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},o=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,m=e.originalType,p=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),l=i(t),o=n,h=l["".concat(p,".").concat(o)]||l[o]||N[o]||m;return t?s.a.createElement(h,r(r({ref:a},c),{},{components:t})):s.a.createElement(h,r({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var m=t.length,p=new Array(m);p[0]=o;var r={};for(var b in a)hasOwnProperty.call(a,b)&&(r[b]=a[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,p[1]=r;for(var c=2;c<m;c++)p[c]=t[c];return s.a.createElement.apply(null,p)}return s.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"}}]);