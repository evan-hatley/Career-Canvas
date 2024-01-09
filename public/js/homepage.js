document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('jobApplicationChart');
    let myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Applied', 'Interviewed', 'Offered', 'Declined'],
            datasets: [{
                label: 'Job Application Status',
                data: [0, 0, 0, 0], // Initial data set to zeros
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    document.getElementById('jobStatusForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve values from the form
        const applied = parseInt(document.getElementById('applied').value) || 0;
        const interviewed = parseInt(document.getElementById('interviewed').value) || 0;
        const offered = parseInt(document.getElementById('offered').value) || 0;
        const declined = parseInt(document.getElementById('declined').value) || 0;

        // Update chart data
        myChart.data.datasets[0].data = [applied, interviewed, offered, declined];
        
        // Redraw the chart
        myChart.update();
    });
});
