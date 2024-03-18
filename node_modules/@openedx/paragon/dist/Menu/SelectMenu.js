var _excluded = ["defaultMessage", "children", "className", "variant"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ExpandMore } from '../../icons';
import Button from '../Button';
import ModalPopup from '../Modal/ModalPopup';
import useToggle from '../hooks/useToggle';
import Menu from '.';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';
export var SELECT_MENU_DEFAULT_MESSAGE = 'Select...';
function SelectMenu(_ref) {
  var defaultMessage = _ref.defaultMessage,
    children = _ref.children,
    className = _ref.className,
    variant = _ref.variant,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    triggerTarget = _useState2[0],
    setTriggerTarget = _useState2[1];
  // this ref is used to focus the menu open button after any menu option is clicked.
  // triggerTarget.current.focus() inside the onCLick() function didn't guarantee element focus.
  var focusMenuRef = React.useRef(false);
  var itemsCollection = React.useMemo(function () {
    return Array.from({
      length: children.length
    }).map(function () {
      return /*#__PURE__*/React.createRef();
    });
  }, [children.length]);
  var defaultIndex = useCallback(function () {
    for (var i = 0; i < children.length; i++) {
      if (children[i].props && children[i].props.defaultSelected) {
        return i;
      }
    }
    return undefined;
  }, [children]);
  var _useState3 = useState(defaultIndex()),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var _useToggle = useToggle(false),
    _useToggle2 = _slicedToArray(_useToggle, 3),
    isOpen = _useToggle2[0],
    open = _useToggle2[1],
    close = _useToggle2[2];
  var createMenuItems = function createMenuItems() {
    return React.Children.map(children, function (child, index) {
      var newProps = {
        onClick: function onClick(e) {
          if (child.props.onClick) {
            child.props.onClick(e);
          }
          setSelected(index);
          close();
          focusMenuRef.current = true;
        },
        id: "".concat(index.toString(), "_pgn__menu-item"),
        role: 'link'
      };
      if (selected === index) {
        newProps['aria-current'] = 'page';
      }
      return /*#__PURE__*/React.cloneElement(child, newProps);
    });
  };
  var prevOpenRef = React.useRef();
  useEffect(function () {
    if (isOpen && selected) {
      var numItems = children.length;
      if (numItems > 6 && selected > 1 && numItems - selected > 2) {
        // on "middle elements", set offset to center of block and scroll to center
        itemsCollection[selected].current.children[0].scrollIntoView({
          block: 'center'
        });
      }
    }
    // set focus on open
    if (isOpen && !prevOpenRef.current && selected) {
      itemsCollection[selected].current.children[0].focus({
        preventScroll: defaultIndex() === selected
      });
    }
    if (focusMenuRef.current) {
      triggerTarget.focus();
      focusMenuRef.current = false;
    }
    prevOpenRef.current = isOpen;
  }, [isOpen, children.length, defaultIndex, itemsCollection, selected, triggerTarget]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('pgn__menu-select', className)
  }, props), /*#__PURE__*/React.createElement(Button, {
    "aria-haspopup": "true",
    "aria-expanded": isOpen,
    ref: setTriggerTarget,
    variant: variant,
    iconAfter: ExpandMore,
    onClick: open
  }, selected !== undefined && children[selected] ? children[selected].props.children : defaultMessage), /*#__PURE__*/React.createElement("div", {
    className: "pgn__menu-select-popup"
  }, /*#__PURE__*/React.createElement(ModalPopup, {
    placement: "bottom-start",
    positionRef: triggerTarget,
    isOpen: isOpen,
    onClose: close,
    modifiers: [{
      name: 'flip',
      options: {
        padding: {
          top: 150,
          bottom: 150
        }
      }
    }]
  }, /*#__PURE__*/React.createElement(Menu, {
    "aria-label": "Select Menu"
  }, createMenuItems().map(function (child, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: child.props.id,
      ref: itemsCollection[index]
    }, child);
  })))));
}
SelectMenu.propTypes = {
  /** String that is displayed for default value of the ``SelectMenu`` */
  defaultMessage: PropTypes.string,
  /** Specifies the content of the ``SelectMenu`` */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** Specifies variant to use. */
  variant: PropTypes.string
};
SelectMenu.defaultProps = {
  defaultMessage: SELECT_MENU_DEFAULT_MESSAGE,
  className: undefined,
  variant: 'outline-primary'
};
var SelectMenuWithDeprecatedProp = withDeprecatedProps(SelectMenu, 'SelectMenu', {
  isLink: {
    deprType: DeprTypes.MOVED_AND_FORMAT,
    message: 'Use "variant" prop instead, i.e. variant="link"',
    newName: 'variant',
    transform: function transform() {
      return 'link';
    }
  }
});
export default SelectMenuWithDeprecatedProp;
//# sourceMappingURL=SelectMenu.js.map