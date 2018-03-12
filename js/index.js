function ajaxFormSubmitClick(e) {
    if ($('#ajaxForm')[0].checkValidity());
    e.preventDefault();
    
    $.ajax ({
        url: "https://tranquil-sierra-86540.herokuapp.com/sava.taras@gmail.com",
        method: 'POST',
        data: {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'message': $('#message').val(),
        }, 
        dataType: 'json'
    })
    .done( () => {
        // modal appears here, but crashed
        $("#thank-u").modal();
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });
};