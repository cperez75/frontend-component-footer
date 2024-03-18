function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["type", "value", "checked", "children", "isIndeterminate", "isInvalid", "onClick", "onFocus", "inputHidden", "className", "showActiveBoxState"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectableBoxSet from './SelectableBoxSet';
import { useCheckboxSetContext } from '../Form/FormCheckboxSetContext';
import { useRadioSetContext } from '../Form/FormRadioSetContext';
import { getInputType } from './utils';
var INPUT_TYPES = ['radio', 'checkbox'];
var SelectableBox = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var type = _ref.type,
    value = _ref.value,
    checked = _ref.checked,
    children = _ref.children,
    isIndeterminate = _ref.isIndeterminate,
    isInvalid = _ref.isInvalid,
    onClick = _ref.onClick,
    onFocus = _ref.onFocus,
    inputHidden = _ref.inputHidden,
    className = _ref.className,
    showActiveBoxState = _ref.showActiveBoxState,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputType = getInputType('SelectableBox', type);
  var _useRadioSetContext = useRadioSetContext(),
    radioValue = _useRadioSetContext.value;
  var _useCheckboxSetContex = useCheckboxSetContext(),
    _useCheckboxSetContex2 = _useCheckboxSetContex.value,
    checkboxValues = _useCheckboxSetContex2 === void 0 ? [] : _useCheckboxSetContex2;
  var isChecked = function isChecked() {
    switch (type) {
      case 'radio':
        return radioValue === value;
      case 'checkbox':
        return checkboxValues.includes(value);
      default:
        return radioValue === value;
    }
  };
  var inputRef = useRef(null);
  var input = /*#__PURE__*/React.createElement(inputType, _objectSpread({
    value: value,
    checked: checked,
    hidden: inputHidden,
    ref: inputRef,
    tabIndex: -1,
    onChange: function onChange() {}
  }, type === 'checkbox' ? _objectSpread(_objectSpread({}, props), {}, {
    isIndeterminate: isIndeterminate
  }) : _objectSpread({}, props)), null);
  useEffect(function () {
    if (onClick && inputRef.current) {
      inputRef.current.onclick = function () {
        return onClick(inputRef.current);
      };
    }
  }, [onClick]);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "button",
    onKeyPress: function onKeyPress() {
      return inputRef.current.click();
    },
    onClick: function onClick() {
      return inputRef.current.click();
    },
    onFocus: onFocus,
    className: classNames('pgn__selectable_box', className, {
      'pgn__selectable_box-active': !inputHidden && !showActiveBoxState ? false : isChecked() || checked,
      'pgn__selectable_box-invalid': isInvalid
    }),
    tabIndex: 0,
    ref: ref
  }, props), input, children);
});
SelectableBox.propTypes = {
  /** Content of the `SelectableBox`. */
  children: PropTypes.node.isRequired,
  /** A value that is passed to the input tag. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Controls whether `SelectableBox` is checked. */
  checked: PropTypes.bool,
  /** Indicates the input type: checkbox or radio. */
  type: PropTypes.oneOf(INPUT_TYPES),
  /** Function that is called when the `SelectableBox` is clicked. */
  onClick: PropTypes.func,
  /** Function that is called when the `SelectableBox` is focused. */
  onFocus: PropTypes.func,
  /** Controls display of the input (checkbox or radio button) on the `SelectableBox`. */
  inputHidden: PropTypes.bool,
  /** Indicates a state for the 'checkbox' `type` when `SelectableBox` is neither checked nor unchecked. */
  isIndeterminate: PropTypes.bool,
  /** Adds errors styles to the `SelectableBox`. */
  isInvalid: PropTypes.bool,
  /** A class that is appended to the base element. */
  className: PropTypes.string,
  /** Controls the visibility of the active state for the `SelectableBox`. */
  showActiveBoxState: PropTypes.bool
};
SelectableBox.defaultProps = {
  value: undefined,
  checked: false,
  type: 'radio',
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  inputHidden: true,
  isIndeterminate: false,
  isInvalid: false,
  className: undefined,
  showActiveBoxState: true
};
SelectableBox.Set = SelectableBoxSet;
export default SelectableBox;
//# sourceMappingURL=index.js.map