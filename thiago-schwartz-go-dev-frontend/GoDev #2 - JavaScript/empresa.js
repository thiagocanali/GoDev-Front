let lista = [];

const cadastrar = () => {

    const nomeEmpresa = document.getElementById('nome').value;
    const cnpjEmpresa = document.getElementById('cnpj').value;
    const telefoneEmpresa = document.getElementById('telefone').value;
    const statusEmpresa = document.getElementById('status').value;

    const empresa = {
        nome: nomeEmpresa,
        cnpj: cnpjEmpresa,
        telefone: telefoneEmpresa,
        status: statusEmpresa
    };
    lista.push(empresa);
    console.log(lista);
    listarDados();
}

const limparCampos = () => {
    document.getElementById('nome').value = '';
    document.getElementById('cnpj').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('status').value = '';
}

const limparLista = () => {
    lista = [];
    console.log(lista);
    listarDados();
}

const listarDados = () => {
    document.getElementById('lista').innerHTML = '';
    lista.forEach(empresa => {
        document.getElementById('lista').innerHTML +=
            '<tr>' +
            '<td>' + empresa.nome + '</td>' +
            '<td>' + empresa.cnpj + '</td>' +
            '<td>' + empresa.telefone + '</td>' +
            '<td>' + empresa.status + '</td>' +
            '</tr>';
    });

}