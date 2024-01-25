function enviarFormulario() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var url = 'http://146.235.50.244:8081/api-email-envio/email-api/envio-email';

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

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert("Enviado com sucesso");
                document.getElementById("result").innerHTML = xhr.responseText;
            } else {
                alert("Erro ao enviar");
                document.getElementById("result").innerHTML = xhr.responseText;
            }
        }
    };

    xhr.send(JSON.stringify(corpoJson));
}
