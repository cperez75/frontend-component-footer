import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';
function RowStatus(_ref) {
  var className = _ref.className,
    statusText = _ref.statusText;
  var _useContext = useContext(DataTableContext),
    page = _useContext.page,
    rows = _useContext.rows,
    itemCount = _useContext.itemCount,
    state = _useContext.state;
  var rowCount = (page === null || page === void 0 ? void 0 : page.length) || (rows === null || rows === void 0 ? void 0 : rows.length);
  var pageSize = (state === null || state === void 0 ? void 0 : state.pageSize) || 0;
  var pageIndex = (state === null || state === void 0 ? void 0 : state.pageIndex) || 0;
  var firstRow = pageSize * pageIndex + 1;
  var lastRow = firstRow + rowCount - 1;
  if (!rowCount) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    "data-testid": "row-status"
  }, statusText || /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.RowStatus.statusText",
    defaultMessage: "Showing {firstRow} - {lastRow} of {itemCount}.",
    description: "A text describing how many rows is shown in the table",
    values: {
      itemCount: itemCount,
      firstRow: firstRow,
      lastRow: lastRow
    }
  }));
}
RowStatus.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** A text describing how many rows is shown in the table. */
  statusText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
RowStatus.defaultProps = {
  className: undefined,
  statusText: undefined
};
export default RowStatus;
//# sourceMappingURL=RowStatus.js.map