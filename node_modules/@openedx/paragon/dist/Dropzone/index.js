function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["className", "accept", "minSize", "maxSize", "validator", "errorMessages", "progressVariant", "inputComponent", "onProcessUpload", "onUploadProgress", "onUploadCancel"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDropzone, ErrorCode } from 'react-dropzone';
import { fromEvent } from 'file-selector';
import { useIntl } from 'react-intl';
import DragError from './DragError';
import GenericError from './GenericError';
import UploadProgress from './UploadProgress';
import DefaultContent from './DefaultContent';
import messages from './messages';
import { getTypesString, isMultipleTypes, formatBytes } from './utils';
function Dropzone(_ref) {
  var className = _ref.className,
    accept = _ref.accept,
    minSize = _ref.minSize,
    maxSize = _ref.maxSize,
    validator = _ref.validator,
    errorMessages = _ref.errorMessages,
    progressVariant = _ref.progressVariant,
    inputComponent = _ref.inputComponent,
    onProcessUpload = _ref.onProcessUpload,
    onUploadProgress = _ref.onUploadProgress,
    onUploadCancel = _ref.onUploadCancel,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMultipleDragged = _useState2[0],
    setIsMultipleDragged = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    progress = _useState6[0],
    setProgress = _useState6[1];
  var _useState7 = useState(undefined),
    _useState8 = _slicedToArray(_useState7, 2),
    fileName = _useState8[0],
    setFileName = _useState8[1];
  var _useState9 = useState(undefined),
    _useState10 = _slicedToArray(_useState9, 2),
    controller = _useState10[0],
    setController = _useState10[1];
  var intl = useIntl();
  var uploadErrorMsg = errorMessages.uploadError,
    invalidSizeLessMsg = errorMessages.invalidSizeLess,
    invalidSizeMoreMsg = errorMessages.invalidSizeMore,
    invalidTypeMsg = errorMessages.invalidType,
    multipleDraggedMsg = errorMessages.multipleDragged;
  var onDragEnter = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var files;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (errors) {
              setErrors([]);
            }
            _context.next = 3;
            return fromEvent(e);
          case 3:
            files = _context.sent;
            if (files && files.length > 1) {
              setIsMultipleDragged(true);
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onDragEnter(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var onDragLeave = function onDragLeave() {
    if (isMultipleDragged) {
      setIsMultipleDragged(false);
    }
  };
  var onDropRejected = function onDropRejected(files) {
    if (!isMultipleDragged) {
      setErrors(files[0].errors.map(function (error) {
        switch (error.code) {
          case ErrorCode.FileTooLarge:
            return invalidSizeMoreMsg || intl.formatMessage(messages.invalidSizeMore, {
              size: formatBytes(maxSize)
            });
          case ErrorCode.FileTooSmall:
            return invalidSizeLessMsg || intl.formatMessage(messages.invalidSizeLess, {
              size: formatBytes(minSize)
            });
          case ErrorCode.FileInvalidType:
            return invalidTypeMsg || intl.formatMessage(messages.invalidType, {
              count: isMultipleTypes(accept) ? 2 : 1,
              typeString: getTypesString(accept)
            });
          default:
            return intl.formatMessage(messages.unexpectedValidationError);
        }
      }));
    } else {
      setIsMultipleDragged(false);
    }
  };
  var handleProgressUpload = function handleProgressUpload(progressEvent) {
    var percentValue = Math.round(progressEvent.loaded * 100 / progressEvent.total);
    setProgress(percentValue);
    onUploadProgress(percentValue, progressEvent);
  };
  var handleUploadError = function handleUploadError(error) {
    // check if request has been canceled before treating the exception as an upload error
    if (error.code !== 'ERR_CANCELED') {
      setProgress(0);
      setErrors([uploadErrorMsg || intl.formatMessage(messages.uploadError)]);
    }
  };
  var processUpload = function processUpload(fileData) {
    var newController = new AbortController();
    setController(newController);
    var requestConfig = {
      onUploadProgress: handleProgressUpload,
      signal: newController.signal
    };
    onProcessUpload({
      fileData: fileData,
      requestConfig: requestConfig,
      handleError: handleUploadError
    });
  };
  var onDropAccepted = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(files) {
      var file, customValidationError, formData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            file = files[0];
            if (!validator) {
              _context2.next = 8;
              break;
            }
            _context2.next = 4;
            return validator(file);
          case 4:
            customValidationError = _context2.sent;
            if (!customValidationError) {
              _context2.next = 8;
              break;
            }
            setErrors([customValidationError]);
            return _context2.abrupt("return");
          case 8:
            if (errors) {
              setErrors([]);
            }
            formData = new FormData();
            formData.append('file', file);
            setFileName(file.name);
            processUpload(formData);
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onDropAccepted(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleUploadCancel = function handleUploadCancel() {
    controller.abort();
    setProgress(0);
    onUploadCancel();
  };
  var _useDropzone = useDropzone({
      multiple: false,
      maxFiles: 1,
      maxSize: maxSize,
      minSize: minSize,
      onDragLeave: onDragLeave,
      onDragEnter: onDragEnter,
      onDropRejected: onDropRejected,
      onDropAccepted: onDropAccepted,
      accept: accept,
      disabled: progress && progress !== 100
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    isDragActive = _useDropzone.isDragActive,
    isDragReject = _useDropzone.isDragReject;
  var renderContent = function renderContent() {
    if (isMultipleDragged) {
      return /*#__PURE__*/React.createElement(DragError, {
        message: multipleDraggedMsg || intl.formatMessage(messages.multipleDragged)
      });
    }
    if (errors.length > 0) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericError, {
        errorMsgs: errors
      }), inputComponent || /*#__PURE__*/React.createElement(DefaultContent, {
        minSize: minSize,
        maxSize: maxSize,
        accept: accept
      }));
    }
    if (progress && progress !== 100) {
      return /*#__PURE__*/React.createElement(UploadProgress, {
        variant: progressVariant,
        percent: progress,
        name: fileName,
        onCancel: handleUploadCancel
      });
    }
    return inputComponent || /*#__PURE__*/React.createElement(DefaultContent, {
      minSize: minSize,
      maxSize: maxSize,
      accept: accept
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-testid": "dropzone-container"
  }, getRootProps({
    className: classNames('pgn__dropzone', className, {
      'pgn__dropzone-validation-error': isMultipleDragged || errors.length > 0 || isDragReject,
      'pgn__dropzone-active': isDragActive && !isDragReject
    })
  }), props), /*#__PURE__*/React.createElement("input", getInputProps()), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column justify-content-around align-items-center w-100"
  }, renderContent()));
}
Dropzone.defaultProps = {
  className: undefined,
  accept: undefined,
  maxSize: Infinity,
  minSize: 0,
  onUploadProgress: function onUploadProgress() {},
  onUploadCancel: function onUploadCancel() {},
  errorMessages: {
    invalidType: undefined,
    invalidSizeLess: undefined,
    invalidSizeMore: undefined,
    multipleDragged: undefined,
    uploadError: undefined
  },
  progressVariant: 'spinner',
  validator: undefined,
  inputComponent: undefined
};
Dropzone.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /**
   * Set accepted file types.
   * This should be an object with the keys set to the
   * [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
   * and the values to an array of file extensions.
   */
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  /** Maximum file size (in bytes). */
  maxSize: PropTypes.number,
  /** Minimum file size (in bytes). */
  minSize: PropTypes.number,
  /**
   * A callback fired each time an upload progress event happens,
   * receives (percentageUploaded, progressEvent) as arguments.
   */
  onUploadProgress: PropTypes.func,
  /** A callback fired upon successful upload, receives Response object as a single argument. */
  onUploadCancel: PropTypes.func,
  /**
   * A function responsible for uploading the file.
   * Receives following object as its only argument
   * {
   *   @param {object} fileData - Metadata about the uploaded file.
   *   @param {object} requestConfig - Config to pass to `axios` call.
   *   @param {function} handleError - Function to communicate to `Dropzone` that file upload resulted in failure,
   *   expects `Error` object to be passed as its only argument.
   * }
   */
  onProcessUpload: PropTypes.func.isRequired,
  /**
   * An object containing error messages, following are supported:
   * 1) invalidType - A message to display when file of invalid type is dropped into `Dropzone`.
   * Defaults to 'The file type must be {filType} file / one of {fileTypes} files.'.
   * 2) invalidSizeLess - A message to display when file of size less than minSize value is dropped into `Dropzone`.
   * Defaults to 'File must be larger than {minSize}.'.
   * 3) invalidSizeMore - A message to display when file of size greater than maxSize value is dropped into `Dropzone`.
   * Defaults to 'File must be less than {maxSize}.'.
   * 4) multipleDragged - A message to display when multiple files are dragged over `Dropzone`.
   * 5) uploadError - A message to display in case upload results in an error
   */
  errorMessages: PropTypes.shape({
    invalidType: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    invalidSizeLess: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    invalidSizeMore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    multipleDragged: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    uploadError: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),
  /** Specifies how the upload progress should be displayed, component shows either spinner or a progress bar. */
  progressVariant: PropTypes.oneOf(['spinner', 'bar']),
  /**
   * Custom validation function, receives `File` object as its only argument.
   * Note that this function will be invoked as a last validation step before beginning an upload process.
   */
  validator: PropTypes.func,
  /** A component to display initial state of the `Dropzone`. */
  inputComponent: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node])
};
export default Dropzone;
//# sourceMappingURL=index.js.map