const urlArr = document.location.href.split('/');
urlArr.pop();
const id = urlArr.pop();

const updateJob = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#job-title').value.trim();
    const status = document.querySelector('#job-status').value.trim();
    const salary = document.querySelector('#job-salary').value.trim();
    const location = document.querySelector('#job-location').value.trim();
    const notes = document.querySelector('#job-notes').value.trim();

    if (title && status && salary && location && notes) {
        const response = await fetch(`/api/jobs/${id}/update`, {
            method: 'PUT',
            body: JSON.stringify({ title, status, salary, location, notes }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/tracker');
        } else {
            alert('Could not update job');
        }
    }
};

const deleteJob = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/jobs/${id}/delete`, {
        method: 'DELETE',
        body: null,
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/tracker');
    } else {
        alert('Could not delete job');
    }
}

document
    .querySelector('#edit-job-form')
    .addEventListener('submit', updateJob);

document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteJob);