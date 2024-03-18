import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';
var SKELETON_HEIGHT_VALUE = 20;
var CardHeader = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var actions = _ref.actions,
    className = _ref.className,
    size = _ref.size,
    subtitle = _ref.subtitle,
    title = _ref.title,
    skeletonHeight = _ref.skeletonHeight,
    skeletonWidth = _ref.skeletonWidth;
  var _useContext = useContext(CardContext),
    isLoading = _useContext.isLoading;
  var cloneActions = useCallback(function (Action) {
    if ( /*#__PURE__*/React.isValidElement(Action)) {
      var children = Action.props.children;
      var addtlActionProps = {
        size: size,
        children: Array.isArray(children) ? children.map(cloneActions) : cloneActions(children)
      };
      return /*#__PURE__*/React.cloneElement(Action, addtlActionProps);
    }
    return Action;
  }, [size]);
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__card-header', className)
    }, /*#__PURE__*/React.createElement(Skeleton, {
      containerClassName: "pgn__card-header-loader",
      height: skeletonHeight,
      width: skeletonWidth
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__card-header', className),
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-header-content"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-header-title-".concat(size)
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-header-subtitle-".concat(size)
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-header-actions"
  }, size !== 'md' ? cloneActions(actions) : actions));
});
CardHeader.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: PropTypes.node,
  /** The class name for the CardHeader component */
  className: PropTypes.string,
  /** The title for the CardHeader component */
  title: PropTypes.node,
  /** The size of the CardHeader component */
  size: PropTypes.oneOf(['sm', 'md']),
  /** The subtitle of the CardHeader component */
  subtitle: PropTypes.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: PropTypes.number
};
CardHeader.defaultProps = {
  actions: null,
  className: null,
  size: 'md',
  title: null,
  subtitle: null,
  skeletonHeight: SKELETON_HEIGHT_VALUE,
  skeletonWidth: null
};
export default CardHeader;
//# sourceMappingURL=CardHeader.js.map