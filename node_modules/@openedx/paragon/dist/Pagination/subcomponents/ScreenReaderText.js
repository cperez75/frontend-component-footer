import React, { useContext } from 'react';
import PaginationContext from '../PaginationContext';
export default function PaginationScreenReaderText() {
  var _useContext = useContext(PaginationContext),
    getScreenReaderText = _useContext.getScreenReaderText;
  return /*#__PURE__*/React.createElement("div", {
    className: "sr-only",
    "aria-live": "polite",
    "aria-relevant": "text",
    "aria-atomic": true
  }, getScreenReaderText());
}
//# sourceMappingURL=ScreenReaderText.js.map