function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useContext, useState } from 'react';
import { GridView, ListView } from '../../icons';
import DataTableContext from './DataTableContext';
import Icon from '../Icon';
import IconButtonToggle from '../IconButtonToggle';
import { IconButtonWithTooltip } from '../IconButton';
export var DATA_VIEW_TOGGLE_VALUES = {
  card: {
    value: 'card',
    alt: 'Card',
    tooltipContent: 'Card view'
  },
  list: {
    value: 'list',
    alt: 'List',
    tooltipContent: 'List view'
  }
};
function DataViewToggle() {
  var _useContext = useContext(DataTableContext),
    _useContext$dataViewT = _useContext.dataViewToggleOptions,
    isDataViewToggleEnabled = _useContext$dataViewT.isDataViewToggleEnabled,
    onDataViewToggle = _useContext$dataViewT.onDataViewToggle,
    defaultActiveStateValue = _useContext$dataViewT.defaultActiveStateValue;
  var _useState = useState(defaultActiveStateValue || 'card'),
    _useState2 = _slicedToArray(_useState, 2),
    activeValue = _useState2[0],
    setActiveValue = _useState2[1];
  if (!isDataViewToggleEnabled) {
    return null;
  }
  var handleOnChange = function handleOnChange(value) {
    setActiveValue(value);
    if (onDataViewToggle) {
      onDataViewToggle(value);
    }
  };
  var _DATA_VIEW_TOGGLE_VAL = DATA_VIEW_TOGGLE_VALUES.card,
    cardValue = _DATA_VIEW_TOGGLE_VAL.value,
    cardAlt = _DATA_VIEW_TOGGLE_VAL.alt,
    cardTooltip = _DATA_VIEW_TOGGLE_VAL.tooltipContent;
  var _DATA_VIEW_TOGGLE_VAL2 = DATA_VIEW_TOGGLE_VALUES.list,
    listValue = _DATA_VIEW_TOGGLE_VAL2.value,
    listAlt = _DATA_VIEW_TOGGLE_VAL2.alt,
    listTooltip = _DATA_VIEW_TOGGLE_VAL2.tooltipContent;
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    className: "pgn__data-table-dataview-toggle"
  }, /*#__PURE__*/React.createElement(IconButtonToggle, {
    activeValue: activeValue,
    onChange: handleOnChange
  }, /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: cardTooltip,
    value: cardValue,
    src: GridView,
    iconAs: Icon,
    alt: cardAlt
  }), /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: listTooltip,
    value: listValue,
    src: ListView,
    iconAs: Icon,
    alt: listAlt
  })));
}
export default DataViewToggle;
//# sourceMappingURL=DataViewToggle.js.map