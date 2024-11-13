const materias = [];

function adicionarMateria() {
    const nomeMateria = document.getElementById("materia").value;
    const frequenciaMinima = parseFloat(document.getElementById("frequencia").value);
    const totalAulas = parseFloat(document.getElementById("aulas").value);
    const faltas = parseFloat(document.getElementById("faltas").value);

    if (!nomeMateria || isNaN(frequenciaMinima) || isNaN(totalAulas) || isNaN(faltas)) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const maxFaltasPermitidas = totalAulas * ((100 - frequenciaMinima) / 100);
    const frequenciaAtual = ((totalAulas - faltas) / totalAulas) * 100;
    const faltasRestantes = maxFaltasPermitidas - faltas;

    let resultadoTexto = '';

    if (faltas >= maxFaltasPermitidas) {
        resultadoTexto = `Matéria: ${nomeMateria} - Você já reprovou por falta. Frequência: ${frequenciaAtual.toFixed(2)}% (mínimo exigido: ${frequenciaMinima}%)`;
    } else {
        resultadoTexto = `Matéria: ${nomeMateria} - Você ainda pode faltar ${Math.floor(faltasRestantes)} aula(s) antes de reprovar.`;
    }

    materias.push(resultadoTexto);
    exibirMaterias();
    limparCampos();
}

function exibirMaterias() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    materias.forEach((materia, index) => {
        const p = document.createElement("p");
        p.textContent = `${index + 1}. ${materia}`;
        resultadoDiv.appendChild(p);
    });
}

function limparCampos() {
    document.getElementById("materia").value = "";
    document.getElementById("frequencia").value = "";
    document.getElementById("aulas").value = "";
    document.getElementById("faltas").value = "";
}

function limparMaterias() {
    materias.length = 0;
    exibirMaterias();
}
