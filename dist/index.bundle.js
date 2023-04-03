"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Todo.js */ "./src/modules/Todo.js");


var form = document.getElementById('add-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  (0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_1__.addToDoItem)();
});
(0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_1__.displayAllTodos)();

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoItem": () => (/* binding */ addToDoItem),
/* harmony export */   "displayAllTodos": () => (/* binding */ displayAllTodos),
/* harmony export */   "saveToDoItem": () => (/* binding */ saveToDoItem)
/* harmony export */ });
var taskInput = document.getElementById('task');
var taskList = document.getElementById('todo-list');
var tasks = [];
var storedTasks = JSON.parse(localStorage.getItem('tasks'));
if (storedTasks) {
  tasks = storedTasks;
}

// Add to local storage
function saveToDoItem() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete a task
var deleteTask = function deleteTask(index) {
  // Remove the task from the array
  tasks.splice(index, 1);

  // Update the index of the remaining tasks
  for (var i = index; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }

  // Update the todo list in local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayAllTodos(); /* eslint-disable-line */
};

// Render the task list
var displayAllTodos = function displayAllTodos() {
  taskList.innerHTML = '';
  tasks.forEach(function (task, index) {
    var listItem = document.createElement('li');
    listItem.id = "task-".concat(index);
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', function () {
      return toggleCompletedToDo(index);
    }); /* eslint-disable-line */

    var taskDescription = document.createElement('input');
    taskDescription.type = 'text';
    taskDescription.className = 'task-description';
    taskDescription.value = task.description;
    taskDescription.addEventListener('blur', function () {
      editToDoItem(index, taskDescription.value); /* eslint-disable-line */
    });

    var deleteButton = document.createElement('span');
    deleteButton.className = 'material-symbols-outlined';
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'more_vert';
    deleteButton.addEventListener('click', function () {
      deleteTask(index);
    });
    listItem.addEventListener('mouseover', function () {
      deleteButton.textContent = 'delete';
    });
    listItem.addEventListener('mouseout', function () {
      deleteButton.textContent = 'more_vert';
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    if (task.completed) {
      taskDescription.style.textDecoration = 'line-through';
    }
  });
};

// Add a new task
var addToDoItem = function addToDoItem() {
  var taskDescription = taskInput.value;
  if (taskDescription.trim()) {
    var newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length
    };
    tasks.push(newTask);
    saveToDoItem();
    displayAllTodos();
    taskInput.value = '';
  }
};

