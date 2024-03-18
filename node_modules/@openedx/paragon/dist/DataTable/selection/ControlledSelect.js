function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CheckboxControl } from '../../Form';
import DataTableContext from '../DataTableContext';
import useConvertIndeterminateProp from '../utils/useConvertIndeterminateProp';
import { deleteSelectedRowAction, addSelectedRowAction } from './data/actions';
function ControlledSelect(_ref) {
  var row = _ref.row;
  var _useContext = useContext(DataTableContext),
    itemCount = _useContext.itemCount,
    _useContext$controlle = _slicedToArray(_useContext.controlledTableSelections, 2),
    dispatch = _useContext$controlle[1];
  var toggleSelected = useCallback(function () {
    if (row.isSelected) {
      dispatch(deleteSelectedRowAction(row.id));
    } else {
      dispatch(addSelectedRowAction(row, itemCount));
    }
  }, [itemCount, row, dispatch]);
  var updatedProps = useConvertIndeterminateProp(row.getToggleRowSelectedProps());
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table__controlled-select"
  }, /*#__PURE__*/React.createElement(CheckboxControl, _extends({}, updatedProps, {
    onChange: toggleSelected
  })));
}
ControlledSelect.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    getToggleRowSelectedProps: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  }).isRequired
};
export default ControlledSelect;
//# sourceMappingURL=ControlledSelect.js.map