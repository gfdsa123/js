$(function () {
    $('#delete').click(function (e) {

        let $formData = $('#ajax_form').serialize();

        $.get('/delete', $formData, function (data, status) {
            $('#status').text(data.toString());
        });
    });

    $('#changeName').click(function (e) {

        let $formData = $('#ajax_form').serialize();

        $.get('/change_name', $formData, function (data, status) {
            $('#status').text(data.toString());
        });
    });
});