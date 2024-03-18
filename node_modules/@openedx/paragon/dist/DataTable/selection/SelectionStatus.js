import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from '../DataTableContext';
import BaseSelectionStatus from './BaseSelectionStatus';
import { useRows } from '../hooks';
function SelectionStatus(_ref) {
  var className = _ref.className,
    clearSelectionText = _ref.clearSelectionText;
  var _useContext = useContext(DataTableContext),
    toggleAllRowsSelected = _useContext.toggleAllRowsSelected,
    state = _useContext.state;
  var _useRows = useRows(),
    displayRows = _useRows.displayRows;
  var selectedRowIds = state.selectedRowIds;
  var numSelectedRows = Object.keys(selectedRowIds || {}).length;
  var numSelectedRowsOnPage = displayRows.filter(function (r) {
    return r.isSelected;
  }).length;
  var selectionStatusProps = {
    className: className,
    numSelectedRows: numSelectedRows,
    numSelectedRowsOnPage: numSelectedRowsOnPage,
    clearSelectionText: clearSelectionText,
    onSelectAll: function onSelectAll() {
      return toggleAllRowsSelected(true);
    },
    onClear: function onClear() {
      return toggleAllRowsSelected(false);
    }
  };
  return /*#__PURE__*/React.createElement(BaseSelectionStatus, selectionStatusProps);
}
SelectionStatus.propTypes = {
  /** A class name to append to the base element */
  className: PropTypes.string,
  /** A text that appears on the `Clear selection` button, defaults to 'Clear Selection' */
  clearSelectionText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
SelectionStatus.defaultProps = {
  className: undefined,
  clearSelectionText: undefined
};
export default SelectionStatus;
//# sourceMappingURL=SelectionStatus.js.map