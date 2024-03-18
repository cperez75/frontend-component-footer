import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';
import Button from '../Button';
function FilterStatus(_ref) {
  var className = _ref.className,
    variant = _ref.variant,
    size = _ref.size,
    clearFiltersText = _ref.clearFiltersText,
    buttonClassName = _ref.buttonClassName,
    showFilteredFields = _ref.showFilteredFields;
  var _useContext = useContext(DataTableContext),
    state = _useContext.state,
    setAllFilters = _useContext.setAllFilters,
    headers = _useContext.headers;
  if (!setAllFilters) {
    return null;
  }
  var headersMap = headers.reduce(function (cur, acc) {
    cur[acc.id] = acc.Header;
    return cur;
  }, {});
  var filterNames = state.filters ? state.filters.map(function (filter) {
    return headersMap[filter.id];
  }) : [];
  var filterTexts = /*#__PURE__*/React.createElement("p", null, "Filtered by ", filterNames.join(', '));
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, showFilteredFields && filterTexts, /*#__PURE__*/React.createElement(Button, {
    className: buttonClassName,
    variant: variant,
    size: size,
    onClick: function onClick() {
      return setAllFilters([]);
    }
  }, clearFiltersText === undefined ? /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "pgn.DataTable.FilterStatus.clearFiltersText",
    defaultMessage: "Clear filters",
    description: "A text that appears on the `Clear filters` button"
  }) : clearFiltersText));
}
FilterStatus.defaultProps = {
  /** Specifies class name to append to the base element. */
  className: null,
  /** Specifies class name to append to the button. */
  buttonClassName: 'pgn__smart-status-button',
  /** The visual style of the `FilterStatus`. */
  variant: 'link',
  /** The size of the `FilterStatus`. */
  size: 'inline',
  /** A text that appears on the `Clear filters` button, defaults to 'Clear filters'. */
  clearFiltersText: undefined,
  /** Whether to display applied filters. */
  showFilteredFields: true
};
FilterStatus.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  clearFiltersText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  showFilteredFields: PropTypes.bool
};
export default FilterStatus;
//# sourceMappingURL=FilterStatus.js.map