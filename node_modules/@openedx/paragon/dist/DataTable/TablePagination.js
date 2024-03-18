import React, { useContext } from 'react';
import DataTableContext from './DataTableContext';
import Pagination from '../Pagination';
function TablePagination() {
  var _useContext = useContext(DataTableContext),
    pageCount = _useContext.pageCount,
    state = _useContext.state,
    gotoPage = _useContext.gotoPage;
  if (!pageCount || pageCount < 2) {
    return null;
  }
  var pageIndex = state === null || state === void 0 ? void 0 : state.pageIndex;
  return /*#__PURE__*/React.createElement(Pagination, {
    variant: "reduced",
    currentPage: pageIndex + 1,
    onPageSelect: function onPageSelect(pageNum) {
      return gotoPage(pageNum - 1);
    },
    pageCount: pageCount,
    icons: {
      leftIcon: null,
      rightIcon: null
    }
  });
}
export default TablePagination;
//# sourceMappingURL=TablePagination.js.map