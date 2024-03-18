function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "name", "value", "defaultValue", "onChange", "type", "columns", "className", "ariaLabel", "ariaLabelledby"];
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
import { getInputType } from './utils';
import { requiredWhenNot } from '../utils/propTypes';
var INPUT_TYPES = ['radio', 'checkbox'];
var DEFAULT_COLUMNS_NUMBER = 2;
var SelectableBoxSet = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    name = _ref.name,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    onChange = _ref.onChange,
    type = _ref.type,
    columns = _ref.columns,
    className = _ref.className,
    ariaLabel = _ref.ariaLabel,
    ariaLabelledby = _ref.ariaLabelledby,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputType = getInputType('SelectableBoxSet', type);
  return /*#__PURE__*/React.createElement(inputType, _objectSpread({
    name: name,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    ref: ref,
    className: classNames('pgn__selectable_box-set', "pgn__selectable_box-set--".concat(columns || DEFAULT_COLUMNS_NUMBER), className),
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby
  }, props), children);
});
SelectableBoxSet.propTypes = {
  /** Specifies a name for the group of `SelectableBox`'es. */
  name: PropTypes.string.isRequired,
  /** Content of the `SelectableBoxSet`. */
  children: PropTypes.node,
  /** A function that receives event of the clicked `SelectableBox` and can be used to handle the value change. */
  onChange: PropTypes.func,
  /** Indicates selected `SelectableBox`'es. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /** Specifies default values for the `SelectableBox`'es. */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Indicates the input type: checkbox or radio. */
  type: PropTypes.oneOf(INPUT_TYPES),
  /**
   * Specifies number of `SelectableBox`'es in a row.
   *
   * Class that is responsible for the columns number: `pgn__selectable_box-set--{columns}`.
   * Max number of columns: `12`.
   */
  columns: PropTypes.number,
  /** A class that is be appended to the base element. */
  className: PropTypes.string,
  /**
   * The ID of the label for the `SelectableBoxSet`.
   *
   * An accessible label must be provided to the `SelectableBoxSet`.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * A label for the `SelectableBoxSet`.
   *
   * If not using `ariaLabelledby`, then `ariaLabel` must be provided */
  ariaLabel: requiredWhenNot(PropTypes.string, 'ariaLabelledby')
};
SelectableBoxSet.defaultProps = {
  children: undefined,
  onChange: function onChange() {},
  value: undefined,
  defaultValue: undefined,
  type: 'radio',
  columns: DEFAULT_COLUMNS_NUMBER,
  className: undefined,
  ariaLabelledby: undefined,
  ariaLabel: undefined
};
export default SelectableBoxSet;
//# sourceMappingURL=SelectableBoxSet.js.map