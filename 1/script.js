$(function () {

    $('#postSubmitButton').click(function () {

        let formData = $('#ajaxForm').serialize();

        $.post('/form_submit', formData, function (response) {
            $('#fileContent').text(response['fileContent']);
            $('#fileContent').css('white-space', 'pre-wrap');
        });
    });

    $('#getSubmitButton').click(function () {

        let formData = $('#ajaxForm').serialize();

        $.get('/form_submit', formData, function (response) {
            $('#fileContent').text(response['fileContent']);
            $('#fileContent').css('white-space', 'pre-wrap');
        });
    });
})