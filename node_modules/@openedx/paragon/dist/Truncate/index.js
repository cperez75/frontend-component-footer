function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { truncateLines } from './utils';
import useWindowSize from '../hooks/useWindowSize';
var DEFAULT_TRUNCATE_LINES = 1;
var DEFAULT_TRUNCATE_ELLIPSIS = '...';
var DEFAULT_TRUNCATE_ELEMENT_TYPE = 'div';
function Truncate(_ref) {
  var children = _ref.children,
    lines = _ref.lines,
    ellipsis = _ref.ellipsis,
    elementType = _ref.elementType,
    className = _ref.className,
    whiteSpace = _ref.whiteSpace,
    onTruncate = _ref.onTruncate;
  var textContainer = useRef();
  var _useWindowSize = useWindowSize(),
    width = _useWindowSize.width;
  useLayoutEffect(function () {
    if (textContainer.current) {
      var _truncateLines = truncateLines(children, textContainer.current, {
          ellipsis: ellipsis,
          whiteSpace: whiteSpace,
          lines: lines
        }),
        _truncateLines2 = _slicedToArray(_truncateLines, 2),
        truncated = _truncateLines2[0],
        original = _truncateLines2[1];
      textContainer.current.setAttribute('title', original);
      textContainer.current.setAttribute('aria-label', original);
      textContainer.current.innerHTML = '';
      truncated.forEach(function (element) {
        textContainer.current.appendChild(element);
      });
      if (onTruncate) {
        onTruncate(truncated);
      }
    }
  }, [children, ellipsis, lines, onTruncate, whiteSpace, width]);
  return /*#__PURE__*/React.createElement(elementType, {
    ref: textContainer,
    className: className
  });
}
Truncate.propTypes = {
  /** The expected text to which the ellipsis would be applied. */
  children: PropTypes.string.isRequired,
  /** The number of lines the text to be truncated to. */
  lines: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Text content for the ellipsis - will appear after the truncated lines. */
  ellipsis: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  /** Adds the whitespace from before the ellipsis. */
  whiteSpace: PropTypes.bool,
  /** Custom html element for truncated text. */
  elementType: PropTypes.string,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Callback fired when a text truncating */
  onTruncate: PropTypes.func
};
Truncate.defaultProps = {
  lines: DEFAULT_TRUNCATE_LINES,
  ellipsis: DEFAULT_TRUNCATE_ELLIPSIS,
  whiteSpace: false,
  elementType: DEFAULT_TRUNCATE_ELEMENT_TYPE,
  className: undefined,
  onTruncate: undefined
};
export default Truncate;
//# sourceMappingURL=index.js.map