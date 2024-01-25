function enviarFormulario() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    let url = 'http://146.235.50.244:8081/api-email-envio/email-api/envio-email';

    console.log(lastname);

    if (!firstname || !lastname || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var corpoJson = {
        emailReciver: "contato@kakoarq.com.br",
        bodyEmail: email,
        emailSubject: "contato@kakoarq.com.br",
        firstname: firstname,
        lastname: lastname
    };

    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json",
        data: JSON.stringify(corpoJson),
        success: function (response) {
            alert("Enviado com sucesso");
            $("#result").empty().append(response);
        },
        error: function (error) {
            alert("Erro ao enviar");
            $("#result").empty().append(error);
        }
    });
}
