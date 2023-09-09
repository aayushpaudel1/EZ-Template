"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4543],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={layout:"default",title:"Template 2.1.1",nav_order:3,has_children:!1,parent:"Releases"},p=void 0,c={unversionedId:"Releases/2.1.1",id:"Releases/2.1.1",title:"Template 2.1.1",description:"Table of contents",source:"@site/docs/Releases/2.1.1.md",sourceDirName:"Releases",slug:"/Releases/2.1.1",permalink:"/Releases/2.1.1",draft:!1,tags:[],version:"current",frontMatter:{layout:"default",title:"Template 2.1.1",nav_order:3,has_children:!1,parent:"Releases"},sidebar:"tutorialSidebar",previous:{title:"Template 2.1.0",permalink:"/Releases/2.1.0"}},s={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"EZ-Template 2.1.1 Release",id:"ez-template-211-release",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Download and Installation",id:"download-and-installation",level:2},{value:"Upgrade Existing Project",id:"upgrade-existing-project",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("p",null,"{: .no_toc .text-delta }"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"TOC\n{:toc}")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"ez-template-211-release"},"EZ-Template 2.1.1 Release"),(0,o.kt)("p",null,"Minor release that makes arcade control work.  "),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EZ-Robotics/EZ-Template/releases/tag/v2.1.1"},"release page")," for a changelog.  "),(0,o.kt)("h2",{id:"download-and-installation"},"Download and Installation"),(0,o.kt)("p",null,"1) Download the latest example project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EZ-Robotics/EZ-Template/releases/latest"},"here")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"Example Project.zip"),".  Extract the zip, and open it in PROS.",(0,o.kt)("br",{parentName:"p"}),"\n","2) In ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.cpp"),", configure drive and IMU ports to what they are on your robot.  Be sure to read the comments!",(0,o.kt)("br",{parentName:"p"}),"\n",'3) Configure your wheel size and cartridge.  Remember that 4" omni wheels are actually 4.125!',(0,o.kt)("br",{parentName:"p"}),"\n","4) In ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.cpp"),", at the bottom in ",(0,o.kt)("inlineCode",{parentName:"p"},"void opcontrol()"),", decide how you'd like to control your robot!  Any flavor of arcade or tank!",(0,o.kt)("br",{parentName:"p"}),"\n","5) Turn the robot on and use it in driver control.  Make sure the ports are correct and reversed correctly!",(0,o.kt)("br",{parentName:"p"}),"\n","6) To test the test autonomous modes, plug into a competition switch and select the autonomous mode on the brain screen by pressing the left and right buttons!  The current page will be the autonomous that runs.  For making new autonomous routines, check ",(0,o.kt)("inlineCode",{parentName:"p"},"src/autons.cpp")," for examples on how to use the drive functions.  "),(0,o.kt)("h2",{id:"upgrade-existing-project"},"Upgrade Existing Project"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: this only works for 2.0.0 and beyond.  You cannot upgrade from 1.X.X to 2.X.X."),(0,o.kt)("br",{parentName:"p"}),"\n","1) Download the most recent EZ-Template ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EZ-Robotics/EZ-Template/releases/latest"},"here"),".",(0,o.kt)("br",{parentName:"p"}),"\n","2) Move the file to your project.",(0,o.kt)("br",{parentName:"p"}),"\n","3) Open terminal or command prompt, and ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into your projects directory.",(0,o.kt)("br",{parentName:"p"}),"\n","4) Run this command from terminal ",(0,o.kt)("inlineCode",{parentName:"p"},"prosv5 c fetch EZ-Template@2.1.1.zip"),".",(0,o.kt)("br",{parentName:"p"}),"\n","5) Apply the library to the project ",(0,o.kt)("inlineCode",{parentName:"p"},"prosv5 c apply EZ-Template"),".",(0,o.kt)("br",{parentName:"p"}),"\n","6) Put ",(0,o.kt)("inlineCode",{parentName:"p"},'#include "EZ-Template/api.hpp"')," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"include/main.h"),"."))}d.isMDXComponent=!0}}]);