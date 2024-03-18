import React, { useContext, isValidElement } from 'react';
import PropTypes from 'prop-types';
import CardCarouselTitle from './CardCarouselTitle';
import CardCarouselSubtitle from './CardCarouselSubtitle';
import DefaultCardCarouselControls from './CardCarouselControls';
import { CardCarouselContext } from './CardCarouselProvider';
var getFormattedTitle = function getFormattedTitle(title) {
  if (!title) {
    return null;
  }
  if ( /*#__PURE__*/isValidElement(title)) {
    return title;
  }
  return /*#__PURE__*/React.createElement(CardCarouselTitle, null, title);
};
var getFormattedSubtitle = function getFormattedSubtitle(subtitle) {
  if (!subtitle) {
    return null;
  }
  if ( /*#__PURE__*/isValidElement(subtitle)) {
    return subtitle;
  }
  return /*#__PURE__*/React.createElement(CardCarouselSubtitle, null, subtitle);
};
function CardCarouselHeader(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle;
  var _useContext = useContext(CardCarouselContext),
    customCardCarouselControls = _useContext.CardCarouselControls;
  var CardCarouselControls = customCardCarouselControls || DefaultCardCarouselControls;
  var carouselTitle = getFormattedTitle(title);
  var carouselSubtitle = getFormattedSubtitle(subtitle);
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__card-carousel-header"
  }, /*#__PURE__*/React.createElement("div", null, carouselTitle, carouselSubtitle), /*#__PURE__*/React.createElement(CardCarouselControls, null));
}
CardCarouselHeader.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node
};
CardCarouselHeader.defaultProps = {
  title: undefined,
  subtitle: undefined
};
export default CardCarouselHeader;
//# sourceMappingURL=CardCarouselHeader.js.map