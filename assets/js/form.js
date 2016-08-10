$('form').on('submit', function () {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value

    window.location='mailto:contact@ronakshah.net?subject='+ name + ' - ' + subject+'&body=' + message;
    return true;
});
