/**
 * Created by Gary Hill on 9/6/2014.
 */

$(document).ready(function() {

    var aboutContentItems = $('#aboutContainer > div');
    for (var i = 0, len = aboutContentItems.length; i < len; i++ ) {
        $(aboutContentItems[i]).hide();
    }
    $(aboutContentItems[0]).show();

    $('.pageMenu li').each( function (index) {

        var item = $(this);
        item.on('click', function() {
            item.siblings().removeClass('active');
            item.addClass('active');

            for (var i = 0, len = aboutContentItems.length; i < len; i++ ) {
                $(aboutContentItems[i]).hide();
            }
            $(aboutContentItems[index]).fadeIn(500);

            switch (index) {
                case 0:
                    $('#imageTwo').hide().attr('src', 'includes/img/acacia.png').fadeIn(700);
                    break;
                case 1:
                    $('#imageTwo').hide().attr('src', 'includes/img/india.png').fadeIn(700);
                    break;
                case 2:
                    $('#imageTwo').hide().attr('src', 'includes/img/bodiumcastle.png').fadeIn(700);
                    break;
                case 3:
                    $('#imageTwo').hide().attr('src', 'includes/img/academy.png').fadeIn(700);
                    break;
                default:
                    break;
            }
        });
    });
});







