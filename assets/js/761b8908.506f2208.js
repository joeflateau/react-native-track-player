"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[398],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,s=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(s,l(l({ref:t},k),{},{components:a})):n.createElement(s,l({ref:t},k))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3281:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={},p="Queue",d={unversionedId:"api/functions/queue",id:"api/functions/queue",title:"Queue",description:"add(tracks, insertBeforeIndex)",source:"@site/docs/api/functions/queue.md",sourceDirName:"api/functions",slug:"/api/functions/queue",permalink:"/docs/next/api/functions/queue",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/api/functions/queue.md",tags:[],version:"current",frontMatter:{},sidebar:"app",previous:{title:"Player",permalink:"/docs/next/api/functions/player"},next:{title:"Hooks",permalink:"/docs/next/api/hooks"}},k={},u=[{value:"<code>add(tracks, insertBeforeIndex)</code>",id:"addtracks-insertbeforeindex",level:2},{value:"<code>remove(tracks)</code>",id:"removetracks",level:2},{value:"<code>setQueue(tracks)</code>",id:"setqueuetracks",level:2},{value:"<code>load(track)</code>",id:"loadtrack",level:2},{value:"<code>skip(index, initialPosition)</code>",id:"skipindex-initialposition",level:2},{value:"<code>skipToNext(initialPosition)</code>",id:"skiptonextinitialposition",level:2},{value:"<code>skipToPrevious(initialPosition)</code>",id:"skiptopreviousinitialposition",level:2},{value:"<code>move(fromIndex, toIndex)</code>",id:"movefromindex-toindex",level:2},{value:"<code>reset()</code>",id:"reset",level:2},{value:"<code>getTrack(index)</code>",id:"gettrackindex",level:2},{value:"<code>getActiveTrack()</code>",id:"getactivetrack",level:2},{value:"<code>getActiveTrackIndex()</code>",id:"getactivetrackindex",level:2},{value:"<code>getQueue()</code>",id:"getqueue",level:2},{value:"<code>removeUpcomingTracks()</code>",id:"removeupcomingtracks",level:2},{value:"<code>updateMetadataForTrack(index, metadata)</code>",id:"updatemetadatafortrackindex-metadata",level:2},{value:"<code>setRepeatMode(mode)</code>",id:"setrepeatmodemode",level:2},{value:"<code>getRepeatMode()</code>",id:"getrepeatmode",level:2},{value:"\u26a0\ufe0f <code>getCurrentTrack()</code>",id:"\ufe0f-getcurrenttrack",level:2}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"queue"},"Queue"),(0,i.kt)("h2",{id:"addtracks-insertbeforeindex"},(0,i.kt)("inlineCode",{parentName:"h2"},"add(tracks, insertBeforeIndex)")),(0,i.kt)("p",null,"Adds one or more tracks to the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<number | void>")," - The promise resolves with the first\nadded track index. If no tracks were added it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tracks"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Track \\| Track[]")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/objects/track"},"Track")," objects that will be added")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"insertBeforeIndex"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The index of the track that will be located immediately after the inserted tracks. Set it to ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," to add it at the end of the queue")))),(0,i.kt)("h2",{id:"removetracks"},(0,i.kt)("inlineCode",{parentName:"h2"},"remove(tracks)")),(0,i.kt)("p",null,"Removes one or more tracks from the queue. If the current track is removed, the next track will activated. If the current track was the last track in the queue, the first track will be activated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tracks"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Track \\| Track[]")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/objects/track"},"Track")," objects that will be removed")))),(0,i.kt)("h2",{id:"setqueuetracks"},(0,i.kt)("inlineCode",{parentName:"h2"},"setQueue(tracks)")),(0,i.kt)("p",null,"Clears the current queue and adds the supplied tracks to the now empty queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tracks"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Track[]")),(0,i.kt)("td",{parentName:"tr",align:null},"An array of ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/objects/track"},"Track")," to replace the current queue with.")))),(0,i.kt)("h2",{id:"loadtrack"},(0,i.kt)("inlineCode",{parentName:"h2"},"load(track)")),(0,i.kt)("p",null,"Replaces the current track with the supplied track or creates a track when the queue is empty."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"track"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Track")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/objects/track"},"Track")," object that will be loaded")))),(0,i.kt)("h2",{id:"skipindex-initialposition"},(0,i.kt)("inlineCode",{parentName:"h2"},"skip(index, initialPosition)")),(0,i.kt)("p",null,"Skips to a track in the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The track index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialPosition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Optional.")," Sets the initial playback for the track you're skipping to.")))),(0,i.kt)("h2",{id:"skiptonextinitialposition"},(0,i.kt)("inlineCode",{parentName:"h2"},"skipToNext(initialPosition)")),(0,i.kt)("p",null,"Skips to the next track in the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialPosition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Optional.")," Sets the initial playback for the track you're skipping to.")))),(0,i.kt)("h2",{id:"skiptopreviousinitialposition"},(0,i.kt)("inlineCode",{parentName:"h2"},"skipToPrevious(initialPosition)")),(0,i.kt)("p",null,"Skips to the previous track in the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialPosition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Optional.")," Sets the initial playback for the track you're skipping to.")))),(0,i.kt)("h2",{id:"movefromindex-toindex"},(0,i.kt)("inlineCode",{parentName:"h2"},"move(fromIndex, toIndex)")),(0,i.kt)("p",null,"Moves a track from the specified index to another."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fromIndex"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The index of the track you'd like to move.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"toIndex"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The position you'd like to move the track to.")))),(0,i.kt)("h2",{id:"reset"},(0,i.kt)("inlineCode",{parentName:"h2"},"reset()")),(0,i.kt)("p",null,"Resets the player stopping the current track and clearing the queue."),(0,i.kt)("h2",{id:"gettrackindex"},(0,i.kt)("inlineCode",{parentName:"h2"},"getTrack(index)")),(0,i.kt)("p",null,"Gets a track object from the queue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<"),(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/objects/track"},"Track"),(0,i.kt)("inlineCode",{parentName:"p"},">")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The track index")))),(0,i.kt)("h2",{id:"getactivetrack"},(0,i.kt)("inlineCode",{parentName:"h2"},"getActiveTrack()")),(0,i.kt)("p",null,"Gets the active track object."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<"),(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/objects/track"},"Track"),(0,i.kt)("inlineCode",{parentName:"p"}," | undefined>")),(0,i.kt)("h2",{id:"getactivetrackindex"},(0,i.kt)("inlineCode",{parentName:"h2"},"getActiveTrackIndex()")),(0,i.kt)("p",null,"Gets the index of the current track, or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if no track loaded"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<number | undefined>")),(0,i.kt)("h2",{id:"getqueue"},(0,i.kt)("inlineCode",{parentName:"h2"},"getQueue()")),(0,i.kt)("p",null,"Gets the whole queue"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<"),(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/objects/track"},"Track[]"),(0,i.kt)("inlineCode",{parentName:"p"},">")),(0,i.kt)("h2",{id:"removeupcomingtracks"},(0,i.kt)("inlineCode",{parentName:"h2"},"removeUpcomingTracks()")),(0,i.kt)("p",null,"Clears any upcoming tracks from the queue."),(0,i.kt)("h2",{id:"updatemetadatafortrackindex-metadata"},(0,i.kt)("inlineCode",{parentName:"h2"},"updateMetadataForTrack(index, metadata)")),(0,i.kt)("p",null,"Updates the metadata of a track in the queue.\nIf the current track is updated, the notification and the Now Playing Center will be updated accordingly."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The track index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metadata"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},"A subset of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/objects/track"},"Track Object")," with only the ",(0,i.kt)("inlineCode",{parentName:"td"},"artwork"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"artist"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"album"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"description"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"genre"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"date"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"rating")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"duration")," properties.")))),(0,i.kt)("h2",{id:"setrepeatmodemode"},(0,i.kt)("inlineCode",{parentName:"h2"},"setRepeatMode(mode)")),(0,i.kt)("p",null,"Sets the repeat mode."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/constants/repeat-mode"},"Repeat Mode")),(0,i.kt)("td",{parentName:"tr",align:null},"The repeat mode")))),(0,i.kt)("h2",{id:"getrepeatmode"},(0,i.kt)("inlineCode",{parentName:"h2"},"getRepeatMode()")),(0,i.kt)("p",null,"Gets the repeat mode."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/constants/repeat-mode"},"Repeat Mode")),(0,i.kt)("h2",{id:"\ufe0f-getcurrenttrack"},"\u26a0\ufe0f ",(0,i.kt)("inlineCode",{parentName:"h2"},"getCurrentTrack()")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Deprecated:")," To get the active track index use\n",(0,i.kt)("a",{parentName:"p",href:"#getactivetrackindex"},(0,i.kt)("inlineCode",{parentName:"a"},"getActiveTrackIndex()"))," instead or use\n",(0,i.kt)("a",{parentName:"p",href:"#getactivetrack"},(0,i.kt)("inlineCode",{parentName:"a"},"getActiveTrack()"))," to get the active track object."),(0,i.kt)("p",null,"Gets the index of the current track, or null if no track loaded"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<number | null>")))}c.isMDXComponent=!0}}]);