/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import VueResource from 'vue-resource';
	import App from './App';
	import goods from 'components/goods/goods';
	import ratings from 'components/ratings/ratings';
	import seller from 'components/seller/seller';

	import 'common/stylus/index.styl';

	Vue.use(VueRouter);
	Vue.use(VueResource);

	const routes = [{
	  path: '/',
	  redirect: '/goods'
	}, {
	  path: '/goods',
	  component: goods
	}, {
	  path: '/ratings',
	  component: ratings
	}, {
	  path: '/seller',
	  component: seller
	}];

	const router = new VueRouter({
	  linkActiveClass: 'active',
	  routes
	});

	/* eslint-disable no-new */
	new Vue({
	  el: '#app',
	  router,
	  render: h => h(App)
	});


/***/ })
/******/ ]);