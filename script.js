
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa a busca dos dados assim que a página estiver pronta
    inicializarDashboard();
});

function inicializarDashboard() {
    // Simulando uma resposta vinda de uma base de dados ambiental
    const dadosDadosAmbientais = {
        areaAlerta: 452.8, 
        focosCalor: 1240,
        regiaoAfetada: "Pará",
        historicoAlertas: [
            { id: 1, estado: "MT", area: 120, data: "15/06/2026" },
            { id: 2, estado: "PA", area: 210, data: "17/06/2026" },
            { id: 3, estado: "AM", area: 122.8, data: "18/06/2026" }
        ]
    };

    // Executa as funções de atualização passando os dados simulados
    atualizarCards(dadosDadosAmbientais);
    gerarListaAlertas(dadosDadosAmbientais.historicoAlertas);
}

function atualizarCards(dados) {
    // Captura os elementos do HTML pelos IDs únicos
    const elementoArea = document.getElementById("card-area");
    const elementoFocos = document.getElementById("card-focos");
    const elementoRegiao = document.getElementById("card-regiao");

    // Injeta os valores formatados se os elementos existirem na tela
    if (elementoArea) elementoArea.innerText = `${dados.areaAlerta} km²`;
    if (elementoFocos) elementoFocos.innerText = dados.focosCalor.toLocaleString('pt-BR');
    if (elementoRegiao) elementoRegiao.innerText = dados.regiaoAfetada;
}

function gerarListaAlertas(alertas) {
    const conteinerAlertas = document.getElementById("painel-alertas");
    
    if (conteinerAlertas) {
        // Monta a estrutura HTML da lista dinamicamente
        let htmlLista = `<h4 style="color: #1b4332; margin-bottom: 15px;">⚠️ Últimos Alertas no Bioma:</h4>`;
        htmlLista += `<ul class="lista-alertas">`;
        
        alertas.forEach(alerta => {
            htmlLista += `
                <li class="item-alerta">
                    <span>📅 ${alerta.data} - Estado: <strong>${alerta.estado}</strong></span>
                    <span>Área: <strong>${alerta.area} km²</strong></span>
                </li>
            `;
        });
        
        htmlLista += `</ul>`;
        htmlLista += `<p style="margin-top: 20px; font-size: 0.85rem; color: #6c757d;">Dados atualizados automaticamente via script.</p>`;
        
        // Substitui o texto de "Carregando..." pela lista real
        conteinerAlertas.innerHTML = htmlLista;
    }
}
