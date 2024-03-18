import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Button from '../../Button';
import DataTableContext from '../DataTableContext';
import { SELECT_ALL_TEST_ID, CLEAR_SELECTION_TEST_ID } from './data/constants';
function BaseSelectionStatus(_ref) {
  var _state$filters;
  var className = _ref.className,
    clearSelectionText = _ref.clearSelectionText,
    numSelectedRows = _ref.numSelectedRows,
    numSelectedRowsOnPage = _ref.numSelectedRowsOnPage,
    onSelectAll = _ref.onSelectAll,
    onClear = _ref.onClear,
    selectAllText = _ref.selectAllText,
    allSelectedText = _ref.allSelectedText,
    selectedText = _ref.selectedText;
  var _useContext = useContext(DataTableContext),
    itemCount = _useContext.itemCount,
    filteredRows = _useContext.filteredRows,
    isPaginated = _useContext.isPaginated,
    state = _useContext.state,
    isSelectable = _useContext.isSelectable,
    maxSelectedRows = _useContext.maxSelectedRows,
    manualFilters = _useContext.manualFilters;
  var hasAppliedFilters = (state === null || state === void 0 ? void 0 : (_state$filters = state.filters) === null || _state$filters === void 0 ? void 0 : _state$filters.length) > 0;
  var isAllRowsSelected = numSelectedRows === itemCount;
  var filteredItems = manualFilters ? itemCount : (filteredRows === null || filteredRows === void 0 ? void 0 : filteredRows.length) || itemCount;
  var hasMaxSelectedRows = isSelectable && maxSelectedRows;
  var intlAllSelectedText = allSelectedText || /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.BaseSelectionStatus.allSelectedText",
    defaultMessage: "All {numSelectedRows} selected",
    description: "Text for all selected label",
    values: {
      numSelectedRows: numSelectedRows
    }
  });
  var defaultSelectedText = isPaginated || hasAppliedFilters ? /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.BaseSelectionStatus.selectedTextPaginated",
    defaultMessage: "{numSelectedRows} selected ({numSelectedRowsOnPage} shown below)",
    description: "Text for selected label when table is paginated",
    values: {
      numSelectedRows: numSelectedRows,
      numSelectedRowsOnPage: numSelectedRowsOnPage
    }
  }) : /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.BaseSelectionStatus.selectedText",
    defaultMessage: "{numSelectedRows} selected",
    description: "Text for selected label",
    values: {
      numSelectedRows: numSelectedRows
    }
  });
  var intlSelectedText = selectedText || defaultSelectedText;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    "data-testid": "selection-status-component"
  }, /*#__PURE__*/React.createElement("span", {
    "data-testid": "selection-status"
  }, isAllRowsSelected ? intlAllSelectedText : intlSelectedText), !isAllRowsSelected && !hasMaxSelectedRows && /*#__PURE__*/React.createElement(Button, {
    "data-testid": SELECT_ALL_TEST_ID,
    variant: "link",
    size: "inline",
    onClick: onSelectAll
  }, selectAllText || /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.BaseSelectionStatus.selectAllText",
    defaultMessage: "Select all {itemCount}",
    description: "A label for select all button.",
    values: {
      itemCount: filteredItems
    }
  })), numSelectedRows > 0 && /*#__PURE__*/React.createElement(Button, {
    "data-testid": CLEAR_SELECTION_TEST_ID,
    variant: "link",
    size: "inline",
    onClick: onClear
  }, clearSelectionText || /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.BaseSelectionStatus.clearSelectionText",
    defaultMessage: "Clear selection",
    description: "A label of clear all selection button."
  })));
}
BaseSelectionStatus.defaultProps = {
  className: undefined,
  selectAllText: undefined,
  allSelectedText: undefined,
  selectedText: undefined,
  clearSelectionText: undefined
};
BaseSelectionStatus.propTypes = {
  /** A class name to append to the base element */
  className: PropTypes.string,
  /** A text that appears on the `Clear selection` button, defaults to 'Clear selection' */
  clearSelectionText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Count of selected rows in the table. */
  numSelectedRows: PropTypes.number.isRequired,
  /** Count of selected rows on the current page */
  numSelectedRowsOnPage: PropTypes.number.isRequired,
  /** A handler for 'Select all' button. */
  onSelectAll: PropTypes.func.isRequired,
  /** A handler for 'Clear selection' button. */
  onClear: PropTypes.func.isRequired,
  /** A text that appears on the `Select all` button, defaults to 'Select All {itemCount}' */
  selectAllText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** A text that appears when all items have been selected, defaults to 'All {numSelectedRows} selected' */
  allSelectedText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** A text that appears when some items have been selected, defaults to '{numSelectedRows} selected' */
  selectedText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
export default BaseSelectionStatus;
//# sourceMappingURL=BaseSelectionStatus.js.map