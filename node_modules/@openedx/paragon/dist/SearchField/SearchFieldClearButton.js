function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useContext } from 'react';
import { SearchFieldContext } from './SearchFieldAdvanced';
import Icon from '../Icon';
import IconButton from '../IconButton';
function SearchFieldClearButton(props) {
  var _useContext = useContext(SearchFieldContext),
    screenReaderText = _useContext.screenReaderText,
    icons = _useContext.icons,
    value = _useContext.value,
    disabled = _useContext.disabled,
    refs = _useContext.refs;
  if (!value) {
    return null;
  }
  var handleClick = function handleClick() {
    if (refs.input.current) {
      refs.input.current.focus();
    }
  };
  return /*#__PURE__*/React.createElement(IconButton, _extends({
    className: "pgn__searchfield__iconbutton-reset",
    type: "reset",
    src: icons.clear,
    size: "sm",
    iconAs: Icon,
    alt: screenReaderText.clearButton,
    disabled: disabled,
    onClick: handleClick
  }, props));
}
export default SearchFieldClearButton;
//# sourceMappingURL=SearchFieldClearButton.js.map