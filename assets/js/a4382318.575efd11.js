"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3886],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Active Brake",description:"How the motors will brake and stop unwanted motion."},c="**Active Brake**",u={unversionedId:"Tutorials/activebrake",id:"Tutorials/activebrake",title:"Active Brake",description:"How the motors will brake and stop unwanted motion.",source:"@site/docs/Tutorials/activebrake.md",sourceDirName:"Tutorials",slug:"/Tutorials/activebrake",permalink:"/Tutorials/activebrake",draft:!1,tags:[],version:"current",frontMatter:{title:"Active Brake",description:"How the motors will brake and stop unwanted motion."},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/category/tutorials"},next:{title:"Adding Autonomous Routines",permalink:"/Tutorials/autons"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling",id:"enabling",level:2},{value:"Disabling",id:"disabling",level:2}],d={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"active-brake"},(0,i.kt)("strong",{parentName:"h1"},"Active Brake")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"If you put the motors on brake type hold, a robot can still push the robot a bit, and when you let go of the joysticks the robot just locks in place. Active brake runs a P loop on the drive when you let go of the joysticks. By adjusting the kP, you adjust how hard the robot fights back. If you make it smaller, there will be a larger dead zone and you'll coast a little bit. Active brake vs brake type is personal preference."),(0,i.kt)("h2",{id:"enabling"},"Enabling"),(0,i.kt)("p",null,"To adjust the kP, in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main.cpp")," change ",(0,i.kt)("inlineCode",{parentName:"p"},"chassis.set_active_brake(0)")," to whatever you like! We suggest around ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1"),"."),(0,i.kt)("h2",{id:"disabling"},"Disabling"),(0,i.kt)("p",null,"To disable active brake, in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main.cpp")," make sure the kP is 0 with ",(0,i.kt)("inlineCode",{parentName:"p"},"chassis.set_active_brake(0)"),"."))}b.isMDXComponent=!0}}]);