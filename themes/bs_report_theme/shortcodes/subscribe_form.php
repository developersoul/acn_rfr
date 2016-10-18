<?php
?>
<subscribe-form></subscribe-form>

<template id="subscribe-form-template">
  <form action="">

    <div class="input-container">
       <label for="" class="color-red">
            <?php echo gett('Name') ?>
            <span
              class="input-container__error"
              v-bind:class="{ 'input-container__error-show': validation.name}"
            > 
              <?php echo gett('Invalid') ?>
            </span>
          </label>

      <input type="text" v-model="name" />
    </div>

    <div class="input-container">
        <label for="" class="color-red">
            <?php echo gett('Email') ?>
            <span
              class="input-container__error"
              v-bind:class="{ 'input-container__error-show': validation.email}"
            > 
              <?php echo gett('Invalid') ?>
            </span>
          </label>
      <input type="text" v-model="email" />
    </div>

    <div class="input-container">
      <input type="text">
    </div>

     <div class="input-container">
          <label for="" class="color-red"><?php echo gett('Country') ?></label>
      <select name="" id="" v-model="country">
        <?php foreach(getCountries() as $country): ?>
          <option value="<?php echo $country ?>"><?php echo $country; ?></option>
        <?php endforeach; ?>
      </select>
    </div>

     <div class="input-container">
          <label for="" class="color-red"><?php echo gett('Language') ?></label>
          <select name="" id="" v-model="language"></select>
        </div>


    <button class="button"><?php echo gett('Subscribe') ?></button>
  </form>
</template>