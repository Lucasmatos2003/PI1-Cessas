function getSelectedRadioValue(formName) {
    const radios = document.getElementsByName(formName);
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function sendMail() {
    const foto = getSelectedRadioValue("documento");
    const turno = getSelectedRadioValue("turno");
    const matricula = getSelectedRadioValue("ensino");
    const dificuldade = getSelectedRadioValue("deficiencia");
    const serie = getSelectedRadioValue("serie");

    if (!foto) {
        alert("Por favor, tire uma foto.");
        return;
    }

    if (!turno) {
        alert("Por favor, selecione um turno.");
        return;
    }

    if (!matricula) {
        alert("Por favor, selecione uma matricula.");
        return;
    }

    if (!dificuldade) {
        alert("Por favor, selecione uma deficiencia.");
        return;
    }

    if (!serie) {
        alert("Por favor, selecione uma serie.");
        return;
    }

    let parms = {
        foto: foto,
        turno: turno,
        serie: serie,
        matricula: matricula,
        dificuldade: dificuldade,
        telefone: document.getElementsByName("telefone").value,

    };

    emailjs.send("service_s69xwzr", "template_tvu3aj4", parms)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email enviado com sucesso!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Houve um erro ao enviar o email: ' + JSON.stringify(error));
    });

}
