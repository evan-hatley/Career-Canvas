const createJob = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#job-title').value.trim();
    const status = document.querySelector('#job-status').value.trim();
    const salary = document.querySelector('#job-salary').value.trim();
    const location = document.querySelector('#job-location').value.trim();
    const notes = document.querySelector('#job-notes').value.trim();

    if (title && status && salary && location && notes) {
        const response = await fetch('/api/jobs', {
            method: 'POST',
            body: JSON.stringify({ title, status, salary, location, notes }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/tracker');
        } else {
            alert('Could not create job');
        }
    }
};

document
    .querySelector('#new-job-form')
    .addEventListener('submit', createJob);