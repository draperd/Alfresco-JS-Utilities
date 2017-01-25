(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Authentication"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Authentication"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Authentication);
    global.index = mod.exports;
  }
})(this, function (exports, _Authentication) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Authentication", {
    enumerable: true,
    get: function () {
      return _Authentication.Authentication;
    }
  });
});