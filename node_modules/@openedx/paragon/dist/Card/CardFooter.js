import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';
var IS_LOADING_HEIGHT_VALUE = 18;
var CardFooter = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    isStacked = _ref.isStacked,
    textElement = _ref.textElement,
    skeletonHeight = _ref.skeletonHeight,
    skeletonWidth = _ref.skeletonWidth,
    orientation = _ref.orientation;
  var _useContext = useContext(CardContext),
    cardOrientation = _useContext.orientation,
    isLoading = _useContext.isLoading;
  var footerOrientation = orientation || cardOrientation;
  var wrapperClassName = "pgn__card-footer ".concat(footerOrientation).concat(isStacked ? '-stacked' : '');
  var textElementClassName = "pgn__card-footer-text ".concat(footerOrientation).concat(isStacked ? '-stacked' : '');
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames(className, wrapperClassName)
    }, /*#__PURE__*/React.createElement(Skeleton, {
      containerClassName: "pgn__card-footer-loader",
      height: skeletonHeight,
      width: skeletonWidth
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, wrapperClassName),
    ref: ref
  }, textElement && /*#__PURE__*/React.createElement("div", {
    className: textElementClassName
  }, textElement), children);
});
CardFooter.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Optional node to display near actions. Should be either a plain text or an element containing text (e.g. link). */
  textElement: PropTypes.node,
  /** Specifies whether to use stacked variant. */
  isStacked: PropTypes.bool,
  /** Specifies which orientation to use. This prop will override context value if provided. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: PropTypes.number
};
CardFooter.defaultProps = {
  children: null,
  className: undefined,
  textElement: undefined,
  isStacked: false,
  orientation: undefined,
  skeletonHeight: IS_LOADING_HEIGHT_VALUE,
  skeletonWidth: undefined
};
export default CardFooter;
//# sourceMappingURL=CardFooter.js.map