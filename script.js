document.addEventListener("DOMContentLoaded", () => {
    inicializarDashboard();
});

function inicializarDashboard() {
    // Dados simulados de monitoramento ambiental
    const dadosAmbientais = {
        areaAlerta: 452.8, 
        focosCalor: 1240,
        regiaoAfetada: "Pará",
        historicoAlertas: [
            { id: 1, estado: "MT", area: 120, data: "15/06/2026" },
            { id: 2, estado: "PA", area: 210, data: "17/06/2026" },
            { id: 3, estado: "AM", area: 122.8, data: "18/06/2026" }
        ]
    };

    // Distribui os dados para os componentes visuais
    atualizarCards(dadosAmbientais);
    gerarListaAlertas(dadosAmbientais.historicoAlertas);
}

function atualizarCards(dados) {
    const elementoArea = document.getElementById("card-area");
    const elementoFocos = document.getElementById("card-focos");
    const elementoRegiao = document.getElementById("card-regiao");

    if (elementoArea) elementoArea.innerText = `${dados.areaAlerta} km²`;
    if (elementoFocos) elementoFocos.innerText = dados.focosCalor.toLocaleString('pt-BR');
    if (elementoRegiao) elementoRegiao.innerText = dados.regiaoAfetada;
}

function gerarListaAlertas(alertas) {
    const conteinerAlertas = document.getElementById("painel-alertas");
    
    if (conteinerAlertas) {
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
        htmlLista += `<p style="margin-top: 20px; font-size: 0.85rem; color: #6c757d;">Dados atualizados automaticamente.</p>`;
        
        conteinerAlertas.innerHTML = htmlLista;
    }
}


