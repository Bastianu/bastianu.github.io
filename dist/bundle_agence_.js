/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/agence.js":
/*!**************************!*\
  !*** ./src/js/agence.js ***!
  \**************************/
/***/ (() => {

eval("// import \"./../css/style.scss\";\n\n// import { gsap } from \"gsap\";\n// import { ScrollTrigger } from \"gsap/ScrollTrigger\";\n// import {\n//   _scrollTop,\n//   countUp,\n//   initYearSpans,\n//   _updateHeaderColor,\n// } from \"./utils\";\n// import * as three from \"./../js/three/initSceneEquipe\";\n\n// gsap.registerPlugin(ScrollTrigger);\n\n// import \"@splidejs/splide/css\";\n// import \"@splidejs/splide/css/skyblue\";\n// import \"@splidejs/splide/css/sea-green\";\n// import \"@splidejs/splide/css/core\";\n// import { Splide } from \"@splidejs/splide\";\n\n// if (/*firstTime */ /*true*/ false) {\n//   document.body.style[\"overflow-y\"] = \"hidden\";\n// }\n\n// window.onload = () => {\n//   let threeSection = document.getElementById(\"three\");\n//   let threeScrollContainer = document.getElementById(\"threeobj\");\n\n//   requestAnimationFrame(() => {\n//     three.initScene(threeSection, threeScrollContainer);\n//   });\n\n// /* */\n// /*bouton retour top*/\n//   let backToTop = document.getElementById(\"backToTop\");\n//   backToTop.addEventListener(\"click\", _scrollTop);\n\n//   let tl2 = gsap.timeline({\n//     scrollTrigger: {\n//       trigger: \"#backToTopanchor\",\n//       start: \"center center\",\n//       endTrigger: \"footer\",\n//       end: \"top bottom\",\n//       toggleActions: \"play none none reverse\",\n//       snap: {\n//         snapTo: \"labels\", // snap to the closest label in the timeline\n//         duration: { min: 0.5, max: 0.01 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)\n//         // ease: \"power1.inOut\", // the ease of the snap animation (\"power3\" by default)\n//       },\n//     },\n//   });\n//   tl2.from(\"#backToTop\", { scale: 0, opacity: 0 }).to(\"#backToTop\", {\n//     scale: 1,\n//     opacity: 1,\n//   });\n\n//   //section__to-contacts\n//   let tl3 = gsap.timeline({\n//     scrollTrigger: {\n//       trigger: \"#trait2\",\n//       start: \"bottom bottom\",\n//       endTrigger: \"#traitanchor2\",\n//       end: \"top top\",\n//       once: true,\n//       toggleActions: \"play none none reverse\",\n//       snap: {\n//         snapTo: \"labels\", // snap to the closest label in the timeline\n//         duration: { min: 0.5, max: 0.01 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)\n//         // ease: \"power1.inOut\", // the ease of the snap animation (\"power3\" by default)\n//       },\n//     },\n//   });\n//   tl3.from(\"#trait2\", { width: \"0%\" }).to(\"#trait2\", {\n//     width: \"100%\",\n//     delay: 0.5,\n//   });\n\n// /* */\n//   // intro\n//   window._scrollTop(0);\n//   _updateHeaderColor();\n\n// /* */\n// //hero section\n//   initYearSpans();\n\n//   let mainElement = document.getElementById(\"title_slide-up\");\n//   let lines = mainElement.querySelectorAll(\".line\");\n//   let body = document.body;\n//   var tl = gsap.timeline();\n//   let speed = 1.8;\n//   let delay = 0.1;\n//   let duration = 0.6;\n//   tl.add(function () {\n//     for (let i = 0; i < lines.length; i++) {\n//       let spans = lines[i].querySelectorAll(\".char\");\n//       for (let j = 0; j < spans.length; j++) {\n//         tl.fromTo(\n//           spans[j],\n//           { y: \"100%\", duration: duration, ease: \"Quart.easeInOut\" },\n//           { y: \"0%\", duration: duration, ease: \"Quart.easeInOut\" },\n//           \"<+=8%\"\n//         );\n//       }\n//     }\n\n//     let spans = document.querySelectorAll(\".year_ span\");\n//     for (let j = 0; j < spans.length; j++) {\n//       tl.fromTo(\n//         spans[j],\n//         { y: \"100%\", duration: duration, ease: \"Quart.easeInOut\" },\n//         { y: \"0%\", duration: duration, ease: \"Quart.easeInOut\" },\n//         \"<+=8%\"\n//       );\n//       if (j == 0) {\n//         tl.fromTo(\n//           document.querySelector(\".year_ .trait\"),\n//           { width: \"0%\", ease: \"Quart.easeInOut\" },\n//           { width: \"100%\", duration: duration * 3, ease: \"Quart.easeInOut\" },\n//           \"<\"\n//         );\n//       }\n//     }\n//   }, \"+=0\");\n//   tl.delay(delay);\n//   tl.eventCallback(\"onComplete\", () => {\n//     countUp(1996);\n//     gsap.to(\".section__intro-agence\", {\n//       y: \"-100%\",\n//       duration: 1,\n//       delay: 2.5,\n//       ease: \"Quart.easeInOut\",\n//       onComplete: () => {\n//         body.style[\"overflow-y\"] = \"\";\n//       },\n//     });\n//     body.style[\"overflow-y\"] = \"\";\n//   });\n\n// //mouse glow\n//   const blob = document.getElementById(\"blob1\");\n//   let containerRect;\n\n//   window.onpointermove = (event) => {\n//     const { clientX, clientY } = event;\n//     // console.log(event)\n//     containerRect = blob.parentElement.getBoundingClientRect();\n\n//     blob.animate(\n//       {\n//         left: `${clientX}px`,\n//         top: `${clientY - containerRect.top}px`,\n//       },\n//       { duration: 3000, fill: \"forwards\" }\n//     );\n//   };\n\n// //anim ligne à puces\n//   let tl4 = gsap.timeline({\n//     scrollTrigger: {\n//       trigger: \"#mask2\",\n//       start: \"100%-=100px 100%+=100px\",\n//       endTrigger: \".section__locaux-3d\",\n//       end: \"top bottom\",\n//       // scrub: true,\n//       // end: \"bottom 120%+=100px\",\n//       // once: true,\n//     },\n//   });\n//   tl4.addLabel(\"1\")\n//   .from(\"#mask2\", { width: \"100%\", })\n//   .to(\"#mask2\", {\n//     width: \"0%\",\n//   }, \">\");\n//   tl4.fromTo(\"#desc1\", { opacity: 0}, { opacity: 1 }, \">\")\n//   tl4.fromTo(\"#desc2\", { opacity: 0}, { opacity: 1 }, \">\")\n//   tl4.fromTo(\"#desc3\", { opacity: 0}, { opacity: 1 }, \">\")\n//   tl4.fromTo(\"#desc4\", { opacity: 0}, { opacity: 1 }, \">\")\n\n//   tl4.eventCallback(\"onComplete\", () => {\n//     gsap.to('#blob1', {\n//       opacity: 1\n//     })\n//   });\n\n//   let tl5 = gsap.timeline({\n//     scrollTrigger: {\n//       trigger: \"#mask3\",\n//       start: \"0%+=200px 100%+=100px\",\n//       endTrigger: \".section__locaux-3d\",\n//       end: \"0%+200px bottom\",\n//       scrub: true,\n//       onToggle: (self) => console.log(\"toggled, isActive:\", self.isActive),\n//     },\n//   });\n//   tl5.addLabel(\"1\")\n//   .from(\"#mask3\", { height: \"100%\", })\n//   .to(\"#mask3\", {\n//     height: \"0%\",\n//   }, \">\");\n// };\n\n// //splide js \n// document.addEventListener(\"DOMContentLoaded\", function () {\n//   new Splide(\"#image-carousel\", {\n//     perPage: 3,\n//     breakpoints: {\n//       1450: {\n//         perPage: 2,\n//       },\n//       1050: {\n//         perPage: 1,\n//       },\n//     },\n//     classes: {\n//       arrows: \"splide__arrows\",\n//       arrow: \"splide__arrow\",\n//       prev: \"splide__arrow--prev arrowprev\",\n//       next: \"splide__arrow--next arrownext\",\n//     },\n//   }).mount();\n\n//   new Splide(\"#image-carousel__discover\", {\n//     // perPage : 3,\n//     // breakpoints: {\n//     //   1700: {\n//     //     perPage: 2,\n//     //   },\n//     //   1250: {\n//     //     perPage: 1,\n//     //   },\n//     // },\n//     gap: 46,\n//     autoWidth: true,\n//     classes: {\n//       arrows: \"splide__arrows\",\n//       arrow: \"splide__arrow\",\n//       prev: \"splide__arrow--prev arrowprev\",\n//       next: \"splide__arrow--next arrownext\",\n//     },\n//   }).mount();\n// });\n// */\n\n//# sourceURL=webpack://site-arobase/./src/js/agence.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/agence.js"]();
/******/ 	
/******/ })()
;