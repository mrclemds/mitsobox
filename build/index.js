"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.okCancel = exports.ok = exports.abortRetryIgnore = void 0;
var _ffiNapi = _interopRequireDefault(require("ffi-napi"));
var _text = require("./text");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const user32 = new _ffiNapi.default.Library('user32', {
  MessageBoxW: ['int32', ['int32', 'string', 'string', 'int32']]
});
const ok = async (title, message) => await user32.MessageBoxW(0, (0, _text.TEXT)(message), (0, _text.TEXT)(title), 0);
exports.ok = ok;
const okCancel = async (title, message) => {
  let response = await user32.MessageBoxW(0, (0, _text.TEXT)(message), (0, _text.TEXT)(title), 1);
  return response == 1 ? 'OK' : 'CANCEL';
};
exports.okCancel = okCancel;
const abortRetryIgnore = async (title, message) => {
  let response = await user32.MessageBoxW(0, (0, _text.TEXT)(message), (0, _text.TEXT)(title), 2);
  return response == 3 ? 'ABORT' : response == 4 ? 'RETRY' : 'IGNORE';
};
exports.abortRetryIgnore = abortRetryIgnore;