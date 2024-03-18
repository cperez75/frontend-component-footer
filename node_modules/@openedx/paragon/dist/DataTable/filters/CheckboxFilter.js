import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Form, { FormLabel } from '../../Form';
import Badge from '../../Badge';
import Stack from '../../Stack';
import { newId } from '../../utils';
function CheckboxFilter(_ref) {
  var _ref$column = _ref.column,
    filterValue = _ref$column.filterValue,
    setFilter = _ref$column.setFilter,
    Header = _ref$column.Header,
    filterChoices = _ref$column.filterChoices,
    getHeaderProps = _ref$column.getHeaderProps;
  // creates a unique label that does not change on re-render in case there are multiple checkbox filters in the dom
  var ariaLabel = useRef(newId("checkbox-filter-label-".concat(getHeaderProps().key, "-")));
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
  var headerBasedId = useMemo(function () {
    return "checkbox-filter-check-".concat(getHeaderProps().key, "-");
  }, [getHeaderProps]);
  return /*#__PURE__*/React.createElement(Form.Group, {
    role: "group",
    "aria-labelledby": ariaLabel.current
  }, /*#__PURE__*/React.createElement(FormLabel, {
    id: ariaLabel.current,
    className: "pgn__checkbox-filter-label"
  }, Header), /*#__PURE__*/React.createElement(Form.CheckboxSet, {
    name: Header
  }, filterChoices.map(function (_ref2) {
    var name = _ref2.name,
      number = _ref2.number,
      value = _ref2.value;
    return /*#__PURE__*/React.createElement(Form.Checkbox, {
      key: "".concat(headerBasedId).concat(name),
      value: name,
      checked: checkedBoxes.includes(value),
      onChange: function onChange() {
        return changeCheckbox(value);
      },
      "aria-label": name
    }, /*#__PURE__*/React.createElement(Stack, {
      direction: "horizontal",
      gap: 2
    }, name, " ", number !== undefined && /*#__PURE__*/React.createElement(Badge, {
      variant: "light"
    }, number)));
  })));
}
CheckboxFilter.propTypes = {
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
    setFilter: PropTypes.func.isRequired,
    Header: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]).isRequired,
    filterChoices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      number: PropTypes.number
    })).isRequired,
    getHeaderProps: PropTypes.func.isRequired,
    filterValue: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};
export default CheckboxFilter;
//# sourceMappingURL=CheckboxFilter.js.map