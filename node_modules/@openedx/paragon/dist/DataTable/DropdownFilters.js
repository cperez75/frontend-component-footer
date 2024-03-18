function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useContext, useMemo } from 'react';
import DataTableContext from './DataTableContext';
import { DropdownButton } from '../Dropdown';
import useWindowSize from '../hooks/useWindowSize';
import breakpoints from '../utils/breakpoints';

/** The first filter will be as an input, additional filters will be available in a dropdown.  */
function DropdownFilters() {
  var _useWindowSize = useWindowSize(),
    width = _useWindowSize.width;
  var _useContext = useContext(DataTableContext),
    columns = _useContext.columns,
    numBreakoutFilters = _useContext.numBreakoutFilters;
  var _useMemo = useMemo(function () {
      if (!columns) {
        return [[], []];
      }
      var availableFilters = columns.filter(function (column) {
        return column.canFilter;
      });
      if (width < breakpoints.small.minWidth) {
        return [[], availableFilters];
      }
      var numberOfBreakoutFilters = numBreakoutFilters || 1;
      var boFilters = availableFilters.slice(0, numberOfBreakoutFilters);
      var dropdownFilters = availableFilters.slice(numberOfBreakoutFilters);
      return [boFilters, dropdownFilters];
    }, [columns, width, numBreakoutFilters]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    breakoutFilters = _useMemo2[0],
    otherFilters = _useMemo2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-filters"
  }, breakoutFilters.length > 0 && breakoutFilters.map(function (column) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pgn__data-table-filters-breakout-filter",
      key: column.Header
    }, column.render('Filter'));
  }), otherFilters.length > 0 && /*#__PURE__*/React.createElement(DropdownButton, {
    variant: "outline-primary",
    id: "table-filters-dropdown",
    title: "Filters"
  }, otherFilters.map(function (column) {
    return /*#__PURE__*/React.createElement("div", {
      key: column.Header,
      className: "pgn__data-table-filters-dropdown-item"
    }, column.render('Filter'));
  })));
}
export default DropdownFilters;
//# sourceMappingURL=DropdownFilters.js.map