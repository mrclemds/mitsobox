"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEXT = void 0;
const TEXT = text => {
  let buff = new Buffer(text, 'ucs2').toString('binary');
  return buff;
};
exports.TEXT = TEXT;