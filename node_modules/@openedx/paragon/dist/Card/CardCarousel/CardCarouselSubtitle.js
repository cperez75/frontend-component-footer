import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
function CardCarouselSubtitle(_ref) {
  var children = _ref.children,
    as = _ref.as,
    className = _ref.className;
  var Component = as || 'p';
  return /*#__PURE__*/React.createElement(Component, {
    className: classNames('pgn__card-carousel-subtitle', className)
  }, children);
}
CardCarouselSubtitle.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies the base element */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /** A class name to append to the base element. */
  className: PropTypes.string
};
CardCarouselSubtitle.defaultProps = {
  as: undefined,
  className: undefined
};
export default CardCarouselSubtitle;
//# sourceMappingURL=CardCarouselSubtitle.js.map