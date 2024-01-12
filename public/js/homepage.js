document.addEventListener('DOMContentLoaded', async function () {

    let chartData = [0, 0, 0, 0];
    const ctx = document.getElementById('jobApplicationChart');

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

    // Fetch job status data.
    const fetchJobStatusData = async () => {
        try {
            const response = await fetch('/api/users/status');
            return await response.json();
        } catch (error) {
            console.error('Error fetching job status data:', error);
            throw error;
        }
    };

    // Fetch and update chart data.
    const updateChartData = async () => {
        const data = await fetchJobStatusData();

        console.log(data);

        chartData = Object.values(data);
        myChart.data.datasets[0].data = chartData;

        console.log(chartData);

        myChart.update();
    };

    // Call the function to fetch and update the chart data
    await updateChartData();
});