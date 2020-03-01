(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{138:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return b})),i.d(t,"rightToc",(function(){return u})),i.d(t,"default",(function(){return p}));var a=i(1),l=i(9),n=(i(0),i(148)),r={id:"plan2",title:"Plan 2"},b={id:"plan2",title:"Plan 2",description:"## Introduction",source:"@site/manuscript/plan2.md",permalink:"/thesis/manuscript/plan2",editUrl:"https://github.com/pierrenodet/thesis/edit/master/manuscript/plan2.md",sidebar:"someSidebar",previous:{title:"Plan 1",permalink:"/thesis/manuscript/plan1"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Right Proxy",id:"right-proxy",children:[{value:"Biquality Data",id:"biquality-data",children:[]},{value:"Setup Plan",id:"setup-plan",children:[]},{value:"RLL",id:"rll",children:[]},{value:"SLL",id:"sll",children:[]},{value:"Setup Tree",id:"setup-tree",children:[]},{value:"Which algorithm to choose ?",id:"which-algorithm-to-choose-",children:[]}]},{value:"Wrong Proxy",id:"wrong-proxy",children:[{value:"Transfer Learning",id:"transfer-learning",children:[]},{value:"Automatic Labelling / Higher Supervision",id:"automatic-labelling--higher-supervision",children:[]},{value:"Multi Instance Learning",id:"multi-instance-learning",children:[]},{value:"Setup Tree",id:"setup-tree-1",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],c={rightToc:u},o="wrapper";function p(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(n.b)(o,Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Supervised Learning is good but sometimes we don't have labels for that. And Yan said in AAAI 2020 that it's hyped so let's do a thesis on this.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Definition of what's a weak supervision :"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"quantity of labels"),Object(n.b)("li",{parentName:"ul"},"quality of labels"),Object(n.b)("li",{parentName:"ul"},"adaptability of labels"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Vocabulary :"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"proxy")))),Object(n.b)("h2",{id:"right-proxy"},"Right Proxy"),Object(n.b)("h3",{id:"biquality-data"},"Biquality Data"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"define (Dt, Du, p, q)"),Object(n.b)("li",{parentName:"ul"},"Strong ( \u2200q,p=1 || \u2200p,q=1 )"),Object(n.b)("li",{parentName:"ul"},"Unsupervised ( p=q=0 )"),Object(n.b)("li",{parentName:"ul"},"SSL ( \u2200p != 1 != 0, q=0 )"),Object(n.b)("li",{parentName:"ul"},"RLL ( \u2200q != 1 != 0, p=0 ) Robust Label Learning")),Object(n.b)("h3",{id:"setup-plan"},"Setup Plan"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"le carr\xe9")),Object(n.b)("h3",{id:"rll"},"RLL"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"definition"),Object(n.b)("li",{parentName:"ul"},"differences between MCAR, MCD, MAR")),Object(n.b)("h3",{id:"sll"},"SLL"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"definition"),Object(n.b)("li",{parentName:"ul"},"AL : p -> 0 and oracle"),Object(n.b)("li",{parentName:"ul"},"PNU : p-> 1"),Object(n.b)("li",{parentName:"ul"},"PU somewhat different (ref to RLL)"),Object(n.b)("li",{parentName:"ul"},"MCAR MCD and MAR also apply to PNU")),Object(n.b)("h3",{id:"setup-tree"},"Setup Tree"),Object(n.b)("h3",{id:"which-algorithm-to-choose-"},"Which algorithm to choose ?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"schema with |L| as axis with algorithm families.")),Object(n.b)("h2",{id:"wrong-proxy"},"Wrong Proxy"),Object(n.b)("h3",{id:"transfer-learning"},"Transfer Learning"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Source Dataset = Untrusted Dataset / Target = Trusted"),Object(n.b)("li",{parentName:"ul"},"Domain Adaptation : Only source labels"),Object(n.b)("li",{parentName:"ul"},"Multi Task : Source and Target labels -> Linkable with RLL thanks to SOSELETO (ICLR 2019)")),Object(n.b)("h3",{id:"automatic-labelling--higher-supervision"},"Automatic Labelling / Higher Supervision"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Snorkell"),Object(n.b)("li",{parentName:"ul"},"Snuba")),Object(n.b)("h3",{id:"multi-instance-learning"},"Multi Instance Learning"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Just take what's Zhou did")),Object(n.b)("h3",{id:"setup-tree-1"},"Setup Tree"),Object(n.b)("h2",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"Full Setup Tree"))}p.isMDXComponent=!0}}]);