import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button';
import PaginationContext from '../PaginationContext';
export default function PageButton(_ref) {
  var pageNum = _ref.pageNum;
  var _useContext = useContext(PaginationContext),
    isPageButtonActive = _useContext.isPageButtonActive,
    getAriaLabelForPageButton = _useContext.getAriaLabelForPageButton,
    getPageButtonVariant = _useContext.getPageButtonVariant,
    handlePageSelect = _useContext.handlePageSelect,
    getPageButtonRefHandler = _useContext.getPageButtonRefHandler;
  return /*#__PURE__*/React.createElement("li", {
    className: classNames('page-item', {
      active: isPageButtonActive(pageNum)
    })
  }, /*#__PURE__*/React.createElement(Button, {
    className: "page-link",
    "aria-label": getAriaLabelForPageButton(pageNum),
    variant: getPageButtonVariant(pageNum),
    ref: getPageButtonRefHandler(pageNum),
    onClick: function onClick() {
      return handlePageSelect(pageNum);
    }
  }, pageNum));
}
PageButton.propTypes = {
  pageNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
//# sourceMappingURL=PageButton.js.map