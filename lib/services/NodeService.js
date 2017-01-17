'use strict';

/* global module, require */
const axios = require('axios');

module.exports = {

   getItems(options) {
      if (!options)
      {
         options = {};
      }
      options.skipCount = options.skipCount || 0;
      options.maxItems = options.maxItems || 10;
      options.relativePath = options.relativePath || '/';

      let url = `proxy/alfresco-api/-default-/public/alfresco/versions/1/nodes/-root-/children?include=path&skipCount=${options.skipCount}&maxItems=${options.maxItems}&relativePath=${options.relativePath}`;
      if (localStorage.ticket)
      {
         url += `&alf_ticket=${localStorage.ticket}`;
      }
      return axios.get(url);
   }
};