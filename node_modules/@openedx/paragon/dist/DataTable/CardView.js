function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import DataTableContext from './DataTableContext';
import { useRows } from './hooks';
import { selectColumn } from './utils/getVisibleColumns';
import Card, { CardGrid } from '../Card';
function CardItem(_ref) {
  var row = _ref.row,
    prepareRow = _ref.prepareRow,
    isSelectable = _ref.isSelectable,
    SelectionComponent = _ref.SelectionComponent,
    CardComponent = _ref.CardComponent,
    selectionPlacement = _ref.selectionPlacement;
  prepareRow(row);
  var isSelected = row.isSelected;
  if (isSelectable && SelectionComponent) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__data-table__selectable-card', {
        'is-selected': isSelected,
        'selection-right': selectionPlacement === 'right',
        'selection-left': selectionPlacement !== 'right'
      })
    }, /*#__PURE__*/React.createElement(CardComponent, row), /*#__PURE__*/React.createElement(SelectionComponent, {
      row: row
    }));
  }
  return /*#__PURE__*/React.createElement(CardComponent, row);
}
function DefaultSkeletonCardComponent() {
  return /*#__PURE__*/React.createElement(Card, {
    isLoading: true,
    "data-testid": "default-skeleton-card-component"
  }, /*#__PURE__*/React.createElement(Card.ImageCap, {
    logoSkeleton: true
  }), /*#__PURE__*/React.createElement(Card.Section, {
    className: "pgn__data-table-card-view-default-skeleton-card-section"
  }), /*#__PURE__*/React.createElement(Card.Footer, null));
}
export var DEFAULT_SKELETON_CARD_COUNT = 8;
function CardView(_ref2) {
  var columnSizes = _ref2.columnSizes,
    CardComponent = _ref2.CardComponent,
    className = _ref2.className,
    selectionPlacement = _ref2.selectionPlacement,
    _ref2$SkeletonCardCom = _ref2.SkeletonCardComponent,
    SkeletonCardComponent = _ref2$SkeletonCardCom === void 0 ? DefaultSkeletonCardComponent : _ref2$SkeletonCardCom,
    skeletonCardCount = _ref2.skeletonCardCount;
  var _useRows = useRows(),
    getTableProps = _useRows.getTableProps,
    prepareRow = _useRows.prepareRow,
    displayRows = _useRows.displayRows;
  var _useContext = useContext(DataTableContext),
    isSelectable = _useContext.isSelectable,
    manualSelectColumn = _useContext.manualSelectColumn,
    isLoading = _useContext.isLoading;

  // use the same component for card selection that is used for row selection
  // otherwise view switching might break if row selection uses component that supports backend filtering / sorting
  var SelectionComponent = (manualSelectColumn === null || manualSelectColumn === void 0 ? void 0 : manualSelectColumn.Cell) || selectColumn.Cell;
  if (!getTableProps) {
    return null;
  }
  if (isLoading) {
    return /*#__PURE__*/React.createElement(CardGrid, {
      className: classNames('pgn__data-table-card-view', className),
      columnSizes: columnSizes
    }, _toConsumableArray(new Array(skeletonCardCount)).map(function () {
      return /*#__PURE__*/React.createElement(SkeletonCardComponent, {
        key: uuidv4()
      });
    }));
  }
  return /*#__PURE__*/React.createElement(CardGrid, {
    className: classNames('pgn__data-table-card-view', className),
    columnSizes: columnSizes
  }, displayRows.map(function (row) {
    return /*#__PURE__*/React.createElement(CardItem, {
      key: row.id,
      CardComponent: CardComponent,
      SelectionComponent: SelectionComponent,
      isSelectable: isSelectable,
      row: row,
      prepareRow: prepareRow,
      selectionPlacement: selectionPlacement
    });
  }));
}
CardItem.defaultProps = {
  SelectionComponent: undefined
};
CardItem.propTypes = {
  row: PropTypes.shape({
    getToggleRowSelectedProps: PropTypes.func,
    isSelected: PropTypes.bool
  }).isRequired,
  prepareRow: PropTypes.func.isRequired,
  isSelectable: PropTypes.bool.isRequired,
  CardComponent: PropTypes.func.isRequired,
  SelectionComponent: PropTypes.func,
  selectionPlacement: PropTypes.oneOf(['right', 'left']).isRequired
};
CardView.defaultProps = {
  columnSizes: {
    xs: 12,
    lg: 6,
    xl: 4
  },
  className: undefined,
  selectionPlacement: 'right',
  SkeletonCardComponent: undefined,
  skeletonCardCount: 8
};
CardView.propTypes = {
  /** The class name for the CardGrid component */
  className: PropTypes.string,
  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  }),
  /** Your card component must be individualized to your table.
   * It will be called with props from the "row" of data it will display */
  CardComponent: PropTypes.func.isRequired,
  /** If the Cards are selectable this prop determines from which side of the Card to show selection component. */
  selectionPlacement: PropTypes.oneOf(['left', 'right']),
  /** Overrides default skeleton card component for loading state in CardView */
  SkeletonCardComponent: PropTypes.func,
  /** Customize the number of loading skeleton cards to display in CardView */
  skeletonCardCount: PropTypes.number
};
export default CardView;
//# sourceMappingURL=CardView.js.map