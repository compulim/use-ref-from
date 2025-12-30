"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var use_ref_from_1 = require("use-ref-from");
// eslint-disable-next-line react-hooks/rules-of-hooks
var ref = (0, use_ref_from_1.useRefFrom)(123);
var value = ref.current;
console.log(value);
