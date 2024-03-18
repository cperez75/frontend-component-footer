import React, { useContext } from 'react';
import classNames from 'classnames';
import { PAGINATION_BUTTON_ICON_BUTTON_NEXT_ALT } from '../constants';
import PaginationContext from '../PaginationContext';
import Button from '../../Button';
import IconButton from '../../IconButton';
import Icon from '../../Icon';
export default function NextPageButton() {
  var _useContext = useContext(PaginationContext),
    invertColors = _useContext.invertColors,
    getPageButtonVariant = _useContext.getPageButtonVariant,
    isDefaultVariant = _useContext.isDefaultVariant,
    isOnLastPage = _useContext.isOnLastPage,
    getAriaLabelForNextButton = _useContext.getAriaLabelForNextButton,
    handleNextButtonClick = _useContext.handleNextButtonClick,
    getNextButtonIcon = _useContext.getNextButtonIcon,
    buttonLabels = _useContext.buttonLabels,
    nextButtonRef = _useContext.nextButtonRef;
  var isDisabled = isOnLastPage();
  var icon = getNextButtonIcon();
  if (isDefaultVariant()) {
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('page-item', {
        disabled: isDisabled
      })
    }, /*#__PURE__*/React.createElement(Button, {
      className: "previous page-link",
      variant: getPageButtonVariant(),
      "aria-label": getAriaLabelForNextButton(),
      tabIndex: isDisabled ? '-1' : undefined,
      onClick: handleNextButtonClick,
      ref: nextButtonRef,
      disabled: isDisabled,
      iconAfter: icon
    }, buttonLabels.next));
  }
  if (!icon) {
    return null;
  }
  return /*#__PURE__*/React.createElement("li", {
    className: classNames('page-item', {
      disabled: isDisabled
    })
  }, /*#__PURE__*/React.createElement(IconButton, {
    invertColors: invertColors,
    src: getNextButtonIcon(),
    iconAs: Icon,
    className: "previous page-link",
    "aria-label": getAriaLabelForNextButton(),
    tabIndex: isDisabled ? '-1' : undefined,
    onClick: handleNextButtonClick,
    ref: nextButtonRef,
    disabled: isDisabled,
    alt: PAGINATION_BUTTON_ICON_BUTTON_NEXT_ALT
  }));
}
//# sourceMappingURL=NextPageButton.js.map