// Edit a task description
var editToDoItem = function editToDoItem(index, newDescription) {
  tasks[index].description = newDescription;
  saveToDoItem();
  displayAllTodos();
};
var toggleCompletedToDo = function toggleCompletedToDo(index) {
  tasks[index].completed = !tasks[index].completed;
  saveToDoItem();
  displayAllTodos();
};
var todoList = document.getElementById('todo-list');
var button = document.getElementById('clearBtn');
button.addEventListener('click', function () {
  var completedTodos = todoList.querySelectorAll('input:checked');
  completedTodos.forEach(function (todo) {
    todo.parentNode.remove();
    saveToDoItem();
  });
  var todosInLocalStorage = JSON.parse(localStorage.getItem('tasks'));
  var uncheckedToDos = todosInLocalStorage.filter(function (todo) {
    return !todo.completed;
  });
  localStorage.setItem('tasks', JSON.stringify(uncheckedToDos));
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgb(236, 236, 236);\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.todos-section {\r\n  padding-top: 8px;\r\n  width: 40%;\r\n  margin: 2rem auto;\r\n  box-shadow: 4px 4px 12px #808080;\r\n}\r\n\r\n.title {\r\n  margin: 24px auto 12px auto;\r\n  padding: 0 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title h4,\r\n.title span {\r\n  color: rgba(43, 43, 43, 0.6);\r\n  font-weight: 500;\r\n}\r\n\r\n.title span {\r\n  margin-left: auto;\r\n  text-align: center;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-variation-settings:\r\n    'FILL' 0,\r\n    'wght' 400,\r\n    'GRAD' 0,\r\n    'opsz' 48;\r\n  color: rgba(43, 43, 43, 0.6);\r\n}\r\n\r\n.delete-btn {\r\n  margin-left: auto;\r\n  text-align: center;\r\n  padding-top: 12px;\r\n}\r\n\r\nform {\r\n  width: 88%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nform.add button {\r\n  border: none;\r\n  background-color: #fff;\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n\r\nform input,\r\nbutton.clear-btn {\r\n  padding: 12px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border: transparent;\r\n  color: rgba(43, 43, 43, 0.6);\r\n}\r\n\r\nul {\r\n  margin-left: 0;\r\n}\r\n\r\nform input {\r\n  margin-bottom: 5px;\r\n}\r\n\r\nform input:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.completed {\r\n  color: rgba(43, 43, 43, 0.4);\r\n  text-decoration: line-through;\r\n}\r\n\r\nbutton.clear-btn {\r\n  background-color: rgb(236, 236, 236);\r\n  letter-spacing: 1px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  display: flex;\r\n  background-color: #fff;\r\n  width: 95%;\r\n  padding: 12px;\r\n  margin-left: 0;\r\n  margin-right: 12px;\r\n  margin-bottom: 5px;\r\n  color: rgba(43, 43, 43, 0.9);\r\n}\r\n\r\nli:hover {\r\n  background-color: rgba(248, 208, 99, 0.3);\r\n}\r\n\r\n.task-description {\r\n  outline: 0;\r\n  background-color: inherit;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border: transparent;\r\n  height: inherit;\r\n}\r\n\r\n.task-description:hover {\r\n  background-color: rgba(248, 208, 99, 0.3);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;EAC3B,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE;;;;aAIW;EACX,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yCAAyC;AAC3C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgb(236, 236, 236);\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.todos-section {\r\n  padding-top: 8px;\r\n  width: 40%;\r\n  margin: 2rem auto;\r\n  box-shadow: 4px 4px 12px #808080;\r\n}\r\n\r\n.title {\r\n  margin: 24px auto 12px auto;\r\n  padding: 0 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title h4,\r\n.title span {\r\n  color: rgba(43, 43, 43, 0.6);\r\n  font-weight: 500;\r\n}\r\n\r\n.title span {\r\n  margin-left: auto;\r\n  text-align: center;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-variation-settings:\r\n    'FILL' 0,\r\n    'wght' 400,\r\n    'GRAD' 0,\r\n    'opsz' 48;\r\n  color: rgba(43, 43, 43, 0.6);\r\n}\r\n\r\n.delete-btn {\r\n  margin-left: auto;\r\n  text-align: center;\r\n  padding-top: 12px;\r\n}\r\n\r\nform {\r\n  width: 88%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nform.add button {\r\n  border: none;\r\n  background-color: #fff;\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n\r\nform input,\r\nbutton.clear-btn {\r\n  padding: 12px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border: transparent;\r\n  color: rgba(43, 43, 43, 0.6);\r\n}\r\n\r\nul {\r\n  margin-left: 0;\r\n}\r\n\r\nform input {\r\n  margin-bottom: 5px;\r\n}\r\n\r\nform input:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.completed {\r\n  color: rgba(43, 43, 43, 0.4);\r\n  text-decoration: line-through;\r\n}\r\n\r\nbutton.clear-btn {\r\n  background-color: rgb(236, 236, 236);\r\n  letter-spacing: 1px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  display: flex;\r\n  background-color: #fff;\r\n  width: 95%;\r\n  padding: 12px;\r\n  margin-left: 0;\r\n  margin-right: 12px;\r\n  margin-bottom: 5px;\r\n  color: rgba(43, 43, 43, 0.9);\r\n}\r\n\r\nli:hover {\r\n  background-color: rgba(248, 208, 99, 0.3);\r\n}\r\n\r\n.task-description {\r\n  outline: 0;\r\n  background-color: inherit;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border: transparent;\r\n  height: inherit;\r\n}\r\n\r\n.task-description:hover {\r\n  background-color: rgba(248, 208, 99, 0.3);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGFkZFRvRG9JdGVtLCBkaXNwbGF5QWxsVG9kb3MgfSBmcm9tICcuL21vZHVsZXMvVG9kby5qcyc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGRUb0RvSXRlbSgpO1xufSk7XG5cbmRpc3BsYXlBbGxUb2RvcygpOyIsImNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJyk7XHJcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdCcpO1xyXG5sZXQgdGFza3MgPSBbXTtcclxuY29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuaWYgKHN0b3JlZFRhc2tzKSB7XHJcbiAgdGFza3MgPSBzdG9yZWRUYXNrcztcclxufVxyXG5cclxuLy8gQWRkIHRvIGxvY2FsIHN0b3JhZ2VcclxuZnVuY3Rpb24gc2F2ZVRvRG9JdGVtKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn1cclxuXHJcbi8vIERlbGV0ZSBhIHRhc2tcclxuY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xyXG4gIC8vIFJlbW92ZSB0aGUgdGFzayBmcm9tIHRoZSBhcnJheVxyXG4gIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gIC8vIFVwZGF0ZSB0aGUgaW5kZXggb2YgdGhlIHJlbWFpbmluZyB0YXNrc1xyXG4gIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICB0YXNrc1tpXS5pbmRleCA9IGkgKyAxO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIHRoZSB0b2RvIGxpc3QgaW4gbG9jYWwgc3RvcmFnZVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcblxyXG4gIGRpc3BsYXlBbGxUb2RvcygpOyAvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovIFxyXG59O1xyXG5cclxuLy8gUmVuZGVyIHRoZSB0YXNrIGxpc3RcclxuY29uc3QgZGlzcGxheUFsbFRvZG9zID0gKCkgPT4ge1xyXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbS5pZCA9IGB0YXNrLSR7aW5kZXh9YDtcclxuXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlQ29tcGxldGVkVG9EbyhpbmRleCkpOy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi8gXHJcblxyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi50eXBlID0gJ3RleHQnO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0YXNrLWRlc2NyaXB0aW9uJztcclxuICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgZWRpdFRvRG9JdGVtKGluZGV4LCB0YXNrRGVzY3JpcHRpb24udmFsdWUpOy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi8gXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdtb3JlX3ZlcnQnO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkZWxldGVUYXNrKGluZGV4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ21vcmVfdmVydCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHJcbiAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcclxuICAgICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBBZGQgYSBuZXcgdGFza1xyXG5jb25zdCBhZGRUb0RvSXRlbSA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrSW5wdXQudmFsdWU7XHJcbiAgaWYgKHRhc2tEZXNjcmlwdGlvbi50cmltKCkpIHtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGgsXHJcbiAgICB9O1xyXG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgIHNhdmVUb0RvSXRlbSgpO1xyXG4gICAgZGlzcGxheUFsbFRvZG9zKCk7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSAnJztcclxuICB9XHJcbn07XHJcblxyXG4vLyBFZGl0IGEgdGFzayBkZXNjcmlwdGlvblxyXG5jb25zdCBlZGl0VG9Eb0l0ZW0gPSAoaW5kZXgsIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgdGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgc2F2ZVRvRG9JdGVtKCk7XHJcbiAgZGlzcGxheUFsbFRvZG9zKCk7XHJcbn07XHJcblxyXG5jb25zdCB0b2dnbGVDb21wbGV0ZWRUb0RvID0gKGluZGV4KSA9PiB7XHJcbiAgdGFza3NbaW5kZXhdLmNvbXBsZXRlZCA9ICF0YXNrc1tpbmRleF0uY29tcGxldGVkO1xyXG4gIHNhdmVUb0RvSXRlbSgpO1xyXG4gIGRpc3BsYXlBbGxUb2RvcygpO1xyXG59O1xyXG5cclxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhckJ0bicpO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGNvbXBsZXRlZFRvZG9zID0gdG9kb0xpc3QucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gIGNvbXBsZXRlZFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgIHRvZG8ucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgIHNhdmVUb0RvSXRlbSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0b2Rvc0luTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgY29uc3QgdW5jaGVja2VkVG9Eb3MgPSB0b2Rvc0luTG9jYWxTdG9yYWdlLmZpbHRlcigodG9kbykgPT4gIXRvZG8uY29tcGxldGVkKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh1bmNoZWNrZWRUb0RvcykpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGFkZFRvRG9JdGVtLCBkaXNwbGF5QWxsVG9kb3MsIHNhdmVUb0RvSXRlbSB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3Mtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMnB4ICM4MDgwODA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDI0cHggYXV0byAxMnB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDEycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDQsXFxyXFxuLnRpdGxlIHNwYW4ge1xcclxcbiAgY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC42KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBzcGFuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXHJcXG4gICAgJ0ZJTEwnIDAsXFxyXFxuICAgICd3Z2h0JyA0MDAsXFxyXFxuICAgICdHUkFEJyAwLFxcclxcbiAgICAnb3BzeicgNDg7XFxyXFxuICBjb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0biB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHdpZHRoOiA4OCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmZvcm0uYWRkIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0LFxcclxcbmJ1dHRvbi5jbGVhci1idG4ge1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICBjb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjQpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5jbGVhci1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDIwOCwgOTksIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyMDgsIDk5LCAwLjMpO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFOzs7O2FBSVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3Mtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMnB4ICM4MDgwODA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDI0cHggYXV0byAxMnB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDEycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDQsXFxyXFxuLnRpdGxlIHNwYW4ge1xcclxcbiAgY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC42KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBzcGFuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXHJcXG4gICAgJ0ZJTEwnIDAsXFxyXFxuICAgICd3Z2h0JyA0MDAsXFxyXFxuICAgICdHUkFEJyAwLFxcclxcbiAgICAnb3BzeicgNDg7XFxyXFxuICBjb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0biB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHdpZHRoOiA4OCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmZvcm0uYWRkIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0LFxcclxcbmJ1dHRvbi5jbGVhci1idG4ge1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICBjb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjQpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5jbGVhci1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDIwOCwgOTksIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyMDgsIDk5LCAwLjMpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImFkZFRvRG9JdGVtIiwiZGlzcGxheUFsbFRvZG9zIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFza0lucHV0IiwidGFza0xpc3QiLCJ0YXNrcyIsInN0b3JlZFRhc2tzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVUb0RvSXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkZWxldGVUYXNrIiwiaW5kZXgiLCJzcGxpY2UiLCJpIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInRhc2siLCJsaXN0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNvbmNhdCIsImNoZWNrYm94IiwidHlwZSIsImNoZWNrZWQiLCJjb21wbGV0ZWQiLCJ0b2dnbGVDb21wbGV0ZWRUb0RvIiwidGFza0Rlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsImVkaXRUb0RvSXRlbSIsImRlbGV0ZUJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwidHJpbSIsIm5ld1Rhc2siLCJwdXNoIiwibmV3RGVzY3JpcHRpb24iLCJ0b2RvTGlzdCIsImJ1dHRvbiIsImNvbXBsZXRlZFRvZG9zIiwicXVlcnlTZWxlY3RvckFsbCIsInRvZG8iLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwidG9kb3NJbkxvY2FsU3RvcmFnZSIsInVuY2hlY2tlZFRvRG9zIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==