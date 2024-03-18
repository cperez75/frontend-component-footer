import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';
var SKELETON_HEIGHT_VALUE = 100;
var CardSection = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    title = _ref.title,
    actions = _ref.actions,
    muted = _ref.muted,
    skeletonHeight = _ref.skeletonHeight,
    skeletonWidth = _ref.skeletonWidth;
  var _useContext = useContext(CardContext),
    isLoading = _useContext.isLoading;
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__card-section', className, {
        'is-muted': muted
      })
    }, /*#__PURE__*/React.createElement(Skeleton, {
      containerClassName: "pgn__card-section-loader",
      height: skeletonHeight,
      width: skeletonWidth
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('pgn__card-section', className, {
      'is-muted': muted
    }),
    ref: ref
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-section-title"
  }, title), children, actions && /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-section-actions"
  }, actions));
});
CardSection.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies title of the `Section`. */
  title: PropTypes.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: PropTypes.node,
  /** Specifies whether to display `Section` with muted styling. */
  muted: PropTypes.bool,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: PropTypes.number
};
CardSection.defaultProps = {
  children: null,
  className: undefined,
  title: undefined,
  actions: undefined,
  muted: false,
  skeletonHeight: SKELETON_HEIGHT_VALUE,
  skeletonWidth: undefined
};
export default CardSection;
//# sourceMappingURL=CardSection.js.map