import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardDeck from '../CardDeck';
import { CardCarouselContext } from './CardCarouselProvider';
function CardCarouselItems(_ref) {
  var children = _ref.children;
  var _useContext = useContext(CardCarouselContext),
    columnSizes = _useContext.columnSizes,
    hasInteractiveChildren = _useContext.hasInteractiveChildren,
    canScrollHorizontal = _useContext.canScrollHorizontal,
    setOverflowRef = _useContext.setOverflowRef;
  return /*#__PURE__*/React.createElement(CardDeck, {
    ref: setOverflowRef,
    columnSizes: columnSizes,
    hasInteractiveChildren: hasInteractiveChildren,
    canScrollHorizontal: canScrollHorizontal,
    hasOverflowScrollItems: true
  }, children);
}
CardCarouselItems.propTypes = {
  children: PropTypes.node.isRequired
};
export default CardCarouselItems;
//# sourceMappingURL=CardCarouselItems.js.map