function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';
import { clearSelectionAction, setSelectAllRowsAllPagesAction, setSelectedRowsAction } from './data/actions';
import { getUnselectedPageRows, getRowIds } from './data/helpers';
function ControlledSelectionStatus(_ref) {
  var className = _ref.className,
    clearSelectionText = _ref.clearSelectionText;
  var _useContext = useContext(DataTableContext),
    itemCount = _useContext.itemCount,
    page = _useContext.page,
    _useContext$controlle = _slicedToArray(_useContext.controlledTableSelections, 2),
    _useContext$controlle2 = _useContext$controlle[0],
    selectedRows = _useContext$controlle2.selectedRows,
    isEntireTableSelected = _useContext$controlle2.isEntireTableSelected,
    dispatch = _useContext$controlle[1];
  useEffect(function () {
    if (isEntireTableSelected) {
      var selectedRowIds = getRowIds(selectedRows);
      var unselectedPageRows = getUnselectedPageRows(selectedRowIds, page);
      if (unselectedPageRows.length) {
        dispatch(setSelectedRowsAction(unselectedPageRows, itemCount));
      }
    }
  }, [isEntireTableSelected, selectedRows, itemCount, page, dispatch]);
  var numSelectedRows = isEntireTableSelected ? itemCount : selectedRows.length;
  var numSelectedRowsOnPage = (page || []).filter(function (r) {
    return r.isSelected;
  }).length;
  var selectionStatusProps = {
    className: className,
    numSelectedRows: numSelectedRows,
    numSelectedRowsOnPage: numSelectedRowsOnPage,
    clearSelectionText: clearSelectionText,
    onSelectAll: function onSelectAll() {
      return dispatch(setSelectAllRowsAllPagesAction());
    },
    onClear: function onClear() {
      return dispatch(clearSelectionAction());
    }
  };
  return /*#__PURE__*/React.createElement(BaseSelectionStatus, selectionStatusProps);
}
ControlledSelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: undefined
};
ControlledSelectionStatus.propTypes = {
  /** A class name to append to the base element */
  className: PropTypes.string,
  /** A text that appears on the `Clear selection` button, defaults to 'Clear Selection' */
  clearSelectionText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
export default ControlledSelectionStatus;
//# sourceMappingURL=ControlledSelectionStatus.js.map