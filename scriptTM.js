const professions = {
    'Meseros': { data: [30, 20, 40, 50, 25, 35, 45, 55, 60, 30, 40, 50, 20, 25, 35, 45], notes: "Alta demanda en áreas turísticas y restaurantes." },
    'Cajeros': { data: [25, 30, 20, 35, 40, 25, 50, 45, 35, 25, 30, 40, 20, 30, 25, 40], notes: "Requieren atención al cliente y manejo de caja." },
    'Cocineros': { data: [40, 35, 45, 50, 25, 55, 60, 45, 40, 35, 50, 45, 30, 35, 55, 60], notes: "Necesidad en restaurantes y hoteles." },
    'Servicio de Limpieza': { data: [50, 40, 30, 35, 45, 55, 40, 50, 60, 55, 30, 25, 35, 40, 55, 60], notes: "Demanda constante en oficinas y edificios." },
    'Anaquelistas': { data: [35, 25, 40, 45, 30, 50, 35, 45, 25, 30, 40, 50, 35, 25, 45, 55], notes: "Importante en tiendas y supermercados." },
    'Guardias de Seguridad': { data: [20, 30, 25, 40, 35, 45, 50, 30, 25, 40, 45, 35, 30, 25, 50, 40], notes: "Crucial en áreas de alta seguridad." }
};

const delegations = [
    'Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán',
    'Cuajimalpa', 'Cuauhtémoc', 'Gustavo A. Madero', 'Iztacalco',
    'Iztapalapa', 'Magdalena Contreras', 'Miguel Hidalgo', 'Milpa Alta',
    'Tláhuac', 'Tlalpan', 'Venustiano Carranza', 'Xochimilco'
];

function updateCharts() {
    const profession = document.getElementById('profession').value;
    const locality = document.getElementById('locality').value;
    const professionData = professions[profession].data;
    const notes = professions[profession].notes;

    const barData = [{
        x: delegations,
        y: professionData,
        type: 'bar',
        marker: {
            color: '#0288d1'
        },
        hoverinfo: 'x+y',
        hoverlabel: {
            bgcolor: '#81d4fa'
        }
    }];
    const barLayout = {
        title: `Demanda de ${profession} en CDMX`,
        xaxis: { title: 'Delegaciones' },
        yaxis: { title: 'Demanda' },
        plot_bgcolor: '#e0f7fa',
        paper_bgcolor: '#e0f7fa'
    };
    Plotly.newPlot('barChart', barData, barLayout);

    const pieData = [{
        labels: delegations,
        values: professionData,
        type: 'pie',
        marker: {
            colors: ['#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b']
        },
        hoverinfo: 'label+percent',
        hoverlabel: {
            bgcolor: '#81d4fa'
        }
    }];
    const pieLayout = {
        title: `Distribución de la Demanda de ${profession} en CDMX`,
        plot_bgcolor: '#e0f7fa',
        paper_bgcolor: '#e0f7fa'
    };
    Plotly.newPlot('pieChart', pieData, pieLayout);

    const localityIndex = delegations.indexOf(locality);
    const demand = professionData[localityIndex];

    document.getElementById('notes').innerHTML = `
        <strong>Notas sobre la Demanda:</strong> ${notes}<br>
        <strong>Demanda en ${locality}:</strong> ${demand}
    `;
}

// Inicializar gráficos
updateCharts();
