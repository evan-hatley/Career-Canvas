document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('jobApplicationChart');
    let chartData = [0, 0, 0, 0];

    const savedData = localStorage.getItem('jobApplicationChartData');
    if (savedData) {
        chartData = JSON.parse(savedData);
    }

    let myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Applied', 'Interviewed', 'Offered', 'Declined'],
            datasets: [{
                label: 'Job Application Status',
                data: chartData,
                borderWidth: 1,
                backgroundColor: ['blue', 'orange', 'green', 'red']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    document.getElementById('jobStatusForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const applied = parseInt(document.getElementById('applied').value) || 0;
        const interviewed = parseInt(document.getElementById('interviewed').value) || 0;
        const offered = parseInt(document.getElementById('offered').value) || 0;
        const declined = parseInt(document.getElementById('declined').value) || 0;

        myChart.data.datasets[0].data = [applied, interviewed, offered, declined];
        myChart.update();

        localStorage.setItem('jobApplicationChartData', JSON.stringify([applied, interviewed, offered, declined]));
    });
});
