function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import React, { useContext } from 'react';
import PaginationContext from '../PaginationContext';
import Dropdown from '../../Dropdown';
export default function PaginationDropdown() {
  var _useContext = useContext(PaginationContext),
    getPageOfText = _useContext.getPageOfText,
    pageCount = _useContext.pageCount,
    handlePageSelect = _useContext.handlePageSelect,
    getPageButtonVariant = _useContext.getPageButtonVariant;
  if (pageCount <= 1) {
    return null;
  }
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Dropdown, null, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: getPageButtonVariant(),
    id: "Pagination dropdown"
  }, getPageOfText()), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    className: "pagination-reduced-dropdown-menu"
  }, _toConsumableArray(Array(pageCount).keys()).map(function (pageNum) {
    return /*#__PURE__*/React.createElement(Dropdown.Item, {
      onClick: function onClick() {
        return handlePageSelect(pageNum + 1);
      },
      key: pageNum,
      "data-testid": "pagination-dropdown-item"
    }, pageNum + 1);
  }))));
}
//# sourceMappingURL=PaginationDropdown.js.map