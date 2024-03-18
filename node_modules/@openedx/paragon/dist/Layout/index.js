function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
var COL_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'];
var SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
var LayoutElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref
  }, props));
});
var Layout = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var childrenLength = children.length;
  var isValidDimensions = function isValidDimensions(dataList, validLength) {
    return !dataList || dataList.length === validLength;
  };
  var errors = {};
  var layout = React.Children.map(children, function (child, index) {
    var newProps = _objectSpread({}, child.props);
    SIZES.forEach(function (size) {
      var sizeProps = props[size];
      var _ref2 = sizeProps && sizeProps[index] || {},
        _ref2$span = _ref2.span,
        span = _ref2$span === void 0 ? 0 : _ref2$span,
        _ref2$offset = _ref2.offset,
        offset = _ref2$offset === void 0 ? 0 : _ref2$offset;
      if (errors[size] === undefined) {
        errors[size] = false;
        if (!isValidDimensions(sizeProps, childrenLength)) {
          errors[size] = "".concat(size, " prop accepts array which length must be equal to the number of children.");
        }
      }
      newProps[size] = {
        span: span,
        offset: offset
      };
    });
    newProps.ref = child.ref;
    return /*#__PURE__*/React.createElement(Col, newProps, child.props.children);
  });
  Object.keys(errors).forEach(function (breakpoint) {
    if (errors[breakpoint]) {
      // eslint-disable-next-line no-console
      console.error(errors[breakpoint]);
    }
  });
  return /*#__PURE__*/React.createElement(Row, {
    ref: ref
  }, layout);
});
Layout.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES)
  })),
  sm: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES)
  })),
  md: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES)
  })),
  lg: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES)
  })),
  xl: PropTypes.arrayOf(PropTypes.shape({
    span: PropTypes.oneOf(COL_VALUES).isRequired,
    offset: PropTypes.oneOf(COL_VALUES)
  }))
};
var sizeDefaultProps = {
  span: [],
  offset: []
};
SIZES.forEach(function (size) {
  // eslint-disable-next-line react/default-props-match-prop-types
  Layout.defaultProps[size] = sizeDefaultProps;
});
export { Col, Row };
Layout.Element = LayoutElement;
export default Layout;
//# sourceMappingURL=index.js.map