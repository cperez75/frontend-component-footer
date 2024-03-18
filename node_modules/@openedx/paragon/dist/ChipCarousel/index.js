function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "items", "ariaLabel", "disableOpacityMasks", "onScrollPrevious", "onScrollNext", "canScrollHorizontal", "offset", "offsetType", "gap"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
// @ts-ignore
import { OverflowScroll, OverflowScrollContext } from '../OverflowScroll';
// @ts-ignore
import IconButton from '../IconButton';
// @ts-ignore
import Icon from '../Icon';
// @ts-ignore
import { ArrowForward, ArrowBack } from '../../icons';
// @ts-ignore
import messages from './messages';
import Chip from '../Chip';
var ChipCarousel = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    items = _ref.items,
    ariaLabel = _ref.ariaLabel,
    disableOpacityMasks = _ref.disableOpacityMasks,
    onScrollPrevious = _ref.onScrollPrevious,
    onScrollNext = _ref.onScrollNext,
    _ref$canScrollHorizon = _ref.canScrollHorizontal,
    canScrollHorizontal = _ref$canScrollHorizon === void 0 ? false : _ref$canScrollHorizon,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 120 : _ref$offset,
    _ref$offsetType = _ref.offsetType,
    offsetType = _ref$offsetType === void 0 ? 'fixed' : _ref$offsetType,
    gap = _ref.gap,
    props = _objectWithoutProperties(_ref, _excluded);
  var intl = useIntl();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('pgn__chip-carousel', className, gap ? "pgn__chip-carousel-gap__".concat(gap) : '')
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(OverflowScroll, {
    ariaLabel: ariaLabel,
    hasInteractiveChildren: true,
    disableScroll: !canScrollHorizontal,
    disableOpacityMasks: disableOpacityMasks,
    onScrollPrevious: onScrollPrevious,
    onScrollNext: onScrollNext,
    offset: offset,
    offsetType: offsetType
  }, /*#__PURE__*/React.createElement(OverflowScrollContext.Consumer, null, function (_ref2) {
    var setOverflowRef = _ref2.setOverflowRef,
      isScrolledToStart = _ref2.isScrolledToStart,
      isScrolledToEnd = _ref2.isScrolledToEnd,
      scrollToPrevious = _ref2.scrollToPrevious,
      scrollToNext = _ref2.scrollToNext;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.Fragment, null, !isScrolledToStart && /*#__PURE__*/React.createElement(IconButton, {
      size: "sm",
      className: "pgn__chip-carousel__left-control",
      src: ArrowBack,
      iconAs: Icon,
      alt: intl.formatMessage(messages.scrollToPrevious),
      onClick: scrollToPrevious
    }), !isScrolledToEnd && /*#__PURE__*/React.createElement(IconButton, {
      size: "sm",
      className: "pgn__chip-carousel__right-control",
      src: ArrowForward,
      iconAs: Icon,
      alt: intl.formatMessage(messages.scrollToNext),
      onClick: scrollToNext
    })), /*#__PURE__*/React.createElement("div", {
      ref: setOverflowRef,
      className: "d-flex"
    }, /*#__PURE__*/React.createElement(OverflowScroll.Items, null, items === null || items === void 0 ? void 0 : items.map(function (item, id) {
      var _ref3 = (item === null || item === void 0 ? void 0 : item.props) || {},
        children = _ref3.children;
      if (!children) {
        return null;
      }
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/React.createElement(Chip, _objectSpread(_objectSpread({}, item.props), {}, {
        key: id
      }));
    }))));
  })));
});
ChipCarousel.propTypes = {
  /** Text describing the ChipCarousel for screen readers. */
  ariaLabel: PropTypes.string.isRequired,
  /** Specifies class name for the ChipCarousel. */
  className: PropTypes.string,
  /** Specifies array of `Chip` elements to be rendered inside the carousel. */
  // @ts-ignore
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  /** Whether the default opacity masks should be shown at the start/end, if applicable. */
  disableOpacityMasks: PropTypes.bool,
  /** Callback function for when the user scrolls to the previous element. */
  onScrollPrevious: PropTypes.func,
  /** Callback function for when the user scrolls to the next element. */
  onScrollNext: PropTypes.func,
  /** Whether users can scroll within the overflow container. */
  canScrollHorizontal: PropTypes.bool,
  /** A value specifying the distance the scroll should move. */
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Type of offset value (percentage or fixed). */
  offsetType: PropTypes.oneOf(['percentage', 'fixed']),
  /**
   * Specifies inner space between children blocks.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
  gap: PropTypes.number
};
ChipCarousel.defaultProps = {
  className: undefined,
  disableOpacityMasks: undefined,
  onScrollPrevious: undefined,
  onScrollNext: undefined,
  canScrollHorizontal: false,
  offset: 120,
  offsetType: 'fixed',
  gap: 3
};
export default ChipCarousel;
//# sourceMappingURL=index.js.map