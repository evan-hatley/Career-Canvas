const jobStatusCount = {
    applied: 0,
    interviewed: 0,
    offer: 0,
    declined: 0
};

function updateChart(chart, statusCount) {
    chart.data.datasets[0].data = [
        statusCount.applied,
        statusCount.interviewed,
        statusCount.offer,
        statusCount.declined
    ];
    chart.update();
}

document.getElementById('newJobForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const jobStatus = document.getElementById('jobStatus').value;
    
    jobStatusCount[jobStatus]++;
    
    updateChart(jobApplicationChart, jobStatusCount);

});

document.addEventListener('DOMContentLoaded', function() {
    const data = {
        labels: ['Applied', 'Interviewed', 'Offer', 'Declined'],
        datasets: [{
            label: 'Job Application Status',
            data: [jobStatusCount.applied, jobStatusCount.interviewed, jobStatusCount.offer, jobStatusCount.declined],
            hoverOffset: 4,
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('jobApplicationChart').getContext('2d');
    const jobApplicationChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            title: {
                display: true,
                text: 'Job Application Status'
            },
        }
    });
});
