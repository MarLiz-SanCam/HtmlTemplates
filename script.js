const delegations = [
    'Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán',
    'Cuajimalpa', 'Cuauhtémoc', 'Gustavo A. Madero', 'Iztacalco',
    'Iztapalapa', 'Magdalena Contreras', 'Miguel Hidalgo', 'Milpa Alta',
    'Tláhuac', 'Tlalpan', 'Venustiano Carranza', 'Xochimilco'
];

const data = {
    'Maestros': [0.5, 0.6, 0.4, 0.8, 0.3, 0.7, 0.2, 0.9, 0.1, 0.5, 0.6, 0.4, 0.8, 0.3, 0.7, 0.2],
    'Ayudantes de Ventas': [0.3, 0.8, 0.5, 0.6, 0.7, 0.2, 0.9, 0.1, 0.5, 0.6, 0.4, 0.8, 0.3, 0.7, 0.2, 0.9],
    'Enfermeros': [0.6, 0.4, 0.8, 0.3, 0.7, 0.2, 0.9, 0.1, 0.5, 0.6, 0.4, 0.8, 0.3, 0.7, 0.2, 0.9],
    'Ingenieros': [0.7, 0.2, 0.9, 0.1, 0.5, 0.6, 0.4, 0.8, 0.3, 0.7, 0.2, 0.9, 0.1, 0.5, 0.6, 0.4]
};

function updateHeatmap() {
    const profession = document.getElementById('profession').value;
    const heatmapData = [{
        z: [data[profession].slice(0, 4), data[profession].slice(4, 8), data[profession].slice(8, 12), data[profession].slice(12, 16)],
        x: delegations.slice(0, 4),
        y: delegations.slice(0, 4),
        type: 'heatmap',
        colorscale: 'Hot'
    }];
    
    const layout = {
        title: `Mapa de Calor de la Demanda de ${profession} por Delegación`,
        xaxis: {
            title: 'Delegaciones'
        },
        yaxis: {
            title: 'Delegaciones'
        }
    };

    Plotly.newPlot('heatmap', heatmapData, layout);
}

// Initialize heatmap
updateHeatmap();
