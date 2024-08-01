const delegations = [
    'Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán',
    'Cuajimalpa', 'Cuauhtémoc', 'Gustavo A. Madero', 'Iztacalco',
    'Iztapalapa', 'Magdalena Contreras', 'Miguel Hidalgo', 'Milpa Alta',
    'Tláhuac', 'Tlalpan', 'Venustiano Carranza', 'Xochimilco'
];

const data = {
    'Maestros': [50, 60, 40, 80, 30, 70, 20, 90, 10, 50, 60, 40, 80, 30, 70, 20],
    'Ayudantes de Ventas': [30, 80, 50, 60, 70, 20, 90, 10, 50, 60, 40, 80, 30, 70, 20, 90],
    'Enfermeros': [60, 40, 80, 30, 70, 20, 90, 10, 50, 60, 40, 80, 30, 70, 20, 90],
    'Ingenieros': [70, 20, 90, 10, 50, 60, 40, 80, 30, 70, 20, 90, 10, 50, 60, 40]
};

function updateCharts() {
    const profession = document.getElementById('profession').value;
    const demandData = data[profession];

    // Bar Chart
    const barData = [{
        x: delegations,
        y: demandData,
        type: 'bar'
    }];
    const barLayout = {
        title: `Demanda de ${profession} por Delegación`,
        xaxis: { title: 'Delegaciones' },
        yaxis: { title: 'Demanda' }
    };
    Plotly.newPlot('barChart', barData, barLayout);

    // Pie Chart
    const pieData = [{
        labels: delegations,
        values: demandData,
        type: 'pie'
    }];
    const pieLayout = {
        title: `Distribución de la Demanda de ${profession}`
    };
    Plotly.newPlot('pieChart', pieData, pieLayout);
}

// Initialize charts
updateCharts();
