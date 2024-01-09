// Edit these into the Views
function formatWithCurrentDate(status) {
    const currentDate = new Date().toLocaleDateString('en-US');
    const formattedStatus = status[0].toUpperCase() + status.slice(1).toLowerCase();
    return `${formattedStatus} - ${currentDate}`;
};

function convertToSalary(salary) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(salary);
};

module.exports = { formatWithCurrentDate, convertToSalary };