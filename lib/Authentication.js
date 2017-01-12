'use strict';

/* global module, require */
const axios = require('axios');

module.exports = {
   
   login(username, password) {
      return new Promise((resolve, reject) => {
         if (localStorage.ticket) {
            // The user is already authenticated so nothing more is required...
            this.onChange(true);
            resolve(true);
         }
         else
         {
            // There is no session ticket in local storage so we need to make an XHR
            // request to get one...
            axios.post(`proxy/alfresco/service/api/login`, {
               username: username,
               password: password
            }).then(response => {
               if (response.status === 200)
               {
                  // Authentication was successful so save the ticket in local storage
                  // and call onChange with an argument of true to indicate that authentication
                  // has been successful...
                  localStorage.ticket = response.data.data.ticket;
                  this.onChange(true);
                  resolve(true);
               }
               else
               {
                  // If authentication failed for any reason call onChange with an argument
                  // of false to indicate that login has failed...
                  this.onChange(false);
                  resolve(false);
               }
            });
         }
      });
   },

   getTicket() {
      return localStorage.ticket;
   },

   logout() {
      delete localStorage.ticket;
      this.onChange(false);
   },

   loggedIn() {
      return !!localStorage.ticket;
   },

   onChange() {}
};