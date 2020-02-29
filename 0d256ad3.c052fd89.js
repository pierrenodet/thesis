(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{125:function(e,s,t){"use strict";t.r(s),t.d(s,"frontMatter",(function(){return r})),t.d(s,"metadata",(function(){return p})),t.d(s,"rightToc",(function(){return l})),t.d(s,"default",(function(){return d}));var n=t(1),i=t(9),a=(t(0),t(146)),r={title:"Zhou - A Brief Introduction to Weakly Supervised Learning"},p={permalink:"/thesis/notes/2019/09/27/zhou",source:"@site/notes/2019-09-27-zhou.md",description:"## Introduction",date:"2019-09-27T00:00:00.000Z",tags:[],title:"Zhou - A Brief Introduction to Weakly Supervised Learning",prevItem:{title:"Some proofs about statistical learning and label noise",permalink:"/thesis/notes/2020/01/11/proofs"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"L'apprentissage incomplet",id:"lapprentissage-incomplet",children:[{value:"L'apprentissage actif",id:"lapprentissage-actif",children:[]},{value:"L'apprentissage semi-supervis\xe9",id:"lapprentissage-semi-supervis\xe9",children:[]}]},{value:"L'apprentissage inexact",id:"lapprentissage-inexact",children:[]},{value:"L'apprentissage impr\xe9cis",id:"lapprentissage-impr\xe9cis",children:[]}],u={rightToc:l},o="wrapper";function d(e){var s=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(o,Object(n.a)({},u,t,{components:s,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Cet article est une survey sur l'apprentissage faiblement supervis\xe9."),Object(a.b)("p",null,"Trois types d'apprentissage faiblement supervis\xe9s sont d\xe9crits :"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"L'apprentissage supervis\xe9 incomplet"),Object(a.b)("li",{parentName:"ol"},"L'apprentissage supervis\xe9 inexact"),Object(a.b)("li",{parentName:"ol"},"L'apprentissage supervis\xe9 impr\xe9cis")),Object(a.b)("h2",{id:"lapprentissage-incomplet"},"L'apprentissage incomplet"),Object(a.b)("p",null,"L'apprentissage incomplet correspond au cas o\xf9 seulement une partie des donn\xe9es d'apprentissage sont lab\xe9lis\xe9es."),Object(a.b)("p",null,"Il peut se d\xe9couper en deux sous cat\xe9gories d'apprentissage si un oracle est disponible pour demander des \xe9tiquettes suppl\xe9mentaires au cours de la tache d'apprentissage."),Object(a.b)("p",null,"Si l'oracle est disponible, alors on parlera plus d'apprentissage actif o\xf9 l'objectif sera d'optimiser le nombre de requ\xeate faite \xe0 l'expert tout en atteignant la meilleur pr\xe9cision possible."),Object(a.b)("p",null,"S'il ne l'est pas, alors plusieurs possibilit\xe9s s'offre \xe0 nous. L'apprentissage semi-supervis\xe9 essaiera d'utiliser le plus possible les donn\xe9es non lab\xe9lis\xe9es pour am\xe9liorer les performances du mod\xe8le."),Object(a.b)("h3",{id:"lapprentissage-actif"},"L'apprentissage actif"),Object(a.b)("p",null,"L'apprentissage supervis\xe9 classique est dit passif car les \xe9tiquettes sont donn\xe9es passivement \xe0 l'algorithme d'apprentissage au avant l'apprentissage. Avec l'apprentissage actif, l'algorithm va lui m\xeame demander \xe0 un oracle les \xe9tiquettes des individus qui vont lui paraitre le plus important selon un crit\xe8re."),Object(a.b)("p",null,"Il existe principalement deux types de crit\xe8res, informatif et representatif."),Object(a.b)("p",null,"Les crti\xe8res informatifs choissisent les individus qui vont le mieux r\xe9duire l'incertitude du mod\xe8le, mais ceux-ci sont tr\xe8s d\xe9pendants des premiers individus misent \xe0 disposition."),Object(a.b)("p",null,"Les crit\xe8res repr\xe9sentatifs prennent les individus qui am\xe9liore le mieux la r\xe9prensatation des donn\xe9es que se fait l'algorithme."),Object(a.b)("p",null,"Les crit\xe8res informatifs recherchent l'exploitation et les crit\xe8res repr\xe9sentatifs visent l'exploration."),Object(a.b)("p",null,"Une piste d'am\xe9lioration de l'apprentissage actif serait de concevoir des strat\xe9gies qui sont capables de s'adapter en fonction des donn\xe9es \xe0 choisir \xe0 chaque \xe9tape d'explorer ou d'exploiter les donn\xe9es."),Object(a.b)("h3",{id:"lapprentissage-semi-supervis\xe9"},"L'apprentissage semi-supervis\xe9"),Object(a.b)("p",null,"L'apprentissage semi-supervis\xe9 en plus de l'apprentissage supervis\xe9 utilise les donn\xe9es non \xe9tiquet\xe9es du dataset d'apprentissage pour par example estimer la distribution des donn\xe9es."),Object(a.b)("p",null,"En apprentissage semi-supervis\xe9, deux hypoth\xe8ses sont souvent pos\xe9es. La premi\xe8re suppose que les donn\xe9es forment naturellement des clusters, o\xf9 les individus d'un m\xeame cluster poss\xe8dent la m\xeame \xe9tiquette (hypoth\xe8se de cluster). La seconde suppose que deux individus proches poss\xe8dent des pr\xe9dictions proches (hypoth\xe8se de manifold)."),Object(a.b)("p",null,"Il y a quatres grandes cat\xe9gories de m\xe9thodes semi-supervis\xe9 :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Les m\xe9thodes g\xe9n\xe9ratives"),Object(a.b)("li",{parentName:"ul"},"Les m\xe9thodes bas\xe9es sur des graphes"),Object(a.b)("li",{parentName:"ul"},"Les m\xe9thodes de s\xe9paration de faible densit\xe9"),Object(a.b)("li",{parentName:"ul"},"Les m\xe9thodes bas\xe9es sur des d\xe9sacords.")),Object(a.b)("h4",{id:"m\xe9thodes-g\xe9n\xe9ratives"},"M\xe9thodes g\xe9n\xe9ratives"),Object(a.b)("p",null,"Les m\xe9thodes g\xe9n\xe9ratives supposent que les donn\xe9es \xe9tiquet\xe9es et non \xe9tiquet\xe9es sont issues du m\xeame processus g\xe9n\xe9ratif. Ainsi les donn\xe9es non \xe9tiquet\xe9es peuvent \xeatre trait\xe9es comme des valeurs manquantes des param\xe8tres du mod\xe8le g\xe9n\xe9ratif."),Object(a.b)("p",null,"La principale difficult\xe9 de cette m\xe9thode est d'avoir suffisament de connaisance m\xe9tier sur les donn\xe9es pour choisir la bonne famille de mod\xe8le g\xe9n\xe9ratif."),Object(a.b)("h4",{id:"m\xe9thodes-graphes"},"M\xe9thodes graphes"),Object(a.b)("p",null,"Les m\xe9thodes bas\xe9es sur des graphes ont pour but de construire un graphe o\xf9 les sommets sont les individus et les ar\xeates sont les relations entre eux construite par une mesure de similarit\xe9. Les labels sont propag\xe9s dans le graphe \xe0 partir de ceux disponibles via un crit\xe8re de propagation."),Object(a.b)("p",null,"Leurs principaux d\xe9fauts sont d'\xeatre tr\xe8s couteux en stockage et en CPU \xe0 cause de la repr\xe9sentation des donn\xe9es (tables vs graphes), transductifs car compliqu\xe9 de reconstruire le graphe pour de nouveaux individus, et tr\xe8s d\xe9pendants de la mesure de similarit\xe9 et du crit\xe8re de propagation."),Object(a.b)("h4",{id:"m\xe9thodes-s\xe9parateurs"},"M\xe9thodes s\xe9parateurs"),Object(a.b)("p",null,"Les S3VM (adaptation des SVM au semi-supervis\xe9) prennent en compte les donn\xe9es non \xe9tiquet\xe9es pour choisir un meilleur s\xe9parateur passant par les r\xe9gions les moins denses."),Object(a.b)("p",null,'Ici les donn\xe9es non \xe9tiquet\xe9es sont prises en compte en mettant une "fausse" \xe9tiquette, mais cela rend le probl\xe8me d\'optimisation plus complexe.'),Object(a.b)("h4",{id:"m\xe9thodes-d\xe9sacords"},"M\xe9thodes d\xe9sacords"),Object(a.b)("p",null,"Les m\xe9thodes bas\xe9es sur des d\xe9sacords utilisent la coop\xe9ration entre plusieurs mod\xe8les."),Object(a.b)("p",null,'La m\xe9thode la plus connue est le co-training. Elle consiste \xe0 entra\xeener plusieurs classifieurs (souvent deux), chacun bas\xe9 sur une vue du corpus, puis \xe0 les am\xe9liorer entre eux \xe0 l\u2019aide d\u2019une masse importante de donn\xe9es non annot\xe9es. Les classifieurs plus \xe0 m\xeame de classer un exemple donn\xe9 jouant le r\xf4le de "professeurs" pour les autres.'),Object(a.b)("p",null,"Ces m\xe9thodes permettent naturellement d'allier apprentissage actif et apprentissage semi-supervis\xe9."),Object(a.b)("p",null,"En revanche, si les vues du corpus et donc les classifieurs sont d\xe9pendants entre eux, le co-training ne permettera pas d'am\xe9liorer les performances finales des mod\xe8les."),Object(a.b)("h4",{id:"variante-transductive"},"Variante transductive"),Object(a.b)("p",null,"Il existe une variante transductive de l'apprentissage semi-supervis\xe9 o\xf9 l'on ne cherche pas \xe0 g\xe9n\xe9raliser \xe0 d'autres donn\xe9es mais \xe0 \xeatre le plus performant sur un jeu de donn\xe9es d\xe9finit \xe0 l'avance."),Object(a.b)("p",null,"Cela peut s'appliquer \xe0 l'imputation de donn\xe9es manquantes en concevant un mod\xe8le \xe0 partir des donn\xe9es pr\xe9sentes et \xe0 une mesure de similarit\xe9 entre individus."),Object(a.b)("h2",{id:"lapprentissage-inexact"},"L'apprentissage inexact"),Object(a.b)("p",null,"L'apprentissage inexact correspond au cas o\xf9 la labelisation n'est pas faite au niveau de l'individu statistique mais \xe0 un autre niveau. Par exemple dans le cas du l'apprentissage multi-instance, c'est un groupe d'individu qui est \xe9tiquet\xe9, on sait si un sac contient un individu n\xe9gatif ou non."),Object(a.b)("h2",{id:"lapprentissage-impr\xe9cis"},"L'apprentissage impr\xe9cis"),Object(a.b)("p",null,"L'apprentissage impr\xe9cis d\xe9finit un environnement o\xf9 l'information que l'on re\xe7oit sur un individu puisse \xeatre fauss\xe9e."),Object(a.b)("p",null,"En effet pour certains probl\xe8mes d'apprentissage, on peut souhaiter une tr\xe8s grand nombre d'\xe9tiquettes en demandant celles-ci \xe0 une foule de personne. Cependant on peut s'exposer \xe0 des personnes qui se trompent par innatention ou manque de protocol d'\xe9tiquettages."))}d.isMDXComponent=!0}}]);