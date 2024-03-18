function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
export var StepperContext = /*#__PURE__*/React.createContext({
  activeKey: ''
});
var stepsReducer = function stepsReducer(stepsState, action) {
  var newStepsState = [];
  switch (action.type) {
    case 'remove':
      return stepsState.filter(function (step) {
        return step.eventKey !== action.eventKey;
      });
    case 'register':
    default:
      // If it is existing step
      if (stepsState.some(function (step) {
        return step.eventKey === action.step.eventKey;
      })) {
        newStepsState = stepsState.map(function (step) {
          if (step.eventKey === action.step.eventKey) {
            return action.step;
          }
          return step;
        });
      } else {
        newStepsState = [].concat(_toConsumableArray(stepsState), [action.step]);
      }

      // If using the index prop
      if (stepsState.some(function (step) {
        return step.index;
      })) {
        return newStepsState.sort(function (a, b) {
          return a.index > b.index ? 1 : -1;
        });
      }
      return newStepsState;
  }
};
export function StepperContextProvider(_ref) {
  var children = _ref.children,
    activeKey = _ref.activeKey;
  var _useReducer = useReducer(stepsReducer, []),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    steps = _useReducer2[0],
    dispatch = _useReducer2[1];
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentBoundary = _useState2[0],
    setCurrentBoundary = _useState2[1];
  var registerStep = useCallback(function (step) {
    return dispatch({
      step: step,
      type: 'register'
    });
  }, []);
  var removeStep = useCallback(function (eventKey) {
    return dispatch({
      eventKey: eventKey,
      type: 'remove'
    });
  }, []);
  var getIsViewed = function getIsViewed(index) {
    return index <= currentBoundary;
  };
  useEffect(function () {
    var activeIndex = steps.findIndex(function (step) {
      return step.eventKey === activeKey;
    });
    setCurrentBoundary(function (prevState) {
      return activeIndex >= prevState ? activeIndex : prevState;
    });
  }, [activeKey, steps]);
  return /*#__PURE__*/React.createElement(StepperContext.Provider, {
    value: {
      activeKey: activeKey,
      registerStep: registerStep,
      steps: steps,
      removeStep: removeStep,
      getIsViewed: getIsViewed
    }
  }, children);
}
StepperContextProvider.propTypes = {
  /** Specifies the content of the `ContextProvider`. */
  children: PropTypes.node.isRequired,
  /** Specifies the current step of the `Stepper`. */
  activeKey: PropTypes.node.isRequired
};
export { stepsReducer };
//# sourceMappingURL=StepperContext.js.map