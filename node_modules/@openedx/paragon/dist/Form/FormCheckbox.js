function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["isIndeterminate"],
  _excluded2 = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid", "controlAs", "floatLabelLeft"];
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
import classNames from 'classnames';
import { useCheckboxSetContext } from './FormCheckboxSetContext';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormLabel from './FormLabel';
import FormControlFeedback from './FormControlFeedback';
var CheckboxControl = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var isIndeterminate = _ref.isIndeterminate,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useCheckboxSetContex = useCheckboxSetContext(),
    getCheckboxControlProps = _useCheckboxSetContex.getCheckboxControlProps,
    hasCheckboxSetProvider = _useCheckboxSetContex.hasCheckboxSetProvider;
  var defaultRef = React.useRef();
  var resolvedRef = ref || defaultRef;
  var _useFormGroupContext = useFormGroupContext(),
    getControlProps = _useFormGroupContext.getControlProps;
  var checkboxProps = getControlProps(_objectSpread(_objectSpread({}, props), {}, {
    className: classNames('pgn__form-checkbox-input', props.className)
  }));
  if (hasCheckboxSetProvider) {
    checkboxProps = getCheckboxControlProps(checkboxProps);
  }
  React.useEffect(function () {
    // this if(resolvedRef.current) prevents console errors in testing
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = isIndeterminate;
    }
  }, [resolvedRef, isIndeterminate]);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, checkboxProps, {
    ref: resolvedRef
  }));
});
CheckboxControl.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: PropTypes.bool,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string
};
CheckboxControl.defaultProps = {
  isIndeterminate: false,
  className: undefined
};
var FormCheckbox = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
    className = _ref2.className,
    controlClassName = _ref2.controlClassName,
    labelClassName = _ref2.labelClassName,
    description = _ref2.description,
    isInvalid = _ref2.isInvalid,
    isValid = _ref2.isValid,
    controlAs = _ref2.controlAs,
    floatLabelLeft = _ref2.floatLabelLeft,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var _useCheckboxSetContex2 = useCheckboxSetContext(),
    hasCheckboxSetProvider = _useCheckboxSetContex2.hasCheckboxSetProvider;
  var _useFormGroupContext2 = useFormGroupContext(),
    hasFormGroupProvider = _useFormGroupContext2.hasFormGroupProvider,
    useSetIsControlGroupEffect = _useFormGroupContext2.useSetIsControlGroupEffect,
    getControlProps = _useFormGroupContext2.getControlProps;
  useSetIsControlGroupEffect(true);
  var shouldActAsGroup = hasFormGroupProvider && !hasCheckboxSetProvider;
  var groupProps = shouldActAsGroup ? _objectSpread(_objectSpread({}, getControlProps({})), {}, {
    role: 'group'
  }) : {};
  var control = /*#__PURE__*/React.createElement(controlAs, _objectSpread(_objectSpread({}, props), {}, {
    className: controlClassName,
    ref: ref
  }));
  return /*#__PURE__*/React.createElement(FormGroupContextProvider, {
    controlId: props.id,
    isInvalid: isInvalid,
    isValid: isValid
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('pgn__form-checkbox', className, {
      'pgn__form-control-valid': isValid,
      'pgn__form-control-invalid': isInvalid,
      'pgn__form-control-disabled': props.disabled,
      'pgn__form-control-label-left': !!floatLabelLeft
    })
  }, groupProps), control, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormLabel, {
    className: labelClassName
  }, children), description && /*#__PURE__*/React.createElement(FormControlFeedback, {
    hasIcon: false
  }, description))));
});
FormCheckbox.propTypes = {
  /** Specifies id of the FormCheckbox component. */
  id: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies class name for control component. */
  controlClassName: PropTypes.string,
  /** Specifies class name for label component. */
  labelClassName: PropTypes.string,
  /** Specifies description to show under the checkbox. */
  description: PropTypes.node,
  /** Specifies whether to display checkbox in invalid state, this affects styling. */
  isInvalid: PropTypes.bool,
  /** Specifies whether to display checkbox in valid state, this affects styling. */
  isValid: PropTypes.bool,
  /** Specifies control element. */
  controlAs: PropTypes.elementType,
  /** Specifies whether the floating label should be aligned to the left. */
  floatLabelLeft: PropTypes.bool,
  /** Specifies whether the `FormCheckbox` is disabled. */
  disabled: PropTypes.bool
};
FormCheckbox.defaultProps = {
  id: undefined,
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false,
  controlAs: CheckboxControl,
  floatLabelLeft: false,
  disabled: false
};
export { CheckboxControl };
export default FormCheckbox;
//# sourceMappingURL=FormCheckbox.js.map