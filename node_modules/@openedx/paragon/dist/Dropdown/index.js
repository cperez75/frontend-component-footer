function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["show", "autoClose", "onToggle", "variant", "className"],
  _excluded2 = ["as", "bsPrefix"],
  _excluded3 = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BaseDropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import BaseDropdownItem from 'react-bootstrap/DropdownItem';
import BaseDropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownDeprecated from './deprecated';
import Button from '../Button';
import IconButton from '../IconButton';
var Dropdown = /*#__PURE__*/React.forwardRef(
// eslint-disable-next-line prefer-arrow-callback
function Dropdown(_ref, ref) {
  var show = _ref.show,
    autoClose = _ref.autoClose,
    onToggle = _ref.onToggle,
    variant = _ref.variant,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _React$useState = React.useState(show),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    internalShow = _React$useState2[0],
    setInternalShow = _React$useState2[1];
  var isClosingPermitted = function isClosingPermitted(source) {
    // autoClose=false only permits close on button click
    if (autoClose === false) {
      return source === 'click';
    }
    // autoClose=inside doesn't permit close on rootClose
    if (autoClose === 'inside') {
      return source !== 'rootClose';
    }
    // autoClose=outside doesn't permit close on select
    if (autoClose === 'outside') {
      return source !== 'select';
    }
    return true;
  };
  var handleToggle = function handleToggle(isOpen, event, metadata) {
    if (isOpen) {
      setInternalShow(true);
      onToggle === null || onToggle === void 0 ? void 0 : onToggle(isOpen, event, metadata);
      return;
    }
    var _metadata = _objectSpread({}, metadata),
      source = _metadata.source;
    if (event.currentTarget === document && (source !== 'keydown' || event.key === 'Escape')) {
      source = 'rootClose';
    }
    if (isClosingPermitted(source)) {
      setInternalShow(false);
      onToggle === null || onToggle === void 0 ? void 0 : onToggle(isOpen, event, metadata);
    }
  };
  return /*#__PURE__*/React.createElement(BaseDropdown, _extends({
    className: classNames('pgn__dropdown', "pgn__dropdown-".concat(variant), className),
    "data-testid": "dropdown",
    onToggle: handleToggle,
    ref: ref,
    show: internalShow
  }, rest));
});
Dropdown.propTypes = {
  autoClose: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  onToggle: PropTypes.func,
  show: PropTypes.bool,
  variant: PropTypes.oneOf(['light', 'dark'])
};
Dropdown.defaultProps = {
  autoClose: true,
  className: '',
  onToggle: undefined,
  show: false,
  variant: 'light'
};
var DropdownToggle = /*#__PURE__*/React.forwardRef(
// eslint-disable-next-line prefer-arrow-callback
function DropdownToggle(_ref2, ref) {
  var as = _ref2.as,
    bsPrefix = _ref2.bsPrefix,
    otherProps = _objectWithoutProperties(_ref2, _excluded2);
  // hide arrow from the toggle if it is rendered as IconButton
  // because it hinders the positioning of IconButton
  var prefix = as === IconButton ? 'pgn__dropdown-toggle-iconbutton' : bsPrefix;
  return /*#__PURE__*/React.createElement(BaseDropdownToggle, _extends({}, otherProps, {
    as: as,
    bsPrefix: prefix,
    ref: ref
  }));
});
DropdownToggle.propTypes = {
  /** Specifies the base element. */
  as: PropTypes.elementType,
  /** Overrides underlying component base CSS class name. */
  bsPrefix: PropTypes.string,
  /** An html id attribute, necessary for assistive technologies, such as screen readers. */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
DropdownToggle.defaultProps = {
  as: Button,
  bsPrefix: 'dropdown-toggle'
};
Dropdown.Item = /*#__PURE__*/React.forwardRef(
// eslint-disable-next-line prefer-arrow-callback
function DropdownItem(_ref3, ref) {
  var className = _ref3.className,
    otherProps = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement(BaseDropdownItem, _extends({
    className: classNames(className, 'pgn__dropdown-item'),
    ref: ref
  }, otherProps));
});
Dropdown.Item.propTypes = {
  className: PropTypes.string
};
Dropdown.Item.defaultProps = {
  className: undefined
};
Dropdown.Deprecated = DropdownDeprecated;
Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Header = BaseDropdown.Header;
Dropdown.Divider = BaseDropdown.Divider;
export default Dropdown;
export { DropdownToggle };
export { default as DropdownButton } from 'react-bootstrap/DropdownButton';
export { default as SplitButton } from 'react-bootstrap/SplitButton';
//# sourceMappingURL=index.js.map