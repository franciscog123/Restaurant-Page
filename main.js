/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/GitHub-Mark-Light-120px-plus.png":
/*!*****************************************************!*\
  !*** ./src/images/GitHub-Mark-Light-120px-plus.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/images/GitHub-Mark-Light-120px-plus.png?");

/***/ }),

/***/ "./src/images/map.jpg":
/*!****************************!*\
  !*** ./src/images/map.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/images/map.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about.js */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer.js */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n\n\n\n\n\n\"use strict\";\n\nlet container=document.querySelector(\"#content\"); //the main parent element all items rendered within\n\n//render initial homepage\nObject(_modules_header_js__WEBPACK_IMPORTED_MODULE_1__[\"renderNavBar\"])(container);\nObject(_modules_header_js__WEBPACK_IMPORTED_MODULE_1__[\"renderHeroImage\"])(container);\n_modules_about_js__WEBPACK_IMPORTED_MODULE_2__[\"renderAbout\"](container,false);\nObject(_modules_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"renderFooter\"])(container);\n\n\n//add event listeners to each navbar section so they display their corresponding sections\nlet homeAnchor = document.querySelector(\"#home\");\nhomeAnchor.addEventListener(\"click\",() => {\n    Object(_modules_contact__WEBPACK_IMPORTED_MODULE_4__[\"removeContact\"])();\n    Object(_modules_menu__WEBPACK_IMPORTED_MODULE_5__[\"removeMenu\"])();\n    _modules_about_js__WEBPACK_IMPORTED_MODULE_2__[\"renderAbout\"](container,true);\n});\n\nlet contactAnchor=document.querySelector(\"#contact\");\ncontactAnchor.addEventListener(\"click\",() => {\n    _modules_about_js__WEBPACK_IMPORTED_MODULE_2__[\"removeAbout\"]();\n    Object(_modules_menu__WEBPACK_IMPORTED_MODULE_5__[\"removeMenu\"])();\n    Object(_modules_contact__WEBPACK_IMPORTED_MODULE_4__[\"renderContact\"])(container,true)\n});\n\nlet menuAnchor=document.querySelector(\"#menu\");\nmenuAnchor.addEventListener(\"click\",() => {\n    _modules_about_js__WEBPACK_IMPORTED_MODULE_2__[\"removeAbout\"]();\n    Object(_modules_contact__WEBPACK_IMPORTED_MODULE_4__[\"removeContact\"])();\n    Object(_modules_menu__WEBPACK_IMPORTED_MODULE_5__[\"renderMenu\"])(container,true);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/*! exports provided: renderAbout, removeAbout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAbout\", function() { return renderAbout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAbout\", function() { return removeAbout; });\n\n\n/**\n * if parameter footerExists is true, renders about section before the footer.\n * If false, renders about section by adding it to the end of the container\n * @param {Element} divContainer the parent element to render the footer within \n * @param {boolean} footerExists represents whether a footer exists in the current DOM\n */\nfunction renderAbout(divContainer, footerExists)\n{\n    var elementExists=document.querySelector(\".homeText\");\n    \n    //if there's already an about section, don't generate it again\n    if(elementExists)\n    {\n        console.log(\"About section already exists\");\n    }\n    else\n    {\n        let div=document.createElement(\"div\");\n        div.classList.add(\"homeText\");\n\n        let p1=document.createElement(\"p\");\n        p1.textContent=\"Taqueria Guerrero is a great restaurant that has proudly served the community for thousands of years. We have the best food, a great atmosphere, and some really good beer!\";\n        div.appendChild(p1);\n\n        let p2=document.createElement(\"p\");\n        p2.textContent=\"Spicy jalapeno bacon ipsum dolor amet ham jerky tongue pork belly ball tip burgdoggen beef ribs strip steak tri-tip salami sausage pork cow. Pork chuck chicken ball tip rump landjaeger pancetta biltong ham ground round salami doner kielbasa kevin. Pork belly shankle boudin porchetta short loin, chuck drumstick tail pork spare ribs shank shoulder hamburger tenderloin. Bacon salami bresaola beef kevin biltong sirloin picanha tongue shoulder andouille.\";\n        div.appendChild(p2);\n\n        let p3=document.createElement(\"p\");\n        p3.textContent=\"Pastrami short ribs pork chop shankle corned beef turkey. Spare ribs andouille cow frankfurter pastrami ground round. Doner capicola cow bacon ham sausage, ball tip strip steak. Fatback kevin strip steak tenderloin brisket. Ham hock hamburger jerky beef ribs tail, picanha pancetta boudin. Andouille picanha alcatra corned beef, turducken bacon ham pork belly bresaola cow.\";\n        div.appendChild(p3);\n\n        let p4=document.createElement(\"p\");\n        p4.textContent=\"Tongue turducken leberkas shoulder sirloin. Short ribs porchetta rump pig bresaola. Bresaola landjaeger shoulder brisket strip steak, salami drumstick venison. Pork frankfurter pork chop tongue turducken, short loin pig ground round beef boudin.\";\n        div.appendChild(p4);\n\n        let p5=document.createElement(\"p\");\n        p5.textContent=\"T-bone porchetta ball tip beef ribs meatball. Jowl beef ribs brisket, spare ribs chicken prosciutto sausage pastrami ground round kielbasa jerky filet mignon tongue ham hock ribeye. Corned beef biltong ball tip ham filet mignon pork loin. Leberkas burgdoggen tri-tip kielbasa porchetta pork belly andouille jerky drumstick chuck frankfurter brisket. Salami turducken shoulder bresaola rump cow ham boudin capicola swine shank tongue turkey chuck sausage. Ball tip boudin short ribs, chicken filet mignon burgdoggen corned beef sirloin brisket.\";\n        div.appendChild(p5);\n\n        //if a footer already exists in the DOM, render about section before the footer, \n        //if footer doesn't exist, tack about section on to the end of the container\n        if(footerExists)\n        {\n            let footer=document.querySelector(\".footer\");\n            divContainer.insertBefore(div,footer);\n        }\n        else    \n            divContainer.appendChild(div);\n    }\n}\n\n/**\n * Removes About section if it exists.\n */\nfunction removeAbout()\n{\n    let about=document.querySelector(\".homeText\");\n    if(about)\n        about.remove();\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: renderContact, removeContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContact\", function() { return renderContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeContact\", function() { return removeContact; });\n/* harmony import */ var _images_map_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/map.jpg */ \"./src/images/map.jpg\");\n/* harmony import */ var _images_map_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_map_jpg__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * if parameter footerExists is true, renders contact section before the footer.\n * If false, renders contact section by adding it to the end of the container\n * @param {Element} divContainer the parent element to render the contact section within \n * @param {boolean} footerExists represents whether a footer exists in the current DOM\n */\nfunction renderContact (divContainer, footerExists)\n{\n    var elementExists=document.querySelector(\".contact-container\");\n    if(elementExists)\n        console.log(\"Contact section already exists\");\n    else\n    {\n        let contactContainer=document.createElement(\"div\");\n        contactContainer.classList.add(\"contact-container\");\n\n        let div=document.createElement(\"div\");\n        contactContainer.appendChild(div);\n\n        let h2=document.createElement(\"h2\");\n        h2.textContent=\"Contact Us\";\n        div.appendChild(h2);\n\n        let para=document.createElement(\"p\");\n        para.textContent=\"Come on down for a bite, or leave us a message:\";\n        div.appendChild(para);\n\n        let row=document.createElement(\"div\");\n        row.classList.add(\"row\");\n        contactContainer.appendChild(row);\n\n        let column1=document.createElement(\"div\");\n        column1.classList.add(\"column\");\n        row.appendChild(column1);\n\n        let img=document.createElement(\"img\");\n        img.src=_images_map_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;\n        img.style.width=\"100%\";\n        column1.appendChild(img);\n\n        let column2=document.createElement(\"div\");\n        column2.classList.add(\"column\");\n        row.appendChild(column2);\n\n        let form=document.createElement(\"form\");\n        form.action=\"#\";\n        column2.appendChild(form);\n\n        let label1=document.createElement(\"label\");\n        label1.htmlFor=\"fname\";\n        label1.textContent=\"First Name\";\n        form.appendChild(label1)\n\n        let input1=document.createElement(\"input\");\n        input1.type=\"text\";\n        input1.id=\"fname\";\n        input1.name=\"firstname\";\n        input1.placeholder=\"Your name...\"\n        input1.required=true;\n        form.appendChild(input1);\n\n        let label2=document.createElement(\"label\");\n        label2.htmlFor=\"lname\";\n        label2.textContent=\"Last Name\";\n        form.appendChild(label2)\n\n        let input2=document.createElement(\"input\");\n        input2.type=\"text\";\n        input2.id=\"lname\";\n        input2.name=\"lastname\";\n        input2.placeholder=\"Your last name...\"\n        input2.required=true;\n        form.appendChild(input2);\n\n        let label3=document.createElement(\"label\");\n        label3.htmlFor=\"email\";\n        label3.textContent=\"Email\";\n        form.appendChild(label3);\n\n        let input3=document.createElement(\"input\");\n        input3.type=\"email\";\n        input3.id=\"email\";\n        input3.name=\"email\";\n        input3.placeholder=\"email@address.com...\"\n        input3.required=true;\n        form.appendChild(input3);\n\n        let label4=document.createElement(\"label\");\n        label4.htmlFor=\"subject\";\n        label4.textContent=\"Subject\";\n        form.appendChild(label4);\n\n        let input4=document.createElement(\"textarea\");\n        input4.id=\"subject\";\n        input4.name=\"subject\";\n        input4.placeholder=\"Write something...\"\n        input4.required=true;\n        input4.style.height=\"170px\";\n        form.appendChild(input4);\n\n        let submitBtn=document.createElement(\"input\");\n        submitBtn.type=\"submit\";\n        submitBtn.value=\"Submit\";\n        form.appendChild(submitBtn);\n\n        if(footerExists)\n        {\n            let footer=document.querySelector(\".footer\");\n            divContainer.insertBefore(contactContainer,footer);\n        }\n        else\n            divContainer.appendChild(contactContainer);\n    }\n}\n\nfunction removeContact()\n{\n    let contact=document.querySelector(\".contact-container\");\n    if(contact)\n        contact.remove();\n}\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/*! exports provided: renderFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFooter\", function() { return renderFooter; });\n/* harmony import */ var _images_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/GitHub-Mark-Light-120px-plus.png */ \"./src/images/GitHub-Mark-Light-120px-plus.png\");\n/* harmony import */ var _images_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n/**\n * Generates a footer with some text and a link to the repo within a given parent container.\n * @param {Element} divContainer The parent element to render the footer within. \n */\nfunction renderFooter(divContainer)\n{\n    let footer=document.createElement(\"footer\");\n    footer.classList.add(\"footer\");\n\n    let para=document.createElement(\"p\");\n    para.textContent=\"Created by Francisco Guerrero\";\n    para.appendChild(document.createTextNode('\\u00A0\\u00A0'));\n\n    footer.appendChild(para);\n\n    let link=document.createElement(\"a\");\n    link.href=\"https://github.com/franciscog123/restaurant-page\";\n\n    let image=document.createElement(\"img\");\n    image.src=_images_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_0___default.a ;\n    image.style.border=0;\n    image.style.height=\"50px\";\n    image.style.width=\"50px\";\n    image.alt=\"GitHub Repo\";\n\n    link.appendChild(image);\n\n    footer.appendChild(link);\n\n    divContainer.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/*! exports provided: renderNavBar, renderHeroImage, removeHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNavBar\", function() { return renderNavBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHeroImage\", function() { return renderHeroImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeHeader\", function() { return removeHeader; });\n\n\n/**\n * Renders a navbar section with home, menu, and contact anchor items.\n * @param {Element} divContainer The parent element to render the navbar section within. \n */\nfunction renderNavBar(divContainer)\n{\n    let div=document.createElement(\"div\");\n    div.classList.add(\"topnav\");\n\n    let anchor=document.createElement(\"a\");\n    anchor.textContent=\"Home\";\n    anchor.id=\"home\";\n    div.appendChild(anchor);\n\n    anchor=document.createElement(\"a\");\n    anchor.textContent=\"Menu\";\n    anchor.id=\"menu\";\n    div.appendChild(anchor);\n\n    anchor=document.createElement(\"a\");\n    anchor.textContent=\"Contact\";\n    anchor.id=\"contact\";\n    div.appendChild(anchor);\n\n    divContainer.append(div);\n\n    //when user scrolls, add the sticky class to the navbar to make it a sticky navbar\n    window.onscroll = () => {switchNavbarClass(div)};\n}\n\n/**\n * Generates a hero image within the parent container.\n * @param {Element} divContainer The parent element to render the image within. \n */\nfunction renderHeroImage(divContainer) \n{\n    let div=document.createElement(\"div\");\n    div.classList.add(\"hero-image\");\n\n    let textDiv=document.createElement(\"div\");\n    textDiv.classList.add(\"hero-text\");\n    let headerText=document.createElement(\"h1\");\n    headerText.textContent=\"Taqueria Guerrero\";\n    textDiv.appendChild(headerText);\n    \n    div.appendChild(textDiv);\n\n    divContainer.appendChild(div);\n}\n\n/**\n * Removes both the navbar and hero image.\n */\nfunction removeHeader ()\n{\n    let navDiv=document.querySelector(\".topnav\");\n    navDiv.remove();\n    let imageDiv=document.querySelector(\".hero-image\");\n    imageDiv.remove();\n}\n\n// Add the sticky class to the navbar when you reach its scroll position. Remove \"sticky\" when you leave the scroll position\nfunction switchNavbarClass (navbar) {\n    let sticky = navbar.offsetTop;\n    if (window.pageYOffset >= sticky) {\n      navbar.classList.add(\"sticky\")\n    } else {\n      navbar.classList.remove(\"sticky\");\n    }\n  } \n\n\n\n//# sourceURL=webpack:///./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: renderMenu, removeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMenu\", function() { return renderMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeMenu\", function() { return removeMenu; });\n/**\n * If parameter footerExists is true, renders menu section before the footer.\n * If false, renders menu section by adding it to the end of the container.\n * @param {Element} divContainer The parent element to render the Menu section within\n * @param {Boolean} footerExists Whether or not if there is an existing footer in the DOM \n */\nfunction renderMenu(divContainer, footerExists)\n{\n    var elementExists=document.querySelector(\".menu-body\");\n    if(elementExists)\n    {\n        console.log(\"Menu already exists\");\n    }\n    else\n    {\n        let menuContainer=document.createElement(\"div\");\n        menuContainer.classList.add(\"menu-body\");\n\n        let h2=document.createElement(\"h2\");\n        h2.textContent=\"Menu\";\n        menuContainer.appendChild(h2);\n\n        let itemSection=createMenuSection(\"Individual Items\")\n        menuContainer.appendChild(itemSection);\n\n        let tacoItem=createMenuItem(\"Chicken or beef taco\",\"$1.50\",\"1 flour tortilla filled with chicken or beef fajitas and salad.\");\n        itemSection.appendChild(tacoItem);\n\n        let quesadillaItem=createMenuItem(\"Quesadilla\",\"$5\",\"1 large flour quesadilla filled with chicken or beef fajitas. Served with salad and sour cream.\");\n        itemSection.appendChild(quesadillaItem);\n\n        let burritoItem=createMenuItem(\"Burrito\",\"$5\",\"1 large burrito with your choice of meat and filling.\");\n        itemSection.appendChild(burritoItem);\n\n        let gorditaItem=createMenuItem(\"Gordita\",\"$3\",\"1 chicken or beef gordita filled with refried beans and cheese.\");\n        itemSection.appendChild(gorditaItem);\n\n        let entreeSection=createMenuSection(\"Entrees\");\n        menuContainer.appendChild(entreeSection);\n\n        let enchiladaPlate=createMenuItem(\"Enchilada Plate\",\"$10\",\"3 beef, cheese, or chicken enchiladas served with rice, refried beans, and salad.\");\n        entreeSection.appendChild(enchiladaPlate);\n\n        let burritoPlate=createMenuItem(\"Burrito Plate\",\"$9\",\"1 large burrito filled with your choice of meat and fillings. Served with rice and refried beans.\");\n        entreeSection.appendChild(burritoPlate);\n\n        let taquitoPlate=createMenuItem(\"Mexican Taquitos Plate\",\"$9\",\"5 beef or chicken Mexican Taquitos filled with grilled onions and avocados. Served with charro beans.\")\n        entreeSection.appendChild(taquitoPlate);\n\n        let carbonPlate=createMenuItem(\"Tacos al Carbon\",\"$10\",\"3 flour tortillas filled with chicken or beef fajitas. Served with rice, refried beans, and salad.\");\n        entreeSection.appendChild(taquitoPlate);\n\n        if(footerExists)\n        {\n            let footer=document.querySelector(\".footer\");\n            divContainer.insertBefore(menuContainer,footer);\n        }\n        else\n            divContainer.appendChild(menuContainer);\n    }\n}\n\n/**\n * Generates a menu item container displaying the given name, price, and description.\n * @param {string} name The name of the menu item\n * @param {string} price The price of the menu item\n * @param {string} description The description of the menu item \n */\nfunction createMenuItem(name, price, description)\n{\n    let menuItemSection=document.createElement(\"div\");\n    menuItemSection.classList.add(\"menu-item\");\n\n    let itemName=document.createElement(\"div\");\n    itemName.classList.add(\"menu-item-name\");\n    itemName.textContent=name;\n    menuItemSection.appendChild(itemName);\n\n    let itemPrice=document.createElement(\"div\");\n    itemPrice.classList.add(\"menu-item-price\");\n    itemPrice.textContent=price;\n    menuItemSection.appendChild(itemPrice);\n\n    let itemDescription=document.createElement(\"div\");\n    itemDescription.classList.add(\"menu-item-description\");\n    itemDescription.textContent=description;\n    menuItemSection.appendChild(itemDescription);\n\n    return menuItemSection;\n}\n\n/**\n * Creates a menu section container with the title displaying the name.\n * @param {string} name The title of the menu section \n */\nfunction createMenuSection(name)\n{\n    let menuSection=document.createElement(\"div\");\n        menuSection.classList.add(\"menu-section\");\n\n        let menuSectionTitle=document.createElement(\"h2\");\n        menuSectionTitle.classList.add(\"menu-section-title\");\n        menuSectionTitle.textContent=name;\n        menuSection.appendChild(menuSectionTitle);\n\n        return menuSection;\n}\n\n/**\n * Removes the menu container if it exists.\n */\nfunction removeMenu()\n{\n    let menu=document.querySelector(\".menu-body\");\n    if(menu)\n        menu.remove();\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @font-face{\\n|     font-family: 'Taco Modern';\\n|     src: url(./fonts/TACOM.ttf) format('truetype');\");\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });