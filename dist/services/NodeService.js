(function (global, factory) {
   if (typeof define === "function" && define.amd) {
      define(["module", "axios"], factory);
   } else if (typeof exports !== "undefined") {
      factory(module, require("axios"));
   } else {
      var mod = {
         exports: {}
      };
      factory(mod, global.axios);
      global.NodeService = mod.exports;
   }
})(this, function (module, axios) {
   "use strict";

   module.exports = {

      getItems(options) {
         if (!options) {
            options = {};
         }
         options.skipCount = options.skipCount || 0;
         options.maxItems = options.maxItems || 10;
         options.relativePath = options.relativePath || "/";
         options.proxyPrefix = options.proxyPrefix || "/share/proxy/alfresco-api";

         let url = `${options.proxyPrefix}/-default-/public/alfresco/versions/1/nodes/-root-/children?include=path&skipCount=${options.skipCount}&maxItems=${options.maxItems}&relativePath=${options.relativePath}`;
         if (localStorage.ticket) {
            url += `&alf_ticket=${localStorage.ticket}`;
         }
         return axios.get(url);
      }
   };
});