'use strict';
import $ from 'jquery';
import Vue from 'vue';
import nav from './lib/nav';
import map from './components/map';
import religionsChart from './components/religions_chart';

import searchCountry from './components/search_country';
import searchList from './components/search_list';
import downloadFormReport from './components/download_report';
import subscribeForm from './components/subscribe_form';
import homeHeader from './lib/home_header';
import footerNav from './lib/footer_nav';
import countries from './lib/country_lang';

$(() => {
  nav();
  map();
  religionsChart();
  downloadFormReport();
  searchCountry();
  searchList();
  subscribeForm();
  footerNav();
  homeHeader();
  // countries();

  new Vue({
    el: '#acn_reports'
  });

  const windowHeight = window.innerHeight;

  if( windowHeight  > 700) {
    document.querySelector('.home_header').style.height = `${windowHeight}px`;
  }
  

})
