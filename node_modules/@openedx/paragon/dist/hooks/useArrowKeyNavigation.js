function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useRef, useEffect } from 'react';

/**
 * A React hook to enable arrow key navigation on a component.
 */

function handleEnter(_ref) {
  var event = _ref.event,
    currentIndex = _ref.currentIndex,
    activeElement = _ref.activeElement;
  if (currentIndex === -1) {
    return;
  }
  activeElement.click();
  event.preventDefault();
}
function handleArrowKey(_ref2) {
  var event = _ref2.event,
    currentIndex = _ref2.currentIndex,
    availableElements = _ref2.availableElements;
  // If the focus isn't in the container, focus on the first thing
  if (currentIndex === -1) {
    availableElements[0].focus();
  }

  // Move the focus up or down. Wrap around ends of list.
  var nextElement;
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    nextElement = availableElements[(currentIndex + 1) % availableElements.length];
  }
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    nextElement = currentIndex - 1 < 0 ? availableElements[currentIndex - 1 + availableElements.length] : availableElements[currentIndex - 1];
  }
  if (event.key === 'End') {
    nextElement = availableElements[availableElements.length - 1];
  }
  if (event.key === 'Home') {
    var _availableElements = _slicedToArray(availableElements, 1);
    nextElement = _availableElements[0];
  }

  // eslint-disable-next-line no-unused-expressions
  nextElement && nextElement.focus();
  event.preventDefault();
}

/**
 * Implement arrow key navigation for the given parentNode
 */
function handleEvents(_ref3) {
  var event = _ref3.event,
    _ref3$ignoredKeys = _ref3.ignoredKeys,
    ignoredKeys = _ref3$ignoredKeys === void 0 ? [] : _ref3$ignoredKeys,
    parentNode = _ref3.parentNode,
    _ref3$selectors = _ref3.selectors,
    selectors = _ref3$selectors === void 0 ? 'a,button,input' : _ref3$selectors;
  if (!parentNode) {
    return;
  }
  var key = event.key;
  if (!['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Enter', 'Home', 'End'].includes(key) || ignoredKeys.includes(key)) {
    return;
  }
  var _document = document,
    activeElement = _document.activeElement;

  // If we're not inside the container, don't do anything
  if (!parentNode.contains(activeElement)) {
    return;
  }

  // Get the list of elements we're allowed to scroll through
  var availableElements = parentNode.querySelectorAll(selectors);

  // No elements are available to loop through.
  if (!availableElements.length) {
    return;
  }

  // Which index is currently selected
  var currentIndex = Array.from(availableElements).findIndex(function (availableElement) {
    return availableElement === activeElement;
  });
  if (key === 'Enter') {
    handleEnter({
      event: event,
      currentIndex: currentIndex,
      activeElement: activeElement
    });
  }
  handleArrowKey({
    event: event,
    currentIndex: currentIndex,
    availableElements: availableElements
  });
}
export default function useArrowKeyNavigation(props) {
  var _ref4 = props || {},
    selectors = _ref4.selectors,
    ignoredKeys = _ref4.ignoredKeys;
  var parentNode = useRef();
  useEffect(function () {
    var eventHandler = function eventHandler(event) {
      handleEvents({
        event: event,
        ignoredKeys: ignoredKeys,
        parentNode: parentNode.current,
        selectors: selectors
      });
    };
    document.addEventListener('keydown', eventHandler);
    return function () {
      return document.removeEventListener('keydown', eventHandler);
    };
  }, [ignoredKeys, selectors]);
  return parentNode;
}
//# sourceMappingURL=useArrowKeyNavigation.js.map