import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';
import FilterStatus from './FilterStatus';
function SidebarFilters(_ref) {
  var title = _ref.title;
  var _useContext = useContext(DataTableContext),
    state = _useContext.state,
    columns = _useContext.columns;
  var availableFilters = useMemo(function () {
    return columns.filter(function (column) {
      return column.canFilter;
    });
  }, [columns]);
  var filtersApplied = (state === null || state === void 0 ? void 0 : state.filters) && state.filters.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__data-table-side-filters"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pgn__data-table-side-filters-title"
  }, title || /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.SidebarFilters.title",
    defaultMessage: "Filters",
    description: "Title for the sidebar filters component"
  })), /*#__PURE__*/React.createElement("hr", null), availableFilters.map(function (column) {
    return /*#__PURE__*/React.createElement("div", {
      key: column.Header,
      className: "pgn__data-table-side-filters-item"
    }, column.render('Filter'));
  }), filtersApplied && /*#__PURE__*/React.createElement(FilterStatus, {
    className: "pgn__data-table-side-filters-status",
    showFilteredFields: false,
    variant: "tertiary"
  }));
}
SidebarFilters.propTypes = {
  /** Specifies the title to show near the filters, default to 'Filters'. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
SidebarFilters.defaultProps = {
  title: undefined
};
export default SidebarFilters;
//# sourceMappingURL=SidebarFilters.js.map