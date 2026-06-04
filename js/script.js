console.log("hola hola");

// SEARCH BAR
$(document).ready(function() {

    $('#s-icon').on('click', function() {
        $('#search-input').toggleClass('open');
        if ($('#search-input').hasClass('open')) {
        $('#search-input').focus();
        }
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('#search-form').length) {
        $('#search-input').removeClass('open');
        }
    });
});