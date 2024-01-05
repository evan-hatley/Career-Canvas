const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#job-title').value.trim();
    // Status to be added.
    const salary = document.querySelector('#job-salary').value.trim();
    const location = document.querySelector('#job-location').value.trim();
    const notes = document.querySelector('#job-notes').value.trim();

    if (title && salary && location && notes) {
        const response = await fetch(`/api/jobs`, {
            method: 'POST',
            body: JSON.stringify({ title, /* Status to be added, */ salary, location, notes }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/tracker');
        } else {
            alert('Failed to add this job');
        }
    }
};

document
    .querySelector('.new-job-form')
    .addEventListener('submit', newFormHandler);