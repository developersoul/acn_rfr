<template id="search-country-template">
  <div class="map__search_input-container">
    <input type="text" v-model="country" v-on:keyup="search" class="map__search_input" />
  </div>

  <ul class="map__search_results">
    <li v-for="item in items">
      <a href="/report/{{item.meta_country.toLowerCase().replace(' ', '-')}}">{{item.meta_country}}</a>
      <span>
        <img src="<?php echo get_template_directory_uri(); ?>/public/img/icons/{{item.meta_situation}}.svg" alt="">
      </span>
    </li>
  </ul>
</template>
