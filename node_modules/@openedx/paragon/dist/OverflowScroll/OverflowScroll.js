function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useOverflowScroll } from './data';
import OverflowScrollContext from './OverflowScrollContext';
import OverflowScrollItems from './OverflowScrollItems';
function OverflowScroll(_ref) {
  var ariaLabel = _ref.ariaLabel,
    children = _ref.children,
    childQuerySelector = _ref.childQuerySelector,
    hasInteractiveChildren = _ref.hasInteractiveChildren,
    disableScroll = _ref.disableScroll,
    disableOpacityMasks = _ref.disableOpacityMasks,
    onScrollPrevious = _ref.onScrollPrevious,
    onScrollNext = _ref.onScrollNext,
    offset = _ref.offset,
    offsetType = _ref.offsetType;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    overflowRef = _useState2[0],
    setOverflowRef = _useState2[1];
  var _useOverflowScroll = useOverflowScroll({
      childQuerySelector: childQuerySelector,
      hasInteractiveChildren: hasInteractiveChildren,
      disableScroll: disableScroll,
      disableOpacityMasks: disableOpacityMasks,
      onScrollPrevious: onScrollPrevious,
      onScrollNext: onScrollNext,
      overflowRef: overflowRef,
      offset: offset,
      offsetType: offsetType
    }),
    isScrolledToStart = _useOverflowScroll.isScrolledToStart,
    isScrolledToEnd = _useOverflowScroll.isScrolledToEnd,
    scrollToPrevious = _useOverflowScroll.scrollToPrevious,
    scrollToNext = _useOverflowScroll.scrollToNext;
  var contextValue = useMemo(function () {
    return {
      overflowRef: overflowRef,
      setOverflowRef: setOverflowRef,
      isScrolledToStart: isScrolledToStart,
      isScrolledToEnd: isScrolledToEnd,
      scrollToPrevious: scrollToPrevious,
      scrollToNext: scrollToNext
    };
  }, [overflowRef, setOverflowRef, isScrolledToStart, isScrolledToEnd, scrollToPrevious, scrollToNext]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__overflow-scroll",
    role: "region",
    "aria-label": ariaLabel
  }, /*#__PURE__*/React.createElement(OverflowScrollContext.Provider, {
    value: contextValue
  }, children));
}
OverflowScroll.Items = OverflowScrollItems;
OverflowScroll.propTypes = {
  /** Text describing the OverflowScroll for screen readers */
  ariaLabel: PropTypes.string.isRequired,
  /** Specifies the content of the `OverflowScroll`. */
  children: PropTypes.node.isRequired,
  /** A CSS query selector to find all child elements within the overflow container. */
  childQuerySelector: PropTypes.string,
  /** Whether the child `OverflowScroll` components are interactive/focusable. If not, a `tabindex="0"` is
   * added to be a11y-compliant */
  hasInteractiveChildren: PropTypes.bool,
  /** Whether users can scroll within the overflow container. */
  disableScroll: PropTypes.bool,
  /** Whether the default opacity masks should be shown at the start/end, if applicable. */
  disableOpacityMasks: PropTypes.bool,
  /** Callback function for when the user scrolls to the previous element. */
  onScrollPrevious: PropTypes.func,
  /** Callback function for when the user scrolls to the next element. */
  onScrollNext: PropTypes.func,
  /** A value specifying the distance the scroll should move. */
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Type of offset value (percentage or fixed). */
  offsetType: PropTypes.oneOf(['percentage', 'fixed'])
};
OverflowScroll.defaultProps = {
  childQuerySelector: undefined,
  disableScroll: false,
  hasInteractiveChildren: false,
  disableOpacityMasks: false,
  onScrollPrevious: undefined,
  onScrollNext: undefined,
  offset: undefined,
  offsetType: 'percentage'
};
export default OverflowScroll;
//# sourceMappingURL=OverflowScroll.js.map