(function (global, factory) {
   if (typeof define === "function" && define.amd) {
      define(["module"], factory);
   } else if (typeof exports !== "undefined") {
      factory(module);
   } else {
      var mod = {
         exports: {}
      };
      factory(mod);
      global.Breadcrumbs = mod.exports;
   }
})(this, function (module) {
   "use strict";

   module.exports = {

      createBreadcrumbs(input) {
         let lastPathElement = "/";
         let breadcrumbs = [{
            label: "Home",
            relativePath: lastPathElement
         }];
         input.relativePath.split("/").filter(function (name) {
            return name.trim() !== "";
         }).forEach(function (pathElement) {
            let currRelativePath = lastPathElement + pathElement + "/";
            breadcrumbs.push({
               label: pathElement,
               relativePath: currRelativePath
            });
            lastPathElement = currRelativePath;
         });
         return {
            lastPathElement: lastPathElement,
            breadcrumbs: breadcrumbs
         };
      }
   };
});