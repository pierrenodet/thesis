(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{107:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mwnet-1161c0a8f3032e93b9bdfbbf809277d4.png"},128:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mwnet-loss-71a614ecfcb00d5a9c12d250f29de667.png"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(94)),o={title:"Meta-Weight-Net: Learning an Explicit Mapping For Sample Weighting (MWNet)",tags:["reading-notes","meta-learning","importance-reweighting"]},l={permalink:"/notes/2021/02/24/mwnet",editUrl:"https://github.com/pierrenodet/notes/edit/master/notes/2021-02-24-mwnet.md",source:"@site/notes/2021-02-24-mwnet.md",description:"MWNet",date:"2021-02-24T00:00:00.000Z",tags:[{label:"reading-notes",permalink:"/notes/tags/reading-notes"},{label:"meta-learning",permalink:"/notes/tags/meta-learning"},{label:"importance-reweighting",permalink:"/notes/tags/importance-reweighting"}],title:"Meta-Weight-Net: Learning an Explicit Mapping For Sample Weighting (MWNet)",readingTime:2.595,truncated:!0,prevItem:{title:"Co-teaching: Robust Training of Deep Neural Networks with Extremely Noisy Labels (Co-teaching)",permalink:"/notes/2021/02/26/coteaching"},nextItem:{title:"Meta Label Correction for Noisy Label Learning (MLC)",permalink:"/notes/2021/02/19/mlc"}},s=[{value:"Assets",id:"assets",children:[{value:"Strengths",id:"strengths",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]}]},{value:"Novelty",id:"novelty",children:[]},{value:"Significance",id:"significance",children:[]},{value:"Soudness",id:"soudness",children:[]},{value:"Evaluation",id:"evaluation",children:[]},{value:"How can I use/enhance the paper ?",id:"how-can-i-useenhance-the-paper-",children:[]},{value:"What did I learn from reading this paper ?",id:"what-did-i-learn-from-reading-this-paper-",children:[]},{value:"New paper to read/Interesting Citations",id:"new-paper-to-readinteresting-citations",children:[]},{value:"How I am going to use this paper ?",id:"how-i-am-going-to-use-this-paper-",children:[]},{value:"Bibtex",id:"bibtex",children:[]}],c={toc:s};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{align:"center"},Object(r.b)("p",null,Object(r.b)("img",{alt:"MWNet",src:n(107).default}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"code")," : ",Object(r.b)("a",{parentName:"li",href:"https://github.com/xjtushujun/meta-weight-net"},"https://github.com/xjtushujun/meta-weight-net")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pdf")," : ",Object(r.b)("a",{parentName:"li",href:"https://papers.nips.cc/paper/2019/file/e58cc5ca94270acaceed13bc82dfedf7-Paper.pdf"},"https://papers.nips.cc/paper/2019/file/e58cc5ca94270acaceed13bc82dfedf7-Paper.pdf"))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"MWNet is an actual biquality learning algorithm (uses both trusted and untrusted data)."),Object(r.b)("li",{parentName:"ol"},"Meta Learning algorithm to reweight untrusted samples by learning a reweighted loss function (weighting function with sample loss as an input and a reweight sample loss as the output)."),Object(r.b)("li",{parentName:"ol"},"The meta model (an MLP) estimate the reweighting function while the main model learned with the reweighted function."),Object(r.b)("li",{parentName:"ol"},"Both models are jointly trained by solving bilevel optimization. The meta model is learned by how much the main model performs on trusted labels. The main model is learned by how much it performs on the loss reweighted by the meta model."),Object(r.b)("li",{parentName:"ol"},"Theoritical proofs on convergence of the algorithm."),Object(r.b)("li",{parentName:"ol"},"Extensive experiments against a lot of State-of-the-Art competitors")),Object(r.b)("h2",{id:"assets"},"Assets"),Object(r.b)("h3",{id:"strengths"},"Strengths"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Small meta model (MLP) completly interpretable, as it's a simple reweighting function (plottable on the loss domain)."),Object(r.b)("li",{parentName:"ol"},"Sound paper and some details on how and why the method works."),Object(r.b)("li",{parentName:"ol"},"No over the top algorithm complexity."),Object(r.b)("li",{parentName:"ol"},"Works well on assymetric noise (flip noise) while it's a reweighting method.")),Object(r.b)("h3",{id:"drawbacks"},"Drawbacks"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"No guarantees for the algorithm to work on Not At Random noise, as the meta model only uses loss values as an input to reweight it and no experiments have been conducted."),Object(r.b)("li",{parentName:"ol"},"Meta Learning algorithm (can be tricky/hard to implement for a wide spread of neural network architectures and optimizers). Thanksfully some library solve this problem (see higher for PyTorch).")),Object(r.b)("h2",{id:"novelty"},"Novelty"),Object(r.b)("p",null,"The approach is novel, it reuses the idea from L2RW (using meta learning to reweight samples), but instead of learning the weight of every samples, it smarty learns how to reweight the base loss."),Object(r.b)("p",{align:"center"},Object(r.b)("p",null,Object(r.b)("img",{alt:"MWNetLoss",src:n(128).default}))),Object(r.b)("h2",{id:"significance"},"Significance"),Object(r.b)("p",null,"Significant as a lot of results (detailed) show improvements against SotA, altough not that high against GLC a much simpler and sound algorithm. Theoritcal proofs are quite important for the field and have been reused by a lot of downstreams papers. "),Object(r.b)("h2",{id:"soudness"},"Soudness"),Object(r.b)("p",null,"Technically sound, proofs of main theorems proving convergence of the algorithm have been provided."),Object(r.b)("h2",{id:"evaluation"},"Evaluation"),Object(r.b)("p",null,"Sufficient evaluation of the algorithm have been provided."),Object(r.b)("h2",{id:"how-can-i-useenhance-the-paper-"},"How can I use/enhance the paper ?"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"I could enhance the paper by adapting it to Not At Random Noise.")),Object(r.b)("h2",{id:"what-did-i-learn-from-reading-this-paper-"},"What did I learn from reading this paper ?"),Object(r.b)("p",null,"Deeper understanding of meta learning (how to do bilevel optimization schemes)."),Object(r.b)("h2",{id:"new-paper-to-readinteresting-citations"},"New paper to read/Interesting Citations"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Joint optimization framework for learning with noisy labels (CPVR 2018)")),Object(r.b)("h2",{id:"how-i-am-going-to-use-this-paper-"},"How I am going to use this paper ?"),Object(r.b)("p",null,"To Implement"),Object(r.b)("h2",{id:"bibtex"},"Bibtex"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"@inproceedings{NEURIPS2019_e58cc5ca,\n author = {Shu, Jun and Xie, Qi and Yi, Lixuan and Zhao, Qian and Zhou, Sanping and Xu, Zongben and Meng, Deyu},\n booktitle = {Advances in Neural Information Processing Systems},\n editor = {H. Wallach and H. Larochelle and A. Beygelzimer and F. d\\textquotesingle Alch\\'{e}-Buc and E. Fox and R. Garnett},\n pages = {},\n publisher = {Curran Associates, Inc.},\n title = {Meta-Weight-Net: Learning an Explicit Mapping For Sample Weighting},\n url = {https://proceedings.neurips.cc/paper/2019/file/e58cc5ca94270acaceed13bc82dfedf7-Paper.pdf},\n volume = {32},\n year = {2019}\n}\n")))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(o,".").concat(h)]||d[h]||b[h]||r;return n?i.a.createElement(u,l(l({ref:t},c),{},{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);