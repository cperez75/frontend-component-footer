function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../Input';
import { FormControl } from '../Form';
var propTypes = {
  /** Id of the form input that the validation is for */
  "for": PropTypes.string.isRequired,
  /** Additional classnames for this component */
  className: PropTypes.string,
  /** Determines if invalid styles / message will be shown */
  invalid: PropTypes.bool,
  /** Determines if invalid styles / message will be shown */
  valid: PropTypes.bool,
  /** Message to display on valid input */
  validMessage: PropTypes.node,
  /** Message to display on invalid input */
  invalidMessage: PropTypes.node,
  /** Help text for the form input */
  helpText: PropTypes.node,
  /** Specifies contents of the component. */
  children: PropTypes.node
};
var defaultProps = {
  invalid: undefined,
  valid: undefined,
  validMessage: undefined,
  invalidMessage: undefined,
  helpText: undefined,
  children: undefined,
  className: undefined
};
function ValidationFormGroup(props) {
  var className = props.className,
    invalidMessage = props.invalidMessage,
    invalid = props.invalid,
    valid = props.valid,
    validMessage = props.validMessage,
    helpText = props.helpText,
    id = props["for"],
    children = props.children;
  var renderChildren = function renderChildren() {
    return React.Children.map(children, function (child) {
      var _classNames;
      // Any non-user input element should pass through unmodified
      if (['input', 'textarea', 'select', Input, FormControl].indexOf(child.type) === -1) {
        return child;
      }

      // Add validation class names and describedby values to input element
      return /*#__PURE__*/React.cloneElement(child, {
        className: classNames(child.props.className, {
          'is-invalid': invalid,
          'is-valid': valid
        }),
        // This is a non-standard use of the classNames package, but it's exactly the same use case.
        'aria-describedby': classNames(child.props['aria-describedby'], (_classNames = {}, _defineProperty(_classNames, "".concat(id, "-help-text"), Boolean(helpText)), _defineProperty(_classNames, "".concat(id, "-invalid-feedback"), invalid && invalidMessage), _defineProperty(_classNames, "".concat(id, "-valid-feedback"), valid && validMessage), _classNames))
      });
    });
  };
  var renderHelpText = function renderHelpText(text) {
    if (!text) {
      return null;
    }
    return /*#__PURE__*/React.createElement("small", {
      id: "".concat(id, "-help-text"),
      className: "form-text text-muted"
    }, text);
  };

  /**
   * The red text conveys semantic emphasis using color and font weight. For WCAG 2.1, the
   * semantics need to be exposed programmatically as well. To do this, we use <strong/>
   * elements and attach the formatting classes to them.
   */
  var renderInvalidFeedback = function renderInvalidFeedback(message) {
    if (!message) {
      return null;
    }
    return /*#__PURE__*/React.createElement("strong", {
      id: "".concat(id, "-invalid-feedback"),
      className: "invalid-feedback"
    }, message);
  };
  var renderValidFeedback = function renderValidFeedback(message) {
    if (!message) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "valid-feedback",
      id: "".concat(id, "-valid-feedback")
    }, message);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('form-group', className),
    "data-testid": "validation-form-group"
  }, renderChildren(), renderHelpText(helpText), renderInvalidFeedback(invalidMessage), renderValidFeedback(validMessage));
}
ValidationFormGroup.propTypes = propTypes;
ValidationFormGroup.defaultProps = defaultProps;
export default ValidationFormGroup;
//# sourceMappingURL=index.js.map