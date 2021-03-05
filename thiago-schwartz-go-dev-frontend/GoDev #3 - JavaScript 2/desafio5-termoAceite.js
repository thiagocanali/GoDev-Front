const lista = []

const cadastrar = () => {
    const nomeFormulario = document.getElementById('nome').value;

    if (nomeFormulario) {
        document.getElementById('nomeObrigatorio').innerHTML = ''
    } else {
        return document.getElementById('nomeObrigatorio').innerHTML = 'Campo "Nome" Obrigatório'
    }

    const ptFormulario = document.getElementById('pt').value;

    if (ptFormulario) {
        document.getElementById('ptObrigatorio').innerHTML = ''
    } else {
        return document.getElementById('ptObrigatorio').innerHTML = 'Campo "TermoPT" Obrigatório'
    }

    const enFormulario = document.getElementById('en').value;

    if (enFormulario) {
        document.getElementById('enObrigatorio').innerHTML = ''
    } else {
        return document.getElementById('enObrigatorio').innerHTML = 'Campo "TermoEN" Obrigatório'
    }

    const esFormulario = document.getElementById('es').value;

    if (esFormulario) {
        document.getElementById('esObrigatorio').innerHTML = ''
    } else {
        return document.getElementById('esObrigatorio').innerHTML = 'Campo "TermoES" Obrigatório'
    }

    const termoAceite = {
        nome : nomeFormulario,
        pt : ptFormulario,
        en: enFormulario,
        es : esFormulario
    }

    lista.push(termoAceite)
    limpar();
    desenhaLista();
}

const limpar = () => {

    document.getElementById('nome').value = '';
    document.getElementById('nomeObrigatorio').innerHTML = '';
    document.getElementById('pt').value = '';
    document.getElementById('en').value = '';
    document.getElementById('es').value = '';

}

const desenhaLista = () => {

    document.getElementById('lista').innerHTML = '';
    lista.forEach((termo, index) => {
        document.getElementById('lista').innerHTML += '<tr>' +
        '<td>'+termo.nome+'</td>'+
        '<td>'+termo.nome+'</td>'+
        '<td>'+termo.nome+'</td>'+
        '<td>'+termo.nome+'</td>'+
        '<td><button onclick="excluirLinha('+index+')" class="btn btn-danger">Apagar</button></td>'+

        '</tr>';
        ;
    });

}

const excluirLinha = (linha) => {
    lista.splice(linha, 1);
    desenhaLista();

}