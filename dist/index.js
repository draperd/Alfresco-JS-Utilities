(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Authentication", "./services/NodeService", "./utils/navigation/Breadcrumbs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Authentication"), require("./services/NodeService"), require("./utils/navigation/Breadcrumbs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Authentication, global.NodeService, global.Breadcrumbs);
    global.index = mod.exports;
  }
})(this, function (exports, _Authentication, _NodeService, _Breadcrumbs) {
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
  Object.defineProperty(exports, "NodeService", {
    enumerable: true,
    get: function () {
      return _NodeService.NodeService;
    }
  });
  Object.defineProperty(exports, "BreadcrumbUtils", {
    enumerable: true,
    get: function () {
      return _Breadcrumbs.BreadcrumbUtils;
    }
  });
});