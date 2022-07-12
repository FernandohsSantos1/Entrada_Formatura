
const verificaTurma = () => {
    nome = document.getElementById('nome').value;
    turma = document.getElementById('turma').value;
    listaTurma = ['201','202','203']
    if (listaTurma.includes(turma)){
        document.getElementById('permissao').innerText = 
        `Acesso liberado para ${nome}!`
    } else {
        document.getElementById('permissao').innerText = 
        `Acesso negado! Código de turma ${turma} inexistente.`
    }
}