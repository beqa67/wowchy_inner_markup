
$(document).ready(function () {
    var multipeItemsCarousel = new Swiper('.multiple-items-carousel-section__slider', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        mousewheel: {
            forceToAxis: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        loop: true
    });


    $('select').select2({
        allowClear: false,
        placeholder: 'Categories',
        minimumResultsForSearch: -1,
        theme: 'bootstrap',
    });

    $('.wo-product-info-read-more').click(function () {
        $(this).toggleClass('wo-product-info-read-more--expanded')
        $('.wo-product-info').toggleClass('wo-product-info--expanded')
    })

    const choosePriceInput = $('.wo-inner-side__choose-price-input')
    const choosePriceItem = $(".wo-inner-side__choose-price-item")

    $('.wo-inner-side__choose-price-icon--plus').click(icreasePrice)
    $('.wo-inner-side__choose-price-icon--minus').click(decreasePrice)
    choosePriceItem.click(choosePriceItemFun)



    let priceIsLast = null;
    let priceIsFirst = null;

    function icreasePrice() {
        let changeValue = false;
        $('.wo-inner-side__choose-price-icon--minus').removeClass('wo-inner-side__choose-price-icon--disabled')
        priceIsFirst = false
        choosePriceItem.each(function (index) {
            if ($(this).data('value') == choosePriceInput.val() && !changeValue && !priceIsLast) {
                const nextValue = $(this).next().data('value')
                choosePriceInput.val(nextValue)
                $('.wo-inner-side__choose-price-input-label-price').html(nextValue)
                choosePriceItem.removeClass('wo-inner-side__choose-price-item--active')
                $(this).next().addClass('wo-inner-side__choose-price-item--active')
                changeValue = true
                isPriceIsLast()
            }
        });
    }

    function decreasePrice() {
        let changeValue = false;
        $('.wo-inner-side__choose-price-icon--plus').removeClass('wo-inner-side__choose-price-icon--disabled')
        priceIsLast = false
        choosePriceItem.each(function (index) {
            if ($(this).data('value') == choosePriceInput.val() && !changeValue && !priceIsFirst) {
                const prevtValue = $(this).prev().data('value')
                choosePriceInput.val(prevtValue)
                $('.wo-inner-side__choose-price-input-label-price').html(prevtValue)
                choosePriceItem.removeClass('wo-inner-side__choose-price-item--active')
                $(this).prev().addClass('wo-inner-side__choose-price-item--active')
                changeValue = true
                isPriceIsFirst()
            }
        });
    }

    function choosePriceItemFun() {
        choosePriceItem.removeClass('wo-inner-side__choose-price-item--active')
        $(this).addClass('wo-inner-side__choose-price-item--active')
        choosePriceInput.val($(this).data('value'))
        $('.wo-inner-side__choose-price-input-label-price').html($(this).data('value'))
        isPriceIsLast()
        isPriceIsFirst()
    }

    function isPriceIsLast() {
        if (parseInt(choosePriceInput.val()) >= parseInt(choosePriceItem.last().data('value'))) {
            $('.wo-inner-side__choose-price-icon--plus').addClass('wo-inner-side__choose-price-icon--disabled')
            priceIsLast = true
        } else {
            $('.wo-inner-side__choose-price-icon--plus').removeClass('wo-inner-side__choose-price-icon--disabled')
            priceIsLast = false
        }
    }

    function isPriceIsFirst() {
        if (parseInt(choosePriceInput.val()) <= parseInt(choosePriceItem.first().data('value'))) {
            $('.wo-inner-side__choose-price-icon--minus').addClass('wo-inner-side__choose-price-icon--disabled')
            priceIsFirst = true
        } else {
            $('.wo-inner-side__choose-price-icon--minus').removeClass('wo-inner-side__choose-price-icon--disabled')
            priceIsFirst = false
        }
    }

});
