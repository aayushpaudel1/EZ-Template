"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7918],{7684:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(7294),l=a(6010),i=a(3791),s=a(8596),o=a(5281),c=a(9960),d=a(4996),m=a(5999);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(c.Z,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function f(e){var t=e.children,a=e.active,i=e.index,s=e.addMicrodata;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function p(){var e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(c.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},r.createElement(u,{className:v.breadcrumbHomeIcon})))}function h(){var e=(0,i.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,l.Z)(o.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(p,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(f,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(b,{href:t.href,isLast:n},t.label))})))):null}},1799:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(7294),r=a(6010),l=a(1944),i=a(7524),s=a(5281),o=a(49),c=a(3120),d=a(4364),m=a(5999);function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function v(e){var t=e.lastUpdatedBy;return n.createElement(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:s.k.common.lastUpdated},n.createElement(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(u,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(v,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var f=a(6114),p=a(1526),h="lastUpdated_vbeJ";function E(e){return n.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(p.Z,e)))}function g(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(f.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",h)},(a||l)&&n.createElement(b,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function L(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,c=t.tags,d=c.length>0,m=!!(a||l||o);return d||m?n.createElement("footer",{className:(0,r.Z)(s.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(E,{tags:c}),m&&n.createElement(g,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var N=a(9407),Z=a(6043),k=a(3743),C=a(7462),_=a(3366),H="tocCollapsibleButton_TO0P",x="tocCollapsibleButtonExpanded_MG3E",y=["collapsed"];function T(e){var t=e.collapsed,a=(0,_.Z)(e,y);return n.createElement("button",(0,C.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",H,!t&&x,a.className)}),n.createElement(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var U="tocCollapsible_ETCw",A="tocCollapsibleContent_vkbj",w="tocCollapsibleExpanded_sAul";function I(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,Z.u)({initialState:!0}),o=s.collapsed,c=s.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(U,!o&&w,a)},n.createElement(T,{collapsed:o,onClick:c}),n.createElement(Z.z,{lazy:!0,className:A,collapsed:o},n.createElement(k.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var M=a(2503),B=a(7684),O=a(3548),S="docItemContainer_Adtb",V="docItemCol_GujU",R="tocMobile_aoJ5";function D(e){var t,a=e.content,r=a.metadata,i=a.frontMatter,s=a.assets,o=i.keywords,c=r.description,d=r.title,m=null!=(t=s.image)?t:i.image;return n.createElement(l.d,{title:d,description:c,keywords:o,image:m})}function P(e){var t=e.content,a=t.metadata,l=t.frontMatter,m=l.hide_title,u=l.hide_table_of_contents,v=l.toc_min_heading_level,b=l.toc_max_heading_level,f=a.title,p=!m&&void 0===t.contentTitle,h=(0,i.i)(),E=!u&&t.toc&&t.toc.length>0,g=E&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!u&&V)},n.createElement(c.Z,null),n.createElement("div",{className:S},n.createElement("article",null,n.createElement(B.Z,null),n.createElement(d.Z,null),E&&n.createElement(I,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:b,className:(0,r.Z)(s.k.docs.docTocMobile,R)}),n.createElement("div",{className:(0,r.Z)(s.k.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(M.Z,{as:"h1"},f)),n.createElement(O.Z,null,n.createElement(t,null))),n.createElement(L,e)),n.createElement(o.Z,{previous:a.previous,next:a.next}))),g&&n.createElement("div",{className:"col col--3"},n.createElement(N.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:b,className:s.k.docs.docTocDesktop})))}function j(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(l.FG,{className:t},n.createElement(D,e),n.createElement(P,e))}},49:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),r=a(7294),l=a(5999),i=a(2244);function s(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(i.Z,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(i.Z,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),l=a(5999),i=a(4477),s=a(5281);function o(e){var t=e.className,a=(0,i.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(6010),l=a(2263),i=a(9960),s=a(5999),o=a(4104),c=a(373),d=a(5281),m=a(4477);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){var t,a=e.className,i=e.versionMetadata,s=(0,l.Z)().siteConfig.title,m=(0,o.gA)({failfast:!0}).pluginId,u=(0,c.J)(m).savePreferredVersionName,f=(0,o.Jo)(m),p=f.latestDocSuggestion,h=f.latestVersionSuggestion,E=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:h.label,to:E.path,onClick:function(){return u(h.name)}})))}function p(e){var t=e.className,a=(0,m.E)();return a.banner?n.createElement(f,{className:t,versionMetadata:a}):null}},9407:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),s=a(3743),o="tableOfContents_bqdL",c=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(3366),l=a(7294),i=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,i);a>=0?t[a].children.push(l):n.push(l)})),n}function o(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var c=a(6668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,l.useRef)(0),t=(0,c.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=m(s,{anchorTopOffset:a.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function b(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(b,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var f=l.memo(b),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,b=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,r.Z)(e,p),L=(0,c.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=E?E:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return o({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,l.useMemo)((function(){if(m&&b)return{linkClassName:m,linkActiveClassName:b,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,b,N,Z])),l.createElement(f,(0,n.Z)({toc:k,className:i,linkClassName:m},g))}}}]);