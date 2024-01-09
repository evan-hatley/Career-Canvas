// document.getElementById('jobStatusForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const applied = document.getElementById('applied').value;
//     const interviewed = document.getElementById('interviewed').value;
//     const offered = document.getElementById('offered').value;
//     const declined = document.getElementById('declined').value;

//     updateChart({ applied, interviewed, offered, declined });
// });

// function updateChart(applied, interviews, offers, declines) {
//     const ctx = document.getElementById('jobApplicationChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//             labels: ['Applied', 'Interviews', 'Offers', 'Declines'],
//             datasets: [{
//                 label: 'Job Status',
//                 data: [applied, interviews, offers, declines],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }