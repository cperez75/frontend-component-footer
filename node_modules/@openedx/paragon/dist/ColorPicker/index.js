function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { HexColorPicker } from 'react-colorful';
import Button from '../Button';
import Form from '../Form';
import ModalPopup from '../Modal/ModalPopup';
import { OverlayTrigger } from '../Overlay';
import Tooltip from '../Tooltip';
import useToggle from '../hooks/useToggle';
function ColorPicker(_ref) {
  var color = _ref.color,
    setColor = _ref.setColor,
    className = _ref.className,
    size = _ref.size;
  var _useToggle = useToggle(false),
    _useToggle2 = _slicedToArray(_useToggle, 3),
    isOpen = _useToggle2[0],
    open = _useToggle2[1],
    close = _useToggle2[2];
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    target = _React$useState2[0],
    setTarget = _React$useState2[1];
  var colorIsValid = function colorIsValid(colorToValidate) {
    var hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(colorToValidate);
  };
  var formatHexColorString = function formatHexColorString(colorString) {
    if (!colorString.startsWith('#')) {
      return "#".concat(colorString).slice(0, 7);
    }
    return colorString.slice(0, 7);
  };
  var _React$useState3 = React.useState(function () {
      return color === '' || colorIsValid(formatHexColorString(color));
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    hexValid = _React$useState4[0],
    setHexValid = _React$useState4[1];
  var _React$useState5 = React.useState(function () {
      if (color === '') {
        return '';
      }
      return formatHexColorString(color);
    }),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    hexColorString = _React$useState6[0],
    setHexColorString = _React$useState6[1];
  var _React$useState7 = React.useState(function () {
      var formattedColor = formatHexColorString(color);
      if (colorIsValid(formattedColor)) {
        return formattedColor;
      }
      return '#fff';
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    colorToDisplay = _React$useState8[0],
    setColorToDisplay = _React$useState8[1];
  var setValidatedColor = function setValidatedColor(newColor) {
    if (newColor === '') {
      setHexValid(true);
      setColor('');
      setHexColorString('');
      setColorToDisplay('#fff');
      return;
    }
    var formattedColor = formatHexColorString(newColor);
    if (colorIsValid(formattedColor)) {
      setHexValid(true);
      setColor(formattedColor);
      setHexColorString(formattedColor);
      setColorToDisplay(formattedColor);
      return;
    }
    setHexValid(false);
    setHexColorString(formattedColor);

    // ensure the picker value stays in sync with the textbox
    setColor(formattedColor);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "d-flex"
  }, /*#__PURE__*/React.createElement(OverlayTrigger, {
    placement: "top",
    overlay: /*#__PURE__*/React.createElement(Tooltip, {
      id: "color-picker-tooltip"
    }, "Color picker")
  }, /*#__PURE__*/React.createElement(Button, {
    ref: setTarget,
    className: classNames(className, 'pgn__color-picker', "pgn__color-picker-".concat(size)),
    style: _objectSpread({}, color && hexValid ? {
      background: "".concat(color)
    } : {}),
    onClick: open
  }))), /*#__PURE__*/React.createElement(ModalPopup, {
    positionRef: target,
    isOpen: isOpen,
    style: {
      background: 'black'
    },
    onClose: close
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__color-modal rounded shadow",
    style: {
      textAlign: 'start'
    }
  }, /*#__PURE__*/React.createElement(HexColorPicker, {
    color: colorToDisplay,
    onChange: setValidatedColor
  }), /*#__PURE__*/React.createElement(Form.Group, {
    className: "pgn__hex-form",
    size: "sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form.Label, {
    className: "pgn__hex-label"
  }, "Hex"), /*#__PURE__*/React.createElement(Form.Control, {
    className: "pgn__hex-field",
    isInvalid: !hexValid,
    value: hexColorString,
    onChange: function onChange(e) {
      return setValidatedColor(e.target.value);
    },
    "data-testid": "hex-input",
    spellCheck: "false"
  })), !hexValid && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    className: "pgn__color-error",
    type: "invalid"
  }, "Colors must be in hexadecimal format.")))));
}
ColorPicker.defaultProps = {
  color: '',
  className: undefined,
  size: 'md'
};
ColorPicker.propTypes = {
  /** A default hex code to preset the picker to display. */
  color: PropTypes.string,
  /** Passing setState function allows parent to alter the color. */
  setColor: PropTypes.func.isRequired,
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Size of the color picker */
  size: PropTypes.oneOf(['sm', 'md'])
};
export default ColorPicker;
//# sourceMappingURL=index.js.map