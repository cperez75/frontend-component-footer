import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import { ModalContextProvider } from './ModalContext';

// istanbul ignore next
function ModalBackdrop(_ref) {
  var onClick = _ref.onClick;
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React.createElement("div", {
      className: "pgn__modal-backdrop",
      onClick: onClick,
      onKeyDown: onClick,
      "data-testid": "modal-backdrop"
    })
  );
}
ModalBackdrop.propTypes = {
  onClick: PropTypes.func
};
ModalBackdrop.defaultProps = {
  onClick: undefined
};

// istanbul ignore next
function ModalContentContainer(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "pgn__modal-content-container"
  }, children);
}
ModalContentContainer.propTypes = {
  children: PropTypes.node
};
ModalContentContainer.defaultProps = {
  children: null
};

/**
 * The ModalLayer should be used for any component that wishes to engage the user
 * in a "mode" where a layer on top of the application is interactive while the
 * rest of the application is made non-interactive. The assumption made by this
 * component is that if a modal object is visible then it is "enabled"
 */
function ModalLayer(_ref3) {
  var children = _ref3.children,
    onClose = _ref3.onClose,
    isOpen = _ref3.isOpen,
    isBlocking = _ref3.isBlocking,
    zIndex = _ref3.zIndex;
  useEffect(function () {
    if (isOpen) {
      document.body.classList.add('pgn__hidden-scroll-padding-right');
    } else {
      document.body.classList.remove('pgn__hidden-scroll-padding-right');
    }
    return function () {
      document.body.classList.remove('pgn__hidden-scroll-padding-right');
    };
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }
  var onClickOutside = !isBlocking ? onClose : null;
  return /*#__PURE__*/React.createElement(ModalContextProvider, {
    onClose: onClose,
    isOpen: isOpen,
    isBlocking: isBlocking
  }, /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(FocusOn, {
    allowPinchZoom: true,
    scrollLock: true,
    enabled: isOpen,
    onEscapeKey: onClose,
    onClickOutside: onClickOutside,
    className: classNames('pgn__modal-layer', zIndex ? "zindex-".concat(zIndex) : '')
  }, /*#__PURE__*/React.createElement(ModalContentContainer, null, /*#__PURE__*/React.createElement(ModalBackdrop, {
    onClick: onClickOutside
  }), children))));
}
ModalLayer.propTypes = {
  /** Specifies the contents of the modal */
  children: PropTypes.node.isRequired,
  /** A callback function for when the modal is dismissed */
  onClose: PropTypes.func.isRequired,
  /** Is the modal dialog open or closed */
  isOpen: PropTypes.bool.isRequired,
  /** Prevent clicking on the backdrop to close the modal */
  isBlocking: PropTypes.bool,
  /** Specifies the z-index of the modal */
  zIndex: PropTypes.number
};
ModalLayer.defaultProps = {
  isBlocking: false,
  zIndex: undefined
};
export { ModalBackdrop, ModalContentContainer };
export default ModalLayer;
//# sourceMappingURL=ModalLayer.js.map