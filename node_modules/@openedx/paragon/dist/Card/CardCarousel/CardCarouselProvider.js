import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { OverflowScrollContext } from '../../OverflowScroll';
export var CardCarouselContext = /*#__PURE__*/createContext();
function CardCarouselProvider(_ref) {
  var columnSizes = _ref.columnSizes,
    hasInteractiveChildren = _ref.hasInteractiveChildren,
    canScrollHorizontal = _ref.canScrollHorizontal,
    children = _ref.children,
    CardCarouselControls = _ref.CardCarouselControls;
  var _useContext = useContext(OverflowScrollContext),
    overflowRef = _useContext.overflowRef,
    setOverflowRef = _useContext.setOverflowRef,
    isScrolledToStart = _useContext.isScrolledToStart,
    isScrolledToEnd = _useContext.isScrolledToEnd,
    scrollToPrevious = _useContext.scrollToPrevious,
    scrollToNext = _useContext.scrollToNext;
  var cardCarouselContextValue = useMemo(function () {
    return {
      overflowRef: overflowRef,
      setOverflowRef: setOverflowRef,
      columnSizes: columnSizes,
      hasInteractiveChildren: hasInteractiveChildren,
      canScrollHorizontal: canScrollHorizontal,
      isScrolledToStart: isScrolledToStart,
      isScrolledToEnd: isScrolledToEnd,
      scrollToPrevious: scrollToPrevious,
      scrollToNext: scrollToNext,
      CardCarouselControls: CardCarouselControls
    };
  }, [overflowRef, setOverflowRef, columnSizes, hasInteractiveChildren, canScrollHorizontal, isScrolledToStart, isScrolledToEnd, scrollToPrevious, scrollToNext, CardCarouselControls]);
  return /*#__PURE__*/React.createElement(CardCarouselContext.Provider, {
    value: cardCarouselContextValue
  }, children);
}
CardCarouselProvider.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  }),
  /** Whether the child `Card` components are interactive/focusable. If not, a `tabindex="0"` is
   * added to be a11y-compliant */
  hasInteractiveChildren: PropTypes.bool,
  /** Whether the `CardDeck` supports horizontal scrolling when there are overflow children */
  canScrollHorizontal: PropTypes.bool,
  /** Optional override for the default `CardCarouselControls` */
  CardCarouselControls: PropTypes.elementType
};
CardCarouselProvider.defaultProps = {
  columnSizes: {
    sm: 12,
    lg: 6,
    xl: 4
  },
  hasInteractiveChildren: false,
  canScrollHorizontal: true,
  CardCarouselControls: undefined
};
export default CardCarouselProvider;
//# sourceMappingURL=CardCarouselProvider.js.map