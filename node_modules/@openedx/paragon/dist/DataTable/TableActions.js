import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableContext from './DataTableContext';
import Actions from './CollapsibleButtonGroup';
function TableActions(_ref) {
  var className = _ref.className;
  var tableInstance = useContext(DataTableContext);
  var tableActions = tableInstance.tableActions;
  var args = {
    tableInstance: tableInstance
  };
  if (typeof tableActions === 'function') {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__table-actions', className)
    }, tableActions(tableInstance));
  }
  var actions = tableActions.map(function (action) {
    return {
      component: action,
      args: args
    };
  });
  return /*#__PURE__*/React.createElement(Actions, {
    className: classNames('pgn__table-actions', className),
    "data-testid": "table-actions",
    actions: actions
  });
}
TableActions.defaultProps = {
  className: undefined
};
TableActions.propTypes = {
  /** class names for the div wrapping the button components */
  className: PropTypes.string
};
export default TableActions;
//# sourceMappingURL=TableActions.js.map