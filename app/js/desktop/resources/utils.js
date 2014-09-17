var openHome = function(idApp) {
	$("#apps-container-view").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(ev) {
		if (ev.currentTarget.classList.contains('pt-page-rotateTopSideFirst') 
			&& !ev.currentTarget.classList.contains('pt-page-rotateBottomSideFirst')) {
			$('#' + idApp).addClass('moveout');
			$("#apps-container-view").addClass('moveout');
			$("#apps-container-view").removeClass('pt-page-rotateTopSideFirst');
		} else {
			$("#apps-container-view").removeClass('pt-page-rotateBottomSideFirst');
		}
	});

	$("#apps-container-view").addClass('pt-page-rotateTopSideFirst').trigger("hideApp");
}

var openApp = function(idApp) {
	$('#' + idApp).on('showApp', function() {
		console.log($('#' + idApp).position());
		$("#apps-container-view").removeClass('moveout');
		$("#apps-container-view").addClass('pt-page-rotateBottomSideFirst');
	});
	$('#' + idApp).removeClass('moveout').trigger("showApp");
}


/**
 * An object that maps keys to values. A map cannot contain duplicate keys; each key can map to at most one value.
 * For those familiar with the Java programming language, this is similar to a HashMap; it implements most of the
 * methods defined by Java's java.util.Map interface.
 *
 * @constructor
 * @version 1.0.0
 * @author cody@base22.com Burleson, Cody
 */

	function Map() {

		this.dict = {};

		/**
		 * Returns the number of key-value mappings in this map.
		 * @method
		 */
		this.size = function() {
			return Object.keys(this.dict).length;
		};

		/**
		 * Returns true if this map contains no key-value mappings.
		 * @method
		 */
		this.isEmpty = function() {
			return Object.keys(this.dict).length == 0;
		};

		/**
		 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
		 * @method
		 * @param {String} key
		 * 	the key whose associated value is to be returned
		 */
		this.get = function(key) {
			return this.dict[key];
		};

		/**
		 * Returns true if this map contains a mapping for the specified key.
		 * @method
		 * @param {String} key
		 * 	- key whose presence in this map is to be tested
		 */
		this.containsKey = function(key) {

			if (this.get(key) !== undefined) {
				return true;
			} else {
				return false;
			}

		};

		/**
		 * Associates the specified value with the specified key in this map. If the map previously contained a mapping for the key, the old value is replaced.
		 * @method
		 * @param {String} key
		 *	- key with which the specified value is to be associated
		 * @param {Object} value
		 * 	- value to be associated with the specified key
		 */
		this.put = function(key, value) {
			this.dict[key] = value;
		};

		/**
		 * Populate the map with data from an array using as key the keyField value an for value the
		 * valueField value if exist as parameter.
		 */
		this.fromArray = function(array, keyField, valueField) {
			for (var i in array) {
				var obj = array[i];
				if (valueField) {
					this.dict[obj[keyField]] = obj[valueField];
				} else {
					this.dict[obj[keyField]] = obj;
				}
			}
		};

		/**
		 * Removes the mapping for the specified key from this map if present.
		 * @method
		 * @param {String} key
		 *	- key whose mapping is to be removed from the map
		 */
		this.remove = function(key) {
			'use strict';
			delete this.dict[key];
		};

		/**
		 * Removes all of the mappings from this map. The map will be empty after this call returns.
		 * @method
		 */
		this.clear = function() {
			this.dict = {};
		};

	}