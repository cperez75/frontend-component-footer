function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';
import cardSrcFallbackImg from './fallback-default.png';
var SKELETON_HEIGHT_VALUE = 140;
var LOGO_SKELETON_HEIGHT_VALUE = 41;
var CardImageCap = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var src = _ref.src,
    fallbackSrc = _ref.fallbackSrc,
    srcAlt = _ref.srcAlt,
    logoSrc = _ref.logoSrc,
    fallbackLogoSrc = _ref.fallbackLogoSrc,
    logoAlt = _ref.logoAlt,
    skeletonHeight = _ref.skeletonHeight,
    skeletonWidth = _ref.skeletonWidth,
    logoSkeleton = _ref.logoSkeleton,
    logoSkeletonHeight = _ref.logoSkeletonHeight,
    logoSkeletonWidth = _ref.logoSkeletonWidth,
    className = _ref.className,
    imageLoadingType = _ref.imageLoadingType;
  var _useContext = useContext(CardContext),
    orientation = _useContext.orientation,
    isLoading = _useContext.isLoading;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showImageCap = _useState2[0],
    setShowImageCap = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showLogoCap = _useState4[0],
    setShowLogoCap = _useState4[1];
  var wrapperClassName = "pgn__card-wrapper-image-cap ".concat(orientation);
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames(wrapperClassName, className),
      "data-testid": "image-loader-wrapper"
    }, /*#__PURE__*/React.createElement(Skeleton, {
      containerClassName: "pgn__card-image-cap-loader",
      height: orientation === 'horizontal' ? '100%' : skeletonHeight,
      width: skeletonWidth
    }), logoSkeleton && /*#__PURE__*/React.createElement(Skeleton, {
      containerClassName: "pgn__card-logo-cap",
      height: logoSkeletonHeight,
      width: logoSkeletonWidth
    }));
  }
  var handleSrcFallback = function handleSrcFallback(event, altSrc, imageKey) {
    var currentTarget = event.currentTarget;
    if (!altSrc || currentTarget.src.endsWith(altSrc)) {
      if (imageKey === 'imageCap') {
        currentTarget.src = cardSrcFallbackImg;
      } else {
        setShowLogoCap(false);
      }
      return;
    }
    currentTarget.src = altSrc;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, wrapperClassName),
    ref: ref
  }, !!src && /*#__PURE__*/React.createElement("img", {
    className: classNames('pgn__card-image-cap', {
      show: showImageCap
    }),
    src: src,
    onError: function onError(event) {
      return handleSrcFallback(event, fallbackSrc, 'imageCap');
    },
    onLoad: function onLoad() {
      return setShowImageCap(true);
    },
    alt: srcAlt,
    loading: imageLoadingType
  }), !!logoSrc && /*#__PURE__*/React.createElement("img", {
    className: classNames('pgn__card-logo-cap', {
      show: showLogoCap
    }),
    src: logoSrc,
    onError: function onError(event) {
      return handleSrcFallback(event, fallbackLogoSrc, 'logoCap');
    },
    onLoad: function onLoad() {
      return setShowLogoCap(true);
    },
    alt: logoAlt,
    loading: imageLoadingType
  }));
});
CardImageCap.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies image src. */
  src: PropTypes.string,
  /** Specifies fallback image src. */
  fallbackSrc: PropTypes.string,
  /** Specifies image alt text. */
  srcAlt: PropTypes.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: PropTypes.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: PropTypes.string,
  /** Specifies logo image alt text. */
  logoAlt: PropTypes.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: PropTypes.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: PropTypes.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: PropTypes.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: PropTypes.number,
  /** Specifies loading type for images */
  imageLoadingType: PropTypes.oneOf(['eager', 'lazy'])
};
CardImageCap.defaultProps = {
  src: undefined,
  fallbackSrc: cardSrcFallbackImg,
  logoSrc: undefined,
  fallbackLogoSrc: undefined,
  className: undefined,
  srcAlt: undefined,
  logoAlt: undefined,
  skeletonHeight: SKELETON_HEIGHT_VALUE,
  logoSkeleton: false,
  logoSkeletonHeight: LOGO_SKELETON_HEIGHT_VALUE,
  skeletonWidth: undefined,
  logoSkeletonWidth: undefined,
  imageLoadingType: 'eager'
};
export default CardImageCap;
//# sourceMappingURL=CardImageCap.js.map