'use strict';

export default function modalIframe() {
  $('.open-modal-iframe').on('click', function(e) {
    e.preventDefault();
    let url = $(this).attr('href');
    let template = `
      <div class="modal modal--show">
        <div class="iframe-container">
          <iframe src="${url}" frameborder="0" height="315" width="100%" allowfullscreen=""></iframe>
        </div>
      </div>
    `;

    $('body').append(template);
  });
}