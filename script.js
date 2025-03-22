// Random data generation function for stocks, bonds, and crypto
function generateRandomData(numPoints) {
    let data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push(Math.random() * 100); // Generate random values between 0 and 100
    }
    return data;
}

// Create the chart
const ctx = document.getElementById('assetChart').getContext('2d');

// Chart.js configuration
const assetChart = new Chart(ctx, {
    type: 'line', // Line chart type
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months as labels
        datasets: [
            {
                label: 'Stocks',
                data: generateRandomData(12), // 12 months of data for stocks
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                borderWidth: 2,
                animation: {
                    duration: 2000, // Animation duration for stocks
                    easing: 'easeInOutBounce',
                }
            },
            {
                label: 'Bonds',
                data: generateRandomData(12), // 12 months of data for bonds
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                borderWidth: 2,
                animation: {
                    duration: 2000, // Animation duration for bonds
                    easing: 'easeInOutBounce',
                }
            },
            {
                label: 'Crypto',
                data: generateRandomData(12), // 12 months of data for crypto
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                borderWidth: 2,
                animation: {
                    duration: 2000, // Animation duration for crypto
                    easing: 'easeInOutBounce',
                }
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 16,
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 5
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14,
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14,
                    },
                    callback: function(value) { return '$' + value.toFixed(2); }
                }
            }
        }
    }
});
