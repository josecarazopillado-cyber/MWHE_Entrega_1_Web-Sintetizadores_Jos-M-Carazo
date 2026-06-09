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

    function filterProducts(filter) {
        if (filter === 'todos') {
            $('.product-item').fadeIn(300);
        } else {
            $('.product-item').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        }
    }

    // DROPDOWN FILTER
    $('.filter-item').on('click', function() {
        const filter = $(this).data('filter');
        const label = $(this).text();

        $('.filter-dd').text(label);

        $('.filter-item').removeClass('active');
        $(this).addClass('active');

        filterProducts(filter);
    });

    // DESKTOP FILTER
    $('.filter-tab').on('click', function() {
        $('.filter-tab').removeClass('active');
        $(this).addClass('active');
        filterProducts($(this).data('filter'));
    });
});

