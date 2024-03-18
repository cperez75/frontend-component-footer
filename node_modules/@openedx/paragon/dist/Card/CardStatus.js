var _excluded = ["className", "children", "variant", "icon", "title", "actions"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import Icon from '../Icon';
import CardContext from './CardContext';
var CardStatus = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    variant = _ref.variant,
    icon = _ref.icon,
    title = _ref.title,
    actions = _ref.actions,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(CardContext),
    isLoading = _useContext.isLoading;
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__card-status', className),
      "data-testid": "card-status-skeleton",
      ref: ref
    }, /*#__PURE__*/React.createElement(Skeleton, null));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('pgn__card-status', "pgn__card-status__".concat(variant), className),
    ref: ref
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-status__content"
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    className: "pgn__card-status__content-icon",
    src: icon
  }), /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-status__message-content"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-status__heading"
  }, title), children)), !!actions && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-status__actions"
  }, actions));
});
CardStatus.propTypes = {
  /** Specifies the content of the component. */
  children: PropTypes.node.isRequired,
  /** The class to append to the base element. */
  className: PropTypes.string,
  /** Icon that will be shown in the top-left corner. */
  icon: PropTypes.func,
  /** Specifies variant to use. */
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'warning']),
  /** Specifies title for the `Card.Status`. */
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Specifies any optional actions, e.g. button(s). */
  actions: PropTypes.node
};
CardStatus.defaultProps = {
  className: undefined,
  icon: undefined,
  variant: 'warning',
  title: undefined,
  actions: undefined
};
export default CardStatus;
//# sourceMappingURL=CardStatus.js.map