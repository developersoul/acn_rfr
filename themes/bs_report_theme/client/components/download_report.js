'use strict';
import Vue from 'vue';
import validator from 'validator';
import request from 'axios';
import $ from 'jquery';

let initialState = {
  name: '',
  email: '',
  language: '',
  isValid: false,
  country: '',
  validation: {
    name: false,
    email: false
  }
};

export default function () {
  Vue.component('form-download-report', {
    template: '#form-download-template',
    props: ['country', 'lang'],
    data() {
      return initialState;
    },

    methods: {
      validate(opts = {field: ''}) {
        const {field} = opts;
        const data = this.$data[field];
        let validation = this.$data.validation;

        switch (field) {
          case 'name':
            validation = {...validation, name: validator.isEmpty(data)};
          break;
          case 'email':
            validation = {...validation, email: !validator.isEmail(data)};
          break;
        };

        this.$set('validation', validation);
        this.$set('isValid', Object.keys(validation).filter(key => validation[key] == true).length == 0);
      },

      validateAll() {
        Object.keys(this.validation).forEach(field => this.validate({field}));
      },

      onSubmit() {
        const {name, email, country, language, lang} = this;
        this.validateAll();
        const fields = {name, country};
        console.log(fields);
        let mergeFields = Object.keys(fields).reduce((obj, key) => {
          let newOb = {};
          let name = key.toUpperCase();
          newOb[name] = data[key];
          return {...obj, ...newOb};
        }, {}); 

        let data = {
            "email_address": email,
            "status": "subscribed",
            "merge_fields": mergeFields,
            "update_existing": true
          };      

        let payload = {action: 'mailchimp_subscribe', lang, data};        

        if(this.isValid) {
          $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'post',
            data: payload
          })
          .done(res => console.log(res.data))
          .fail(err => console.log(err));
        }
      }
    }
  });
}