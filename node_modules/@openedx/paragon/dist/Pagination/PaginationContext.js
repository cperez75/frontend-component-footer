function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { PAGINATION_VARIANTS } from './constants';
import getPaginationRange from './getPaginationRange';
var PaginationContext = /*#__PURE__*/createContext({});
function PaginationContextProvider(_ref) {
  var children = _ref.children,
    onPageSelect = _ref.onPageSelect,
    invertColors = _ref.invertColors,
    maxPagesDisplayed = _ref.maxPagesDisplayed,
    buttonLabels = _ref.buttonLabels,
    icons = _ref.icons,
    variant = _ref.variant,
    pageCount = _ref.pageCount,
    controlledCurrentPage = _ref.currentPage,
    initialPage = _ref.initialPage;
  var _useState = useState(controlledCurrentPage || initialPage),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    pageButtonSelected = _useState4[0],
    setPageButtonSelected = _useState4[1];
  var previousButtonRef = useRef(null);
  var nextButtonRef = useRef(null);
  var pageButtonRef = useRef([]);
  useEffect(function () {
    var currentPageRef = pageButtonRef[currentPage];
    if (currentPageRef && pageButtonSelected) {
      currentPageRef.focus();
      setPageButtonSelected(false);
    }
  }, [currentPage, pageButtonSelected]);
  var isUncontrolled = function isUncontrolled() {
    return controlledCurrentPage === undefined;
  };
  var isPageButtonActive = function isPageButtonActive(page) {
    return page === currentPage;
  };
  var isOnFirstPage = function isOnFirstPage() {
    return currentPage === 1 || pageCount === 0;
  };
  var isOnLastPage = function isOnLastPage() {
    return currentPage === pageCount || pageCount === 0;
  };
  var isDefaultVariant = function isDefaultVariant() {
    return variant === PAGINATION_VARIANTS["default"];
  };
  if (!isUncontrolled() && controlledCurrentPage !== currentPage) {
    setCurrentPage(controlledCurrentPage);
  }
  var getPageButtonRefHandler = function getPageButtonRefHandler(pageNum) {
    return function (element) {
      pageButtonRef.current[pageNum] = element;
    };
  };
  var handlePageSelect = function handlePageSelect(page) {
    if (page !== currentPage) {
      if (isUncontrolled()) {
        setCurrentPage(page);
      }
      setPageButtonSelected(true);
      onPageSelect(page);
    }
  };
  var handlePreviousButtonClick = function handlePreviousButtonClick() {
    onPageSelect(currentPage - 1);
    if (currentPage === 2) {
      nextButtonRef.current.focus();
    }
    if (isUncontrolled()) {
      setCurrentPage(function (prevState) {
        return prevState - 1;
      });
    }
  };
  var handleNextButtonClick = function handleNextButtonClick() {
    onPageSelect(currentPage + 1);
    if (currentPage === pageCount - 1) {
      previousButtonRef.current.focus();
    }
    if (isUncontrolled()) {
      setCurrentPage(function (prevState) {
        return prevState + 1;
      });
    }
  };
  var getAriaLabelForPreviousButton = function getAriaLabelForPreviousButton() {
    var ariaLabel = "".concat(buttonLabels.previous);
    if (!isOnFirstPage()) {
      ariaLabel += ", ".concat(buttonLabels.page, " ").concat(currentPage - 1);
    }
    return ariaLabel;
  };
  var getAriaLabelForNextButton = function getAriaLabelForNextButton() {
    var ariaLabel = "".concat(buttonLabels.next);
    if (!isOnLastPage()) {
      ariaLabel += ", ".concat(buttonLabels.page, " ").concat(currentPage + 1);
    }
    return ariaLabel;
  };
  var getAriaLabelForPageButton = function getAriaLabelForPageButton(page) {
    var ariaLabel = "".concat(buttonLabels.page, " ").concat(page);
    if (isPageButtonActive(page)) {
      ariaLabel += ", ".concat(buttonLabels.currentPage);
    }
    return ariaLabel;
  };
  var getAriaLabelForPageOfCountButton = function getAriaLabelForPageOfCountButton() {
    return "".concat(buttonLabels.page, " ").concat(currentPage, ", ").concat(buttonLabels.currentPage, ", ").concat(buttonLabels.pageOfCount, " ").concat(pageCount);
  };
  var getScreenReaderText = function getScreenReaderText() {
    return "".concat(buttonLabels.page, " ").concat(currentPage, ", ").concat(buttonLabels.currentPage, ", ").concat(buttonLabels.pageOfCount, " ").concat(pageCount);
  };
  var getPageOfText = function getPageOfText() {
    return "".concat(currentPage, " ").concat(buttonLabels.pageOfCount, " ").concat(pageCount);
  };
  var getPageButtonVariant = function getPageButtonVariant(page) {
    var buttonVariant = isPageButtonActive(page) ? 'primary' : 'tertiary';
    if (invertColors) {
      buttonVariant = "inverse-".concat(buttonVariant);
    }
    return buttonVariant;
  };
  var getNextButtonIcon = function getNextButtonIcon() {
    return icons.rightIcon;
  };
  var getPrevButtonIcon = function getPrevButtonIcon() {
    return icons.leftIcon;
  };
  var displayPages = getPaginationRange({
    currentIndex: currentPage,
    count: pageCount,
    length: maxPagesDisplayed,
    requireFirstAndLastPages: true
  });
  var value = {
    invertColors: invertColors,
    displayPages: displayPages,
    pageCount: pageCount,
    buttonLabels: buttonLabels,
    previousButtonRef: previousButtonRef,
    nextButtonRef: nextButtonRef,
    pageButtonRef: pageButtonRef,
    getPrevButtonIcon: getPrevButtonIcon,
    getNextButtonIcon: getNextButtonIcon,
    getAriaLabelForNextButton: getAriaLabelForNextButton,
    getAriaLabelForPageButton: getAriaLabelForPageButton,
    getAriaLabelForPreviousButton: getAriaLabelForPreviousButton,
    getAriaLabelForPageOfCountButton: getAriaLabelForPageOfCountButton,
    getPageButtonVariant: getPageButtonVariant,
    handlePreviousButtonClick: handlePreviousButtonClick,
    handleNextButtonClick: handleNextButtonClick,
    handlePageSelect: handlePageSelect,
    isOnFirstPage: isOnFirstPage,
    isOnLastPage: isOnLastPage,
    isPageButtonActive: isPageButtonActive,
    isDefaultVariant: isDefaultVariant,
    getScreenReaderText: getScreenReaderText,
    getPageOfText: getPageOfText,
    getPageButtonRefHandler: getPageButtonRefHandler
  };
  return /*#__PURE__*/React.createElement(PaginationContext.Provider, {
    value: value
  }, children);
}
PaginationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onPageSelect: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  buttonLabels: PropTypes.shape({
    previous: PropTypes.string,
    next: PropTypes.string,
    page: PropTypes.string,
    currentPage: PropTypes.string,
    pageOfCount: PropTypes.string
  }).isRequired,
  currentPage: PropTypes.number,
  maxPagesDisplayed: PropTypes.number.isRequired,
  icons: PropTypes.shape({
    leftIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    rightIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  }).isRequired,
  variant: PropTypes.oneOf(Object.values(PAGINATION_VARIANTS)).isRequired,
  invertColors: PropTypes.bool.isRequired,
  initialPage: PropTypes.number.isRequired
};
PaginationContextProvider.defaultProps = {
  currentPage: undefined
};
export { PaginationContextProvider };
export default PaginationContext;
//# sourceMappingURL=PaginationContext.js.map