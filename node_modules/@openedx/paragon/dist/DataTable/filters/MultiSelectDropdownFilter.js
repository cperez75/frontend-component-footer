import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Badge from '../../Badge';
import Stack from '../../Stack';
import { DropdownButton } from '../../Dropdown';
import { newId } from '../../utils';
import Form from '../../Form';
function MultiSelectDropdownFilter(_ref) {
  var _ref$column = _ref.column,
    setFilter = _ref$column.setFilter,
    Header = _ref$column.Header,
    filterChoices = _ref$column.filterChoices,
    getHeaderProps = _ref$column.getHeaderProps,
    filterValue = _ref$column.filterValue;
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  var ariaLabel = useRef(newId("multi-dropdown-filter-label-".concat(getHeaderProps().key, "-")));
  var checkedBoxes = filterValue || [];
  var changeCheckbox = function changeCheckbox(value) {
    if (checkedBoxes.includes(value)) {
      var newCheckedBoxes = checkedBoxes.filter(function (val) {
        return val !== value;
      });
      return setFilter(newCheckedBoxes);
    }
    checkedBoxes.push(value);
    return setFilter(checkedBoxes);
  };
  return /*#__PURE__*/React.createElement(DropdownButton, {
    variant: "outline-primary",
    id: ariaLabel.current,
    title: Header
  }, /*#__PURE__*/React.createElement(Form.CheckboxSet, {
    className: "pgn__dropdown-filter-checkbox-group",
    name: Header,
    "aria-label": Header
  }, filterChoices.map(function (_ref2) {
    var name = _ref2.name,
      number = _ref2.number,
      value = _ref2.value;
    return /*#__PURE__*/React.createElement(Form.Checkbox, {
      key: name,
      value: name,
      checked: checkedBoxes.includes(value),
      onChange: function onChange() {
        return changeCheckbox(value);
      },
      "aria-label": name
    }, /*#__PURE__*/React.createElement(Stack, {
      direction: "horizontal",
      gap: 2
    }, name, " ", number && /*#__PURE__*/React.createElement(Badge, {
      variant: "light"
    }, number)));
  })));
}
MultiSelectDropdownFilter.propTypes = {
  /**
   * Specifies a column object.
   *
   * `setFilter`: Function to set the filter value.
   *
   * `Header`: Column header used for labels and placeholders.
   *
   * `filterChoices`: Specifies array of choices.
   *
   * `getHeaderProps`: Generates a key unique to the column being filtered.
   *
   * `filterValue`: Value for the filter input.
   */
  column: PropTypes.shape({
    /** Function to set the filter value */
    setFilter: PropTypes.func.isRequired,
    /** Column header used for labels and placeholders */
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
    /** Names and values for the select options */
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })).isRequired,
    /** Generates a key unique to the column being filtered */
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};
export default MultiSelectDropdownFilter;
//# sourceMappingURL=MultiSelectDropdownFilter.js.map