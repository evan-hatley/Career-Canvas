// Edit these into the Views
const addCurrentDate = (status) => {
    const currentDate = new Date().toLocaleDateString('en-US');
    return `${status} - ${currentDate}`;
};

const convertToSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(salary);
};

module.exports = {addCurrentDate, convertToSalary};