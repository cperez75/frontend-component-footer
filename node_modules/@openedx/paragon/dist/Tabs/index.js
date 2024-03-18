function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["children", "className", "moreTabText", "defaultActiveKey", "activeKey"],
  _excluded2 = ["title", "notification", "tabClassName"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BaseTabs from 'react-bootstrap/Tabs';
import TabsDeprecated from './deprecated';
import Bubble from '../Bubble';
import Dropdown from '../Dropdown';
import useIndexOfLastVisibleChild from '../hooks/useIndexOfLastVisibleChild';
import Tab from './Tab';
export var MORE_TAB_TEXT = 'More...';
function Tabs(_ref) {
  var _overflowElementRef$c, _overflowElementRef$c3;
  var children = _ref.children,
    className = _ref.className,
    _ref$moreTabText = _ref.moreTabText,
    moreTabText = _ref$moreTabText === void 0 ? MORE_TAB_TEXT : _ref$moreTabText,
    defaultActiveKey = _ref.defaultActiveKey,
    activeKey = _ref.activeKey,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    containerElementRef = _useState2[0],
    setContainerElementRef = _useState2[1];
  var overflowElementRef = useRef(null);
  var indexOfLastVisibleChild = useIndexOfLastVisibleChild(containerElementRef === null || containerElementRef === void 0 ? void 0 : containerElementRef.firstChild, (_overflowElementRef$c = overflowElementRef.current) === null || _overflowElementRef$c === void 0 ? void 0 : _overflowElementRef$c.parentNode);
  useEffect(function () {
    if (containerElementRef) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          // React-Bootstrap attribute 'data-rb-event-key' is responsible for the tab identification
          var eventKey = mutation.target.getAttribute('data-rb-event-key');
          // React-Bootstrap attribute 'aria-selected' is responsible for selected/unselected state
          var isActive = mutation.target.getAttribute('aria-selected') === 'true';
          // datakey attribute is added manually to the dropdown
          // elements so that they correspond to the native tabs' eventKey
          var element = containerElementRef.querySelector("[datakey='".concat(eventKey, "']"));
          var moreTab = containerElementRef.querySelector('.pgn__tab_more');
          if (isActive) {
            element === null || element === void 0 ? void 0 : element.classList.add('active');
            // Here we add active class to the 'More Tab' if element exists in the dropdown
            if (element) {
              moreTab.classList.add('active');
            } else {
              moreTab.classList.remove('active');
            }
          } else {
            element === null || element === void 0 ? void 0 : element.classList.remove('active');
          }
        });
      });
      observer.observe(containerElementRef, {
        attributes: true,
        subtree: true,
        attributeFilter: ['aria-selected']
      });
      return function () {
        return observer.disconnect();
      };
    }
    return undefined;
  }, [containerElementRef]);
  useEffect(function () {
    var _overflowElementRef$c2;
    if ((_overflowElementRef$c2 = overflowElementRef.current) !== null && _overflowElementRef$c2 !== void 0 && _overflowElementRef$c2.parentNode) {
      overflowElementRef.current.parentNode.tabIndex = -1;
    }
  }, [(_overflowElementRef$c3 = overflowElementRef.current) === null || _overflowElementRef$c3 === void 0 ? void 0 : _overflowElementRef$c3.parentNode]);
  var handleDropdownTabClick = useCallback(function (eventKey) {
    var hiddenTab = containerElementRef.querySelector("[data-rb-event-key='".concat(eventKey, "']"));
    hiddenTab.click();
  }, [containerElementRef]);
  var tabsChildren = useMemo(function () {
    var indexOfOverflowStart = indexOfLastVisibleChild + 1;
    var handleDropdownKeyPress = function handleDropdownKeyPress(e, eventKey) {
      if (e.key === 'Enter') {
        handleDropdownTabClick(eventKey);
      }
    };
    var childrenList = React.Children.map(children, function (child, index) {
      var _child$type;
      if ((child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name) !== 'Tab' && process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error("Tabs children can only be of type Tab. ".concat(children[index], " was passed instead."));
      }
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return child;
      }
      var _child$props = child.props,
        title = _child$props.title,
        notification = _child$props.notification,
        tabClassName = _child$props.tabClassName,
        rest = _objectWithoutProperties(_child$props, _excluded2);
      var newTitle;
      if (notification) {
        newTitle = /*#__PURE__*/React.createElement(React.Fragment, null, title, /*#__PURE__*/React.createElement(Bubble, {
          variant: "error",
          role: "status",
          className: "pgn__tab-notification",
          "aria-live": "polite",
          expandable: true
        }, notification));
      } else {
        newTitle = title;
      }
      var tabClass = index > indexOfLastVisibleChild ? 'pgn__tab_invisible' : '';
      var modifiedTab = /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({}, rest), {}, {
        title: newTitle,
        tabClassName: classNames(tabClass, tabClassName)
      }));
      return modifiedTab;
    });
    var moreTabHasNotification = false;
    var overflowChildren = childrenList.slice(indexOfOverflowStart).map(function (overflowChild) {
      if (!moreTabHasNotification && overflowChild.props.notification) {
        moreTabHasNotification = true;
      }
      return /*#__PURE__*/React.createElement(Dropdown.Item, {
        as: "li",
        tabIndex: "0",
        key: "".concat(overflowChild.props.eventKey, "overflow"),
        onClick: function onClick() {
          return handleDropdownTabClick(overflowChild.props.eventKey);
        },
        onKeyPress: function onKeyPress(e) {
          return handleDropdownKeyPress(e, overflowChild.props.eventKey);
        },
        disabled: overflowChild.props.disabled,
        datakey: overflowChild.props.eventKey,
        className: classNames({
          active: overflowChild.props.eventKey === defaultActiveKey || overflowChild.props.eventKey === activeKey
        }, 'pgn__tabs__dropdown-item')
      }, overflowChild.props.title);
    });
    childrenList.splice(indexOfOverflowStart, 0, /*#__PURE__*/React.createElement(Tab, {
      key: "moreTabKey",
      tabClassName: classNames(!overflowChildren.length && 'pgn__tab_invisible', 'pgn__tab_more'),
      title: /*#__PURE__*/React.createElement(Dropdown, {
        ref: overflowElementRef
      }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
        variant: "link",
        className: "nav-link",
        id: "pgn__tab-toggle"
      }, moreTabText, moreTabHasNotification && /*#__PURE__*/React.createElement(Bubble, {
        variant: "error",
        role: "status",
        className: "pgn__tab-notification"
      })), /*#__PURE__*/React.createElement(Dropdown.Menu, {
        as: "ul",
        className: "dropdown-menu-right"
      }, overflowChildren))
    }));
    return childrenList;
  }, [activeKey, children, defaultActiveKey, indexOfLastVisibleChild, moreTabText, handleDropdownTabClick]);
  return /*#__PURE__*/React.createElement("div", {
    ref: setContainerElementRef
  }, /*#__PURE__*/React.createElement(BaseTabs, _extends({
    defaultActiveKey: defaultActiveKey,
    activeKey: activeKey
  }, props, {
    className: classNames(className, 'pgn__tabs')
  }), tabsChildren));
}
Tabs.propTypes = {
  /** Specifies variant to use. */
  variant: PropTypes.oneOf(['tabs', 'pills', 'inverse-tabs', 'inverse-pills', 'button-group']),
  /** Specifies elements that is processed to create tabs. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies text for the 'More' tab. */
  moreTabText: PropTypes.string,
  /** Specifies default active tab (uncontrolled usage). */
  defaultActiveKey: PropTypes.string,
  /** Specifies active tab (controlled usage). */
  activeKey: PropTypes.string
};
Tabs.defaultProps = {
  variant: 'tabs',
  className: undefined,
  moreTabText: MORE_TAB_TEXT,
  defaultActiveKey: undefined,
  activeKey: undefined
};
Tabs.Deprecated = TabsDeprecated;
export default Tabs;
export { Tab };
export { default as TabContainer } from 'react-bootstrap/TabContainer';
export { default as TabContent } from 'react-bootstrap/TabContent';
export { default as TabPane } from 'react-bootstrap/TabPane';
//# sourceMappingURL=index.js.map