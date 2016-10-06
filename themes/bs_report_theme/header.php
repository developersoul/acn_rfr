<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>ACN</title>
  <!-- Latest compiled and minified CSS -->
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/public/css/main.css" media="screen" title="no title">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
</head>
<body id="acn_reports">

<a href="#" id="open-nav" style="position: absolute; right: 60px; top: 40px">Menú</a>



<div class="nav">
  <div class="nav__logo" style="height: 120px;background: #fff">
    <img src="<?php echo get_template_directory_uri(); ?>/public/img/logo.png" alt="acn logo">
  </div>

  <h4 class="color-red nav__subtitle">
    RELIGIOUS<br>
    <span class="color-white">FREEDOM</span><br>
    REPORT<br>
    2016
  </h4>

  <?php
      $args = array(
        'theme_location' => 'main',
        'container' => false,
        'echo' => true
      );

      $menu = wp_nav_menu( $args);

   ?>
</div>

<script type="text/javascript">
  var nav = jQuery('.nav');
  var bod = jQuery('body');
  var open = false;

  jQuery('#open-nav').on('click', openNav);
  function openNav(evt) {
    evt.preventDefault();
    if(open) {
      nav.css({'left': '0'});
      bod.css({'marginLeft': '200px'});
    } else {
      nav.css({'left': '-200px'});
      bod.css({'marginLeft': '0'});
    }

    open = !open;
  }
</script>
