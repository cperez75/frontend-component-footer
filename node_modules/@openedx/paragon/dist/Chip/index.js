var _excluded = ["children", "className", "variant", "iconBefore", "iconBeforeAlt", "iconAfter", "iconAfterAlt", "onIconBeforeClick", "onIconAfterClick", "disabled", "isSelected", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @ts-ignore
import { requiredWhen } from '../utils/propTypes';
// @ts-ignore
import { STYLE_VARIANTS } from './constants';
// @ts-ignore
import ChipIcon from './ChipIcon';
export var CHIP_PGN_CLASS = 'pgn__chip';
var Chip = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    variant = _ref.variant,
    iconBefore = _ref.iconBefore,
    iconBeforeAlt = _ref.iconBeforeAlt,
    iconAfter = _ref.iconAfter,
    iconAfterAlt = _ref.iconAfterAlt,
    onIconBeforeClick = _ref.onIconBeforeClick,
    onIconAfterClick = _ref.onIconAfterClick,
    disabled = _ref.disabled,
    isSelected = _ref.isSelected,
    onClick = _ref.onClick,
    props = _objectWithoutProperties(_ref, _excluded);
  var hasInteractiveIcons = !!(onIconBeforeClick || onIconAfterClick);
  var isChipInteractive = !hasInteractiveIcons && !!onClick;
  var interactionProps = isChipInteractive ? {
    onClick: onClick,
    onKeyPress: onClick,
    tabIndex: 0,
    role: 'button'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(CHIP_PGN_CLASS, "pgn__chip-".concat(variant), className, {
      disabled: disabled,
      selected: isSelected,
      interactive: isChipInteractive
    }),
    ref: ref
  }, interactionProps, props), iconBefore && /*#__PURE__*/React.createElement(ChipIcon, {
    className: "".concat(CHIP_PGN_CLASS, "__icon-before"),
    src: iconBefore,
    onClick: onIconBeforeClick,
    alt: iconBeforeAlt,
    variant: variant,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(CHIP_PGN_CLASS, "__label"), {
      'p-before': iconBefore,
      'p-after': iconAfter
    })
  }, children), iconAfter && /*#__PURE__*/React.createElement(ChipIcon, {
    className: "".concat(CHIP_PGN_CLASS, "__icon-after"),
    src: iconAfter,
    onClick: onIconAfterClick,
    alt: iconAfterAlt,
    variant: variant,
    disabled: disabled
  }));
});
Chip.propTypes = {
  /** Specifies the content of the `Chip`. */
  children: PropTypes.node.isRequired,
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
  /** The `Chip` style variant to use. */
  variant: PropTypes.oneOf(['light', 'dark']),
  /** Disables the `Chip`. */
  disabled: PropTypes.bool,
  /** Click handler for the whole Chip, has effect only when Chip does not have any interactive icons. */
  onClick: PropTypes.func,
  /**
   * An icon component to render before the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@openedx/paragon/icons';`
   */
  iconBefore: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** Specifies icon alt text. */
  iconBeforeAlt: requiredWhen(PropTypes.string, ['iconBefore', 'onIconBeforeClick']),
  /** A click handler for the `Chip` icon before. */
  onIconBeforeClick: PropTypes.func,
  /**
   * An icon component to render before after the content.
   * Example import of a Paragon icon component:
   *
   * `import { Check } from '@openedx/paragon/icons';`
   */
  iconAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** Specifies icon alt text. */
  iconAfterAlt: requiredWhen(PropTypes.string, ['iconAfter', 'onIconAfterClick']),
  /** A click handler for the `Chip` icon after. */
  onIconAfterClick: PropTypes.func,
  /** Indicates if `Chip` has been selected. */
  isSelected: PropTypes.bool
};
Chip.defaultProps = {
  className: undefined,
  variant: STYLE_VARIANTS.LIGHT,
  disabled: false,
  onClick: undefined,
  iconBefore: undefined,
  iconAfter: undefined,
  onIconBeforeClick: undefined,
  onIconAfterClick: undefined,
  isSelected: false,
  iconAfterAlt: undefined,
  iconBeforeAlt: undefined
};
export default Chip;
//# sourceMappingURL=index.js.map