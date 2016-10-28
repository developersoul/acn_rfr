<template id="search-country-template">
<div class="map__search">
  <div class="col-md-3 col-sm-10">
      <div class="map__search_input-container">
      <input
        type="text" 
        v-model="country" 
        v-on:keyup="search"
        v-on:keydown.down="down" 
        v-on:keydown.up="up"
        v-on:keyup.enter="enter"
        class="map__search_input" 
      />
    </div>

    <ul class="map__search_results">
      <li v-for="item in items" v-bind:class="{'selected': isSelected($index)}">
        <a href="{{item.guid}}">{{item.meta_country}}</a>
        <span>
          <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/Stable.svg" alt="">
        </span>
      </li>
    </ul>
  </div>
  </div>

</template>

<search-country reports='<?php echo json_encode( getReports(array('lang' => $getReportLang) )); ?>'></search-country>
