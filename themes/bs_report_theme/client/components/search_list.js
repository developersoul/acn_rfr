'use strict';
import Vue from 'vue';
import $ from 'jquery';

export default function() {
  Vue.component('search-list', {
    template: '#search-list-template',
    props: ['reports', 'continents', 'dir'],

    ready() {
      var reports = JSON.parse(this.reports);
      var continents = JSON.parse(this.continents);
      
      let result = continents['Afrika'].map(coun => {
        reports.filter(rep => rep.meta_country == coun);
      });

      console.log(result);

    }

  })

}
